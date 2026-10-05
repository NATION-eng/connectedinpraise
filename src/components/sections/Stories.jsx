import React, { useState } from "react";
import { MessageSquare, Heart, Send, Quote, Sparkles, CheckCircle } from "lucide-react";
import { testimonials, prayerWallNotes } from "../../data/testimonials";

export function Stories() {
  const [prayers, setPrayers] = useState(prayerWallNotes);
  const [newPrayerText, setNewPrayerText] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handlePrayerSubmit = (e) => {
    e.preventDefault();
    if (!newPrayerText.trim()) return;

    const newNote = {
      id: Date.now(),
      text: newPrayerText.trim(),
      author: authorName.trim() || "A Believer",
      time: "Just now",
    };

    setPrayers([newNote, ...prayers]);
    setNewPrayerText("");
    setAuthorName("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="stories" className="relative section-padding overflow-hidden bg-midnight-950">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative container-max">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-4 border border-gold/25">
            <MessageSquare className="w-4 h-4 text-gold-bright" />
            <span className="text-xs uppercase tracking-widest text-ivory/80 font-bold">
              Voices & Intercession
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-ivory mb-4">
            Stories of Grace & <span className="text-gold-bright gold-text">Prayer Wall</span>
          </h2>
          <p className="text-ivory/70 max-w-xl mx-auto text-sm sm:text-base font-normal">
            Real people. Transformed lives. Leave your prayer request on our sacred digital wall and
            receive intercession from our dedicated prayer team.
          </p>
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="glass-card-warm p-8 rounded-3xl border border-gold/20 flex flex-col justify-between relative shadow-xl group hover:border-gold/45 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-gold-bright/30 mb-4" />
              <p className="font-display italic text-base sm:text-lg text-ivory/90 leading-relaxed mb-6">
                &ldquo;{item.content}&rdquo;
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-gold/15">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border border-gold/40 shadow-sm"
                />
                <div>
                  <h4 className="font-display font-bold text-ivory text-base">{item.name}</h4>
                  <p className="text-xs text-gold-bright font-medium">{item.role}</p>
                  <p className="text-[10px] text-ivory/50">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Digital Prayer Wall & Interactive Submission */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left: Prayer Request Submission Form */}
          <div className="lg:col-span-5">
            <div className="glass-card p-8 rounded-3xl border border-gold/30 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-gold-bright" />
                <h3 className="font-display font-bold text-2xl text-ivory">Post a Prayer Note</h3>
              </div>
              <p className="text-ivory/70 text-xs sm:text-sm mb-6 font-normal">
                Share a thanksgiving testimony or an urgent prayer need. Our global team intercedes for
                every note during our live sessions.
              </p>

              <form onSubmit={handlePrayerSubmit} className="space-y-4">
                <div>
                  <label htmlFor="prayer-name" className="block text-xs uppercase tracking-wider text-ivory/70 font-semibold mb-1">
                    Your Name (or Leave Blank for Anonymous)
                  </label>
                  <input
                    id="prayer-name"
                    type="text"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="e.g., Sister Comfort"
                    className="w-full bg-black/40 border border-gold/20 rounded-2xl px-4 py-3 text-sm text-ivory placeholder-ivory/30 focus:outline-none focus:border-gold-bright transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="prayer-text" className="block text-xs uppercase tracking-wider text-ivory/70 font-semibold mb-1">
                    Your Prayer / Thanksgiving Note *
                  </label>
                  <textarea
                    id="prayer-text"
                    rows={4}
                    required
                    value={newPrayerText}
                    onChange={(e) => setNewPrayerText(e.target.value)}
                    placeholder="Write your heart here..."
                    className="w-full bg-black/40 border border-gold/20 rounded-2xl px-4 py-3 text-sm text-ivory placeholder-ivory/30 focus:outline-none focus:border-gold-bright transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold w-full flex items-center justify-center gap-2 py-3.5 cursor-pointer text-sm font-bold"
                >
                  <Send className="w-4 h-4" />
                  <span>Pin to Prayer Wall</span>
                </button>

                {submitted && (
                  <div className="flex items-center justify-center gap-2 text-gold-bright text-xs font-semibold py-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Your note has been pinned to the sacred wall!</span>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Right: Live Interactive Stream of Notes */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-wider text-gold-bright font-bold">
                Live Community Notes ({prayers.length})
              </span>
              <span className="text-[11px] text-ivory/50 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                Live Feed
              </span>
            </div>

            <div className="space-y-3 max-h-[460px] overflow-y-auto pr-2">
              {prayers.map((prayer) => (
                <div
                  key={prayer.id}
                  className="glass-card p-5 rounded-2xl border border-gold/15 hover:border-gold/30 transition-all flex flex-col justify-between group"
                >
                  <p className="text-sm text-ivory/90 leading-relaxed font-normal mb-3">
                    &ldquo;{prayer.text}&rdquo;
                  </p>
                  <div className="flex items-center justify-between text-xs text-ivory/50 pt-2 border-t border-gold/10">
                    <span className="text-gold-bright font-semibold">{prayer.author}</span>
                    <span className="text-[10px]">{prayer.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
