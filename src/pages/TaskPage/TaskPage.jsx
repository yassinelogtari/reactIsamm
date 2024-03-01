import { useEffect, useState } from "react";
import TaskButton from "../../components/Task/Task";
import TasksList from "../../components/TaskList/taskListe";
import * as api from "../../services/tasks.service";
function TaskPage() {
  const steps = ["enter the title", "click on the button"];
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const result = await api.fetchTasks();
        setTasks(result);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  //const [searchValue, setSearchValue] = useState("")
  //3éme
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       setLoading(true);
  //       if (searchValue.length === 0) {
  //         console.log("tasks empty");
  //         setTasks([]);
  //         setLoading(false);
  //       } else {
  //         const result = await api.fetchTasksByFilter(searchValue);
  //         console.log("tasks form api : " + searchValue);
  //         setTasks(result);
  //         setLoading(false);
  //       }
  //     };
  //     console.log("searchValue", searchValue);
  //     fetchData();
  //   }, [searchValue]);
  //4éme
  // useEffect(() => {
  //   let didCancel = false;
  //   const fetchData = async () => {
  //     setLoading(true);
  //     if (!searchValue) {
  //       setTasks([]);
  //       setLoading(false);
  //     } else {
  //       const result = await api.fetchTasksByFilter(searchValue);
  //       if (!didCancel) {
  //         console.log("result: ", searchValue);

  //         setTasks(result);
  //         setLoading(false);
  //       }
  //     }
  //   };
  //   // console.log("useEffect:", searchValue)
  //   fetchData();
  //   return () => {
  //       console.log("cleanup: ", searchValue)
  //       didCancel = true
  //     }
  //   }, [searchValue])

  const [isVisibal, setIsVisibal] = useState(true);

  function handleVisibility() {
    setIsVisibal(!isVisibal);
  }

  async function addTask(title, duration) {
    const newTasks = await api.addTask({ title, duration });
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

      {/* <input
        type="text"
        name="title"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      /> */}
      {error && <div> error ...</div>}
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
