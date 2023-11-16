export const TodoItem = ({ todo, toggleTask, removeTask }) => {
  return (
    <>
      <div className="itemDiv">
        <div
          className={todo.complete ? "todoRow complete" : "todo"}
          onClick={() => toggleTask(todo.id)}
        >
          {todo.task}
        </div>
        <div className="removeDiv" onClick={() => removeTask(todo.id)}></div>
      </div>
    </>
  );
};
