import { useParams } from "react-router-dom";

function TaskDetails() {
    const {id} = useParams()
    console.log("id:", id)
    return (  
        <div>
            task details
        </div>
    );
}

export default TaskDetails ;