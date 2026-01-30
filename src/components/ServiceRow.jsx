import React from 'react';

const ServiceRow = ({
    icon,
    title,
    description,
    priceLabel,
    price,
    imageUrl,
    imageAlt,
    tags = [],
    reverse = false,
    iconBgColor = 'text-primary',
    buttonHoverColor = 'hover:bg-primary'
}) => {
    return (
        <div className="group/card relative grid lg:grid-cols-2 gap-12 items-center">
            {/* Decor */}
            <div className={`absolute ${reverse ? 'right-0' : 'left-0'} top-1/2 -translate-y-1/2 w-full h-[120%] bg-gradient-to-${reverse ? 'l' : 'r'} from-primary/5 to-transparent -z-10 blur-3xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-700`}></div>

            <div className={`relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl ${reverse ? 'rotate-[2deg] order-1 lg:order-2' : 'rotate-[-2deg]'} hover:rotate-0 transition-transform duration-500 border border-white/10 group-hover/card:border-primary/50`}>
                <img src={imageUrl} alt={imageAlt} className="w-full h-full object-cover" />
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
                {tags.length > 0 && (
                    <div className="absolute bottom-6 left-6 flex gap-2">
                        {tags.map((tag, idx) => (
                            <span key={idx} className="bg-black/50 backdrop-blur text-white text-xs px-2 py-1 rounded">{tag}</span>
                        ))}
                    </div>
                )}
            </div>

            <div className={`flex flex-col gap-6 ${reverse ? 'order-2 lg:order-1 lg:pr-10' : 'lg:pl-10'}`}>
                <div className="size-14 rounded-2xl bg-surface-dark-alt border border-white/10 flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(0,0,0,0.3)]">
                    <span className={`material-symbols-outlined text-3xl ${iconBgColor}`}>{icon}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{title}</h2>
                <p className="text-xl text-[#b99db0] leading-relaxed">{description}</p>
                <div className={`h-px w-full bg-gradient-to-${reverse ? 'l' : 'r'} from-transparent via-white/10 to-transparent my-2`}></div>
                <div className="flex items-end justify-between">
                    <div>
                        <p className="text-sm text-white/60 font-medium uppercase tracking-wider mb-1">{priceLabel}</p>
                        <p className="text-3xl font-bold text-white">{price}</p>
                    </div>
                    <button className={`h-12 px-6 rounded-xl bg-white text-background-dark font-bold ${buttonHoverColor} hover:text-white transition-all duration-300 flex items-center gap-2`}>
                        {reverse ? 'Customize ' + title.split(' ')[1] : 'Start Project'}
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceRow;
