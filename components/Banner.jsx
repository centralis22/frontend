import React from "react";
import Image from "next/image";

function Banner(props) {
  var isSession = props.Session;

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
    </nav>
  );
}

export default Banner;
