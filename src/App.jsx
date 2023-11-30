import "./App.css";
import { Table } from "./components/table";
import { Tab } from "./components/tabs";
import { tabData } from "./components/tabData";

function App() {
  return (
    <>
      <Table />
      <br />
      <br />
      <Tab tabs={tabData} />
    </>
  );
}

export default App;
