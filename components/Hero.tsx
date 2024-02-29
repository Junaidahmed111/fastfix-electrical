import Image from "next/image";
import React from "react";
import hero from "@/public/assets/hero.jpg";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative w-full">
      <div className="flex flex-col items-center justify-center gap-y-8 relative">
        <Image
          src={hero}
          alt=""
          width={1000}
          height={1000}
          className="h-[300px] sm:h-[350px] md:h-[500px] lg:h-[700px] w-screen"
        />
        <span className="absolute inset-0 flex items-center justify-center font-bold text-center text-white max-w-xl w-full mx-auto">
          <span className="flex flex-col gap-y-3 text-xl sm:text-2xl md:text-4xl lg:text-6xl text-center">
            <span className="text-red-700">Fast Fix</span> Electrical and
            Automotive
            <span className="text-lg md:text-xl lg:text-2xl">
              Empowering Homes, Illuminating Lives - Your Trusted Electrician
              Company
            </span>
            <div className="flex gap-x-6 justify-center items-center md:pt-5">
              <Button className="bg-amber-950 md:font-bold md:text-lg md:px-14 md:py-8 rounded-full">
                Services
              </Button>
              <Button className="bg-amber-950 md:font-bold md:text-lg md:px-14 md:py-8 rounded-full">
                Get a Qoute
              </Button>
            </div>
          </span>
        </span>
      </div>
    </section>
  );
};

export default Hero;
