import { Navigate, Route, Routes } from "react-router-dom";
import TaskDetails from "../../pages/TaskPage/taskDetails";
import TaskPage from "../../pages/TaskPage/TaskPage";
import Menu from "../menu/Menu";

function TeacherRoutes() {
   
  return (
    <div>
        <Menu role="teacher"></Menu>
      <Routes>
        <Route path="" element={<Navigate to="tasks" />} />
        <Route path="tasks" element={<TaskPage />} />
        <Route path="tasks/:id" element={<TaskDetails />} />
      </Routes>
    </div>
  );
}

export default TeacherRoutes;
