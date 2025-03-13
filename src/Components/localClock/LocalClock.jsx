import PropTypes from "prop-types";
import React, { useEffect } from "react";
import useClock from "../../hooks/useClock";
import useTimer from "../../hooks/useTimer";
import ClockActions from "../shared/clock-actions/ClockActions";
import ClockDisplay from "../shared/clock-display/ClockDisplay";

/**
 * this component represent the local clock
 * @param {Object} props - prps object
 * @param {Object} props.clock - new created clock object
 * @param {Function} props.updateLocalClock - updateLocalClock function update the clock time
 * @param {Function} props.createNewCloc - createNewClock function create new clock
 * @returns {JSX.Element} - return the localClock component
 */
const LocalClock = ({ clock, updateLocalClock, createNewClock }) => {
  const { date, timezone, offset } = useClock(clock.timezone, clock.offset);
  const timer = useTimer(date);

  useEffect(() => {
    updateLocalClock({ date, timezone, offset });
  }, [date]);

  return (
    <div className="bg-gray-200 flex-1 shadow-md rounded-lg p-6">
      {timer && (
        <ClockDisplay
          date={timer}
          timezone={timezone}
          offset={offset}
          title={clock.title}
        />
      )}
      <div className="mt-4">
        <ClockActions
          local={true}
          clock={clock}
          updateClock={updateLocalClock}
          createNewClock={createNewClock}
        />
      </div>
    </div>
  );
};

//defing prop types below
LocalClock.propTypes = {
  clock: PropTypes.shape({
    date: PropTypes.objectOf(PropTypes.object),
    title: PropTypes.string,
    offset: PropTypes.number,
    timezone: PropTypes.string,
    type: PropTypes.string,
  }),
  updateClock: PropTypes.func,
  createNewClock: PropTypes.func,
};

export default LocalClock;
