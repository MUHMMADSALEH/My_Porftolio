import mySchdulerr from "@/assets/images/my-schedulerr.png";
// import  darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png"
// import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
// import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "../assets/icons/check-circle.svg";
import ArrowUpRightIcon from "../assets/icons/arrow-up-right.svg";
import grainImage from "../assets/images/grain.jpg";
import { Card } from "@/components/Card";

const portfolioProjects = [
 
  {
    company: "Personal Paroject",
    year: "2024",
    title: "My Schedulerr",
    results: [
      { title: "Developed a scheduler platform using Next.js with app router, achieving a 30% increase in routing efficiency." },
      { title: "Integrated Clerk for authentication, enhancing user login/signup processes by 40% in speed and ensuring secure access." },
      { title: "Integrated Google Calendar API for seamless meeting scheduling, improving event management efficiency by 25%." },
      { title: "Built features allowing users to provide their availability and create events, resulting in 20% higher booking success rate." },
      { title: "Managed data using NeonDB with Prisma ORM, improving query performance by 35%." },
      { title: "Designed the UI with ShadCN components, boosting user satisfaction and engagement by 15% with a modern, responsive interface." },
    ],
    link: " https://my-schedulerr.vercel.app/",
    image: mySchdulerr
  },
  // {
  //   company: "Acme Corp",
  //   year: "2022",
  //   title: "Dark Saas Landing Page",
  //   results: [
  //     { title: "Enhanced user experience by 40%" },
  //     { title: "Improved site speed by 50%" },
  //     { title: "Increased mobile traffic by 35%" },
  //   ],
  //   link: "/",
  //   image: darkSaasLandingPage,
  // },
  // {
  //   company: "Innovative Co",
  //   year: "2021",
  //   title: "/",
  //   results: [
  //     { title: "Boosted sales by 20%" },
  //     { title: "Expanded customer reach by 35%" },
  //     { title: "Increased brand awareness by 15%" },
  //   ],
  //   link: "/",
  //   image: lightSaasLandingPage,
  // },
  // {
  //   company: "Quantum Dynamics",
  //   year: "2023",
  //   title: "AI Startup Landing Page",
  //   results: [
  //     { title: "Enhanced user experience by 40%" },
  //     { title: "Improved site speed by 50%" },
  //     { title: "Increased mobile traffic by 35%" },
  //   ],
  //   link: "/",
  //   image: aiStartupLandingPage,
  // },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl mt-6 text-center">
          Featured Projects
        </h2>
        <p className="text-white/60 mt-4 max-w-md mx-auto text-center md:text-lg lg:text-xl">
          See how I transformed concepts into engaging digital experiences.
        </p>

        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className=" px-8 pt-8 md:pt-12 md:px-10  lg:pt-16 lg:px-20  sticky "
              style={{ top: `calc(64px + ${projectIndex * 40}px)` }}
            >

              <div
                className="absolute inset-0 -z-10 opacity-5 "
                style={{ backgroundImage: `url(${grainImage.src})` }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 text-transparent bg-clip-text font-bold uppercase tracking-widest text-sm ">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5  ">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li  key={result.title} className=" flex  gap-2 text-sm text-white/50 md:text-base">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  <a href={project.link}>
                    <button className="bg-white h-12 w-full md:w-auto rounded-xl text-gray-950 font-semibold inline-flex items-center justify-center mt-8 -mb-4 px-6 md:-md-0 ">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    className="mt-8 -mb-4 md:-mb-0  lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>

  );
};
