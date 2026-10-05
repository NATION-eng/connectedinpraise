import React, { useState } from "react";
import { Image as ImageIcon, Sparkles, X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

// Curated selection of event highlights with high-impact visuals
const galleryItems = [
  {
    id: 1,
    title: "Congregation Lifted in Worship",
    category: "Worship",
    src: "https://images.pexels.com/photos/35555152/pexels-photo-35555152.jpeg?auto=compress&cs=tinysrgb&w=1200",
    caption: "A sea of hands raised in unified surrender at the Convocation Arena.",
  },
  {
    id: 2,
    title: "Jerusalem Choir Ministry",
    category: "Choir",
    src: "/images/jerusalem-choir.jpg",
    caption: "The consecrated ministers of Jerusalem Choir in holy convocation and praise.",
  },
  {
    id: 3,
    title: "Praise with Sign Language",
    category: "Inclusion",
    src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
    caption: "Worship that transcends sound — expressing joy in every movement.",
  },
  {
    id: 4,
    title: "Atmosphere of Spiritual Encounter",
    category: "Atmosphere",
    src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
    caption: "Stage lights and reverent hearts in divine synchronization.",
  },
  {
    id: 5,
    title: "Family & Community Fellowship",
    category: "Fellowship",
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
    caption: "Smiles, warmth, and fellowship across all generations.",
  },
  {
    id: 6,
    title: "Intimate Prayer & Supplication",
    category: "Prayer",
    src: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1200&q=80",
    caption: "Sacred moments of kneeling prayer and personal consecration.",
  },
];

const categories = ["All", "Worship", "Choir", "Inclusion", "Fellowship", "Prayer"];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="relative section-padding overflow-hidden bg-maroon-deep">
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-neon/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative container-max">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-4 border border-gold/25">
            <ImageIcon className="w-4 h-4 text-gold-bright" />
            <span className="text-xs uppercase tracking-widest text-ivory/80 font-bold">
              Visual Archives
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-ivory mb-4">
            Moments in <span className="text-gold-bright gold-text">Glory</span>
          </h2>
          <p className="text-ivory/70 max-w-xl mx-auto text-sm sm:text-base font-normal">
            Relive the holy reverberation of prior gatherings. Every photograph captures a testimony of
            chains broken and souls connected in praise.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-gold-bright text-maroon-deep shadow-[0_0_15px_rgba(255,196,0,0.4)]"
                  : "glass-card text-ivory/70 hover:text-ivory hover:border-gold/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative rounded-3xl overflow-hidden glass-card border border-gold/15 cursor-pointer shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-gold/50"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep via-maroon-deep/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Caption Card */}
              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-neon font-bold block mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-display font-bold text-lg text-ivory group-hover:text-gold-bright transition-colors">
                    {item.title}
                  </h4>
                </div>
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold-bright opacity-0 group-hover:opacity-100 transition-opacity">
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
              className="absolute top-4 right-4 text-ivory/80 hover:text-gold-bright p-2 rounded-full glass cursor-pointer z-10"
              aria-label="Close photo preview"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="rounded-2xl overflow-hidden mb-4 max-h-[70vh]">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain mx-auto"
              />
            </div>

            <div className="text-center">
              <span className="text-xs uppercase tracking-widest text-neon font-bold">
                {selectedPhoto.category}
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-ivory mt-1">
                {selectedPhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-ivory/70 mt-2 max-w-lg mx-auto font-normal">
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
