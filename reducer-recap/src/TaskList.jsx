import Task from "./Task";

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
 return (
  <div>
   {tasks.map((task) => (
    <Task
     task={task}
     key={task.id}
     onChangeTask={onChangeTask}
     onDeleteTask={onDeleteTask}
    />
   ))}
  </div>
 );
}
