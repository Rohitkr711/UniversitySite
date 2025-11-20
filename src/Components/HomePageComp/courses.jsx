import { Link } from "react-router";

export default function Courses() {
    return (
        <section id="courses" className="py-16 px-44 bg-blue-50 ">
            <div className="container mx-auto ">
                <div className="text-center mb-8 ">
                    <h2 className="text-2xl font-bold">Our Courses</h2>
                    <p>Programs for primary to higher secondary with coaching.</p>
                </div>

                <div className="grid md:grid-cols-4 gap-6 ">
                    {[
                        { title: "UG", items: ["BA", "BCom", "BSc", "BTech", "BPharma", "LLB"] },
                        { title: "PG", items: ["MBA", "MTech", "MSc", "MA", "MCA"] },
                        { title: "PhD", items: ["English", "Law", "Pharma", "Education", "Mechanical"] },
                        { title: "Online", items: ["Digital Marketing", "Web Dev", "Graphic Design", "Cybersecurity", "AI/ML"] }
                    ].map((course, idx) => (
                        <article key={idx} className="p-4 rounded-lg flex flex-col justify-between bg-white">
                            <div className="">

                                <h4 className="font-bold mb-2">{course.title}</h4>
                                <ul className="mb-4  list-inside">
                                    {course.items.map((i, j) => <li key={j}>{i}</li>)}
                                </ul>
                            </div>
                            <button className="">
                                <Link className="text-blue-600 font-medium" to='/Academics/courses'>Enroll now</Link>
                            </button>

                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}
