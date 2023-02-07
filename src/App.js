import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Home from "./features/home";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateNotes from "./components/CreateNotes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<ProtectedRoute comp={Home} />} />
        <Route
          path="/home/createNotes"
          element={<ProtectedRoute comp={CreateNotes} />}
        />
        {/* <Route path="/home" element={<Home />} */}
      </Routes>
    </>
  );
}

export default App;
