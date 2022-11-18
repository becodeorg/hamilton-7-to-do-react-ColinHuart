import "./TodoList.css";

function List() {
  return (
    <ul className="list">
      <li>
        <input type="CheckBox" /> Be Nice
      </li>
      <li>
        <input type="CheckBox" />
        Playing music
      </li>
    </ul>
  );
}

export default List;
