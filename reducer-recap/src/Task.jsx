import React, { useState } from "react";

export default function Task({ task, onChange, onDelete }) {
 const [isEditing, setIsEditing] = useState(false);
 let textContent;

 if (isEditing) {
  textContent = (
   <>
    <input
     value={task.text}
     onChange={(e) => {
      onChange({
       ...task,
       text: e.target.value,
      });
     }}
    />
    <button onClick={() => setIsEditing(false)}>Save</button>
   </>
  );
 } else {
  textContent = (
   <>
    {task.text}
    <button onClick={() => setIsEditing(true)}>Edit</button>
   </>
  );
 }

 console.log(task.id);

 return (
  <>
   <span>{textContent} </span>
   <button onClick={() => onDelete(task.id)}>Delete</button>
  </>
 );
}
