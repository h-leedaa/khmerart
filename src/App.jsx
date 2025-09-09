import React, { useState } from "react";
import { Routes, Route, NavLink, Outlet } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Artist from "./pages/Artist";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav className="w-full bg-gray-800 text-white px-4 py-3 flex justify-between items-center sticky top-0 z-50 border-gray-400  shadow-xl">
        {/* Logo + Name */}
        <div className="flex items-center space-x-2">
          <img
            src="image/logo.jpg"
            alt="logo"
            className="w-[50px] h-[50px] rounded-full"
          />
          <span className="text-lg sm:text-xl md:text-2xl font-bold">
            KhmerArt
          </span>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8 text-lg font-bold">
          <li><NavLink to="/" className="hover:text-red-600">Home</NavLink></li>
          <li><NavLink to="/about" className="hover:text-red-600"> About</NavLink></li>
          <li><NavLink to="/artist" className="hover:text-red-600">Artist</NavLink></li>
          <li><NavLink to="/contact" className="hover:text-red-600">Contact</NavLink></li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl focus:outline-none cursor-pointer"
        >
          {open ? <i className="bi bi-x"></i> : <i className="bi bi-list"></i>}
        </button>

        {/* Mobile dropdown */}
        {open && (
          <ul className="absolute top-[70px] left-0 w-full bg-gray-700 flex flex-col space-y-4 p-4 text-lg font-bold md:hidden cursor-pointer transform transition-transform duratio-0.2 ease-in-out">
            <li>
              <NavLink to="/" onClick={() => setOpen(false)} className="hover:text-red-600">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setOpen(false)} className="hover:text-red-600">
                About
              </NavLink>
            </li>
            <li>
              <NavLink  to="/artist"  onClick={() => setOpen(false)}  className="hover:text-red-600">
                Artist
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setOpen(false)} className="hover:text-red-600">
                Contact
              </NavLink>
            </li>
          </ul>
        )}
      </nav>

     
      {/* <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/artist" element={<Artist />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div> */}
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;