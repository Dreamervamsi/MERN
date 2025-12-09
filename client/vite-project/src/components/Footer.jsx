import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold mb-2">Bharath Haul</h2>
                        <p className="text-gray-400 text-sm">Smart Logistics for India.</p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-xl"><FaFacebook /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-xl"><FaTwitter /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-xl"><FaInstagram /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-xl"><FaLinkedin /></a>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Bharath Haul. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-gray-300">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-300">Terms of Service</a>
                        <a href="#" className="hover:text-gray-300">Contact Us</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
