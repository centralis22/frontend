import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import sock from "../config/socket";
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

const theme = createTheme();

var isCorrect = true;

//Class function starts here
export default function StudentSignIn() {
  var router = useRouter();

  sock.open = function (e) {

    console.log("Connection established!");
  };

  sock.onmessage = function (e) {
    var parsedData = JSON.parse(e.data);

    if (parsedData.respond_id === 4869 && parsedData.status_code === 200) {
      
      router.push("/instructorIntroduction");
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
        <title>Centralis Student SignIn</title>
      </Head>
      <Banner UserType="Student" SessionID="" Session={false}/>
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
              {isCorrect ? null : 
                <span className="loginError">
                  Please enter a valid session ID and room name
                </span>
              }
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
                <Link href="/signUp">
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
