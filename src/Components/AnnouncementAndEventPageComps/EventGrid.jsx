import EventCard from "./EventCard"

function EventGrid() {

    const EventCardData = [
        {
            day: '25',
            month: 'SEP',
            title: 'Annual Tech Fest',
            description: 'Join us for workshops, hackathons, and competitions showcasing innovation and creativity.',
            venue: 'Venue: Main Auditorium',
        },
        {
            day: '05',
            month: 'OCT',
            title: 'Guest Lecture: Future of AI',
            description: 'A special lecture by Dr. Ramesh Kapoor on Artificial Intelligence trends in education & research.',
            venue: 'Venue: Conference Hall-B',
        },

        {
            day: '15',
            month: 'OCT',
            title: 'Sports Meet 2025',
            description: 'Annual inter-department sports competition. Registrations are now open for all categories.',
            venue: 'Venue: University Sports Ground',
        },

    ]

    return (
        <>
            <div className=" px-44 flex flex-col gap-4">
                <p className="font-bold text-2xl">Upcoming events</p>
                <div className="flex flex-col gap-4">

                    {EventCardData.map((cardData, idx) => (

                        <EventCard key={idx} day={cardData.day} month={cardData.month} title={cardData.title} description={cardData.description} venue={cardData.venue} />
                    ))}
                </div>
            </div>

        </>
    )
}

export default EventGrid