import React, { useEffect, useState } from 'react';
import logo from '../assets/iprintlogo.jpeg';

interface SplashScreenProps {
    onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
    const [exit, setExit] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setExit(true);
            setTimeout(onFinish, 800); // Allow time for exit animation
        }, 2500);

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-background-dark transition-all duration-1000 ease-in-out ${exit ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100'}`}>
            {/* Animated Background Blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] animate-pulse delay-700"></div>

            <div className="relative flex flex-col items-center gap-8">
                {/* Logo Container */}
                <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary via-purple-500 to-secondary rounded-3xl blur-xl opacity-50 group-hover:opacity-100 animate-tilt transition duration-1000"></div>
                    <div className="relative size-40 md:size-52 rounded-3xl overflow-hidden border border-white/20 bg-surface-dark flex items-center justify-center p-6 shadow-2xl animate-in zoom-in-50 duration-700">
                        <img
                            src={logo}
                            alt="iprint Logo"
                            className="w-full h-auto rounded-xl transform transition-transform duration-700 hover:scale-110"
                        />
                    </div>
                </div>

                {/* Text Container */}
                <div className="flex flex-col items-center gap-2">
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white animate-in slide-in-from-bottom-10 duration-700 delay-200">
                        iprint<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">3D</span>
                    </h1>
                    <div className="flex items-center gap-3 animate-in fade-in duration-1000 delay-500">
                        <div className="h-1 w-12 bg-primary rounded-full animate-width-grow"></div>
                        <p className="text-gray-400 text-sm font-bold uppercase tracking-[0.3em] font-display">
                            Beyond Dimensions
                        </p>
                        <div className="h-1 w-12 bg-secondary rounded-full animate-width-grow"></div>
                    </div>
                </div>

                {/* Loading Indicator */}
                <div className="mt-8 flex gap-2">
                    {[0, 1, 2].map((i) => (
                        <div
                            key={i}
                            className="size-2 rounded-full bg-primary/40 animate-bounce"
                            style={{ animationDelay: `${i * 0.2}s` }}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SplashScreen;
