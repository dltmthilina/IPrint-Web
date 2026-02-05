import React from 'react';

const ServicesHero = () => {
    return (
        <section className="relative w-full py-20 lg:py-32 overflow-hidden">
            {/* Background Gradient Blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3"></div>

            <div className="layout-container flex justify-center relative z-10 px-6">
                <div className="max-w-[1280px] w-full flex flex-col items-center text-center gap-8">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-wide uppercase">
                        World Class Printing
                    </span>
                    <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-[-0.04em]">
                        Print Anything.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Beautifully.</span>
                    </h1>
                    <p className="max-w-2xl text-lg md:text-xl text-[#b99db0] font-light leading-relaxed">
                        From business cards to custom gifts, we bring your digital designs to life with premium quality materials, vibrant colors, and precision.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <button type="button" className="min-h-[48px] h-14 px-6 sm:px-8 rounded-2xl bg-primary text-white font-bold text-base sm:text-lg flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-transform shadow-[0_4px_20px_rgba(238,43,173,0.4)]">
                            <span>Explore Services</span>
                            <span className="material-symbols-outlined">arrow_downward</span>
                        </button>
                        <button type="button" className="min-h-[48px] h-14 px-6 sm:px-8 rounded-2xl bg-[#392833] text-white font-bold text-base sm:text-lg border border-white/5 hover:bg-[#4a3542] transition-colors active:scale-95">
                            Quick Quote
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesHero;
