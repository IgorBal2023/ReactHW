import { useState } from "react";
import "./todo.css";
import { TodoForm } from "../todoForm/todoForm";
import { TodoItem } from "../todoItem/todoItem";

export function Todo() {
  const [todos, setTodos] = useState([]);
  const addTask = (userInput) => {
    if (userInput) {
      const newTask = {
        id: Date.now(),
        task: userInput,
        complete: false,
      };
      setTodos([...todos, newTask]);
    }
  };

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };
  const toggleTask = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      ),
    ]);
  };

  return (
    <>
      <div className="todo">
        <h1 className="todoH1">Todo List</h1>
        <TodoForm addTask={addTask} />
        <hr className="separator" />
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            removeTask={removeTask}
            toggleTask={toggleTask}
          />
        ))}
      </div>
    </>
  );
}
