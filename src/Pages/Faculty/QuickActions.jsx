import React from "react";

export default function QuickActions() {
  return (
    <div className="bg-white rounded-lg shadow p-4 mt-6 w-full md:w-72">
      <h3 className="font-semibold mb-3">Quick Actions</h3>
      <div className="flex flex-col gap-3">
        <button className="bg-blue-600 text-white px-3 py-2 rounded">Upload Notes / PDFS</button>
        <button className="border px-3 py-2 rounded">Download Student Reports</button>
        <button className="border px-3 py-2 rounded">Send Announcement</button>
      </div>
    </div>
  );
}
