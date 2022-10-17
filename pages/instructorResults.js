import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import InstructorLayout from "../components/InstructorLayout";
import GameNextStepButton from "../components/GameNextStepButton";

export default function InstructorResults() {
  const router = useRouter();

  return (
    <InstructorLayout sessionID={router.query.sessionID} CurrentPage="Results">
      <Head>
        <title>Results</title>
      </Head>
      <div>Welcome to the results page!</div>
    </InstructorLayout>
  );
}
