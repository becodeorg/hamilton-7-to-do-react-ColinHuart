import "./TodoList.css";
import React, { useState } from "react";
import { useRef } from "react";

function List() {
  const ref = useRef(null);
  const handleClick = () => {
    console.log(ref.current.checked);
  };

  /* to get all li but error because il.forEach not a functoin????? 
  
  import { useRef } from "react";
let il = document.getElementsByTagName("li");
function List() {
  const ref = useRef(null);
  const handleClick = () => {
    il.forEach((element) => {
      console.log(element.current.checked);
    });
  };*/
  const initalTodos = [
    { name: "Be Nice", complete: false },
    { name: "Playing music", complete: false },
  ];
  const [todos, setTodos] = useState(initalTodos);

  return (
    <ul className="list">
      {todos.map((todo) => (
        <li key={todo.toString()} className="li">
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
