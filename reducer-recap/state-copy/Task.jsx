import React, { useState } from "react";

export default function Task({ task, onChangeTask, onDeleteTask }) {
 const [isEditing, setIsEditing] = useState(false);
 let textContent;

 if (isEditing) {
  textContent = (
   <li>
    <input
     type="text"
     value={task.name}
     onChange={(e) => onChangeTask({ ...task, name: e.target.value })}
    />
    <button onClick={() => setIsEditing(false)}>Save</button>
   </li>
  );
 } else {
  textContent = (
   <>
    {task.name}
    <button onClick={() => setIsEditing(true)}>Edit</button>
    <button onClick={() => onDeleteTask(task.id)}>Delete</button>
   </>
  );
 }

 console.log(task.id);

 return (
  <>
   <span>{textContent} </span>
  </>
 );
}
