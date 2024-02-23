
import TasksList from "../components/TaskList/taskListe";
function TaskPage() {
  const steps = ["enter the title", "click on the button"];
  const loading = false;

  const tasks = [
    {
      _id: "1",
      title: "learn html",
      duration: "60",
    },
    { _id: "2", title: "learn react", duration: "120" },
    { _id: "3", title: "learn angular", duration: "180" },
  ]

  return (
    <div className="taskpage">
      <ul>
        {steps.map((s) => {
          return <li>{s}</li>;
        })}
      </ul>

     
      {/* {loading ? (
        <div>loading...</div>
      ) : (
        <>
          <Task />
          <Task />
          <Task />
        </>
      )} */}
      {loading && <div>loading ...</div>}
      {!loading && (
        <>
        <TasksList tasks={tasks}/>
          {/* <Task
            title="learn Html"
            duration={60}
            details={{ level: "level 2" }}
          />
          <Task
            title="learn React"
            duration={40}
            details={{ level: "level 3" }}
          />
          <Task
            title="learn Angular"
            duration={50}
            details={{ level: "level 4" }}
          /> */}
        </>
      )}
    </div>
  );
}

export default TaskPage;
