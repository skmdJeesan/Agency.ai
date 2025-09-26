import React from "react";
import { RxCross2 } from "react-icons/rx";

function Sidebar({ isOpen, setIsOpen }) {
  return (
    // fixed so it's always relative to viewport; origin-top-right helps "pop" from top-right
    <div
      className={`fixed top-0 right-0 h-screen w-[55vw] md:hidden z-50
        bg-[rgba(79,68,229,0.74)] backdrop-blur-sm text-white
        transform origin-top-right transition-transform transition-opacity duration-300 ease-in-out
        ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"}`}
      aria-hidden={!isOpen}
    >
      <div
        onClick={() => setIsOpen(false)}
        className="absolute top-3 right-3 z-[60] text-2xl text-white cursor-pointer rounded-full p-1 hover:bg-white/20"
      >
        <RxCross2 />
      </div>

      <nav className="flex flex-col gap-6 py-20 px-8 text-2xl">
        {/* close on click so it behaves like a mobile drawer */}
        <a href="#" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
        <a href="#work" onClick={() => setIsOpen(false)}>Our Work</a>
        <a href="#contact-us" onClick={() => setIsOpen(false)}>Contact Us</a>
      </nav>
    </div>
  );
}

export default Sidebar;
