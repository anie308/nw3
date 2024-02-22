/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./mission.css";
import Image from "next/image";
import noise from "@/assets/image/noise.png";
import blank from "@/assets/svg/blank.svg";
import lumin from "@/assets/image/lumin.png";
import TooltipComponent from "../Tooltip";

function Mission() {
  return (
    <div className="bg-background h-[600px] lg:h-[800px]  overflow-hidden flex flex-col items-center justify-center relative">
      <Image
        src={lumin}
        priority
        className="h-[400px] lg:h-[800px] w-[200px] lg:w-[400px]  absolute z-10 bottom-[-50px] lg:bottom-[-170px] right-[-50px] lg:right-[-10%] mix-blend-luminosity opacity-50 lg:opacity-100"
        alt="lumin"
      />
      {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem placeat rem qui nam ipsum iste eos ea asperiores iure quia quasi reiciendis, ab perspiciatis. Sequi ex debitis aperiam adipisci aliquam. */}
      <Image
        priority
        src={noise}
        alt="alt-noise"
        className="top-0 absolute h-[300px] lg:h-[330px] lw-full lg:w-[50%] shrink-0 pt-[20px] lg:p-0"
      />
      <div className="absolute lg:relative w-full flex flex-col items-center z-30 px-[15px] lg:mt-[60px]">
        <p className=" text-[20px] lg:text-[35px] font-[400] text-center font-merienda text-white">
          NW3 mission is to empower{" "}
          <TooltipComponent
            title="Individuals"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem placeat rem qui nam ipsum iste eos ea asperiores."
            attr="linear-one"
            text="individuals"
          ></TooltipComponent>{" "}
          and
          <TooltipComponent
            title="Businesses"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem placeat rem qui nam ipsum iste eos ea asperiores."
            attr="linear-two"
            text="businesses"
          ></TooltipComponent>
          to thrive in <br className="hidden lg:block" /> the ever-evolving
          landscape of Web3 technologies. At Navigating{" "}
          <br className="hidden lg:block" /> Web3, we believe that the future of{" "}
          <TooltipComponent
            title="Innovation"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem placeat rem qui nam ipsum iste eos ea asperiores."
            attr="linear-three"
            text="innovation,"
          ></TooltipComponent>
          <TooltipComponent
            title="Finance"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem placeat rem qui nam ipsum iste eos ea asperiores."
            attr="linear-four"
            text="finance,"
          ></TooltipComponent>{" "}
          and
          <br className="hidden lg:block" />{" "}
          <TooltipComponent
            title="Connectivity"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem placeat rem qui nam ipsum iste eos ea asperiores."
            attr="linear-five"
            text="connectivity"
          ></TooltipComponent>
          is within reach through Web3. Discover how we can{" "}
          <br className="hidden lg:block" /> help you navigate this exciting
          world.
        </p>
        <button className="mt-[32px] lg:mt-[48px] bg-[#272A31] border border-[#A76B09] p-[10px_30px] lg:p-[16px_40px] rounded-[8px] font-inter space-x-[10px] flex items-center  text-[#DDA74F]">
          <Image src={blank} alt="" />
          <span>Join NW3 Community</span>
        </button>
      </div>
    </div>
  );
}

export default Mission;
// #86807F
