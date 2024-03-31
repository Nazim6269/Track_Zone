import { formatDistance } from "date-fns";
import React from "react";
import useClock from "../../hooks/useClock";
import useTimer from "../../hooks/useTimer";
import ClockActions from "../shared/clock-actions/ClockActions";
import ClockDisplay from "../shared/clock-display/ClockDisplay";

const ClockListItem = ({ clock, updateClock, deleteClock, localClock }) => {
  const { date } = useClock(clock.timezone, clock.offset);

  const timer = useTimer(date);

  if (!date || !timer) return null;
  return (
    <div>
      <ClockDisplay
        date={timer}
        timezone={clock.timezone}
        offset={clock.offset}
        title={clock.title}
      />
      <h3>{formatDistance(localClock, timer)}</h3>
      <ClockActions
        clock={clock}
        updateClock={updateClock}
        deleteClock={deleteClock}
      />
    </div>
  );
};

export default ClockListItem;
