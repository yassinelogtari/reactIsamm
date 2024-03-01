import { NavLink } from "react-router-dom";

function Menu () {
    return (  
    <div className="menu">
        <ul>
            <li>
                <NavLink to= "/hello" style={(params => (params.isActive) ? {color:"red"} :undefined)}>Hello</NavLink>

            </li>
            <li>
                <NavLink to= "/tasks"  style={(params => (params.isActive) ? {color:"red"} :undefined)}>My tasks list</NavLink>
            </li>
        </ul>
    </div> );
}

export default Menu;