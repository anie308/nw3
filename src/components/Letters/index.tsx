import React from "react";
import { BsBriefcase } from "react-icons/bs";
import card1 from '@/assets/image/card1.png'
import card2 from '@/assets/image/card2.png'
import card3 from '@/assets/image/card3.png'
function Letter() {
  return (
    <div className="bg-[#0B0B0D] p-[100px_20px] lg:p-[100px_50px]  flex flex-col lg:flex-row items-center ">
      <div className="lg:flex-1">
        <p className="text-[20px] lg:text-[24px] font-inter font-[400] uppercase text-white">
          SUBSCRIBE TO OUR LETTERS
        </p>
        <p className="w-full  mt-[10px] lg:mt-[20px] text-[16px] lg:text-[24px] font-[400] font-inter text-white">
          Don&apos;t miss out on the future of innovation, finance, and
          connectivity. Subscribe now and be a part of the Web3 revolution! Your
          journey begins with a single click.
        </p>
        <div className="mt-[24px] lg:mt-[48px] w-full lg:w-[70%] rounded-[16px] flex p-[6px] bg-white space-x-[5px] items-center">
          <BsBriefcase className="text-[25px] text-gray-500 pl-[5px] hidden lg:flex" />
          <input
            placeholder="Enter your email address"
            type="email"
            name=""
            id=""
            className="text-[14px] lg:grow w-full font-inter pl-[10px] outline-none"
          />
          <button className="p-[8px_20px] lg:p-[10px_30px] rounded-[8px] text-wwhite font-inter bg-[#DDA74F] text-white font-[500]">
            Subscribe
          </button>
        </div>
      </div>
      <div className="lg:flex-1 ">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor laborum non tempore eum aut libero optio eius earum iure alias expedita perferendis pariatur consectetur nihil velit et laudantium, esse cupiditate.
      </div>
    </div>
  );
}

export default Letter;
