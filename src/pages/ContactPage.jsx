import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => {
    return (
        <div className="flex min-h-screen flex-col bg-background-dark text-white font-display overflow-x-hidden">
            <Header />

            <main className="flex-grow">
                <section className="relative py-24 px-6 lg:px-12 overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none"></div>

                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start relative z-10">
                        {/* Contact Info */}
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-4">
                                <span className="text-secondary font-bold tracking-widest uppercase text-sm">Get in Touch</span>
                                <h1 className="text-5xl md:text-7xl font-black leading-none">Let's Create <br /><span className="text-primary italic">Magic</span> Together.</h1>
                                <p className="text-gray-400 text-xl font-light mt-4 max-w-lg">
                                    Have a complex project or a unique idea? Our design team is ready to help you bring it to life.
                                </p>
                            </div>

                            <div className="flex flex-col gap-8">
                                <div className="flex items-start gap-6 group">
                                    <div className="size-12 rounded-2xl bg-surface-dark border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        <span className="material-symbols-outlined">mail</span>
                                    </div>
                                    <div>
                                        <h4 className="text-gray-500 text-sm font-bold uppercase tracking-wider">Email Us</h4>
                                        <p className="text-xl font-medium">hello@iprint3d.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="size-12 rounded-2xl bg-surface-dark border border-white/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-black transition-all duration-300">
                                        <span className="material-symbols-outlined">call</span>
                                    </div>
                                    <div>
                                        <h4 className="text-gray-500 text-sm font-bold uppercase tracking-wider">Call Directly</h4>
                                        <p className="text-xl font-medium">+1 (800) 3D-PRINT</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="size-12 rounded-2xl bg-surface-dark border border-white/10 flex items-center justify-center text-tertiary group-hover:bg-tertiary group-hover:text-black transition-all duration-300">
                                        <span className="material-symbols-outlined">location_on</span>
                                    </div>
                                    <div>
                                        <h4 className="text-gray-500 text-sm font-bold uppercase tracking-wider">Visit Studio</h4>
                                        <p className="text-xl font-medium">123 Dimension Way, NY 10001</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4 pt-4">
                                {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((social) => (
                                    <button key={social} className="px-4 py-2 rounded-lg bg-surface-dark border border-white/5 hover:border-primary/50 text-xs font-bold transition-all">
                                        {social}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="w-full p-8 md:p-12 rounded-[2.5rem] bg-surface-dark/40 backdrop-blur-xl border border-white/10 shadow-2xl relative">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
                            <form className="flex flex-col gap-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-2">Full Name</label>
                                        <input type="text" placeholder="John Doe" className="w-full bg-background-dark border border-white/10 rounded-2xl h-14 px-6 focus:border-primary focus:outline-none transition-colors" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-2">Email Address</label>
                                        <input type="email" placeholder="john@example.com" className="w-full bg-background-dark border border-white/10 rounded-2xl h-14 px-6 focus:border-primary focus:outline-none transition-colors" />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-2">Subject</label>
                                    <select className="w-full bg-background-dark border border-white/10 rounded-2xl h-14 px-6 focus:border-primary focus:outline-none transition-colors appearance-none">
                                        <option>General Inquiry</option>
                                        <option>Custom Quote Request</option>
                                        <option>Business Partnership</option>
                                        <option>Technical Support</option>
                                    </select>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-2">Your Message</label>
                                    <textarea placeholder="Tell us about your project..." className="w-full bg-background-dark border border-white/10 rounded-2xl h-40 p-6 focus:border-primary focus:outline-none transition-colors resize-none"></textarea>
                                </div>

                                <button className="w-full h-16 rounded-2xl bg-gradient-to-r from-primary to-purple-600 font-black text-lg hover:shadow-[0_0_30px_rgba(238,43,173,0.4)] transition-all">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ContactPage;
