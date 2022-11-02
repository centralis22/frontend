import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

function Banner(props) {
  var isSession = props.Session;
  const router = useRouter();

  function handleLogout() {
    
    if (props.UserType === "Student") {
      
      router.push("/studentLogin");
    } else {
      
      router.push("/instructor-login");
    }
  }

  return (
    <nav className="NavBar">
      <div className="USCLogo">
        <Image src="/usc-logo.png" alt="logo" height="55px" width="55px" />
      </div>
      <span className="BannerTitle">Centralis {props.UserType}</span>
      <div>
        {isSession ? (
          <p className="SessionNumber">Session #: {props.sessionID}</p>
        ) : null}
      </div>
      <div className="LogoutButtonDiv">
        {isSession ? <button className="LogoutButton" onClick={handleLogout}>Logout</button> : null}
      </div>
    </nav>
  );
}

export default Banner;
