import "./TodoList.css";
import React from "react";
import { useRef } from "react";

function List({ newTodo }) {
  const ref = useRef(null);
  const handleClick = () => {
    console.log(ref.current.checked);
  };

  return (
    <ul className="list">
      {newTodo.map((todo) => (
        <li key={todo.id} className="li">
          <input
            ref={ref}
            type="CheckBox"
            defaultChecked={todo.complete}
            onClick={handleClick}
          />
          {todo.name}
        </li>
      ))}
    </ul>
  );
}

export default List;
