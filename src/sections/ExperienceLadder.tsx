"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { experiences, computeTotalExperience, formatDuration, formatDisplayPeriod } from "@/content/experience";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowDownIcon from "@/assets/icons/arrow-down.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ExperienceLadder = () => {
  const shouldReduceMotion = useReducedMotion();
  const stats = computeTotalExperience(experiences);

  // Default to having the first (current/latest) role expanded
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    [experiences[0].id]: true,
  });

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="experience" aria-label="Career Experience Ladder" className="py-20 lg:py-28 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
            Career Journey
          </p>
        </div>

        <p className="text-white/60 mt-4 max-w-2xl mx-auto text-center md:text-lg">
          A track record of engineering backend logic, async queues, and SaaS platforms in fast-paced production environments.
        </p>

        {/* Summary Strip (Computed Metrics) */}
        <div className="mt-10 max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-gray-900/60 border border-white/10 backdrop-blur text-center flex flex-col justify-center items-center">
            <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
              {stats.totalYearsText}
            </span>
            <span className="text-xs md:text-sm text-white/60 mt-1 uppercase tracking-wider font-medium">
              Total Experience
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-gray-900/60 border border-white/10 backdrop-blur text-center flex flex-col justify-center items-center">
            <span className="text-2xl md:text-3xl font-bold text-white">
              {stats.totalCompanies}
            </span>
            <span className="text-xs md:text-sm text-white/60 mt-1 uppercase tracking-wider font-medium">
              Companies Scaled
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-gray-900/60 border border-white/10 backdrop-blur text-center col-span-2 sm:col-span-1 flex flex-col justify-center items-center">
            <span className="text-2xl md:text-3xl font-bold text-emerald-400 flex items-center gap-1">
              <SparkleIcon className="size-5 inline-block text-emerald-400" aria-hidden="true" />
              Senior
            </span>
            <span className="text-xs md:text-sm text-white/60 mt-1 uppercase tracking-wider font-medium">
              Node & Nest Focus
            </span>
          </div>
        </div>

        {/* Timeline Ladder */}
        <div className="mt-16 max-w-3xl mx-auto relative">
          {/* Vertical Guide Line */}
          <div
            className="absolute left-4 md:left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-emerald-400 via-sky-400 to-white/10"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-10">
            {experiences.map((item, index) => {
              const isCurrent = item.endDate === "Present";
              const isLatest = index === 0;
              const isHighlighted = isCurrent || isLatest;
              const isExpanded = !!expandedIds[item.id];
              const durationText = formatDuration(item.startDate, item.endDate);
              const displayPeriod = formatDisplayPeriod(item.startDate, item.endDate);
              const accordionId = `exp-details-${item.id}`;
              const triggerId = `exp-trigger-${item.id}`;

              return (
                <motion.div
                  key={item.id}
                  initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-12 md:pl-20"
                >
                  {/* Timeline Node Marker */}
                  <div
                    className={`absolute left-2.5 md:left-6.5 top-5 -translate-x-1/2 flex items-center justify-center rounded-full transition-transform ${
                      isHighlighted
                        ? "size-5 bg-emerald-400 ring-4 ring-emerald-500/20 shadow-lg shadow-emerald-500/50"
                        : "size-4 bg-gray-700 border-2 border-white/40"
                    }`}
                    aria-hidden="true"
                  >
                    {isCurrent && (
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    )}
                  </div>

                  {/* Experience Card */}
                  <div
                    className={`relative rounded-3xl p-6 md:p-8 border transition-all ${
                      isHighlighted
                        ? "bg-gray-900/90 border-emerald-500/40 shadow-xl shadow-emerald-500/5"
                        : "bg-gray-900/60 border-white/10 hover:border-white/20"
                    }`}
                  >
                    {/* Subtle Background Texture */}
                    <div
                      className="absolute inset-0 -z-10 rounded-3xl opacity-5 pointer-events-none"
                      style={{ backgroundImage: `url(${grainImage.src})` }}
                      aria-hidden="true"
                    />

                    {/* Top Row: Role, Company & Badges */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                            {item.role}
                          </h3>
                          {isCurrent ? (
                            <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                              Current Role
                            </span>
                          ) : isLatest ? (
                            <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                              Latest Role
                            </span>
                          ) : null}
                        </div>
                        <p className="text-base md:text-lg font-medium text-emerald-400 mt-1">
                          {item.company}
                          <span className="text-white/40 text-sm font-normal ml-2">
                            · {item.location}
                          </span>
                        </p>
                      </div>

                      {/* Date & Computed Duration Badge */}
                      <div className="flex sm:flex-col items-start sm:items-end justify-between gap-1 text-sm text-white/60 mt-1 sm:mt-0">
                        <span className="font-medium text-white/80">{displayPeriod}</span>
                        <span className="px-2 py-0.5 text-xs rounded-md bg-white/5 border border-white/10 text-sky-300 font-mono">
                          {durationText}
                        </span>
                      </div>
                    </div>

                    {/* Role Summary */}
                    <p className="mt-4 text-sm md:text-base text-white/70 leading-relaxed">
                      {item.summary}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="mt-5 flex flex-wrap gap-2" aria-label={`Tech stack for ${item.company}`}>
                      {item.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs rounded-full bg-white/5 text-white/80 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Collapsible Key Achievements */}
                    <div className="mt-6 pt-5 border-t border-white/10">
                      <button
                        id={triggerId}
                        type="button"
                        aria-expanded={isExpanded}
                        aria-controls={accordionId}
                        onClick={() => toggleExpand(item.id)}
                        className="w-full flex items-center justify-between text-left text-sm font-semibold text-white/80 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg py-1"
                      >
                        <span className="flex items-center gap-2">
                          <span>Key Achievements & Impact ({item.achievements.length})</span>
                        </span>
                        <ArrowDownIcon
                          className={`size-4 text-emerald-400 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""
                            }`}
                          aria-hidden="true"
                        />
                      </button>

                      {isExpanded && (
                        <ul
                          id={accordionId}
                          role="region"
                          aria-labelledby={triggerId}
                          className="mt-4 flex flex-col gap-3 text-sm text-white/70"
                        >
                          {item.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-2.5 leading-relaxed">
                              <CheckCircleIcon
                                className="size-5 shrink-0 text-emerald-400 mt-0.5"
                                aria-hidden="true"
                              />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
