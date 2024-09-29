"use client"
import { title } from "process";
import ArrowRightIcon from "../assets/icons/arrow-up-right.svg"

import React from 'react'

export const Footer = () => {
  const footerLinks = [{
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/mohd-s-49268b21b/"

  }, {
    title: "Github",
    href: "https://github.com/MUHMMADSALEH/"

  }, {
    title: "Twitter",
    href: "https://x.com/MohdSAL71049253/"

  }, {
    title:"Leetcode",
    href:"https://leetcode.com/u/khansaleh/"
  }]
 
  return (<footer  className="relative z-10 overflow-x-clip">
    <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
    <div className="container">
      <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8 md:flex-row md:justify-between">
        <div className="text-white/40">&copy;2024. All rights reserved.</div>
        <nav className="flex flex-col gap-8 items-center md:flex-row">
          {
            footerLinks.map(link => (
              <a href={link?.href} key={link?.title} className="inline-flex items-center gap-1.5 cursor-pointer"><span className="font-semibold">{link?.title}</span>
                <ArrowRightIcon className="size-4" />
              </a>
            ))}
        </nav>
      </div>
    </div>
    
  </footer>


  )
};




