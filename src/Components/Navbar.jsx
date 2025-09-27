import { useState } from "react";
import logo from "../../public/Media/logo.png";
import { Link } from "react-router";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow px-44">
            <div className="container mx-auto flex items-center justify-between p-4">
                <a className="flex items-center gap-2 font-bold text-lg" href="#dashboard">
                    <img
                        src={logo}
                        alt="logo"
                        className="h-12"
                    />
                    Kolhan<span className="text-blue-600">University</span>
                </a>

                <nav
                    className={`${menuOpen ? "block" : "hidden"
                        } md:flex space-x-6`}
                    aria-label="Primary"
                >
                    <ul className="flex flex-col md:flex-row gap-8">
                        <li className="hover:underline"><Link to='/'>Home</Link></li>
                        <li className="hover:underline"><Link to='/about'>About</Link></li>
                        <li className="hover:underline"><Link to='/courses'>Courses</Link></li>
                        <li className="hover:underline"><Link to='/teachers'>Teachers</Link></li>
                        <li className="hover:underline"><Link to="/library">Library</Link></li>
                        <li className="hover:underline"><Link to="/Announcement&Events">Announcements & Events</Link></li>

                    </ul>
                </nav>

                <div className="flex items-center gap-4">
                    <a className="bg-blue-600 text-white px-4 py-2 rounded-lg" href="course.html">
                        Admissions
                    </a>
                    <button
                        className="md:hidden text-2xl"
                        aria-label="Toggle menu"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        ☰
                    </button>
                </div>
            </div>
        </header>
    );
}
