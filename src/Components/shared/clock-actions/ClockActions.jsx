import PropTypes from "prop-types";
import React, { useState } from "react";
import ClockForm from "../clock-form/ClockForm";

/**
 * Functional component for managing clock actions.
 * @param {Object} props - The component props.
 * @param {boolean} [props.local=false] - Indicates if the clock is local.
 * @param {Object} props.clock - The clock object.
 * @param {Function} props.updateClock - Function to update the clock.
 * @param {Function} props.createNewClock - Function to create a new clock.
 * @param {Function} props.deleteClock - Function to delete the clock.
 * @returns {JSX.Element} ClockActions component.
 */
const ClockActions = ({
  local = false,
  clock,
  updateClock,
  createNewClock,
  deleteClock,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isCreate, setIsCreate] = useState(false);

  /**
   * Handles clock action.
   * @param {Object} value - Value to handle.
   * @returns {void}
   */
  const handleClock = (value) => {
    createNewClock(value);
  };

  return (
    <div className="bg-white shadow-md rounded-lg  py-4 px-3 space-y-4 max-w-full mx-auto">
      <div className="flex space-x-4">
        <button
          onClick={() => setIsEdit(!isEdit)}
          className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-sm hover:bg-blue-700 transition"
        >
          Update
        </button>

        {local ? (
          <button
            onClick={() => setIsCreate(!isCreate)}
            className="flex-1 bg-green-600 text-white py-2 px-4 rounded-sm hover:bg-green-700 transition"
          >
            Add
          </button>
        ) : (
          <button
            onClick={() => deleteClock(clock.id)}
            className="flex-1 bg-red-600 text-white py-2 px-4 rounded-sm hover:bg-red-700 transition"
          >
            Delete
          </button>
        )}
      </div>

      {isEdit && (
        <div className="mt-4 p-4 border rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Edit Clock
          </h3>
          <ClockForm
            handleClock={updateClock}
            title={!local}
            values={clock}
            edit={true}
          />
        </div>
      )}

      {isCreate && (
        <div className="mt-4 p-4 border rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Create Clock
          </h3>
          <ClockForm handleClock={handleClock} />
        </div>
      )}
    </div>
  );
};

//defining prop types below
ClockActions.propTypes = {
  updateClock: PropTypes.func,
  createNewClock: PropTypes.func,
  deleteClock: PropTypes.func,
  clock: PropTypes.shape({
    date: PropTypes.objectOf(PropTypes.object),
    title: PropTypes.string,
    offset: PropTypes.number,
    type: PropTypes.string,
  }),
  local: PropTypes.bool,
};

export default ClockActions;
