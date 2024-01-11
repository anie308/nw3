import React from "react";
import logo from "@/assets/image/logo.png";
import qr from "@/assets/image/qr.png";
import Image from "next/image";
import { FaDiscord } from "react-icons/fa6";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <div className="flex items-center justify-between w-full bg-[#000000] p-[20px] lg:p-[20px_50px]">
      <Image
        src={logo}
        priority
        alt="logo-img"
        className="h-[40px] lg:h-[64px] w-[80px] lg:w-[130px] "
      />
      <div className="text-white flex items-start space-x-[16px]">
        <div>
          <p className="font-inter text-[16px] lg:text-[32px] font-[400] ">Get Connected</p>
          <div className="flex items-center space-x-[12px] mt-[12px]">
            <div className=" h-[30px] lg:h-[40px] w-[30px] lg:w-[40px] bg-[#111315] rounded-full flex  items-center justify-center">
              <FaDiscord className="text-white text-[15px] lg:text-[20px]" />
            </div>
            <div className="  h-[30px] lg:h-[40px] w-[30px] lg:w-[40px] bg-[#111315] rounded-full flex items-center justify-center">
              <FaTelegramPlane className="text-white text-[15px] lg:text-[20px]" />
            </div>
            <div className="  h-[30px] lg:h-[40px] w-[30px] lg:w-[40px] bg-[#111315] rounded-full flex items-center justify-center">
              <FaTwitter  className="text-white text-[15px] lg:text-[20px]" />
            </div>
          </div>
        </div>
        <div className="h-[48px] lg:h-[120px] w-[48px] lg:w-[120px] border">
          <Image src={qr} alt="qr-code" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
