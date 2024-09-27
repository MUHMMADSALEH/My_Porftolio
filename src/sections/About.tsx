import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "../assets/icons/star.svg"
import Image from "next/image";
import BookImage from "../assets/images/book-cover.png"
import JavascriptIcon from "../assets/icons/square-js.svg"
import HTMLIcon from "../assets/icons/html5.svg"
import CSSIcon from "../assets/icons/css3.svg"
import GithubIcon from "../assets/icons/github.svg"
import ChromeIcon from "../assets/icons/chrome.svg"
import ReactIcon from "../assets/icons/react.svg"
import { TechIcon } from "@/components/TechIcon";
import mapImage from "../assets/images/map.png"
import smileMemoji from "../assets/images/memoji-smile.png"
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { title } from "process";



const toolboxItems = [{
  title: "javaScript",
  iconType: JavascriptIcon
}, {
  title: "HTML5",
  iconType: HTMLIcon
}, {
  title: "CSS3",
  iconType: CSSIcon
}, {
  title: "Github",
  iconType: GithubIcon
}, {
  title: "Chrome",
  iconType: ChromeIcon
},{title:"React",
  iconType:ReactIcon
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

  return <div className="py-20 lg:py-28 ">
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
          <ToolboxItems items={toolboxItems} className=""/>
          <ToolboxItems items={toolboxItems} className="mt-6" WrapperClassName="-translate-x-1/2"/>
        </Card>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid md:grid-cols-5 lg:grid-cols-3">
        <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
        <CardHeader   title="Beyond the Code" description="Explore my intersts and hobbies beyond the digital realm." className="" />
          <div className="relative flex-1">
            {
              hobbies.map(hobby => (
                <div className="inline-flex  items-center  gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full p-1.5 px-6 absolute"  style={{left:hobby.left,top:hobby.top,}}>
                  <span className="font-medium text-gray-950">{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))
            }
          </div>
        </Card>
        <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
          <Image src={mapImage} alt="map image" className="h-full w-full object-cover object-left-top"/>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20  rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 afte:content-[''] after:absolute after:inset-0 after:outline after:ouline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30 ">
          <Image src={smileMemoji} alt="smilememoji"  />

          </div>
        </Card>
        </div>

      </div>
    </div>
  </div>
};
