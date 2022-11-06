import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { SESSION_PAGE_URLS } from "../components/PageDirectory";
import SessionLayout from "../components/SessionLayout";
import { useUserContext } from "../context/user";
import sock from "../config/socket";

export default function SessionIntroduction() {
  const router = useRouter();

  const pageURL = "/session-introduction";
  const pageIdx = SESSION_PAGE_URLS.indexOf(pageURL);

  const { sessionID, isInstructor } = useUserContext();

  // Set sock.onmessage effect on component mount.
  useEffect(() => {
    if (!isInstructor) {
      sock.onmessage = function (e) {
        console.log(e.data);
        var parsedData = JSON.parse(e.data);

        if (parsedData.broadcast === "advance_stage") {
          router.push({
            pathname: SESSION_PAGE_URLS[parsedData.content],
            query: { sessionID: sessionID },
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
        <title>Welcome</title>
      </Head>
      <div className="pageImage">
        <Image
          src="/welcome_page.jpg"
          alt="logo"
          height="300px"
          width="1000px"
        />
      </div>
    </SessionLayout>
  );
}
