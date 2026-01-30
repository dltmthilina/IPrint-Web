import React from 'react';
import Footer from '../Footer';

interface LayoutProps {
    children: React.ReactNode;
    showFooter?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ 
    children, 
    showFooter = true, 
}) => {
    return (
        <>
            {children}
            {showFooter && <Footer />}
        </>
    );
};

export default Layout;
