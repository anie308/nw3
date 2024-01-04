import Header from "@/components/Header";
import Mission from "@/components/Mission";
import "./globals.css";
import Image from "next/image";

import lumin from "@/assets/image/lumin.png";
export default function Home() {
  return (
    <>
      <Header />
      <div className=" relative overflow-hidden">
        <Image
          src={lumin}
          priority
          className="h-[400px] lg:h-[800px] w-[200px] lg:w-[400px]  absolute z-20 bottom-[-50px] lg:bottom-[-200px] right-[-50px] lg:right-[-10%] mix-blend-luminosity opacity-50 lg:opacity-100"
          alt="lumin"
        />
        <Mission />
      </div>
    </>
  );
}
