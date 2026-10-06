import React from "react";
import { ArrowRight, Radio, Sparkles, Heart } from "lucide-react";
import { Waveform } from "../ui/Waveform";
import { CustomSparkleEmoji } from "../ui/CustomEmoji";
import { useNavigation } from "../../context/NavigationContext";

export function CallToAction() {
  const { navigate } = useNavigation();

  return (
    <section className="relative py-16 xs:py-20 sm:py-32 overflow-hidden bg-gradient-to-b from-[#0E0304] via-[#140406] to-[#0E0304] border-t border-primary/20">
      {/* Background Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[750px] h-[350px] sm:h-[380px] bg-gradient-to-r from-secondary/15 via-primary/15 to-secondary/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Floating Sound Wave */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <Waveform bars={50} className="h-32 sm:h-44 w-full" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-xl rounded-full px-3.5 xs:px-5 py-1.5 xs:py-2 mb-4 xs:mb-6 border border-primary/30 shadow-[0_0_20px_rgba(255,200,59,0.2)]">
          <Sparkles className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-primary" />
          <span className="text-[10px] xs:text-xs uppercase tracking-widest text-primary font-black">
            Be Part of the Sacred Movement
          </span>
        </div>

        <h2 className="font-syne font-black text-2xl xs:text-3xl sm:text-5xl md:text-6xl text-white leading-tight mb-3.5 xs:mb-6">
          Your Voice Completes the{" "}
          <span className="bg-gradient-to-r from-primary via-sunburst to-secondary bg-clip-text text-transparent">
            Symphony
          </span>
        </h2>

        <p className="text-xs xs:text-sm sm:text-base md:text-lg text-white/85 max-w-2xl mx-auto mb-4 xs:mb-6 leading-relaxed font-normal px-1">
          Whether you join us physically at Convocation Arena, Rivers State University, or tune in
          digitally from across the globe — there is an anointed place reserved specifically for you.
        </p>

        <p className="text-[11px] xs:text-xs sm:text-sm text-primary font-bold mb-6 xs:mb-10 tracking-wider flex items-center justify-center gap-1.5 xs:gap-2">
          <CustomSparkleEmoji className="w-3 h-3 xs:w-3.5 xs:h-3.5 text-secondary" />
          <span>Nov 4–6: 6:00 PM – 8:00 PM · Sabbath Nov 7: 8:00 AM – 12:00 PM</span>
          <CustomSparkleEmoji className="w-3 h-3 xs:w-3.5 xs:h-3.5 text-secondary" />
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
          <button
            onClick={() => navigate("/donate")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs xs:text-sm sm:text-base font-montserrat font-black py-3 xs:py-4 px-6 xs:px-8 cursor-pointer shadow-xl rounded-full bg-gradient-to-r from-primary via-sunburst to-secondary text-obsidian uppercase tracking-wider hover:scale-105 active:scale-95 transition-all"
          >
            <Heart className="w-4 h-4 fill-current text-obsidian" />
            <span>Support / Donate</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="https://youtube.com/@connectedinpraise?si=JpVeFaqQFqMPO_fL"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs xs:text-sm sm:text-base font-montserrat font-bold py-3 xs:py-3.5 px-6 xs:px-8 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white transition-colors"
          >
            <Radio className="w-4 h-4 text-primary animate-pulse" />
            <span>Watch Livestream</span>
          </a>
        </div>
      </div>
    </section>
  );
}
