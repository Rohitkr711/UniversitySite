import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from '../Pages/Home/Home'
import AboutPage from '../Pages/About/AboutUs'
import CoursesPage from '../Pages/Course/Courses'
import TeachersPage from '../Pages/Teachers/Teachers'
import Library from '../Pages/Library/Library'
import PageNotFound from '../Pages/PageNotFound'
import AnnouncementAndEvents from '../Pages/Announcement&Events/AnnouncementAndEvents'

function PageRoutes() {
    return (
        <>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />

                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/teachers" element={<TeachersPage />} />

                <Route path="/library" element={<Library />} />
                <Route path="/Announcement&Events" element={<AnnouncementAndEvents />} />

                <Route path="/*" element={<PageNotFound />} />

            </Routes>

        </>
    )
}

export default PageRoutes;