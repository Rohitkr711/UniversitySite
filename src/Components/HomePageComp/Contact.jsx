
export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("This demo form does not submit.");
    };

    return (
        <section id="contact" className="py-16 px-44 ">
            <div className="container mx-auto grid md:grid-cols-2 gap-8">
                <div className=" ">
                    <h2 className="text-2xl font-bold mb-2">Get in touch</h2>
                    <p className="mb-4">
                        Got questions about admissions, fees, or planning a campus visit? We’re here to help you at every step of the way.
                    </p>
                    <ul className="space-y-2">
                        <li><strong>📍Address:</strong> Kolhan University, NH 75, Chaibasa, Jharkhand-833202</li>
                        <li><strong>📞Phone:</strong> +91 8003276838</li>
                        <li><strong>✉️Email:</strong> <a href="">info@Kolhanuniversity.edu</a></li>
                    </ul>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 py-8  px-10 bg-neutral-50 shadow-md rounded-xl">
                    <label className="block">
                        <span>Name</span>
                        <input type="text" required className="w-full border p-2 rounded" />
                    </label>
                    <label className="block">
                        <span>Email</span>
                        <input type="email" required className="w-full border p-2 rounded" />
                    </label>
                    <label className="block">
                        <span>Message</span>
                        <textarea rows="5" className="w-full border p-2 rounded"></textarea>
                    </label>
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
