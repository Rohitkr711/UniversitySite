// import { useState } from "react";
// import logo from "../../public/Media/logo.png";
// import { Link } from "react-router";

// export default function Navbar() {
//     const [menuOpen, setMenuOpen] = useState(false);

//     return (
//         <header className="bg-white shadow px-44">
//             <div className="container mx-auto flex items-center justify-between p-4">
//                 <a className="flex items-center gap-2 font-bold text-lg" href="#dashboard">
//                     <img
//                         src={logo}
//                         alt="logo"
//                         className="h-12"
//                     />
//                     Kolhan<span className="text-blue-600">University</span>
//                 </a>

//                 <nav
//                     className={`${menuOpen ? "block" : "hidden"
//                         } md:flex space-x-6`}
//                     aria-label="Primary"
//                 >
//                     <ul className="flex flex-col md:flex-row gap-8">
//                         <li className="hover:underline"><Link to='/'>Home</Link></li>
//                         <li className="hover:underline"><Link to='/about'>About</Link></li>
//                         <li className="hover:underline"><Link to='/courses'>Courses</Link></li>
//                         <li className="hover:underline"><Link to='/teachers'>Teachers</Link></li>
//                         <li className="hover:underline"><Link to="/library">Library</Link></li>
//                         {/* <li className="hover:underline"><Link to="/Announcement&Events">Announcements/Events</Link></li> */}
//                         {/* <li className="hover:underline"><Link to="/ScholorshipAndVoucher">Alumni</Link></li> */}


//                     </ul>
//                 </nav>

//                 <div className="flex items-center gap-4">
//                     <a className="bg-blue-600 text-white px-4 py-2 rounded-lg" href="course.html">
//                         Register
//                     </a>
//                     <button
//                         className="md:hidden text-2xl"
//                         aria-label="Toggle menu"
//                         onClick={() => setMenuOpen(!menuOpen)}
//                     >
//                         ☰
//                     </button>
//                 </div>
//             </div>
//         </header>
//     );
// }


// import { useState } from "react";
// import logo from "../../public/Media/logo.png";
// import { Link } from "react-router";

// export default function Navbar() {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [academicsOpen, setAcademicsOpen] = useState(false);
//     const [announcementEventOpen, setAnnouncementEventOpen] = useState(false);


//     return (
//         <header className="bg-white shadow px-6 md:px-20 lg:px-44">
//             <div className="container mx-auto flex items-center justify-between p-4 relative">
//                 {/* Logo */}
//                 <a className="flex items-center gap-2 font-bold text-lg" href="#dashboard">
//                     <img src={logo} alt="logo" className="h-12" />
//                     Kolhan<span className="text-blue-600">University</span>
//                 </a>

//                 {/* Navigation Links */}
//                 <nav
//                     className={`${menuOpen ? "block" : "hidden"} md:flex space-x-6`}
//                     aria-label="Primary"
//                 >
//                     <ul className="flex flex-col md:flex-row gap-6 md:gap-8">
//                         <li className="hover:underline">
//                             <Link to="/">Home</Link>
//                         </li>
//                         <li className="hover:underline">
//                             <Link to="/about">About</Link>
//                         </li>

//                         {/* Academics Dropdown */}
//                         <li
//                             className="relative group cursor-pointer"
//                             onMouseEnter={() => setAcademicsOpen(true)}
//                             onMouseLeave={() => setAcademicsOpen(false)}
//                             onClick={() => setAcademicsOpen(!academicsOpen)}
//                         >
//                             <span className="hover:underline flex items-center">
//                                 Academics
//                             </span>

//                             {/* Dropdown Modal */}
//                             <div
//                                 className={`z-10 absolute left-0 mt-2 w-40 bg-white border rounded-lg shadow-lg transition-all duration-200 ${
//                                     academicsOpen ? "opacity-100 visible" : "opacity-0 invisible"
//                                 } group-hover:visible group-hover:opacity-100`}
//                             >
//                                 <ul className="flex flex-col text-sm">
//                                     <li className="hover:bg-blue-50 px-4 py-2 rounded-t-lg">
//                                         <Link to="/Academics/courses">Courses</Link>
//                                     </li>
//                                     <li className="hover:bg-blue-50 px-4 py-2">
//                                         <Link to="/Academics/teachers">Teachers</Link>
//                                     </li>
//                                     <li className="hover:bg-blue-50 px-4 py-2 rounded-b-lg">
//                                         <Link to="/Academics/library">Library</Link>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </li>

//                         {/* Announcement/Events Dropdown */}
//                         <li
//                             className="relative group cursor-pointer"
//                             onMouseEnter={() => setAnnouncementEventOpen(true)}
//                             onMouseLeave={() => setAnnouncementEventOpen(false)}
//                             onClick={() => setAnnouncementEventOpen(!announcementEventOpen)}
//                         >
//                             <span className="hover:underline flex items-center">
//                                 Announcement/Events
//                             </span>

