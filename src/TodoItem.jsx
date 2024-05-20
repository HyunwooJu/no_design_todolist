import React from "react";

function TodoItem({ todo, setTodos }) {
  const toggleTodo = () => {
    setTodos((prevTodos) =>
      prevTodos.map((item) =>
        item.id === todo.id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  const deleteTodo = () => {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== todo.id));
  };

  return (
    <div>
      <h3 style={{ textDecoration: todo.isDone ? "line-through" : "none" }}>
        {todo.title}
      </h3>
      <p>{todo.contents}</p>
      <button onClick={toggleTodo}>{todo.isDone ? "미 완료" : "완료"}</button>
      <button onClick={deleteTodo}>삭제</button>
    </div>
  );
}

export default TodoItem;
