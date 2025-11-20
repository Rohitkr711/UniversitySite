import React from 'react'
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import AlumniHeroSection from '../../Components/AlumniPageComps/AlumniHeroComp'
import AlumniFilterComp from '../../Components/AlumniPageComps/AlumniFilterComp';
import AlumniMainPageComp from '../../Components/AlumniPageComps/AlumniMainPageComp.jsx';

function Alumni() {
  return (
    <>
    <Navbar/>
    <div className='px-44'>
        <AlumniMainPageComp/>
    </div>
    <Footer/>
    </>
  )
}

export default Alumni