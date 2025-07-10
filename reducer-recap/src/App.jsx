import React, { useState } from "react";

export default function App() {
  const inintialName = { taskName: "one task" };

  const [todos, setTodo] = useState([inintialName]);
  const [input, setInput] = useState({});

  const handleChange = (e) => {
    const name = e.target.value;
    setInput({ taskName: name });
  };

  const handleAddTask = () => {
    setTodo([...todos, input]);
  };
  console.log("input", input);
  console.log("todos", todos);

  return (
    <>
      <div>
        <input onChange={handleChange} type="text" />

        <button onClick={handleAddTask}>Submit</button>
      </div>
      <ul>
        {todos.map((task, idx) => (
          <li key={idx}>
            {task.taskName} <button>edit</button> <button>delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
// https://chatgpt.com/share/686fabdb-58fc-800b-8c73-8c48a9fa0084
