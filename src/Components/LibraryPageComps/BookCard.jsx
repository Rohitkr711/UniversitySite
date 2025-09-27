
function BookCard({ book }) {
    return (
        <>
            <div
                key={book.id}
                className="bg-white rounded-lg flex flex-col"
            >
                <div className=" shadow-md rounded-md flex flex-col justify-between h-3/4 hover:shadow-2xl cursor-pointer">

                    <div className="w-full h-3/4 mb-4 overflow-hidden rounded-t-md">

                        <img src={book.img} alt={book.title} className="h-full w-full object-fill" />
                    </div>
                    <div className="p-4 flex flex-col">
                        <div>

                            <h3 className="text-lg font-semibold text-blue-900">{book.title}</h3>
                            <p className="text-sm text-gray-600 mt-1">
                                Author: {book.author} • {book.subject}
                            </p>
                            <p className="text-sm text-gray-500 mt-2 flex-grow">{book.desc}</p>
                        </div>
                        <div className="mt-4 flex space-x-2">
                            <a
                                href={book.pdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 text-center text-black bg-white border py-2 rounded-md hover:bg-gray-100"
                            >
                                View
                            </a>
                            <a
                                href={book.pdf}
                                download
                                className="flex-1 text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                            >
                                Download
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookCard;