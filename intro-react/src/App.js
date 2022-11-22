import "./App.css";
import Title from "./Title";
import Submit from "./Submit";
import List from "./TodoList";
import React, { useState } from "react";

function App() {
  const initalTodos = [
    { name: "Be Nice", complete: false },
    { name: "Playing music", complete: false },
  ];
  const [todos, setTodos] = useState(initalTodos);

  return (
    <div className="background">
      <Title />
      <Submit value={(first) => setTodos(first)} />
      <List newTodo={todos} />
    </div>
  );
}

export default App;
