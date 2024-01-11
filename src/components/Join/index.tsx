import React from "react";
import logo from "@/assets/image/logo.png";
import people from "@/assets/image/people.png";
import jpeople from "@/assets/image/joinpeeps.png";
import jmpeople from "@/assets/image/joinm.png";
import Image from "next/image";
import { FaDiscord } from "react-icons/fa6";
import "./join.css";
function Join() {
  return (
    <div className="bg-spiral  relative h-[1200px] bg-black lg:h-[900px] flex items-center overflow-hidden">
      <div className="absolute top-[200px] left-[50%]">
        <div className="box1"></div>
        <div className="box2  mt-[30px]"></div>
      </div>
      <div className="absolute h-full w-full  p-[50px_20px] lg:py-[150px] lg:pl-[50px]  flex items-center flex-col-reverse lg:flex-row">
        <div className="mt-[50px] lg:mt-0 lg:flex-1 flex-col flex justify-center ">
          <Image
            src={logo}
            alt="logo"
            className="h-[60px] w-[130px] hidden lg:flex"
          />
          <p className="text-white leading-[60px] lg:leading-[100px] lg:mt-[50px] text-[60px] lg:text-[100px] font-[600] font-inter">
            Join the web3 <br className="hidden lg:block" />
            <span className="text-[#DDA74F] italic">Revolution</span>
          </p>
          <p className="text-white mt-[32px] font-inter font-[400] text-[16px] lg:text-[24px]">
            Ready to embrace the future of Web3? Join us at Navigating Web3,
            where we&apos;re dedicated to your success. Get in touch with us
            today and embark on your journey towards innovation, financial
            growth, and a connected world like you&apos;ve never seen before.
          </p>
          <div className="mt-[32px] flex items-center space-x-[5px]">
            <Image src={people} alt="people" className="h-[32px] w-[100px]" />
            <p className="text-white font-inter text-[10px] lg:text-[16px] font-[600]">
              Join over 30k+ people who are ahead in the creative world
            </p>
          </div>
          <button className="border bordr-[#A76B09] rounded-[6px] bg-[#272A31] text-white font-inter p-[10px_30px] font-[600] text-[16px] mt-[32px] w-fit flex items-center space-x-[10px]">
            <FaDiscord className="text-[20px]" />
            <span>Join our Discord</span>
          </button>
        </div>
        <div className="lg:flex-1  text-white">
          <Image src={jpeople} alt="join-peps"  className="hidden lg:flex"/>
          <Image src={jmpeople} alt="join-peps" className="flex lg:hidden"/>
        </div>
      </div>
    </div>
  );
}

export default Join;
