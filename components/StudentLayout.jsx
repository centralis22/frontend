import Banner from "./Banner";

function StudentLayout({ children, sessionID, CurrentPage}) {
  return (
    <div>
      <Banner UserType="Student" sessionID={sessionID} Session={true}/>
      <div className="main">{children}</div>
    </div>
  );
}

export default StudentLayout;
