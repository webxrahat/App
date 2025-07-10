import React, { useState } from "react";

export default function App() {
 const inintialName = [
  { id: crypto.randomUUID(), taskName: "one task" },
  { id: crypto.randomUUID(), taskName: "one task" },
  { id: crypto.randomUUID(), taskName: "one task" },
 ];

 const [todos, setTodo] = useState(inintialName);
 const [inputValue, setInputValue] = useState("");
 const [edit, setEdit] = useState(false);

 const handleChange = (e) => {
  setInputValue(e.target.value);
 };

 const handleAddTask = () => {
  setTodo([...todos, { taskName: inputValue }]);
  setInputValue(" ");
 };

 return (
  <>
   <div>
    <input value={inputValue} onChange={handleChange} type="text" />
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
