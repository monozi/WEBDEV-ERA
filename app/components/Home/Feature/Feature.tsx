import React from 'react'
import SectionHeader from '../../Helper/SectionHeader'
import { FaAndroid, FaMoneyBill } from 'react-icons/fa'
import { BiAnalyse } from 'react-icons/bi'

const Feature = () => {
  return (
    <div className='pt-20 pb-16 bg-[#b7b7b7]'>
        {/* SECTION HEADING */}
        <SectionHeader heading="Why Choose Us"/>
        <h1 className='text-center text-[15px] mt-1 md:text-[17px] text-black text-opacity-70'>
            The most racist gang in the world!
        </h1>
        {/* GRID SYSTEM */}
        <div className='w-4/5 mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-12 items-center'>
        {/* FIRST FEATURE CARD */}
        <div>
            <div className='p-6 cursor-pointer hover:scale-110 transition-all duration-300 bg-orange-400 rounded-md shadow-md'>
                <FaMoneyBill className='mx-auto mt-8 w-16 h-16 text-white'/>
                <h1 className='text-base text-center mt-8 mb-4 md:text-xl text-white font-semibold'>MAPERA</h1> 
                <p className='text-center text-white text-opacity-70'>
                    GANITO TALAGA SA BUHAY MINSAN GUSTO MO NALANG MAGKAPERA NANG MAGKAPERA NIGGA
                </p>
            </div>
        </div>
        {/* SECOND FEATURE CARD */}
        <div>
            <div className='p-6 cursor-pointer hover:scale-110 transition-all duration-300 bg-orange-400 rounded-md shadow-md'>
                <FaMoneyBill className='mx-auto mt-8 w-16 h-16 text-white'/>
                <h1 className='text-base text-center mt-8 mb-4 md:text-xl text-white font-semibold'>MAPERA</h1> 
                <p className='text-center text-white text-opacity-70'>
                    GANITO TALAGA SA BUHAY MINSAN GUSTO MO NALANG MAGKAPERA NANG MAGKAPERA NIGGA
                </p>
            </div>
        </div>
        {/* THIRD FEATURE CARD */}
        <div>
            <div className='p-6 cursor-pointer hover:scale-110 transition-all duration-300 bg-orange-400 rounded-md shadow-md'>
                <FaMoneyBill className='mx-auto mt-8 w-16 h-16 text-white'/>
                <h1 className='text-base text-center mt-8 mb-4 md:text-xl text-white font-semibold'>MAPERA</h1> 
                <p className='text-center text-white text-opacity-70'>
                    GANITO TALAGA SA BUHAY MINSAN GUSTO MO NALANG MAGKAPERA NANG MAGKAPERA NIGGA
                </p>
            </div>
        </div>
        {/* FOURTH FEATURE CARD */}
        <div>
            <div className='p-6 cursor-pointer hover:scale-110 transition-all duration-300 bg-orange-400 rounded-md shadow-md'>
                <BiAnalyse className='mx-auto mt-8 w-16 h-16 text-white'/>
                <h1 className='text-base text-center mt-8 mb-4 md:text-xl text-white font-semibold'>MAPERA</h1> 
                <p className='text-center text-white text-opacity-70'>
                    GANITO TALAGA SA BUHAY MINSAN GUSTO MO NALANG MAGKAPERA NANG MAGKAPERA NIGGA
                </p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Feature