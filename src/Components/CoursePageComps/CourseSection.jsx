import Accordion from "./Accordian.jsx";

export default function CourseSection({ title, courses }) {

    return (
        <>
            <section className="my-10">
                <h2 className="text-2xl   text-gray-800 mb-4">{title}</h2>
                <div className="bg-white rounded-lg shadow p-4 divide-y">
                    {courses.map((course, idx) => (
                        <Accordion key={idx} title={course.name}>
                            <p>{course.desc}</p>
                        </Accordion>
                    ))}
                </div>
            </section>
        </>
    )

}