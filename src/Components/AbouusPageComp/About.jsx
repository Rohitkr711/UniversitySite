import UniBG from "../../../public/Media/UniBG.jpg"

export default function About() {
  return (
    <>
      <section className="bg-blue-50 text-center h-1/3 py-16 px-44 flex gap-6">
        {/* <img src={UniBG} alt="" srcset="" className="h-full"/> */}
        <div className="w-1/2 flex flex-col gap-6">

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">About Us</h1>
          <p className="text-center">
            Founded in 2009 and located in Chaibasa, Jharkhand, Kolhan University is a leading center of higher education dedicated to academic excellence and holistic student growth. The university offers undergraduate, postgraduate, and doctoral programs in Arts, Science, Commerce, Engineering, Medicine, and Management. With experienced faculty, modern facilities, and a commitment to research and innovation, Kolhan University prepares students to become skilled professionals, critical thinkers, and responsible leaders who contribute meaningfully to society.
          </p>
        </div>

        <div className="w-1/2">
          <div className=" rounded-xl shadow-md p-2 h-full w-full">
            {/* <div className="font-bold mb-2">Our Campus</div> */}
            <img src={UniBG} alt="Campus" className="h-full w-full rounded-xl" />
          </div>
        </div>

      </section>

    </>
  )

}