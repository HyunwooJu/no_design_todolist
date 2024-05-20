import React, { useState } from "react";

function TodoForm({ setTodos }) {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const addTodo = () => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: Date.now(),
        title,
        contents,
        isDone: false,
      },
    ]);
    setTitle("");
    setContents("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="내용"
        value={contents}
        onChange={(e) => setContents(e.target.value)}
      />
      <button onClick={addTodo}>추가하기</button>
    </div>
  );
}

export default TodoForm;
