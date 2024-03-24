import React from "react";
import "./App.css";
import LocalClock from "./Components/localClock/LocalClock";
import useClock from "./hooks/useClock";

function App() {
  const { date: localDate, localTimezone, localOffset } = useClock();

  return (
    <React.Fragment>
      {localDate !== null && (
        <LocalClock
          date={localDate}
          timezone={localTimezone}
          offset={-localOffset}
        />
      )}
    </React.Fragment>
  );
}

export default App;
