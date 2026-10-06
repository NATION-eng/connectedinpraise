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
    <section id="why-praise" className="relative section-padding overflow-hidden bg-midnight-950">
      {/* Background Ambient Aura */}
      <div className="absolute inset-0 bg-gradient-to-b from-maroon-deep via-midnight-950 to-maroon-deep" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative container-max">
        {/* Section Title */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-4 border border-gold/25">
            <Sparkles className="w-4 h-4 text-gold-bright" />
            <span className="text-xs uppercase tracking-widest text-ivory/80 font-bold">
              Interactive Voice Engine
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-ivory mb-4">
            Why Do You <span className="text-gold-bright gold-text">Praise?</span>
          </h2>
          <p className="text-ivory/70 max-w-xl mx-auto text-sm sm:text-base font-normal">
            Every voice carries an eternal frequency. Tap a pillar that resonates with your soul to
            reveal its connection to our collective worship.
          </p>
        </div>

        {/* 5 Interactive Selectable Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 mb-12 max-w-5xl mx-auto">
          {praiseReasons.map((reason) => {
            const isSelected = selectedId === reason.id;
            return (
              <button
                key={reason.id}
                type="button"
                onClick={() => handleSelect(reason.id)}
                className={`p-4 sm:p-6 rounded-2xl sm:rounded-3xl flex flex-col items-center text-center transition-[transform,opacity,border-color,background-color] duration-150 transform-gpu touch-manipulation cursor-pointer last:col-span-2 md:last:col-span-1 select-none ${
                  isSelected
                    ? "glass-card-warm border-2 border-gold-bright shadow-[0_0_20px_rgba(255,196,0,0.25)] scale-[1.03] opacity-100"
                    : "glass-card border border-gold/15 hover:border-gold/35 hover:-translate-y-0.5 opacity-75 hover:opacity-100"
                }`}
                aria-pressed={isSelected}
              >
                <div
                  className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 transition-colors ${
                    isSelected
                      ? "bg-gold-bright text-maroon-deep shadow-md"
                      : "bg-white/5 text-gold-bright"
                  }`}
                >
                  {iconMap[reason.id] || <Heart className="w-5 h-5 sm:w-6 sm:h-6" />}
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-ivory leading-snug">
                  {reason.title}
                </h4>
                <span className="text-[9px] sm:text-[10px] text-ivory/60 mt-1 uppercase tracking-wider font-semibold">
                  {reason.short}
                </span>

                {isSelected && (
                  <div className="mt-2.5 sm:mt-3 w-8 h-1 rounded-full bg-gold-bright shadow-[0_0_8px_#FFC400]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Expanded Revelation Card */}
        <div className="max-w-3xl mx-auto">
          <div className="glass-card-warm p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-gold/30 shadow-2xl relative overflow-hidden text-center transition-opacity duration-200">
            <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-gold/15 to-transparent rounded-full blur-2xl pointer-events-none" />

            <div className="inline-block px-3 py-1 rounded-full border border-gold/30 bg-gold/10 text-[10px] sm:text-xs font-bold text-gold-bright uppercase tracking-widest mb-3">
              Scriptural Anchor · {activeReason.verse}
            </div>

            <h3 className="font-display font-bold text-2xl sm:text-3xl text-ivory mb-4">
              &ldquo;{activeReason.title}&rdquo;
            </h3>

            <p className="text-ivory/90 text-base sm:text-lg leading-relaxed font-normal max-w-xl mx-auto mb-6">
              {activeReason.detail}
            </p>

            <div className="h-10 max-w-xs mx-auto mb-4 opacity-75">
              <Waveform bars={24} className="h-full" />
            </div>

            <p className="text-xs sm:text-sm text-gold-bright font-semibold tracking-wide flex items-center justify-center gap-2">
              <CustomSparkleEmoji className="w-3.5 h-3.5 text-neon" />
              <span>Your sound matters. Your story belongs in this praise.</span>
              <CustomSparkleEmoji className="w-3.5 h-3.5 text-neon" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
