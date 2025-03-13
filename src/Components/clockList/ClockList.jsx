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
    <div className="bg-gray-200 shadow-md rounded-lg p-6 w-full md:w-3/4 mx-auto">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        Other Clocks
      </h3>
      <hr className="border-t-2 border-gray-300 mb-4" />
      {clocks.length === 0 ? (
        <p className="text-gray-500 italic">
          There is no clock, please add one.
        </p>
      ) : (
        <div className="grid grid-cols-1 lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-3 2xl:grid 2xl:grid-cols-4 gap-3">
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
