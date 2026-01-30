import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/iprintlogo.jpeg";

const Footer = () => {
    return (
        <footer className="bg-[#0f0a0d] border-t border-[#2d1f28] pt-16 pb-8">
            <div className="layout-container flex justify-center w-full">
                <div className="layout-content-container flex flex-col max-w-[1280px] w-full px-4 md:px-10">
                    {/* Footer Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
                        {/* Brand Column */}
                        <div className="flex flex-col gap-4">
                            <Link to="/" className="flex items-center gap-2 mb-2 cursor-pointer group">
                                <img src={logo} alt="iprint" className="h-8 w-auto rounded shadow-sm" />
                                <h2 className="text-white text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
                                    iprint
                                </h2>
                            </Link>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Bringing your imagination to life with next-gen printing technology.
                            </p>
                        </div>

                        {/* Products Column */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-white font-bold text-lg">Products</h3>
                            <a className="text-gray-400 hover:text-primary transition-colors text-sm" href="#">Mugs & Tiles</a>
                            <a className="text-gray-400 hover:text-primary transition-colors text-sm" href="#">Crystals</a>
                            <a className="text-gray-400 hover:text-primary transition-colors text-sm" href="#">T-Shirts</a>
                            <a className="text-gray-400 hover:text-primary transition-colors text-sm" href="#">Custom Gifts</a>
                        </div>

                        {/* Support Column */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-white font-bold text-lg">Support</h3>
                            <a className="text-gray-400 hover:text-primary transition-colors text-sm" href="#">Order Tracking</a>
                            <a className="text-gray-400 hover:text-primary transition-colors text-sm" href="#">File Guide</a>
                            <a className="text-gray-400 hover:text-primary transition-colors text-sm" href="#">Shipping Info</a>
                            <a className="text-gray-400 hover:text-primary transition-colors text-sm" href="#">Returns</a>
                        </div>

                        {/* Contact Column */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-white font-bold text-lg">Contact</h3>
                            <div className="flex items-center gap-3 text-gray-400 text-sm">
                                <span className="material-symbols-outlined text-primary text-lg">mail</span>
                                <span>hello@iprint3d.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400 text-sm">
                                <span className="material-symbols-outlined text-primary text-lg">call</span>
                                <span>+1 (800) 3D-PRINT</span>
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="border-t border-[#2d1f28] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm">© 2023 iprint Inc. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a className="text-gray-500 hover:text-white text-sm" href="#">Privacy Policy</a>
                            <a className="text-gray-500 hover:text-white text-sm" href="#">Terms</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
