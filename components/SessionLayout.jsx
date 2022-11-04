import { useUserContext } from "../context/user";
import InstructorDashboard from "./session-displays/InstructorDashboard";
import Banner from "./Banner";
import React from "react";
import GameNextStepButton from "./GameNextStepButton";

function SStudentLayout({ children }) {
  return (
    <div>
      <Banner />
      <div className="studentMain">{children}</div>
    </div>
  );
}

function SInstructorLayout({ children, CurrentPage, currentIndex }) {

  const { sessionID } = useUserContext();

  return (
    <div>
      <Banner />
      <InstructorDashboard sessionID={sessionID} CurrentPage={CurrentPage} currentIndex={currentIndex}/>
      <div className="main">{children}</div>
      <GameNextStepButton
        sessionID={sessionID}
        PageLink="/instructorSurvey1"
        currentIndex={currentIndex}
      />
    </div>
  );
}

/**
 * Generic layout for sessions.
 */
function SessionLayout({ children }) {

  const { isInstructor } = useUserContext();

  return (
    <div>
      {isInstructor
        ? <SInstructorLayout> {children} </SInstructorLayout>
        : <SStudentLayout> {children} </SStudentLayout>}
    </div>
  );
}

export default SessionLayout;
