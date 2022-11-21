import "./Submit.css";
import React, { useRef } from "react";
function Submit() {
  const inputRef = useRef();
  function buttonOnClick() {
    const inputElement = inputRef.current;

    console.log(inputElement.value);
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
