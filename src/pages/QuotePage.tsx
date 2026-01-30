import React, { useState } from 'react';
import Layout from "../components/layout";

const QuotePage = () => {
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const productTypes = [
    { id: "mugs", name: "Custom Mugs", icon: "coffee", price: "$12+" },
    { id: "crystals", name: "3D Crystals", icon: "diamond", price: "$45+" },
    { id: "t-shirts", name: "T-Shirts", icon: "apparel", price: "$20+" },
    { id: "tiles", name: "Photo Tiles", icon: "grid_view", price: "$35+" },
    {
      id: "gifts",
      name: "Gift Boxes",
      icon: "featured_seasonal",
      price: "$50+",
    },
    { id: "other", name: "Other Design", icon: "more_horiz", price: "Varies" },
  ];

  return (
    <Layout>
      <div className="flex min-h-screen flex-col bg-background-dark text-white font-display overflow-x-hidden">
        <main className="flex-grow py-12 px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            {/* Progress Header */}
            <div className="flex flex-col items-center text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-black mb-4">
                Start Your <span className="text-primary italic">Custom</span>{" "}
                Project
              </h1>
              <p className="text-gray-400">
                Complete the steps below and we'll send you a precise estimate
                within 2 hours.
              </p>

              {/* Steps Progress */}
              <div className="flex items-center gap-4 mt-10">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center gap-3">
                    <div
                      className={`size-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${step >= s ? "bg-primary text-white" : "bg-surface-dark text-gray-600 border border-white/5"}`}
                    >
                      {s}
                    </div>
                    {s < 3 && (
                      <div
                        className={`w-12 h-0.5 rounded-full ${step > s ? "bg-primary" : "bg-surface-dark"}`}
                      ></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-surface-dark/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl min-h-[500px] flex flex-col">
              {step === 1 && (
                <div className="flex flex-col animate-in fade-in duration-500">
                  <h2 className="text-2xl font-bold mb-8">
                    What would you like to build?
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {productTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setSelectedType(type.id)}
                        className={`p-6 rounded-2xl flex flex-col items-center gap-3 border transition-all duration-300 ${selectedType === type.id ? "bg-primary/20 border-primary shadow-[0_0_20px_rgba(238,43,173,0.3)]" : "bg-background-dark/50 border-white/5 hover:border-white/20"}`}
                      >
                        <span className="material-symbols-outlined text-4xl text-primary">
                          {type.icon}
                        </span>
                        <span className="font-bold text-sm">{type.name}</span>
                        <span className="text-xs text-gray-500">
                          {type.price}
                        </span>
                      </button>
                    ))}
                  </div>
                  <button
                    disabled={!selectedType}
                    onClick={() => setStep(2)}
                    className="mt-12 w-full h-16 rounded-2xl bg-white text-black font-black text-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primary hover:text-white transition-all"
                  >
                    Continue to Customization
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="flex flex-col animate-in fade-in duration-500">
                  <h2 className="text-2xl font-bold mb-8">
                    Customize Your Order
                  </h2>
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                      <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                        Upload Artwork / Photos
                      </label>
                      <div className="border-2 border-dashed border-white/10 rounded-2xl p-12 flex flex-col items-center justify-center gap-4 hover:border-primary/50 cursor-pointer transition-colors group">
                        <span className="material-symbols-outlined text-5xl text-gray-600 group-hover:text-primary">
                          cloud_upload
                        </span>
                        <p className="text-gray-400 text-sm">
                          Drag and drop files or{" "}
                          <span className="text-primary font-bold">browse</span>
                        </p>
                        <p className="text-[10px] text-gray-600">
                          Supports JPG, PNG, AI, PSD (Max 50MB)
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                        Special Instructions
                      </label>
                      <textarea
                        placeholder="Tell us more about the placement, colors, or any specific requirements..."
                        className="w-full bg-background-dark border border-white/10 rounded-2xl h-32 p-6 focus:border-primary focus:outline-none transition-colors resize-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-12">
                    <button
                      onClick={() => setStep(1)}
                      className="h-16 rounded-2xl border border-white/10 font-bold hover:bg-white/5 transition-all"
                    >
                      Go Back
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      className="h-16 rounded-2xl bg-primary font-black text-lg hover:shadow-[0_0_30px_rgba(238,43,173,0.4)] transition-all"
                    >
                      Final Step
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="flex flex-col animate-in fade-in duration-500">
                  <h2 className="text-2xl font-bold mb-8">
                    Where should we send the estimate?
                  </h2>
                  <div className="grid gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-2">
                        Quantity Needed
                      </label>
                      <input
                        type="number"
                        defaultValue="1"
                        className="w-full bg-background-dark border border-white/10 rounded-2xl h-14 px-6 focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-2">
                        Contact Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full bg-background-dark border border-white/10 rounded-2xl h-14 px-6 focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="email@address.com"
                        className="w-full bg-background-dark border border-white/10 rounded-2xl h-14 px-6 focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => alert("Quote Request Sent!")}
                    className="mt-12 h-16 rounded-2xl bg-gradient-to-r from-secondary to-tertiary font-black text-lg hover:shadow-[0_0_30px_rgba(238,43,173,0.4)] transition-all text-black"
                  >
                    Submit Quote Request
                  </button>
                  <button
                    onClick={() => setStep(2)}
                    className="mt-4 text-gray-500 font-bold hover:text-white transition-colors"
                  >
                    Wait, I missed something
                  </button>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default QuotePage;
