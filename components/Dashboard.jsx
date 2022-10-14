import React from "react";
import DashLink from "./DashLink";

function Dashboard(props) {
  return (
    <div className="dashboard" alt="dashboard">
      <h1 style={{ marginBottom: "20px"}}>
        Dashboard
      </h1>
      <DashLink hyperLink="/introduction" LinkName="Welcome" CurrentPage={props.CurrentPage}/>
      <DashLink hyperLink="/survey1" LinkName="Survey 1" CurrentPage={props.CurrentPage}/>
      <DashLink hyperLink="/survey2" LinkName="Survey 2" CurrentPage={props.CurrentPage}/>
      <DashLink hyperLink="/results" LinkName="Results" CurrentPage={props.CurrentPage}/>
    </div>
  );
}

export default Dashboard;
