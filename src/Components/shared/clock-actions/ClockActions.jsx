import React from "react";

const ClockActions = ({ local = false }) => {
  return <div>{local ? <button>Create</button> : <button>Delete</button>}</div>;
};

export default ClockActions;
