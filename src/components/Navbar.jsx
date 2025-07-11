import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Project", href: "#project" },
    { name: "Experience", href: "#experience"}
    // Tambahkan link lain jika perlu
];

const Navbar = ({ title }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleNavClick = (id) => {
        setSidebarOpen(false);
        const el = document.getElementById(id);
        console.log(el); // Tambahkan ini untuk debugging
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='mb-12'>
            <div
                className={`w-full h-[10vh] fixed top-0 z-50 flex items-center justify-between px-4 transition-all duration-300 ${isScrolled
                        ? 'bg-[#091a36]/80 backdrop-blur-sm'
                    : 'bg-[#07162c]'
                    }`}
            >
                <div className="flex-1 flex md:justify-start">
                    <h1 className="text-xl font-bold text-gray-200">{title}</h1>
                </div>
                {/* Hamburger hanya di mobile */}
                <div className="md:hidden flex items-center">
                    <button
                        aria-label="Open navigation"
                        onClick={() => setSidebarOpen(true)}
                        className="text-cyan-400 text-2xl focus:outline-none"
                    >
                        <FaBars />
                    </button>
                </div>
            </div>
            {/* Sidebar mobile */}
            <div
                className={`fixed top-0 right-0 h-full w-56 bg-[#112240] z-[100] shadow-lg transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}
        md:hidden
        `}
            >
                <div className="flex justify-start gap-5 p-4">
                    <button
                        aria-label="Close navigation"
                        onClick={() => setSidebarOpen(false)}
                        className="text-cyan-400 text-2xl focus:outline-none"
                    >
                        <FaTimes />
                    </button>
                    <span className='text-white text-2xl mt-1 font-bold hover:text-cyan-400'>Portofolio</span>
                </div>
                <nav className="flex flex-col gap-3 px-4 mt-8">
                    {navLinks.map((link) => (
                        <div key={link.name} className='flex items-center justify-center rounded-lg hover:bg-[#1c3659] p-2'>
                            <button
                                className="text-gray-200 hover:text-cyan-400 text-lg font-semibold transition-colors"
                                onClick={() => handleNavClick(link.href.replace('#', ''))}
                            >
                                {link.name}
                            </button>
                        </div>
                    ))}
                </nav>
            </div>
            {/* Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 backdrop-blur-sm bg-opacity-40 z-[99] md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
        </div>
    );
};

export default Navbar;