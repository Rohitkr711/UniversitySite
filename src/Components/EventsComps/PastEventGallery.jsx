import cultureWeek from '../../../public/Media/cultureWeek.jpeg'
import RisingFest from '../../../public/Media/RisingFest.jpeg'
import photoWeek from '../../../public/Media/photoWeek.jpeg'



const events = [
  { title: "Spring Fest 2023", img: "https://images.unsplash.com/photo-1503424886307-b090341d25d1" },
  { title: "Rising Fest 2022", img: RisingFest },
  { title: "Spring Fest 2020", img: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef" },
  { title: "Kulture Week 2022", img: cultureWeek },
  { title: "Photo Week 2021", img: photoWeek },
  { title: "Annual Sports Day", img: "https://images.unsplash.com/photo-1517649763962-0c623066013b" },
  { title: "Music Ensemble", img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91" },
  { title: "Street Celebration", img: "https://images.unsplash.com/photo-1544986581-efac024faf62" },
  { title: "Cultural Fair 2022", img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952" },
];

export default function PastEventsGallery() {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-xl font-semibold text-blue-900 mb-4">
        Past Events Gallery
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {events.map((event, i) => (
          <div key={i} className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
            <img src={event.img} alt={event.title} className="h-28 w-full object-cover" />
            <p className="text-center text-sm font-medium text-gray-700 py-2">{event.title}</p>
          </div>
        ))}
      </div>

      <button className="mt-4 bg-blue-800 text-white py-2 px-4 rounded-xl hover:bg-blue-900">
        View All Galleries
      </button>
    </div>
  );
}
