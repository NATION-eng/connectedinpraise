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
                className={`flex flex-col items-center px-5 sm:px-7 py-3.5 rounded-2xl transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "glass-card-warm border-2 border-gold-bright shadow-[0_0_20px_rgba(255,196,0,0.35)] scale-105"
                    : "glass-card border border-gold/20 opacity-70 hover:opacity-100 hover:border-gold/40"
                }`}
              >
                <span
                  className={`font-display font-extrabold text-base sm:text-lg ${
                    isActive ? "text-gold-bright" : "text-ivory"
                  }`}
                >
                  {item.day}
                </span>
                <span className="text-xs text-ivory/80 font-bold">{item.date}</span>
                <span className="text-[10px] text-neon font-black mt-0.5">{item.timeSpan}</span>
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

        {/* Timeline Sessions List - Seamless Connected Track */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4 sm:space-y-6">
            {currentSchedule.sessions.map((session, sIdx) => (
              <div key={sIdx} className="flex items-start gap-3 sm:gap-5 group">
                {/* Connected Timeline Track & Node Column */}
                <div className="flex flex-col items-center self-stretch flex-shrink-0 pt-4">
                  {/* Glowing Node Marker */}
                  <div className="w-5 h-5 rounded-full bg-maroon-deep border-2 border-gold-bright flex items-center justify-center shadow-[0_0_14px_rgba(255,196,0,0.5)] group-hover:scale-115 group-hover:border-neon transition-all z-10">
                    <div className="w-2 h-2 rounded-full bg-neon group-hover:scale-125 transition-transform" />
                  </div>
                  {/* Continuous Spine Line to Next Node */}
                  {sIdx !== currentSchedule.sessions.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gradient-to-b from-gold-bright via-gold/40 to-gold/15 my-1.5 group-hover:from-neon transition-colors" />
                  )}
                </div>

                {/* Session Card - Seamlessly Connected */}
                <div className="flex-1 glass-card p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-gold/20 hover:border-gold-bright transition-all duration-300 group-hover:translate-x-1 shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2.5">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gold-bright flex-shrink-0" />
                      <span className="font-display font-extrabold text-gold-bright text-sm sm:text-base">
                        {session.time}
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5 flex-wrap">
                      <div className="flex items-center gap-1.5 text-xs text-ivory/70">
                        <MapPin className="w-3.5 h-3.5 text-neon flex-shrink-0" />
                        <span>{session.venue}</span>
                      </div>
                      {session.livestream && (
                        <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-gold-bright bg-gold/15 px-2.5 py-0.5 rounded-full border border-gold/30 shadow-sm">
                          <Video className="w-3 h-3 text-gold-bright" />
                          <span>Livestreamed</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <h4 className="font-cinzel font-black text-lg sm:text-xl text-ivory mb-2 group-hover:text-gold-bright transition-colors">
                    {session.name}
                  </h4>
                  <p className="text-ivory/80 text-xs sm:text-sm leading-relaxed font-medium">
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
