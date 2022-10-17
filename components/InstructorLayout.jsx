import InstructorDashboard from "./InstructorDashboard";
import Banner from "./Banner";

function InstructorLayout({ children, sessionID, CurrentPage, currentIndex }) {
  return (
    <div>
      <Banner UserType="Instructor" sessionID={sessionID} Session={true}/>
      <InstructorDashboard sessionID={sessionID} CurrentPage={CurrentPage} currentIndex={currentIndex}/>
      <div className="main">{children}</div>
    </div>
  );
}

export default InstructorLayout;
