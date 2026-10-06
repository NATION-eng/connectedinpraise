import React, { useState, useTransition, useCallback, useMemo } from "react";
import { Sparkles, Heart } from "lucide-react";
import { praiseReasons } from "../../data/reasons";
import { Waveform } from "../ui/Waveform";
import {
  CustomGoldenCrownEmoji,
  CustomWorshipNotesEmoji,
  CustomSacredHeartEmoji,
  CustomPraiseHandsEmoji,
  CustomHolyFlameEmoji,
  CustomSparkleEmoji,
} from "../ui/CustomEmoji";

const iconMap = {
  saved: <CustomGoldenCrownEmoji className="w-6 h-6" />,
  story: <CustomWorshipNotesEmoji className="w-6 h-6" />,
  nobarrier: <CustomSacredHeartEmoji className="w-6 h-6" />,
  grateful: <CustomPraiseHandsEmoji className="w-6 h-6" />,
  neverleft: <CustomHolyFlameEmoji className="w-6 h-6" />,
};

export function WhyPraise() {
  const [selectedId, setSelectedId] = useState(praiseReasons[0].id);
  const [, startTransition] = useTransition();

  const handleSelect = useCallback((id) => {
    startTransition(() => {
      setSelectedId(id);
    });
  }, []);

  const activeReason = useMemo(
    () => praiseReasons.find((r) => r.id === selectedId) || praiseReasons[0],
    [selectedId]
  );

  return (
    <section id="why-praise" className="relative py-20 sm:py-28 md:py-36 overflow-hidden bg-obsidian">
      {/* Background Ambient Aura */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso via-obsidian to-espresso" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/10 rounded-full blur-[150px] pointer-events-none animate-pulse-glow" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 bg-black/50 backdrop-blur-xl rounded-full px-4 sm:px-5 py-2 mb-4 border border-primary/30">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="font-montserrat text-xs uppercase tracking-[0.2em] text-white/80 font-bold">
              Interactive Voice Engine
            </span>
          </div>
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Why Do You{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-sunburst to-secondary">
              Praise?
            </span>
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-sm sm:text-base font-normal">
            Every voice carries an eternal frequency. Tap a pillar that resonates with your soul to
            reveal its connection to our collective worship.
          </p>
        </div>

        {/* 5 Interactive Selectable Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 mb-12 sm:mb-16 max-w-5xl mx-auto">
          {praiseReasons.map((reason) => {
            const isSelected = selectedId === reason.id;
            return (
              <button
                key={reason.id}
                type="button"
                onClick={() => handleSelect(reason.id)}
                className={`p-4 sm:p-6 rounded-2xl sm:rounded-3xl flex flex-col items-center text-center transition-[transform,opacity,border-color,background-color] duration-150 transform-gpu touch-manipulation cursor-pointer last:col-span-2 md:last:col-span-1 select-none ${
                  isSelected
                    ? "bg-black/80 backdrop-blur-2xl border-2 border-primary shadow-[0_0_25px_rgba(255,200,59,0.35)] scale-[1.03] opacity-100"
                    : "bg-black/35 backdrop-blur-xl border border-white/10 hover:border-primary/30 hover:-translate-y-0.5 opacity-70 hover:opacity-100"
                }`}
                aria-pressed={isSelected}
              >
                <div
                  className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 transition-colors ${
                    isSelected
                      ? "bg-primary text-obsidian shadow-md"
                      : "bg-white/5 text-primary"
                  }`}
                >
                  {iconMap[reason.id] || <Heart className="w-5 h-5 sm:w-6 sm:h-6" />}
                </div>
                <h4 className="font-montserrat text-xs sm:text-sm font-extrabold text-white leading-snug">
                  {reason.title}
                </h4>
                <span className="text-[9px] sm:text-[10px] text-white/60 mt-1 uppercase tracking-wider font-semibold">
                  {reason.short}
                </span>

                {isSelected && (
                  <div className="mt-2.5 sm:mt-3 w-8 h-1 rounded-full bg-primary shadow-[0_0_10px_#FFC83B]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Expanded Revelation Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-black/55 backdrop-blur-2xl p-6 sm:p-12 rounded-3xl border border-primary/35 shadow-2xl relative overflow-hidden text-center transition-opacity duration-200">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-primary/15 to-transparent rounded-full blur-2xl pointer-events-none" />

            <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-[11px] sm:text-xs font-montserrat font-bold text-primary uppercase tracking-[0.16em] mb-4">
              Scriptural Anchor · {activeReason.verse}
            </div>

            <h3 className="font-montserrat font-black text-2xl sm:text-3xl text-white mb-4">
              &ldquo;{activeReason.title}&rdquo;
            </h3>

            <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal max-w-xl mx-auto mb-6">
              {activeReason.detail}
            </p>

            <div className="h-10 max-w-xs mx-auto mb-5 opacity-80">
              <Waveform bars={24} className="h-full" />
            </div>

            <p className="text-xs sm:text-sm text-primary font-bold tracking-wide flex items-center justify-center gap-2">
              <CustomSparkleEmoji className="w-3.5 h-3.5 text-secondary" />
              <span>Your sound matters. Your story belongs in this praise.</span>
              <CustomSparkleEmoji className="w-3.5 h-3.5 text-secondary" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
