import React from "react";
import NavHeader from "../Header";
import "./about.css";
import cursor from "@/assets/svg/cursor.svg";
import Image from "next/image";
import Link from "next/link";
function AboutHero() {
  return (
    <div className="font-notosans background h-[600px] lg:h-screen w-full relative overflow-hidden">
      <div className="absolute bottom-[100px]">
        <div className="box1"></div>
        <div className="box2  mt-[30px]"></div>
      </div>
      <div className="absolute top-[10%] right-0">
        <div className="box1"></div>
        <div className="box2  mt-[30px]"></div>
      </div>
      <div className="absolute z-20 min-h-full top-0 w-full">
        <NavHeader />
        <div className="   h-[500px] w-full flex flex-col items-center justify-center px-[20px]">
          <p className="font-notosans text-white text-center text-[30px] lg:text-[64px] font-[700] ">
            Empowering You for the Web3 Era
          </p>

          <p className="font-inter text-[16px]  lg:text-[24px] mt-[5px] lg:mt-0 leading-[24px] lg:leading-[40px]  text-center text-white ">
            At Navigating Web3, our commitment is to equip you for success in
            the fast-paced world of <br className="hidden lg:block" /> Web3. We
            are passionate about driving innovation, and we&apos;re convinced
            that the future of <br className="hidden lg:block" /> business,
            finance, and technology lies in the realm of Web3.
          </p>

          <Link href="/contact" className="p-[15px_35px] font-inter bg-[#A76B09] text-white rounded-[6px] mt-[32px] flex items-center space-x-[10px]">
            <span>Get in Touch</span>
            <Image src={cursor} alt="cursor" className="h-[24px] w-[24px]" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
