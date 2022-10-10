import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import * as SockJS from "sockjs-client";

const theme = createTheme();

var sock = new SockJS("http://localhost:8080/api");

//Class function starts here
export default function SignIn() {
  var router = useRouter();
  var isCorrect = true;

  sock.onmessage = function (e) {
    var parsedData = JSON.parse(e.data);

    if (parsedData.respond_id === 4869 && parsedData.status_code === 200) {
      router.push("/introduction");
    } else {
      alert("Login failed");
      isCorrect = false;
    }
  };

  const [create, setCreate] = React.useState({
    sessionID: "",
    roomName: "",
  });

  function saveText(event) {
    const { value, name } = event.target;

    setCreate((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  //When Join Button clicked
  function handleJoinRoom(event) {
    event.preventDefault();

    var sendobj = {
      request_id: 4869,
      request: "login",
      content: {
        user_type: "student",
        user_name: create.roomName,
        user_pswd: "",
        session_id: create.sessionID,
      },
    };

    sock.send(JSON.stringify(sendobj));

    setCreate({
      sessionID: "",
      roomName: "",
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Centralis</title>
      </Head>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
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
              value={create.sessionID}
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
              value={create.roomName}
              onChange={saveText}
            />
            <div>
              {isCorrect ? null : (
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
                <Link href="/signUp" variant="body2">
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
