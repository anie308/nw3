import Image from "next/image";
import React from "react";
import bitvalue from "@/assets/image/bitlogo.png";
import raca from "@/assets/image/racalogo.png";
import ape from "@/assets/image/ape.png";
import phaver from "@/assets/image/phaver.png";
import felbeth from "@/assets/image/felbeth.png";
import spield from "@/assets/image/spield.png";
function Partner() {
  return (
    <div className="bg-[#0B0B0D] p-[100px_20px] lg:p-[100px_50px]">
      <p className="uppercase font-inter text-white font-[600] text-[24px]">
        What we Offer
      </p>
      <div className="h-[5px] mt-[5px] w-full bg-white"></div>

      <div className="text-white mt-[40px] grid sm:grid-col-2 lg:grid-cols-4 gap-[24px]">
        <div>
          <Image
            src={bitvalue}
            alt="partner"
            className="h-[160px] rounded-[6px] mix-blend-luminosity"
          />
        </div>
        <div>
          <Image
            src={raca}
            alt="partner"
            className="h-[160px] rounded-[6px] mix-blend-luminosity"
          />
        </div>
        <div>
          <Image
            src={ape}
            alt="partner"
            className="h-[160px] rounded-[6px] mix-blend-luminosity"
          />
        </div>
        <div>
          <Image
            src={phaver}
            alt="partner"
            className="h-[160px] rounded-[6px] mix-blend-luminosity"
          />
        </div>
        <div>
          <Image
            src={felbeth}
            alt="partner"
            className="h-[160px] rounded-[6px] mix-blend-luminosity"
          />
        </div>
        <div>
          <Image
            src={spield}
            alt="partner"
            className="h-[160px] rounded-[6px] mix-blend-luminosity"
          />
        </div>
      </div>
    </div>
  );
}

export default Partner;
