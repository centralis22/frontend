import React, { useEffect } from 'react';
import { useRouter } from "next/router";
import Head from 'next/head';
import sock from "../config/socket";
import Survey1 from "../components/Survey1";
import { useUserContext } from "../context/user";
import { SESSION_PAGE_URLS } from "../components/PageDirectory";
import SessionLayout from "../components/SessionLayout";

export default function SessionSurvey1() {
  const router = useRouter();

  const pageURL = "/session-survey-1";
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
      }
    }
  }, []);

  return (
    <SessionLayout
      pageID={pageIdx}
      sessionProgress={router.query.sessionProgress}
    >
      <Head>
        <title>Survey 1</title>
      </Head>
      <Survey1 user={userTypeStr} />
    </SessionLayout>
  );
}
