import React from 'react';
import { useRouter } from "next/router";
import Head from 'next/head';
import sock from "../config/socket";

import StudentLayout from '../components/StudentLayout';
import studentPage from "../components/studentPage";

export default function StudentSurvey1() {
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
    <StudentLayout CurrentPage="Survey 1">
      <Head>
        <title>Survey 1</title>
      </Head>
      <div>Welcome to the survey 1 page!</div>
    </StudentLayout>
  );
}