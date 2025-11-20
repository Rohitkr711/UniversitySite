// import React from "react";
// import { STATS } from "../../data/facultyMock";

// function StatCard({ children }) {
//   return <div className="bg-white rounded-lg shadow p-4">{children}</div>;
// }

// export default function FacultyStats() {
//   const { totalStudents, pendingAttendance, upcomingClass } = STATS;

//   return (
//     <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
//       <StatCard>
//         <div className="text-sm text-gray-500">Total Students Under You</div>
//         <div className="text-2xl font-bold text-blue-600 mt-2">{totalStudents}</div>
//         <div className="text-xs text-gray-400">Active Students</div>
//       </StatCard>

//       <StatCard>
//         <div className="text-sm text-gray-500">Pending Attendance Updates</div>
//         <div className="text-2xl font-bold mt-2">{pendingAttendance} Classes</div>
//         <button className="mt-3 bg-blue-600 text-white px-3 py-1 rounded">Mark Attendance</button>
//       </StatCard>

//       <StatCard>
//         <div className="text-sm text-gray-500">Upcoming Classes Today</div>
//         <div className="text-lg font-semibold mt-2">{upcomingClass.title} — {upcomingClass.time}</div>
//         <div className="text-xs text-gray-400 mt-1">{upcomingClass.location}</div>
//       </StatCard>
//     </section>
//   );
// }


// PART-2
// export default function FacultyStats({ stats }) {
//   const {
//     totalStudents = 0,
//     pendingAttendance = 0,
//     upcomingClass = {}
//   } = stats;

//   return (
//     <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

//       <div className="bg-white rounded-lg shadow p-4">
//         <div className="text-sm text-gray-500">Total Students Under You</div>
//         <div className="text-2xl font-bold text-blue-600 mt-2">{totalStudents}</div>
//         <div className="text-xs text-gray-400">Active Students</div>
//       </div>

//       <div className="bg-white rounded-lg shadow p-4">
//         <div className="text-sm text-gray-500">Pending Attendance Updates</div>
//         <div className="text-2xl font-bold mt-2">{pendingAttendance} Classes</div>
//         <button className="mt-3 bg-blue-600 text-white px-3 py-1 rounded">
//           Mark Attendance
//         </button>
//       </div>

//       <div className="bg-white rounded-lg shadow p-4">
//         <div className="text-sm text-gray-500">Upcoming Class Today</div>
//         <div className="text-lg font-semibold mt-2">
//           {upcomingClass.title} — {upcomingClass.time}
//         </div>
//         <div className="text-xs text-gray-400 mt-1">{upcomingClass.location}</div>
//       </div>
//     </section>
//   );
// }


// PART-3
import React from "react";
import { useAuth } from "../../context/AuthContext";

function StatCard({ children }) {
  return <div className="bg-white rounded-lg shadow p-4">{children}</div>;
}

export default function FacultyStats() {
  const { profile } = useAuth();

  const total = profile?.totalStudents || 0;
  const pending = profile?.pendingAttendance || 0;
  const upcoming = profile?.upcomingClass || {};

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      <StatCard>
        <div className="text-sm text-gray-500">Total Students Under You</div>
        <div className="text-2xl font-bold text-blue-600 mt-2">{total}</div>
        <div className="text-xs text-gray-400">Active Students</div>
      </StatCard>

      <StatCard>
        <div className="text-sm text-gray-500">Pending Attendance Updates</div>
        <div className="text-2xl font-bold mt-2">{pending} Classes</div>
        <button className="mt-3 bg-blue-600 text-white px-3 py-1 rounded">
          Mark Attendance
        </button>
      </StatCard>

      <StatCard>
        <div className="text-sm text-gray-500">Upcoming Classes Today</div>
        <div className="text-lg font-semibold mt-2">
          {upcoming.title || "-"} — {upcoming.time || "-"}
        </div>
        <div className="text-xs text-gray-400 mt-1">
          {upcoming.location || ""}
        </div>
      </StatCard>
    </section>
  );
}

