import React from "react";

/*
  Placeholder chart area.
  When you want dynamic charts later, integrate recharts or chart.js.
*/
export default function AttendanceOverview() {
  return (
    <div className="bg-white rounded-lg shadow p-4 mt-6">
      <h3 className="font-semibold mb-3">Attendance Overview</h3>
      <div className="h-40 flex items-center justify-center text-gray-400">
        {/* placeholder */}
        <div className="text-center">
          <div className="text-xl font-semibold">Chart Placeholder</div>
          <div className="text-sm mt-2">Integrate recharts/chart.js for real charts</div>
        </div>
      </div>
    </div>
  );
}
