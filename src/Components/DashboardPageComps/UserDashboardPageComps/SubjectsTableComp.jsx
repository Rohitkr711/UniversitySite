// export default function SubjectsTableComp() {
//   const subjects = [
//     { code: "CS 501", name: "Database Management", faculty: "Dr. A. Sharma", time: "Mon 10:00" },
//     { code: "CS 580", name: "FEM", faculty: "Dr. A. Sharma", time: "Sat 09:00" },
//     { code: "EE4", name: "Nesemnd Hand", faculty: "Nesemnd Hand", time: "Meontri" },
//     { code: "Activities", name: "Neemtnord, Rjimal", faculty: "Rjimal", time: "Altroot" },
//     { code: "News Narratives", name: "Mentornd, Hknrtrjp", faculty: "Hknrtrjp", time: "Arckast" },
//     { code: "CS 50N", name: "Nemonthd, Faltis", faculty: "Faltis", time: "Unisat" },
//   ];

//   return (
//     <div className="bg-white p-6 rounded-xl shadow-sm">
//       <h3 className="font-semibold mb-4">My Subjects & Faculty</h3>

//       <table className="w-full border-collapse text-left">
//         <thead>
//           <tr className="text-gray-600 border-b">
//             <th className="py-2">Subject Code</th>
//             <th className="py-2">Subject Name</th>
//             <th className="py-2">Faculty</th>
//             <th className="py-2">Class Timing</th>
//           </tr>
//         </thead>

//         <tbody>
//           {subjects.map((subj, idx) => (
//             <tr key={idx} className="border-b hover:bg-gray-50">
//               <td className="py-3">{subj.code}</td>
//               <td className="py-3">{subj.name}</td>
//               <td className="py-3">{subj.faculty}</td>
//               <td className="py-3">{subj.time}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }


// PART-2
export default function SubjectsTableComp({ subjects }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="font-semibold mb-4">My Subjects & Faculty</h3>

      {subjects.length === 0 ? (
        <p>No subjects added yet.</p>
      ) : (
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="text-gray-600 border-b">
              <th className="py-2">Subject</th>
              <th className="py-2">Faculty</th>
              <th className="py-2">Class Timing</th>
            </tr>
          </thead>

          <tbody>
            {subjects.map((subj, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="py-3">{subj.name}</td>
                <td className="py-3">{subj.faculty}</td>
                <td className="py-3">{subj.time}</td>

              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

