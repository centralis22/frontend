import React from "react";
import Head from "next/head";
import InstructorLayout from "../components/InstructorLayout";

export default function InstructorResults() {
  return (
    <InstructorLayout CurrentPage="Results">
      <Head>
        <title>Results</title>
      </Head>
      <div>Welcome to the results page!</div>
    </InstructorLayout>
  );
}
