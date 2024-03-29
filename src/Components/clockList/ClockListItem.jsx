import React from "react";
import useClock from "../../hooks/useClock";
import ClockActions from "../shared/clock-actions/ClockActions";
import ClockDisplay from "../shared/clock-display/ClockDisplay";

const ClockListItem = ({ clock, updateClock, deleteClock }) => {
  const { date } = useClock(clock.timezone, clock.offset);

  if (!date) return null;
  return (
    <div>
      <ClockDisplay
        date={date}
        timezone={clock.timezone}
        offset={clock.offset}
        title={clock.title}
      />
      <ClockActions
        clock={clock}
        updateClock={updateClock}
        deleteClock={deleteClock}
      />
    </div>
  );
};

export default ClockListItem;
