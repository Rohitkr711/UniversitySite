import React from 'react'

export default function ScholorshipHeroComp() {
    return (
        <>
            <section className="relative bg-gray-100 rounded-xl overflow-hidden shadow-md mb-10">
                {/* Background Image */}
                <img
                    src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Students"
                    className="w-full h-[400px] object-cover"
                />


                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-black/40"></div>


                {/* Text Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-start px-10 md:px-20 text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-3 max-w-xl leading-tight">
                        Invest in Your Future
                    </h1>
                    <p className="text-gray-200 text-lg mb-6 max-w-lg">
                        Venture into opportunities that transform your passion into purpose and elevate your potential.
                    </p>
                    {/* <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm hover:bg-blue-700 transition">
                        Learn More
                    </button> */}
                </div>
            </section>
        </>
    )
}
