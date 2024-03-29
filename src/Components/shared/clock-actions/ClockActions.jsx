import React, { useState } from "react";
import ClockForm from "../clock-form/ClockForm";

const timezoneArray = ["GMT", "UTC", "PST", "EST", "EDT", "BST", "MST"];

const ClockActions = ({ local = false, clock, updateClock }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isCreate, setIsCreate] = useState(false);

  // const handleChange = (e) => {
  //   let { name, value } = e.target;
  //   if (name === "offset") {
  //     value = Number(value) * 60;
  //   }
  //   updateClock({
  //     [name]: value,
  //   });
  // };

  const handleClock = (value) => {
    console.log(value);
  };

  return (
    <div>
      {<button onClick={() => setIsEdit(!isEdit)}>Edit</button>}
      {local ? (
        <button onClick={() => setIsCreate(!isCreate)}>Create</button>
      ) : (
        <button>Delete</button>
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
