import React from "react";
import "./contact.css";
import NavHeader from "../Header";
function ContactHero() {
  return (
    <div className="font-notosans background overflow-hidden h-[1000px] lg:h-[850px] w-full relative">
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
      <div className="absolute z-20 min-h-full top-0 w-full ">
        <NavHeader />
        <div className="flex flex-col lg:flex-row items-center justify-center p-[20px] lg:p-[50px] h-full lg:h-[750px] gap-[40px]">
          <div className="text-white flex-1 flex flex-col items-start w-full">
            <p className="font-notosans text-[30px] lg:text-[48px] font-[700]">
              Contact Us
            </p>
            <p className="font-inter text-[16px] lg:text-[20px]">
              No matter your background or interests, Navigating Web3&apos;s
              community welcomes you with open arms. Together, we&apos;ll
              explore the limitless possibilities of the Web3 era and shape the
              future of innovation, finance, and connectivity. Join us today and
              be a part of something extraordinary.
            </p>
          </div>
          <div className=" flex-1 flex items-center justify-center">
            <div className="bg-white w-full lg:w-[80%] h-full rounded-[16px] p-[20px]">
              <p className="text-[#141414] font-inter font-[600] text-[22px] lg:text-[32px] leading-[25px] lg:leading-[35px]">
                We would love to hear from you
              </p>
              <p className="font-inter text-[14px] font-[400] opacity-95">
                Send us your a message. Our team will contact you ASAP.
              </p>
              <div className="mt-[40px] flex flex-col items-start space-y-[16px]">
                <div className="flex flex-col items-start w-full">
                  <label
                    htmlFor="name"
                    className="font-[600] text-[16px] text-[#141414]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-[8px] h-[45px] w-full rounded-[8px] border outline-none px-[10px] text-[#141414] font-inter placeholder:text-[#141414B2]"
                    placeholder="Your Name"
                  />
                </div>
                <div className="flex flex-col items-start w-full">
                  <label
                    htmlFor="email"
                    className="font-[600] text-[16px] text-[#141414]"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-[8px] h-[45px] w-full rounded-[8px] border outline-none px-[10px] text-[#141414] font-inter placeholder:text-[#141414B2]"
                    placeholder="Email"
                  />
                </div>
                <div className="flex flex-col items-start w-full">
                  <label
                    htmlFor="phone"
                    className="font-[600] text-[16px] text-[#141414]"
                  >
                    Phone Number (Optional)
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="mt-[8px] h-[45px] w-full rounded-[8px] border outline-none px-[10px] text-[#141414] font-inter placeholder:text-[#141414B2]"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="flex flex-col items-start w-full">
                  <label
                    htmlFor="email"
                    className="font-[600] text-[16px] text-[#141414]"
                  >
                    Message
                  </label>
                  <textarea
                    id="text"
                    className="mt-[8px] h-[90px] w-full rounded-[8px] border outline-none p-[10px] text-[#141414] font-inter placeholder:text-[#141414B2]"
                    placeholder="You Message"
                  />
                </div>
                <button className="w-full p-[10px_30px] rounded-[8px] font-inter bg-[#DDA74F] text-white font-[600] text-[16px]">
                  Get in touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactHero;
