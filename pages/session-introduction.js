import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { SESSION_PAGE_URLS } from "../components/PageDirectory";
import SessionLayout from "../components/SessionLayout";
import { useUserContext } from "../context/user";
import sock, { socketBroadcastMethods } from "../config/socket";
import IntroductionTable from "../components/IntroductionTable";

export default function SessionIntroduction() {
  const router = useRouter();

  const pageURL = "/session-introduction";
  const pageIdx = SESSION_PAGE_URLS.indexOf(pageURL);

  const { sessionID, isInstructor } = useUserContext();

  // Add new SOCKET_BROADCAST_METHOD to push next page.
  useEffect(() => {
    function broadcastAdvanceStageHandler(parsedData) {
      // scope of isInstructor, router ???
      if (!isInstructor) {
        router.push({
          pathname: SESSION_PAGE_URLS[parsedData.content],
          query: { sessionID: sessionID },
        });
      }
    }
    socketBroadcastMethods.set("advance_stage", broadcastAdvanceStageHandler);
  }, []);


  return (
    <SessionLayout
      pageID={pageIdx}
      sessionProgress={router.query.sessionProgress}
    >
      <Head>
        <title>Welcome</title>
      </Head>
      <div className="pageIntroduction">
        <div className="surveyBox">
          <p className="introductionTitle">Centralis Team Exercise: Overview</p>
          <IntroductionTable />
        </div>
        <span style={{ fontSize: "23px", marginTop: "80px" }}>
          Please discuss your roles with your team while you wait for the
          activity to start.
        </span>
      </div>
    </SessionLayout>
  );
}
