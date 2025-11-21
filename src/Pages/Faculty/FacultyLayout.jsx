import FacultySidebar from "./FacultySidebar";
import FacultyHeader from "./FacultyHeader";
import { Outlet } from "react-router";

export default function FacultyLayout() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <FacultySidebar />
      <div className="flex-1 p-8">
        <FacultyHeader />
        <main className="mt-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
