import { NavLink } from "react-router-dom";

function Menu(props) {
  if (props.role === "teacher") {
    return (
      <div className="menu">
        <ul>
          <li>
            <NavLink
              to="/teacher/tasks"
              style={(params) =>
                params.isActive ? { color: "red" } : undefined
              }
            >
              My tasks list
            </NavLink>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="menu">
        <ul>
          <li>
            <NavLink
              to="student/hello"
              style={(params) =>
                params.isActive ? { color: "red" } : undefined
              }
            >
              Hello
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
