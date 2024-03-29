import React from "react";
import useClock from "../../hooks/useClock";
import ClockActions from "../shared/clock-actions/ClockActions";
import ClockDisplay from "../shared/clock-display/ClockDisplay";
import { formatDistance } from "date-fns";

const ClockListItem = ({ clock, updateClock, deleteClock, localClock }) => {
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
      <h3>{formatDistance(localClock, date)}</h3>
      <ClockActions
        clock={clock}
        updateClock={updateClock}
        deleteClock={deleteClock}
      />
    </div>
  );
};

export default ClockListItem;
