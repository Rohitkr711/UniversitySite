// import TP1 from "../../../public/Media/TP1.jpg"
// import TP2 from "../../../public/Media/TP3.jpg"
// import TP3 from "../../../public/Media/TP10.jpg"
// import TP4 from "../../../public/Media/TP4.jpg"
// import TP5 from "../../../public/Media/TP5.jpg"
// import TP6 from "../../../public/Media/TP6.jpg"


// export default function MeetOurTeachers() {
//     const teachers = [
//         { name: "Mrs. Rita Sharma", role: "Head of Science", img: TP1 },
//         { name: "Mr. Rahul Verma", role: "Head of Mathematics", img: TP2 },
//         { name: "Ms. Sunita Roy", role: "Head of English & Literature", img: TP3 },
//         { name: "Mr. Suraj Gupta", role: "Head of Commerce", img: TP4 },
//     ];

//     return (
//         <section id="teachers" className="py-16 px-44 ">
//             <div className="container mx-auto text-center ">
//                 <div className="">

//                     <h2 className="text-2xl font-bold mb-2">Meet Our Teachers</h2>
//                     <p className="mb-8">Committed mentors who put students first.</p>
//                 </div>

//                 <div className="grid md:grid-cols-4 gap-6">
//                     {teachers.map((t, i) => (
//                         <div key={i} className="p-4 bg-white border rounded-lg">
//                             <div className="rounded-3xl ">

//                                 <img src={t.img} alt={t.name} className="mx-auto h-24 mb-4 rounded-b-full" />
//                             </div>
//                             <h5 className="font-bold">{t.name}</h5>
//                             <p className="text-gray-600">{t.role}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }


// ----PART-2-----

// import Slider from "react-slick";
// import TP1 from "../../../public/Media/TP1.jpg";
// import TP2 from "../../../public/Media/TP3.jpg";
// import TP3 from "../../../public/Media/TP10.jpg";
// import TP4 from "../../../public/Media/TP4.jpg";
// import TP5 from "../../../public/Media/TP5.jpg";
// import TP6 from "../../../public/Media/TP6.jpg";

// export default function MeetOurTeachers() {
//     const teachers = [
//         { name: "Mrs. Rita Sharma", role: "Head of Science", img: TP1 },
//         { name: "Mr. Rahul Verma", role: "Head of Mathematics", img: TP2 },
//         { name: "Ms. Sunita Roy", role: "Head of English & Literature", img: TP3 },
//         { name: "Mr. Suraj Gupta", role: "Head of Commerce", img: TP4 },
//         { name: "Dr. Neha Singh", role: "Head of Psychology", img: TP5 },
//         { name: "Mr. Amit Tiwari", role: "Head of Physical Education", img: TP6 },
//     ];

//     // Carousel settings
//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 600,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         arrows: true,
//         autoplay: true,
//         autoplaySpeed: 2500,
//         responsive: [
//             {
//                 breakpoint: 1024, // tablets
//                 settings: { slidesToShow: 3 },
//             },
//             {
//                 breakpoint: 768, // small tablets/large phones
//                 settings: { slidesToShow: 2 },
//             },
//             {
//                 breakpoint: 480, // mobile
//                 settings: { slidesToShow: 1 },
//             },
//         ],
//     };

//     return (
//         <section id="teachers" className="py-16 px-6 md:px-44 bg-gray-50">
//             <div className="container mx-auto text-center">
//                 <h2 className="text-2xl font-bold mb-2">Meet Our Teachers</h2>
//                 <p className="mb-8 text-gray-600">
//                     Committed mentors who put students first.
//                 </p>

//                 {/* Carousel Wrapper */}
//                 <Slider {...settings}>
//                     {teachers.map((t, i) => (
//                         <div key={i} className="px-3">
//                             <div className="p-6 bg-white border rounded-lg shadow-sm hover:shadow-md transition duration-300">
//                                 <div className="rounded-3xl overflow-hidden mb-4">
//                                     <img
//                                         src={t.img}
//                                         alt={t.name}
//                                         className="mx-auto h-32 w-32 object-cover rounded-full border-4 border-blue-100 shadow-sm"
//                                     />
//                                 </div>
//                                 <h5 className="font-bold text-gray-800">{t.name}</h5>
//                                 <p className="text-gray-600 text-sm">{t.role}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </Slider>
//             </div>
//         </section>
//     );
// }


// ------PART-3-------

import Slider from "react-slick";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // optional icon library
import TP1 from "../../../public/Media/TP1.jpg";
import TP2 from "../../../public/Media/TP3.jpg";
import TP3 from "../../../public/Media/TP10.jpg";
import TP4 from "../../../public/Media/TP4.jpg";
import TP5 from "../../../public/Media/TP5.jpg";
import TP6 from "../../../public/Media/TP6.jpg";

export default function MeetOurTeachers() {
    const teachers = [
        { name: "Mrs. Rita Sharma", role: "Head of Science", img: TP1 },
        { name: "Mr. Rahul Verma", role: "Head of Mathematics", img: TP2 },
        { name: "Ms. Sunita Roy", role: "Head of English & Literature", img: TP3 },
        { name: "Mr. Suraj Gupta", role: "Head of Commerce", img: TP4 },
        { name: "Dr. Neha Singh", role: "Head of Psychology", img: TP5 },
        { name: "Mr. Amit Tiwari", role: "Head of Physical Education", img: TP6 },
    ];

    // ref to access slider programmatically
    const sliderRef = useRef(null);

    // react-slick settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false, // hide default arrows
        autoplay: false, // manual control only
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <section id="teachers" className="py-16 px-6 md:px-44 bg-gray-50 relative">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold mb-2">Meet Our Teachers</h2>
                <p className="mb-8 text-gray-600">
                    Committed mentors who put students first.
                </p>

                {/* Navigation Arrows */}
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
                    {teachers.map((t, i) => (
                        <div key={i} className="px-3">
                            <div className="p-6 bg-white border rounded-lg shadow-sm hover:shadow-md transition duration-300">
                                <div className="rounded-3xl overflow-hidden mb-4 flex justify-center">
                                    <img
                                        src={t.img}
                                        alt={t.name}
                                        className="h-32 w-32 object-cover rounded-full border-4 border-blue-100 shadow-sm"
                                    />
                                </div>
                                <h5 className="font-bold text-gray-800">{t.name}</h5>
                                <p className="text-gray-600 text-sm">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}


