import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import SessionLayout from "../components/SessionLayout";
import { SESSION_PAGE_URLS } from "../components/PageDirectory";

export default function SessionResults() {
  const router = useRouter();

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
      <div>Welcome to the results page!</div>
    </SessionLayout>
  );
}
