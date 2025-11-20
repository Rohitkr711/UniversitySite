// import MarksheetSectionComp from "./MarksheetSectionComp";
// import StatsSectionComp from "./StatsSectionComp";
// import SubjectsTableComp from "./SubjectsTableComp";
// import UserDashboardHeaderComp from "./UserDashboardHeaderComp";


// export default function UserDashboardMainPage() {
//   return (
//     <main className="min-h-screen bg-gray-50 p-6 md:p-12">
//       <div className="container mx-auto space-y-10 px-44">

//         <UserDashboardHeaderComp />

//         <StatsSectionComp />

//         <SubjectsTableComp />

//         <MarksheetSectionComp />

//       </div>
//     </main>
//   );
// }


// PART-2
import { useAuth } from "../../../context/AuthContext";

import MarksheetSectionComp from "./MarksheetSectionComp";
import StatsSectionComp from "./StatsSectionComp";
import SubjectsTableComp from "./SubjectsTableComp";
import UserDashboardHeaderComp from "./UserDashboardHeaderComp";

export default function UserDashboardMainPage() {
  const { currentUser, userName, profile, role, loading } = useAuth();

  if (loading) return <div className="p-10">Loading...</div>;
  if (!currentUser || role !== "student")
    return <div className="p-10 text-red-500">Access Denied</div>;

  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="container mx-auto space-y-10 px-44">

        <UserDashboardHeaderComp 
          name={userName || "Student"} 
        />

        <StatsSectionComp 
          attendance={profile?.attendance}
          feesDue={profile?.feesDue}
          course={profile?.course}
          department={profile?.department}
        />

        <SubjectsTableComp subjects={profile?.subjects || []} />

        <MarksheetSectionComp marksheets={profile?.marksheets || {}} />

      </div>
    </main>
  );
}

