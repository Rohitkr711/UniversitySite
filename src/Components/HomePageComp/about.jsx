export default function About() {
    return (
        <section id="about" className="py-16 px-44 ">
            <div className="container mx-auto ">
                <div className="text-center mb-8 ">
                    <h2 className="text-2xl font-bold">About Us</h2>
                    <p className="text-gray-600">
                        Kolhan University is a public state university in Chaibasa, Jharkhand, India. Established in 2009, it was created by carving out colleges from Ranchi University to meet the higher education demands of the Kolhan region. The university is recognized by the University Grants Commission (UGC) and has a geographical jurisdiction that includes the East and West Singhbhum and Seraikela Kharsawan districts of Jharkhand
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8  ">
                    <div className="px-4 py-2 shadow-xl">
                        <h3 className="font-semibold text-lg mb-2">Experienced Faculty</h3>
                        <p>
                            The faculty of Kolhan University consists of experienced professors, assistant professors, and guest faculty who cover a wide range of subjects in arts, science, and commerce. However, specific faculty details vary significantly between the university's main departments and its numerous constituent and affiliated colleges.
                        </p>
                    </div>
                    <div className=" px-4 py-2 shadow-xl">
                        <h3 className="font-semibold text-lg mb-2">Modern Labs</h3>
                        <p>
                            Modern university labs have transformed into flexible, interdisciplinary hubs that integrate advanced technology like AI and robotics. They prioritize collaborative, hands-on learning and practical application, moving beyond traditional lecture-based teaching. Designed with sustainability and adaptability in mind, these spaces are crucial for fostering innovation, critical thinking, and preparing students for modern careers.
                        </p>
                    </div>
                    <div className=" px-4 py-2 shadow-xl">
                        <h3 className="font-semibold text-lg mb-2">Co-curricular</h3>
                        <p>
                            Co-curricular activities complement university studies by offering practical experiences, like clubs and internships, that build essential skills beyond the classroom. They foster holistic development by improving leadership, teamwork, and social skills, which are crucial for enhancing a student's personal growth and career readiness.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
