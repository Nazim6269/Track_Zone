import { format } from "date-fns";
import React from "react";

const ClockDisplay = ({ date, timezone, offset, title }) => {
  let offsetHr = offset / 60;
  return (
    <div>
      <h1>{title}</h1>
      <p>{format(date, "yyy-mm-dd hh:mm:ss aaaa")}</p>
      <p>
        {timezone}
        {offsetHr > 0 ? `+${Math.abs(offsetHr)}` : `-${Math.abs(offsetHr)}`}
      </p>
    </div>
  );
};

export default ClockDisplay;
