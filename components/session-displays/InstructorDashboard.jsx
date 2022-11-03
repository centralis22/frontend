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
        currentIndex={props.currentIndex}
        hyperLink={SESSION_ORDER_URL.at(i)}
        sessionID={props.sessionID}
        LinkName={SESSION_ORDER_NAMES.at(i)}
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
