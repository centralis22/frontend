import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import sock, {
  generateSocketRequestID,
  getRequestType,
  socketBroadcastMethods,
  socketRespondMethods
} from "../config/socket";
import Banner from "../components/Banner";
import { useUserContext } from "../context/user.js";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function StudentLogin() {
  let router = useRouter();

  /**
   * User's global credentials. For use in multiple sections across app.
   */
  const { setSessionID, setInstructor, setLoggedIn } = useUserContext();

  // Context get/set should happen after mount, not on render.
  // Wrap in useEffect.
  useEffect(() => {
    setInstructor(false);
  }, []);

  /**
   * Student's login status. Displays an error message on false.
   */
  const [isLoginSuccess, setLoginSuccess] = React.useState(true);
  /**
   * Student's credentials. Contains session ID and room name.
   */
  const [studentCredentials, setStudentCredentials] = React.useState({
    sessionID: "",
    roomName: "",
  });


  // Adds respond handler for student login.
  useEffect(() => {
    function respondStudentLoginHandler(parsedData) {
      if (parsedData.status_code === 200) {
        setSessionID(studentCredentials.sessionID);
        setLoggedIn(true);
        setLoginSuccess(true);

        router.push({
          pathname: "/session-introduction",
          query: { sessionID: studentCredentials.sessionID },
        });
      }
      else {
        setLoginSuccess(false);
        setStudentCredentials({
          sessionID: "",
          roomName: "",
        });
      }
    }
    socketRespondMethods.set("login", respondStudentLoginHandler);

    // >>> If you don't understand, read this for return value.
    // https://dmitripavlutin.com/react-useeffect-explanation/
    return () => {
      // Remove student login on component dismount.
      socketRespondMethods.delete("login");
    }
    // The reference only tracks the value at the time of function definition.
    // Dependency is required to regenerate function and reference.
  }, [studentCredentials]);


  // Set sock.onmessage on component first mount.
  // sock.onmessage is global, no need to set on each page.
  // Note, this effect with []-dependency triggers on EACH MOUNT, i.e. after router.push,
  // but NOT on each render.
  /**
   * SockJS communication.
   */
  useEffect(() => {
    sock.onmessage = function (e) {
      let parsedData = JSON.parse(e.data);
      if (parsedData.hasOwnProperty("respond_id")) {
        let requestType = getRequestType(parsedData.respond_id);
        let callbackFunc = socketRespondMethods.get(requestType);
        if (callbackFunc !== undefined) {
          callbackFunc(parsedData);
        }
      }
      else if (parsedData.hasOwnProperty("broadcast")) {
        let callbackFunc = socketBroadcastMethods.get(parsedData.broadcast);
        if (callbackFunc !== undefined) {
          callbackFunc(parsedData);
        }
      }
    };
  }, []);

  /**
   * MUI TextField save content.
   */
  function saveText(event) {
    const { value, name } = event.target;

    setStudentCredentials((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  /**
   * Student on click join room.
   */
  function handleJoinRoom(event) {
    event.preventDefault();
    let sendobj = {
      request_id: generateSocketRequestID("login"),
      request: "login",
      content: {
        user_type: "student",
        user_name: studentCredentials.roomName,
        user_pswd: "",
        session_id: studentCredentials.sessionID,
      },
    };

    sock.send(JSON.stringify(sendobj));

    // TODO: Why on earth would you want to clear this value here???
    /*    setStudentCredentials({
      sessionID: "",
      roomName: "",
    });*/
  }

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Centralis Student SignIn</title>
      </Head>
      <Banner />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h1" fontWeight="bold">
            Centralis
          </Typography>
          <Typography component="h1" variant="h4" color="#850000">
            USC Marshall ELC
          </Typography>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Join with a Session ID!
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="sessionID"
              label="Session ID"
              name="sessionID"
              value={studentCredentials.sessionID}
              onChange={saveText}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="roomName"
              name="roomName"
              label="Room Name"
              type="roomName"
              value={studentCredentials.roomName}
              onChange={saveText}
            />
            <div>
              {isLoginSuccess ? null : (
                <span className="loginError">
                  Please enter a valid session ID and room name
                </span>
              )}
            </div>
            <Button
              onClick={handleJoinRoom}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Join Room
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/instructor-login">
                  {"Not a student? Click here"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
