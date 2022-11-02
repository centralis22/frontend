import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import sock from "../config/socket";
import Image from "next/image";

import StudentLayout from "../components/StudentLayout";
import studentPage from "../components/studentPage";

export default function StudentIntroduction() {
  const router = useRouter();

  sock.onmessage = function (e) {
    var parsedData = JSON.parse(e.data);

    if (parsedData.broadcast === "advance_stage") {
      router.push({
        pathname: studentPage[parsedData.content],
        query: { sessionID: router.query.sessionID },
      });
    }
  };

  return (
    <StudentLayout sessionID={router.query.sessionID} CurrentPage="Welcome">
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
    </StudentLayout>
  );
}
