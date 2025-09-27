function EventCard({ day, month, title, description, venue }) {

    return (
        <>
            <article className="flex items-start space-x-4 border p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer">
                <div className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center">
                    <span className="block text-2xl font-bold">{day}</span>
                    <span className="uppercase">{month}</span>
                </div>
                <div>
                    <h3 className="font-semibold text-lg">{title}</h3>
                    <p>{description}</p>
                    <p className="text-sm text-gray-500">Venue: {venue}</p>
                </div>
            </article>
        </>
    );
};

export default EventCard;
