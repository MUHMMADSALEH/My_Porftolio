import Image from "next/image";
import CheckCircleIcon from "../assets/icons/check-circle.svg";
import ArrowUpRightIcon from "../assets/icons/arrow-up-right.svg";
import grainImage from "../assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { portfolioContent } from "@/content/portfolio";

export const ProjectsSection = () => (
  <section id="projects" className="pb-16 lg:py-24">
    <div className="container">
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
          Selected Work
        </p>
      </div>
      <h2 className="font-serif text-3xl mt-6 text-center">Backend and Full-Stack Projects</h2>
      <p className="text-white/60 mt-4 max-w-2xl mx-auto text-center md:text-lg lg:text-xl">
        {portfolioContent.projectsIntro}
      </p>

      <div className="flex flex-col mt-10 md:mt-20 gap-20">
        {portfolioContent.projects.map((project, projectIndex) => (
          <Card
            key={project.title}
            className="px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
            style={{ top: `calc(64px + ${projectIndex * 40}px)` }}
          >
            <div className="absolute inset-0 -z-10 opacity-5" style={{ backgroundImage: `url(${grainImage.src})` }} />
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">
                <p className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex text-transparent bg-clip-text font-bold uppercase tracking-widest text-sm">
                  {project.category}
                </p>
                <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">{project.title}</h3>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                <p className="mt-4 text-sm text-white/70 md:text-base">{project.summary}</p>
                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map((result) => (
                    <li key={result} className="flex gap-2 text-sm text-white/70 md:text-base">
                      <CheckCircleIcon className="size-5 md:size-6 shrink-0" aria-hidden="true" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs uppercase tracking-wider text-white/50">{project.stack.join(" · ")}</p>
                {project.links.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-white min-h-11 rounded-xl text-gray-950 font-semibold inline-flex items-center justify-center gap-2 px-5"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRightIcon aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <div className="relative">
                {project.image ? (
                  <Image
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    src={project.image}
                    alt={project.imageAlt}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                ) : (
                  <div aria-hidden="true" className="mt-8 min-h-64 rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-300/15 via-gray-900 to-sky-400/15 p-6 flex flex-wrap content-center gap-2">
                    {project.stack.map((technology) => (
                      <span key={technology} className="rounded-full border border-white/15 bg-gray-950/60 px-3 py-2 text-sm text-white/70">
                        {technology}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
