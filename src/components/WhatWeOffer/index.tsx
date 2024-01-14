import Image from "next/image";
import React from "react";
import edu from "@/assets/image/education.png";
import inc from "@/assets/image/incubation.png";
import defi from "@/assets/image/defi.png";
import "./what.css"
import star from "@/assets/image/star.png";
import star1 from "@/assets/image/star1.png";
import star3 from "@/assets/image/star3.png";
import path from "@/assets/image/path1.png";

function WhatWeOffer() {
  return (
    <div className="bg-selcto p-[20px] sm:p-[40px_60px] lg:p-[100px_50px] relative overflow-hidden">
      <p className="uppercase font-inter text-white font-[600] text-[24px]">
        What we Offer
      </p>
      <div className="h-[5px] mt-[5px] w-full bg-white"></div>
      <p className="mt-[20px] font-inter text-white w-full text-center">Your Path to Success in Web3</p>

      <div className="absolute left-[10px]">
      <Image src={star} alt="star" className="h-[61px] lg:h-[120px] w-[64px] lg:w-[115px]" />
      <Image src={star1} alt="star" className="h-[22px] lg:h-[64px] w-[22px] lg:w-[61px] top-[80%]   left-[60%] absolute " />
      </div>
      <Image src={path} alt="star" className=" absolute w-[614px] h-[782px] bottom-[10%] right-0" />
      <Image src={star3} alt="star" className=" lg:h-[64px] w-[61px] absolute bottom-[5%] lg:bottom-[20%] right-[2%]" />



      <div className="grid sm:grid-cols-2 gap-[60px] text-white my-[150px] lg:px-[100px]">
        <div>
          <Image src={inc} alt="edu" className="mix-blend-luminosity h-[200px] lg:h-fit" />
          <div className="w-full flex flex-col lg:flex-row items-start mt-[40px]">
            <p className="w-full lg:w-[30%] text-[#DDA74F] text-[20px] font-[600] font-inter ">
              Web3 Startup Incubation
            </p>
            <p className="w-full lg:w-[70%]  text-[15px] text-[#FFFFFF99] font-[400] font-inter">
              Are you a Web3 startup looking for guidance and resources? Join
              our incubator program, where we provide mentorship, funding, and
              access to a network of like-minded innovators.
            </p>
          </div>
        </div>
        <div>
          <Image src={inc} alt="edu" className="mix-blend-luminosity h-[200px] lg:h-fit" />
          <div className="w-full flex flex-col lg:flex-row items-start mt-[40px]">
            <p className="w-full lg:w-[30%] text-[#DDA74F] text-[20px] font-[600] font-inter ">
              Partnership Support
            </p>
            <p className="w-full lg:w-[70%] text-[#FFFFFF99] text-[15px] font-[400] font-inter">
              Forge powerful alliances in the Web3 space with our partnership
              support. We&apos;ll connect you with potential collaborators,
              investors, and strategic partners.
            </p>
          </div>
        </div>
        <div>
          <Image src={edu} alt="edu" className="mix-blend-luminosity h-[200px] lg:h-fit" />
          <div className="w-full flex flex-col lg:flex-row items-start mt-[40px]">
            <p className="w-full lg:w-[30%] text-[#DDA74F] text-[20px] font-[600] font-inter ">
              Education
            </p>
            <p className="w-full lg:w-[70%] text-[#FFFFFF99] text-[15px] font-[400] font-inter">
              Unlock the potential of Web3 through our comprehensive educational
              programs. From blockchain basics to advanced smart contract
              development, we&apos;ve got you covered.
            </p>
          </div>
        </div>
        <div>
          <Image src={defi} alt="edu" className="mix-blend-luminosity h-[200px] lg:h-fit" />
          <div className="w-full flex flex-col lg:flex-row items-start mt-[40px]">
            <p className="w-full lg:w-[30%] text-[#DDA74F] text-[20px] font-[600] font-inter ">
              DeFi & NFT Opportunities
            </p>
            <p className="w-full lg:w-[70%] text-[#FFFFFF99] text-[15px] font-[400] font-inter">
              Explore the financial frontier of Web3 with DeFi and NFT
              investments. Discover opportunities that can supercharge your
              financial portfolio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeOffer;
