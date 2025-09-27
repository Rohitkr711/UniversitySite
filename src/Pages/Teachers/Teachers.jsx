import React from 'react'
import Navbar from '../../Components/Navbar.jsx'
import Footer from '../../Components/Footer.jsx'
import Hero from '../../Components/TeacherPageComps/Hero.jsx'
import TeachersGrid from '../../Components/TeacherPageComps/TeachersGrid.jsx'

function Teachers() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <TeachersGrid/>
    <Footer/>
    </>
  )
}

export default Teachers