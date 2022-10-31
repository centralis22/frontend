import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

import InstructorLayout from "../components/InstructorLayout";
import GameNextStepButton from "../components/GameNextStepButton";

export default function InstructorBreakingNews() {
  const router = useRouter();
  var isCurrentPage = router.query.currentIndex === "2";

  return (
    <InstructorLayout
      sessionID={router.query.sessionID}
      currentIndex={router.query.currentIndex}
      CurrentPage="Breaking News"
    >
      <Head>
        <title>Breaking News</title>
      </Head>
      <div className="pageImage">
        <Image
          src="/breaking_news.jpg"
          alt="breakingNews"
          height="600px"
          width="550px"
        />
      </div>
      <div>
        {isCurrentPage ? (
          <GameNextStepButton
            sessionID={router.query.sessionID}
            PageLink="/instructorSurvey2"
            currentIndex="3"
          />
        ) : null}
      </div>
    </InstructorLayout>
  );
}
