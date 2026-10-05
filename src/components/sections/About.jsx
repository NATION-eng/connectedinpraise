import React from "react";
import { Accessibility, Volume2, Heart, Quote, CheckCircle } from "lucide-react";

const pillars = [
  {
    icon: <Accessibility className="w-8 h-8 text-gold-bright" />,
    title: "Physical Accessibility",
    description:
      "Engineered ramps, reserved front-row spaces for persons with disabilities, wheelchair-integrated aisles, barrier-free restrooms, and trained hospitality volunteers at every entrance.",
    accent: "gold",
    features: ["Ramps & step-free access", "Reserved seating zones", "Accessible parking & assistance"],
  },
  {
    icon: <Volume2 className="w-8 h-8 text-neon" />,
    title: "Audio & Visual Adaptations",
    description:
      "Certified sign language interpreters on main screens, real-time live captions, tactile sensory experiences, calm/low-light areas, and audio description services.",
    accent: "neon",
    features: ["Stage Sign Language interpreters", "Live projected captioning", "Gentle-lighting sensory spaces"],
  },
  {
    icon: <Heart className="w-8 h-8 text-gold-bright" />,
    title: "Belonging & Dignity",
    description:
      "Possibility is always bigger than limitation. Every individual is warmly welcomed as an active worshipper and minister — never as an afterthought or spectator.",
    accent: "gold",
    features: ["Full inclusion in choir & ministry", "Warm welcoming team", "Dignity-first worship atmosphere"],
  },
];

export function About() {
  return (
    <section id="about" className="relative section-padding overflow-hidden bg-maroon-deep">
      {/* Background Lighting */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-20 w-96 h-96 bg-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-20 right-0 w-80 h-80 bg-neon/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative container-max">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-0.5 bg-gradient-to-r from-neon to-gold" />
          <span className="text-xs uppercase tracking-widest text-gold-bright font-bold">
            Adventist Possibility Ministries (APM)
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-ivory leading-tight mb-6">
              Everyone Has a Sacred Place{" "}
              <span className="text-gold-bright gold-text">in Praise</span>
            </h2>
            <p className="text-ivory/80 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              This year, <strong className="text-ivory font-semibold">Connected in Praise</strong> is
              partnering with <strong className="text-gold-bright font-semibold">Adventist Possibility Ministries</strong> to
              deliberately create a movement where people with physical, sensory, and cognitive
              challenges are not merely observers, but honored leaders in worship.
            </p>
            <p className="text-ivory/60 text-sm sm:text-base leading-relaxed">
              We believe every person is made in the image of God with boundless spiritual potential.
              Through music, love, and dedicated infrastructure, we are dismantling barriers so that all
              hearts beat as one before the Throne.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="glass-card-warm p-5 sm:p-8 relative overflow-hidden rounded-2xl sm:rounded-3xl border border-gold/30 shadow-[0_0_25px_rgba(242,169,0,0.15)] group hover:border-gold/50 transition-all duration-300">
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-gold-bright/30 mb-3 sm:mb-4" />
              <blockquote className="font-display text-lg sm:text-2xl text-ivory/95 italic leading-relaxed mb-4">
                &ldquo;Praise has no barrier. Where there is a heart to worship, there is a way to
                include. Possibility is infinitely greater than limitation.&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-gold/20">
                <div className="w-2.5 h-2.5 rounded-full bg-neon animate-pulse" />
                <span className="text-xs uppercase tracking-wider text-gold-bright font-semibold">
                  The APM 2026 Movement Creed
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Inclusion Pillars */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="glass-card p-5 sm:p-8 h-full flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-gold/15 hover:border-gold/40 transition-all duration-300 hover:-translate-y-2 group shadow-lg"
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/15 to-neon/15 flex items-center justify-center mb-6 border border-gold/25 group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>
                <h3 className="font-display font-bold text-2xl text-ivory mb-3 group-hover:text-gold-bright transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-ivory/70 text-sm leading-relaxed mb-6 font-normal">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gold/10 space-y-2">
                {pillar.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 text-xs text-ivory/80 font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-gold-bright flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
