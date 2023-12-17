/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { IoIosClose } from "react-icons/io";
import "./todo.css";

export default function Todo({ todos, completeTodo, removeTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  return (
    <div>
      {todos.map((todo, index) => (
        <div className="todo" key={index}>
          <div className="todo-text" key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
          </div>

          <div className="icons">
            <IoIosClose className="close-icon" onClick={() => removeTodo(todo.id)} />
          </div>
        </div>
      ))}
    </div>
  );
}
