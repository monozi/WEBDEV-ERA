'use client';
import React, { useState, useMemo } from 'react';
import { FaBrain } from 'react-icons/fa';
import { TbLayoutSidebarL } from 'react-icons/tb';
import classNames from 'classnames';
import Link from 'next/link';

const Sidebar = () => {

    const wrapperClasses = classNames(
        "h-screen px-4 pt-8 pb-4 bg-sidebar flex justify-between flex-col w-80",
    );

    return (
        <div className={wrapperClasses}>
            <div className='flex flex-col'>
                <div className='flex items-center relative'>
                    <FaBrain className='mx-[25px] mt-1.5 w-8 h-8 text-[#fff]'/>
                    <span className='mt-1.5 text-3xl text-center font-bold text-[#fff]'>
                        Brainiacs
                    </span>
                </div>
                <div className='flex flex-col items-start mx-[70px] mt-20 text-xl font-medium text-[#fff]'>
                <Link href="/assignment">Assignments</Link>
                <Link href="/lecture">Lectures</Link>
                <Link href="/logout">Logout</Link>
                </div>
            </div>
        </div>
    )
}
export default Sidebar;
