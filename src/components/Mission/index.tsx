/* eslint-disable @next/next/no-img-element */
import React from 'react'
import './mission.css'
import Image from 'next/image'
import noise from '@/assets/image/noise.png'
import blank from '@/assets/svg/blank.svg'
function Mission() {
  return (
    <div className='bg-background h-[600px] lg:h-[800px]   flex flex-col items-center justify-center relative'>
      <Image priority src={noise} alt='alt-noise' className='top-0 absolute h-[300px] lg:h-[330px] lw-full lg:w-[50%] shrink-0 pt-[20px] lg:p-0' />
        <div className='absolute lg:relative w-full flex flex-col items-center z-30 px-[15px]'>
        <p className=' text-[20px] lg:text-[35px] font-[400] text-center font-merienda text-white'>NW3 mission is to empower <span className='linear-one'>individuals</span> and <span className='linear-two'>businesses</span> to thrive in <br className='hidden lg:block' /> the ever-evolving landscape of Web3 technologies. At Navigating  <br className='hidden lg:block' /> Web3, we believe that the future of <span className='linear-three'>innovation</span>, <span className='linear-four'>finance</span>, and <br className='hidden lg:block' /> <span className='linear-five'>connectivity</span> is within reach through Web3. Discover how we can <br className='hidden lg:block' /> help you navigate this exciting world.</p>
        <button className='mt-[32px] lg:mt-[48px] bg-[#272A31] border border-[#A76B09] p-[10px_30px] lg:p-[16px_40px] rounded-[8px] font-inter space-x-[10px] flex items-center  text-[#DDA74F]'>
          <Image src={blank} alt="" />
          <span>Join NW3 Community</span>
        </button>
        </div>
    </div>
  )
}

export default Mission  
// #86807F