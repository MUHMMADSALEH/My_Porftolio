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
import { TechIcon } from "@/components/TechIcon";
import mapImage from "../assets/images/map.png"
import smileMemoji from "../assets/images/memoji-smile.png"
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";



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
}]

const hobbies = [{
  title: "playing Cricket",
  emoji: "🏏",
  left:"5%",
  right:"5%"
}, {
  title: "Photography",
  emoji: "📷",
  left:"50%",
  right:"5%"
}, {
  title: "Hiking",
  emoji: "🚶‍♀️,",
  left:"10%",
  right:"35%"
}, {
  title: "Music",
  emoji: "🎵",
   left:"35%",
  right:"40%"
}, {
  title: "Reading",
  emoji: "📚",
  left:"70%",
  right:"45%"
}, {
  title: "Fitness",
  emoji: "🤸‍♀️",
  left:"5%",
  right:"65%"
}]
export const AboutSection = () => {

  return <div className="pb-20">
    <div className="container">
      <SectionHeader eyebrow="About me" title="A glimpse into my world." description="learn More About who I am ,what I do and what inspires me." />
      <div className="mt-20 flex flex-col gap-8">
        <Card className="size-[320px]">
          <CardHeader title="My Reads" description="Explore the Books Shaping my prospective" />

          <div className="w-40 mx-auto mt-8">
            <Image src={BookImage} alt="Book cover" />
          </div>
        </Card>
        <Card className="size-[320px]">
        <CardHeader title="My Toolbox" description="Explore the Technologiese and tools I use to craft exceptional digital experiences." />
          <ToolboxItems items={toolboxItems} className="mt-6 "/>
          <ToolboxItems items={toolboxItems} className="mt-6" WrapperClassName="-translate-x-1/2"/>
        </Card>
        <Card className="h-[320px] p-0 flex flex-col">
        <CardHeader   title="Beyond the Code" description="Explore my intersts and hobbies beyond the digital realm." className="px-6 py-6" />
          <div className="relative flex-1">
            {
              hobbies.map(hobby => (
                <div className="inline-flex  items-center  gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full p-1.5 px-6 absolute"  style={{left:hobby.left,right:hobby.right,}}>
                  <span className="font-medium text-gray-950">{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))
            }
          </div>
        </Card>
        <Card>
          <Image src={mapImage} alt="map image" />
          <Image src={smileMemoji} alt="smilememoji" />
        </Card>

      </div>
    </div>;
  </div>
};
