import "./taskform.css";
function Task(props) {
  console.log("props: ", props);

  return (
    <div className="TaskForm">
      <form action="" className="form"></form>
      <div className={`task ${props.duration<=60 ? " custom-task" : ""}`} style={{ backgroundColor: "cyan" }}>
        <div classNameName="title">{props.title}</div>
        <div classNameName="title">{props.duration}</div>
        {/* <div classNameName="title">{props.details.level}</div> */}
        <div classNameName="actions">
          <span>delete</span>

          <span>update</span>
        </div>
      </div>
    </div>
  );
}

export default Task;
