import type { StaticImageData } from "next/image";
import memojiAvatar from "@/assets/images/memoji-avatar-1.png";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";

type Recommendation = {
  name: string;
  position: string;
  organization: string;
  text: string;
  avatar?: StaticImageData;
  initials?: string;
};

const recommendations: Recommendation[] = [
  {
    name: "Harneet Singh",
    position: "Co-founder",
    organization: "TechCurators",
    text: "Without a doubt, I confidently recommend Muhmmad Saleh to join your team. As a dedicated and hardworking Intern and an all-rounder, I know that he will be a beneficial addition to your organization.",
    avatar: memojiAvatar,
  },
  {
    name: "Pooja Saroj",
    position: "Senior HR Executive",
    organization: "SDLC Corp · Codefork Technologies Pvt Ltd",
    text: "I found Muhmmad to be sincere, meticulous, and a keen learner. He built strong working relationships with his teammates and supervisors, and I highly recommend him for future opportunities. He would be a great asset to any organization.",
    initials: "PS",
  },
];

export const TestimonialsSection = () => (
  <section className="py-16 lg:py-24">
    <div className="container">
      <SectionHeader
        eyebrow="Recommendations"
        title="Words from colleagues and leadership"
        description="Recommendations from people I worked with at TechCurators and SDLC Corp."
      />
      <div className="mt-12 grid gap-6 lg:mt-20 md:grid-cols-2">
        {recommendations.map((recommendation) => (
          <Card key={recommendation.name} className="p-6 md:p-8">
            <div className="flex items-center gap-4">
              <div className="inline-flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-700">
                {recommendation.avatar ? (
                  <Image src={recommendation.avatar} alt={recommendation.name} className="max-h-full" />
                ) : (
                  <span aria-hidden="true" className="font-semibold text-emerald-200">{recommendation.initials}</span>
                )}
              </div>
              <div>
                <div className="font-semibold">{recommendation.name}</div>
                <div className="text-sm text-white/60">{recommendation.position}</div>
                <div className="text-sm text-white/60">{recommendation.organization}</div>
              </div>
            </div>
            <p className="mt-4 text-sm md:mt-6 md:text-base">{recommendation.text}</p>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
