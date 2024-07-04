import React from 'react'

type Props = {
    heading:string
}

const SectionHeader = ({heading}:Props) => {
  return (
    <div className="text-center p-3">
        <h1 className='text-[22px] md:text-[30px] text-black font-semibold'>{heading}</h1>
    </div>
  )
}

export default SectionHeader