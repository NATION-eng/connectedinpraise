import React, { useState, useEffect } from "react";
import { MessageSquare, Send, Sparkles, CheckCircle, Database, Heart, Filter } from "lucide-react";
import { getLatestPrayers, savePrayerRequest, incrementAmenCount } from "../../services/db";
import {
  CustomSparkleEmoji,
  CustomPrayingHandsEmoji,
  CustomPraiseHandsEmoji,
} from "../ui/CustomEmoji";
import { LiquidButton } from "../ui/LiquidButton";
import { RevealMotion } from "../ui/RevealMotion";

const CATEGORIES = [
  "General",
  "Healing & Health",
  "Family & Children",
  "Spiritual Breakthrough",
  "Thanksgiving & Praise",
  "Deliverance & Peace",
];

export function Stories() {
  const [prayers, setPrayers] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all"); // 'all' | 'prayer' | 'testimony'
  const [entryType, setEntryType] = useState("prayer"); // 'prayer' | 'testimony'
  const [category, setCategory] = useState("General");
  const [newPrayerText, setNewPrayerText] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch the latest persistent entries on mount
  useEffect(() => {
    async function loadPrayers() {
      setIsLoading(true);
      try {
        const latest = await getLatestPrayers(30);
        setPrayers(latest);
      } catch (err) {
        console.error("Failed to load prayers from db:", err);
      } finally {
        setIsLoading(false);
      }
    }
    loadPrayers();
  }, []);

  const handlePrayerSubmit = async (e) => {
    e.preventDefault();
    if (!newPrayerText.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const savedNote = await savePrayerRequest(authorName, newPrayerText, entryType, category);
      setPrayers((prev) => [savedNote, ...prev.filter((p) => p.id !== savedNote.id)].slice(0, 30));
      setNewPrayerText("");
      setAuthorName("");
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error("Error saving prayer:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAmen = (id, e) => {
    e.stopPropagation();
    const newCount = incrementAmenCount(id);
    setPrayers((prev) =>
      prev.map((item) => (item.id === id ? { ...item, amens: (item.amens || 0) + 1 } : item))
    );
  };

  const filteredEntries = prayers.filter((item) => {
    if (activeFilter === "all") return true;
    return item.type === activeFilter;
  });

  return (
    <section id="stories" className="relative pt-28 xs:pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-32 overflow-hidden bg-[#0D0404] text-white min-h-screen">
      {/* Radiant Sunburst Glow Background Canvas */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/images/cip-sunburst-bg.jpg"
          alt="Sunburst Ambient Backdrop"
          className="w-full h-full object-cover object-center opacity-15 filter blur-sm scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0404] via-[#1A0405]/95 to-[#0D0404]" />
        <div className="absolute top-1/3 left-0 w-60 sm:w-96 h-60 sm:h-96 bg-primary/10 rounded-full blur-[150px] pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-0 w-60 sm:w-96 h-60 sm:h-96 bg-secondary/15 rounded-full blur-[150px] pointer-events-none animate-pulse-glow-slow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <RevealMotion className="text-center mb-10 xs:mb-14 sm:mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-xl rounded-full px-3.5 xs:px-4 sm:px-5 py-1.5 sm:py-2 mb-3 xs:mb-4 border border-primary/30">
            <MessageSquare className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-primary" />
            <span className="font-montserrat text-[10px] xs:text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] text-white/80 font-bold">
              Live Fellowship & Intercession
            </span>
          </div>

          <h2 className="font-montserrat font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-white mb-2.5 xs:mb-4">
            Prayer Wall &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-sunburst to-secondary">
              Testimonies
            </span>
          </h2>

          <p className="text-white/75 text-xs xs:text-sm sm:text-base font-normal leading-relaxed">
            Lift your personal petitions before God or share the wonders He has performed in your life.
            Every submission is carried in prayer by Jerusalem Choir, APM ministers, and thousands of believers worldwide.
          </p>
        </RevealMotion>

        {/* Digital Prayer & Testimony Wall Grid */}
        <div className="grid lg:grid-cols-12 gap-6 xs:gap-8 items-start">
          {/* Left Column: Live Submission Form */}
          <div className="lg:col-span-5">
            <div className="bg-black/60 backdrop-blur-2xl p-5 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl border border-primary/30 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <h3 className="font-montserrat font-black text-lg xs:text-xl text-white">Share With The Community</h3>
                </div>
                <span className="inline-flex items-center gap-1 text-[9px] xs:text-[10px] font-montserrat font-black text-secondary bg-secondary/10 px-2.5 py-1 rounded-full border border-secondary/30">
                  <Database className="w-3 h-3" />
                  <span>Real-Time</span>
                </span>
              </div>

              {/* Type Selector (Prayer Request vs Praise Testimony) */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-black/50 rounded-xl border border-white/10 mb-4">
                <button
                  type="button"
                  onClick={() => setEntryType("prayer")}
                  className={`py-2 px-3 rounded-lg font-montserrat font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    entryType === "prayer"
                      ? "bg-primary text-obsidian shadow-md"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  <CustomPrayingHandsEmoji className="w-3.5 h-3.5" />
                  <span>Prayer Request</span>
                </button>
                <button
                  type="button"
                  onClick={() => setEntryType("testimony")}
                  className={`py-2 px-3 rounded-lg font-montserrat font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    entryType === "testimony"
                      ? "bg-secondary text-white shadow-md"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  <CustomSparkleEmoji className="w-3.5 h-3.5" />
                  <span>Testimony</span>
                </button>
              </div>

              <form onSubmit={handlePrayerSubmit} className="space-y-4">
                {/* Category Dropdown */}
                <div>
                  <label htmlFor="prayer-category" className="block text-[11px] xs:text-xs uppercase tracking-wider font-montserrat font-bold text-white/80 mb-1.5">
                    Category Focus
                  </label>
                  <select
                    id="prayer-category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-[#1A0405] border border-primary/30 rounded-xl px-3.5 py-3 text-xs sm:text-sm font-semibold text-white focus:outline-none focus:border-primary transition-colors cursor-pointer"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat} className="bg-[#140304] text-white">
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name Input */}
                <div>
                  <label htmlFor="prayer-author" className="block text-[11px] xs:text-xs uppercase tracking-wider font-montserrat font-bold text-white/80 mb-1.5">
                    Your Name (or Leave Blank for Anonymous)
                  </label>
                  <input
                    id="prayer-author"
                    type="text"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="e.g., Sister Comfort, Brother Emmanuel..."
                    className="w-full bg-black/50 border border-primary/30 rounded-xl px-3.5 py-3 text-xs sm:text-sm font-semibold text-white placeholder-white/30 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                {/* Content Textarea */}
                <div>
                  <label htmlFor="prayer-content" className="block text-[11px] xs:text-xs uppercase tracking-wider font-montserrat font-bold text-white/80 mb-1.5">
                    {entryType === "prayer" ? "Your Prayer Petition *" : "Your Testimony / Thanksgiving Note *"}
                  </label>
                  <textarea
                    id="prayer-content"
                    rows={4}
                    required
                    value={newPrayerText}
                    onChange={(e) => setNewPrayerText(e.target.value)}
                    placeholder={
                      entryType === "prayer"
                        ? "Share your burden, healing request, family need, or spiritual petition..."
                        : "Describe the miracle, breakthrough, or thanksgiving God has wrought in your life..."
                    }
                    className="w-full bg-black/50 border border-primary/30 rounded-xl px-3.5 py-3 text-xs sm:text-sm font-semibold text-white placeholder-white/30 focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                <LiquidButton
                  type="submit"
                  disabled={isSubmitting}
                  variant="primary"
                  className="w-full !py-3 xs:!py-3.5 cursor-pointer text-center justify-center font-bold"
                >
                  <Send className="w-4 h-4 text-primary group-hover:text-obsidian" />
                  <span>
                    {isSubmitting
                      ? "Recording..."
                      : entryType === "prayer"
                      ? "Pin Prayer to Wall"
                      : "Publish Testimony"}
                  </span>
                </LiquidButton>

                {submitted && (
                  <div className="flex items-center justify-center gap-2 text-primary text-xs font-bold py-2.5 bg-primary/10 rounded-xl border border-primary/30 animate-fade-in">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Your note has been submitted to the live wall!</span>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Right Column: Live Filterable Wall Display */}
          <div className="lg:col-span-7">
            {/* Filter Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-1.5 p-1 bg-black/60 rounded-xl border border-white/10 flex-wrap">
                <button
                  onClick={() => setActiveFilter("all")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-montserrat font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    activeFilter === "all"
                      ? "bg-primary text-obsidian shadow-sm"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  All ({prayers.length})
                </button>
                <button
                  onClick={() => setActiveFilter("prayer")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-montserrat font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    activeFilter === "prayer"
                      ? "bg-primary text-obsidian shadow-sm"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  Prayers
                </button>
                <button
                  onClick={() => setActiveFilter("testimony")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-montserrat font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    activeFilter === "testimony"
                      ? "bg-secondary text-white shadow-sm"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  Testimonies
                </button>
              </div>

              <span className="text-[10px] xs:text-[11px] text-white/70 font-bold flex items-center gap-1.5 self-start sm:self-auto bg-black/50 px-2.5 py-1 rounded-full border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                Live Sync Active
              </span>
            </div>

            {/* List of Real Submissions */}
            {isLoading ? (
              <div className="bg-black/40 backdrop-blur-xl p-10 rounded-2xl sm:rounded-3xl border border-white/10 text-center text-white/60 text-xs xs:text-sm font-bold">
                Connecting to live prayer wall...
              </div>
            ) : filteredEntries.length === 0 ? (
              <div className="bg-black/40 backdrop-blur-xl p-8 sm:p-12 rounded-2xl sm:rounded-3xl border border-white/10 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mx-auto mb-3">
                  <CustomPrayingHandsEmoji className="w-6 h-6" />
                </div>
                <h4 className="font-montserrat font-black text-base sm:text-lg text-white mb-1.5">
                  The Wall is Open
                </h4>
                <p className="text-white/60 text-xs sm:text-sm max-w-md mx-auto">
                  No submissions have been shared in this category yet. Be the first to share your petition or testimony of God's grace!
                </p>
              </div>
            ) : (
              <div className="space-y-3.5 sm:space-y-4">
                {filteredEntries.map((prayer) => {
                  const isTestimony = prayer.type === "testimony";
                  return (
                    <div
                      key={prayer.id}
                      className={`bg-black/45 backdrop-blur-xl p-4 sm:p-6 rounded-2xl sm:rounded-3xl border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg shadow-md flex flex-col justify-between ${
                        isTestimony
                          ? "border-secondary/35 hover:border-secondary/60 bg-gradient-to-br from-secondary/5 via-black/50 to-black/60"
                          : "border-white/10 hover:border-primary/40"
                      }`}
                    >
                      {/* Top Meta: Badge, Category, and Time */}
                      <div className="flex items-center justify-between gap-2 mb-2.5 flex-wrap">
                        <div className="flex items-center gap-2">
                          <span
                            className={`font-montserrat text-[9px] xs:text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                              isTestimony
                                ? "bg-secondary/20 text-secondary border-secondary/40"
                                : "bg-primary/15 text-primary border-primary/30"
                            }`}
                          >
                            {isTestimony ? "Praise Testimony" : "Prayer Request"}
                          </span>
                          {prayer.category && (
                            <span className="text-[10px] text-white/50 font-montserrat font-semibold">
                              · {prayer.category}
                            </span>
                          )}
                        </div>

                        <span className="text-[10px] xs:text-[11px] font-semibold text-white/40">
                          {prayer.time}
                        </span>
                      </div>

                      {/* Prayer Content Text */}
                      <p className="text-xs sm:text-sm md:text-base text-white/95 leading-relaxed font-normal mb-3.5 whitespace-pre-wrap">
                        &ldquo;{prayer.text}&rdquo;
                      </p>

                      {/* Footer: Author and Amen Button */}
                      <div className="flex items-center justify-between text-xs pt-3 border-t border-white/10 gap-2 flex-wrap">
                        <span className="font-montserrat text-white/90 font-bold flex items-center gap-1.5 text-xs">
                          <CustomSparkleEmoji className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                          <span>{prayer.author}</span>
                        </span>

                        <button
                          type="button"
                          onClick={(e) => handleAmen(prayer.id, e)}
                          className="inline-flex items-center gap-1.5 text-[10px] xs:text-[11px] font-bold text-primary bg-primary/10 hover:bg-primary/20 active:scale-95 px-2.5 py-1 rounded-full border border-primary/30 transition-all cursor-pointer"
                          aria-label="Prayed with you or say Amen"
                        >
                          <CustomPrayingHandsEmoji className="w-3.5 h-3.5" />
                          <span>Amen / Prayed</span>
                          {(prayer.amens || 0) > 0 && (
                            <span className="ml-0.5 px-1.5 py-0.2 rounded-full bg-primary text-obsidian text-[9px] font-black">
                              {prayer.amens}
                            </span>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
