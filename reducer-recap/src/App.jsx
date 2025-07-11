import React, { useState } from "react";

export default function App() {
 const inintialName = [
  { id: crypto.randomUUID(), taskName: "one task" },
  { id: crypto.randomUUID(), taskName: "two task" },
  { id: crypto.randomUUID(), taskName: "Three task" },
 ];

 const [todos, setTodo] = useState(inintialName);
 const [inputValue, setInputValue] = useState("");
 const [edit, setEdit] = useState(false);

 const handleChange = (task) => {
  setTodo(
   todos.map((t) => {
    if (t.id === task.id) {
     return task;
    } else {
     return t;
    }
   })
  );
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
      {edit ? (
       <>
        {" "}
        <input
         value={task.taskName}
         onChange={(e) => handleChange({ ...task, textName: e.target.value })}
         type="text"
        />
        <button onClick={() => setEdit(false)}>save</button>
       </>
      ) : (
       <>
        {" "}
        {task.taskName} <button onClick={() => setEdit(true)}>edit</button>{" "}
        <button>delete</button>
       </>
      )}{" "}
     </li>
    ))}
   </ul>
  </>
 );
}
