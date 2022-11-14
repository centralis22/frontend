import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { SESSION_PAGE_URLS } from "../components/PageDirectory";
import SessionLayout from "../components/SessionLayout";
import { useUserContext } from "../context/user";
import sock, { SOCKET_BROADCAST_METHODS } from "../config/socket";
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
    SOCKET_BROADCAST_METHODS.set("advance_stage", broadcastAdvanceStageHandler);
  }, []);

  // Set sock.onmessage on component first mount.
  // sock.onmessage is global, no need to set on each page.
  // Note, this effect with []-dependency triggers on EACH MOUNT, i.e. after router.push,
  // but NOT on each render.
  useEffect(() => {
    sock.onmessage = function (e) {
      let parsedData = JSON.parse(e.data);
      if (parsedData.hasOwnProperty("broadcast")) {
        let callbackFunc = SOCKET_BROADCAST_METHODS.get(parsedData.broadcast);
        if (callbackFunc !== undefined) {
          callbackFunc(parsedData);
        }
      }
    };
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
