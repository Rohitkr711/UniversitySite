import { useState } from "react";

function ScholorshipListComp() {
    const scholarships = [
        {
            title: "Academic Excellence Scholarship",
            description:
                "Where tenacity is a strength and horizons are limitless.",
            icon:
                "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f393.svg",
        },
        {
            title: "STEM Innovators Grant",
            description:
                "Where individuals innovate, lead, and inspire the next generation.",
            icon:
                "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f52c.svg",
        },
        {
            title: "STEM Innovation Award",
            description:
                "Where bright minds bring bold ideas to life through science and research.",
            icon:
                "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4a1.svg",
        },
        {
            title: "Community Leadership Award",
            description:
                "Where strong community-driven actions build a better future.",
            icon:
                "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f91d.svg",
        },
    ];


    const [filter, setFilter] = useState("");


    const filteredScholarships = scholarships.filter((item) =>
        item.title.toLowerCase().includes(filter.toLowerCase())
    );


    return (
        <>
            <div className="w-full md:w-2/3 bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Browse Available Scholarships</h2>


                {/* Filter/Search */}
                <label className="mb-4 flex items-center border border-gray-300 rounded-lg px-3 py-2 gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-gray-400"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.5 3a7.5 7.5 0 015.917 12.072l3.255 3.256a.75.75 0 11-1.06 1.06l-3.256-3.255A7.5 7.5 0 1110.5 3zm0 1.5a6 6 0 100 12 6 6 0 000-12z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <input
                        type="text"
                        placeholder="Filter by Program"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="flex-1 outline-none text-sm"
                    />
                </label>


                <div className="flex flex-col gap-4">
                    {filteredScholarships.map((item, index) => (
                        <article
                            key={index}
                            className="flex items-center justify-between border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
                        >
                            <div className="flex items-start gap-4">
                                {/* Rounded Icon */}
                                <div className="shrink-0 w-11 h-11 rounded-full bg-blue-50 ring-1 ring-blue-100 flex items-center justify-center overflow-hidden">
                                    <img
                                        src={item.icon}
                                        alt="icon"
                                        className="w-6 h-6 object-contain"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-medium text-base md:text-lg">{item.title}</h3>
                                    <p className="text-gray-600 text-sm md:text-[15px] leading-snug">
                                        {item.description}
                                    </p>
                                </div>
                            </div>


                            <button className="ml-4 whitespace-nowrap bg-white text-green-700 border border-green-200 px-4 py-1.5 rounded-md text-sm hover:bg-green-50 transition">
                                Learn More
                            </button>
                        </article>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ScholorshipListComp;