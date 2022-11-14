import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import sock, { SOCKET_BROADCAST_METHODS } from "../config/socket";
import SurveyStudent from "../components/SurveyStudent";
import { useUserContext } from "../context/user";
import { SESSION_PAGE_URLS } from "../components/PageDirectory";
import SessionLayout from "../components/SessionLayout";
import Image from "next/image";
import { useSurveyProgressContext } from "../context/survey-progress";

export default function SessionSurvey1() {
  const router = useRouter();

  const pageURL = "/session-survey-1";
  const pageIdx = SESSION_PAGE_URLS.indexOf(pageURL);

  const { isInstructor } = useUserContext();
  const { survey1Progress, setSurvey1Progress, setSurvey2Progress } = useSurveyProgressContext();
  const userTypeStr = isInstructor ? "Instructor" : "Student";

  // Add new SOCKET_BROADCAST_METHOD to retrieve team survey progress.
  useEffect(() => {
    function broadcastSurveyProgressHandler(parsedData) {
      if (isInstructor) {
        if (parsedData.content[0] === 1) {
          setSurvey1Progress(prevState => {
            return [...prevState, parsedData.content[1]];
          });
        }
        else {
          setSurvey2Progress(prevState => {
            return [...prevState, parsedData.content[1]];
          });
        }
      }
    }
    SOCKET_BROADCAST_METHODS.set("survey_progress", broadcastSurveyProgressHandler);
  }, []);

  // TODO: Move instructor portion to components/SurveyInstructor, for survey 1 and 2
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
            {survey1Progress.map((roomName, key) => (
              <div key={key}>
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
        <SurveyStudent surveyNumber="1" user={userTypeStr} />
      )}
    </SessionLayout>
  );
}
