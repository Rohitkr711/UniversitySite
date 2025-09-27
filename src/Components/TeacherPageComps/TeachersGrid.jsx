import TeacherCard from "./TeacherCard";
import TP1 from "../../../public/Media/TP1.jpg"
import TP2 from "../../../public/Media/TP3.jpg"
import TP3 from "../../../public/Media/TP10.jpg"
import TP4 from "../../../public/Media/TP4.jpg"
import TP5 from "../../../public/Media/TP11.jpg"


export default function TeachersGrid (){
  const teachers = [
    { img: TP1, name: "Dr. Anjali Sharma", role: "Professor of Physics", email: "anjali@kolhanuniversity.edu" },
    { img: TP2, name: "Prof. Rajesh Kumar", role: "Head of Computer Science", email: "rajesh@kolhanuniversity.edu" },
    { img: TP3, name: "Dr. Meena Verma", role: "Associate Professor, English", email: "meena@kolhanuniversity.edu" },
    { img: TP4, name: "Dr. Vikram Singh", role: "Professor of Mathematics", email: "vikram@kolhanuniversity.edu" },
    { img: TP5, name: "Dr. Shashwat Roy", role: "Professor of Economics", email: "shashwat@kolhanuniversity.edu" },
    { img: TP2, name: "Prof. Bharti Singh", role: "Professor of Ethics", email: "bharti@kolhanuniversity.edu" },
    { img: TP3, name: "Dr. Pradeep Singh", role: "Professor of Business Studies", email: "pradeep@kolhanuniversity.edu" },
    { img: TP4, name: "Dr. Ajay Tirpathi", role: "Professor of Accounts", email: "ajay@kolhanuniversity.edu" },
    { img: TP1, name: "Dr. Joseph", role: "Professor of Music", email: "joseph@kolhanuniversity.edu" },
    { img: TP2, name: "Dr. Abdul Kalam", role: "Professor of Politics", email: "abdul@kolhanuniversity.edu" },
    { img: TP3, name: "Dr. Sanjana Rawat", role: "Professor of Geography", email: "sanjana@kolhanuniversity.edu" },
    { img: TP4, name: "Dr. Rajesh Patel", role: "Professor of History", email: "rajeshpatel@kolhanuniversity.edu" },
    { img: TP1, name: "Dr. Praful Arora", role: "Professor of Biology", email: "praful@kolhanuniversity.edu" },
    { img: TP5, name: "Dr. Laxmi Pandey", role: "Professor of Chemistry", email: "laxmi@kolhanuniversity.edu" },
  ];

  return (
    <>
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
        Faculty Members
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {teachers.map((teacher, idx) => (
          <TeacherCard key={idx} {...teacher} />
        ))}
      </div>
    </section>
    </>
  );
}