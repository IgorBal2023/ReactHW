import { useState } from "react";

export const TodoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");
  const handleChange = (event) => {
    setUserInput(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(userInput);
    setUserInput("");
  };
  return (
    <form action="" className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        onChange={handleChange}
        value={userInput}
        className="todoInput"
      />
      <button className="todoButton">Save</button>
    </form>
  );
};
