import { useState } from "react";
import "./App.css";
import Input from "./components/input/input";
import Input2 from "./components/input/input2";

function App() {
  const [userInput, setUserInput] = useState("");
  const userComponent = (event) => {
    setUserInput(event.target.value);
  };
  return (
    <>
      <Input2 />
      <Input defaultValue={userInput} onChange={userComponent} />
    </>
  );
}

export default App;
