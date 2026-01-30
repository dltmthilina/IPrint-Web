import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
    return (
        <div className="flex min-h-screen flex-col bg-background-dark text-white font-display overflow-x-hidden">
            <Header />

            <main className="flex-grow">
                {/* About Hero */}
                <section className="relative py-24 px-6 lg:px-12 overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none"></div>

                    <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
                        <span className="inline-block py-1 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                            Our Story
                        </span>
                        <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">
                            Defining the <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-tertiary">Future</span> of Tangible Memories.
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-3xl leading-relaxed font-light">
                            Founded at the intersection of art and engineering, iprint3D began with a simple mission: to make high-end custom manufacturing accessible to everyone. Today, we're the leading platform for hyper-realistic 3D printed masterpieces.
                        </p>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-12 border-y border-white/5 bg-surface-dark/30">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <h3 className="text-4xl md:text-5xl font-bold text-secondary mb-2">50k+</h3>
                                <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Prints Delivered</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">12k+</h3>
                                <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Happy Clients</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-4xl md:text-5xl font-bold text-tertiary mb-2">99.9%</h3>
                                <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Quality Rate</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">24h</h3>
                                <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Average Turnaround</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Vision Section */}
                <section className="py-24 px-6 lg:px-12 relative">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                            <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-surface-dark">
                                <img
                                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                                    alt="3D Printing Technology"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-8">
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                                Crafting <span className="text-primary italic">Quality</span> without Compromise.
                            </h2>
                            <div className="flex flex-col gap-6 text-gray-400 text-lg leading-relaxed font-light">
                                <p>
                                    We believe that every custom piece should be a work of art. That's why we've invested in the latest UV-curing and sublimation technologies that ensure your prints don't just look good today, but stay vibrant for decades.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-6 mt-4">
                                    <div className="flex flex-col gap-3 p-6 rounded-2xl bg-surface-dark border border-white/5 hover:border-primary/50 transition-colors">
                                        <span className="material-symbols-outlined text-primary text-3xl">precision_manufacturing</span>
                                        <h4 className="text-white font-bold">Precision Built</h4>
                                        <p className="text-sm">Micron-level accuracy in every layer of the printing process.</p>
                                    </div>
                                    <div className="flex flex-col gap-3 p-6 rounded-2xl bg-surface-dark border border-white/5 hover:border-secondary/50 transition-colors">
                                        <span className="material-symbols-outlined text-secondary text-3xl">eco</span>
                                        <h4 className="text-white font-bold">Sustainable</h4>
                                        <p className="text-sm">Eco-friendly resins and reduced-waste manufacturing cycles.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 px-6 lg:px-12">
                    <div className="max-w-5xl mx-auto rounded-[3rem] bg-gradient-to-br from-primary/20 via-surface-dark to-secondary/10 p-12 md:p-20 text-center border border-white/10 relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to start your first project?</h2>
                            <button className="bg-white text-black px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                                Get a Free Quote
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default AboutPage;
