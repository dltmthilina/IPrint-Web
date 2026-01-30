import React from 'react';
import SidebarActions from '../components/SidebarActions';
import ServicesHeader from '../components/ServicesHeader';
import ServicesHero from '../components/ServicesHero';
import ServiceRow from '../components/ServiceRow';
import ServicesFooter from '../components/ServicesFooter';

const ServicesPage = () => {
    const servicesData = [
        {
            icon: 'print',
            title: 'Digital Printing',
            description: 'High-quality business cards, flyers, brochures, and documents delivered with speed and precision. Perfect for professionals who need to make an impact.',
            priceLabel: 'Starting Price',
            price: '$15.00',
            imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoHtYk9Wpq1P-gYDyWSCLiDVMo4IQF7O2auWw2aVxyKEWmeL6BwLIEcB5VUX64NLAoQN2QmP6CSh3lurMWGBexjWcIXoTG4gS67iPP6A-BB7eMXpoDbniZz_Rmi3VmynUEfyceXNzd70-9fb6t0xV92kq-D3NeFIW78Kf6-PikQdslXDEZmr__ubDI8Dq5tQncwJafyYAUqQEyQUohBpHE7rdaUC2mjsY0-pC-vUtZvwLeQ848Zu1xFAUUqcCQGNy2d0P_t014fASv',
            imageAlt: 'Stack of colorful high quality business cards and flyers',
            tags: ['Matte Finish', 'Glossy'],
            reverse: false,
            iconBgColor: 'text-primary',
            buttonHoverColor: 'hover:bg-primary'
        },
        {
            icon: 'coffee',
            title: 'Custom Mugs',
            description: 'Sip in style with our range of ceramic and enamel mugs. Full-color sublimation printing that lasts through thousands of dishwasher cycles.',
            priceLabel: 'Starting Price',
            price: '$12.00',
            imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCH-CSr_5Czd3FizawWfIu4opKwsa0qWJQYsQz2hohLuyTyeg0ncgcc4ZkDr17BPAw_Apq29IqLJ2QR3abPp0QnRUCawSZ1RIFsqfysEAb6HyqQ_wHML9EHTnOeh6h1Pb6Z9k0FqWuSClhBhBAhV7qPV-na_RsK0yaOGJOqhKSHwkLFD7W-eQ9slJvVFfB-4QkK-HZeS20PwRUQkzbJfJ40yUa9pD1sVQ-y8ee9sGRUSZ3bShBkxGZdLH1SPpvc0w9LuzCJdgElN4aI',
            imageAlt: 'Custom printed coffee mug on a minimal wooden table',
            tags: [],
            reverse: true,
            iconBgColor: 'text-blue-400',
            buttonHoverColor: 'hover:bg-blue-400'
        },
        {
            icon: 'crop_original',
            title: 'Art Framing',
            description: 'Museum-quality framing for your art and photos. Choose from solid wood, metal, or floating frames with archival mats.',
            priceLabel: 'Pricing',
            price: 'Custom Quotes Available',
            imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCj5eakc3lmf3CmxCQ1ZafQJ3sBDeBkiiMqgrBxSMLmZU1QU7jYj9Uq5CRT9nEh-mQoH4FXiYNeOqpqIMOZ14UC-3X1TJwrPIUm_MpeCm0F56LZ4R85PY0_c2kzX4myChs3fdkKspD_uoZ9GRrp3M--2oRFirWZ_EXdorKAngD3cN2HlPIs5ezTUMj-KvNODR8KoGa_TLxhZM6DN6X5r57JpGu1SlYCingnttgm6Q7tMkTTbL5oI__aWF34vmtw0IK1py7lBdP9zkpf',
            imageAlt: 'Gallery wall with various sized framed art prints',
            tags: [],
            reverse: false,
            iconBgColor: 'text-purple-500',
            buttonHoverColor: 'hover:bg-purple-500'
        },
        {
            icon: 'card_giftcard',
            title: 'Personalized Gifts',
            description: 'From photobooks to custom pillows and canvases. Turn your memories into tangible gifts that loved ones will cherish forever.',
            priceLabel: 'Starting Price',
            price: '$25.00',
            imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAE-5-c0QzdttS81YP1Oao7nOi85oz0nktvEjyqfC_Sbf9uk9nVMuiKLgGO5MVGycpOXvPnKddQpn4p2KN8euXAjUGeWSmo_x535qY5cH2OufYlm0HRe9bLSBmPAApu8fhDhLcKKML5OpKErw6vO-dAw8I-c-O7NHX2cE1VM8GP2c5-rnLvIH1s8-8EeD7J1g23MK6KLHAmXLMqmX2wbo0TCT2SK_WXL7Bmp6PWh19jYQSkRmhuSAInraWbdEo_TJJHMW53LCiwaqu',
            imageAlt: 'Open photobook and wrapped gifts on a table',
            tags: [],
            reverse: true,
            iconBgColor: 'text-green-400',
            buttonHoverColor: 'hover:bg-green-400'
        }
    ];

    return (
        <div className="bg-background-light dark:bg-background-dark-alt text-slate-900 dark:text-white font-display overflow-x-hidden relative min-h-screen">
            <SidebarActions />
            <ServicesHeader />
            <ServicesHero />
            <main className="w-full pb-32">
                <div className="layout-container flex justify-center px-6">
                    <div className="max-w-[1280px] w-full flex flex-col gap-24 lg:gap-32">
                        {servicesData.map((service, index) => (
                            <ServiceRow key={index} {...service} />
                        ))}
                    </div>
                </div>
            </main>
            <ServicesFooter />
        </div>
    );
};

export default ServicesPage;
