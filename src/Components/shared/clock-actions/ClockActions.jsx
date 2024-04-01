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
    <div>
      {<button onClick={() => setIsEdit(!isEdit)}>Edit</button>}
      {local ? (
        <button onClick={() => setIsCreate(!isCreate)}>Create</button>
      ) : (
        <button onClick={() => deleteClock(clock.id)}>Delete</button>
      )}

      {isEdit && (
        <>
          <h3>Edit Clock</h3>
          <ClockForm
            handleClock={updateClock}
            title={!local}
            values={clock}
            edit={true}
          />
        </>
      )}

      {isCreate && (
        <>
          <h3>Create Clock</h3>
          <ClockForm handleClock={handleClock} />
        </>
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
