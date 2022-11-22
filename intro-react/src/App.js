import "./App.css";
import Title from "./Title";
import Submit from "./Submit";
import List from "./TodoList";
import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="background">
      <Title />
      <Submit setdoto={setTodos} />
      <List newTodo={todos} />
    </div>
  );
}

export default App;
