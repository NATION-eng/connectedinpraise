import React from "react";
import { Ear, Accessibility, HandMetal, Eye, Quote, CheckCircle, HeartHandshake } from "lucide-react";
import { AuraRings } from "../ui/AuraRings";
import { RevealMotion, StaggerContainer, StaggerItem } from "../ui/RevealMotion";

const pillars = [
  {
    icon: <Ear className="w-7 h-7 text-primary" />,
    title: "Hearing & Deaf Inclusion",
    tagline: "Stage & Screen Sign Interpretation",
    description:
      "Certified Nigerian Sign Language (NSL) interpreters embedded directly on main stage and live screens, ensuring every lyrical anthem and preached word is fully accessible.",
    features: ["Stage Sign Language interpreters", "Projected live captions", "Vibrational bass experience"],
  },
  {
    icon: <Accessibility className="w-7 h-7 text-secondary" />,
    title: "Mobility & Physical Access",
    tagline: "100% Step-Free Campus Transit",
    description:
      "Engineered wheelchair ramps, reserved front-row priority zones at Convocation Arena, step-free access aisles, barrier-free restrooms, and dedicated hospitality marshals.",
    features: ["Step-free arena ramps", "Reserved priority front seating", "Accessible parking & assistance"],
  },
  {
    icon: <HandMetal className="w-7 h-7 text-primary" />,
    title: "Active Ministry & Signing Choir",
    tagline: "Dignity-First Leadership",
    description:
      "Possibility is always bigger than limitation. Persons with disabilities are not spectators; they are featured choir ministers, vocalists, and vital leaders in God's holy house.",
    features: ["Full inclusion in choir roster", "Hands-in-praise worship signing", "Honored ministry leaders"],
  },
  {
    icon: <Eye className="w-7 h-7 text-secondary" />,
    title: "Visual & Low-Vision Access",
    tagline: "High-Contrast & Audio Guidance",
    description:
      "Dedicated sighted guides to assist visually impaired worshippers from arrival to seating, clear high-contrast materials, and descriptive audio worship guidance.",
    features: ["Dedicated sighted guides", "High-contrast digital portal", "Audio-described event guides"],
  },
];

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 md:py-36 overflow-hidden bg-[#0D0404] text-white">
      {/* Radiant Sunburst Glow Background Canvas */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/images/cip-sunburst-bg.jpg"
          alt="Sunburst Ambient Backdrop"
          className="w-full h-full object-cover object-top opacity-15 filter blur-sm scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0404] via-[#1A0405]/90 to-[#0D0404]" />
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[160px] animate-pulse-glow" />
        <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[160px] animate-pulse-glow-slow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <RevealMotion className="flex items-center gap-3 mb-4">
          <div className="w-12 h-1 bg-gradient-to-r from-secondary to-primary rounded-full" />
          <span className="font-montserrat text-xs sm:text-sm uppercase tracking-[0.22em] text-primary font-black">
            Adventist Possibility Ministries (APM)
          </span>
        </RevealMotion>

        {/* Narrative & Quote Split */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-16 sm:mb-24">
          <RevealMotion className="lg:col-span-7" delay={0.1}>
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl text-white leading-[1.15] mb-6">
              Breaking Disability Barriers{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-sunburst to-secondary">
                in Holy Praise
              </span>
            </h2>
            <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              This year, <strong className="text-white font-black">Connected in Praise</strong> is
              strategically partnering with <strong className="text-primary font-black">Adventist Possibility Ministries (APM)</strong> to
              deliberately dismantle every physical, sensory, and social obstacle so that worshippers with disabilities are honored as central ministers of grace.
            </p>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed font-normal">
              We believe every person is crafted in the divine image of God with limitless spiritual potential.
              Through consecrated vocals, intentional barrier-free architecture, and unconditional love, we unite as one harmonious body before the Throne of Grace.
            </p>
          </RevealMotion>

          <RevealMotion className="lg:col-span-5 relative" delay={0.25}>
            {/* Concentric Rotating Rings Framing the Quote */}
            <AuraRings size="sm" className="opacity-30" />

            <div className="relative z-10 bg-black/55 backdrop-blur-2xl p-6 sm:p-10 rounded-3xl border border-primary/30 shadow-[0_12px_40px_rgba(0,0,0,0.6)] group hover:border-primary/60 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1.5">
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-primary/40 mb-4" />
              <blockquote className="font-montserrat font-bold text-lg sm:text-xl text-white italic leading-relaxed mb-6">
                &ldquo;Praise has no barrier. Where there is a heart to worship, there is a way to glorify God together as one.&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/40">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-montserrat font-black text-white text-sm">Every Voice Matters</h4>
                  <p className="text-xs text-primary/90 font-medium">Core Principle of Possibility Ministry</p>
                </div>
              </div>
            </div>
          </RevealMotion>
        </div>

        {/* 4 Official Disability Category Pillars (From Flyer) */}
        <div>
          <RevealMotion className="text-center mb-10" delay={0.1}>
            <span className="font-montserrat text-xs uppercase tracking-[0.24em] text-secondary font-black">
              Official Inclusion Infrastructure
            </span>
            <h3 className="font-montserrat font-black text-2xl sm:text-3xl text-white mt-1">
              4 Pillars of Accessibility at Convocation Arena
            </h3>
          </RevealMotion>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {pillars.map((pillar, idx) => (
              <StaggerItem key={idx}>
                <div
                  className="bg-black/55 backdrop-blur-xl p-6 sm:p-7 rounded-3xl border border-milk/10 hover:border-primary/50 shadow-xl transition-all duration-500 delay-75 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(255,200,59,0.2)] group flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="w-13 h-13 rounded-2xl bg-white/5 border border-milk/15 group-hover:border-primary/50 group-hover:bg-primary/15 transition-all duration-500 delay-75 ease-[cubic-bezier(0.23,1,0.32,1)] flex items-center justify-center mb-5">
                      {pillar.icon}
                    </div>
                    <h4 className="font-montserrat font-black text-base sm:text-lg text-milk mb-1 group-hover:text-primary transition-colors duration-300">
                      {pillar.title}
                    </h4>
                    <span className="text-[11px] font-bold text-secondary uppercase tracking-wider block mb-3">
                      {pillar.tagline}
                    </span>
                    <p className="text-xs sm:text-sm text-milk/75 leading-relaxed font-normal mb-5">
                      {pillar.description}
                    </p>
                  </div>

                  <ul className="space-y-2 pt-4 border-t border-milk/10 text-xs font-semibold text-milk/85">
                    {pillar.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
