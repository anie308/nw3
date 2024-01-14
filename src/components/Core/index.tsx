import Image from 'next/image'
import React from 'react'
import Bitvalue from "@/assets/image/bitvalue.png";
import Raca from "@/assets/image/raca.png";


function Core() {
  return (
    <div className="bg-[#0B0B0D] w-full flex items-center justify-center mt-[58%] lg:mt-0">
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
  )
}

export default Core