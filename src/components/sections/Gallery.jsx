import React, { useState } from "react";
import { Image as ImageIcon, X, Maximize2 } from "lucide-react";
import { RevealMotion, StaggerContainer, StaggerItem } from "../ui/RevealMotion";

// 100% Authentic Photos from CIP MEDIA archives with precise, factual descriptions
const galleryItems = [
  {
    id: 1,
    title: "Jerusalem Choir Official Ensemble",
    category: "Choir & Soloists",
    src: "/images/jerusalem-choir.jpg",
    caption: "The full assembly of Jerusalem Choir in their signature blue robes and mortarboard caps alongside their choir directors.",
  },
  {
    id: 2,
    title: "Solo Violinist Worship Ministration",
    category: "Instrumentals & Sound",
    src: "/images/gallery/DSC09550.jpg",
    caption: "Live violin ministration accompanying the choir in holy reverence, with choristers seated in vibrant African print attire.",
  },
  {
    id: 3,
    title: "Lead Male Vocalist Ministration",
    category: "Choir & Soloists",
    src: "/images/gallery/DSC09554.jpg",
    caption: "Powerful vocal solo rendered in traditional floral African print attire during the concert praise session.",
  },
  {
    id: 4,
    title: "Soloist in Deep Devotion",
    category: "Choir & Soloists",
    src: "/images/gallery/DSC09557.jpg",
    caption: "Close-up of the lead vocalist delivering an anointed solo ministration with microphone in hand.",
  },
  {
    id: 5,
    title: "Lead Female Soloist & Vocalist",
    category: "Choir & Soloists",
    src: "/images/gallery/DSC09560.jpg",
    caption: "Anointed female soloist in matching African print headwrap and gown leading the mass choir in adoration.",
  },
  {
    id: 6,
    title: "Choral Soloist in Robes",
    category: "Choir & Soloists",
    src: "/images/gallery/DSC09674.jpg",
    caption: "Female chorister delivering a solo rendition in Jerusalem Choir's ceremonial blue gown and cap.",
  },
  {
    id: 7,
    title: "Tenor Soloist Ministry",
    category: "Choir & Soloists",
    src: "/images/gallery/DSC09678.jpg",
    caption: "Male chorister lifting his voice in praise, backed by the full choral ensemble on the main stage.",
  },
  {
    id: 8,
    title: "Soprano & Alto Choral Harmony",
    category: "Choir & Soloists",
    src: "/images/gallery/DSC09680.jpg",
    caption: "Female section of Jerusalem Choir singing from their hymnals in unified multi-part harmony.",
  },
  {
    id: 9,
    title: "Full Choir & Stage Orchestra",
    category: "Choir & Soloists",
    src: "/images/gallery/DSC09744.jpg",
    caption: "Panoramic view of Jerusalem Choir on stage accompanied by live keyboard and violin instrumentation.",
  },
  {
    id: 10,
    title: "Choir Director Conducting the Anthem",
    category: "Choral Direction",
    src: "/images/gallery/DSC09749.jpg",
    caption: "Choir director in green ceremonial gown with red trim conducting the choir from the music score stand.",
  },
  {
    id: 11,
    title: "Joyful Choristers in Praise",
    category: "Choir & Soloists",
    src: "/images/gallery/DSC09760.jpg",
    caption: "Soprano choristers smiling with radiant joy as they lift praises during the anthem.",
  },
  {
    id: 12,
    title: "Ministration at the Golden Podium",
    category: "Choral Direction",
    src: "/images/gallery/DSC09778.jpg",
    caption: "Concert speaker and choir director addressing the auditorium from the central podium, surrounded by the mass choir.",
  },
  {
    id: 13,
    title: "Audio & Sound Engineering Crew",
    category: "Instrumentals & Sound",
    src: "/images/gallery/DSC09954.jpg",
    caption: "Technical sound engineering team managing the digital soundboard and acoustic balance during the live concert.",
  },
  {
    id: 14,
    title: "Free Medical & Dental Outreach Clinic",
    category: "Medical & Outreach",
    src: "/images/gallery/EMD_2415.jpg",
    caption: "Volunteer medical doctors and dental team providing free healthcare consultations and check-ups to community members.",
  },
  {
    id: 15,
    title: "Community Health Triage & Registration",
    category: "Medical & Outreach",
    src: "/images/gallery/EMD_2421.jpg",
    caption: "Hospitality and healthcare coordination team welcoming patients for free health screenings at the outreach center.",
  },
  {
    id: 16,
    title: "Free Dental Cleaning & Treatment",
    category: "Medical & Outreach",
    src: "/images/gallery/EMD_2424.jpg",
    caption: "Dental professional performing ultrasonic scaling and oral hygiene care for a beneficiary during the humanitarian outreach.",
  },
  {
    id: 17,
    title: "Compassionate Dental Care in Progress",
    category: "Medical & Outreach",
    src: "/images/gallery/EMD_2433.jpg",
    caption: "Specialized dental examination and clinical care provided free of charge as part of the APM compassion ministry.",
  },
];

