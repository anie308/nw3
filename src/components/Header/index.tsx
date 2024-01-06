
"use client";

import React, { useState } from "react";
import logo from "@/assets/image/logo.png";
import menu from "@/assets/svg/menu.svg";
import Image from "next/image";
import Link from "next/link";
import './head.css'
function NavHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className=" flex items-center bg-[#0B0B0D] justify-between text-white  p-[20px] lg:p-[20px_40px]">
        <div>
          <Link href="/" >
          <Image
            src={logo}
            priority
            alt="logo-img"
            className="h-[40px] lg:h-[64px] w-[80px] lg:w-[130px] mix"
          />
          </Link>
        </div>
        <div className="hidden lg:flex items-center space-x-[48px] ml-[-5%]">
          {links.map(({ id, link, name }) => (
            <Link href={link} key={id} className="font-interpk">
              {name}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-[16px] lg:space-x-0">
          <button className="p-[5px_16px] lg:p-[8px_32px] bg-white flex items-center font-notosans text-[16px] font-[600] text-[#0B0B0D] rounded-[8px]">
            Join Discord
          </button>
          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            <Image src={menu} alt="menu-button" />
          </button>
        </div>
      </div>
      <div
        className={`${
          open ? "left-0" : "left-[-100%]"
        } absolute top-0 bg-background h-screen text-white p-[20px] lg:hidden w-full transition-all z-30`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        voluptatibus laboriosam nam nisi vel. Unde iure id amet reiciendis,
        perspiciatis eligendi tenetur fugit eveniet sequi sunt rerum earum animi
        debitis.
      </div>
    </>
    // <div className="font-notosans  h-[600px] lg:h-screen w-full relative">
    //   <div className="absolute z-20 min-h-full top-0 w-full">
    //     <div className=" flex items-center justify-between text-white p-[20px]">
    //       <div>
    //         <Image
    //           src={logo}
    //           priority
    //           alt="logo-img"
    //           className="h-[40px] lg:h-[64px] w-[80px] lg:w-[130px]"
    //         />
    //       </div>
    //       <div className="hidden lg:flex items-center space-x-[48px] ml-[-5%]">
    //         {links.map(({ id, link, name }) => (
    //           <Link href={link} key={id} className="font-interpk">
    //             {name}
    //           </Link>
    //         ))}
    //       </div>
    //       <div className="flex items-center space-x-[16px] lg:space-x-0">
    //         <button className="p-[5px_16px] lg:p-[8px_32px] bg-white flex items-center font-notosans text-[16px] font-[600] text-[#0B0B0D] rounded-[8px]">
    //           Join Discord
    //         </button>
    //         <button className="lg:hidden" onClick={() => setOpen(!open)}>
    //           <Image src={menu} alt="menu-button" />
    //         </button>
    //       </div>
    //     </div>
    //     <div
    //       className={`${
    //         open ? "left-0" : "left-[-100%]"
    //       } absolute top-0 bg-background h-screen text-white p-[20px] lg:hidden w-full transition-all z-30`}
    //     >
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
    //       voluptatibus laboriosam nam nisi vel. Unde iure id amet reiciendis,
    //       perspiciatis eligendi tenetur fugit eveniet sequi sunt rerum earum
    //       animi debitis.
    //     </div>
    //     <div className="text-white font-notosans  h-[500px] w-full flex flex-col items-center justify-center px-[20px]">
    //       <p className="font-inter text-[#A76B09] text-[20px] lg:text-[40px] font-[600] leading-[24px]">
    //         Welcome to
    //       </p>
    //       <p className="lg:mt-[5px] text-center font-[700] text-[50px] lg:text-[168px] leading-[34px] lg:leading-[112px] font-notosans">
    //         Navigating <br className="hidden lg:block" /> Web3
    //       </p>
    //       <p className="font-inter text-[16px] text-center lg:text-[24px] leading-[24px] lg:leading-[40px] mt-[16px] lg:mt-[40px]">
    //         Your Gateway to the Future of Innovation
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
}

export default NavHeader;

const links = [
  {
    id: 1,
    name: "About Us",
    link: "/about-us",
  },
  {
    id: 2,
    name: "Community",
    link: "/community",
  },
  {
    id: 3,
    name: "Products",
    link: "/products",
  },
  {
    id: 4,
    name: "Contact",
    link: "/contact",
  },
];
