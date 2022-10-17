import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import InstructorLayout from "../components/InstructorLayout";
import GameNextStepButton from "../components/GameNextStepButton";

export default function InstructorIntroduction() {
  const router = useRouter();

  return (
    <InstructorLayout sessionID={router.query.sessionID} CurrentPage="Welcome">
      <Head>
        <title>Welcome</title>
      </Head>
      <div>Welcome to the welcome page!</div>
      <GameNextStepButton sessionID={router.query.sessionID} PageLink="/instructorSurvey1"/>
    </InstructorLayout>
  );
}
