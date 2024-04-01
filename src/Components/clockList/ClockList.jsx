import PropTypes from "prop-types";
import React from "react";
import ClockListItem from "./ClockListItem";

/**
 * clock list component will render the list of created clocks
 * @param {Object} props - The component props.
 * @param {Array} props.clocks - clocks is array of clock object
 * @param {Function} props.updateClock - update clock is a function
 * @param {Function} props.deleteClock - delete clock is a function
 * @param {Object} props.localClock - local is an object
 * @returns {JSX.Element} - A JSX element representing Clock list
 */
const ClockList = ({ clocks, updateClock, deleteClock, localClock }) => {
  return (
    <div>
      <h3>Other Clocks</h3>
      <hr />
      {clocks.length === 0 ? (
        <p>There is no Clock, please add one</p>
      ) : (
        <div>
          {clocks.map((clock) => (
            <ClockListItem
              key={clock.id}
              clock={clock}
              updateClock={updateClock}
              deleteClock={deleteClock}
              localClock={localClock.date}
            />
          ))}
        </div>
      )}
    </div>
  );
};

//defining prop types below
ClockList.propTypes = {
  clocks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.string,
      timezone: PropTypes.string,
      offset: PropTypes.number,
    })
  ),
  updateClock: PropTypes.func,
  deleteClock: PropTypes.func,
  localClock: PropTypes.shape({
    title: PropTypes.string,
    offset: PropTypes.number,
    timezone: PropTypes.string,
    type: PropTypes.string,
  }),
};

export default ClockList;
