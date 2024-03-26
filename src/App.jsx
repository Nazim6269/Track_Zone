import React, { useState } from "react";
import "./App.css";
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

  const updateLocalClock = (data) => {
    setLocalClock({
      ...localClock,
      ...data,
    });
  };

  return (
    <React.Fragment>
      <LocalClock clock={localClock} updateLocalClock={updateLocalClock} />
    </React.Fragment>
  );
}

export default App;
