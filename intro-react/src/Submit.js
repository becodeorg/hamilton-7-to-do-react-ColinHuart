import "./Submit.css";
import React, { useRef, useState } from "react";
function Submit({ value }) {
  const [first, setFirst] = useState();
  const inputRef = useRef();
  function buttonOnClick(props) {
    first = inputRef.current.value;
    //const inputElement = inputRef.current;
    // console.log(inputElement.value);
    // inputElement.value = null;
    props.value(first);
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
