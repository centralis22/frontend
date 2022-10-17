import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import InstructorLayout from "../components/InstructorLayout";
import GameNextStepButton from "../components/GameNextStepButton";

export default function InstructorSurvey1() {
  const router = useRouter();
  var isCurrentPage = router.query.currentIndex === "1";

  return (
    <InstructorLayout sessionID={router.query.sessionID} CurrentPage="Survey 1">
      <Head>
        <title>Survey 1</title>
      </Head>
      <div>Welcome to the survey 1 page!</div>
      <div>
        {isCurrentPage ? (
          <GameNextStepButton
            sessionID={router.query.sessionID}
            PageLink="/instructorSurvey2"
            currentIndex="2"
          />
        ) : null}
      </div>
    </InstructorLayout>
  );
}
