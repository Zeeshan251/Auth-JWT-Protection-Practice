import React from 'react';
import {FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-700 py-6">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center space-x-4 mb-2 md:mb-0">
                    <a href="https://www.github.com/Zeeshan251" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={24} color="#3b5998" />
                    </a>
                    <a href="https://www.linkedin.com/in/mohd-zeeshan251/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={24} color="#1da1f2" />
                    </a>
                    <a href="https://www.instagram.com/zeeshan__251" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={24} color="#c13584" />
                    </a>
                </div>

                <div className="text-center md:text-center md:mx-auto">
                    <p className="text-lg font-semibold">My Awesome App</p>
                    <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
