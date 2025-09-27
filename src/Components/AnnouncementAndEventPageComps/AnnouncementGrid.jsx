import AnnouncementCard from "./AnnouncementCard"

function AnnouncementGrid() {

    const AnnouncementCardData = [
        {
            title: 'Semester Exams Schedule Released',
            date: 'Posted: Sept 15, 2025',
            description: 'Final semester examination timetable for all courses has been published. Students are advised to download from the Student Portal'
        },
        {
            title: 'Scholarship Applications Open',
            date: 'Posted: Sept 12, 2025',
            description: 'Applications for merit-based scholarships are open until Oct 5. Eligible students can apply online.'
        },

        {
            title: 'Library Extended Hours',
            date: 'Posted: Sept 10, 2025',
            description: 'The central library will now remain open till 10 PM on weekdays to support students preparing for exams.'
        },

    ]

    return (
        <>
            <div className=" px-44 flex flex-col gap-4">
                <p className="font-bold text-2xl">Latest Announcement</p>
                <div className="flex gap-4 flex-grow">

                    {AnnouncementCardData.map((cardData, idx) => (

                        <AnnouncementCard key={idx} title={cardData.title} date={cardData.date} description={cardData.description} />
                    ))}
                </div>
            </div>

        </>
    )
}

export default AnnouncementGrid