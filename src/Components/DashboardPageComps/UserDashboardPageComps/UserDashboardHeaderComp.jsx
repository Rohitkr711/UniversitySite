// export default function UserDashboardHeaderComp() {
//   return (
//     <div>
//       <h1 className="text-2xl md:text-3xl font-semibold">
//         Welcome back, Student Name!
//       </h1>

//       <p className="text-gray-600 mt-1">
//         Here is your academic summary for the semester.
//       </p>
//     </div>
//   );
// }

// PART-2
export default function UserDashboardHeaderComp({ name }) {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-semibold">
        Welcome back, {name}!
      </h1>

      <p className="text-gray-600 mt-1">
        Here is your academic summary for the semester.
      </p>
    </div>
  );
}

