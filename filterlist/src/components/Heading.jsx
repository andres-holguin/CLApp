import React from "react";

function Heading(props) {
  return (
    <div className="header ">
      <p className="vertical-center">
        {props.name} ({props.size})
      </p>
    </div>
  );
}

export default Heading;
