import TaskForm from "../TaskForm/TaskFrom";

function TasksList({ tasks, deleteTask }) {
  return (
    <div>
      {tasks.map(task => (
        <TaskForm
          key={task._id}
          title={task.title}
          duration={task.duration}
          deleteTask={() => deleteTask(task._id)}
        />
      ))}
    </div>
  );
}

export default TasksList;
