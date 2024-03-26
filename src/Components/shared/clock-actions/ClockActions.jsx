import React, { useState } from "react";

const defaultOffset = [
  -11, -11.5, -10, -10.5, -10, -9.5, -9, -8.5, -8, -7.5, -7, -6.5, -6, 0, 1, 2,
  3, 4, 5, 5.5, 6, 6.5,
];

const timezoneArray = ["GMT", "UTC", "PST", "EST", "EDT", "BST", "MST"];

const ClockActions = ({ local = false, clock, updateClock }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "offset") {
      value = parseInt(value) * 60;
    }
    updateClock({
      [name]: value,
    });
  };

  return (
    <div>
      {<button onClick={() => setIsEdit(!isEdit)}>Edit</button>}
      {local ? <button>Create</button> : <button>Delete</button>}

      {isEdit && (
        <div>
          <input
            type="text"
            name="title"
            value={clock.title}
            onChange={handleChange}
          />
          <select name="timezone" onChange={handleChange} value={clock.timzone}>
            {timezoneArray.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          {(clock.timezone === "GMT" || clock.timezone === "UTC") && (
            <select
              name="offset"
              onChange={handleChange}
              value={clock.offset / 60}
            >
              {defaultOffset.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          )}
        </div>
      )}
    </div>
  );
};

export default ClockActions;
