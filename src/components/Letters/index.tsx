import React from "react";
import { BsBriefcase } from "react-icons/bs";
import card1 from '@/assets/image/card1.png'
import card2 from '@/assets/image/card2.png'
import card3 from '@/assets/image/card3.png'
import squares from '@/assets/image/square.png'
import Image from "next/image";
import "./letter.css"
function Letter() {
  return (
    <div className="bg-[#0B0B0D] p-[100px_20px] lg:p-[200px_50px]  flex flex-col lg:flex-row items-center relative overflow-hidden">
      <Image src={squares} alt="squares" className="absolute w-[600px] lg:w-[900px] h-[500px] lg:h-[850px] top-[-30%] lg:top-0 lg:right-[-20%] "  />
      <div className="lg:flex-1">
        <p className="text-[20px] lg:text-[24px] font-inter font-[400] uppercase text-white">
          SUBSCRIBE TO OUR LETTERS
        </p>
        <p className="w-full  mt-[10px] lg:mt-[20px] text-[16px] lg:text-[24px] font-[400] font-inter text-white">
          Don&apos;t miss out on the future of innovation, finance, and
          connectivity. Subscribe now and be a part of the Web3 revolution! Your
          journey begins with a single click.
        </p>
        <div className="mt-[24px] lg:mt-[48px] w-full lg:w-[70%] rounded-[16px] flex p-[6px] bg-white space-x-[5px] items-center">
          <BsBriefcase className="text-[25px] text-gray-500 pl-[5px] hidden lg:flex" />
          <input
            placeholder="Enter your email address"
            type="email"
            name=""
            id=""
            className="text-[14px] lg:grow w-full font-inter pl-[10px] outline-none"
          />
          <button className="p-[8px_20px] lg:p-[10px_30px] rounded-[8px] text-wwhite font-inter bg-[#DDA74F] text-white font-[500]">
            Subscribe
          </button>
        </div>
      I</div>
      <div className="hidden lg:flex lg:flex-1 relative    h-[300px]">
        <Image src={card2} alt="card-1" className="h-[60px] w-[360px] absolute top-0 right-[20%]"/>
        <Image src={card1} alt="card-2" className="h-[60px] w-[360px] absolute top-[40%] left-0"/>
        <Image src={card3} alt="card-3" className="h-[60px] w-[360px] absolute bottom-0 right-[20%]"/>
      </div>
    </div>
  );
}

export default Letter;
