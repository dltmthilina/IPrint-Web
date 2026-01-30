import React from 'react';
import { HoverColor } from '../types/common';


interface ProductCardProps {
    imageUrl: string;
    title: string;
    description: string;
    hoverColor?: HoverColor;
    hoverBgColor?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
    imageUrl,
    title,
    description,
    hoverColor = 'primary',
    hoverBgColor = 'bg-primary'
}) => {
    // Map hover colors to Tailwind classes
    const hoverColorClasses: Record<HoverColor, string> = {
        primary: 'hover:border-primary/50 hover:shadow-[0_20px_40px_-15px_rgba(238,43,173,0.3)]',
        secondary: 'hover:border-secondary/50 hover:shadow-[0_20px_40px_-15px_rgba(0,255,255,0.3)]',
        purple: 'hover:border-purple-500/50 hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.3)]',
        yellow: 'hover:border-yellow-500/50 hover:shadow-[0_20px_40px_-15px_rgba(234,179,8,0.3)]',
        pink: 'hover:border-pink-500/50 hover:shadow-[0_20px_40px_-15px_rgba(236,72,153,0.3)]',
        blue: 'hover:border-blue-500/50 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.3)]',
        green: 'hover:border-green-500/50 hover:shadow-[0_20px_40px_-15px_rgba(34,197,94,0.3)]',
        cyan: 'hover:border-cyan-500/50 hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.3)]',
    };

    const textHoverClasses: Record<HoverColor, string> = {
        primary: 'group-hover:text-primary',
        secondary: 'group-hover:text-secondary',
        purple: 'group-hover:text-purple-400',
        yellow: 'group-hover:text-yellow-400',
        pink: 'group-hover:text-pink-400',
        blue: 'group-hover:text-blue-400',
        green: 'group-hover:text-green-400',
        cyan: 'group-hover:text-cyan-400',
    };

    const buttonHoverClasses: Record<HoverColor, string> = {
        primary: 'hover:bg-primary',
        secondary: 'hover:bg-secondary hover:text-black',
        purple: 'hover:bg-purple-600',
        yellow: 'hover:bg-yellow-500 hover:text-black',
        pink: 'hover:bg-pink-600',
        blue: 'hover:bg-blue-600',
        green: 'hover:bg-green-600',
        cyan: 'hover:bg-cyan-600',
    };

    return (
        <div className={`group relative bg-surface-dark rounded-3xl overflow-hidden border border-white/5 transition-all duration-500 hover:-translate-y-2 ${hoverColorClasses[hoverColor]}`}>
            <div
                className="aspect-[4/5] w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url("${imageUrl}")` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className={`text-white text-xl font-bold mb-1 transition-colors ${textHoverClasses[hoverColor]}`}>
                    {title}
                </h3>
                <p className="text-gray-400 text-xs mb-4 line-clamp-2">{description}</p>
                <button className={`w-full py-2 rounded-lg bg-white/10 text-white text-sm font-bold transition-colors backdrop-blur-sm ${buttonHoverClasses[hoverColor]}`}>
                    Customize
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
