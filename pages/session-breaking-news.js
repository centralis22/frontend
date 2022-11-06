import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import sock from "../config/socket";
import Image from "next/image";
import SessionLayout from "../components/SessionLayout";
import { SESSION_PAGE_URLS } from "../components/PageDirectory";
import { useUserContext } from "../context/user";

export default function StudentBreakingNews() {
  const router = useRouter();

  const pageURL = "/session-breaking-news";
  const pageIdx = SESSION_PAGE_URLS.indexOf(pageURL);

  const { sessionID, isInstructor } = useUserContext();

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
        <title>Breaking News</title>
      </Head>
      <div className="pageImage">
        <Image
          src="/breaking_news.jpg"
          alt="logo"
          height="600px"
          width="550px"
        />
      </div>
    </SessionLayout>
  );
}
