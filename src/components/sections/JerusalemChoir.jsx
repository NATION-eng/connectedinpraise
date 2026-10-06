import React from "react";
import { Music, ArrowUpRight, Award, Radio } from "lucide-react";
import { AuraRings } from "../ui/AuraRings";
import { LiquidButton } from "../ui/LiquidButton";
import {
  CustomGoldenCrownEmoji,
  CustomPraiseHandsEmoji,
  CustomInclusionStarEmoji,
} from "../ui/CustomEmoji";

import { RevealMotion, StaggerContainer, StaggerItem } from "../ui/RevealMotion";

export function JerusalemChoir() {
  return (
    <section id="choir" className="relative pt-28 sm:pt-36 md:pt-40 pb-20 sm:pb-32 overflow-hidden bg-[#0D0404] text-white min-h-screen">
      {/* Radiant Sunburst Glow Background Canvas */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/images/cip-sunburst-bg.jpg"
          alt="Sunburst Ambient Backdrop"
          className="w-full h-full object-cover object-center opacity-15 filter blur-sm scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0404] via-[#1A0405]/95 to-[#0D0404]" />
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-primary/10 rounded-full blur-[160px] pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[160px] pointer-events-none animate-pulse-glow-slow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Image with Concentric Aura & Floating Badge */}
          <RevealMotion className="lg:col-span-6 relative" delay={0.1}>
            <AuraRings size="md" className="opacity-30" />

            <div className="relative z-10 rounded-3xl overflow-hidden border border-primary/30 shadow-2xl group">
              <img
                src="/images/jerusalem-choir.jpg"
                alt="Jerusalem Choir in worship performance"
                className="w-full h-[400px] sm:h-[500px] object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-black/70 backdrop-blur-xl p-4 sm:p-5 rounded-2xl border border-primary/35 flex items-center justify-between shadow-2xl">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/40 text-primary">
                    <Music className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-black text-white text-base sm:text-lg">
                      Jerusalem Choir
                    </h4>
                    <p className="text-xs text-primary font-bold">Vision Bearer & Host Since 2019</p>
                  </div>
                </div>
                <div className="hidden sm:block text-right">
                  <span className="text-[10px] uppercase tracking-wider text-white/60 font-bold block">
                    Focus
                  </span>
                  <span className="text-xs text-white font-extrabold">Worship Evangelism</span>
                </div>
              </div>
            </div>
          </RevealMotion>

          {/* Right Column: Narrative, Accomplishments & CTA */}
          <RevealMotion className="lg:col-span-6" delay={0.2}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-1 bg-gradient-to-r from-secondary to-primary rounded-full" />
              <span className="font-montserrat text-xs sm:text-sm uppercase tracking-[0.2em] text-primary font-black">
                Meet the Host
              </span>
            </div>

            <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl text-white leading-[1.15] mb-6">
              Jerusalem Choir
              <span className="block text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-sunburst to-secondary mt-2">
                Ministers of Grace & Reconciliation
              </span>
            </h2>

            <div className="relative pl-6 border-l-2 border-primary/50 mb-7 py-2">
              <p className="font-montserrat italic font-medium text-base sm:text-lg text-white/90 leading-relaxed">
                &ldquo;Creating an atmosphere where people encounter God personally, forge unbreakable
                bonds, and experience the liberating power of authentic praise.&rdquo;
              </p>
            </div>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-5 font-normal">
              Jerusalem Choir is far more than a musical aggregation — it is a vibrant evangelical movement.
              Through consecrated vocals, rigorous musical excellence, and deep compassion for the
              marginalized, the choir has touched tens of thousands of worshippers across Port Harcourt and
              beyond.
            </p>

            <p className="text-white/70 text-sm leading-relaxed mb-8 font-normal">
              For 2026, the choir is dedicating its flagship concert to{" "}
              <span className="font-atkinson text-primary font-bold">breaking disability barriers</span>,
              welcoming every voice into God&apos;s holy sanctuary.
            </p>

            {/* Key Accomplishments Badges */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-4 w-full mb-8">
              <div className="bg-black/50 backdrop-blur-xl p-3 sm:p-5 rounded-2xl text-center border border-white/10 hover:border-primary/50 flex flex-col items-center justify-center min-w-0 shadow-md transition-all duration-700 delay-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1.5 hover:shadow-[0_10px_25px_rgba(255,200,59,0.2)]">
                <CustomGoldenCrownEmoji className="w-6 h-6 mb-1.5 flex-shrink-0" />
                <div className="font-montserrat font-black text-xs sm:text-sm text-white truncate w-full">
                  Annual
                </div>
                <div className="text-[10px] text-white/60 uppercase tracking-wider truncate w-full mt-0.5 font-bold">
                  Since 2019
                </div>
              </div>

              <div className="bg-black/50 backdrop-blur-xl p-3 sm:p-5 rounded-2xl text-center border border-white/10 hover:border-primary/50 flex flex-col items-center justify-center min-w-0 shadow-md transition-all duration-700 delay-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1.5 hover:shadow-[0_10px_25px_rgba(255,200,59,0.2)]">
                <CustomPraiseHandsEmoji className="w-6 h-6 mb-1.5 flex-shrink-0" />
                <div className="font-montserrat font-black text-xs sm:text-sm text-white truncate w-full">
                  100%
                </div>
                <div className="text-[10px] text-white/60 uppercase tracking-wider truncate w-full mt-0.5 font-bold">
                  Inclusion
                </div>
              </div>

              <div className="bg-black/50 backdrop-blur-xl p-3 sm:p-5 rounded-2xl text-center border border-white/10 hover:border-primary/50 flex flex-col items-center justify-center min-w-0 shadow-md transition-all duration-700 delay-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1.5 hover:shadow-[0_10px_25px_rgba(255,200,59,0.2)]">
                <CustomInclusionStarEmoji className="w-6 h-6 mb-1.5 flex-shrink-0" />
                <div className="font-montserrat font-black text-xs sm:text-sm text-white truncate w-full">
                  Evangelism
                </div>
                <div className="text-[10px] text-white/60 uppercase tracking-wider truncate w-full mt-0.5 font-bold">
                  Worship Focus
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div>
              <LiquidButton
                href="https://youtube.com/@connectedinpraise?si=JpVeFaqQFqMPO_fL"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="!py-3 !px-8 text-sm"
              >
                <Radio className="w-4 h-4 text-primary group-hover:text-obsidian animate-pulse" />
                <span>Explore Choir Archives</span>
              </LiquidButton>
            </div>
          </RevealMotion>
        </div>
      </div>
    </section>
  );
}
