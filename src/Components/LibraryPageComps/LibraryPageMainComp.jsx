import LibraryFiltersComp from "./LibraryFiltersComp";
import LibraryGridComp from "./LibraryGridComp";
import { useState } from "react";

// export default function LibraryPageMainComp() {
//     const [search, setSearch] = useState("");
//     const [subject, setSubject] = useState("All Subjects");


//     const books = [
//         {
//             title: "Introduction to Artificial Intelligence",
//             author: "Dr. R. Sharma",
//             subject: "Computer Science",
//             description:
//                 "A beginner-friendly introduction to AI concepts, algorithms, and applications.",
//             image:
//                 "https://cdn.shopify.com/s/files/1/0657/6821/6605/files/ai-intro-book.jpg?v=1700000000",
//         },
//         {
//             title: "Advanced Calculus",
//             author: "Prof. S. Mishra",
//             subject: "Mathematics",
//             description:
//                 "In-depth treatment of calculus for undergraduates and early graduate students.",
//             image:
//                 "https://m.media-amazon.com/images/I/81p7waP2u6L._AC_UF1000,1000_QL80_.jpg",
//         },
//         {
//             title: "Modern Physics",
//             author: "Dr. A. Verma",
//             subject: "Physics",
//             description:
//                 "Covers relativity, quantum mechanics, and applications in modern research.",
//             image:
//                 "https://cdn.kobo.com/book-images/7f529c60-1cdd-4b5a-b8b9-c307ef8a5829/1200/1200/False/physics-handbook.jpg",
//         },
//     ];


//     const filteredBooks = books.filter((book) => {
//         const matchesSearch = book.title
//             .toLowerCase()
//             .includes(search.toLowerCase()) ||
//             book.author.toLowerCase().includes(search.toLowerCase()) ||
//             book.subject.toLowerCase().includes(search.toLowerCase());


//         const matchesSubject =
//             subject === "All Subjects" || book.subject === subject;


//         return matchesSearch && matchesSubject;
//     });


//     return (
//         <main className="bg-gray-50 min-h-screen py-12 px-6 md:px-16">
//             <div className="container mx-auto">
//                 <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">
//                     Library Resources
//                 </h1>


//                 <LibraryFiltersComp
//                     search={search}
//                     setSearch={setSearch}
//                     subject={subject}
//                     setSubject={setSubject}
//                 />


//                 <LibraryGridComp books={filteredBooks} />
//             </div>
//         </main>
//     );
// }


// export default function LibraryPageMainComp() {
//     const [search, setSearch] = useState("");
//     const [subject, setSubject] = useState("All Subjects");

//     const books = [
//         {
//             title: "Introduction to Artificial Intelligence",
//             author: "Dr. R. Sharma",
//             subject: "Computer Science",
//             description:
//                 "A beginner-friendly introduction to AI concepts, algorithms, and applications.",
//             image: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QUl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
//         },
//         {
//             title: "Advanced Calculus",
//             author: "Prof. S. Mishra",
//             subject: "Mathematics",
//             description:
//                 "In-depth treatment of calculus for undergraduates and early graduate students.",
//             image: "https://m.media-amazon.com/images/I/4129eyCU90L._AC_UF1000,1000_QL80_.jpg",
//         },
//         {
//             title: "Modern Physics",
//             author: "Dr. A. Verma",
//             subject: "Physics",
//             description:
//                 "Covers relativity, quantum mechanics, and applications in modern research.",
//             image: "https://m.media-amazon.com/images/I/61U2JekMS0L.jpg",
//         },
//         {
//             title: "Organic Chemistry Essentials",
//             author: "Dr. P. Mehta",
//             subject: "Chemistry",
//             description:
//                 "A comprehensive guide to organic compounds, reactions, and mechanisms.",
//             image: "https://i.pinimg.com/474x/99/45/57/994557409cfe7680273125d9917ad897.jpg",
//         },
//         {
//             title: "Cell Biology Fundamentals",
//             author: "Prof. K. Jain",
//             subject: "Biology",
//             description:
//                 "Explores the structure, function, and dynamics of biological cells.",
//             image: "https://m.media-amazon.com/images/I/61dwTv55Q0L._UF1000,1000_QL80_.jpg",
//         },
//         {
//             title: "Quantum Mechanics Simplified",
//             author: "Dr. R. Bose",
//             subject: "Physics",
//             description:
//                 "An approachable guide to understanding the foundations of quantum mechanics.",
//             image: "https://images.routledge.com/common/jackets/crclarge/978142007/9781420078725.jpg",
//         },
//         {
//             title: "Linear Algebra and Its Applications",
//             author: "Prof. D. Khanna",
//             subject: "Mathematics",
//             description:
//                 "Matrix theory, vector spaces, and linear transformations explained simply.",
//             image: "https://m.media-amazon.com/images/I/71cBqmJvPVL._AC_UF1000,1000_QL80_.jpg",
//         },
//         {
//             title: "Data Structures in C++",
//             author: "Er. A. Kapoor",
//             subject: "Computer Science",
//             description:
//                 "A complete reference for core data structures and algorithms in C++.",
//             image: "https://www.zybooks.com/wp-content/uploads/2018/11/DSA-C-cover.png",
//         },
//     ];

