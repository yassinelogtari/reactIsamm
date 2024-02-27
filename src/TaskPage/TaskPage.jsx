import { useState } from "react";
import TaskButton from "../components/Task/Task";
import TasksList from "../components/TaskList/taskListe";
function TaskPage() {
  const steps = ["enter the title", "click on the button"];
  const loading = false;

  const [tasks, setTasks] = useState([
    {
      _id: "1",
      title: "learn html",
      duration: "60",
    },
    { _id: "2", title: "learn react", duration: "120" },
    { _id: "3", title: "learn angular", duration: "180" },
  ]);

  const [isVisibal, setIsVisibal] = useState(true);

  function handleVisibility() {
    setIsVisibal(!isVisibal);
  }

  function addTask(title, duration) {
    console.log("title,duration :", title, duration);
    const newTasks = { _id: tasks.length + 1 + "", title, duration };
    setTasks([...tasks, newTasks]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task._id !== id));
  }

  return (
    <div className="taskpage">
      <ul>
        {steps.map((s, index) => {
          return <li key={index}>{s}</li>;
        })}
      </ul>
      <button onClick={handleVisibility}> Toggle visibility</button>

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
      {!loading && isVisibal && (
        <>
          <TaskButton addTask={addTask} />
          <TasksList tasks={tasks} deleteTask={deleteTask} />
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
