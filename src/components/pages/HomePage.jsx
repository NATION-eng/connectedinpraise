import React from "react";
import { ArrowRight, Heart, Sparkles, BookOpen, Music, Image, MessageSquare, MapPin } from "lucide-react";
import { Hero } from "../sections/Hero";
import { StatsBar } from "../sections/StatsBar";
import { RevealMotion, StaggerContainer, StaggerItem } from "../ui/RevealMotion";
import { useNavigation } from "../../context/NavigationContext";

export function HomePage() {
  const { navigate } = useNavigation();

  const sectionsList = [
    {
      title: "About APM Inclusion",
      category: "Our Sacred Mission",
      desc: "Learn how Connected in Praise partners with Adventist Possibility Ministries to provide wheelchair access, sign language interpreters, and dignity-first inclusion.",
      path: "/about",
      icon: <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
      badge: "Inclusion",
    },
    {
      title: "Why Do You Praise?",
      category: "Theology & Word",
      desc: "Discover the Biblical foundations, spiritual significance, and theological pillars that inspire our four-day praise explosion.",
      path: "/why-praise",
      icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />,
      badge: "Biblical Pillars",
    },
    {
      title: "Jerusalem Choir",
      category: "Host Ministry",
      desc: "Explore over three decades of choral excellence, musical leadership, spiritual devotion, and anointed ministry in Port Harcourt City.",
      path: "/choir",
      icon: <Music className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
      badge: "30+ Years",
    },
    {
      title: "Visual Archives",
      category: "Gallery & Moments",
      desc: "Immerse yourself in vivid photography and visual highlights capturing powerful moments of worship from previous concerts and rehearsals.",
      path: "/gallery",
      icon: <Image className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />,
      badge: "Photographs",
    },
    {
      title: "Prayer & Testimony Wall",
      category: "Live Fellowship",
      desc: "Submit your personal prayer requests, share miraculous testimonies, and unite with thousands of believers lifting needs before God's throne.",
      path: "/stories",
      icon: <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
      badge: "Interactive",
    },
    {
      title: "Partner & Donate",
      category: "Official Giving",
      desc: "Directly fund certified sign language interpreters, stage access ramps, wheelchair logistics, and live global broadcast facilities.",
      path: "/donate",
      icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-secondary fill-secondary/20" />,
      badge: "Official UBA Account",
      featured: true,
    },
    {
      title: "Venue & Contact",
      category: "RSU Arena",
      desc: "Get driving and transit directions to Convocation Arena, Rivers State University, accessibility assistance numbers, and organizer contacts.",
      path: "/contact",
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
      badge: "Directions",
    },
  ];

  return (
    <div className="relative">
      <Hero />
      <StatsBar />

      {/* Interactive Hub: Explore Each Dedicated Page */}
      <section className="relative py-14 xs:py-18 sm:py-28 bg-gradient-to-b from-[#0E0304] via-[#150406] to-[#0A0203] text-white overflow-hidden">
        {/* Ambient Glow Orbs */}
        <div className="absolute top-1/4 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-secondary/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <RevealMotion className="text-center max-w-3xl mx-auto mb-10 xs:mb-14 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary font-montserrat text-[11px] xs:text-xs uppercase tracking-widest font-black mb-3 xs:mb-4">
              <span>Explore The Movement</span>
            </div>

            <h2 className="font-syne font-black text-xl xs:text-2xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mb-3 xs:mb-4">
              Step Into Every Dimension of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-sunburst to-secondary">Praise</span>
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-white/75 font-sans leading-relaxed px-1">
              Each facet of Connected in Praise is designed to lift up Jesus and bring total inclusion to every person.
              Select any section below to learn more.
            </p>
          </RevealMotion>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 xs:gap-5 sm:gap-6">
            {sectionsList.map((item, idx) => (
              <StaggerItem key={idx}>
                <div
                  onClick={() => navigate(item.path)}
                  className={`group relative h-full rounded-2xl p-4.5 xs:p-5 sm:p-7 transition-all duration-500 delay-75 cursor-pointer flex flex-col justify-between ${
                    item.featured
                      ? "bg-gradient-to-b from-primary/20 via-[#1C0508] to-[#120305] border-2 border-primary/50 shadow-[0_12px_40px_rgba(255,200,59,0.25)] hover:border-primary hover:shadow-[0_16px_50px_rgba(255,200,59,0.4)]"
                      : "bg-[#130305]/90 backdrop-blur-md border border-white/10 hover:border-primary/40 hover:bg-[#1A0407] hover:shadow-[0_12px_35px_rgba(0,0,0,0.7)]"
                  } hover:-translate-y-1.5`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3.5 xs:mb-5">
                      <div className="w-10 h-10 xs:w-12 xs:h-12 rounded-xl bg-white/5 border border-white/10 group-hover:border-primary/40 flex items-center justify-center transition-colors">
                        {item.icon}
                      </div>

                      <span className="font-montserrat text-[9px] xs:text-[10px] sm:text-[11px] font-black uppercase tracking-wider px-2 xs:px-2.5 py-0.5 xs:py-1 rounded-full bg-white/5 text-white/70 border border-white/10 group-hover:border-primary/30 group-hover:text-primary transition-colors">
                        {item.badge}
                      </span>
                    </div>

                    <div className="text-[10px] xs:text-[11px] font-montserrat font-bold text-secondary uppercase tracking-widest mb-1">
                      {item.category}
                    </div>

                    <h3 className="font-syne font-black text-lg xs:text-xl text-white group-hover:text-primary transition-colors mb-2 xs:mb-3">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4 xs:mb-6">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 xs:pt-4 border-t border-white/10 group-hover:border-primary/20 transition-colors">
                    <span className="font-montserrat text-[11px] xs:text-xs font-bold uppercase tracking-wider text-milk group-hover:text-primary transition-colors">
                      Open Page
                    </span>
                    <div className="w-7 h-7 xs:w-8 xs:h-8 rounded-full bg-white/5 group-hover:bg-primary group-hover:text-black flex items-center justify-center text-white/60 transition-all duration-300">
                      <ArrowRight className="w-3.5 h-3.5 xs:w-4 xs:h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Quick Highlight Giving Banner */}
          <RevealMotion className="mt-10 xs:mt-14 sm:mt-20 rounded-2xl sm:rounded-3xl p-5 xs:p-6 sm:p-10 bg-gradient-to-r from-secondary/20 via-primary/15 to-secondary/10 border border-primary/30 text-center flex flex-col sm:flex-row items-center justify-between gap-4 xs:gap-6 shadow-2xl">
            <div className="text-center sm:text-left space-y-1 xs:space-y-1.5">
              <span className="text-[10px] xs:text-[11px] font-montserrat font-black uppercase tracking-widest text-secondary block">
                Support Disability Inclusion
              </span>
              <h3 className="font-syne font-black text-lg xs:text-xl sm:text-2xl text-white">
                Contribute Directly to Connected in Praise 2026
              </h3>
              <p className="text-xs sm:text-sm text-white/75">
                Official UBA Account: Seventh-day Adventist Church, Rumuokwuta District · 1015166374
              </p>
            </div>

            <button
              onClick={() => navigate("/donate")}
              className="w-full sm:w-auto flex-shrink-0 inline-flex items-center justify-center gap-2 px-5 xs:px-6 py-3 xs:py-3.5 rounded-full bg-gradient-to-r from-primary via-sunburst to-secondary text-obsidian font-montserrat font-black text-xs uppercase tracking-wider shadow-lg hover:shadow-[0_4px_25px_rgba(255,200,59,0.5)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-current" />
              <span>Go to Donate Page</span>
            </button>
          </RevealMotion>
        </div>
      </section>
    </div>
  );
}
