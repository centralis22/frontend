import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import InstructorLayout from "../components/InstructorLayout";
import GameNextStepButton from "../components/GameNextStepButton";
import instructorPage from "../components/instructorPage";

export default function InstructorIntroduction() {
  const router = useRouter();
  var isCurrentPage = router.query.currentIndex === "0";

  return (
    <InstructorLayout sessionID={router.query.sessionID} CurrentPage="Welcome">
      <Head>
        <title>Welcome</title>
      </Head>
      <div>Welcome to the welcome page!</div>
      <div>
        {isCurrentPage ? (
          <GameNextStepButton
            sessionID={router.query.sessionID}
            PageLink={instructorPage[router.query.currentIndex + 1]}
            currentIndex={1}
          />
        ) : null}
      </div>
    </InstructorLayout>
  );
}
