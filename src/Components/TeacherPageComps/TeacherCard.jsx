export default function TeacherCard({ img, name, role, email }) {
    return (
        <>
            <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center hover:shadow-2xl transition">
                <div className="w-40 h-40 mb-4 rounded-full overflow-hidden">

                    <img
                        src={img}
                        alt={name}
                        className="object-contain h-full w-full"
                    />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                <p className="text-gray-600">{role}</p>
                <p className="text-sm text-blue-600">{email}</p>
            </div>
        </>
    );
}