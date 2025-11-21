
// ###__PART-3__###
import { Routes, Route } from "react-router";

// Your existing pages
import HomePage from "../pages/Home/Home";
import AboutPage from "../pages/About/AboutUs";
import CoursesPage from "../pages/Course/Courses";
import TeachersPage from "../pages/Teachers/Teachers";
import Library from "../pages/Library/Library";
import ExtraCurricular from "../pages/ExtraCurricular/ExtraCurricular";
import ScholorshipAndVoucher from "../pages/ScholorShipAndVoucher/ScholorshipAndVoucher";
import Alumni from "../pages/Alumni/Alumni";
import UserDashboard from "../pages/Dashboard/UserDashboard/UserDashboard";
import PageNotFound from "../pages/PageNotFound";

// Faculty pages
import FacultyLayout from "../pages/Faculty/FacultyLayout";
import FacultyDashboardPage from "../pages/Faculty/FacultyDashboardPage";

// Auth guards
import ProtectedRoute from "../routes/ProtectedRoute";
import RoleRoute from "../routes/RoleRoute";

import Login from "../pages/Auth/Login.jsx";
import Signup from "../pages/Auth/Signup.jsx";

export default function PageRoutes() {
  return (
    <Routes>

      {/* PUBLIC ROUTES */}
      <Route index element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />


      {/* Academics */}
      <Route path="/Academics/courses" element={<CoursesPage />} />
      <Route path="/Academics/teachers" element={<TeachersPage />} />
      <Route path="/Academics/library" element={<Library />} />

      {/* Announcements */}
      <Route path="/Announcement/ExtraCurricular" element={<ExtraCurricular />} />
      <Route path="/Announcement/ScholorshipVoucher" element={<ScholorshipAndVoucher />} />

      {/* Alumni */}
      <Route path="/alumni" element={<Alumni />} />

      {/* Student Dashboard */}
      <Route
        path="/userdashboard"
        element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["student"]}>
              <UserDashboard />
            </RoleRoute>
          </ProtectedRoute>
        }
      />

      {/* ================================
          FACULTY PROTECTED ROUTES
      ================================= */}
      <Route
        path="/faculty/*"
        element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["faculty"]}>
              <FacultyLayout />
            </RoleRoute>
          </ProtectedRoute>
        }
      >
        <Route index element={<FacultyDashboardPage />} />
        <Route path="dashboard" element={<FacultyDashboardPage />} />
        <Route path="attendance" element={<div className="p-6">Attendance page</div>} />
        <Route path="students" element={<div className="p-6">Students page</div>} />
        <Route path="announcements" element={<div className="p-6">Announcements</div>} />
        <Route path="resources" element={<div className="p-6">Resources</div>} />
      </Route>

      {/* 404 */}
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
}
