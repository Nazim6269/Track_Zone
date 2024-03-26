import { format } from "date-fns";
import React from "react";

const ClockDisplay = ({ date, timezone, offset, title }) => {
  let offsetHr = offset / 60;
  return (
    <div>
      <h1>Title: {title}</h1>
      <h2>{format(date, "yyy-mm-dd hh:mm:ss aaaa")}</h2>
      <h3>
        {timezone}
        {offsetHr > 0 ? `+${Math.abs(offsetHr)}` : `-${Math.abs(offsetHr)}`}
      </h3>
    </div>
  );
};

export default ClockDisplay;
