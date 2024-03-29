
"use client";
import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import logo from "@/assets/image/logo.png";
import menu from "@/assets/svg/menu.svg";
import Image from "next/image";
import Link from "next/link";
import './head.css'
import { usePathname } from 'next/navigation';
function NavHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="sticky  flex items-center bg-[#0B0B0D] justify-between text-white  p-[20px] lg:p-[20px_40px] top-0 z-30">
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
            <Link href={link} key={id} className={`${pathname === link ? "text-[#DDA74F]" : "text-white"} font-inter hover:text-[#DDA74F]`}>
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
          open ? "left-0" : "left-[-100%] lg:left-0"
        } fixed top-0 bg-background h-screen text-white p-[20px] lg:hidden w-[100%] transition-all  flex flex-col z-40`}
      >
        <div className="flex items-center justify-end"><GoPlus className="text-[35px] rotate-45" onClick={()=> setOpen(!open)} /></div>
        <div className="space-y-[20px] flex flex-col">
        {links.map(({ id, link, name }) => (
            <Link href={link} key={id} className={`${pathname === link ? "text-[#DDA74F]" : "text-white"} font-inter hover:text-[#DDA74F]`}>
            {name}
            </Link>
          ))}
        </div>
       
        
      </div>
    </>
    
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
