import { useUserContext } from "../context/user";
import Banner from "./Banner";
import React from "react";
import SInstructorDashboard from "./SInstructorDashboard";
import { useRouter } from "next/router";
import SNextStepButton from "./SNextStepButton";
import { SESSION_PAGE_URLS } from "./PageDirectory";

/**
 * Generic layout for students.
 *
 * @param children
 * @returns {JSX.Element}
 */
function SStudentLayout({ children }) {
  return (
    <div>
      <Banner />
      <div className="studentMain">{children}</div>
    </div>
  );
}

/**
 * Generic layout for instructors.
 */
function SInstructorLayout({ children, pageID, sessionProgress }) {

  const { sessionID } = useUserContext();

  // Only display <SNextStepButton> for page matching session progress,
  // AND if page is not the last page.
  let hasNextStep = false;
  if (pageID === sessionProgress
    && pageID !== SESSION_PAGE_URLS.length - 1) {
    hasNextStep = true;
  }

  return (
    <div>
      <Banner />
      <SInstructorDashboard
        sessionID={sessionID}
        pageID={pageID}
        sessionProgress={sessionProgress}
      />
      <div className="main">{children}</div>
      {hasNextStep
        ?
          <SNextStepButton
            sessionID={sessionID}
            pageLink={SESSION_PAGE_URLS.at(sessionProgress + 1)}
            sessionProgress={sessionProgress}
          />
        :
          null}
    </div>
  );
}

/**
 * Generic layout for all session webpages.
 * Chooses a sub-layout depending on the user type.
 *
 * @param children
 * @param pageID Webpage's unique ID.
 *  The webpage should set its ID according to "components/PageDirectory.js",
 *  when rendering <SessionLayout>.
 * @param sessionProgress Session's progression through the simulation.
 *  The value represents the webpage that should be displayed to the students.
 *  The value is incremented by instructors.
 * @returns {JSX.Element}
 */
function SessionLayout({ children, pageID, sessionProgress }) {

  const router = useRouter();

  const { isInstructor, setInstructor } = useUserContext();
  pageID = Number(pageID);
  sessionProgress = Number(sessionProgress);

  // For debugging instructor view.
/*  if (Boolean(router.query.isInstructor) === true) {
    setInstructor(true);
  }*/

  return (
    <div>
      {isInstructor
        ?
          <SInstructorLayout
            pageID={pageID}
            sessionProgress={sessionProgress}>
              {children}
          </SInstructorLayout>
        :
          <SStudentLayout>
            {children}
          </SStudentLayout>}
    </div>
  );
}

export default SessionLayout;
