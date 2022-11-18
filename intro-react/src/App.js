import "./App.css";

import Input from "./Input";
import Title from "./Title";
import Submit from "./Submit";
import List from "./TodoList";

function App() {
  return (
    <div className="background">
      <Title />
      <Input />
      <Submit />
      <List />
    </div>
  );
}

export default App;
