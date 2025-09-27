import clgClassroom from "../../../public/Media/ClgClassroom.jpg"
import ClgLab from "../../../public/Media/ClgLab.jpg"
import ClgAuditorium from "../../../public/Media/ClgAuditorium.jpg"
import ClgLibrary from "../../../public/Media/ClgLibrary.jpg"

export default function CampusGallery() {
    const images = [
        clgClassroom,
        ClgAuditorium,
        ClgLab,
        ClgLibrary
    ];

    return (
        <section id="gallery" className="py-16 px-44 bg-blue-50 ">
            <div className="container mx-auto text-center">
                <div className="">

                    <h2 className="text-2xl font-bold mb-2">Campus Gallery</h2>
                    <p className="mb-8">Moments from classrooms, labs, and events.</p>
                </div>

                <div className=" grid md:grid-cols-4 gap-4">
                    
                    {images.map((img, i) => (
                        <div className="" key={i}>

                            <img key={i} src={img} alt={`Gallery ${i}`} className="rounded-lg shadow h-full" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
