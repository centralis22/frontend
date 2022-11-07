import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function IntroductionTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                border: 1,
                borderColor: "white",
                bgcolor: "#850000",
                fontSize: "18px",
                fontColor: "white",
                color: "white",
              }}
              align="center"
            >
              PREPARE
            </TableCell>
            <TableCell
              sx={{
                border: 1,
                borderColor: "white",
                bgcolor: "#850000",
                fontSize: "18px",
                fontColor: "white",
                color: "white",
              }}
              align="center"
            >
              EXERCISE
            </TableCell>
            <TableCell
              sx={{
                border: 1,
                borderColor: "white",
                bgcolor: "#850000",
                fontSize: "18px",
                fontColor: "white",
                color: "white",
              }}
              align="center"
            >
              DEBRIEF
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell
              sx={{ border: 1, fontSize: "18px", bgcolor: "#f5f5f5" }}
              align="left"
            >
              <ul>
                <li>Read case (Class handout)</li>
                <li>Read role instructions (email)</li>
              </ul>
            </TableCell>
            <TableCell
              sx={{ border: 1, fontSize: "18px", bgcolor: "#f5f5f5" }}
              align="left"
            >
              <ul>
                <li>Be on time (or else you might become an observer ☺)</li>
                <li>Decisions, Round1 + Poll</li>
                <li>Decisions, Round2 + Poll</li>
              </ul>
            </TableCell>
            <TableCell
              sx={{ border: 1, fontSize: "18px", bgcolor: "#f5f5f5" }}
              align="left"
            >
              <ul>
                <li>Debrief the activity with your team</li>
              </ul>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default IntroductionTable;
