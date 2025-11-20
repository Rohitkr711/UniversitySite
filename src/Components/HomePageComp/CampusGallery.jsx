// import clgClassroom from "../../../public/Media/ClgClassroom.jpg"
// import ClgLab from "../../../public/Media/ClgLab.jpg"
// import ClgAuditorium from "../../../public/Media/ClgAuditorium.jpg"
// import ClgLibrary from "../../../public/Media/ClgLibrary.jpg"

// export default function CampusGallery() {
//     const images = [
//         clgClassroom,
//         ClgAuditorium,
//         ClgLab,
//         ClgLibrary
//     ];

//     return (
//         <section id="gallery" className="py-16 px-44 bg-blue-50 ">
//             <div className="container mx-auto text-center">
//                 <div className="">

//                     <h2 className="text-2xl font-bold mb-2">Campus Gallery</h2>
//                     <p className="mb-8">Moments from classrooms, labs, and events.</p>
//                 </div>

//                 <div className=" grid md:grid-cols-4 gap-4">

//                     {images.map((img, i) => (
//                         <div className="" key={i}>

//                             <img key={i} src={img} alt={`Gallery ${i}`} className="rounded-lg shadow h-full" />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }


import { useRef } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

import clgClassroom from "../../../public/Media/ClgClassroom.jpg";
import ClgLab from "../../../public/Media/ClgLab.jpg";
import ClgAuditorium from "../../../public/Media/ClgAuditorium.jpg";
import ClgLibrary from "../../../public/Media/ClgLibrary.jpg";

export default function CampusGallery() {
    const images = [clgClassroom, ClgAuditorium, ClgLab, ClgLibrary];
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false, // hide default slick arrows
        autoplay: false, // manual control only
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <section id="gallery" className="py-16 px-6 md:px-44 bg-blue-50">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold mb-2">Campus Gallery</h2>
                <p className="mb-8 text-gray-700">
                    Moments from classrooms, labs, and events.
                </p>

                {/* Navigation Buttons */}
                <div className="flex justify-end gap-3 mb-4 pr-4">
                    <button
                        onClick={() => sliderRef.current.slickPrev()}
                        className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition"
                        aria-label="Previous"
                    >
                        <ChevronLeft className="w-5 h-5 text-blue-700" />
                    </button>
                    <button
                        onClick={() => sliderRef.current.slickNext()}
                        className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition"
                        aria-label="Next"
                    >
                        <ChevronRight className="w-5 h-5 text-blue-700" />
                    </button>
                </div>

                {/* Carousel */}
                <Slider ref={sliderRef} {...settings}>
                    {images.map((img, i) => (
                        <div key={i} className="px-3">
                            <div className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition">
                                <img
                                    src={img}
                                    alt={`Gallery ${i + 1}`}
                                    className="w-full h-[280px] object-cover rounded-xl"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

