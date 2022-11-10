import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import sock from "../config/socket";
import SessionLayout from "../components/SessionLayout";
import { SESSION_PAGE_URLS } from "../components/PageDirectory";
import { useUserContext } from "../context/user";

export default function StudentThankYou() {
  const router = useRouter();
  const isFirstSurvey = router.query.surveyNumber === "1";

  const { isInstructor } = useUserContext();

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
    <SessionLayout sessionProgress={router.query.sessionProgress}>
      <Head>
        <title>Thank you!</title>
      </Head>
      <div className="pageThankYou">
        <div className="surveyBox">
          {isFirstSurvey ? (
            <span style={{ fontSize: "25px", fontWeight: "bold" }}>
              Thank you for submitting Survey 1! Please wait for the instrructor
              to take you to the next step.
            </span>
          ) : (
            <span style={{ fontSize: "25px", fontWeight: "bold" }}>
              Thank you for submitting Survey 2! You have now completed the
              session. Please wait for further instructions fromt the
              instructor.
            </span>
          )}
        </div>
      </div>
    </SessionLayout>
  );
}
