import React from "react";
import ProgressLink from "./ProgressLink";

function StudentIntroduction(props) {
  return (
    <div className="dashboard" alt="dashboard">
      <h1 style={{ marginBottom: "20px"}}>
        Dashboard
      </h1>
      <ProgressLink ProgressName="Welcome" CurrentPage={props.CurrentPage}/>
      <ProgressLink ProgressName="Survey 1" CurrentPage={props.CurrentPage}/>
      <ProgressLink ProgressName="Survey 2" CurrentPage={props.CurrentPage}/>
    </div>
  );
}

export default StudentIntroduction;
