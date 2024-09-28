import Image from "next/image";

import memojiImage from "../assets/images/memoji-computer.png";
import ArrowDown from "../assets/icons/arrow-down.svg";
import grainImage from "../assets/images/grain.jpg";
import StarIcon from "../assets/icons/star.svg";
import SparkleIcon from "../assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  // console.log(memojiImage);
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-grdient(to_bottom,transparent,black_10%,black_70%,transparent)]">
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      <div className=" size-[620px] hero-ring"></div>
      <div className=" size-[820px] hero-ring"></div>
      <div className=" size-[1020px] hero-ring"></div>
      <div className=" size-[1220px] hero-ring"></div>
      <HeroOrbit size={800} rotation={-71}>
        <StarIcon className="size-28 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={550} rotation={20}>
        <StarIcon className="size-12 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={590} rotation={98}>
        <StarIcon className="size-8 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={430} rotation={-14}>
        <SparkleIcon className="size-8 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={440} rotation={79}>
        <SparkleIcon className="size-5 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={530} rotation={178}>
        <SparkleIcon className="size-10 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={710} rotation={144}>
        <SparkleIcon className="size-14 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={720} rotation={85}>
        <div className="size-3 bg-emerald-300/20 rounded-full"></div>
      </HeroOrbit>
      <HeroOrbit size={520} rotation={-41}>
        <div className="size-2 bg-emerald-300/20 rounded-full"></div>
      </HeroOrbit>
      <HeroOrbit size={650} rotation={-5}>
        <div className="size-2 bg-emerald-300/20 rounded-full"></div>
      </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            alt="Person peeking from behind the computer"
            className="size-[100px]"
          />
          <div className="bg-gray-950 py-1.5 px-4 border border-gray-800 rounded-md inline-flex items-center gap-4 ">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className=" absolute bg-green-500 inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium ">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl mt-8 text-center tracking-wide">
            Buillding Exeptional User Experiences
          </h1>
          <p className="mt-4 text-center  text-white/60 md:text-lg">
            I specialize in transforming design into functional, high performing
            web application. Let&#39;s disscus your next projects
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="px-6  h-12  border border-white/15 rounded-xl  inline-flex items-center gap-2">
            <span className="font-semibold">Explore My work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex  items-center gap-2 bg-white  text-gray-900 font-semibold border border-white rounded-xl h-12 px-4 cursor-pointer">
            <span className="text-2xl">👋</span>
            <span className="font-semibold">Let&#39;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
