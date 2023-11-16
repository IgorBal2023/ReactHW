import { useState } from "react";
import "./App.css";
import { Todo } from "./components/todo/todo";

function App() {
  const [click, setClick] = useState(true);
  return (
    <>
      <div className="wrapper">
        <button
          className={click === "text" ? "buttonOn" : "buttonOff"}
          onClick={() => {
            setClick(click !== "text" ? "text" : "textNone");
          }}
        >
          {click === "text" ? "ON" : "OFF"}
        </button>

        <h1 className={click === "text" ? "text" : "textNone"}>Homework</h1>
      </div>
      <Todo />
    </>
  );
}

export default App;
