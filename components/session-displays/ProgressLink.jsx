import React from "react";

function ProgressLink(props) {
  var isCurrentPage = props.CurrentPage === props.ProgressName;

  return (
    <div
      className="ProgressLink"
      style={
        isCurrentPage
          ? {
              backgroundColor: "#850000",
              color: "white",
            }
          : {
              backgroundColor: "#f5f5f5",
              color: "black",
            }
      }
    >
      {props.ProgressName}
    </div>
  );
}

export default ProgressLink;
