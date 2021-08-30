import React, { useState, useEffect, useRef } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
        <input
        type="text"
        className="todo-input"
        placeholder="Update Todo"
        name="text"
        value={input}
        onChange={handleChange}
        ref={inputRef}
        autoComplete="off"
      />
      <button className="todo-button">Edit Todo</button>
      </>
      ) : (
        <>
        <input
        type="text"
        className="todo-input"
        placeholder="Add Todo"
        name="text"
        value={input}
        onChange={handleChange}
        ref={inputRef}
        autoComplete="off"
      />
      <button className="todo-button">Add Todo</button>
      </>
      )}
      
    </form>
  );
};

export default TodoForm;
