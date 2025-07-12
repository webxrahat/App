import React, { useReducer, useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { tasksReducer } from "./reducer/tasksReducer";

export default function App() {
 let nextId = 3;
 const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
 ];

 const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
 function handleAddTask(text) {
  dispatch({ type: "added", id: nextId++, text: text });
 }

 function handleChangeTask(task) {
  dispatch({
   type: "changed",
   task: task,
  });
 }

 function handleDeleteTask(taskId) {
  dispatch({
   type: "deleted",
   id: taskId,
  });
 }

 return (
  <>
   <AddTask onAddTask={handleAddTask} />
   <TaskList
    tasks={tasks}
    onChange={handleChangeTask}
    onDelete={handleDeleteTask}
   />
  </>
 );
}
