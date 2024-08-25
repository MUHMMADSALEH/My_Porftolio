import Image from "next/image";

import memojiImage from "../assets/images/memoji-computer.png";
import ArrowDown from "../assets/icons/arrow-down.svg";

export const HeroSection = () => {
  console.log(memojiImage);
  return (
    <div className="py-32 md:py-48 lg:py-60">
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            alt="Person peeking from behind the computer"
            className="size-[100px]"
          />
          <div className="bg-gray-950 py-1.5 px-4 border border-gray-800 rounded-md inline-flex items-center gap-4 ">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium ">Available for new projects</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
        <h1 className="font-serif text-3xl md:text-5xl mt-8 text-center tracking-wide">
          Buillding Exeptional User Experiences</h1>
        <p className="mt-4 text-center  text-white/60 md:text-lg">
          I specialize in transforming design into functional, high performing
          web application. Let&#39;s disscus your next projects
        </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="px-6  h-12  border border-white/15 rounded-xl  inline-flex items-center gap-2">
            <span className="font-semibold">Explore My work</span>
            <ArrowDown className="size-4"/>
          </button>
          <button className="inline-flex  items-center gap-2 bg-white  text-gray-900 font-semibold border border-white rounded-xl h-12 px-4">
            <span className="text-2xl">👋</span>
            <span className="font-semibold">Let&#39;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
