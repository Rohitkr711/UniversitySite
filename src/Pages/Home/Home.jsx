import About from '../../Components/HomePageComp/about';
import Courses from '../../Components/HomePageComp/courses';
import Hero from '../../Components/HomePageComp/Hero';
import MeetOurTeachers from '../../Components/HomePageComp/MeetOurTeachers';
import Navbar from '../../Components/Navbar';
import CampusGallery from '../../Components/HomePageComp/CampusGallery';
import Contact from '../../Components/HomePageComp/Contact';
import Footer from '../../Components/Footer';

function Home() {
    return (
        <>
            <Navbar/>
            {/* <div className=''> */}

            <Hero/>
            {/* </div> */}
            <About/>
            <Courses/>
            <MeetOurTeachers/>
            <CampusGallery/>
            <Contact/>
            <Footer/>

        </>
    )
}

export default Home;