import * as React from "react";
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

//Initialized socket
var sock = new SockJS("http://localhost:8080/api");

sock.onmessage = function (e) {
  
};

const theme = createTheme();

//Class function starts here
export default function SignUp() {
  const [create, setCreate] = React.useState({
    username: "",
    password: "",
    sessionID: "",
  });

  function saveText(event) {
    const { value, name } = event.target;

    setCreate((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function handleSignIn(event) {
    event.preventDefault();

    var sendobj = {
      request_id: 4870,
      request: "login",
      content: {
        user_type: "admin",
        user_name: create.roomName,
        user_pswd: create.password,
        session_id: create.sessionID,
      },
    };

    sock.send(JSON.stringify(sendobj));

    setCreate({
      username: "",
      password: "",
      sessionID: "",
    });
  }

  function handleCreateSession(event) {
    event.preventDefault();

    var sendobj = {
      request_id: 4871,
      request: "create_session",
      content: {
        user_type: "admin",
        user_name: create.roomName,
        user_pswd: create.password,
        session_id: create.sessionID,
      },
    };

    sock.send(JSON.stringify(sendobj));

    setCreate({
      username: "",
      password: "",
      sessionID: "",
    });
  }

  return (
    <ThemeProvider theme={theme}>
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
              value={create.username}
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
              value={create.password}
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
              value={create.sessionID}
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
                <Link href="/" variant="body2">
                  {"Not an instructor? Click here"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
