import TP1 from "../../../public/Media/TP1.jpg"
import TP2 from "../../../public/Media/TP3.jpg"
import TP3 from "../../../public/Media/TP10.jpg"
import TP4 from "../../../public/Media/TP4.jpg"
import TP5 from "../../../public/Media/TP5.jpg"
import TP6 from "../../../public/Media/TP6.jpg"


export default function MeetOurTeachers() {
    const teachers = [
        { name: "Mrs. Rita Sharma", role: "Head of Science", img: TP1 },
        { name: "Mr. Rahul Verma", role: "Head of Mathematics", img: TP2 },
        { name: "Ms. Sunita Roy", role: "Head of English & Literature", img: TP3 },
        { name: "Mr. Suraj Gupta", role: "Head of Commerce", img: TP4 },
    ];

    return (
        <section id="teachers" className="py-16 px-44 ">
            <div className="container mx-auto text-center ">
                <div className="">

                    <h2 className="text-2xl font-bold mb-2">Meet Our Teachers</h2>
                    <p className="mb-8">Committed mentors who put students first.</p>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                    {teachers.map((t, i) => (
                        <div key={i} className="p-4 bg-white border rounded-lg">
                            <div className="rounded-3xl ">

                                <img src={t.img} alt={t.name} className="mx-auto h-24 mb-4 rounded-b-full" />
                            </div>
                            <h5 className="font-bold">{t.name}</h5>
                            <p className="text-gray-600">{t.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
