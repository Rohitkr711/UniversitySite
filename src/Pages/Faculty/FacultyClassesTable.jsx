// import React from "react";
// import { CLASSES } from "../../data/facultyMock";

// export default function FacultyClassesTable() {
//   return (
//     <div className="bg-white rounded-lg shadow p-4 mt-6">
//       <h3 className="font-semibold mb-3">My Classes & Timetable</h3>

//       <div className="overflow-x-auto">
//         <table className="min-w-full text-left">
//           <thead>
//             <tr className="text-sm text-gray-500">
//               <th className="py-2 px-2">Course Code</th>
//               <th className="py-2 px-2">Course Name</th>
//               <th className="py-2 px-2">Semester</th>
//               <th className="py-2 px-2">Number of Students</th>
//               <th className="py-2 px-2">Class Time</th>
//               <th className="py-2 px-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {CLASSES.map((c) => (
//               <tr key={c.id} className="border-t">
//                 <td className="py-3 px-2">{c.id}</td>
//                 <td className="py-3 px-2">{c.name}</td>
//                 <td className="py-3 px-2">{c.sem}</td>
//                 <td className="py-3 px-2">{c.students}</td>
//                 <td className="py-3 px-2">{c.time}</td>
//                 <td className="py-3 px-2">
//                   <button className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded">View Class</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }


// PART-2
// export default function FacultyClassesTable({ classes }) {
//   return (
//     <div className="bg-white rounded-lg shadow p-4 mt-6">
//       <h3 className="font-semibold mb-3">My Classes & Timetable</h3>

//       {classes.length === 0 ? (
//         <p>No classes assigned.</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="min-w-full text-left">
//             <thead>
//               <tr className="text-sm text-gray-500">
//                 <th className="py-2 px-2">Course Code</th>
//                 <th className="py-2 px-2">Course Name</th>
//                 <th className="py-2 px-2">Semester</th>
//                 <th className="py-2 px-2">Students</th>
//                 <th className="py-2 px-2">Class Time</th>
//                 <th className="py-2 px-2">Actions</th>
//               </tr>
//             </thead>

//             <tbody>
//               {classes.map((c, i) => (
//                 <tr key={i} className="border-t">
//                   <td className="py-3 px-2">{c.id}</td>
//                   <td className="py-3 px-2">{c.name}</td>
//                   <td className="py-3 px-2">{c.sem}</td>
//                   <td className="py-3 px-2">{c.students}</td>
//                   <td className="py-3 px-2">{c.time}</td>
//                   <td className="py-3 px-2">
//                     <button className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded">
//                       View Class
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>

//           </table>
//         </div>
//       )}
//     </div>
//   );
// }


// PART-3
import React from "react";
import { useAuth } from "../../context/AuthContext";

export default function FacultyClassesTable() {
  const { profile } = useAuth();
  const classes = profile?.classes || [];

  return (
    <div className="bg-white rounded-lg shadow p-4 mt-6">
      <h3 className="font-semibold mb-3">My Classes & Timetable</h3>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="text-sm text-gray-500">
              <th className="py-2 px-2">Course Code</th>
              <th className="py-2 px-2">Course Name</th>
              <th className="py-2 px-2">Semester</th>
              <th className="py-2 px-2">Number of Students</th>
              <th className="py-2 px-2">Class Time</th>
              <th className="py-2 px-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {classes.map((c, idx) => (
              <tr key={idx} className="border-t">
                <td className="py-3 px-2">{c.code}</td>
                <td className="py-3 px-2">{c.name}</td>
                <td className="py-3 px-2">{c.sem}</td>
                <td className="py-3 px-2">{c.students}</td>
                <td className="py-3 px-2">{c.time}</td>
                <td className="py-3 px-2">
                  <button className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded">
                    View Class
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
