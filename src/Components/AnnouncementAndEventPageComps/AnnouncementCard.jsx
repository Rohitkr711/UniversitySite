import React from 'react'

function AnnouncementCard({ title, date, description }) {
    return (
        <>
            <article className="p-6 border rounded-lg shadow hover:shadow-lg transition cursor-pointer">
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-sm text-gray-500 mb-2">Posted: {date}</p>
                <p>{description}</p>
            </article>
        </>
    );
};

export default AnnouncementCard;
