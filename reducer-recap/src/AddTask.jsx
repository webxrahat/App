import React, { useState } from "react";

export default function AddTask({ onAddTask }) {
 const [text, setText] = useState("");
 return (
  <div>
   <input
    type="text"
    placeholder="Enter task"
    value={text}
    onChange={(e) => setText(e.target.value)}
   />
   <button
    onClick={() => {
     setText("");
     onAddTask(text);
    }}
   >
    Sumbit
   </button>
  </div>
 );
}
