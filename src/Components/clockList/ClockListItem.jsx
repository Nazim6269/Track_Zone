import { formatDistance } from "date-fns";
import PropTypes from "prop-types";
import React from "react";
import useClock from "../../hooks/useClock";
import useTimer from "../../hooks/useTimer";
import ClockActions from "../shared/clock-actions/ClockActions";
import ClockDisplay from "../shared/clock-display/ClockDisplay";

/**
 * @param {Object} props - The component props.
 * @param {Object} props.clock - represent the created date object
 * @param {Function} props.updateClock - update clock is a function
 * @param {Function} props.deleteClock - delete clock is a function
 * @param {Object} props.localClock - local is an object
 * @returns {JSX.Element} -return a jsx element represent a sing clock list item
 */

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

//defining prop types below
ClockListItem.propTypes = {
  clock: PropTypes.shape({
    title: PropTypes.string,
    timezone: PropTypes.string,
    offset: PropTypes.number,
    id: PropTypes.string,
  }),
  updateClock: PropTypes.func,
  deleteClock: PropTypes.func,
  localClock: PropTypes.object,
};

export default ClockListItem;
