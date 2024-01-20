import Header from "@/components/HomeHeader";
import Mission from "@/components/Mission";
import "./globals.css";
import Image from "next/image";
import Footer from "@/components/Footer";
import WhatWeOffer from "@/components/WhatWeOffer";
import Join from "@/components/Join";
import Partner from "@/components/Partner";
import Letter from "@/components/Letters";
import NavHeader from "@/components/Header/index";

export default function Home() {
  return (
    <div className="">
      <NavHeader />
      <Header />
        
        <Mission />

      {/* <WhatWeOffer />
      <Letter />
      <Partner />
      <Join />
      <Footer /> */}
    </div>
  );
}
