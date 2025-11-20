import AlumniCardComp from './AlumniCardComp.jsx';

// export default function AlumniGrid({ alumniList }) {
//     return (
//         <div className="w-full md:w-3/4 bg-white p-6 rounded-xl shadow-sm">
//             <h2 className="text-xl font-semibold mb-4">Featured Achievements</h2>


//             {/* Filter Tabs */}
//             <div className="flex flex-wrap gap-3 mb-6">
//                 {["All", "Industry Awards", "Research", "Innovation"].map((cat) => (
//                     <button
//                         key={cat}
//                         className={`px-3 py-1 rounded-md text-sm font-medium border transition ${cat === "Industry Awards"
//                                 ? "bg-blue-600 text-white border-blue-600"
//                                 : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
//                             }`}
//                     >
//                         {cat}
//                     </button>
//                 ))}
//             </div>


//             {/* Alumni Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {alumniList.map((alum, idx) => (
//                     <AlumniCardComp key={idx} alumni={alum} />
//                 ))}
//             </div>
//         </div>
//     );
// }


// export default function AlumniGridComp({ alumniList, activeCategory, setActiveCategory }) {
//     const categories = ["All", "Industry Awards", "Research", "Innovation"];

//     return (
//         <div className="w-full md:w-3/4 bg-white p-6 rounded-xl shadow-sm">
//             <h2 className="text-xl font-semibold mb-4">Featured Achievements</h2>

//             {/* Category Tabs */}
//             <div className="flex flex-wrap gap-3 mb-6">
//                 {categories.map((cat) => (
//                     <button
//                         key={cat}
//                         onClick={() => setActiveCategory(cat)}
//                         className={`px-3 py-1 rounded-md text-sm font-medium border transition ${activeCategory === cat
//                             ? "bg-blue-600 text-white border-blue-600"
//                             : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
//                             }`}
//                     >
//                         {cat}
//                     </button>
//                 ))}
//             </div>

//             {/* Alumni Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {alumniList.map((alum, idx) => (
//                     <AlumniCardComp key={idx} alumni={alum} />
//                 ))}
//             </div>
//         </div>
//     );
// }


export default function AlumniGridComp({ alumniList, activeCategory, setActiveCategory }) {
    const categories = ["All", "Industry Awards", "Research", "Innovation"];


    return (
        <div className="w-full md:w-3/4 bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Featured Achievements</h2>


            {/* Category Tabs */}
            <div className="flex flex-wrap gap-3 mb-6">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-3 py-1 rounded-md text-sm font-medium border transition ${activeCategory === cat
                                ? "bg-blue-600 text-white border-blue-600"
                                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>


            {/* Alumni Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {alumniList.map((alum, idx) => (
                    <AlumniCardComp key={idx} alumni={alum} />
                ))}
            </div>
        </div>
    );
}


