import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import sock from "../config/socket";
import Survey from "../components/Survey";
import { useUserContext } from "../context/user";
import { SESSION_PAGE_URLS } from "../components/PageDirectory";
import SessionLayout from "../components/SessionLayout";
import Image from "next/image";

const sessionStatusArray = [];

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
      };
    }
  }, [isInstructor, router]);

  return (
    <SessionLayout
      pageID={pageIdx}
      sessionProgress={router.query.sessionProgress}
    >
      <Head>
        <title>Survey 1</title>
      </Head>
      {isInstructor ? (
        <div className="pageInstructorSurvey">
          <div className="sessionStatusBox">
            <p className="sessionStatusBoxTitle">Survey 1 Submission Status</p>
            {sessionStatusArray.map((roomName) => (
              <div>
                <span>Room {roomName} has submitted Survey 1!</span>
                <br />
              </div>
            ))}
          </div>
          <div>
            <Image
              src="/mini-survey1.png"
              alt="logo"
              height="300px"
              width="400px"
            />
          </div>
        </div>
      ) : (
        <Survey surveyNumber="1" user={userTypeStr} />
      )}
    </SessionLayout>
  );
}
