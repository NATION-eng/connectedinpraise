import React, { useState } from "react";
import { Image as ImageIcon, Sparkles, X, Maximize2 } from "lucide-react";

// 100% Authentic Photos from CIP MEDIA archives
const galleryItems = [
  {
    id: 1,
    title: "Official Jerusalem Choir Ensemble",
    category: "Choir",
    src: "/images/jerusalem-choir.jpg",
    caption: "The consecrated ministers of Jerusalem Choir gathered in unified praise robes.",
  },
  {
    id: 2,
    title: "Mass Choir in Heavenly Worship",
    category: "Worship",
    src: "/images/gallery/DSC09674.jpg",
    caption: "The auditorium filled with harmonic adoration at Convocation Arena.",
  },
  {
    id: 3,
    title: "Vocalists in Deep Adoration",
    category: "Choir",
    src: "/images/gallery/DSC09554.jpg",
    caption: "Sopranos and altos leading the congregation into God's manifest presence.",
  },
  {
    id: 4,
    title: "Stage Atmosphere & Holy Reverence",
    category: "Atmosphere",
    src: "/images/gallery/DSC09678.jpg",
    caption: "The sanctuary drenched in ambient warmth during the choral anthem.",
  },
  {
    id: 5,
    title: "Solemn Prayer & Supplication",
    category: "Prayer",
    src: "/images/gallery/DSC09550.jpg",
    caption: "Worshippers bowing in quiet reverence during the intercessory period.",
  },
  {
    id: 6,
    title: "Sacred Choral Harmonies",
    category: "Choir",
    src: "/images/gallery/DSC09557.jpg",
    caption: "Every voice blending in four-part harmony before the Throne of Grace.",
  },
  {
    id: 7,
    title: "Congregation Lifted in Spirit",
    category: "Worship",
    src: "/images/gallery/DSC09560.jpg",
    caption: "Hands raised in total surrender and thanksgiving.",
  },
  {
    id: 8,
    title: "Sanctuary Glory & Illumination",
    category: "Atmosphere",
    src: "/images/gallery/DSC09680.jpg",
    caption: "A panoramic view of the stage illumination and attentive congregation.",
  },
  {
    id: 9,
    title: "Ministers of Choral Praise",
    category: "Choir",
    src: "/images/gallery/DSC09744.jpg",
    caption: "Intense passion and vocal devotion during the signature gospel selection.",
  },
  {
    id: 10,
    title: "Praise Beyond Barriers",
    category: "Inclusion",
    src: "/images/gallery/DSC09749.jpg",
    caption: "Inclusive worship where every ability is honored and embraced.",
  },
  {
    id: 11,
    title: "Youth & Elders in One Chorus",
    category: "Fellowship",
    src: "/images/gallery/DSC09760.jpg",
    caption: "Generations standing side by side in unbroken fellowship.",
  },
  {
    id: 12,
    title: "High Energy Gospel Anthems",
    category: "Worship",
    src: "/images/gallery/DSC09778.jpg",
    caption: "Explosive joy reverberating through the Convocation Arena.",
  },
  {
    id: 13,
    title: "The Climax of Choral Praise",
    category: "Choir",
    src: "/images/gallery/DSC09954.jpg",
    caption: "A crescendo of victory marking the close of an anointed evening.",
  },
  {
    id: 14,
    title: "Grand Evening Processional",
    category: "Atmosphere",
    src: "/images/gallery/EMD_2415.jpg",
    caption: "The ceremonial processional inaugurating the sacred worship hours.",
  },
  {
    id: 15,
    title: "Directing the Heavenly Choir",
    category: "Choir",
    src: "/images/gallery/EMD_2421.jpg",
    caption: "Choir direction orchestrating dynamics and spiritual sensitivity.",
  },
  {
    id: 16,
    title: "United Sanctuary Finale",
    category: "Worship",
    src: "/images/gallery/EMD_2433.jpg",
    caption: "The summit moment of praise connecting thousands as one family.",
  },
];

const categories = ["All", "Worship", "Choir", "Inclusion", "Fellowship", "Prayer", "Atmosphere"];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="relative section-padding overflow-hidden bg-maroon-deep">
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-neon/8 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-gold/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative container-max">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-4 border border-gold/30">
            <ImageIcon className="w-4 h-4 text-gold-bright" />
            <span className="text-xs uppercase tracking-widest text-gold-bright font-bold">
              Visual Archives · Real CIP Moments
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-ivory mb-4">
            Moments in <span className="text-gold-bright gold-text">Glory</span>
          </h2>
          <p className="text-ivory/80 max-w-2xl mx-auto text-sm sm:text-base font-medium">
            Authentic photographs from previous editions of Connected in Praise. Every frame tells a story
            of God&apos;s manifest grace and barrier-free worship.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-gold-bright text-maroon-deep shadow-[0_0_15px_rgba(255,196,0,0.5)] scale-105"
                  : "glass-card text-ivory/70 hover:text-ivory hover:border-gold/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative rounded-3xl overflow-hidden glass-card border border-gold/20 cursor-pointer shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-gold/60"
            >
              <div className="aspect-[4/3] overflow-hidden bg-black/40">
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep via-maroon-deep/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Caption Card */}
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-neon font-bold block mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-display font-bold text-base text-ivory group-hover:text-gold-bright transition-colors line-clamp-1">
                    {item.title}
                  </h4>
                </div>
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold-bright opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2">
                  <Maximize2 className="w-4 h-4" />
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
              <span className="text-xs uppercase tracking-widest text-neon font-bold">
                {selectedPhoto.category}
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-ivory mt-1">
                {selectedPhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-ivory/80 mt-2 max-w-xl mx-auto font-medium">
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
