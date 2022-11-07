import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import SessionLayout from "../components/SessionLayout";
import sock from "../config/socket";
import { SESSION_PAGE_URLS } from "../components/PageDirectory";

export default function SessionResults() {
  const router = useRouter();

  sock.onmessage = function (e) {
    var parsedData = JSON.parse(e.data);

    if (parsedData.respond_id === 4888 && parsedData.status_code === 200) {
      fetch(parsedData.status_message).then((response) => {
        response.blob().then((blob) => {
          let url = window.URL.createObjectURL(blob);
          let a = document.createElement("a");
          a.href = url;
          //a.download = "employees.json";
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
