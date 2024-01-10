import React from "react";
import NavHeader from "../Header";
import "./product.css";
import radi from "@/assets/image/raidifi.png";
import Image from "next/image";


function ProductHero() {
  return (
    <div className="font-notosans bg-product h-[900px] lg:h-screen w-full relative overflow-hidden">
      <div className="absolute top-[100px]">
        <div className="box1"></div>
        <div className="box2  mt-[30px]"></div>
      </div>
      <div className="absolute bottom-0 left-[40%]">
        <div className="box1"></div>
        <div className="box2  mt-[30px]"></div>
      </div>
      <div className="absolute top-[10%] right-0">
        <div className="box1"></div>
        <div className="box2  mt-[30px]"></div>
      </div>
      <div className="absolute z-20 min-h-full top-0 w-full">
        <NavHeader />
        <div className="grid lg:grid-cols-2 gap-[80px] lg:gap-[100px]  p-[100px_20px] lg:p-[80px_50px]">
          <div className="h-full flex flex-col items-start justify-center">
            <p className="text-[30px] lg:text-[40px] font-notosans font-[700] text-white">
              RaidiFi
            </p>
            <p className="text-[#FFFFFFB2] text-[16px] lg:text-[20px] font-[400] font-inter">
              The NW3 RaidiFi Bot is a “read, raid, research to earn”
              in-telegram/discord social interaction platform using ai
              integration, with the objective to boost community engagement by
              rewarding users via active participation.{" "}
            </p>
          </div>
          <div className="">
            <Image
              src={radi}
              alt="radix-img"
              className="h-[343px] lg:h-[450px] lg:min-w-[500px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductHero;
