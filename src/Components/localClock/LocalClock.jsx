import React, { useEffect } from "react";
import useClock from "../../hooks/useClock";
import useTimer from "../../hooks/useTimer";
import ClockActions from "../shared/clock-actions/ClockActions";
import ClockDisplay from "../shared/clock-display/ClockDisplay";

const LocalClock = ({ clock, updateLocalClock, createNewClock }) => {
  const { date, timezone, offset } = useClock(clock.timezone, clock.offset);

  const timer = useTimer(date);

  useEffect(() => {
    updateLocalClock({ date, timezone, offset });
  }, [date]);

  return (
    <div>
      {timer && (
        <ClockDisplay
          date={timer}
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
