import "./App.css";
import Title from "./Title";
import Submit from "./Submit";
import List from "./TodoList";
import React, { useState, useEffect } from "react";

const LSKEY = "MyTodoApp";

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem(LSKEY + ".todos");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  useEffect(() => {
    window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="background">
      <Title />
      <Submit setdoto={setTodos} />
      <List newTodo={todos} />
    </div>
  );
}

export default App;
