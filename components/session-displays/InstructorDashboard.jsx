import React from "react";
import DashLink from "./DashLink";
import { SESSION_ORDER_URL, SESSION_ORDER_NAMES } from "../PageDirectory";

function InstructorDashboard(props) {

  /**
   * Individual links in Dashboard, dynamically generated.
   */
  const dashboardLinks = [];
  for (let i = 0; i < SESSION_ORDER_URL.length; i++) {
    dashboardLinks.push(
      <DashLink
        key={i}
        hyperLink={SESSION_ORDER_URL.at(i)}
        pageName={SESSION_ORDER_NAMES.at(i)}
        currentIndex={props.currentIndex}
        sessionID={props.sessionID}
        CurrentPage={props.CurrentPage}
      />)
  }

  return (
    <div className="dashboard" alt="dashboard">
      <h1 style={{ marginBottom: "20px" }}>Dashboard</h1>
      {dashboardLinks}
    </div>
  );
}

export default InstructorDashboard;
