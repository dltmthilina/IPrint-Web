import React from 'react';

const WhyChooseSection = () => {
    return (
        <div className="w-full bg-surface-dark py-24 relative overflow-hidden border-t border-[#2d1f28]">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="layout-container flex justify-center w-full relative z-10">
                <div className="layout-content-container flex flex-col max-w-[1280px] w-full px-4 md:px-10">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        {/* Left Content */}
                        <div className="md:w-1/2">
                            <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-6">
                                Why <span className="text-primary">iprint</span> is your best choice?
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                We utilize state-of-the-art 3D sublimation and UV printing technology to ensure your customized products look hyper-realistic and last a lifetime.
                            </p>

                            {/* Features Grid */}
                            <div className="grid grid-cols-2 gap-6">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-secondary text-3xl">3d_rotation</span>
                                    <span className="text-white font-medium">3D Preview</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-tertiary text-3xl">bolt</span>
                                    <span className="text-white font-medium">Fast Shipping</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-3xl">diamond</span>
                                    <span className="text-white font-medium">Premium Quality</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-purple-400 text-3xl">verified</span>
                                    <span className="text-white font-medium">Lifetime Print</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Content - CTA Card */}
                        <div className="md:w-1/2 relative">
                            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                                {/* Background Glow */}
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse"></div>

                                {/* Card */}
                                <div className="relative w-full h-full bg-surface-dark-hover rounded-2xl border border-white/10 shadow-2xl p-4 sm:p-8 flex flex-col justify-center items-center text-center backdrop-blur-sm z-10">
                                    <span className="material-symbols-outlined text-6xl text-white mb-4">deployed_code</span>
                                    <h3 className="text-2xl font-bold text-white mb-2">Ready to Print?</h3>
                                    <p className="text-gray-400 mb-6">Upload your photos and see the magic happen.</p>
                                    <button type="button" className="min-h-[48px] bg-primary hover:bg-primary/80 text-white px-6 sm:px-8 py-3 rounded-xl font-bold text-sm sm:text-base shadow-lg shadow-primary/30 transition-all active:scale-95">
                                        Start Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseSection;
