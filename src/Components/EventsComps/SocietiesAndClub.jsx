import { Card } from "./Card";

export default function SocietiesClubs() {
  const sports = [
    "Basketball Team",
    "Swimming Club",
    "Hiking & Adventure",
    "Esports Varsity",
    "Yoga & Fitness",
  ];

  const clubs = [
    "Robotics Club",
    "Debate Society",
    "AI & Machine Learning",
    "Creative Writing",
    "Photography Guild",
    "International Students",
    "Dance Crew",
  ];

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-xl font-semibold text-blue-900 mb-4">
        Our Societies & Clubs
      </h2>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="font-medium text-blue-800 mb-2">Sports</h3>
          <div className="space-y-2">
            {sports.map((sport, i) => (
              <Card key={i} title={sport} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium text-blue-800 mb-2">Clubs</h3>
          <div className="space-y-2">
            {clubs.map((club, i) => (
              <Card key={i} title={club} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
