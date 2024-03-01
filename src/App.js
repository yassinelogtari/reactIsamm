import TaskPage from "./pages/TaskPage/TaskPage";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Menu from "./components/menu/Menu";
import TaskDetails from "./pages/taskDetails";
function App() {
  return (
    <div className="App">
      <Router>
        <Menu></Menu>
        <Routes>
          <Route path="/" element={<Navigate to="/tasks" />} />
          <Route path="/tasks" element={<TaskPage />} />
          <Route path="/tasks/:id" element={<TaskDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
