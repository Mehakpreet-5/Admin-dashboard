import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='absolute w-full flex m-1 p-3 items-center justify-between z-10'>
            <div className='ml-28 text-white font-bold text-4xl fontt'>Travel</div>
            <div className='flex justify-center'>
                <ul className='flex justify-center space-x-6 mr-28 cursor-pointer text-white font-bold text-lg'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li className='btn'><Link to="/login">Login</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
