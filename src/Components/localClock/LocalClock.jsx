import React from "react";
import ClockDisplay from "../shared/clock-display/ClockDisplay";

const LocalClock = ({ date, timezone, offset }) => {
  return (
    <div>
      <ClockDisplay
        date={date.toString()}
        timezone={timezone}
        offset={offset}
        title={"My clock"}
      />
    </div>
  );
};

export default LocalClock;
