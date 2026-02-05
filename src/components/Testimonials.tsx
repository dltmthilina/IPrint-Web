import React from 'react';

type TestimonialCardProps = {
    quote: string;
    name: string;
    role: string;
    imageUrl: string;
    imageAlt: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, role, imageUrl, imageAlt }) => (
    <div className="p-4 sm:p-8 rounded-2xl bg-background-light dark:bg-[#181116] border border-transparent dark:border-[#392833] hover:border-primary/30 transition-colors group">
        <div className="flex gap-1 mb-6 text-yellow-400">
            <span className="material-symbols-outlined fill-current text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined fill-current text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined fill-current text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined fill-current text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined fill-current text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
        </div>
        <p className="text-base sm:text-lg font-medium leading-relaxed mb-6 sm:mb-8 text-slate-800 dark:text-gray-200">
            "{quote}"
        </p>
        <div className="flex items-center gap-4">
            <div
                className="w-12 h-12 rounded-full bg-cover bg-center ring-2 ring-primary/20"
                aria-label={imageAlt}
                style={{ backgroundImage: `url('${imageUrl}')` }}
            ></div>
            <div>
                <p className="font-bold text-slate-900 dark:text-white">{name}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{role}</p>
            </div>
        </div>
    </div>
);

const Testimonials = () => {
    const reviews = [
        {
            quote: "The colors came out perfectly! The gradient details on our business cards are stunning. Truly captured our brand essence.",
            name: "Sarah Jenkins",
            role: "Creative Director, ArtFlow",
            imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfIkXo9j-nGx938nUvqug18NeQ93hQU0jcHZoK2i3bxj3rh1mSpSxKwQgWYly43-M-25WgW8cF9h3tye-hrqnRkFKvs17569y0lh-1rriyKWepOrl4Ye0WOZ4LkRlWpNN83TRDMSehzfmWj3ZBkPN3YOQ9O6ve8Iiv1q16ldRb-7dgTJ1T0AKKMLvC5HLWegGuGo3a8grwcxSxEsi-n_L2PK_hXGABcHKkM3cCuzEE7WrXXJVUHDp1_s18ui8cwMZW-vPTaoue9J5S",
            imageAlt: "Profile picture of a smiling woman"
        },
        {
            quote: "Fastest turnaround in the city. The quality of the large format prints for our expo booth was unmatched.",
            name: "Mike Thompson",
            role: "Event Manager, TechGlobal",
            imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUUIp6Fpkfzs2SY_ZVcyZpbu2ROeO8BPgUErOVs99lvIu2D8fAbO7aEjSCNMTEqyG6Dsjkww9Ozch6KEZWw6-4xkN6vGuAOYNEYhZBL2AGJtd5DEDgbb4Q7JG8XRGsaKJyfoqHOOhEwc_FyUP6pQAvFRn3VLOgZcl6_eMQldk6XdSWFSsVCWF2oQBpHVBLE3_jsG7_hReulUQeIpxt97BZK5yaanNwMGs5zc5xwXjMOK8Ztz0ChBaYMhIu3B1KI2kR7XIL40hHdX14",
            imageAlt: "Profile picture of a man with glasses"
        },
        {
            quote: "Ordered custom gifts for the team and everyone loved the quality. Highly recommend iprint for any corporate needs!",
            name: "Elena Rodriguez",
            role: "HR Director, SoftSol",
            imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNfXjLGg0uMOu6fi76vuW9geivTjdndt-KVp3T-Tw9R9N1qr9SVEntaPEDCs5k6zazGvxSwEcvcUwc7w8ASAJnwGJCrHvP63MZaE-rWsvEKu05N0wekmmaRnWyal25Ep-V_GP9x93Aeu7djihiAJl6sjcJPcN3m2Xbf_aQCdwRKu0I2qkpC7dy655EENEYPqHtkaeW-dmI5Mam172ZybHUKRYStPygtLoNPzyInHbHcYTh9LsUycNaBVKhMoxUCGiXItMSxevqe7QI",
            imageAlt: "Profile picture of a woman with short hair"
        }
    ];

    return (
        <section className="bg-white dark:bg-surface-dark py-20 px-6 lg:px-12 relative overflow-hidden">
            {/* Decorative subtle gradient line top */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-3">Loved by Local Businesses</h2>
                        <p className="text-slate-500 dark:text-slate-400 font-body">See what our partners say about the iprint quality.</p>
                    </div>
                    <div className="flex gap-2">
                        <button type="button" className="min-w-[44px] min-h-[44px] w-12 h-12 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-slate-900 dark:text-white active:scale-95">
                            <span className="material-symbols-outlined">arrow_back</span>
                        </button>
                        <button type="button" className="min-w-[44px] min-h-[44px] w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25 active:scale-95">
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review, index) => (
                        <TestimonialCard key={index} {...review} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
