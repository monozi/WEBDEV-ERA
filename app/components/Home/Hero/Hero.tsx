import React from 'react'
import HeroImage from '@/public/images/tft.jpg'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="lg:h-[88vh] bg-[#000] md:h-[80vh] sm:h-[75vh] h-[70vh] flex items-center justify-center flex-col">
        
        {/* DEFINING GRID SYSTEM */}
        <div className="grid grid-cols-1 lg:grid-cols-5 items-center w-4/5 mx-auto ">
        
        {/* CONTENT */}
        <div className="col-span-2">
            <h1 className="text-[27px] md:text-[35px] lg:text-[40px] mb-4 font-bold text-white leading-[2.4rem] md:leading-[4rem]">
                Buhay ay 'di <span className="text-red-500">karera</span>
            </h1>
            <p className="md:text-[17px] text-[15px] mb-8 text-white opacity-80 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Exercitationem repellendus illo ex, dicta sit aut quibusdam 
                sint molestias doloribus velit?
            </p>
            {/* INPUT BOX */}
            <div className="w-full h-14 relative rounded-full bg-gray-500">
              <input type="text" placeholder="Enter your email" className="bg-transparent h-full ml-8 text-white outline-none w-[90%]"/>
            </div>
            {/* SUBMIT BUTTON */}
            <button className="px-4 py-2 w-[40%] bg-gray-400 hover:bg-white transition-all duration-1 rounded-full mt-4 text-black">Submit</button>
        </div>

        {/* IMAGE */}
        <div className="col-span-3 hidden sm:block mx-12">
          <Image src={HeroImage} alt="Hero" />
        </div>
        </div>
    </div>
  )
}

export default Hero