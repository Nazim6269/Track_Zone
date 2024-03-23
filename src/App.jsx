import "./App.css";
import useClock from "./hooks/useClock";

function App() {
  const { date: localDate } = useClock();
  console.log(localDate);

  return <h1>Track Zone</h1>;
}

export default App;
