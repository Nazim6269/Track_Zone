import "./App.css";
import useClock from "./hooks/useClock";

function App() {
  const { clock: local } = useClock("Local");
  const { clock: pst } = useClock("PST");
  const { clock: est } = useClock("EST");
  const { clock: edt } = useClock("EDT");
  const { clock: bst } = useClock("BST");
  const { clock: mst } = useClock("MST");
  const { clock: pakistan } = useClock("UTC", 5 * 60);

  console.log("Local", local.date);
  console.log("PST", pst.date);
  console.log("EST", est.date);
  console.log("EDT", edt.date);
  console.log("BST", bst.date);
  console.log("MST", mst.date);
  console.log("Pakistan", pakistan.date);

  return <h1>Track Zone</h1>;
}

export default App;
