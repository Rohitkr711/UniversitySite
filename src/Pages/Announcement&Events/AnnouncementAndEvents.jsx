import React from 'react'
import Navbar from '../../Components/Navbar'
import AnnouncementGrid from '../../Components/AnnouncementAndEventPageComps/AnnouncementGrid';
import Footer from '../../Components/Footer';
import EventGrid from '../../Components/AnnouncementAndEventPageComps/EventGrid';

function AnnouncementAndEvents() {
    return (
        <>
            <Navbar />

            <div className='flex flex-col gap-8 pt-14'>
                <AnnouncementGrid />
                <EventGrid />

            </div>
            <Footer className='' />
        </>
    )
}

export default AnnouncementAndEvents;