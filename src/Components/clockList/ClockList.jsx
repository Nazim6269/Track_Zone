import PropTypes from "prop-types";
import React from "react";
import ClockListItem from "./ClockListItem";
/**
 *
 * @param {Array} props.clocks -
 * @returns {JSX.Element} - A JSX element representing Clock list
 */
const ClockList = ({ clocks, updateClock, deleteClock, localClock }) => {
  console.log(localClock);
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

ClockList.propTypes = {
  clocks: PropTypes.arrayOf(PropTypes.number),
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
