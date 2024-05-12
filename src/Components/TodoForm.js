import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setvalue] = useState("");
  const handleSubmit = (e) => {
    //On default the page reload when clicking submit ,to prevent that :
    e.preventDefault();
    addTodo(value);
    setvalue("");
  };
  //Create a function (HandleSubmit)
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="What are the Tasks Today"
        onChange={(e) => setvalue(e.target.value)}
      ></input>
      <button type="submit" className="todo-btn">
        Add a Task
      </button>
    </form>
  );
};
