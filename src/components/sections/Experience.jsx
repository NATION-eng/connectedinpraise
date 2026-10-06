import React, { useState } from "react";
import { Calendar, Clock, MapPin, Radio, CheckCircle2, ChevronRight } from "lucide-react";
import { scheduleData } from "../../data/schedule";
import { LiquidButton } from "../ui/LiquidButton";
import { RevealMotion, StaggerContainer, StaggerItem } from "../ui/RevealMotion";

export function Experience() {
  const [activeDayIdx, setActiveDayIdx] = useState(0);
  const currentSchedule = scheduleData[activeDayIdx];

  return (
    <section id="experience" className="relative py-20 sm:py-28 md:py-36 overflow-hidden bg-[#0D0404] text-white">
      {/* Radiant Sunburst Glow Background Canvas */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/images/cip-sunburst-bg.jpg"
          alt="Sunburst Ambient Backdrop"
          className="w-full h-full object-cover object-center opacity-15 filter blur-sm scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0404] via-[#1A0405]/95 to-[#0D0404]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-primary/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <RevealMotion className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-xl rounded-full px-4 sm:px-5 py-2 mb-4 border border-primary/30">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="font-montserrat text-xs uppercase tracking-[0.2em] text-white/80 font-bold">
              4–7 November 2026
            </span>
          </div>
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            The 2026{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-sunburst to-secondary">
              Mega Program
            </span>
          </h2>
          <p className="text-white/75 max-w-xl mx-auto text-sm sm:text-base font-normal">
            Four consecrated days. One unified movement. Explore the daily itinerary and prepare your
            heart for an encounter with God.
          </p>
        </RevealMotion>

        {/* Day Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 max-w-3xl mx-auto mb-12 w-full">
          {scheduleData.map((item, idx) => {
            const isActive = activeDayIdx === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveDayIdx(idx)}
                className={`flex flex-col items-center p-3.5 sm:px-6 sm:py-4 rounded-2xl transition-all duration-300 cursor-pointer w-full text-center select-none ${
                  isActive
                    ? "bg-black/80 backdrop-blur-2xl border-2 border-primary shadow-[0_0_25px_rgba(255,200,59,0.35)] scale-[1.03]"
                    : "bg-black/35 backdrop-blur-xl border border-white/10 opacity-70 hover:opacity-100 hover:border-primary/40"
                }`}
              >
                <span
                  className={`font-montserrat font-black text-sm sm:text-base ${
                    isActive ? "text-primary" : "text-white"
                  }`}
                >
                  {item.day}
                </span>
                <span className="text-[11px] text-white/80 font-bold mt-0.5">{item.date}</span>
                <span className="text-[10px] text-secondary font-black mt-1 uppercase tracking-wider">{item.timeSpan}</span>
              </button>
            );
          })}
        </div>

        {/* Active Day Detail Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/60 backdrop-blur-2xl p-6 sm:p-10 rounded-3xl border border-primary/30 shadow-2xl relative overflow-hidden transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <span className="font-montserrat text-xs font-black uppercase tracking-[0.2em] text-secondary">
                  {currentSchedule.date} · {currentSchedule.day}
                </span>
                <h3 className="font-montserrat font-black text-2xl sm:text-3xl text-white mt-1">
                  {currentSchedule.theme}
                </h3>
              </div>

              <div className="flex items-center gap-2 bg-primary/10 border border-primary/30 px-4 py-2 rounded-full self-start md:self-center">
                <Clock className="w-4 h-4 text-primary" />
                <span className="font-montserrat text-xs sm:text-sm font-extrabold text-primary">
                  {currentSchedule.timeSpan}
                </span>
              </div>
            </div>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed font-normal my-6">
              {currentSchedule.description}
            </p>

            {/* Key Program Highlights */}
            <div className="space-y-3 mb-8">
              <h4 className="font-montserrat font-black text-xs uppercase tracking-wider text-white/70">
                Key Program Focus:
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {currentSchedule.highlights?.map((highlight, hIdx) => (
                  <div
                    key={hIdx}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-white/90 font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Venue & Action Footer */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-white/70 text-xs sm:text-sm font-semibold">
                <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
                <span>Convocation Arena, Rivers State University, Port Harcourt</span>
              </div>

              <LiquidButton
                href="https://youtube.com/@connectedinpraise?si=JpVeFaqQFqMPO_fL"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="!py-2.5 !px-7 !text-xs self-start sm:self-auto"
              >
                <Radio className="w-3.5 h-3.5 text-primary group-hover:text-obsidian animate-pulse" />
                <span>Watch Session Live</span>
              </LiquidButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