//     const filteredBooks = books.filter((book) => {
//         const matchesSearch =
//             book.title.toLowerCase().includes(search.toLowerCase()) ||
//             book.author.toLowerCase().includes(search.toLowerCase()) ||
//             book.subject.toLowerCase().includes(search.toLowerCase());


//         const matchesSubject =
//             subject === "All Subjects" || book.subject === subject;


//         return matchesSearch && matchesSubject;
//     });


//     return (
//         <main className="bg-gray-50 min-h-screen py-12 px-6 md:px-16">
//             <div className="container mx-auto">
//                 <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">
//                     Library Resources
//                 </h1>


//                 <LibraryFiltersComp
//                     search={search}
//                     setSearch={setSearch}
//                     subject={subject}
//                     setSubject={setSubject}
//                 />


//                 <LibraryGridComp books={filteredBooks} />
//             </div>
//         </main>
//     );
// }


export default function LibraryPageMainComp() {
    const [search, setSearch] = useState("");
    const [subject, setSubject] = useState("All Subjects");

    const books = [
        {
            title: "Introduction to Artificial Intelligence",
            author: "Dr. R. Sharma",
            subject: "Computer Science",
            description:
                "A beginner-friendly introduction to AI concepts, algorithms, and applications.",
            image: "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg",
        },
        {
            title: "Advanced Calculus",
            author: "Prof. S. Mishra",
            subject: "Mathematics",
            description:
                "In-depth treatment of calculus for undergraduates and early graduate students.",
            image: "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg",
        },
        {
            title: "Modern Physics",
            author: "Dr. A. Verma",
            subject: "Physics",
            description:
                "Covers relativity, quantum mechanics, and applications in modern research.",
            image: "https://images.pexels.com/photos/256369/pexels-photo-256369.jpeg",
        },
        {
            title: "Organic Chemistry Essentials",
            author: "Dr. P. Mehta",
            subject: "Chemistry",
            description:
                "A comprehensive guide to organic compounds, reactions, and mechanisms.",
            image: "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg",
        },
        {
            title: "Cell Biology Fundamentals",
            author: "Prof. K. Jain",
            subject: "Biology",
            description:
                "Explores the structure, function, and dynamics of biological cells.",
            image: "https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg",
        },
        {
            title: "Quantum Mechanics Simplified",
            author: "Dr. R. Bose",
            subject: "Physics",
            description:
                "An approachable guide to understanding the foundations of quantum mechanics.",
            image: "https://images.pexels.com/photos/256369/pexels-photo-256369.jpeg",
        },
        {
            title: "Linear Algebra and Its Applications",
            author: "Prof. D. Khanna",
            subject: "Mathematics",
            description:
                "Matrix theory, vector spaces, and linear transformations explained simply.",
            image: "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg",
        },
        {
            title: "Data Structures in C++",
            author: "Er. A. Kapoor",
            subject: "Computer Science",
            description:
                "A complete reference for core data structures and algorithms in C++.",
            image: "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg",
        },
    ];

    const filteredBooks = books.filter((book) => {
        const matchesSearch =
            book.title.toLowerCase().includes(search.toLowerCase()) ||
            book.author.toLowerCase().includes(search.toLowerCase()) ||
            book.subject.toLowerCase().includes(search.toLowerCase());


        const matchesSubject =
            subject === "All Subjects" || book.subject === subject;


        return matchesSearch && matchesSubject;
    });


    return (
        <main className="bg-gray-50 min-h-screen py-12 px-6 md:px-16">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">
                    Library Resources
                </h1>


                <LibraryFiltersComp
                    search={search}
                    setSearch={setSearch}
                    subject={subject}
                    setSubject={setSubject}
                />


                <LibraryGridComp books={filteredBooks} />
            </div>
        </main>
    );
}