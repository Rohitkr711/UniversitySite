import React from 'react'
import Navbar from '../../Components/Navbar'
import AnnouncementGrid from '../../Components/AnnouncementAndEventPageComps/AnnouncementGrid';
import Footer from '../../Components/Footer';
import EventGrid from '../../Components/AnnouncementAndEventPageComps/EventGrid';
import EventsHeader from '../../Components/EventsComps/EventsHeader';
import SocietiesClubs from '../../Components/EventsComps/SocietiesAndClub';
import PastEventsGallery from '../../Components/EventsComps/PastEventGallery';

function ExtraCurricular() {
    return (
        <>
            <Navbar />

            <div className='flex flex-col gap-8 pt-14 px-44'>
                <EventsHeader/>
                <div className='flex justify-around items-center'>
                    <SocietiesClubs/>
                    <PastEventsGallery/>

                </div>
                {/* <AnnouncementGrid /> */}
                {/* <EventGrid /> */}

            </div>
            <Footer className='' />
        </>
    )
}

export default ExtraCurricular;