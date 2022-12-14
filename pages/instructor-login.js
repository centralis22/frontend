import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import sock, { generateSocketRequestID, socketRespondMethods } from "../config/socket";
import Banner from "../components/Banner";

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
import { useUserContext } from "../context/user";

const theme = createTheme();

// TODO: Add similar error message display for instructor.
//Class function starts here
export default function InstructorLogin() {
  var router = useRouter();

  /**
   * User's global credentials. For use in multiple sections across app.
   */
  const { setSessionID, setInstructor, setLoggedIn } = useUserContext();

  useEffect(() => {
    setInstructor(true);
  }, []);

  /**
   * Student's credentials. Contains session ID and room name.
   */
  const [instructorCredentials, setInstructorCredentials] = React.useState({
    username: "",
    password: "",
    sessionID: "",
  });

  // Adds respond handler for instructor login and create session.
  useEffect(() => {
    function errCredential403() {
      alert("Wrong login credentials given, please try again.");
      setInstructorCredentials({
        username: "",
        password: "",
        sessionID: "",
      });
    }

    function respondInstructorLoginHandler(parsedData) {
      // Success
      if (parsedData.status_code === 200) {
        setSessionID(instructorCredentials.sessionID);
        setLoggedIn(true);
        router.push({
          pathname: "/session-introduction",
          query: { sessionID: instructorCredentials.sessionID, sessionProgress: 0 },
        });
      }
      else if (parsedData.status_code === 400) {
        alert("Joined a session that does not exist.");
        setInstructorCredentials({
          username: "",
          password: "",
          sessionID: "",
        });
      }
      else if (parsedData.status_code === 403) {
        errCredential403();
      }
      else {
        alert("Unknown error.");
      }
    }

    function respondCreateSessionHandler(parsedData) {
      if (parsedData.status_code === 200) {
        //Push user to the newly created random session
        alert("Your new session ID is: " + parsedData.content);
        setSessionID(parsedData.content)
        setLoggedIn(true);
        router.push({
          pathname: "/session-introduction",
          query: { sessionID: parsedData.content, sessionProgress: 0 },
        });
      }
      else if (parsedData.status_code === 403) {
        errCredential403();
      }
      else {
        alert("Unknown error.");
      }
    }

    socketRespondMethods.set("login", respondInstructorLoginHandler);
    socketRespondMethods.set("create_session", respondCreateSessionHandler);

    return () => {
      socketRespondMethods.delete("login");
      socketRespondMethods.delete("create_session");
    }
  }, [instructorCredentials]);


  function saveText(event) {
    const { value, name } = event.target;

    setInstructorCredentials((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function handleSignIn(event) {
    event.preventDefault();

    let sendobj = {
      request_id: generateSocketRequestID("login"),
      request: "login",
      content: {
        user_type: "admin",
        user_name: instructorCredentials.username,
        user_pswd: instructorCredentials.password,
        session_id: instructorCredentials.sessionID,
      },
    };

    sock.send(JSON.stringify(sendobj));
  }

  /**
   * Instructor onClick create_session.
   */
  function handleCreateSession(event) {
    event.preventDefault();

    let sendobj = {
      request_id: generateSocketRequestID("create_session"),
      request: "create_session",
      content: {
        user_type: "admin",
        user_name: instructorCredentials.username,
        user_pswd: instructorCredentials.password,
        session_id: instructorCredentials.sessionID,
      },
    };

    sock.send(JSON.stringify(sendobj));
  }

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Centralis Instructor SignIn</title>
      </Head>
      <Banner />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h1" fontWeight={"bold"}>
            Centralis
          </Typography>
          <Typography component="h1" variant="h4" color="#850000">
            USC Marshall ELC
          </Typography>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Instructor Sign In
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="uusername"
              label="Username"
              name="username"
              value={instructorCredentials.username}
              onChange={saveText}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={instructorCredentials.password}
              onChange={saveText}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="sessionID"
              name="sessionID"
              label="Session ID"
              type="sessionID"
              value={instructorCredentials.sessionID}
              onChange={saveText}
            />
            <Button
              onClick={handleSignIn}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 0 }}
            >
              Sign In
            </Button>
            <Button
              onClick={handleCreateSession}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
            >
              Create Session
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/">{"Not an instructor? Click here"}</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
