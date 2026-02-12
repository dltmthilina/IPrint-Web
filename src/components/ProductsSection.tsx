import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types/common';



const products: Product[] = [
  {
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAgA79tulIF2vDVAqptHphrMg-vIXU17DPIHAX9B4LB9BxQf2z86v0cVic_bQc9QfYNfP58XL0Z5zkga3kKYJBUyUreWDIX9ki0H62jFXF3Er1A-RYCySdKU2k7j9dWCcn3jHOVtOqrNBosyOmALCjB9UL7qfGDhRGT7LjFgbOavT9JOqd_-MRaH6YMFj6OSg_MSL3kMXQex_ZZ9r3J_3KzQuohfUVq2EFkDqPegEd3wctI7kC3F9NPWkjQm_fXnigi1UNqN1km85mX",
    title: "Mug Printing",
    description: "High-gloss ceramic finishes.",
    hoverColor: 'primary',
  },
  {
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDWUIcgsIQKyBh_Og5Y9m074qEsvyl2pKN1QCGI9LfB3eU29HTZTRZ94lZMV7iDQCdbNQQd3wWeeGdNDxNmBXemIboMXQcWwePac6OispgnI4qPfrE5R-sPSkAzX8vb-j833MiJx-EyjaMIJCOlKNp09ltZJE28Wrxsn-CjvV7F36xjdOgoxYDQ8bsWeEtj7y7b71TR4YxPwPB_6lyyldpvsqZJs74aXY9Y7kDMRCJwdtncigWlR2cYbLg-Kaiz_SClXttPKFz30jls",
    title: "Photo Printed Tiles",
    description: "Vibrant ceramic wall art.",
    hoverColor: "secondary",
  },
  {
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA_27RRZaRc41vAGBJZBbZHcqlc3piARaKc94Ib7px0SzaOgkBCpllB5IFXsUprAN1m5RT11XcEVhzLmeb3Cmpe6mpp2Ffkum9xTGjADnnGG_0uXAjcseQw23j9pUQYqfp8w2xvnH3F0c-Ot-Pq0Glac97tQ1kQjXDPMxQ0dlMVrjeABcdemwHlDvxdmwRZZ2V8X0-F5d5ZVsujhiQsqmZW63DCJg58JdLbcWqRN8AO10bUt5_GSPL2d0n3YhJbTwf3DOrp_aDAMV7t",
    title: "Photo Printed Crystals",
    description: "Laser-etched glass memories.",
    hoverColor: "purple",
  },
  {
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBgjteg-z-h4uV4krnEuDHdh0yLA78y47YwaSOf0PD-wFxv3U292YjpRxFOcipCqhIqhmVO1BKnWwBEjRoOWYtj5bHPnatOJjW_SXW2m5PPqyXo-XaeJWK2vB4lWpi5yjPQA1Zkmqc1myX83SLcyqRNj1wV8639kv1Lq-YhQMuTR5QGV2044X1_b2uGAYvyveaYpiio4cwj4DwM1ejZBzEw3R-L_Ro9RQGv9jERHSEBxIZQQSPB04krIzfWiJc7rulw6KQHZUyrXPkf",
    title: "Photo Printed Granite",
    description: "Durable stone photo blocks.",
    hoverColor: "yellow",
  },
  {
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD-Cd9rd5hhm0am40T9gFMEHj-YPYfbg4WhestKsjvdAPPeVvHAP_ZETUQ_QbyLDCgj52aX41aVA213LYUr5dS0X6xwkJWKvjNsAAf2zaCQi2hvan7ntTrT-PMAxHGD2ITpahNs2xb8ywfZ3GavVMszYDf1h--Nvh9rSs8EUseJ2RmuAM6ljPEbmD_hj1A6n6DRLW9f80YmjtSswcPVeLahi86NcJ5N8MGPQ6qrA1jhOJ2NcR6ydGWET7GdMp7PcnGnmUOK4rnmxCBo",
    title: "Magic Mirrors & Pillows",
    description: "Surprise LED mirrors & soft decor.",
    hoverColor: "pink",
  },
  {
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBVl1ge4zBy-eFPaXD85iUsl9ASbuhOcHIoRs99X1Gf_Ue26qkIeTVvl7VMaRjcUTAoCW4bcGjvRyscH6sBad6tBJVAlGyk8r5Mcdp4BFX9om88gZD-6shFGF31bUjbxhzxErRXMz3BCKZvqDee2hjs1mnaDVdWlwe5EFZX94iOmtdhsUJBeZMZcBaqxDgPhFSFbHpzLqfSGDMaGXPszjQP6IrAyH8w9cc95jTVloycpv46PeNGST6_eSNgEvtImrpKeXgFv1oXLGJa",
    title: "T-Shirts",
    description: "Premium cotton custom prints.",
    hoverColor: "blue",
  },
  {
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC2x2XJGN3wwlypPzhq1fnhOiuna5NwGFpPEXqSUlPG1aEf4AYPsoyuhe97LrK4JPd8kH02toTneXMZ73Yt_-P_4fIxO9oulHqP1bMNgUCDh82u_2mA4lcfBJy3VAjIPVgWQ-BHpYhMW9PThG555oo0hoI7GYtDjhNlMHyxKSLNtaCombSML9wUbzPUG7dIBgUuVcNZ2FjEdTHVbDu1w2zqlZ8WYpDl27XaZpgCkoWOQQUc5MpxCpAXSCB3Jfb9d8aF0K-LOQpm2FWM",
    title: "Clock & Key Tags",
    description: "Functional personalized accessories.",
    hoverColor: "green",
  },
  {
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBgjteg-z-h4uV4krnEuDHdh0yLA78y47YwaSOf0PD-wFxv3U292YjpRxFOcipCqhIqhmVO1BKnWwBEjRoOWYtj5bHPnatOJjW_SXW2m5PPqyXo-XaeJWK2vB4lWpi5yjPQA1Zkmqc1myX83SLcyqRNj1wV8639kv1Lq-YhQMuTR5QGV2044X1_b2uGAYvyveaYpiio4cwj4DwM1ejZBzEw3R-L_Ro9RQGv9jERHSEBxIZQQSPB04krIzfWiJc7rulw6KQHZUyrXPkf",
    title: "Water Bottles",
    description: "Eco-friendly custom drinkware.",
    hoverColor: "cyan",
  },
];

const ProductsSection = () => {
  return (
    <div className="w-full bg-[#130d11] py-12 sm:py-20 relative" id="services">
      {/* Top Border Gradient */}
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="layout-container flex justify-center w-full relative z-10">
        <div className="layout-content-container flex flex-col max-w-[1280px] w-full px-5 sm:px-6 md:px-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-[10px] sm:text-xs mb-3 sm:mb-4 block">Our Catalog</span>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">3D Products</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">Select a category to customize your high-quality prints.</p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                imageUrl={product.imageUrl}
                title={product.title}
                description={product.description}
                hoverColor={product.hoverColor}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
