import InstructorDashboard from "./InstructorDashboard";
import Banner from "./Banner";

function InstructorLayout({ children, sessionID, CurrentPage }) {
  return (
    <div>
      <Banner UserType="Instructor" sessionID={sessionID} Session={true}/>
      <InstructorDashboard CurrentPage={CurrentPage}/>
      <div className="main">{children}</div>
    </div>
  );
}

export default InstructorLayout;
