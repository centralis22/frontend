import React from "react";
import { SESSION_PAGE_NAMES, SESSION_PAGE_URLS } from "./PageDirectory";
import SDashLink from "./SDashLink";

/**
 * Session Dashboard. Displayed only to instructors.
 *
 * @param sessionID
 * @param pageID
 * @param sessionProgress
 * @returns {JSX.Element}
 */
function SInstructorDashboard({ sessionID, pageID, sessionProgress }) {

  // Dynamically generate DashLinks
  const dashLinks = [];
  for (let pageIdx = 0; pageIdx < SESSION_PAGE_URLS.length; pageIdx++) {

    // Special effect for dashboard item matching page.
    const isPageEQProgress = pageIdx === pageID;

    dashLinks.push(
      <SDashLink
        key={pageIdx}
        pageLink={SESSION_PAGE_URLS.at(pageIdx)}
        pageName={SESSION_PAGE_NAMES.at(pageIdx)}
        pageMatch={isPageEQProgress}
        sessionID={sessionID}
        sessionProgress={sessionProgress}
      />)
  }

  return (
    <div className="dashboard" alt="dashboard">
      <h1 style={{ marginBottom: "20px" }}>Dashboard</h1>
      {dashLinks}
    </div>
  );
}

export default SInstructorDashboard;
