import React from "react";
import DashLink from "./DashLink";

function InstructorDashboard(props) {
  return (
    <div className="dashboard" alt="dashboard">
      <h1 style={{ marginBottom: "20px" }}>Dashboard</h1>
      <DashLink
        currentIndex={props.currentIndex}
        hyperLink="/instructorIntroduction"
        sessionID={props.sessionID}
        LinkName="Welcome"
        CurrentPage={props.CurrentPage}
      />
      <DashLink
        currentIndex={props.currentIndex}
        hyperLink="/instructorSurvey1"
        sessionID={props.sessionID}
        LinkName="Survey 1"
        CurrentPage={props.CurrentPage}
      />
      <DashLink
        currentIndex={props.currentIndex}
        hyperLink="/instructorBreakingNews"
        sessionID={props.sessionID}
        LinkName="Breaking News"
        CurrentPage={props.CurrentPage}
      />
      <DashLink
        currentIndex={props.currentIndex}
        hyperLink="/instructorSurvey2"
        sessionID={props.sessionID}
        LinkName="Survey 2"
        CurrentPage={props.CurrentPage}
      />
      <DashLink
        currentIndex={props.currentIndex}
        hyperLink="/instructorResults"
        sessionID={props.sessionID}
        LinkName="Results"
        CurrentPage={props.CurrentPage}
      />
    </div>
  );
}

export default InstructorDashboard;
