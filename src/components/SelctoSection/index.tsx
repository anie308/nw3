import React from 'react'
import "./selcto.css";
import selcto from '@/assets/image/selcto.png'
import selctoM from '@/assets/image/selctomobile.png'
import Image from 'next/image';

function Selcto() {
  return (
    <div className='bg-selcto  flex flex-col items-center justify-start pt-[50px] lg:pt-[150px]'>
        <div className='p-[20px] flex flex-col items-center justify-center'>
        <p className='font-[600] text-[30px] lg:text-[40px] font-inter text-white'>SELCTO</p>
        <p className='text-[#FFFFFFB2] text-center text-[16px] lg:text-[20px] mt-[24px] font-inter'>With Selcto, craft one-of-a-kind raffles perfectly suited to your preferences on Telegram or Discord. From <br className='hidden lg:block' /> community drops to NFT whitelists, product giveaways, charity events, or engaging contests; our intuitive <br className='hidden lg:block' />  interface simplifies the process of customizing raffles to effortlessly match your needs.</p>
        </div>
        <Image src={selcto} alt='selcto-img' className='mt-[80px] w-[80%] hidden lg:block'/>
        <Image src={selctoM} alt='selcto-img' className='mt-[40px]  lg:hidden '/>
    </div>
  )
}

export default Selcto