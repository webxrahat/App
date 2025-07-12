import React, { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

export default function App() {
 let nextId = 3;
 const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
 ];

 const [tasks, setTasks] = useState(initialTasks);

 return (
  <>
   <AddTask />
   <TaskList tasks={tasks} />
  </>
 );
}
