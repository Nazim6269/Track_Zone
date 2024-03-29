import React, { useState } from "react";
import { generate } from "shortid";
import "./App.css";
import LocalClock from "./Components/localClock/LocalClock";
import ClockList from "./Components/clockList/ClockList";

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

  const updateClock = (updatedClock) => {};

  return (
    <React.Fragment>
      <LocalClock
        clock={localClock}
        updateLocalClock={updateLocalClock}
        createNewClock={createNewClock}
      />

      <ClockList clocks={clocks} updateClock={updateClock} />
    </React.Fragment>
  );
}

export default App;
