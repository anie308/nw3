import Image from "next/image";
import React from "react";
import substack from "@/assets/image/substack.png";
import blank from "@/assets/svg/blank.svg";
import logo from "@/assets/image/logo.png";

function Subscribe() {
  return (
    <div className="pt-[80px] p-[20px] lg:p-[100px_50px] text-white bg-black">
      <p className="uppercase font-inter">
        Funding Support for Founders and Builders
      </p>
      <div className="h-[5px] mt-[5px] w-full bg-white">
        <div className="h-[5px] w-[10%] bg-[#DDA74F]"></div>
      </div>
      <div className="flex flex-col-reverse  lg:flex-row items-center mt-[50px] gap-[50px] lg:gap-[100px]">
        <div className="flex-1 flex-col space-y-[20px] items-start">
          <p className="font-[400] text-[16px] lg:text-[24px] font-inter">
            At Navigating Web3, we&apos;re committed to fostering innovation and
            empowering the visionaries of the Web3 world. If you&apos;re a
            founder or a builder with a groundbreaking project or idea,
            we&apos;re here to provide the financial support you need to turn
            your dreams into reality.
          </p>
          <p className="mt-[10px] font-[600] text-[14px] lg:text-[24px] font-inter italic ">
            Join the ranks of successful Web3 projects.{" "}
          </p>

          <button className=" bg-[#272A31] border border-[#A76B09] p-[10px_30px] lg:p-[16px_40px] rounded-[8px] font-inter space-x-[10px] flex items-center  text-[#DDA74F]">
            <Image src={blank} alt="" />
            <span>Apply Now</span>
          </button>
        </div>
        <div className="flex-1 w-full">
          <div className="rounded-[8px] h-[500px]  lg:h-[480px] flex items-center justify-center bg-[#DDA74F14] relative">
            <Image
              src={substack}
              className="h-[90%]   w-[92%] rounded-[8px] "
              alt="sub-img"
            />
            <div className="absolute h-full w-full flex items-center justify-center">
            <Image
              src={logo}
              className="h-[88px] w-[178px] lg:w-[276px] lg:h-[136px]"
              alt="logo-img"
            /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
