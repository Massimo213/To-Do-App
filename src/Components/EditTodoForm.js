import React, { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setvalue] = useState(task.task);
  const handleSubmit = (e) => {
    //On default the page reload when clicking submit ,to prevent that :
    e.preventDefault();
    editTodo(value, task.id);
    setvalue("");
  };
  //Create a function (HandleSubmit)
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Update task"
        onChange={(e) => setvalue(e.target.value)}
      ></input>
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};
