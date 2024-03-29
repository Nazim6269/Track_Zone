import React from "react";
import ClockListItem from "./ClockListItem";

const ClockList = ({ clocks, updateClock }) => {
  return (
    <div>
      <h3>Other Clocks</h3>
      <hr />
      {clocks.length === 0 ? (
        <p>There is no Clock, please add one</p>
      ) : (
        <ul>
          {clocks.map((clock) => (
            <ClockListItem
              key={clock.id}
              clock={clock}
              updateClock={updateClock}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ClockList;
