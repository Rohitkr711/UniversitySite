import BookCard from "./BookCard";

// function LibraryGridComp({ books }) {
//     if (books.length === 0)
//         return (
//             <p className="text-center text-gray-500 mt-10">No books found.</p>
//         );


//     return (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {books.map((book, index) => (
//                 <BookCard key={index} book={book} />
//             ))}
//         </div>
//     );
// }


function LibraryGridComp({ books }) {
    if (books.length === 0)
        return (
            <p className="text-center text-gray-500 mt-10">No books found.</p>
        );


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {books.map((book, index) => (
                <BookCard key={index} book={book} />
            ))}
        </div>
    );
}

export default LibraryGridComp;