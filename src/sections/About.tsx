"use client";

import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";

import Image from "next/image";
import mapImage from "../assets/images/mapImage.png"
import smileMemoji from "../assets/images/memoji-smile.png"
import { CardHeader } from "@/components/CardHeader";
import { portfolioContent } from "@/content/portfolio";

import {motion} from "framer-motion"
import { useRef } from "react";
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
      <SectionHeader eyebrow="About me" title="Backend systems, built for real products." description={portfolioContent.introduction} />
      <div className="mt-20 flex flex-col gap-8">
        <div className=" grid grid-cols-1 gap-8 md:grid md:grid-cols-5  lg:grid-cols-3">
        <Card className="h-[320px] md:col-span-2 lg:col-span-1"  >
          <CardHeader title="What I build" description="Backend services and full-stack product features." />

          <div className="px-6 pb-6 text-sm leading-6 text-white/65">
            <p>APIs and integrations that connect product workflows.</p>
            <p className="mt-3">Queues and event-driven jobs for asynchronous work.</p>
            <p className="mt-3">Real-time updates, payments, and secure service integrations.</p>
          </div>
        </Card>
        <Card className="h-[320px] md:col-span-3 lg:col-span-2">
        <CardHeader title="Technical skills" description={portfolioContent.skillsIntro} />
          <div className="grid grid-cols-1 gap-3 px-6 pb-6 sm:grid-cols-2">
            {portfolioContent.skills.map((group) => (
              <div key={group.category}>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-emerald-200">{group.category}</h3>
                <p className="mt-1 text-xs leading-5 text-white/65">{group.items.join(" · ")}</p>
              </div>
            ))}
          </div>
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
