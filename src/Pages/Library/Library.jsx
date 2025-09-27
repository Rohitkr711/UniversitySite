import Navbar from "../../Components/Navbar"
import Footer from "../../Components/Footer"
import SearchandFilter from "../../Components/LibraryPageComps/SearchandFilter"
import BooksGrid from "../../Components/LibraryPageComps/BooksGrid"

function Library() {
  return (
    <>
    <Navbar/>
    <SearchandFilter/>
    <BooksGrid/>

    <Footer/>
    </>
  )
}

export default Library