import React from "react";
import logo from "@/assets/image/logo.png";
import Image from "next/image";
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
            <p>Get Connected</p>
        </div>
        <div className="h-[120px] w-[120px] border">loll</div>
      </div>
    </div>
  );
}

export default Footer;
