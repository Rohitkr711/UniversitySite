import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import CourseSection from "../../Components/CoursePageComps/CourseSection.jsx";

export default function CoursesPage() {
  const UGcourses = [
    { name: "Bachelor of Science (B.Sc)", desc: "Undergraduate program focusing on core science subjects like Physics, Chemistry, and Biology." },
    { name: "Bachelor of Arts (B.A)", desc: "Comprehensive study of humanities, social sciences, languages, and fine arts." },
    { name: "Bachelor of Technology (B.Tech)", desc: "Engineering program designed to develop technical and problem-solving skills." },
    { name: "Bachelor of Pharmacy", desc: "Advanced program offering specializations in various science fields." },
    { name: "Bachelor of Laws", desc: "Professional degree focusing on business, management, and leadership skills." },
    { name: "Bachelor of Engineering", desc: "Research-driven courses aimed at innovation and academic excellence." },
  ];

  const PGcourses = [
    { name: "Master of Business Administration", desc: "Postgraduate program covering business management, leadership, and strategy." },
    { name: "Master of Technology", desc: "Advanced engineering program focused on technical and research skills." },
    { name: "Master of Science", desc: "In-depth study in core science and applied science subjects." },
    { name: "Master of Arts", desc: "Specialized program in humanities, social sciences, and fine arts." },
    { name: "Master of Computer Applications", desc: "Professional program for careers in software and IT industry." },
  ];

  const PhDcourses = [
    { name: "PhD in English Literature", desc: "Doctoral research in English language, literature, and critical studies." },
    { name: "PhD in Constitutional Law", desc: "Research in law, governance, and constitutional studies." },
    { name: "PhD in Pharmaceutical Sciences", desc: "Doctoral research in drug discovery, pharma, and medical sciences." },
    { name: "PhD in Education", desc: "Research on pedagogy, teaching methods, and educational policies." },
    { name: "PhD in Mechanical Engineering", desc: "Advanced research in mechanical engineering and design." },
    { name: "Doctoral Programs (Ph.D)", desc: "Research-driven courses aimed at innovation and academic excellence." },
  ];

  const OnlineCourses = [
    { name: "Digital Marketing", desc: "Covers SEO, SEM, content marketing, and social media strategies." },
    { name: "Web and Software Development", desc: "Learn full-stack web development and software engineering." },
    { name: "Graphic Design", desc: "Covers UI/UX design, visual communication, and creative tools." },
    { name: "Cybersecurity", desc: "Focus on network security, ethical hacking, and digital defense." },
    { name: "Artificial Intelligence (AI) & Machine Learning (ML)", desc: "Study AI algorithms, neural networks, and ML models." },
  ];

  return (
    <div className="font-inter bg-blue-50 min-h-screen  ">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Our Courses</h1>
      <CourseSection title="Undergraduate (UG) Courses" courses={UGcourses} />
      <CourseSection title="Postgraduate (PG) Courses" courses={PGcourses} />
        <CourseSection title="Doctoral (PhD) Courses" courses={PhDcourses} />
        <CourseSection title="Online Courses" courses={OnlineCourses} />
      </main>
      <Footer />
    </div>
  );
}