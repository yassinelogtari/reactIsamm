import TaskForm from "../TaskForm/TaskFrom"

function TasksList(props) {
  console.log(props.tasks)
  return (
    <div className="tasks-list">
      {props.tasks.map((t) => {
        return (
          <TaskForm key={t._id} _id={t._id} title={t.title} duration={t.duration} />
        )
      })}
    </div>
  )
}

export default TasksList