import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import sock from "../config/socket";
import Survey from "../components/Survey";
import { SESSION_PAGE_URLS } from "../components/PageDirectory";
import { useUserContext } from "../context/user";
import SessionLayout from "../components/SessionLayout";

export default function SessionSurvey2() {
  const router = useRouter();

  const pageURL = "/session-survey-2";
  const pageIdx = SESSION_PAGE_URLS.indexOf(pageURL);

  const { isInstructor } = useUserContext();
  const userTypeStr = isInstructor ? "Instructor" : "Student";

  useEffect(() => {
    if (!isInstructor) {
      sock.onmessage = function (e) {
        var parsedData = JSON.parse(e.data);

        if (parsedData.broadcast === "advance_stage") {
          router.push({
            pathname: SESSION_PAGE_URLS[parsedData.content],
            query: { sessionID: router.query.sessionID },
          });
        }
      };
    }
  }, []);

  return (
    <SessionLayout
      pageID={pageIdx}
      sessionProgress={router.query.sessionProgress}
    >
      <Head>
        <title>Survey 2</title>
      </Head>
      <Survey surveyNumber="2" user={userTypeStr} />
    </SessionLayout>
  );
}
