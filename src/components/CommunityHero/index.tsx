import React from "react";
import NavHeader from "../Header";
import "./comm.css";
import Image from "next/image";
import commhead from "../../assets/image/comm.png";
import commobile from "../../assets/image/commobile.png";
function CommunityHero() {
  return (
    <div className="font-notosans background overflow-hidden h-[1200px] lg:h-[900px] w-full relative">
      <NavHeader />
      <div className="absolute top-[100px]">
        <div className="box1"></div>
        <div className="box2  mt-[30px]"></div>
      </div>
      <div className="absolute top-[10%] right-0">
        <div className="box1"></div>
        <div className="box2  mt-[30px]"></div>
      </div>
      <div className="absolute top-[20%] left-[40%]">
        <div className="box1"></div>
        <div className="box2  mt-[30px]"></div>
      </div>
      <div className="absolute blur-[60px] bottom-0 left-[40%]">
        <div className="box1"></div>
        <div className="box2  mt-[30px]"></div>
      </div>
      <div className="text-white">
        <Image
          src={commhead}
          priority
          alt="community-image"
          className="mix-blend-luminosity hidden lg:flex"
        />
        <div className=" flex flex-col items-center justify-center p-[40px_20px]">
          <p className="font-notosan text-[30px] text-center z-20 lg:text-[48px] font-[700]">Join our Vibrant and Diverse Community</p>
          <p className="z-20 text-[16px] font-inter text-center">No matter your background or interests, Navigating Web3&apos;s community welcomes you with open <br className="hidden lg:block" /> arms. Together, we&apos;ll explore the limitless possibilities of the Web3 era and shape the future of <br className="hidden lg:block" /> innovation, finance, and connectivity. Join us today and be a part of something extraordinary.</p>
          <button className="z-20  rounded-[6px] mt-[32px] bg-[#A76B09] text-white font-inter p-[10px_30px]">Apply Now</button>
         
        </div>
        <Image
          src={commobile}
          priority
          alt="community-image"
          className="mix-blend-luminosity lg:hidden"
        />
      </div>
    </div>
  );
}

export default CommunityHero;
