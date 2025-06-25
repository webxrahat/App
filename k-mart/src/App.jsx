import { useReducer, useState } from "react";
import AddTask from "./components/AddTask.jsx";
import TaskList from "./components/TaskList.jsx";
import { initialTasks } from "./data/tasks.js";
import taskReducer from "./reducers/taskReducer.js";

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  const getNextid = (data) => {
    const maxId = data.reduce((acc, curt) =>
      acc && acc.id > curt.id ? acc.id : curt.id
    );

    maxId + 1;
  };

  function handleAddTask(text) {
    dispatch({
      type: "added",
      text: text,
      id: getNextid(tasks),
    });

    // setTasks([
    //   ...tasks,
    //   {
    //     id: getNextid(tasks),
    //     text: text,
    //     done: false,
    //   },
    // ]);
  }

  function handleChangeTask(task) {
    dispatch({
      type: "changed",
      task: task,
    });

    // setTasks(
    //   tasks.map((t) => {
    //     if (t.id === task.id) {
    //       return task;
    //     } else {
    //       return t;
    //     }
    //   })
    // );
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
    // setTasks(tasks.filter((t) => t.id !== taskId));
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}
