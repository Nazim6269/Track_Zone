import React from "react";
import ClockListItem from "./ClockListItem";

const ClockList = ({ clocks, updateClock, deleteClock }) => {
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
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ClockList;
