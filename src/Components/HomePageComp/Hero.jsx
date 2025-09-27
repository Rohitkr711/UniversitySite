import HeroImage from "../../../public/Media/clg_campus.jpg";

export default function Hero() {
  return (
    <section id="home" className="bg-blue-50 py-16  px-44">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="">
          <h1 className="text-3xl font-bold mb-4">
            Empowering Students for a Brighter Tomorrow
          </h1>
          <p className="mb-6">
            Holistic education, modern labs, and a caring community — join
            Kolhan University and start your learning journey.
          </p>
          <div className="flex gap-4">
            <a
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              href="course.html"
            >
              Apply Now
            </a>
            <a className="border px-4 py-2 rounded-lg" href="#about">
              Learn More
            </a>
          </div>
        </div>

        <div className="">
          <div className=" rounded-xl shadow p-4 bg-white">
            <div className="font-bold text-center mb-2 rounded-xl">Our Campus</div>
            <img src={HeroImage} alt="Campus" className="rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
