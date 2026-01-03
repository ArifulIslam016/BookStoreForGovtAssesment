import React from 'react';
import { Outlet } from 'react-router';
import Nabar from '../Components/Navbar/Nabar';
import Footer from '../Components/Footer';

const RootLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Nabar></Nabar>
            <main className='grow'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;