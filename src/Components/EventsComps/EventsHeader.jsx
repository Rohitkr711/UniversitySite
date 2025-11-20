import scienceLab from '../../../public/Media/scienceLab.jpeg'
import SportsField from '../../../public/Media/sportsField.jpeg'



export default function EventsHeader() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md">
      <div className="relative grid grid-cols-3">
        <img
          src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70"
          alt="Students Music"
          className="object-cover w-full h-56"
        />
        <img
          src={scienceLab}
          alt="Science Lab"
          className="object-cover w-full h-56"
        />
        <img
          src={SportsField}

          alt="Sports Field"
          className="object-cover w-full h-56"
        />
        <div className="absolute left-6 bottom-6 text-white text-4xl font-bold drop-shadow-lg">
          Vibrant Campus Life
        </div>
      </div>
    </div>
  );
}
