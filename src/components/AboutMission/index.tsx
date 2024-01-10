import Image from "next/image";
import React from "react";
import blank from "@/assets/svg/blank.svg";
import glare from "@/assets/image/glare.png";
import member from "@/assets/image/member.png";
import "./abmission.css";
function AboutMission() {
  return (
    <div className="relative backg bg-[#272A31]">
      <div className="p-[50px_20px] flex flex-col items-center lg:items-start lg:p-[100px_50px] w-full lg:w-[60%]">
        <p className="font-[600] text-[24px] uppercase font-inter text-[#DDA74F]">
          OUR MISSION
        </p>
        <p className="font-[400] text-center lg:text-start text-[16px] lg:text-[20px] text-white font-inter">
          Our mission is to empower you to thrive in this ever-evolving
          landscape, where innovation, finance, and connectivity merge to shape
          the future.
        </p>
        <div className="grid lg:grid-cols-3">
          <div className="mt-[20px] flex flex-col items-center justify-center">
            <p className="font-inter text-[64px] lg:text-[80px] leading-[110px] p-0 m-0 font-[600] text-white">
              $5M
            </p>
            <p className="leading-[23px] text-white text-[16px]  font-[400] font-inter">
              {" "}
              Africa Support Fund Partner
            </p>
          </div>
          <div className="mt-[20px] flex flex-col items-center justify-center">
            <p className="font-inter text-[64px] lg:text-[80px] leading-[110px] p-0 m-0 font-[600] text-white">
              10K+
            </p>
            <p className="leading-[23px] text-white text-[16px]  font-[400] font-inter">
              Active Member{" "}
            </p>
          </div>
          <div className="mt-[20px] flex flex-col items-center justify-center">
            <p className="font-inter text-[64px] lg:text-[80px] leading-[110px] p-0 m-0 font-[600] text-white">
              12+
            </p>
            <p className="leading-[23px] text-white text-[16px]  font-[400] font-inter">
              Professional Categories
            </p>
          </div>
        </div>
        <button className="mt-[32px] lg:mt-[48px] bg-[#272A31] border border-[#A76B09] p-[10px_30px] lg:p-[16px_40px] rounded-[8px] font-inter space-x-[10px] flex items-center  text-[#DDA74F]">
          <Image src={blank} alt="" />
          <span>Join NW3 Community</span>
        </button>
      </div>

      <div className="text-white p-[20px] lg:p-[20px_50px]">
        <p className="uppercase text-[30px] lg:text-[48px] font-inter font-[400]">
          why choose <br className="lg:hidden" /> navigating web3?
        </p>
        <div className="grid lg:grid-cols-4 gap-[24px] mt-[24px]">
          <div className="overflow-hidden   rounded-[16px] h-[560px] relative">
            <Image
              src={glare}
              className="h-full w-full bg-[#DDA74F] opacity-15 "
              alt="glare"
            />
            <div className="absolute z-20 top-0 h-full w-full p-[20px] flex flex-col items-start justify-center">
              <p className="text-[#DDA74F] font-inter text-[32px] font-[600]">
                Experience
              </p>
              <p className="text-[#FFFFFFCC] mt-[22px] font-inter text-[20px] font-[400]">
                Our team is composed of passionate experts who have been at the
                forefront of Web3&apos;s development. With years of hands-on
                experience, we offer unparalleled guidance and insights.
              </p>
            </div>
          </div>
          <div className="overflow-hidden   rounded-[16px] h-[560px] relative">
            <Image
              src={glare}
              className="h-full w-full bg-[#DDA74F] opacity-15 "
              alt="glare"
            />
            <div className="absolute z-20 top-0 h-full w-full p-[20px] flex flex-col items-start justify-center">
              <p className="text-[#DDA74F] font-inter text-[32px] font-[600]">
                Community
              </p>
              <p className="text-[#FFFFFFCC] mt-[22px] font-inter text-[20px] font-[400]">
                Join a thriving community of like-minded individuals who share
                your enthusiasm for Web3. We foster an environment of
                collaboration, knowledge-sharing, and growth.
              </p>
            </div>
          </div>
          <div className="overflow-hidden   rounded-[16px] h-[560px] relative">
            <Image
              src={glare}
              className="h-full w-full bg-[#DDA74F] opacity-15 "
              alt="glare"
            />
            <div className="absolute z-20 top-0 h-full w-full p-[20px] flex flex-col items-start justify-center">
              <p className="text-[#DDA74F] font-inter text-[32px] font-[600]">
                Education
              </p>
              <p className="text-[#FFFFFFCC] mt-[22px] font-inter text-[20px] font-[400]">
                Education is at the core of what we do. Our commitment to your
                success is evident through our comprehensive educational
                programs, from Web3 fundamentals to advanced blockchain
                development.
              </p>
            </div>
          </div>
          <div className="overflow-hidden   rounded-[16px] h-[560px] relative">
            <Image
              src={glare}
              className="h-full w-full bg-[#DDA74F] opacity-15 "
              alt="glare"
            />
            <div className="absolute z-20 top-0 h-full w-full p-[20px] flex flex-col items-start justify-center">
              <p className="text-[#DDA74F] font-inter text-[32px] font-[600]">
                Innovation
              </p>
              <p className="text-[#FFFFFFCC] mt-[22px] font-inter text-[20px] font-[400]">
                We are not just observers of the Web3 revolution; we are active
                participants. Through startup incubation and partnership
                support, we contribute to the growth and success of innovative
                projects that shape the Web3 ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-[20px] lg:p-[50px] mt-[70px] lg:mt-[120px]">
        <p className="uppercase font-inter text-[#DDA74F] font-[600] text-[24px]">
          OUR Vision
        </p>
        <div className="h-[5px] mt-[5px] w-full bg-white"></div>
        <p className="mt-[20px] text-white font-inter text-[16px] lg:text-[20px]">
          At Navigating Web3, we envision a world where the limitless
          possibilities of Web3 are harnessed for the betterment of society. We
          believe that decentralized technologies, blockchain innovations, and
          smart contracts have the potential to revolutionize how we conduct
          business, exchange value, and connect with one another.
        </p>
      </div>
      <div className="p-[20px] lg:p-[50px] mt-[70px] lg:mt-[120px]">
        <p className="uppercase font-inter text-[#DDA74F] font-[600] text-[24px]">
          OUR team members
        </p>
        <div className="h-[5px] mt-[5px] w-full bg-white"></div>
        <div className="flex items-center overflow-auto lg:overflow-none lg:grid lg:grid-cols-4 mt-[26px] gap-[24px]">
            <div className="xl:w-fit">
                <Image src={member} alt="member" className="mix-blend-luminosity  min-w-[320px] h-[400px]" />
                <p className="text-[24px] font-inter font-[600] text-white mt-[24px]">@pappygold3</p>
                <p className="text-[#FFFFFFB2] font-[500] font-inter text-[16px]">NW3 DESIGN</p>
            </div>
            <div  className="xl:w-fit">
                <Image src={member} alt="member" className="mix-blend-luminosity min-w-[320px] lg:w-full h-[400px]" />
                <p className="text-[24px] font-inter font-[600] text-white mt-[24px]">@pappygold3</p>
                <p className="text-[#FFFFFFB2] font-[500] font-inter text-[16px]">NW3 DESIGN</p>
            </div>
            <div  className="xl:w-fit">
                <Image src={member} alt="member" className="mix-blend-luminosity min-w-[320px] lg:w-full h-[400px]" />
                <p className="text-[24px] font-inter font-[600] text-white mt-[24px]">@pappygold3</p>
                <p className="text-[#FFFFFFB2] font-[500] font-inter text-[16px]">NW3 DESIGN</p>
            </div>
            <div  className="xl:w-fit">
                <Image src={member} alt="member" className="mix-blend-luminosity min-w-[320px] lg:w-full h-[400px]" />
                <p className="text-[24px] font-inter font-[600] text-white mt-[24px]">@pappygold3</p>
                <p className="text-[#FFFFFFB2] font-[500] font-inter text-[16px]">NW3 DESIGN</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMission;
