import React, { useState, useEffect } from "react";
import { MessageSquare, Send, Quote, Sparkles, CheckCircle, Database } from "lucide-react";
import { testimonials } from "../../data/testimonials";
import { getLatestPrayers, savePrayerRequest } from "../../services/db";

export function Stories() {
  const [prayers, setPrayers] = useState([]);
  const [newPrayerText, setNewPrayerText] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch the latest 5 persistent prayers on mount (persists across refresh!)
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
      // Retain and display only the latest 4-5 messages
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
    <section id="stories" className="relative section-padding overflow-hidden bg-midnight-950">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative container-max">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-4 border border-gold/30">
            <MessageSquare className="w-4 h-4 text-gold-bright" />
            <span className="text-xs uppercase tracking-widest text-gold-bright font-black">
              Voices & Intercession
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-ivory mb-4">
            Stories of Grace & <span className="text-gold-bright gold-text">Prayer Wall</span>
          </h2>
          <p className="text-ivory/80 max-w-xl mx-auto text-sm sm:text-base font-semibold">
            Real people. Transformed lives. Post your prayer request or thanksgiving note to our
            persisted digital wall for united intercession.
          </p>
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="glass-card-warm p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-gold/25 flex flex-col justify-between relative shadow-xl group hover:border-gold/50 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-gold-bright/40 mb-4" />
              <p className="font-display italic text-base sm:text-lg text-ivory/95 leading-relaxed mb-6 font-semibold">
                &ldquo;{item.content}&rdquo;
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-gold/20">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gold-bright shadow-md"
                />
                <div>
                  <h4 className="font-display font-extrabold text-ivory text-base">{item.name}</h4>
                  <p className="text-xs text-gold-bright font-bold">{item.role}</p>
                  <p className="text-[10px] text-ivory/60 font-semibold">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Digital Prayer Wall & Interactive Submission */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left: Prayer Request Submission Form */}
          <div className="lg:col-span-5">
            <div className="glass-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-gold/30 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-gold-bright" />
                  <h3 className="font-display font-extrabold text-2xl text-ivory">Post a Prayer Note</h3>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-black text-neon bg-neon/10 px-2 py-0.5 rounded-full border border-neon/30">
                  <Database className="w-3 h-3" />
                  <span>Stored</span>
                </span>
              </div>

              <p className="text-ivory/70 text-xs sm:text-sm mb-6 font-medium">
                Your prayer is saved securely in our database so it persists across visits. Our prayer
                warriors pray over every single note.
              </p>

              <form onSubmit={handlePrayerSubmit} className="space-y-4">
                <div>
                  <label htmlFor="prayer-author" className="block text-xs uppercase tracking-wider text-ivory/80 font-bold mb-1">
                    Your Name (or Leave Blank for Anonymous)
                  </label>
                  <input
                    id="prayer-author"
                    type="text"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="e.g., Sister Comfort"
                    className="w-full bg-black/40 border border-gold/25 rounded-2xl px-4 py-3.5 text-sm font-semibold text-ivory placeholder-ivory/35 focus:outline-none focus:border-gold-bright transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="prayer-content" className="block text-xs uppercase tracking-wider text-ivory/80 font-bold mb-1">
                    Your Prayer / Thanksgiving Note *
                  </label>
                  <textarea
                    id="prayer-content"
                    rows={4}
                    required
                    value={newPrayerText}
                    onChange={(e) => setNewPrayerText(e.target.value)}
                    placeholder="Share what is on your heart..."
                    className="w-full bg-black/40 border border-gold/25 rounded-2xl px-4 py-3.5 text-sm font-semibold text-ivory placeholder-ivory/35 focus:outline-none focus:border-gold-bright transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold w-full flex items-center justify-center gap-2 py-4 cursor-pointer text-sm font-black uppercase tracking-wider shadow-lg disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? "Saving to Database..." : "Pin to Prayer Wall"}</span>
                </button>

                {submitted && (
                  <div className="flex items-center justify-center gap-2 text-gold-bright text-xs font-bold py-2 bg-gold/10 rounded-xl border border-gold/30">
                    <CheckCircle className="w-4 h-4 text-gold-bright" />
                    <span>Your prayer has been recorded in the database!</span>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Right: Real-time Database Display of Latest 4-5 Notes */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-wider text-gold-bright font-black flex items-center gap-2">
                <Database className="w-3.5 h-3.5" />
                Latest Community Prayers (Retained Live)
              </span>
              <span className="text-[11px] text-ivory/60 font-bold flex items-center gap-1.5 bg-black/40 px-3 py-1 rounded-full border border-gold/20">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                Persisted
              </span>
            </div>

            {isLoading ? (
              <div className="glass-card p-10 rounded-2xl text-center text-ivory/60 text-sm font-bold">
                Loading prayer wall...
              </div>
            ) : prayers.length === 0 ? (
              <div className="glass-card p-10 rounded-2xl text-center text-ivory/60 text-sm font-bold">
                No prayers yet. Be the first to share your petition!
              </div>
            ) : (
              <div className="space-y-3.5">
                {prayers.map((prayer) => (
                  <div
                    key={prayer.id}
                    className="glass-card p-5 sm:p-6 rounded-2xl border border-gold/20 hover:border-gold/40 transition-all flex flex-col justify-between group shadow-md"
                  >
                    <p className="text-sm sm:text-base text-ivory/95 leading-relaxed font-semibold mb-3">
                      &ldquo;{prayer.text}&rdquo;
                    </p>
                    <div className="flex items-center justify-between text-xs text-ivory/60 pt-2.5 border-t border-gold/15">
                      <span className="text-gold-bright font-extrabold flex items-center gap-1">
                        <span>✦</span>
                        <span>{prayer.author}</span>
                      </span>
                      <span className="text-[11px] font-bold text-ivory/50">{prayer.time}</span>
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
