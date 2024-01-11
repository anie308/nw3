import Image from "next/image";
import React from "react";
import edu from "@/assets/image/education.png";
import inc from "@/assets/image/incubation.png";
import defi from "@/assets/image/defi.png";
function WhatWeOffer() {
  return (
    <div className="bg-[#0B0B0D] p-[20px] lg:p-[100px_50px]">
      <p className="uppercase font-inter text-white font-[600] text-[24px]">
        What we Offer
      </p>
      <div className="h-[5px] mt-[5px] w-full bg-white"></div>
      <p className="mt-[20px] font-inter text-white w-full text-center">Your Path to Success in Web3</p>

      <div className="grid lg:grid-cols-2 gap-[60px] text-white mt-[50px]">
        <div>
          <Image src={inc} alt="edu" className="mix-blend-luminosity h-[200px] lg:h-fit" />
          <div className="w-full flex flex-col lg:flex-row items-center mt-[40px]">
            <p className="w-full lg:w-[30%] text-[#DDA74F] text-[24px] font-[600] font-inter ">
              Web3 Startup Incubation
            </p>
            <p className="w-full lg:w-[70%] text-[16px] text-[#FFFFFF99] font-[400] font-inter">
              Are you a Web3 startup looking for guidance and resources? Join
              our incubator program, where we provide mentorship, funding, and
              access to a network of like-minded innovators.
            </p>
          </div>
        </div>
        <div>
          <Image src={inc} alt="edu" className="mix-blend-luminosity h-[200px] lg:h-fit" />
          <div className="w-full flex flex-col lg:flex-row items-center mt-[40px]">
            <p className="w-full lg:w-[30%] text-[#DDA74F] text-[24px] font-[600] font-inter ">
              Partnership Support
            </p>
            <p className="w-full lg:w-[70%] text-[#FFFFFF99] font-[400] font-inter">
              Forge powerful alliances in the Web3 space with our partnership
              support. We'll connect you with potential collaborators,
              investors, and strategic partners.
            </p>
          </div>
        </div>
        <div>
          <Image src={edu} alt="edu" className="mix-blend-luminosity h-[200px] lg:h-fit" />
          <div className="w-full flex flex-col lg:flex-row items-center mt-[40px]">
            <p className="w-full lg:w-[30%] text-[#DDA74F] text-[24px] font-[600] font-inter ">
              Education
            </p>
            <p className="w-full lg:w-[70%] text-[#FFFFFF99] font-[400] font-inter">
              Unlock the potential of Web3 through our comprehensive educational
              programs. From blockchain basics to advanced smart contract
              development, we've got you covered.
            </p>
          </div>
        </div>
        <div>
          <Image src={defi} alt="edu" className="mix-blend-luminosity h-[200px] lg:h-fit" />
          <div className="w-full flex flex-col lg:flex-row items-center mt-[40px]">
            <p className="w-full lg:w-[30%] text-[#DDA74F] text-[24px] font-[600] font-inter ">
              DeFi & NFT Opportunities
            </p>
            <p className="w-full lg:w-[70%] text-[#FFFFFF99] font-[400] font-inter">
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
