import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import InstructorLayout from "../components/InstructorLayout";
import GameNextStepButton from "../components/GameNextStepButton";
import instructorPage from "../components/instructorPage";

export default function InstructorSurvey2() {
  const router = useRouter();
  var isCurrentPage = router.query.currentPage === 2;

  return (
    <InstructorLayout sessionID={router.query.sessionID} CurrentPage="Survey 2">
      <Head>
        <title>Survey 2</title>
      </Head>
      <div>Welcome to the survey 2 page!</div>
      <div>
        {isCurrentPage ? (
          <GameNextStepButton
            sessionID={router.query.sessionID}
            PageLink={instructorPage[router.query.currentPage]}
            currentPage={2}
          />
        ) : null}
      </div>
    </InstructorLayout>
  );
}
