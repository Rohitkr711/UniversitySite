import AlumniHeroComp from "./AlumniHeroComp.jsx";
import AlumniFilterComp from "./AlumniFilterComp.jsx";
import AlumniGridComp from "./AlumniGridComp.jsx"
import { useState } from "react";

// export default function AlumniMainComp() {
//     const [search, setSearch] = useState("");
//     const [selectedDept, setSelectedDept] = useState(["All Departments"]);
//     const [activeCategory, setActiveCategory] = useState("All");



//     // const alumniList = [
//     //     {
//     //         name: "Dr. Alex Chen",
//     //         details: "Batch 2018 / Computer Science",
//     //         description: "AI startup acquired for $50M.",
//     //         image: "https://randomuser.me/api/portraits/men/32.jpg",
//     //     },
//     //     {
//     //         name: "Aisha Khan",
//     //         details: "Batch 2015 / Biochemistry",
//     //         description: "Developed novel biotech solutions.",
//     //         image: "https://randomuser.me/api/portraits/women/44.jpg",
//     //     },
//     //     {
//     //         name: "Breakhg Cancer Research",
//     //         details: "Batch 2014 / Research Science",
//     //         description: "Developed immunotherapy for startups.",
//     //         image: "https://randomuser.me/api/portraits/men/35.jpg",
//     //     },
//     //     {
//     //         name: "Forbes 30 Under 30",
//     //         details: "Batch 2016 / Business Admin.",
//     //         description: "Mentored 50+ successful startups.",
//     //         image: "https://randomuser.me/api/portraits/men/30.jpg",
//     //     },
//     //     {
//     //         name: "David Ramirz",
//     //         details: "Batch 2017 / Innovation Tech.",
//     //         description: "Founded 'InnovateX' incubator.",
//     //         image: "https://randomuser.me/api/portraits/men/20.jpg",
//     //     },
//     //     {
//     //         name: "Patented Quantum Chip",
//     //         details: "Batch 2013 / Computer Engineering",
//     //         description: "Revolutionary design for faster computing.",
//     //         image: "https://randomuser.me/api/portraits/women/65.jpg",
//     //     },
//     // ];


//     const alumniList = [
//         {
//             name: "Dr. Alex Chen",
//             details: "Batch 2018 / Computer Science",
//             description: "AI startup acquired for $50M.",
//             image: "https://randomuser.me/api/portraits/men/32.jpg",
//             category: "Innovation",
//         },
//         {
//             name: "Aisha Khan",
//             details: "Batch 2015 / Biochemistry",
//             description: "Developed novel biotech solutions.",
//             image: "https://randomuser.me/api/portraits/women/44.jpg",
//             category: "Research",
//         },
//         {
//             name: "Breakhg Cancer Research",
//             details: "Batch 2014 / Research Science",
//             description: "Developed immunotherapy for startups.",
//             image: "https://randomuser.me/api/portraits/men/35.jpg",
//             category: "Research",
//         },
//         {
//             name: "Forbes 30 Under 30",
//             details: "Batch 2016 / Business Admin.",
//             description: "Mentored 50+ successful startups.",
//             image: "https://randomuser.me/api/portraits/men/30.jpg",
//             category: "Industry Awards",
//         },
//         {
//             name: "David Ramirez",
//             details: "Batch 2017 / Innovation Tech.",
//             description: "Founded 'InnovateX' incubator.",
//             image: "https://randomuser.me/api/portraits/men/20.jpg",
//             category: "Innovation",
//         },
//         {
//             name: "Patented Quantum Chip",
//             details: "Batch 2013 / Computer Engineering",
//             description: "Revolutionary design for faster computing.",
//             image: "https://randomuser.me/api/portraits/women/65.jpg",
//             category: "Innovation",
//         },
//     ];



//     // const filteredAlumni = alumniList.filter((a) =>
//     //     a.name.toLowerCase().includes(search.toLowerCase())
//     // );

//     const filteredAlumni = alumniList.filter((a) => {
//         const matchesSearch = a.name.toLowerCase().includes(search.toLowerCase());
//         const matchesCategory = activeCategory === "All" || a.category === activeCategory;

//         return matchesSearch && matchesCategory;
//     });



//     return (
//         <main className="bg-gray-50 min-h-screen p-6 md:p-12">
//             <AlumniHeroComp />


//             <section className="flex flex-col md:flex-row gap-8">
//                 <AlumniFilterComp
//                     selectedDept={selectedDept}
//                     setSelectedDept={setSelectedDept}
//                     search={search}
//                     setSearch={setSearch}
//                 />


//                 {/* <AlumniGridComp alumniList={filteredAlumni} /> */}
//                 <AlumniGridComp
//                     alumniList={filteredAlumni}
//                     activeCategory={activeCategory}
//                     setActiveCategory={setActiveCategory}
//                 />

//             </section>
//         </main>
//     );
// }


export default function AlumniMainPageComp() {
    const [search, setSearch] = useState("");
    const [selectedDept, setSelectedDept] = useState(["All Departments"]);
    const [activeCategory, setActiveCategory] = useState("All");


    const alumniList = [
        {
            name: "Dr. Alex Chen",
            details: "Batch 2018 / Computer Science",
            description: "AI startup acquired for $50M.",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            category: "Innovation",
            department: "Electrical Eng.",
        },
        {
            name: "Aisha Khan",
            details: "Batch 2015 / Biochemistry",
            description: "Developed novel biotech solutions.",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            category: "Research",
            department: "Biotechnology",
        },
        {
            name: "Breakhg Cancer Research",
            details: "Batch 2014 / Research Science",
            description: "Developed immunotherapy for startups.",
            image: "https://randomuser.me/api/portraits/men/35.jpg",
            category: "Research",
            department: "Biotechnology",
        },
        {
            name: "Forbes 30 Under 30",
            details: "Batch 2016 / Business Admin.",
            description: "Mentored 50+ successful startups.",
            image: "https://randomuser.me/api/portraits/men/30.jpg",
            category: "Industry Awards",
            department: "Business Admin",
        },
        {
            name: "David Ramirez",
            details: "Batch 2017 / Innovation Tech.",
            description: "Founded 'InnovateX' incubator.",
            image: "https://randomuser.me/api/portraits/men/20.jpg",
            category: "Innovation",
            department: "Mechanical Eng.",
        },
        {
            name: "Patented Quantum Chip",
            details: "Batch 2013 / Computer Engineering",
            description: "Revolutionary design for faster computing.",
            image: "https://randomuser.me/api/portraits/women/65.jpg",
            category: "Innovation",
            department: "Electrical Eng.",
        },
    ];

    const filteredAlumni = alumniList.filter((a) => {
        const matchesSearch = a.name.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = activeCategory === "All" || a.category === activeCategory;
        const matchesDept =
            selectedDept.includes("All Departments") || selectedDept.includes(a.department);


        return matchesSearch && matchesCategory && matchesDept;
    });


    return (
        <main className="bg-gray-50 min-h-screen p-6 md:p-12">
            <AlumniHeroComp />

            <section className="flex flex-col md:flex-row gap-8">
                {/* Left Side Filters */}
                <AlumniFilterComp
                    selectedDept={selectedDept}
                    setSelectedDept={setSelectedDept}
                    search={search}
                    setSearch={setSearch}
                />

                {/* Right Side Grid */}
                <AlumniGridComp
                    alumniList={filteredAlumni}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                />
            </section>
        </main>
    );
}