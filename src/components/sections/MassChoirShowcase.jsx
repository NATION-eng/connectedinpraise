import React, { useState } from "react";
import { Music, ArrowRight, Heart, Sparkles, X, Info, CheckCircle2, Eye, EyeOff } from "lucide-react";
import { RevealMotion } from "../ui/RevealMotion";
import { useNavigation } from "../../context/NavigationContext";

export function MassChoirShowcase() {
  const { navigate } = useNavigation();
  const [showInsightModal, setShowInsightModal] = useState(false);
  const [scrimActive, setScrimActive] = useState(true);

  return (
    <section className="relative py-10 xs:py-14 sm:py-20 bg-[#0E0304] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[350px] sm:h-[450px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        {/* Main Showcase Canvas Card */}
        <RevealMotion>
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-primary/30 shadow-[0_20px_60px_rgba(0,0,0,0.85)] group min-h-[480px] xs:min-h-[520px] sm:min-h-[600px] md:min-h-[640px] flex flex-col justify-between">
            {/* 1. Underlying High-Resolution Photo */}
            <img
              src="/images/mass-choir-scrim.jpg"
              alt="Connected in Praise Mass Choir in consecrated worship"
              className="absolute inset-0 w-full h-full object-cover object-[center_18%] filter brightness-100 group-hover:scale-[1.02] transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
            />

            {/* 2. THE GRADIENT SCRIM (Cinematography & Google Material Design) */}
            {/* Top/Center stays 100% transparent: Choir faces & lighting shine through with zero blur or obstruction.
                Bottom/Corner fades into darkness: Directional gradient smoothly darkens only the text area for maximum contrast. */}
            {scrimActive && (
              <>
                {/* Vertical bottom-to-top scrim: non-linear falloff */}
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(to top, #0E0304 0%, rgba(14,3,4,0.96) 24%, rgba(14,3,4,0.78) 46%, rgba(14,3,4,0.35) 68%, rgba(14,3,4,0.06) 85%, transparent 100%)",
                  }}
                />
                {/* Subtle horizontal/corner radial gradient for enhanced left-aligned text legibility */}
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-500 hidden sm:block"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(14,3,4,0.88) 0%, rgba(14,3,4,0.5) 45%, transparent 75%)",
                  }}
                />
                {/* Top subtle edge vignette for smooth transition from previous section */}
                <div
                  className="absolute top-0 inset-x-0 h-20 pointer-events-none"
                  style={{
                    background: "linear-gradient(to bottom, rgba(14,3,4,0.6) 0%, transparent 100%)",
                  }}
                />
              </>
            )}

            {/* 3. Top Action Bar: Live Badge & Interactive Design Insight Trigger */}
            <div className="relative z-10 p-3.5 xs:p-5 sm:p-7 flex items-center justify-between gap-3">
              {/* Category Pill */}
              <div className="inline-flex items-center gap-1.5 xs:gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-primary/40 text-milk shadow-lg">
                <Music className="w-3.5 h-3.5 text-primary animate-pulse" />
                <span className="font-montserrat text-[10px] xs:text-xs uppercase tracking-widest font-black">
                  Mass Choir Showcase
                </span>
              </div>

              {/* Interactive "Design Insight" Pill Button */}
              <button
                type="button"
                onClick={() => setShowInsightModal(true)}
                className="inline-flex items-center gap-1.5 xs:gap-2 px-3 xs:px-4 py-1.5 rounded-full bg-primary/20 hover:bg-primary/30 text-primary border border-primary/50 backdrop-blur-xl font-montserrat text-[10px] xs:text-xs font-black uppercase tracking-wider shadow-lg hover:shadow-[0_0_20px_rgba(255,200,59,0.4)] active:scale-95 transition-all cursor-pointer"
                title="Learn about the Google Material Design Gradient Scrim effect"
              >
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="hidden xs:inline">Design Insight:</span>
                <span>The Gradient Scrim</span>
              </button>
            </div>

            {/* 4. Bottom Text Anchor: Sits on the Scrim with Crisp Contrast (No solid box needed!) */}
            <div className="relative z-10 p-4 xs:p-6 sm:p-10 md:p-12 max-w-3xl">
              <div className="space-y-2.5 xs:space-y-3.5 sm:space-y-4">
                <div className="inline-flex items-center gap-2 text-secondary font-montserrat text-[10px] xs:text-xs uppercase tracking-[0.2em] font-black">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  <span>Jerusalem Choir & APM Mass Ensemble</span>
                </div>

                <h3 className="font-montserrat font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-[1.15] drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
                  Over 100 Consecrated Voices.{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-sunburst to-secondary">
                    One Sacred Accord.
                  </span>
                </h3>

                <p className="text-xs xs:text-sm sm:text-base text-white/90 leading-relaxed font-sans max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                  Witness the anointed power of Port Harcourt City’s flagship choral movement. Partnering with
                  Adventist Possibility Ministries, Connected in Praise tears down barriers so every worshipper—regardless of
                  ability—stands unified in triumphant, barrier-free adoration.
                </p>

                {/* Action Buttons */}
                <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-2.5 xs:gap-3.5">
                  <button
                    type="button"
                    onClick={() => navigate("/choir")}
                    className="inline-flex items-center justify-center gap-2 px-5 xs:px-6 py-2.5 xs:py-3 rounded-full bg-gradient-to-r from-primary via-sunburst to-secondary text-obsidian font-montserrat font-black text-xs uppercase tracking-wider shadow-xl hover:shadow-[0_4px_25px_rgba(255,200,59,0.5)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <span>Meet The Choir</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => navigate("/gallery")}
                    className="inline-flex items-center justify-center gap-2 px-4 xs:px-5 py-2.5 xs:py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-md font-montserrat font-bold text-xs uppercase tracking-wider active:scale-95 transition-all cursor-pointer"
                  >
                    <span>View Concert Archives</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => navigate("/donate")}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-secondary hover:text-white text-xs font-montserrat font-bold transition-colors cursor-pointer"
                  >
                    <Heart className="w-3.5 h-3.5 fill-current" />
                    <span>Support APM Inclusion</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </RevealMotion>
      </div>

      {/* 5. Interactive Modal / Drawer: "What Makes It Work: The 'Gradient Scrim'" */}
      {showInsightModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 xs:p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setShowInsightModal(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl bg-gradient-to-b from-[#1C0508] via-[#120305] to-[#0A0203] border-2 border-primary/50 rounded-2xl sm:rounded-3xl p-5 xs:p-6 sm:p-8 shadow-[0_25px_70px_rgba(255,200,59,0.25)] text-white animate-scale-up"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowInsightModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10"
              aria-label="Close insight modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] xs:text-[11px] font-montserrat font-bold uppercase tracking-wider text-secondary block">
                  Design Architecture & Visual Science
                </span>
                <h4 className="font-montserrat font-black text-lg xs:text-xl text-white">
                  What Makes It Work: The &ldquo;Gradient Scrim&rdquo;
                </h4>
              </div>
            </div>

            {/* Intro text from design spec */}
            <p className="text-xs xs:text-sm text-white/80 leading-relaxed mb-4">
              The secret behind this effect is the <strong>Scrim</strong> (a term from cinematography and Google Material Design):
            </p>

            {/* The 2 Core Pillars */}
            <div className="space-y-3 mb-6">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-xs xs:text-sm leading-relaxed">
                  <strong className="text-white block font-bold">Top/Center stays 100% transparent:</strong>
                  <span className="text-white/75">
                    The photo shines through in full resolution with zero blur or obstruction. Every choir member&apos;s face and the stage lighting remain crisp and vibrant.
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                <div className="text-xs xs:text-sm leading-relaxed">
                  <strong className="text-white block font-bold">Bottom/Corner fades into darkness:</strong>
                  <span className="text-white/75">
                    A directional gradient smoothly darkens only the area where the text sits, guaranteeing high contrast and readability without needing a solid box or card.
                  </span>
                </div>
              </div>
            </div>

            {/* Live Interactive Scrim Demonstrator Toggle */}
            <div className="p-4 rounded-xl bg-black/60 border border-primary/30 flex items-center justify-between gap-4">
              <div className="min-w-0">
                <span className="font-montserrat font-bold text-xs uppercase tracking-wider text-primary block">
                  Interactive Live Test
                </span>
                <span className="text-[11px] xs:text-xs text-white/70">
                  Toggle the scrim on the underlying banner to see the difference
                </span>
              </div>

              <button
                type="button"
                onClick={() => setScrimActive(!scrimActive)}
                className={`flex-shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-montserrat font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                  scrimActive
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                    : "bg-rose-500/20 text-rose-400 border border-rose-500/40"
                }`}
              >
                {scrimActive ? (
                  <>
                    <Eye className="w-3.5 h-3.5" />
                    <span>Scrim ON</span>
                  </>
                ) : (
                  <>
                    <EyeOff className="w-3.5 h-3.5" />
                    <span>Scrim OFF</span>
                  </>
                )}
              </button>
            </div>

            {/* Modal Footer */}
            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-end">
              <button
                type="button"
                onClick={() => setShowInsightModal(false)}
                className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-montserrat font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
