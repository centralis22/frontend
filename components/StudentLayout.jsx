import StudentDashboard from './StudentDashboard';
import Banner from "./Banner";

function StudentLayout({ children, sessionID, CurrentPage}) {
  return (
    <div>
      <Banner UserType="Student" sessionID={sessionID} Session={true}/>
      <StudentDashboard CurrentPage={CurrentPage}/>
      <div className="main">{children}</div>
    </div>
  );
}

export default StudentLayout;
