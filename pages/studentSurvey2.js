import React from 'react';
import { useRouter } from "next/router";
import Head from 'next/head';
import sock from "../config/socket";
import Survey1 from "../components/Survey1";

import StudentLayout from '../components/StudentLayout';
import studentPage from "../components/studentPage";

export default function StudentSurvey2() {
  const router = useRouter();

  sock.onmessage = function (e) {
    var parsedData = JSON.parse(e.data);

    if (parsedData.broadcast === "advance_stage") {
      router.push({
        pathname: studentPage[parsedData.content],
        query: { sessionID: router.query.sessionID },
      });
    }
  }

  return (
    <StudentLayout sessionID={router.query.sessionID} CurrentPage="Survey 2">
      <Head>
        <title>Survey 2</title>
      </Head>
      < Survey1 user="Student"/>
    </StudentLayout>
  );
}