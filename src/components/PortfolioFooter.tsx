import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/iprintlogo.jpeg';

const PortfolioFooter = () => {
    return (
        <footer className="bg-surface-dark border-t border-[#392833] py-12 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <Link to="/" className="flex items-center gap-3 group">
                    <img src={logo} alt="iprint" className="h-8 w-auto rounded shadow-sm" />
                    <h2 className="text-white text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
                        iprint
                    </h2>
                </Link>
                <p className="text-slate-400 text-sm">© 2023 iprint Inc. All rights reserved.</p>
                <div className="flex gap-4">
                    <a className="min-w-[44px] min-h-[44px] w-11 h-11 rounded-full bg-[#181116] flex items-center justify-center text-slate-400 hover:text-primary hover:bg-[#392833] transition-all active:scale-95" href="#">
                        <span className="sr-only">Facebook</span>
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
                    </a>
                    <a className="min-w-[44px] min-h-[44px] w-11 h-11 rounded-full bg-[#181116] flex items-center justify-center text-slate-400 hover:text-primary hover:bg-[#392833] transition-all active:scale-95" href="#">
                        <span className="sr-only">Instagram</span>
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.48 2h-.165zm-1.44 1.833a9.835 9.835 0 01-.106 0c-2.666 0-2.986.01-4.042.057-1.008.046-1.558.23-1.923.372-.475.184-.814.404-1.17.759-.355.356-.575.694-.759 1.17-.142.365-.326.915-.372 1.923-.047 1.056-.057 1.376-.057 4.042 0 2.666.01 2.986.057 4.042.046 1.008.23 1.558.372 1.923.184.475.404.814.759 1.17.356.355.694.575 1.17.759.365.142.915.326 1.923.372 1.056.047 1.376.057 4.042.057 2.666 0 2.986-.01 4.042-.057 1.008-.046 1.558-.23 1.923-.372.475-.184.814-.404 1.17-.759.355-.356.575-.694.759-1.17.142-.365.326-.915.372-1.923.047-1.056.057-1.376.057-4.042 0-2.666-.01-2.986-.057-4.042-.046-1.008-.23-1.558-.372-1.923-.184-.475-.404-.814-.759-1.17-.356-.355-.694-.575-1.17-.759-.365-.142-.915-.326-1.923-.372-1.053-.048-1.373-.058-3.999-.058v.006zM12 6.903a5.097 5.097 0 110 10.194 5.097 5.097 0 010-10.194zm0 1.833a3.264 3.264 0 100 6.528 3.264 3.264 0 000-6.528zM17.437 5.4a1.22 1.22 0 110 2.44 1.22 1.22 0 010-2.44z" clipRule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default PortfolioFooter;
