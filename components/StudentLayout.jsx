import StudentDashboard from './StudentDashboard';
import Banner from "./Banner";

function StudentLayout({ children, SessionID, CurrentPage}) {
  return (
    <div>
      <Banner UserType="Student" SessionID={SessionID} Session={true}/>
      <StudentDashboard CurrentPage={CurrentPage}/>
      <div className="main">{children}</div>
    </div>
  );
}

export default StudentLayout;
