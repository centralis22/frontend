import React from 'react';
import { useRouter } from "next/router";
import Head from 'next/head';

import InstructorLayout from '../components/InstructorLayout';
import GameNextStepButton from "../components/GameNextStepButton";

export default function InstructorSurvey2() {
  const router = useRouter();

  return (
    <InstructorLayout sessionID={router.query.sessionID} CurrentPage="Survey 2">
      <Head>
        <title>Survey 2</title>
      </Head>
      <div>Welcome to the survey 2 page!</div>
      <GameNextStepButton sessionID={router.query.sessionID} PageLink="/instructorResults"/>
    </InstructorLayout>
  );
}