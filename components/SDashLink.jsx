import React from "react";
import Link from "next/link";

function SDashLink({ pageLink, pageName, pageMatch, sessionID, sessionProgress }) {

  const [isMouseOver, setMouseOver] = React.useState(false);

  function mouseOut() {
    setMouseOver(false);
  }

  function mouseOver() {
    setMouseOver(true);
  }

  return (
    <Link
      href={{
        pathname: pageLink,
        query: { sessionID: sessionID, sessionProgress: sessionProgress },
      }}
    >
      <a
        href={pageLink}
        style={
          pageMatch
            ? {
                backgroundColor: "#850000",
                color: "white",
              }
            : {
                backgroundColor: isMouseOver ? "#850000" : "#f5f5f5",
                color: isMouseOver ? "white" : "black",
              }
        }
        onMouseOut={mouseOut}
        onMouseOver={mouseOver}
        className="button"
        alt="state button"
      >
        {pageName}
      </a>
    </Link>
  );
}

export default SDashLink;
