import React from 'react'
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';

// props type
type Props = {
    openNav: () => void
}

const Nav = ({openNav}: Props) => {
return (
    <div className="h-[12vh] bg-[#000] shadow-md">
        <div className="w-[85%] flex items-center justify-between mx-auto h-[12vh]">
            {/* LOGO */}
            <h1 className="text-[16px] md:text-[25px] font-bold text-white">
                <span className="text-[27px] md:text-[40px] text-yellow-300">GAGI</span>
                WAG
            </h1>
            {/* NAV LINKS */}
            <ul className="hidden lg:flex items-center space-x-10">
                <li className="text-[17px] font-semibold cursor-pointer text-yellow-300">
                    <Link href="/">Home</Link>
                </li>
                <li className="text-[17px] font-semibold cursor-pointer transition-all duration-200 text-white hover:text-yellow-400">
                    <Link href="/">Sample</Link>
                </li>
                <li className="text-[17px] font-semibold cursor-pointer transition-all duration-200 text-white hover:text-yellow-400">
                    <Link href="/">Sample</Link>
                </li>
                <li className="text-[17px] font-semibold cursor-pointer transition-all duration-200 text-white hover:text-yellow-400">
                    <Link href="/">Sample</Link>
                </li>
                <li className="text-[17px] font-semibold cursor-pointer transition-all duration-200 text-white hover:text-yellow-400">
                    <Link href="/">Sample</Link>
                </li>
                <li className="text-[17px] font-semibold cursor-pointer transition-all duration-200 text-white hover:text-yellow-400">
                    <Link href="/">Sample</Link>
                </li>
            </ul>
            {/* Login Button & Navigation Bar Menu*/}
            <div className="flex items-center space-x-4">
                {/* LOGIN BUTTON */}
                <button className="rounded px-10 py-2.5 overflow-hidden group bg-yellow-500 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-400 relative
                text-black hover:ring-2 hover:ring-offset-2 hover:ring-yellow-400 transition-all ease-out duration-300">
                    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 
                    bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                    <span className="relative">Login</span>
                </button>
                {/* MENU BORGER */}
                <FaBars onClick = {openNav} className="w-8 h-8 text-white cursor-pointer lg:hidden"/>
            </div>
        </div>
    </div>
)
}

export default Nav;