import React from "react";
import { Ear, Accessibility, HandMetal, Eye, Quote, CheckCircle, HeartHandshake, Heart, ArrowRight } from "lucide-react";
import { AuraRings } from "../ui/AuraRings";
import { RevealMotion, StaggerContainer, StaggerItem } from "../ui/RevealMotion";
import { useNavigation } from "../../context/NavigationContext";

const pillars = [
  {
    icon: <Ear className="w-6 h-6 text-primary" />,
    title: "Hearing & Deaf Inclusion",
    tagline: "Stage & Screen Sign Interpretation",
    description:
      "Certified Nigerian Sign Language (NSL) interpreters embedded directly on the main stage and live broadcast screens, ensuring every lyrical anthem and preached word is fully accessible.",
    features: ["Stage Sign Language interpreters", "Projected live captions", "Vibrational bass experience"],
  },
  {
    icon: <Accessibility className="w-6 h-6 text-secondary" />,
    title: "Mobility & Physical Access",
    tagline: "100% Step-Free Campus Transit",
    description:
      "Engineered wheelchair ramps, reserved front-row priority zones at Convocation Arena, step-free access aisles, barrier-free restrooms, and dedicated hospitality marshals.",
    features: ["Step-free arena ramps", "Reserved priority front seating", "Accessible parking & assistance"],
  },
  {
    icon: <HandMetal className="w-6 h-6 text-primary" />,
    title: "Active Ministry & Signing Choir",
    tagline: "Dignity-First Leadership",
    description:
      "Possibility is always bigger than limitation. Persons with disabilities are not spectators; they are featured choir ministers, vocalists, and vital leaders in God's holy house.",
    features: ["Full inclusion in choir roster", "Hands-in-praise worship signing", "Honored ministry leaders"],
  },
  {
    icon: <Eye className="w-6 h-6 text-secondary" />,
    title: "Visual & Low-Vision Access",
    tagline: "High-Contrast & Audio Guidance",
    description:
      "Dedicated sighted guides to assist visually impaired worshippers from arrival to seating, clear high-contrast materials, and descriptive audio worship guidance.",
    features: ["Dedicated sighted guides", "High-contrast digital portal", "Audio-described event guides"],
  },
];

