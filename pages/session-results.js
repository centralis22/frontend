import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import SessionLayout from "../components/SessionLayout";
import sock from "../config/socket";
import { SESSION_PAGE_URLS } from "../components/PageDirectory";
import { useUserContext } from "../context/user";

export default function SessionResults() {
  const router = useRouter();

  const { sessionID } = useUserContext();

  sock.onmessage = function (e) {
    var parsedData = JSON.parse(e.data);

    if (parsedData.respond_id === 4888 && parsedData.status_code === 200) {
      window.location.href = 'http://localhost:8080/downloadFile/' + sessionID;
    }
  };

  function handleDownload(event) {
    event.preventDefault();

    var sendobj = {
      request_id: 4888,
      request: "download_results",
    };

    sock.send(JSON.stringify(sendobj));
  }

  const pageURL = "/session-results";
  const pageIdx = SESSION_PAGE_URLS.indexOf(pageURL);

  return (
    <SessionLayout
      pageID={pageIdx}
      sessionProgress={router.query.sessionProgress}
    >
      <Head>
        <title>Results</title>
      </Head>
      <button className="resultsDownloadButton" onClick={handleDownload}>
        Download Results
      </button>
    </SessionLayout>
  );
}
