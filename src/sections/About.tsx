"use client";

import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";

import Image from "next/image";
import BookImage from "../assets/images/book-cover.png"
import JavascriptIcon from "../assets/icons/square-js.svg"
import HTMLIcon from "../assets/icons/html5.svg"
import CSSIcon from "../assets/icons/css3.svg"
import GithubIcon from "../assets/icons/github.svg"

import ReactIcon from "../assets/icons/react.svg"

import mapImage from "../assets/images/map.png"
import smileMemoji from "../assets/images/memoji-smile.png"
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

import {motion} from "framer-motion"
import { useRef } from "react";
import NodeIcon from "../assets/icons/node.svg"
import NextjsIcon from "../assets/icons/nextjs.svg"



const toolboxItems = [
  {
    title:"Node",
    iconType:NodeIcon
  },
  {
  title: "javaScript",
  iconType: JavascriptIcon
},
{
  title: "Nextjs",
  iconType: NextjsIcon
},{title:"React",
  iconType:ReactIcon
},

{
  title: "HTML5",
  iconType: HTMLIcon
}, {
  title: "CSS3",
  iconType: CSSIcon
}, {
  title: "Github",
  iconType: GithubIcon
}]

const hobbies = [{
  title: "playing Cricket",
  emoji: "🏏",
  left:"5%",
  top:"0%"
}, {
  title: "Photography",
  emoji: "📷",
  left:"50%",
  top:"10%"
}, {
  title: "Hiking",
  emoji: "🚶‍♀️,",
  left:"10%",
  top:"35%"
}, {
  title: "Music",
  emoji: "🎵",
   left:"35%",
  top:"40%"
}, {
  title: "Reading",
  emoji: "📚",
  left:"70%",
  top:"45%"
}, {
  title: "Fitness",
  emoji: "🤸‍♀️",
  left:"5%",
  top:"65%"
}]
export const AboutSection = () => {
  const constraintRef=useRef(null)

  return <div id="about" className="py-20 lg:py-28 ">
    <div className="container">
      <SectionHeader eyebrow="About me" title="A glimpse into my world." description="learn More About who I am ,what I do and what inspires me." />
      <div className="mt-20 flex flex-col gap-8">
        <div className=" grid grid-cols-1 gap-8 md:grid md:grid-cols-5  lg:grid-cols-3">
        <Card className="h-[320px] md:col-span-2 lg:col-span-1"  >
          <CardHeader title="My Reads" description="Explore the Books Shaping my prospective" />

          <div className="w-40 mx-auto mt-2 md:mt-0">
            <Image src={BookImage} alt="Book cover" />
          </div>
        </Card>
        <Card className="h-[320px] md:col-span-3 lg:col-span-2">
        <CardHeader title="My Toolbox" description="Explore the Technologiese and tools I use to craft exceptional digital experiences." />
          <ToolboxItems items={toolboxItems} className="animate-move-left [animation-duration:30s]"/>
          <ToolboxItems items={toolboxItems} className="mt-6 animate-move-right [animation-duration:30s]" WrapperClassName="-translate-x-1/2"/>
        </Card>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid md:grid-cols-5 lg:grid-cols-3">
        <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
        <CardHeader   title="Beyond the Code" description="Explore my intersts and hobbies beyond the digital realm." className="" />
          <div className="relative flex-1 " ref={constraintRef}>
            {
              hobbies.map(hobby => (
                <motion.div key={hobby.title} className="inline-flex  items-center  gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full p-1.5 px-6 absolute"  style={{left:hobby.left,top:hobby.top,}} drag dragConstraints={constraintRef}>
                  <span className="font-medium text-gray-950">{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </motion.div>
              ))
            }
          </div>
        </Card>
        <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
          <Image src={mapImage} alt="map image" className="h-full w-full object-cover object-left-top"/>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20  rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 afte:content-[''] after:absolute after:inset-0 after:outline after:ouline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30 ">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping "></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
          <Image src={smileMemoji} alt="smilememoji"  />

          </div>
        </Card>
        </div>

      </div>
    </div>
  </div>
};
