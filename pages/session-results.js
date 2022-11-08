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
  var filename = toString(sessionID);

  sock.onmessage = function (e) {
    var parsedData = JSON.parse(e.data);

    if (parsedData.respond_id === 4888 && parsedData.status_code === 200) {
      fetch("http://localhost:8080/downloadFile/534639").then((response) => {
        response.blob().then((blob) => {
          let url = window.URL.createObjectURL(blob);
          let a = document.createElement("a");
          a.href = url;
          a.download = "534639.zip";
          a.click();
        });
        
        window.location.href = response.url;
      });
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
