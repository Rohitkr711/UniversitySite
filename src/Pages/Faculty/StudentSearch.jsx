// import React, { useState } from "react";
// import { STUDENTS } from "../../data/facultyMock";

// export default function StudentSearch() {
//   const [q, setQ] = useState("");
//   const [dept, setDept] = useState("");
//   const filtered = STUDENTS.filter(
//     (s) =>
//       s.name.toLowerCase().includes(q.toLowerCase()) &&
//       (dept ? s.dept === dept : true)
//   );

//   return (
//     <div className="bg-white rounded-lg shadow p-4 mt-6">
//       <h3 className="font-semibold mb-3">Student Information Access</h3>

//       <div className="flex gap-3 mb-4">
//         <select className="border rounded px-3 py-2" value={dept} onChange={(e) => setDept(e.target.value)}>
//           <option value="">All Departments</option>
//           <option value="CSE">Computer Science</option>
//           <option value="ECE">Electronics</option>
//         </select>

//         <input
//           className="flex-1 border rounded px-3 py-2"
//           placeholder="Search by name or roll"
//           value={q}
//           onChange={(e) => setQ(e.target.value)}
//         />
//       </div>

//       <div className="space-y-3">
//         {filtered.map((s) => (
//           <div key={s.id} className="flex items-center justify-between p-3 border rounded">
//             <div>
//               <div className="font-semibold">{s.name}</div>
//               <div className="text-sm text-gray-500">{s.roll} • {s.dept}</div>
//             </div>
//             <button className="bg-blue-600 text-white px-3 py-1 rounded">View Profile</button>
//           </div>
//         ))}
//         {filtered.length === 0 && (
//           <div className="text-gray-400">No students match your search.</div>
//         )}
//       </div>
//     </div>
//   );
// }


// PART-2
// import React, { useState } from "react";

// export default function StudentSearch({ students }) {
//   const [q, setQ] = useState("");
//   const [dept, setDept] = useState("");

//   const filtered = students.filter(
//     (s) =>
//       (s.name.toLowerCase().includes(q.toLowerCase()) ||
//         s.roll.toLowerCase().includes(q.toLowerCase())) &&
//       (dept ? s.dept === dept : true)
//   );

//   return (
//     <div className="bg-white rounded-lg shadow p-4 mt-6">
//       <h3 className="font-semibold mb-3">Student Information Access</h3>

//       <div className="flex gap-3 mb-4">
//         <select
//           className="border rounded px-3 py-2"
//           value={dept}
//           onChange={(e) => setDept(e.target.value)}
//         >
//           <option value="">All Departments</option>
//           <option value="CSE">Computer Science</option>
//           <option value="ECE">Electronics</option>
//         </select>

//         <input
//           className="flex-1 border rounded px-3 py-2"
//           placeholder="Search by name or roll"
//           value={q}
//           onChange={(e) => setQ(e.target.value)}
//         />
//       </div>

//       <div className="space-y-3">
//         {filtered.map((s, i) => (
//           <div key={i} className="flex items-center justify-between p-3 border rounded">
//             <div>
//               <div className="font-semibold">{s.name}</div>
//               <div className="text-sm text-gray-500">
//                 {s.roll} • {s.dept}
//               </div>
//             </div>

//             <button className="bg-blue-600 text-white px-3 py-1 rounded">
//               View Profile
//             </button>
//           </div>
//         ))}

//         {filtered.length === 0 && (
//           <div className="text-gray-400">No students match your search.</div>
//         )}
//       </div>
//     </div>
//   );
// }


// PART-3
import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";

export default function StudentSearch() {
  const { profile } = useAuth();
  const allStudents = profile?.students || [];

  const [q, setQ] = useState("");
  const [dept, setDept] = useState("");

  const filtered = allStudents.filter(
    (s) =>
      s.name.toLowerCase().includes(q.toLowerCase()) &&
      (dept ? s.dept === dept : true)
  );

  return (
    <div className="bg-white rounded-lg shadow p-4 mt-6">
      <h3 className="font-semibold mb-3">Student Information Access</h3>

      <div className="flex gap-3 mb-4">
        <select
          className="border rounded px-3 py-2"
          value={dept}
          onChange={(e) => setDept(e.target.value)}
        >
          <option value="">All Departments</option>
          <option value="CSE">Computer Science</option>
          <option value="ECE">Electronics</option>
        </select>

        <input
          className="flex-1 border rounded px-3 py-2"
          placeholder="Search by name or roll"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>

      <div className="space-y-3">
        {filtered.map((s, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-3 border rounded"
          >
            <div>
              <div className="font-semibold">{s.name}</div>
              <div className="text-sm text-gray-500">
                {s.roll} • {s.dept}
              </div>
            </div>
            <button className="bg-blue-600 text-white px-3 py-1 rounded">
              View Profile
            </button>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="text-gray-400">
            No students match your search.
          </div>
        )}
      </div>
    </div>
  );
}
