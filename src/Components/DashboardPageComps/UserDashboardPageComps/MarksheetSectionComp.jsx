// export default function MarksheetSectionComp() {
//   return (
//     <div className="bg-white p-6 rounded-xl shadow-sm">
//       <h3 className="font-semibold">Marksheet</h3>
//       <p className="text-gray-600 mt-1">
//         View your detailed results for all previous semesters.
//       </p>

//       <div className="flex justify-end mt-4">
//         <button className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
//           View / Download Marksheet
//         </button>
//       </div>
//     </div>
//   );
// }

// PART-2
export default function MarksheetSectionComp({ marksheets }) {
  const keys = Object.keys(marksheets || {});

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="font-semibold">Marksheet</h3>
      <p className="text-gray-600 mt-1">
        View your detailed results for all previous semesters.
      </p>

      <div className="mt-4 space-y-3">
        {keys.length === 0 && <p>No marksheets available.</p>}

        {keys.map((sem, i) => (
          <div key={i} className="flex justify-between items-center">
            <span className="font-medium capitalize">{sem}</span>
            <a
              href={marksheets[sem]}
              target="_blank"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Download PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

