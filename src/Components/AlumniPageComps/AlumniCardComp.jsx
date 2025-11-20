// function AlumniCard({ alumni }) {
//     return (
//         <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition border border-gray-100">
//             <div className="bg-blue-100 h-20"></div>
//             <div className="-mt-10 flex justify-center">
//                 <img
//                     src={alumni.image}
//                     alt={alumni.name}
//                     className="w-20 h-20 rounded-full border-4 border-white object-cover"
//                 />
//             </div>
//             <div className="text-center px-4 pb-5 mt-2">
//                 <h3 className="font-semibold text-gray-800">{alumni.name}</h3>
//                 <p className="text-sm text-gray-600">{alumni.details}</p>
//                 <p className="text-xs text-gray-500 mt-1">{alumni.description}</p>
//                 <button className="mt-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-md hover:bg-blue-700 transition">
//                     Read More
//                 </button>
//             </div>
//         </div>
//     );
// }


export default function AlumniCardComp({ alumni }) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition border border-gray-100">
            <div className="bg-blue-100 h-20"></div>
            <div className="-mt-10 flex justify-center">
                <img
                    src={alumni.image}
                    alt={alumni.name}
                    className="w-20 h-20 rounded-full border-4 border-white object-cover"
                />
            </div>
            <div className="text-center px-4 pb-5 mt-2">
                <h3 className="font-semibold text-gray-800">{alumni.name}</h3>
                <p className="text-sm text-gray-600">{alumni.details}</p>
                <p className="text-xs text-gray-500 mt-1">{alumni.description}</p>
                <button className="mt-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-md hover:bg-blue-700 transition">
                    Read More
                </button>
            </div>
        </div>
    );
}