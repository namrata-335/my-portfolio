"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 z-50 w-full bg-[#F6F3E4]/90 backdrop-blur">
            <div className="mx-auto flex items-center justify-between px-6 py-5">

                {/* Logo */}
                <h1 className="font-serif text-2xl md:text-3xl text-[#30050E]">
                    ND
                </h1>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-10 text-lg text-[#30050E]">
                    <a href="#home" className="hover:text-gray-500">Home</a>
                    <a href="#about" className="hover:text-gray-500">About</a>
                    <a href="#projects" className="hover:text-gray-500">Projects</a>
                    <a href="#certifications" className="hover:text-gray-500">Certifications</a>
                    <a href="#resume" className="hover:text-gray-500">Resume</a>
                    <a href="#contact" className="hover:text-gray-500">Contact</a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-[#30050E]"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={30} /> : <Menu size={30} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden flex flex-col bg-[#F6F3E4] text-[#30050E] px-6 pb-6 space-y-4 text-lg">
                    <a href="#home" onClick={() => setOpen(false)}>Home</a>
                    <a href="#about" onClick={() => setOpen(false)}>About</a>
                    <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
                    <a href="#certifications" onClick={() => setOpen(false)}>Certifications</a>
                    <a href="#resume" onClick={() => setOpen(false)}>Resume</a>
                    <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
                </div>
            )}
        </nav>
    );
}