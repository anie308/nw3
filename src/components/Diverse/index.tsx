import React from "react";
import "./diverse.css";
import Image from "next/image";
import inc from "@/assets/image/inc.png";
import inc2 from "@/assets/image/inc2.png";
import inc3 from "@/assets/image/inc3.png";
import inc4 from "@/assets/image/inc4.png";
import inc5 from "@/assets/image/inc5.png";
import inc6 from "@/assets/image/inc6.png";
import inc7 from "@/assets/image/inc7.png";
import inc8 from "@/assets/image/inc8.png";
import inc9 from "@/assets/image/inc9.png";
function Diverse() {
  return (
    <div className="diverse p-[20px] lg:p-[100px_50px] text-white ">
      <p className="uppercase font-inter">our diverse community</p>
      <div className="h-[5px] mt-[5px] w-full bg-white">
        <div className="h-[5px] w-[10%] bg-[#DDA74F]"></div>
      </div>
      <div className="flex flex-row overflow-auto xl:grid  xl:grid-cols-3 gap-[40px] mt-[50px]">
        {community.map(({ id, img, title, description1, description2 }) => (
          <div className=" xl:w-fit" key={id}>
            <Image
              src={img}
              alt="inc-image"
              className="mix-blend-luminosity h-[500px] min-w-[350px] "
            />
            <div className="mt-[24px]">
              <p className="text-[#DDA74F] font-manrope text-[24px] font-[600]">
                {title}
              </p>
              <p className="text-[#FFFFFF99] font-inter text-[14px]">
                <span className="text-white">Who They Are:</span>
                {description1}
              </p>
              <p className="text-[#FFFFFF99] font-inter text-[14px]">
                <span className="text-white">What They Do:</span>
                {description2}
              </p>
            </div>

          </div>
        ))}

      </div>
      <div className="flex items-center justify-start lg:*:justify-center w-full mt-[50px]">
      <button className="bg-[#A76B09] p-[8px_30px] rounded-[6px] text-white font-inter text-[16px] font-[600]">Join Us Today</button>

      </div>
    </div>
  );
}

export default Diverse;

const community = [
  {
    id: 1,
    img: inc,
    title: "Educator",
    description1: "The wise, the experienced, and the eager to share.",
    description2:
      "These knowledgeable members are here to enlighten, teach, and guide the community by sharing their expertise on various topics.",
  },
  {
    id: 2,
    img: inc2,
    title: "KOL (Key Opinion Leader)",
    description1: "The trendsetters, the influencers, and the leaders.",
    description2:
      "They're the voices that shape our community's discussions, provide expert opinions, and set the course for what&apos;s hot and relevant.",
  },
  {
    id: 3,
    img: inc3,
    title: "Gamer",
    description1: "The gamers, the geeks, and the joystick enthusiasts.",
    description2:
      "These folks connect with fellow gamers, arrange gaming sessions, and chat about the latest in the gaming world.",
  },
  {
    id: 4,
    img: inc4,
    title: "Content Creator",
    description1: "The artists, the writers, and the video producers.",
    description2:
      "With a creative flair, they share their own art, articles, videos, and more, making our community richer.",
  },
  {
    id: 5,
    img: inc5,
    title: "Trader",
    description1: "The investors, the risk-takers, and the financial experts.",
    description2:
      "They're the ones talking strategy, market trends, and offering insights into the financial side of our interests.",
  },
  {
    id: 6,
    img: inc6,
    title: "Contributor",
    description1: "The active members, the go-getters, and the participators.",
    description2:
      "These folks contribute positively to discussions, assist with community projects, and play a role in community growth.",
  },
  {
    id: 7,
    img: inc7,
    title: "Outreach Manager",
    description1: "The connectors, the networkers, and the communication pros.",
    description2:
      "They're our bridge to the outside world, forging partnerships, securing whitelists with new projects, and helping us expand.",
  },
  {
    id: 8,
    img: inc8,
    title: "Affiliate",
    description1: "The promoters, the partners, and the network builders.",
    description2:
      "Affiliates are all about spreading the word, helping with partnerships, and expanding our reach.",
  },
  {
    id: 9,
    img: inc9,
    title: "Builder",
    description1: "The tech enthusiasts, the creatives, and the innovators.",
    description2:
      "These members work behind the scenes, contributing to the technical development, design, and infrastructure of our community.",
  },
];
