// import HeroImage from "../../../public/Media/clg_campus.jpg";

// export default function Hero() {
//   return (
//     <section id="home" className="bg-blue-50 py-16  px-44">
//       <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
//         <div className="">
//           <h1 className="text-3xl font-bold mb-4">
//             Empowering Students for a Brighter Tomorrow
//           </h1>
//           <p className="mb-6">
//             Holistic education, modern labs, and a caring community — join
//             Kolhan University and start your learning journey.
//           </p>
//           <div className="flex gap-4">
//             <a
//               className="bg-blue-600 text-white px-4 py-2 rounded-lg"
//               href="course.html"
//             >
//               Apply Now
//             </a>
//             <a className="border px-4 py-2 rounded-lg" href="#about">
//               Learn More
//             </a>
//           </div>
//         </div>

//         <div className="">
//           <div className=" rounded-xl shadow p-4 bg-white">
//             <div className="font-bold text-center mb-2 rounded-xl">Our Campus</div>
//             <img src={HeroImage} alt="Campus" className="rounded-xl" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import Slider from "react-slick";
import img1 from "../../../public/Media/clg_campus.jpg";
import img2 from "../../../public/Media/clgAuditorium.jpg";
import img3 from "../../../public/Media/clgLab.jpg";

export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section id="home" className="bg-blue-50 py-16 px-6 md:px-44">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* ---------- LEFT TEXT SECTION ---------- */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
            Empowering Students for a Brighter Tomorrow
          </h1>
          <p className="mb-6 text-gray-700 leading-relaxed">
            Holistic education, modern labs, and a caring community — join
            Kolhan University and start your learning journey.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
              href="course.html"
            >
              Apply Now
            </a>
            <a
              className="border border-gray-400 px-5 py-2 rounded-lg hover:bg-gray-100 transition"
              href="#about"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* ---------- RIGHT IMAGE CAROUSEL SECTION ---------- */}
        <div className="rounded-xl shadow p-4 bg-white">
          <div className="font-bold text-center mb-3">Our Campus</div>
          <div className="rounded-xl overflow-hidden">
            <Slider {...settings}>
              {[img1, img2, img3].map((img, i) => (
                <div key={i}>
                  <img
                    src={img}
                    alt={`Campus ${i + 1}`}
                    className="w-full h-[350px] object-cover rounded-xl"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

