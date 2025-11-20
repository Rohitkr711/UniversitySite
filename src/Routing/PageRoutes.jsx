// import React from 'react'
// import { Route, Routes } from 'react-router'
// import HomePage from '../Pages/Home/Home'
// import AboutPage from '../Pages/About/AboutUs'
// import CoursesPage from '../Pages/Course/Courses'
// import TeachersPage from '../Pages/Teachers/Teachers'
// import Library from '../Pages/Library/Library'
// import PageNotFound from '../Pages/PageNotFound'
// import AnnouncementAndEvents from '../Pages/ExtraCurricular/ExtraCurricular'
// import ScholorshipAndVoucher from '../Pages/ScholorShipAndVoucher/ScholorshipAndVoucher.jsx'
// import ExtraCurricular from '../Pages/ExtraCurricular/ExtraCurricular.jsx'
// import Alumni from '../Pages/Alumni/Alumni.jsx'
// import UserDashboard from '../Pages/Dashboard/UserDashboard/UserDashboard.jsx'
// import FacultyDashboard from "../Pages/FacultyDashboard/FacultyDashboard";

// import AuthRoute from '../Pages/AuthRoute.jsx';

// import ProtectedRoute from "../routes/ProtectedRoute";
// import RoleRoute from "../routes/RoleRoute";


// function PageRoutes() {
//     return (
//         <>
//             <Routes>
//                 <Route index element={<HomePage />} />
//                 <Route path="/about" element={<AboutPage />} />

//                 <Route path="/Academics/courses" element={<CoursesPage />} />
//                 <Route path="/Academics/teachers" element={<TeachersPage />} />
//                 <Route path="/Academics/library" element={<Library />} />

//                 <Route path="/Announcement/ExtraCurricular" element={<ExtraCurricular />} />
//                 <Route path="/Announcement/ScholorshipVoucher" element={<ScholorshipAndVoucher />} />

//                 <Route path="/alumni" element={<Alumni />} />


//                 {/* ============================
//                     PROTECTED ROUTES (LOGIN REQUIRED)
//                 ============================ */}

//                 <Route
//                     path="/userdashboard"
//                     element={
//                         <ProtectedRoute>
//                             <RoleRoute allowedRoles={["student", "faculty"]}>
//                                 <UserDashboard />
//                             </RoleRoute>
//                         </ProtectedRoute>
//                     }
//                 />

//                 {/* Optional: Faculty dashboard */}
//                 <Route
//                     path="/faculty-dashboard"
//                     element={
//                         <ProtectedRoute>
//                             <RoleRoute allowedRoles={["faculty"]}>
//                                 <FacultyDashboard />
//                             </RoleRoute>
//                         </ProtectedRoute>
//                     }
//                 />


//                 {/* Optional test route */}
//                 <Route path="/authroute" element={<AuthRoute />} />

//                 {/* Page Not Found */}
//                 <Route path="/*" element={<PageNotFound />} />

//             </Routes>

//         </>
//     )
// }

// export default PageRoutes;



// import FacultyLayout from "../pages/Faculty/FacultyLayout.jsx";
// import FacultyDashboardPage from "../pages/Faculty/FacultyDashboardPage.jsx";
// import ProtectedRoute from "../routes/ProtectedRoute";
// import RoleRoute from "../routes/RoleRoute";

// /* inside <Routes> ... </Routes> */
// {/* FACULTY ROUTES - protected */}
// <Route
//   path="/faculty/*"
//   element={
//     <ProtectedRoute>
//       <RoleRoute allowedRoles={["faculty"]}>
//         <FacultyLayout />
//       </RoleRoute>
//     </ProtectedRoute>
//   }
// >
//   <Route index element={<FacultyDashboardPage />} /> {/* /faculty */}
//   <Route path="dashboard" element={<FacultyDashboardPage />} />
//   <Route path="attendance" element={<div className="p-6">Attendance page (placeholder)</div>} />
//   <Route path="students" element={<div className="p-6">Students page (placeholder)</div>} />
//   <Route path="announcements" element={<div className="p-6">Announcements (placeholder)</div>} />
//   <Route path="resources" element={<div className="p-6">Resources (placeholder)</div>} />
// </Route>


// ###__PART-3__###
import React from "react";
import { Routes, Route } from "react-router";

// Your existing pages
import HomePage from "../Pages/Home/Home";
import AboutPage from "../Pages/About/AboutUs";
import CoursesPage from "../Pages/Course/Courses";
import TeachersPage from "../Pages/Teachers/Teachers";
import Library from "../Pages/Library/Library";
import ExtraCurricular from "../Pages/ExtraCurricular/ExtraCurricular";
import ScholorshipAndVoucher from "../Pages/ScholorShipAndVoucher/ScholorshipAndVoucher";
import Alumni from "../Pages/Alumni/Alumni";
import UserDashboard from "../Pages/Dashboard/UserDashboard/UserDashboard";
import PageNotFound from "../Pages/PageNotFound";

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
