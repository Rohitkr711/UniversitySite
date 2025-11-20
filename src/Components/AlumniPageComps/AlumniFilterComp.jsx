import React from 'react'

// export default function AlumniFilterComp({ selectedDept, setSelectedDept, search, setSearch }) {
//     const departments = [
//         "All Departments",
//         "Electrical Eng.",
//         "Mechanical Eng.",
//         "Biotechnology",
//         "Business Admin",
//     ];


//     return (
//         <aside className="w-full md:w-1/4 bg-white p-5 rounded-xl shadow-sm h-fit">
//             <div className="mb-4">
//                 <input
//                     type="text"
//                     placeholder="Search Alumni"
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                     className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-200"
//                 />
//             </div>


//             <h3 className="text-sm font-semibold text-gray-700 mb-2">Filter by Department</h3>
//             <ul className="space-y-2 text-sm text-gray-600">
//                 {departments.map((dept) => (
//                     <li key={dept} className="flex items-center gap-2">
//                         <input
//                             type="checkbox"
//                             checked={selectedDept.includes(dept)}
//                             onChange={() => {
//                                 if (dept === "All Departments") {
//                                     setSelectedDept([dept]);
//                                 } else {
//                                     setSelectedDept((prev) =>
//                                         prev.includes(dept)
//                                             ? prev.filter((d) => d !== dept)
//                                             : [...prev.filter((d) => d !== "All Departments"), dept]
//                                     );
//                                 }
//                             }}
//                         />
//                         <span>{dept}</span>
//                     </li>
//                 ))}
//             </ul>
//         </aside>
//     );
// }


export default function AlumniFilterComp({ selectedDept, setSelectedDept, search, setSearch }) {
    const departments = [
        "All Departments",
        "Electrical Eng.",
        "Mechanical Eng.",
        "Biotechnology",
        "Business Admin",
    ];


    const toggleDept = (dept) => {
        if (dept === "All Departments") {
            setSelectedDept(["All Departments"]);
            return;
        }


        setSelectedDept((prev) => {
            const cleaned = prev.filter((d) => d !== "All Departments");
            return cleaned.includes(dept)
                ? cleaned.filter((d) => d !== dept)
                : [...cleaned, dept];
        });
    };


    return (
        <aside className="w-full md:w-1/4 bg-white p-5 rounded-xl shadow-sm h-fit sticky top-4">
            <input
                type="text"
                placeholder="Search Alumni"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-200 mb-4"
            />


            <h3 className="text-sm font-semibold text-gray-700 mb-2">Filter by Department</h3>
            <ul className="space-y-2 text-sm text-gray-600">
                {departments.map((dept) => (
                    <li key={dept} className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={selectedDept.includes(dept)}
                            onChange={() => toggleDept(dept)}
                        />
                        <span>{dept}</span>
                    </li>
                ))}
            </ul>
        </aside>
    );
}
