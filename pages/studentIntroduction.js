import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import StudentLayout from "../components/StudentLayout";

export default function StudentIntroduction() {
  const router = useRouter();

  return (
    <StudentLayout sessionID={router.query.sessionID} CurrentPage="Welcome">
      <Head>
        <title>Welcome</title>
      </Head>
      <div>Welcome to the welcome page!</div>
    </StudentLayout>
  );
}