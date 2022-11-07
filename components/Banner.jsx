import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useUserContext } from "../context/user";

function Banner() {
  const router = useRouter();

  const { isInstructor, sessionID, isLoggedIn, setLoggedIn } = useUserContext();
  const userTypeStr = isInstructor ? "Instructor" : "Student";

  var isSession = isLoggedIn;

  function handleLogout() {
    if (isInstructor) {
      router.push("/instructor-login");
    } else {
      router.push("/student-login");
    }

    setLoggedIn(false);
    isSession = isLoggedIn;
  }

  return (
    <nav className="NavBar">
      <div className="USCLogo">
        <Image src="/usc-logo.png" alt="logo" height="55px" width="55px" />
      </div>
      <span className="BannerTitle">Centralis {userTypeStr}</span>
      <div>
        <p className="SessionNumber">Session #: {sessionID}</p>
      </div>
      <div className="LogoutButtonDiv">
        {isSession ? (
          <button className="LogoutButton" onClick={handleLogout}>
            Logout
          </button>
        ) : null}
      </div>
    </nav>
  );
}

export default Banner;
