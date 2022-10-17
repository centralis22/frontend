import React from 'react';
import { useRouter } from "next/router";
import Head from 'next/head';
import sock from "../config/socket";

import StudentLayout from '../components/StudentLayout';
import studentPage from "../components/studentPage";

export default function StudentSurvey2() {
  const router = useRouter();

  sock.onmessage = function (e) {
    var parsedData = JSON.parse(e.data);

    if (parsedData.broadcast === "advance_stage") {
      router.push({
        pathname: studentPage[parsedData.content],
      });
    }
  }

  return (
    <StudentLayout sessionID={router.query.sessionID} CurrentPage="Survey 2">
      <Head>
        <title>Survey 2</title>
      </Head>
      <div>Welcome to the survey 2 page!</div>
    </StudentLayout>
  );
}