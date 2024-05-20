import React, { useState } from "react";
import TodoContainer from "./TodoContainer";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]); // 초기 상태를 빈 배열로 설정

  return (
    <div className="container">
      <h1>Todo List</h1>
      <TodoContainer todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