//                             {/* Dropdown Modal */}
//                             <div
//                                 className={`z-10 absolute left-0 mt-2 w-40 bg-white border rounded-lg shadow-lg transition-all duration-200 ${
//                                     announcementEventOpen ? "opacity-100 visible" : "opacity-0 invisible"
//                                 } group-hover:visible group-hover:opacity-100`}
//                             >
//                                 <ul className="flex flex-col text-sm">
//                                     <li className="hover:bg-blue-50 px-4 py-2 rounded-t-lg">
//                                         <Link to="/Announcement/ExtraCurricular">Extra-Curricular activity</Link>
//                                     </li>
//                                     <li className="hover:bg-blue-50 px-4 py-2">
//                                         <Link to="/Announcement/ScholorshipVoucher">Scholorship & Vouchers</Link>
//                                     </li>
                                    
//                                 </ul>
//                             </div>
//                         </li>

//                         <li className="hover:underline">
//                             <Link to="/alumni">Alumni&Network</Link>
//                         </li>
//                     </ul>
//                 </nav>

//                 {/* Right Section */}
//                 <div className="flex items-center gap-4">
//                     <a
//                         className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
//                         href="course.html"
//                     >
//                         Register
//                     </a>

//                     {/* Mobile Menu Button */}
//                     <button
//                         className="md:hidden text-2xl"
//                         aria-label="Toggle menu"
//                         onClick={() => setMenuOpen(!menuOpen)}
//                     >
//                         ☰
//                     </button>
//                 </div>
//             </div>
//         </header>
//     );
// }


// ###__PART-3__###
import { useState } from "react";
import logo from "../../public/Media/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [announcementEventOpen, setAnnouncementEventOpen] = useState(false);

  const { currentUser, role, logout } = useAuth();
  const navigate = useNavigate();

  // Handle Logout
  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  // Dashboard redirection based on role
  const goToDashboard = () => {
    if (role === "faculty") navigate("/faculty/dashboard");
    else if (role === "student") navigate("/userdashboard");
  };

  return (
    <header className="bg-white shadow px-6 md:px-20 lg:px-44">
      <div className="container mx-auto flex items-center justify-between p-4 relative">

        {/* Logo */}
        <a className="flex items-center gap-2 font-bold text-lg" href="/">
          <img src={logo} alt="logo" className="h-12" />
          Kolhan<span className="text-blue-600">University</span>
        </a>

        {/* Navigation Links */}
        <nav
          className={`${menuOpen ? "block" : "hidden"} md:flex space-x-6`}
          aria-label="Primary"
        >
          <ul className="flex flex-col md:flex-row gap-6 md:gap-8">

            <li className="hover:underline">
              <Link to="/">Home</Link>
            </li>

            <li className="hover:underline">
              <Link to="/about">About</Link>
            </li>

            {/* Academics Dropdown */}
            <li
              className="relative group cursor-pointer"
              onMouseEnter={() => setAcademicsOpen(true)}
              onMouseLeave={() => setAcademicsOpen(false)}
              onClick={() => setAcademicsOpen(!academicsOpen)}
            >
              <span className="hover:underline flex items-center">Academics</span>

              <div
                className={`z-10 absolute left-0 mt-2 w-40 bg-white border rounded-lg shadow-lg transition-all duration-200 ${
                  academicsOpen ? "opacity-100 visible" : "opacity-0 invisible"
                } group-hover:visible group-hover:opacity-100`}
              >
                <ul className="flex flex-col text-sm">
                  <li className="hover:bg-blue-50 px-4 py-2 rounded-t-lg">
                    <Link to="/Academics/courses">Courses</Link>
                  </li>
                  <li className="hover:bg-blue-50 px-4 py-2">
                    <Link to="/Academics/teachers">Teachers</Link>
                  </li>
                  <li className="hover:bg-blue-50 px-4 py-2 rounded-b-lg">
                    <Link to="/Academics/library">Library</Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Announcement / Events Dropdown */}
            <li
              className="relative group cursor-pointer"
              onMouseEnter={() => setAnnouncementEventOpen(true)}
              onMouseLeave={() => setAnnouncementEventOpen(false)}
              onClick={() => setAnnouncementEventOpen(!announcementEventOpen)}
            >
              <span className="hover:underline flex items-center">Announcement/Events</span>

              <div
                className={`z-10 absolute left-0 mt-2 w-52 bg-white border rounded-lg shadow-lg transition-all duration-200 ${
                  announcementEventOpen ? "opacity-100 visible" : "opacity-0 invisible"
                } group-hover:visible group-hover:opacity-100`}
              >
                <ul className="flex flex-col text-sm">
                  <li className="hover:bg-blue-50 px-4 py-2 rounded-t-lg">
                    <Link to="/Announcement/ExtraCurricular">Extra-Curricular activity</Link>
                  </li>
                  <li className="hover:bg-blue-50 px-4 py-2">
                    <Link to="/Announcement/ScholorshipVoucher">Scholarship & Vouchers</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="hover:underline">
              <Link to="/alumni">Alumni & Network</Link>
            </li>
          </ul>
        </nav>

        {/* Right Section (Auth Buttons) */}
        <div className="flex items-center gap-4">

          {/* NOT LOGGED IN → show Login & Signup */}
          {!currentUser && (
            <>
              <Link
                to="/login"
                className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Signup
              </Link>
            </>
          )}

          {/* LOGGED IN → show Dashboard + Logout */}
          {currentUser && (
            <>
              <button
                onClick={goToDashboard}
                className="px-4 py-2 border border-green-600 text-green-700 rounded-lg hover:bg-green-50 transition"
              >
                Dashboard
              </button>

              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                Logout
              </button>
            </>
          )}

          {/* Mobile Menu Button */}
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

