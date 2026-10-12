import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { ExperienceLadder } from "@/sections/ExperienceLadder";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";

export default function Home() {
  return (
    <div id="home">
      <Header />
      <main>
        <HeroSection />
        <ProjectsSection />
        <TapeSection />
        <ExperienceLadder />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
