import React, { useState } from "react";

export default function AddTask({ onAddTask }) {
 const [inputValue, setInputValue] = useState("");
 return (
  <div>
   <input
    type="text"
    placeholder="Enter task"
    onChange={(e) => setInputValue(e.target.value)}
   />
   <button onClick={() => onAddTask({ inputValue, setInputValue })}>
    Sumbit
   </button>
  </div>
 );
}
