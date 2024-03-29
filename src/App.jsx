import React, { useState } from "react";
import { generate } from "shortid";
import "./App.css";
import ClockList from "./Components/clockList/ClockList";
import LocalClock from "./Components/localClock/LocalClock";

const LOCAL_CLOCK_INIT = {
  title: "My clock",
  timezone: "",
  type: "",
  offset: 0,
  date: null,
};

function App() {
  const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });
  const [clocks, setClocks] = useState([]);

  const updateLocalClock = (data) => {
    setLocalClock({
      ...localClock,
      ...data,
    });
  };

  const createNewClock = (clock) => {
    clock.id = generate();
    setClocks([...clocks, clock]);
  };

  const updateClock = (updatedClock) => {
    const mappedClocks = clocks.map((clock) => {
      if (clock.id === updatedClock.id) return updatedClock;
      return clock;
    });
    setClocks(mappedClocks);
  };

  const deleteClock = (id) => {
    const filteredClocks = clocks.filter((clock) => clock.id !== id);
    setClocks(filteredClocks);
  };

  return (
    <React.Fragment>
      <LocalClock
        clock={localClock}
        updateLocalClock={updateLocalClock}
        createNewClock={createNewClock}
      />

      <ClockList
        clocks={clocks}
        updateClock={updateClock}
        deleteClock={deleteClock}
        localClock={localClock}
      />
    </React.Fragment>
  );
}

export default App;
