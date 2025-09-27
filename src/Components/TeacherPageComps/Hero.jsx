import React from 'react'
import TeacherImage from '../../../public/Media/Teachers.jpg'

function Hero() {
  return (
    <>
    <section className="bg-blue-50 text-center h-1/3 py-16 px-44 flex gap-6">
            {/* <img src={UniBG} alt="" srcset="" className="h-full"/> */}
            <div className="w-1/2 flex flex-col gap-6">
    
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Our Teachers</h1>
              <p className="text-center">
                At Kolhan University, our teachers are the backbone of academic excellence. With deep expertise, innovative teaching methods, and a passion for mentoring, they guide students beyond textbooks—shaping curious minds into confident professionals and responsible citizens.
              </p>
            </div>
    
            <div className="w-1/2">
              <div className=" rounded-xl shadow-md p-2 h-full w-full overflow-hidden">
                {/* <div className="font-bold mb-2">Our Campus</div> */}
                <img src={TeacherImage} alt="Campus" className="h-full w-full object-contain rounded-xl"  />
              </div>
            </div>
    
          </section>
    </>
  )
}

export default Hero