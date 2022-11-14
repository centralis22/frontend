import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import sock, { SOCKET_BROADCAST_METHODS } from "../config/socket";
import SessionLayout from "../components/SessionLayout";
import { SESSION_PAGE_URLS } from "../components/PageDirectory";
import { useUserContext } from "../context/user";

export default function StudentBreakingNews() {
  const router = useRouter();

  const pageURL = "/session-breaking-news";
  const pageIdx = SESSION_PAGE_URLS.indexOf(pageURL);

  return (
    <SessionLayout
      pageID={pageIdx}
      sessionProgress={router.query.sessionProgress}
    >
      <Head>
        <title>Breaking News</title>
      </Head>
      <div className="pageBreakingNews">
        <div className="surveyBox">
          <p className="breakingNewsTitle">Breaking News!</p>
          <span
            style={{ fontSize: "25px", fontWeight: "bold", color: "#850000" }}
          >
            Carmina:{" "}
          </span>
          <span style={{ fontSize: "25px", color: "#850000" }}>
            “I have the results of our big A/B tests. This is not working! Our
            click-through rate is one-third of what it would have to be, and in
            the focus group, not a single person was willing to pay $150/month
            for a Butler! On average, they would pay only about $90. When I told
            them that our model couldn't work at that price, one suggested, 'My
            employer would benefit a lot from my using this service - why
            shouldn't they pay for it, or at least some of it?' We should be
            looking at convincing employers to take this on as a perk for their
            employees instead! We picked that focus group carefully to represent
            our target market and should pay a lot of attention to what they
            were saying.”
          </span>
          <br />
          <br />
          <span
            style={{ fontSize: "25px", fontWeight: "bold", color: "#850000" }}
          >
            Angela:{" "}
          </span>
          <span style={{ fontSize: "25px", color: "#850000" }}>
            “You know my friend from the angel group who might be interested in
            investing? Well, he would like Colyn and Amy to come pitch Centralis
            to him this weekend. I was very excited by his interest but he's
            only going to invest if Centralis is a B2B company. He doesn't
            believe that Centralis can be a sustainable business in B2C.
            Especially given Carmina's latest results, I'm beginning to have my
            doubts, too. I would suggest that you think about making a big
            change in your product strategy so B2B becomes the core of your
            pitch. If you do that, my friend is probably 70% likely to invest at
            least $100,000 in the company.”
          </span>
        </div>
      </div>
    </SessionLayout>
  );
}
