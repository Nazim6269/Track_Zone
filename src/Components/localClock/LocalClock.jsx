import React, { useEffect } from "react";
import useClock from "../../hooks/useClock";
import ClockActions from "../shared/clock-actions/ClockActions";
import ClockDisplay from "../shared/clock-display/ClockDisplay";

const LocalClock = ({ clock, updateLocalClock, createNewClock }) => {
  const { date, timezone, offset } = useClock(clock.timezone, clock.offset);

  useEffect(() => {
    updateLocalClock({ date, timezone, offset });
  }, [date]);

  return (
    <div>
      {date && (
        <ClockDisplay
          date={date}
          timezone={timezone}
          offset={offset}
          title={clock.title}
        />
      )}
      <ClockActions
        local={true}
        clock={clock}
        updateClock={updateLocalClock}
        createNewClock={createNewClock}
      />
    </div>
  );
};

export default LocalClock;
