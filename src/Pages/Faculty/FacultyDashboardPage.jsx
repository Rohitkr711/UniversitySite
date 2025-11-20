// import React from "react";
// import FacultyStats from "./FacultyStats.jsx";
// import FacultyClassesTable from "./FacultyClassesTable.jsx";
// import AttendanceOverview from "./AttendanceOverview.jsx";
// import StudentSearch from "./StudentSearch.jsx";
// import QuickActions from "./QuickActions.jsx";

// export default function FacultyDashboardPage() {
//   return (
//     <>
//       <FacultyStats />

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
//         <div className="lg:col-span-2">
//           <FacultyClassesTable />
//           <StudentSearch />
//         </div>

//         <div className="flex flex-col gap-6">
//           <AttendanceOverview />
//           <QuickActions />
//         </div>
//       </div>
//     </>
//   );
// }

// PART-2
import React from "react";
import { useAuth } from "../../context/AuthContext";

import FacultyStats from "./FacultyStats.jsx";
import FacultyClassesTable from "./FacultyClassesTable.jsx";
import AttendanceOverview from "./AttendanceOverview.jsx";
import StudentSearch from "./StudentSearch.jsx";
import QuickActions from "./QuickActions.jsx";
import Navbar from "../../Components/Navbar.jsx";

export default function FacultyDashboardPage() {
  const { profile, role, loading } = useAuth();

  if (loading) return <div className="p-6">Loading...</div>;
  if (role !== "faculty") return <div className="p-6 text-red-500">Access Denied</div>;

  return (
    <>
    {/* <Navbar/> */}
    <div>

      <FacultyStats stats={profile} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2">
          <FacultyClassesTable classes={profile.classes || []} />
          <StudentSearch students={profile.students || []} />
        </div>

        <div className="flex flex-col gap-6">
          <AttendanceOverview />
          <QuickActions />
        </div>
      </div>
    </div>
    </>
  );
}

