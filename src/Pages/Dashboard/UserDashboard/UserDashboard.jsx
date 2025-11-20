import React from 'react'
import Navbar from '../../../Components/Navbar';
import Footer from '../../../Components/Footer';
import UserDashboardMainPAge from '../../../Components/DashboardPageComps/UserDashboardPageComps/UserDashboardMainPage.jsx'

function UserDashboard() {
    return (
        <>
            <Navbar />
            <div>
                <UserDashboardMainPAge/>
            </div>
            <Footer />
        </>
    )
}

export default UserDashboard;


// import { useAuth } from "../../../context/AuthContext";

// export default function UserDashboard() {
//   const { currentUser, role, profile, loading } = useAuth();

//   if (loading) {
//     return <div className="p-10 text-center">Loading your dashboard...</div>;
//   }

//   if (!currentUser || role !== "student") {
//     return <div className="p-10 text-center text-red-500">
//       Access Denied: Student login required.
//     </div>;
//   }

//   return (
//     <div className="min-h-screen px-6 md:px-20 lg:px-32 py-10 bg-gray-50">
      
//       {/* Header */}
//       <h1 className="text-3xl font-bold mb-6 text-blue-700">
//         Student Dashboard
//       </h1>

//       {/* Student Info */}
//       <div className="bg-white shadow rounded-lg p-6 mb-8">
//         <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
//         <p><strong>Name:</strong> {currentUser.displayName || "No name"}</p>
//         <p><strong>Email:</strong> {currentUser.email}</p>
//         <p><strong>Department:</strong> {profile?.department || "N/A"}</p>
//         <p><strong>Course:</strong> {profile?.course || "N/A"}</p>
//       </div>

//       {/* Academic Stats */}
//       <div className="bg-white shadow rounded-lg p-6 mb-8">
//         <h2 className="text-xl font-semibold mb-4">Academic Summary</h2>

//         <p><strong>Attendance:</strong> {profile?.attendance ?? "--"}%</p>
//         <p><strong>Fees Due:</strong> ₹{profile?.feesDue ?? 0}</p>

//         <h3 className="mt-4 font-semibold">Subjects:</h3>
//         <ul className="list-disc ml-5">
//           {profile?.subjects?.length > 0 ? (
//             profile.subjects.map((s, i) => <li key={i}>{s}</li>)
//           ) : (
//             <p>No subjects added</p>
//           )}
//         </ul>
//       </div>

//       {/* Marksheet Download Section */}
//       <div className="bg-white shadow rounded-lg p-6">
//         <h2 className="text-xl font-semibold mb-4">Download Marksheet</h2>

//         {profile?.marksheets ? (
//           Object.keys(profile.marksheets).map((sem, i) => (
//             <div key={i} className="mb-3">
//               <p className="font-medium capitalize">{sem}</p>
//               <a
//                 href={profile.marksheets[sem]}
//                 target="_blank"
//                 className="text-blue-600 underline"
//               >
//                 Download PDF
//               </a>
//             </div>
//           ))
//         ) : (
//           <p>No marksheets available.</p>
//         )}
//       </div>

//     </div>
//   );
// }
