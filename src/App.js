import TaskPage from "./pages/TaskPage/TaskPage";
import Hello from "./components/hello/Hello"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Menu from "./components/menu/Menu";
import TaskDetails from "./pages/TaskPage/taskDetails";
import { me } from "./services/tasks3.service"
import Login from "./pages/Login/Login"
import TeacherRoutes from "./components/teacherRoutes/TeacherRoutes";
import StudentRoutes from "./components/studentRoutes/StudentRoutes";
import { useEffect, useState } from "react";
function App() {
  const token = localStorage.getItem("token")

  const [user, setUser] = useState({})
  

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const user = await me()
        setUser(user)
        console.log("user: ", user)
      } catch (e) {}
    }
    fetchMe()
  }, [])
  if (token && user.role === "admin") {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={< Navigate to ="/teachers" />} />
          <Route path="/teachers/*" element={<TeacherRoutes/>} />
        </Routes>
      </Router>
    </div>
  );
}
else if (token && user.role === "user") {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={< Navigate to ="/students" />} />
            <Route path="/students/*" element={<StudentRoutes/>} />
          </Routes>
        </Router>
      </div>
    );
}
else if (!token) {
  // public routes
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  )
} else {
  return <div>loading...</div>
}
}

export default App;