export function About() {
  const { navigate } = useNavigation();

  return (
    <section
      id="about"
      className="relative pt-28 xs:pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-28 overflow-hidden bg-[#0D0404] text-white min-h-screen"
    >
      {/* Radiant Sunburst Glow Background Canvas */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <img
          src="/images/cip-sunburst-bg.jpg"
          alt="Sunburst Ambient Backdrop"
          className="w-full h-full object-cover object-top opacity-15 filter blur-sm scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0404] via-[#1A0405]/90 to-[#0D0404]" />
        <div className="absolute top-1/4 -left-20 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-primary/10 rounded-full blur-[160px] animate-pulse-glow" />
        <div className="absolute bottom-10 right-0 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-secondary/15 rounded-full blur-[160px] animate-pulse-glow-slow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Eyebrow Badge - Responsive on Narrow Screens */}
        <RevealMotion className="mb-3 xs:mb-4 sm:mb-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/15 border border-primary/30 max-w-full shadow-md">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse flex-shrink-0" />
            <span className="font-montserrat text-[10px] xs:text-xs uppercase tracking-wider text-primary font-black truncate">
              Adventist Possibility Ministries (APM)
            </span>
          </div>
        </RevealMotion>

        {/* Narrative & Quote Split */}
        <div className="grid lg:grid-cols-12 gap-6 xs:gap-8 lg:gap-14 items-center mb-12 xs:mb-16 sm:mb-24">
          {/* Narrative Column */}
          <RevealMotion className="lg:col-span-7" delay={0.1}>
            <h2 className="font-montserrat font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-white leading-[1.18] mb-3.5 xs:mb-5 tracking-tight">
              Breaking Disability Barriers{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-sunburst to-secondary">
                in Holy Praise
              </span>
            </h2>

            <p className="text-white/90 text-sm xs:text-base sm:text-lg leading-relaxed mb-3.5 xs:mb-5 font-normal">
              This year, <strong className="text-white font-black">Connected in Praise</strong> is strategically partnering with{" "}
              <strong className="text-primary font-black">Adventist Possibility Ministries (APM)</strong> to deliberately dismantle
              every physical, sensory, and social obstacle so that worshippers with disabilities are honored as central ministers of grace.
            </p>

            <p className="text-white/75 text-xs xs:text-sm sm:text-base leading-relaxed font-normal">
              We believe every person is crafted in the divine image of God with limitless spiritual potential. Through consecrated
              vocals, intentional barrier-free architecture, and unconditional love, we unite as one harmonious body before the Throne of Grace.
            </p>
          </RevealMotion>

          {/* Quote Card Column - Optimized Padding & Border Radii for Mobile */}
          <RevealMotion className="lg:col-span-5 relative overflow-hidden rounded-2xl sm:rounded-3xl" delay={0.25}>
            <AuraRings size="sm" className="opacity-25" />

            <div className="relative z-10 bg-black/60 backdrop-blur-2xl p-5 xs:p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-primary/30 shadow-[0_12px_40px_rgba(0,0,0,0.7)] group hover:border-primary/60 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1">
              <Quote className="w-7 h-7 sm:w-10 sm:h-10 text-primary/50 mb-3 xs:mb-4" />
              <blockquote className="font-montserrat font-bold text-sm xs:text-base sm:text-lg md:text-xl text-white italic leading-relaxed mb-4 xs:mb-6">
                &ldquo;Praise has no barrier. Where there is a heart to worship, there is a way to glorify God together as one.&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 pt-3.5 xs:pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/40 flex-shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-montserrat font-black text-white text-xs xs:text-sm truncate">
                    Every Voice Matters
                  </h4>
                  <p className="text-[10px] xs:text-xs text-primary/90 font-medium truncate">
                    Core Principle of Possibility Ministry
                  </p>
                </div>
              </div>
            </div>
          </RevealMotion>
        </div>

        {/* 4 Official Disability Category Pillars */}
        <div>
          <RevealMotion className="text-center mb-6 xs:mb-8 sm:mb-12" delay={0.1}>
            <span className="font-montserrat text-[10px] xs:text-xs uppercase tracking-[0.20em] sm:tracking-[0.24em] text-secondary font-black block mb-1">
              Official Inclusion Infrastructure
            </span>
            <h3 className="font-montserrat font-black text-xl xs:text-2xl sm:text-3xl text-white">
              4 Pillars of Accessibility at Convocation Arena
            </h3>
            <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto mt-2 leading-relaxed">
              Every detail has been purposefully engineered to provide dignity, comfort, and direct participation for all worshippers.
            </p>
          </RevealMotion>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {pillars.map((pillar, idx) => (
              <StaggerItem key={idx}>
                <div className="bg-black/60 backdrop-blur-xl p-5 sm:p-6 lg:p-7 rounded-2xl sm:rounded-3xl border border-white/10 hover:border-primary/50 shadow-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(255,200,59,0.2)] group flex flex-col justify-between h-full">
                  <div>
                    {/* Pillar Icon Box */}
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/15 group-hover:border-primary/50 group-hover:bg-primary/15 transition-all duration-500 flex items-center justify-center mb-4">
                      {pillar.icon}
                    </div>

                    <h4 className="font-montserrat font-black text-base sm:text-lg text-white mb-1 group-hover:text-primary transition-colors duration-300 leading-snug">
                      {pillar.title}
                    </h4>

                    <span className="text-[10px] xs:text-[11px] font-bold text-secondary uppercase tracking-wider block mb-2.5">
                      {pillar.tagline}
                    </span>

                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal mb-4 sm:mb-5">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Checklist Items: items-start for proper multi-line icon alignment */}
                  <ul className="space-y-2 pt-3.5 border-t border-white/10 text-xs font-semibold text-white/90">
                    {pillar.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 leading-snug">
                        <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Bottom Interactive Support Action Banner for Mobile & Desktop */}
        <RevealMotion className="mt-10 xs:mt-14 sm:mt-20 rounded-2xl sm:rounded-3xl p-5 xs:p-6 sm:p-10 bg-gradient-to-r from-secondary/20 via-primary/15 to-secondary/10 border border-primary/30 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4 xs:gap-6">
          <div className="text-center sm:text-left space-y-1">
            <span className="text-[10px] xs:text-[11px] font-montserrat font-black uppercase tracking-widest text-secondary block">
              Dignity-First Inclusion
            </span>
            <h4 className="font-montserrat font-black text-lg xs:text-xl sm:text-2xl text-white">
              Partner With Us to Sponsor Accessibility
            </h4>
            <p className="text-xs sm:text-sm text-white/80 max-w-xl">
              Directly fund certified sign language interpreters, stage access ramps, and priority seating logistics.
            </p>
          </div>

          <div className="flex flex-col xs:flex-row items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => navigate("/donate")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-primary via-sunburst to-secondary text-obsidian font-montserrat font-black text-xs uppercase tracking-wider shadow-lg hover:shadow-[0_4px_25px_rgba(255,200,59,0.5)] active:scale-95 transition-all cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-current text-obsidian" />
              <span>Sponsor Inclusion</span>
            </button>

            <button
              type="button"
              onClick={() => navigate("/choir")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 font-montserrat font-bold text-xs uppercase tracking-wider active:scale-95 transition-all cursor-pointer"
            >
              <span>Meet Choir</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </RevealMotion>
      </div>
    </section>
  );
}
