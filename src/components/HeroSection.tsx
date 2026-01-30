import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div className="relative w-full bg-background-dark overflow-hidden min-h-[800px] flex items-center">
            {/* Background Gradient Blobs */}
            <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#00ffff] rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none animate-pulse"></div>
            <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[#ff00ff] rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none animate-pulse"></div>
            <div className="absolute bottom-[-10%] left-[30%] w-[700px] h-[700px] bg-[#ffff00] rounded-full mix-blend-screen filter blur-[180px] opacity-10 pointer-events-none"></div>

            <div className="layout-container flex justify-center w-full relative z-10">
                <div className="layout-content-container flex flex-col max-w-[1280px] w-full px-4 md:px-10 py-12">
                    <div className="@container">
                        <div className="flex flex-col gap-12 lg:flex-row items-center">
                            {/* Left Content */}
                            <div className="flex flex-col gap-8 lg:w-1/2 text-left z-20">
                                {/* Badge */}
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-dark/50 backdrop-blur-md border border-primary/30 w-fit shadow-[0_0_15px_rgba(238,43,173,0.2)]">
                                    <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_#00ffff] animate-pulse"></span>
                                    <span className="text-xs font-bold text-white uppercase tracking-widest">Premium 3D Printing Service</span>
                                </div>

                                {/* Headline */}
                                <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-[-0.033em]">
                                    Print Beyond <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffff] via-[#ff00ff] to-[#ffff00] drop-shadow-[0_0_30px_rgba(238,43,173,0.4)]">
                                        Dimensions
                                    </span>
                                </h1>

                                {/* Description */}
                                <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-[550px]">
                                    Hyper-realistic custom prints. From mugs to crystals, we turn your digital memories into tangible, high-quality 3D masterpieces.
                                </p>

                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-5 mt-2">
                                    <Link to="/quote" className="flex items-center justify-center rounded-full h-14 px-10 bg-white text-background-dark hover:bg-gray-100 transition-all text-lg font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105">
                                        Create Now
                                    </Link>
                                    <Link to="/services" className="flex items-center justify-center rounded-full h-14 px-10 bg-transparent border border-gray-600 hover:border-white hover:bg-white/5 transition-all text-white text-lg font-medium gap-2 backdrop-blur-sm">
                                        <span className="material-symbols-outlined">square</span>
                                        View 3D Samples
                                    </Link>
                                </div>

                                {/* Social Proof */}
                                <div className="flex items-center gap-6 mt-6 pt-6 border-t border-white/10">
                                    <div className="flex -space-x-4">
                                        <div
                                            className="w-12 h-12 rounded-full border-2 border-background-dark bg-gray-700 bg-cover bg-center shadow-lg"
                                            style={{
                                                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCtlZlrVVWdrwlmbnde7dKP3Bm3x-23PBZPg4CYoVMC9HeqhiLRcPFYa6B1FfxFEODjdgzZy20U3tNBEVLbr2YaWBvWaGm6bT_c77NMVrze4TgQJvl0CzWCe-gf1-xpwdJ5acyTLE5WuSkxVXpH0UJSwYfiKuydWejsN3QU3lHBc-Hq1YG_J_7eGwd6O9odE6FlXdeCzlj8ADmudOB1Ue7gJz_-26NZuOTD8lKoLkkTq5YHg8gbHjM0yj836TDHMsxgAHrBVrDAnF1L")'
                                            }}
                                        ></div>
                                        <div
                                            className="w-12 h-12 rounded-full border-2 border-background-dark bg-gray-700 bg-cover bg-center shadow-lg"
                                            style={{
                                                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA17AoNjo07uZ8tJ5dkh-zz1rv6pkgycNy5cX46kFq8mgvJ9s-CtuleCPVw6jnniFfm1AuFZtKf2xgqoc4o4T0ZQc6QPTVLcqsjEGEOJNzH_qHnvexSTrpEmEU4_7bwhizERwSTTLvQdWleOXuysDqN0iu7rBiZJWbEbtU2Mv2vmEEwF0r7tKw_4ZJg3DvHemTln4yUHdp0cxCkBLdst50m98AG38s5ggX3FCgd_LaRmqvMxWX_Rwe-dJPzh2H1SE5WI-TacYYsG19A")'
                                            }}
                                        ></div>
                                        <div
                                            className="w-12 h-12 rounded-full border-2 border-background-dark bg-gray-700 bg-cover bg-center shadow-lg"
                                            style={{
                                                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA32i-bD4XXfA5ED-WvbFBkkuiw3uWJLZOqzreTHuDsTAJ2y8xVM9hVrJfO4m8rqjyfOM4mSgjDr1tm2aC7DIDAxOH3OfeWQEPWSYPXvI1BGpZWj2hHb2d2q9GQ11oRypCpnG3mO2nYtjK4-ZRFd_qRRjnGHeiai2jzSYlDuqDAtERowXCHN4BN8AQ1I_hpo9owsXzFJcuSqK4hcWmetuzYmP6ujsm_s2UYnMpAJbjCiZIwmk5ow5Wp2-mSkz0PErq27ifcAEEgai4t")'
                                            }}
                                        ></div>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="flex text-tertiary text-sm drop-shadow-[0_0_5px_rgba(255,255,0,0.5)]">
                                            <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                                            <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                                            <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                                            <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                                            <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                                        </div>
                                        <span className="text-sm text-gray-400 font-medium">Top Rated 3D Print Shop</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Content - 3D Floating Images */}
                            <div className="lg:w-1/2 relative flex justify-center lg:justify-end mt-16 lg:mt-0 h-[500px] w-full perspective-[1000px]">
                                {/* Main Card */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 z-20 animate-float hover:z-50 transition-all duration-500">
                                    <div
                                        className="w-full h-full bg-cover bg-center rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,255,255,0.4)] border border-white/20 relative overflow-hidden group transform rotate-y-12 rotate-x-6 hover:rotate-0 transition-transform duration-700 ease-out"
                                        style={{
                                            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA_27RRZaRc41vAGBJZBbZHcqlc3piARaKc94Ib7px0SzaOgkBCpllB5IFXsUprAN1m5RT11XcEVhzLmeb3Cmpe6mpp2Ffkum9xTGjADnnGG_0uXAjcseQw23j9pUQYqfp8w2xvnH3F0c-Ot-Pq0Glac97tQ1kQjXDPMxQ0dlMVrjeABcdemwHlDvxdmwRZZ2V8X0-F5d5ZVsujhiQsqmZW63DCJg58JdLbcWqRN8AO10bUt5_GSPL2d0n3YhJbTwf3DOrp_aDAMV7t")'
                                        }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-50"></div>
                                        <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10">
                                            <p className="text-white font-bold text-sm">Crystal Award</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Custom Mugs Circle */}
                                <div className="absolute top-20 left-0 md:left-10 w-48 h-48 z-10 animate-float-delayed">
                                    <div
                                        className="w-full h-full bg-cover bg-center rounded-full shadow-[0_20px_50px_-10px_rgba(238,43,173,0.5)] border-4 border-surface-dark relative transform -rotate-12 hover:rotate-0 transition-transform duration-500"
                                        style={{
                                            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC2x2XJGN3wwlypPzhq1fnhOiuna5NwGFpPEXqSUlPG1aEf4AYPsoyuhe97LrK4JPd8kH02toTneXMZ73Yt_-P_4fIxO9oulHqP1bMNgUCDh82u_2mA4lcfBJy3VAjIPVgWQ-BHpYhMW9PThG555oo0hoI7GYtDjhNlMHyxKSLNtaCombSML9wUbzPUG7dIBgUuVcNZ2FjEdTHVbDu1w2zqlZ8WYpDl27XaZpgCkoWOQQUc5MpxCpAXSCB3Jfb9d8aF0K-LOQpm2FWM")'
                                        }}
                                    >
                                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-surface-dark px-4 py-1 rounded-full border border-primary/30 text-xs font-bold text-primary shadow-lg whitespace-nowrap">
                                            Custom Mugs
                                        </div>
                                    </div>
                                </div>

                                {/* Printed Tiles */}
                                <div className="absolute bottom-20 right-0 md:right-4 w-56 h-40 z-30 animate-float-slow">
                                    <div
                                        className="w-full h-full bg-cover bg-center rounded-lg shadow-[0_20px_50px_-10px_rgba(255,255,0,0.3)] border border-white/10 relative transform rotate-6 hover:rotate-0 transition-transform duration-500"
                                        style={{
                                            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD-Cd9rd5hhm0am40T9gFMEHj-YPYfbg4WhestKsjvdAPPeVvHAP_ZETUQ_QbyLDCgj52aX41aVA213LYUr5dS0X6xwkJWKvjNsAAf2zaCQi2hvan7ntTrT-PMAxHGD2ITpahNs2xb8ywfZ3GavVMszYDf1h--Nvh9rSs8EUseJ2RmuAM6ljPEbmD_hj1A6n6DRLW9f80YmjtSswcPVeLahi86NcJ5N8MGPQ6qrA1jhOJ2NcR6ydGWET7GdMp7PcnGnmUOK4rnmxCBo")'
                                        }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                        <div className="absolute bottom-3 left-3 text-white font-bold text-sm">Printed Tiles</div>
                                    </div>
                                </div>

                                {/* Center Glow */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary rounded-full filter blur-[100px] opacity-20 z-0"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
