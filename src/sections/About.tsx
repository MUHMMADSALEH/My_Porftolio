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
  emoji: "🏏"
}, {
  title: "Photography",
  emoji: "📷"
}, {
  title: "Hiking",
  emoji: "🚶‍♀️"
}, {
  title: "Music",
  emoji: "🎵"
}, {
  title: "Reading",
  emoji: "📚"
}, {
  title: "Fitness",
  emoji: "🤸‍♀️"
}]
export const AboutSection = () => {

  return <div className="pb-20">
    <div className="container">
      <SectionHeader eyebrow="About me" title="A glimpse into my world." description="learn More About who I am ,what I do and what inspires me." />
      <div className="mt-20">
        <Card className="size-[320px]">
          <CardHeader title="My Reads" description="Explore the Books Shaping my prospective" />

          <div className="w-40 mx-auto mt-8">
            <Image src={BookImage} alt="Book cover" />
          </div>
        </Card>
        <Card>
        <CardHeader title="My Toolbox" description="Explore the Technologiese and tools I use to craft exceptional digital experiences." />
          <ToolboxItems items={toolboxItems}/>
          <ToolboxItems items={toolboxItems}/>
        </Card>
        <Card>
        <CardHeader title="Beyond the Code" description="Explore my intersts and hobbies beyond the digital realm." />
          <div>
            {
              hobbies.map(hobby => (
                <div>
                  <span>{hobby.title}</span>
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
