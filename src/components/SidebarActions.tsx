import React from 'react';

const SidebarActions = () => {
    return (
        <div className="fixed right-4 lg:right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
            <div className="group flex items-center justify-end gap-3">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-surface-dark-alt text-white text-xs py-1 px-3 rounded-lg border border-white/10 shadow-lg whitespace-nowrap hidden lg:block">Upload File</span>
                <button className="flex items-center justify-center w-12 h-12 rounded-full bg-surface-dark-alt/80 hover:bg-primary border border-white/10 backdrop-blur-md shadow-lg transition-all duration-300 group-hover:scale-110">
                    <span className="material-symbols-outlined text-white">cloud_upload</span>
                </button>
            </div>
            <div className="group flex items-center justify-end gap-3">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-surface-dark-alt text-white text-xs py-1 px-3 rounded-lg border border-white/10 shadow-lg whitespace-nowrap hidden lg:block">Get a Quote</span>
                <button className="flex items-center justify-center w-12 h-12 rounded-full bg-surface-dark-alt/80 hover:bg-primary border border-white/10 backdrop-blur-md shadow-lg transition-all duration-300 group-hover:scale-110">
                    <span className="material-symbols-outlined text-white">request_quote</span>
                </button>
            </div>
            <div className="group flex items-center justify-end gap-3">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-surface-dark-alt text-white text-xs py-1 px-3 rounded-lg border border-white/10 shadow-lg whitespace-nowrap hidden lg:block">Chat with Designer</span>
                <button className="flex items-center justify-center w-12 h-12 rounded-full bg-surface-dark-alt/80 hover:bg-primary border border-white/10 backdrop-blur-md shadow-lg transition-all duration-300 group-hover:scale-110">
                    <span className="material-symbols-outlined text-white">chat</span>
                </button>
            </div>
        </div>
    );
};

export default SidebarActions;
