import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Courses from "../pages/Courses";
import CourseDetail from "../pages/CourseDetail";
import Learning from "../pages/Learning";
import Quiz from "../pages/Quiz";
import Result from "../pages/Result";
import Profile from "../pages/Profile";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/course/:id" element={<CourseDetail />} />
      <Route path="/learning/:id" element={<Learning />} />
      <Route path="/quiz/:id" element={<Quiz />} />
      <Route path="/result" element={<Result />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}