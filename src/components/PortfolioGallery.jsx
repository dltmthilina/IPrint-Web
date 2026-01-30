import React from 'react';

const GalleryItem = ({ imageUrl, category, title, alt }) => (
    <div className="masonry-item group relative overflow-hidden rounded-xl bg-gray-900 cursor-pointer">
        <img
            src={imageUrl}
            alt={alt}
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2">{category}</span>
            <h3 className="text-white text-xl font-bold">{title}</h3>
            <button className="mt-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary transition-colors">
                <span className="material-symbols-outlined">arrow_outward</span>
            </button>
        </div>
    </div>
);

const PortfolioGallery = () => {
    const items = [
        {
            imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmlDR7NjSBL_3gcRTFHWXiAGrKXe_ybuCIKyYqwdJu2qWcs-FaSBRyYxIuejdGTwR6tvg8OXFM7xlVjnF7t1S8VV23dFWggSB2YYN3ZzGeSJ7AtsFcSWQXp3vtii4FE6lxrd_aDP7N6R3rNw2Qp48L43ZT4mIMUgeBnmn7aZl6dofHPGvHXYjSWVEo7kkPIORgsFb5NvLr623HWMQopozcmswwMDenMe-pDn_kqUA_An4d-iBYrPQiUjPbeYjzlsA1rt_G2J-95GWV',
            category: 'Digital Print',
            title: 'App Launch Flyers',
            alt: 'Mobile app design interface displayed on smartphone mockup'
        },
        {
            imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAq_t-0Q_gxa3lLfIGLuKHMDewJvZwU8Qb3-zQhqO3Rfjy2VMvG5m4deHnpXF8Spa79Y66ooQIBIhkRbu22AizRgt4subK5kdt98PJBKPJosb4q8vj6TFSerwpiY3TNontzGGwCcfDKercjmDUBMQd9BEZT4J02MgbGQvcOxfPVV_MiUw9OTvHlnkNK7HJCx0fV0BsDTDScmYL8nUBi6esxmBqaH47aSQm9_Sxo9PmNscMoHPVKr0UPFuQTIFNxMzm0ZL5S8Lyd3JQH',
            category: 'Home Decor',
            title: 'Gallery Wall Collection',
            alt: 'Artist gallery wall with various framed colorful prints'
        },
        {
            imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNxDmOxOm9eU3wPmGmgtn2Hjtu_yMCLQPGMOn3uthYwW2lOGt81HYH7CWZjSLckow_T26jXQmgP65DgvAslkEC9xu-ZMlASiZqCdxbJQf-78AO34-tCg_6MN7wcOpvRybUviaANBw4-D2nOkprSBlxK_XVqAgX8s4-g_g5i-S-MUhAHsxSUJlven4JVDbjoWhezUY_ZEQ3nhhZ1YsTsXVHLYId9MjruSDXwYht4a5LLbse1G0NMApFlYVcNdP1L1UJZBQhyhXuAhFV',
            category: 'Large Format',
            title: 'Showroom Backdrops',
            alt: 'Luxury minimalist interior with modern furniture and decor'
        },
        {
            imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCue8OIlG47aHzZVdKyI87em4IW877h7PlkoEyHXip0MX5sH4cjJJzzsXB-vb1TdXV4GqNTSdV5HCMAbBW6ww5H_JuapOast_hxxWO84-lWF2Dp2JSA_SeTbM_x_fv6Etv5ZVqArdimnDl126NhU3kS8EKsTbiku5m0yRm3pWP0tEYycI_EVPq471fxoW34dmcLijvai9_yOMVDS7H2zKQr6hlm2oWXTfcP1jS3Av79B29iCv7nef7Ck_AW3BzdGGTyNdQX-VL7w5V5',
            category: 'Branding',
            title: 'Luxe Foil Business Cards',
            alt: 'Stack of minimalist business cards on dark surface'
        },
        {
            imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBG0xYknAG_J_N95CkqraVGXk3GTD45XJJNigxKdy4f54RvdBILcovgKWLGH2BWp9zUmAlS0tk-mSkvykEpFOMyC3R1kaO9Obf2_bIaicbF_W4IZJHy3QbsJAbjLZMKynUPwPsbASoZ-0dq5DSDust0oLBaYUIaVQ638IpX_LcbK5M3HvAY9QHZS8mVVYyqzNX0IAZTl8rsHZVhnhJptGSPbZimAD7gETwYFGM6ihj7VEws2zzpD2_yN9xPtWNefjsvCPG4j5TiXBEm',
            category: 'Merchandise',
            title: 'Eco-Friendly Totes',
            alt: 'Canvas tote bag with printed botanical illustration'
        },
        {
            imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC29jUyM4RDuR9hrpjfmHJGMBg_DK_8JsMfLUIjFtuHxlpLVVbZCtZ7rGuiQ683YjNaIwLLjSULyAHlJVjg1CrWGetW93lOzrWpzVt2zUk6Y4zigwzXIScPaCWauEfjoCrRjcd2MsJm8LfOG0SAC70c-u30ZiUpGhyxf8M_a61WVuj4rv3JC6x2ge_xZ1WBjlFYGXHVfYmb-5RfWQZVlJRl_s5OJxrHx7Ly3OFxW9O3BlKtMAOaYWZJwzj8vMConwKJNt4E1HEh_MVd',
            category: 'Events',
            title: 'Wedding Suite',
            alt: 'Elegant wedding invitation suite with floral details'
        }
    ];

    return (
        <section className="px-6 lg:px-12 pb-24">
            <div className="max-w-[1400px] mx-auto masonry-grid">
                {items.map((item, index) => (
                    <GalleryItem key={index} {...item} />
                ))}
            </div>
            <div className="flex justify-center mt-12">
                <button className="group flex items-center gap-2 px-8 py-3 rounded-xl border border-primary/30 bg-primary/5 hover:bg-primary/10 text-primary font-bold transition-all hover:scale-105">
                    Load More Inspiration
                    <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">expand_more</span>
                </button>
            </div>
        </section>
    );
};

export default PortfolioGallery;
