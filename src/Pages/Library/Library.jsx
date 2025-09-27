import Navbar from "../../Components/Navbar"
import Footer from "../../Components/Footer"
import SearchandFilter from "../../Components/LibraryPageComps/SearchandFilter"
import BooksGrid from "../../Components/LibraryPageComps/BooksGrid"

function Library() {
    return (
        <>
            <Navbar />
            <div className='flex flex-col gap-8 pt-14 px-44 justify-center'>

                <SearchandFilter />
                <BooksGrid />
            </div>
            <Footer />
        </>
    )
}

export default Library