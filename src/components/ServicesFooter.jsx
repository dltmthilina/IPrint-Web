import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../iprintlogo.jpeg';

const ServicesFooter = () => {
    return (
        <footer className="w-full border-t border-[#392833] bg-[#181116] py-12">
            <div className="layout-container flex justify-center px-6">
                <div className="max-w-[1280px] w-full flex flex-col md:flex-row justify-between gap-10">
                    <div className="flex flex-col gap-4">
                        <Link to="/" className="flex items-center gap-3 group">
                            <img src={logo} alt="iprint" className="h-8 w-auto rounded shadow-sm" />
                            <span className="text-white text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
                                iprint
                            </span>
                        </Link>
                        <p className="text-[#b99db0] text-sm max-w-xs">
                            Bringing your ideas to life with premium printing services. Quality you can feel, colors you can trust.
                        </p>
                    </div>
                    <div className="flex gap-12 flex-wrap">
                        <div className="flex flex-col gap-3">
                            <h4 className="text-white font-bold">Company</h4>
                            <a className="text-[#b99db0] hover:text-primary text-sm" href="#">About Us</a>
                            <a className="text-[#b99db0] hover:text-primary text-sm" href="#">Careers</a>
                            <a className="text-[#b99db0] hover:text-primary text-sm" href="#">Blog</a>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h4 className="text-white font-bold">Support</h4>
                            <a className="text-[#b99db0] hover:text-primary text-sm" href="#">Help Center</a>
                            <a className="text-[#b99db0] hover:text-primary text-sm" href="#">File Guidelines</a>
                            <a className="text-[#b99db0] hover:text-primary text-sm" href="#">Contact</a>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h4 className="text-white font-bold">Legal</h4>
                            <a className="text-[#b99db0] hover:text-primary text-sm" href="#">Privacy Policy</a>
                            <a className="text-[#b99db0] hover:text-primary text-sm" href="#">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="layout-container flex justify-center px-6 mt-12">
                <div className="max-w-[1280px] w-full border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-[#b99db0] text-sm">© 2024 iprint Inc. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a className="text-[#b99db0] hover:text-white transition-colors" href="#"><i className="text-xl">𝕏</i></a>
                        <a className="text-[#b99db0] hover:text-white transition-colors" href="#">Instagram</a>
                        <a className="text-[#b99db0] hover:text-white transition-colors" href="#">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ServicesFooter;
