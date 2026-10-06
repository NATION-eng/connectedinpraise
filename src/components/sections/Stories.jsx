import React, { useState, useEffect } from "react";
import { MessageSquare, Send, Quote, Sparkles, CheckCircle, Database } from "lucide-react";
import { testimonials } from "../../data/testimonials";
import { getLatestPrayers, savePrayerRequest } from "../../services/db";
import {
  CustomSparkleEmoji,
  CustomPrayingHandsEmoji,
  CustomPraiseHandsEmoji,
} from "../ui/CustomEmoji";
import { LiquidButton } from "../ui/LiquidButton";

export function Stories() {
  const [prayers, setPrayers] = useState([]);
  const [newPrayerText, setNewPrayerText] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch the latest 5 persistent prayers on mount
  useEffect(() => {
    async function loadPrayers() {
      setIsLoading(true);
      try {
        const latest = await getLatestPrayers(5);
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
      const savedNote = await savePrayerRequest(authorName, newPrayerText);
      setPrayers((prev) => [savedNote, ...prev.filter((p) => p.id !== savedNote.id)].slice(0, 5));
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

  return (
    <section id="stories" className="relative py-20 sm:py-28 md:py-36 overflow-hidden bg-obsidian text-white">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px] pointer-events-none animate-pulse-glow" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 bg-black/50 backdrop-blur-xl rounded-full px-4 sm:px-5 py-2 mb-4 border border-primary/30">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="font-montserrat text-xs uppercase tracking-[0.2em] text-white/80 font-bold">
              Voices & Intercession
            </span>
          </div>
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Stories of Grace &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-sunburst to-secondary">
              Prayer Wall
            </span>
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-sm sm:text-base font-normal">
            Real people. Transformed lives. Post your prayer petition or thanksgiving note to our
            persisted digital wall for united intercession.
          </p>
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-20 sm:mb-24">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-black/45 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-primary/40 flex flex-col justify-between relative shadow-xl group transition-all duration-300 hover:-translate-y-1.5"
            >
              <div>
                <Quote className="w-8 h-8 text-primary/40 mb-4" />
                <p className="font-montserrat italic font-medium text-base text-white/90 leading-relaxed mb-6">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary shadow-md"
                />
                <div>
                  <h4 className="font-montserrat font-black text-white text-base">{item.name}</h4>
                  <p className="text-xs text-primary font-bold">{item.role}</p>
                  <p className="text-[10px] text-white/60 font-medium">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Digital Prayer Wall & Interactive Submission */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left: Prayer Request Submission Form */}
          <div className="lg:col-span-5">
            <div className="bg-black/60 backdrop-blur-2xl p-6 sm:p-8 rounded-3xl border border-primary/30 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <h3 className="font-montserrat font-black text-2xl text-white">Post a Prayer Note</h3>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-montserrat font-black text-secondary bg-secondary/10 px-2.5 py-1 rounded-full border border-secondary/30">
                  <Database className="w-3 h-3" />
                  <span>Stored Live</span>
                </span>
              </div>

              <p className="text-white/70 text-xs sm:text-sm mb-6 font-normal">
                Your prayer is saved securely in our database so it persists across visits. Our prayer
                warriors pray over every single note.
              </p>

              <form onSubmit={handlePrayerSubmit} className="space-y-4">
                <div>
                  <label htmlFor="prayer-author" className="block text-xs uppercase tracking-wider font-montserrat font-bold text-white/80 mb-1.5">
                    Your Name (or Leave Blank for Anonymous)
                  </label>
                  <input
                    id="prayer-author"
                    type="text"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="e.g., Sister Comfort"
                    className="w-full bg-black/50 border border-primary/30 rounded-2xl px-4 py-3.5 text-sm font-semibold text-white placeholder-white/30 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="prayer-content" className="block text-xs uppercase tracking-wider font-montserrat font-bold text-white/80 mb-1.5">
                    Your Prayer / Thanksgiving Note *
                  </label>
                  <textarea
                    id="prayer-content"
                    rows={4}
                    required
                    value={newPrayerText}
                    onChange={(e) => setNewPrayerText(e.target.value)}
                    placeholder="Share what is on your heart..."
                    className="w-full bg-black/50 border border-primary/30 rounded-2xl px-4 py-3.5 text-sm font-semibold text-white placeholder-white/30 focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                <LiquidButton
                  type="submit"
                  disabled={isSubmitting}
                  variant="primary"
                  className="w-full !py-3.5"
                >
                  <Send className="w-4 h-4 text-primary group-hover:text-obsidian" />
                  <span>{isSubmitting ? "Saving to Database..." : "Pin to Prayer Wall"}</span>
                </LiquidButton>

                {submitted && (
                  <div className="flex items-center justify-center gap-2 text-primary text-xs font-bold py-2.5 bg-primary/10 rounded-xl border border-primary/30">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Your prayer has been recorded in the database!</span>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Right: Real-time Database Display of Latest Notes */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-4">
              <span className="font-montserrat text-xs uppercase tracking-wider text-primary font-black flex items-center gap-2">
                <Database className="w-3.5 h-3.5" />
                Latest Community Prayers (Retained Live)
              </span>
              <span className="text-[11px] text-white/70 font-bold flex items-center gap-1.5 bg-black/50 px-3 py-1 rounded-full border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                Synchronized
              </span>
            </div>

            {isLoading ? (
              <div className="bg-black/40 backdrop-blur-xl p-10 rounded-3xl border border-white/10 text-center text-white/60 text-sm font-bold">
                Loading prayer wall...
              </div>
            ) : prayers.length === 0 ? (
              <div className="bg-black/40 backdrop-blur-xl p-10 rounded-3xl border border-white/10 text-center text-white/60 text-sm font-bold">
                No prayers yet. Be the first to share your petition!
              </div>
            ) : (
              <div className="space-y-4">
                {prayers.map((prayer) => (
                  <div
                    key={prayer.id}
                    className="bg-black/45 backdrop-blur-xl p-5 sm:p-6 rounded-3xl border border-white/10 hover:border-primary/40 transition-all flex flex-col justify-between group shadow-lg"
                  >
                    <p className="text-sm sm:text-base text-white/95 leading-relaxed font-semibold mb-3.5">
                      &ldquo;{prayer.text}&rdquo;
                    </p>
                    <div className="flex items-center justify-between text-xs text-white/60 pt-3 border-t border-white/10 gap-2 flex-wrap">
                      <span className="font-montserrat text-primary font-extrabold flex items-center gap-1.5">
                        <CustomSparkleEmoji className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                        <span>{prayer.author}</span>
                      </span>
                      <div className="flex items-center gap-2.5">
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/25">
                          <CustomPrayingHandsEmoji className="w-3.5 h-3.5" />
                          <span>Praying</span>
                        </span>
                        <span className="text-[11px] font-semibold text-white/50">{prayer.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
