import { useState } from "react";

function TaskButton(props) {
  //props.sayHello("isamm")
  const [title, setTitle] = useState("learn");
  const [duration, setDuration] = useState(17);
  function handTile(e) {
    setTitle(e.target.value);
  }
  function handDuration(e) {
    setDuration(e.target.value);
  }

  function handleClick() {
    console.log("hand");
    props.addTask(title,duration)
  }
  return (
    <div className="task-form">
      <input type="text" name="title" value={title} onChange={handTile} />
      <input
        type="number"
        name="duration"
        value={duration}
        onChange={handDuration}
      />
      <button type="submit" onClick={handleClick}>
        Add a task
      </button>
    </div>
  );
}

export default TaskButton;
