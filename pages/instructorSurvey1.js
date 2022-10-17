import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import InstructorLayout from "../components/InstructorLayout";
import GameNextStepButton from "../components/GameNextStepButton";

export default function InstructorSurvey1() {
  const router = useRouter();

  return (
    <InstructorLayout sessionID={router.query.sessionID} CurrentPage="Survey 1">
      <Head>
        <title>Survey 1</title>
      </Head>
      <div>Welcome to the survey 1 page!</div>
      <GameNextStepButton sessionID={router.query.sessionID} PageLink="/instructorSurvey2"/>
    </InstructorLayout>
  );
}
