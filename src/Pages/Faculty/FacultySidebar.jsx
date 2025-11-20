import React from "react";
import { NavLink } from "react-router";

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
          isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
        }`
      }
    >
      {children}
    </NavLink>
  );
}

export default function FacultySidebar() {
  return (
    <aside className="w-64 bg-white rounded-lg shadow-md p-4 
                     flex flex-col h-[calc(100vh-32px)] sticky top-4">

      {/* Title */}
      <div className="font-bold text-lg text-blue-600 mb-6">
        Faculty Portal
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        <NavItem to="/faculty/dashboard">Dashboard</NavItem>
        <NavItem to="/faculty/attendance">Attendance</NavItem>
        <NavItem to="/faculty/students">Students</NavItem>
        <NavItem to="/faculty/announcements">Announcements</NavItem>
        <NavItem to="/faculty/resources">Resources</NavItem>
      </nav>

      {/* Pushes this section to bottom */}
      <div className="mt-auto pt-6 ">
        <NavLink to="/" className="text-sm text-blue-500 hover:underline">
          Back to Home🏠
        </NavLink>
      </div>

    </aside>
  );
}
