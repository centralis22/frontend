import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import sock, { SOCKET_BROADCAST_METHODS } from "../config/socket";
import SurveyStudent from "../components/SurveyStudent";
import { SESSION_PAGE_URLS } from "../components/PageDirectory";
import { useUserContext } from "../context/user";
import SessionLayout from "../components/SessionLayout";
import Image from "next/image";
import { useSurveyProgressContext } from "../context/survey-progress";

export default function SessionSurvey2() {
  const router = useRouter();

  const pageURL = "/session-survey-2";
  const pageIdx = SESSION_PAGE_URLS.indexOf(pageURL);

  const { isInstructor } = useUserContext();
  const { survey2Progress } = useSurveyProgressContext();
  const userTypeStr = isInstructor ? "Instructor" : "Student";

  return (
    <SessionLayout
      pageID={pageIdx}
      sessionProgress={router.query.sessionProgress}
    >
      <Head>
        <title>Survey 2</title>
      </Head>
      {isInstructor ? (
        <div className="pageInstructorSurvey">
          <div className="sessionStatusBox">
            <p className="sessionStatusBoxTitle">Survey 2 Submission Status</p>
            {survey2Progress.map((roomName) => (
              <span>Room {roomName} has submitted Survey 2!</span>
            ))}
          </div>
          <div>
            <Image
              src="/mini-survey2.png"
              alt="logo"
              height="300px"
              width="400px"
            />
          </div>
        </div>
      ) : (
        <SurveyStudent surveyNumber="2" user={userTypeStr} />
      )}
    </SessionLayout>
  );
}
