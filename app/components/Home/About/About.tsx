import React from 'react'
import SectionHeader from '../../Helper/SectionHeader'
import { BsCheck2Square } from 'react-icons/bs'
import { BiAnchor, BiMobile } from 'react-icons/bi'
import AboutImage from '@/public/images/league of villains.jpg'
import Image from 'next/image'

const About = () => {
  return (
    <div className="pt-20 pb-16 bg-[#8c8c8c]">
        {/* SECTION HEADING */}
        <SectionHeader heading="About Us" />
        <h1 className='text-center text-[15px] mt-1 md:text-[17px] text-black text-opacity-70'>
            We use the latest technologies and tools in order to create a better code
        </h1>

         {/* GRID SYSTEM */}
        <div className='w-4/5 mt-14 items-center md:mt-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12'>

            {/* CONTENT */}
            <div>
                <h1 className='text-[19px] md:text-[25px] font-semibold text-black'>
                    A faster way just to do about anything
                </h1>
                <p className='text-black text-opacity-60 mt-4'>
                    We are here not just to compete, but to get experience and enjoy the event as GW
                </p>
                {/* ICONS ITEMS LIST 1*/}
                <div className='flex mt-8 items-center space-x-4'>
                    {/* ICON BOX */}
                    <div className='w-12 h-12 rounded-full bg-pink-900 flex items-center flex-col justify-center'>
                        <BsCheck2Square className='w-[1.3rem] h-[1.3rem] text-white'/>
                    </div>
                    {/* ICON CONTENT */}
                    <div>
                        <h1 className='text-[16px] md:text-[22px] text-black font-semibold'>BALIW & BUGOK</h1>
                        <p className='mt-1 text-[15px] text-black text-opacity-70'> Random thoughts rolling on our minds</p>
                    </div>
                </div>
                {/* ICONS ITEMS LIST 2*/}
                <div className='flex mt-8 items-center space-x-4'>
                    {/* ICON BOX */}
                    <div className='w-12 h-12 rounded-full bg-yellow-700 flex items-center flex-col justify-center'>
                        <BiAnchor className='w-[1.3rem] h-[1.3rem] text-white'/>
                    </div>
                    {/* ICON CONTENT */}
                    <div>
                        <h1 className='text-[16px] md:text-[22px] text-black font-semibold'>ANCHORED</h1>
                        <p className='mt-1 text-[15px] text-black text-opacity-70'> These feelings are so heavy, like an anchor.</p>
                    </div>
                </div>
                {/* ICONS ITEMS LIST 3*/}
                <div className='flex mt-8 items-center space-x-4'>
                    {/* ICON BOX */}
                    <div className='w-12 h-12 rounded-full bg-blue-900 flex items-center flex-col justify-center'>
                        <BiMobile className='w-[1.3rem] h-[1.3rem] text-white'/>
                    </div>
                    {/* ICON CONTENT */}
                    <div>
                        <h1 className='text-[16px] md:text-[22px] text-black font-semibold'>DHAN MICHEAL #NaChoose</h1>
                        <p className='mt-1 text-[15px] text-black text-opacity-70'>I am now a samsung ambassador motherfuckers!</p>
                    </div>
                </div>
            </div>
        </div>
        {/* IMAGE
        <div className="col-span-3 flex sm:block mx-12">
                <Image src={AboutImage} alt="about" />
        </div> */}
    </div>
  )
}

export default About