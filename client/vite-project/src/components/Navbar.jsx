import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className={`text-2xl tracking-tighter ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
                    <span className='text-red-500'>Bharath</span> Haul
                </Link>

                <div className="hidden md:flex space-x-8 items-center">
                    {['Home', 'Features', 'How it Works'].map((item) => (
                        <Link
                            key={item}
                            to={`#${item.toLowerCase().replace(/\s/g, '')}`}
                            className={`hover:text-blue-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white/90'}`}
                        >
                            {item}
                        </Link>
                    ))}
                    <Link to="/signup" className={isScrolled ? `text-blue-900 hover:text-blue-500 transition` : `text-white hover:text-blue-500 transition`}>
                        Signup
                    </Link>

                    <Link to="/login" className={isScrolled ? `border border-blue-500 hover:bg-blue-500 hover:text-white px-5 py-2 rounded  transition-all text-blue-900` : `border border-blue-500 hover:bg-blue-500 hover:text-white px-5 py-2 rounded  transition-all text-white`}>
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
