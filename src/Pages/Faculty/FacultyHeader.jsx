// import React from "react";
// import { FACULTY_PROFILE } from "../../data/facultyMock";

// export default function FacultyHeader() {
//   const { name, department, initials } = FACULTY_PROFILE;
//   return (
//     <header className="flex items-center justify-between">
//       <div className="bg-white rounded-lg shadow p-6 flex-1 mr-6">
//         <h1 className="text-2xl font-bold">Welcome back, Professor {name.split(" ")[1]}!</h1>
//         <p className="text-sm text-gray-500 mt-1">Here is your academic overview and class insights.</p>
//       </div>

//       <div className="w-56 bg-white rounded-lg shadow p-4 flex items-center gap-3">
//         <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
//           {initials}
//         </div>
//         <div>
//           <div className="font-semibold">{name}</div>
//           <div className="text-sm text-gray-500">Faculty, {department}</div>
//         </div>
//       </div>
//     </header>
//   );
// }


// PART-2
// import React from "react";
// import { useAuth } from "../../context/AuthContext";

// export default function FacultyHeader() {
//   const { profile, currentUser } = useAuth();

//   // Extract dynamic values
//   const name = currentUser?.displayName || profile?.name || "Faculty";
//   const department = profile?.department || "Department";
  
//   // Create initials
//   const initials = name
//     .split(" ")
//     .map((n) => n[0])
//     .join("")
//     .slice(0, 2)
//     .toUpperCase();

//   // Extract last name for greeting
//   const lastName = name.split(" ")[1] || name;

//   return (
//     <header className="flex items-center justify-between">
//       <div className="bg-white rounded-lg shadow p-6 flex-1 mr-6">
//         <h1 className="text-2xl font-bold">
//           Welcome back, Professor {lastName}!
//         </h1>
//         <p className="text-sm text-gray-500 mt-1">
//           Here is your academic overview and class insights.
//         </p>
//       </div>

//       <div className="w-56 bg-white rounded-lg shadow p-4 flex items-center gap-3">
//         <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
//           {initials}
//         </div>
//         <div>
//           <div className="font-semibold">{name}</div>
//           <div className="text-sm text-gray-500">Faculty, {department}</div>
//         </div>
//       </div>
//     </header>
//   );
// }


// PART-3
// import React from "react";
// import { useAuth } from "../../context/AuthContext";

// export default function FacultyHeader() {
//   const { profile, currentUser } = useAuth();

//   const name = currentUser?.displayName || profile?.name || "Faculty";
//   const department = profile?.department || "Department";
//   const initials =
//     profile?.initials ||
//     name
//       .split(" ")
//       .map((n) => n[0])
//       .join("")
//       .toUpperCase();

//   return (
//     <header className="flex items-center justify-between">
//       <div className="bg-white rounded-lg shadow p-6 flex-1 mr-6">
//         <h1 className="text-2xl font-bold">
//           Welcome back, Professor {name.split(" ")[1] || name}!
//         </h1>
//         <p className="text-sm text-gray-500 mt-1">
//           Here is your academic overview and class insights.
//         </p>
//       </div>

//       <div className="w-56 bg-white rounded-lg shadow p-4 flex items-center gap-3">
//         <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
//           {initials}
//         </div>
//         <div>
//           <div className="font-semibold">{name}</div>
//           <div className="text-sm text-gray-500">Faculty, {department}</div>
//         </div>
//       </div>
//     </header>
//   );
// }


// PART-4
import React from "react";
import { useAuth } from "../../context/AuthContext";

export default function FacultyHeader() {
  const { profile, currentUser } = useAuth();
  console.log("AuthContext Data:", { profile, currentUser });


  const fullName =
  profile?.name ||
  currentUser?.displayName ||
  currentUser?.email?.split("@")[0] ||
  "Faculty";

const nameParts = fullName.trim().split(" ").filter(Boolean);

const firstName = nameParts[0]; // always safe


  // Split name safely
  // const nameParts = fullName.trim().split(" ");

  // Last name logic
  const lastName =
    nameParts.length > 1 ? nameParts[nameParts.length - 1] : fullName;

  const department = profile?.department || "Department";

  const initials =
    profile?.initials ||
    fullName
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  return (
    <header className="flex items-center justify-between">
      <div className="bg-white rounded-lg shadow p-6 flex-1 mr-6">
        <h1 className="text-2xl font-bold">
          Welcome back, Proffesor {firstName}!
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Here is your academic overview and class insights.
        </p>
      </div>

      <div className="w-56 bg-white rounded-lg shadow p-4 flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
          {initials}
        </div>
        <div>
          <div className="font-semibold">{fullName}</div>
          <div className="text-sm text-gray-500">Faculty, {department}</div>
        </div>
      </div>
    </header>
  );
}
