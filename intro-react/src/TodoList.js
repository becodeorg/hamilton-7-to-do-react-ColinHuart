import "./TodoList.css";
import React, { useState } from "react";

function List() {
  const initalTodos = [
    { name: "Be Nice", complete: true },
    { name: "Playing music", complete: false },
  ];
  const [todos, setTodos] = useState(initalTodos);

  return (
    <ul className="list">
      {todos.map((todo) => (
        <li key={todo.toString()} className="li">
          <input type="CheckBox" defaultChecked={todo.complete} />
          {todo.name}
        </li>
      ))}
    </ul>
  );
}

export default List;
