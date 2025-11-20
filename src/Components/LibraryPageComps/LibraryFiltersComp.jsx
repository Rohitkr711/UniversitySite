// function LibraryFiltersComp({ search, setSearch, subject, setSubject }) {
//     const subjects = ["All Subjects", "Physics", "Mathematics", "Computer Science", "Chemistry", "Biology"];


//     return (
//         <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
//             <input
//                 type="text"
//                 placeholder="Search by title, author or subject"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="border border-gray-300 rounded-md px-3 py-2 w-full md:w-2/3 outline-none focus:ring-2 focus:ring-blue-200"
//             />


//             <select
//                 value={subject}
//                 onChange={(e) => setSubject(e.target.value)}
//                 className="border border-gray-300 rounded-md px-3 py-2 w-full md:w-1/3 outline-none focus:ring-2 focus:ring-blue-200"
//             >
//                 {subjects.map((s, i) => (
//                     <option key={i}>{s}</option>
//                 ))}
//             </select>
//         </div>
//     );
// }


function LibraryFiltersComp({ search, setSearch, subject, setSubject }) {
    const subjects = ["All Subjects", "Physics", "Mathematics", "Computer Science", "Chemistry", "Biology"];


    return (
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-8 bg-white p-4 rounded-md shadow-sm sticky top-0 z-20">
            <input
                type="text"
                placeholder="Search by title, author or subject"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full md:w-2/3 outline-none focus:ring-2 focus:ring-blue-200"
            />


            <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full md:w-1/3 outline-none focus:ring-2 focus:ring-blue-200"
            >
                {subjects.map((s, i) => (
                    <option key={i}>{s}</option>
                ))}
            </select>
        </div>
    );
}

export default LibraryFiltersComp;