const categories = [
  "All",
  "Choir & Soloists",
  "Choral Direction",
  "Instrumentals & Sound",
  "Medical & Outreach",
];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="relative pt-28 sm:pt-36 md:pt-40 pb-20 sm:pb-32 overflow-hidden bg-[#0D0404] text-white min-h-screen">
      {/* Radiant Sunburst Glow Background Canvas */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/images/cip-sunburst-bg.jpg"
          alt="Sunburst Ambient Backdrop"
          className="w-full h-full object-cover object-center opacity-15 filter blur-sm scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0404] via-[#1A0405]/95 to-[#0D0404]" />
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-secondary/15 rounded-full blur-[150px] pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px] pointer-events-none animate-pulse-glow-slow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <RevealMotion className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-xl rounded-full px-4 sm:px-5 py-2 mb-4 border border-primary/30">
            <ImageIcon className="w-4 h-4 text-primary" />
            <span className="font-montserrat text-xs uppercase tracking-[0.2em] text-white/80 font-bold">
              Visual Archives · Authentic CIP Moments
            </span>
          </div>
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Moments in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-sunburst to-secondary">
              Glory & Service
            </span>
          </h2>
          <p className="text-white/75 max-w-2xl mx-auto text-sm sm:text-base font-normal">
            Authentic photographs capturing the spirit of Connected in Praise — from anointed choral
            worship on stage to free community dental and healthcare outreach for the vulnerable.
          </p>
        </RevealMotion>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-montserrat font-bold transition-all duration-500 delay-150 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer select-none ${
                activeCategory === cat
                  ? "bg-primary text-obsidian shadow-[0_0_20px_rgba(255,200,59,0.4)] scale-105"
                  : "bg-black/40 backdrop-blur-xl border border-white/10 text-white/70 hover:text-white hover:border-primary/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Pure Visual Photography Grid - Intriguing FTLOM Experience without Card Text */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-black/60 border border-primary/20 cursor-pointer shadow-xl sm:shadow-2xl transition-all duration-700 delay-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-2 hover:border-primary/80 hover:shadow-[0_15px_35px_rgba(255,200,59,0.25)] select-none"
            >
              <div className="aspect-square sm:aspect-[4/3] overflow-hidden relative">
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 delay-150 ease-[cubic-bezier(0.23,1,0.32,1)] filter brightness-90 group-hover:brightness-105"
                />

                {/* Ambient Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-60 group-hover:opacity-40 transition-opacity duration-700 delay-150" />

                {/* Golden Radial Halo on Hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-150 pointer-events-none" />

                {/* Intriguing Center Focus / View Lens Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-primary/40 flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500 delay-150 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-[0_0_20px_rgba(255,200,59,0.5)]">
                    <Maximize2 className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                </div>

                {/* Subtle Floating Corner Indicator */}
                <div className="absolute bottom-3 right-3 text-[10px] font-montserrat uppercase tracking-widest text-milk/60 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-milk/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                  View
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-[100] bg-maroon-deep/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full glass-card-warm p-4 sm:p-6 rounded-3xl border border-gold/40 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 text-ivory hover:text-gold-bright p-2 rounded-full glass cursor-pointer z-10"
              aria-label="Close photo preview"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="rounded-2xl overflow-hidden mb-4 max-h-[70vh] bg-black/60 flex items-center justify-center">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="max-w-full max-h-[68vh] object-contain mx-auto"
              />
            </div>

            <div className="text-center">
              <span className="text-xs uppercase tracking-widest text-neon font-black">
                {selectedPhoto.category}
              </span>
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-ivory mt-1">
                {selectedPhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-ivory/90 mt-2 max-w-xl mx-auto font-semibold">
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
