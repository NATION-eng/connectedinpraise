import React, { useState } from "react";
import { Calendar, Clock, MapPin, Video, CheckCircle2 } from "lucide-react";
import { scheduleData } from "../../data/schedule";

export function Experience() {
  const [activeDayIdx, setActiveDayIdx] = useState(0);
  const currentSchedule = scheduleData[activeDayIdx];

  return (
    <section id="experience" className="relative section-padding overflow-hidden bg-midnight-950">
      <div className="absolute inset-0 bg-gradient-to-b from-maroon-deep via-midnight-950 to-maroon-deep" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative container-max">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-4 border border-gold/25">
            <Calendar className="w-4 h-4 text-gold-bright" />
            <span className="text-xs uppercase tracking-widest text-ivory/80 font-bold">
              4–7 November 2026
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-ivory mb-4">
            The 2026 <span className="text-gold-bright gold-text">Experience</span>
          </h2>
          <p className="text-ivory/70 max-w-xl mx-auto text-sm sm:text-base font-normal">
            Four consecrated days. One unified movement. Explore the daily itinerary and prepare your
            heart for an encounter with God.
          </p>
        </div>

        {/* Day Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14">
          {scheduleData.map((item, idx) => {
            const isActive = activeDayIdx === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveDayIdx(idx)}
                className={`flex flex-col items-center px-6 py-3 rounded-2xl transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "glass-card-warm border-2 border-gold-bright shadow-[0_0_20px_rgba(255,196,0,0.3)] scale-105"
                    : "glass-card border border-gold/15 opacity-60 hover:opacity-100 hover:border-gold/30"
                }`}
              >
                <span
                  className={`font-display font-bold text-base sm:text-lg ${
                    isActive ? "text-gold-bright" : "text-ivory"
                  }`}
                >
                  {item.day}
                </span>
                <span className="text-xs text-ivory/60 font-semibold">{item.date}</span>
              </button>
            );
          })}
        </div>

        {/* Active Day Description Card */}
        <div className="max-w-4xl mx-auto mb-10 text-center">
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-ivory mb-2">
            {currentSchedule.title}
          </h3>
          <p className="text-ivory/70 text-sm sm:text-base max-w-2xl mx-auto">
            {currentSchedule.description}
          </p>
        </div>

        {/* Timeline Sessions List */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Glowing Guide Line */}
          <div className="absolute left-6 md:left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-gold via-neon to-transparent opacity-40 pointer-events-none" />

          <div className="space-y-4">
            {currentSchedule.sessions.map((session, sIdx) => (
              <div key={sIdx} className="relative pl-14 md:pl-20 group">
                {/* Timeline Dot Marker */}
                <div className="absolute left-4 md:left-6 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-maroon-deep border-2 border-gold flex items-center justify-center group-hover:border-gold-bright transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-neon group-hover:scale-125 transition-transform" />
                </div>

                {/* Session Card */}
                <div className="glass-card p-5 sm:p-6 rounded-3xl border border-gold/15 hover:border-gold/40 transition-all duration-300 group-hover:translate-x-1 shadow-md">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gold-bright" />
                      <span className="font-display font-bold text-gold-bright text-base">
                        {session.time}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 flex-wrap">
                      <div className="flex items-center gap-1.5 text-xs text-ivory/60">
                        <MapPin className="w-3.5 h-3.5 text-neon" />
                        <span>{session.venue}</span>
                      </div>
                      {session.livestream && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-gold-bright bg-gold/10 px-2.5 py-0.5 rounded-full border border-gold/20">
                          <Video className="w-3 h-3 text-gold-bright" />
                          <span>Livestreamed</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <h4 className="font-display font-bold text-lg sm:text-xl text-ivory mb-2 group-hover:text-gold-bright transition-colors">
                    {session.name}
                  </h4>
                  <p className="text-ivory/70 text-xs sm:text-sm leading-relaxed font-normal">
                    {session.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Highlights Pills */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="glass-card p-5 rounded-2xl text-center border border-gold/15">
            <CheckCircle2 className="w-6 h-6 text-gold-bright mx-auto mb-2" />
            <h5 className="font-display font-bold text-base text-ivory mb-1">Spirit-Led Worship</h5>
            <p className="text-xs text-ivory/60">Anointed music ministries across all sessions</p>
          </div>
          <div className="glass-card p-5 rounded-2xl text-center border border-gold/15">
            <CheckCircle2 className="w-6 h-6 text-neon mx-auto mb-2" />
            <h5 className="font-display font-bold text-base text-ivory mb-1">Total Inclusion</h5>
            <p className="text-xs text-ivory/60">ASL sign language & physical accessibility</p>
          </div>
          <div className="glass-card p-5 rounded-2xl text-center border border-gold/15">
            <CheckCircle2 className="w-6 h-6 text-gold-bright mx-auto mb-2" />
            <h5 className="font-display font-bold text-base text-ivory mb-1">Free Admission</h5>
            <p className="text-xs text-ivory/60">All are welcomed without cost or condition</p>
          </div>
        </div>
      </div>
    </section>
  );
}
