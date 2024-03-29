import React, { useState } from "react";
import ClockForm from "../clock-form/ClockForm";

const ClockActions = ({
  local = false,
  clock,
  updateClock,
  createNewClock,
  deleteClock,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isCreate, setIsCreate] = useState(false);

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

export default ClockActions;
