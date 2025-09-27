import BookCard from "./BookCard";
import calculus from "../../../public/Media/Calculus.jpg"
import AIimg from "../../../public/Media/AI.jpg"
import physicsimg from "../../../public/Media/physics.jpg"



function BooksGrid() {

    const Books = [
        {
            id: 1,
            title: "Introduction to Artificial Intelligence",
            author: "Dr. R. Sharma",
            subject: "Computer Science",
            desc: "A beginner-friendly introduction to AI concepts, algorithms, and applications.",
            img: AIimg,
            pdf: "/pdf/pdf1.pdf",
        },
        {
            id: 2,
            title: "Advanced Calculus",
            author: "Prof. S. Mishra",
            subject: "Mathematics",
            desc: "In-depth treatment of calculus for undergraduates and early graduate students.",
            img: calculus,
            pdf: "/pdf/pdf1.pdf",
        },
        {
            id: 3,
            title: "Modern Physics",
            author: "Dr. A. Verma",
            subject: "Physics",
            desc: "Covers relativity, quantum mechanics, and applications in modern research.",
            img: physicsimg,
            pdf: "/pdf/pdf1.pdf",
        },
    ];


    return (
        <>
            <section className=" mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-44">
                {Books.map((book, idx) => (

                    <BookCard key={idx} book={book} />
                ))}
            </section>
        </>
    )
}

export default BooksGrid;