import React, { useState } from "react";
import "./header.css";
import Image from "next/image";
import Raca from "@/assets/image/raca.png";
import Bghead from "@/assets/image/head.png";
import mhead from "@/assets/image/mobilehead.png";
import Bitvalue from "@/assets/image/bitvalue.png";
import NavHeader from "../Header";

function Header() {
  return (
    <div>
      <div className="relative h-[600px] lg:h-[800px] bg-black">
        <Image
          priority
          src={Bghead}
          alt="bg-head"
          className="absolute hidden lg:block min-h-full w-full top-0  object-cover"
        />
        <Image
          priority
          src={mhead}
          alt="bg-head"
          className="absolute lg:hidden h-full w-full top-0  object-cover"
        />
        <div className="absolute h-full w-full z-20">
          <NavHeader />
          <div className="font-notosans  w-full relative">
            <div className="absolute z-20 min-h-full top-0 w-full">
              <div className="text-white font-notosans  h-[500px] w-full flex flex-col items-center justify-center px-[20px]">
                <p className="font-inter text-[#A76B09] text-[20px] lg:text-[40px] font-[600] leading-[24px]">
                  Welcome to
                </p>
                <p className="lg:mt-[5px] text-center font-[700] text-[50px] lg:text-[168px] leading-[34px] lg:leading-[112px] font-notosans">
                  Navigating <br className="hidden lg:block" /> Web3
                </p>
                <p className="font-inter text-[16px] text-center lg:text-[24px] leading-[24px] lg:leading-[40px] mt-[16px] lg:mt-[40px]">
                  Your Gateway to the Future of Innovation
                </p>
              </div>
              <div className="bg-[#0B0B0D] w-full flex items-center justify-center  lg:mt-0"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center z-20">
        <div className="w-full lg:w-[80%] text-white p-[10px_20px] lg:p-[20px_40px] border border-t-0 border-[#DDA74F80] rounded-b-[80px] flex flex-col lg:flex-row items-center justify-between">
          <div className="flex items-center space-x-[20px]">
            <Image
              src={Bitvalue}
              alt="bitvalue-logo"
              className="h-[40px] lg:h-[55px] w-[150px] lg:w-[240px]"
            />
            <Image
              src={Raca}
              alt="bitvalue-logo"
              className="h-[40px] lg:h-[48px] w-[85px] lg:w-[103px]"
            />
          </div>
          <p className="font-inter text-[14px] text-center mt-[10px] lg:mt-0 lg:text-[16px] font-[400]">
            BitValue Capital, and RACA Foundation Union Launches $5M Fund to
            Accelerate <br className="hidden lg:block" /> Africa’s Web3
            Landscape, Partners with Navigating Web3 as Africa support partner.
          </p>
        </div>
      </div>

      {/* 
      
       */}
    </div>
  );
}

export default Header;
