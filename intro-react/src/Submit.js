import "./Submit.css";
import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
function Submit({ setdoto }) {
  let first;
  const inputRef = useRef();
  function buttonOnClick() {
    first = inputRef.current.value;
    const inputElement = inputRef.current;
    setdoto((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: first, complete: false }];
    });

    inputElement.value = null;
  }
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        className="inputTodos"
        placeholder="Enter new to do"
      />
      <div className="submit">
        <input
          type="submit"
          className="SubmitButton"
          value="Add Todos"
          onClick={buttonOnClick}
        />
      </div>
    </div>
  );
}
export default Submit;
