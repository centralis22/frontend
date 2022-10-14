import Dashboard from "./InstructorDashboard";
import Banner from "./Banner";

function StudentLayout({ children, SessionID }) {
  return (
    <div>
      <Banner UserType="Student" SessionID={SessionID} Session={true}/>
      <Dashboard/>
      <div className="main">{children}</div>
    </div>
  );
}

export default StudentLayout;
