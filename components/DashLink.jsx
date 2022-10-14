import React from "react";
import Link from "next/link";

function DashLink(props) {
  var isCurrentPage = props.CurrentPage === props.LinkName;
  const [buttonState, changeButtonState] = React.useState(false);

  function mouseOut() {
    changeButtonState(false);
  }

  function mouseOver() {
    changeButtonState(true);
  }

  return (
    <Link href={props.hyperLink}>
      <a
        href="/#"
        style={
          isCurrentPage
            ? {
                backgroundColor: "#850000",
                color: "white",
              }
            : {
                backgroundColor: buttonState ? "#850000" : "#f5f5f5",
                color: buttonState ? "white" : "black",
              }
        }
        onMouseOut={mouseOut}
        onMouseOver={mouseOver}
        className="button"
        alt="state button"
      >
        {props.LinkName}
      </a>
    </Link>
  );
}

export default DashLink;
