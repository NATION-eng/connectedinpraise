import React from "react";
import { Music, Users, Target, Award, ArrowUpRight } from "lucide-react";

export function JerusalemChoir() {
  return (
    <section id="choir" className="relative section-padding overflow-hidden bg-maroon-deep">
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gold/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative container-max">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Floating Badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-gold/20 shadow-2xl group">
              <img
                src="https://images.pexels.com/photos/8815037/pexels-photo-8815037.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Jerusalem Choir in worship performance"
                className="w-full h-[420px] sm:h-[500px] object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep via-maroon-deep/30 to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-2xl border border-gold/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center border border-gold/40 text-gold-bright">
                    <Music className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-ivory text-base sm:text-lg">
                      Jerusalem Choir
                    </h4>
                    <p className="text-xs text-gold-bright">Vision Bearer & Host Since 2019</p>
                  </div>
                </div>
                <div className="hidden sm:block text-right">
                  <span className="text-[10px] uppercase tracking-wider text-ivory/60 font-semibold block">
                    Focus
                  </span>
                  <span className="text-xs text-ivory font-bold">Worship Evangelism</span>
                </div>
              </div>
            </div>

            {/* Glowing Accent Ring */}
            <div className="absolute -inset-2 rounded-3xl border border-gold/10 -z-10 pointer-events-none" />
          </div>

          {/* Right Column: Narrative & Stats */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-gold" />
              <span className="text-xs uppercase tracking-widest text-gold-bright font-bold">
                Meet the Host
              </span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-ivory leading-tight mb-6">
              Jerusalem Choir
              <span className="block text-2xl sm:text-3xl text-gold-bright gold-text mt-2">
                Ministers of Grace & Reconciliation
              </span>
            </h2>

            <div className="relative pl-6 border-l-2 border-gold/40 mb-8 py-2">
              <p className="font-display italic text-lg sm:text-xl text-ivory/90 leading-relaxed">
                &ldquo;Creating an atmosphere where people encounter God personally, forge unbreakable
                bonds, and experience the liberating power of authentic praise.&rdquo;
              </p>
            </div>

            <p className="text-ivory/70 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              Jerusalem Choir is far more than a musical aggregation — it is a vibrant evangelical movement.
              Through consecrated vocals, rigorous musical excellence, and deep compassion for the
              marginalized, the choir has touched tens of thousands of worshippers across Port Harcourt and
              beyond.
            </p>

            <p className="text-ivory/60 text-sm leading-relaxed mb-8 font-normal">
              For 2026, the choir is dedicating its flagship concert to breaking disability barriers,
              welcoming every voice into God&apos;s holy sanctuary.
            </p>

            {/* Key Accomplishments Badges */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <div className="glass-card p-4 rounded-2xl text-center border border-gold/15">
                <Award className="w-5 h-5 text-gold-bright mx-auto mb-2" />
                <div className="font-display font-bold text-lg text-ivory">Annual</div>
                <div className="text-[10px] text-ivory/60 uppercase tracking-wider">Since 2019</div>
              </div>
              <div className="glass-card p-4 rounded-2xl text-center border border-gold/15">
                <Users className="w-5 h-5 text-neon mx-auto mb-2" />
                <div className="font-display font-bold text-lg text-ivory">Thousands</div>
                <div className="text-[10px] text-ivory/60 uppercase tracking-wider">Reachable</div>
              </div>
              <div className="glass-card p-4 rounded-2xl text-center border border-gold/15">
                <Target className="w-5 h-5 text-gold-bright mx-auto mb-2" />
                <div className="font-display font-bold text-lg text-ivory">Inclusion</div>
                <div className="text-[10px] text-ivory/60 uppercase tracking-wider">APM 2026</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
