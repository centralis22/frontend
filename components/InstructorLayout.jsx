import Dashboard from "./InstructorDashboard";
import Banner from "./Banner";

function InstructorLayout({ children, sessionID, CurrentPage }) {
  return (
    <div>
      <Banner UserType="Instructor" sessionID={sessionID} Session={true}/>
      <Dashboard CurrentPage={CurrentPage}/>
      <div className="main">{children}</div>
    </div>
  );
}

export default InstructorLayout;
