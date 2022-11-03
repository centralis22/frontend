import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

import InstructorLayout from "../components/InstructorLayout";
import GameNextStepButton from "../components/GameNextStepButton";

export default function InstructorIntroduction() {
  const router = useRouter();
  var isCurrentPage = router.query.currentIndex === "0";

  return (
    <InstructorLayout
      sessionID={router.query.sessionID}
      currentIndex={router.query.currentIndex}
      CurrentPage="Welcome"
    >
      <Head>
        <title>Welcome</title>
      </Head>
      <div className="pageImage">
        <Image
          src="/welcome_page.jpg"
          alt="logo"
          height="300px"
          width="1000px"
        />
      </div>
      <div>
        {isCurrentPage ? (
          <GameNextStepButton
            sessionID={router.query.sessionID}
            PageLink="/instructorSurvey1"
            currentIndex="1"
          />
        ) : null}
      </div>
    </InstructorLayout>
  );
}
