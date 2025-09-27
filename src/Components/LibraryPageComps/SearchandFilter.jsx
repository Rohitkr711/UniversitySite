export default function SearchandFilter() {
    return (
        <>

            <div className=" py-6 flex flex-col md:flex-row gap-4 items-center">
                <input
                    type="search"
                    placeholder="Search by title, author or subject"
                    // value={search}
                    // onChange={(e) => setSearch(e.target.value)}
                    className="w-full md:w-2/3 p-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                />
                <select
                    // value={filter}
                    // onChange={(e) => setFilter(e.target.value)}
                    className="w-full md:w-1/3 p-2 border rounded-md shadow-sm"
                >
                    <option value="">All Subjects</option>
                    <option>Computer Science</option>
                    <option>Mathematics</option>
                    <option>Physics</option>
                    <option>Business</option>
                </select>
            </div>
        </>
    )
}
