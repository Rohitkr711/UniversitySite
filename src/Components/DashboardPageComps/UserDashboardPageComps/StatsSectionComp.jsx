// import StatsCardComp from "./StatsCardComp.jsx";

// export default function StatsSectionComp() {
//   return (
//     <div className="grid md:grid-cols-3 gap-6">
//       <StatsCardComp
//         title="Overall Attendance"
//         value="85.4%"
//       />

//       <StatsCardComp
//         title="Tuition Fees"
//         value="₹ 15,000"
//         extra="Due"
//         action="Pay Now"
//       />

//       <div className="bg-white p-6 rounded-xl shadow-sm">
//         <h3 className="text-gray-600">Current Course</h3>

//         <p className="text-2xl md:text-3xl font-bold mt-3">B-Tech</p>

//         <div className="mt-3 text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full w-fit">
//           Computer Science & Eng.
//         </div>
//       </div>
//     </div>
//   );
// }


// PART-2
import StatsCardComp from "./StatsCardComp.jsx";

export default function StatsSectionComp({ attendance, feesDue, course, department }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      
      <StatsCardComp
        title="Overall Attendance"
        value={attendance ? `${attendance}%` : "--"}
      />

      <StatsCardComp
        title="Tuition Fees"
        value={`₹ ${feesDue || 0}`}
        extra="Due"
        action="Pay Now"
      />

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-gray-600">Current Course</h3>

        <p className="text-2xl md:text-3xl font-bold mt-3">
          {course || "N/A"}
        </p>

        <div className="mt-3 text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full w-fit">
          {department || "N/A"}
        </div>
      </div>

    </div>
  );
}

