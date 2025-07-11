import React, { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

export default function App() {
 const inintialTasks = [
  { id: 0, name: "one task" },
  { id: 1, name: "two task" },
  { id: 2, name: "Three task" },
 ];

 const [tasks, setTasks] = useState(inintialTasks);

 const handleAddToTask = ({ inputValue }) => {
  setTasks([...tasks, { name: inputValue }]);
 };

 const handleChangeTask = (task) => {
  setTasks(
   tasks.map((t) => {
    if (t.id === task.id) {
     return task;
    } else {
     return t;
    }
   })
  );
 };

 const handleDeleteTask = (taskId) => {
  setTasks(tasks.filter((task) => task.id !== taskId));
  console.log("task id", taskId);
 };

 return (
  <>
   <AddTask onAddTask={handleAddToTask} />
   <TaskList
    tasks={tasks}
    onChangeTask={handleChangeTask}
    onDeleteTask={handleDeleteTask}
   />
  </>
 );
}
