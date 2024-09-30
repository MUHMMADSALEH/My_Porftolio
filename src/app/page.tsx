"use client"
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import {Link} from "react-scroll"

export default function Home() {

  return (
   <div id="home">
    <Header/>
    <HeroSection/>
    <ProjectsSection/>
    <TapeSection/>
    <TestimonialsSection/>
    <AboutSection/>
    <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={600}><ContactSection/></Link>
    <Footer/>
   </div>
  );
}
