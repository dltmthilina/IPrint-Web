import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

interface LayoutProps {
    children: React.ReactNode;
    showFooter?: boolean;
    customHeader?: React.ReactNode;
    customFooter?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ 
    children, 
    showFooter = true, 
}) => {
    return (
        <>
            {children}
            <div className="fixed top-0 left-0 z-50 w-full">
                { <Header />}
            </div>
            {showFooter &&  <Footer />}
        </>
    );
};

export default Layout;
