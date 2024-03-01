import { Link } from "react-router-dom";
import "./taskform.css";
function Task(props) {
  console.log("props: ", props._id);

  
  return (
    <div className="TaskForm">
      <form action="" className="form"></form>
      <div className={`task ${props.duration<=60 ? " custom-task" : ""}`} style={{ backgroundColor: "cyan" }}>
        <Link to={"/tasks/" + props._id}>
        <div classNameName="title">{props.title}</div>
        </Link>
        
        <div classNameName="title">{props.duration}</div>
        {/* <div classNameName="title">{props.details.level}</div> */}
        <div classNameName="actions">
        <span onClick={props.deleteTask}>delete</span>

          <span>update</span>
        </div>
      </div>
    </div>
  );
}

export default Task;
