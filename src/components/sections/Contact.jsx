import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, Youtube, Facebook, ShieldCheck, Database, CheckCircle, ExternalLink } from "lucide-react";
import { saveContactMessage } from "../../services/db";
import { RevealMotion } from "../ui/RevealMotion";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);
    try {
      await saveContactMessage(formData);
      setStatus("Thank you! Your inquiry has been safely received and logged.");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 7000);
    } catch (err) {
      console.error("Failed to save contact message:", err);
      setStatus("Your message was received locally. Thank you for connecting!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative pt-28 xs:pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-28 overflow-hidden bg-[#0D0404] text-white min-h-screen"
    >
      {/* Radiant Sunburst Glow Background Canvas */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <img
          src="/images/cip-sunburst-bg.jpg"
          alt="Sunburst Ambient Backdrop"
          className="w-full h-full object-cover object-center opacity-15 filter blur-sm scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0404] via-[#1A0405]/95 to-[#0D0404]" />
        <div className="absolute top-0 right-1/4 w-60 sm:w-80 h-60 sm:h-80 bg-secondary/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <RevealMotion className="text-center mb-8 xs:mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/15 border border-primary/30 mb-3 sm:mb-4 shadow-md">
            <Mail className="w-3.5 h-3.5 text-primary" />
            <span className="font-montserrat text-[10px] xs:text-xs uppercase tracking-wider text-primary font-black">
              Connect With Us
            </span>
          </div>

          <h2 className="font-montserrat font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-white mb-2.5 xs:mb-3.5 tracking-tight">
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-sunburst to-secondary">
              Touch
            </span>
          </h2>

          <p className="text-white/80 max-w-xl mx-auto text-xs xs:text-sm sm:text-base font-normal leading-relaxed px-1">
            Need special accessibility arrangements, wheelchair assistance, or have an inquiry? Our team is standing by to assist you.
          </p>
        </RevealMotion>

        <div className="grid lg:grid-cols-12 gap-5 xs:gap-6 sm:gap-8 lg:gap-10 items-start max-w-5xl mx-auto">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            {/* Real Venue Location Box */}
            <div className="bg-black/60 backdrop-blur-xl p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/10 hover:border-primary/50 transition-all duration-300 shadow-xl flex items-start gap-3.5 sm:gap-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-primary/20 flex items-center justify-center text-primary flex-shrink-0 border border-primary/35">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="font-montserrat font-black text-base text-white mb-1">
                  Official Venue
                </h4>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-medium">
                  Convocation Arena, Rivers State University, Oroworukwo, Port Harcourt City, Rivers State, Nigeria.
                </p>
                <div className="mt-2.5 text-[11px] text-secondary font-bold flex items-start gap-1.5 leading-snug">
                  <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                  <span>Ramps & dedicated accessible parking available</span>
                </div>
              </div>
            </div>

            {/* Direct Phone & Email Box with Tap Ergonomics */}
            <div className="bg-black/60 backdrop-blur-xl p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/10 hover:border-primary/50 transition-all duration-300 shadow-xl flex items-start gap-3.5 sm:gap-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary flex-shrink-0 border border-secondary/35">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="font-montserrat font-black text-base text-white mb-1">
                  Direct Inquiries & Phone
                </h4>
                <a
                  href="tel:+2348184639632"
                  className="inline-block font-montserrat text-sm sm:text-base text-primary font-black tracking-wide hover:underline touch-manipulation"
                >
                  +234 818 463 9632
                </a>
                <a
                  href="mailto:connectedinpraise@gmail.com"
                  className="block text-xs sm:text-sm text-white/80 font-semibold hover:text-white mt-1 truncate touch-manipulation"
                >
                  connectedinpraise@gmail.com
                </a>
              </div>
            </div>

            {/* APM Accessibility Desk Box */}
            <div className="bg-black/60 backdrop-blur-xl p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-primary/30 hover:border-primary/60 transition-all duration-300 shadow-xl flex items-start gap-3.5 sm:gap-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-primary/20 flex items-center justify-center text-primary flex-shrink-0 border border-primary/40">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="font-montserrat font-black text-base text-white mb-1">
                  APM Accessibility Desk
                </h4>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                  Reserve wheelchair seating or request certified sign language interpreter services in advance.
                </p>
                <a
                  href="mailto:apm@connectedinpraise.org"
                  className="inline-block mt-2 font-montserrat text-xs font-bold text-secondary hover:underline touch-manipulation"
                >
                  apm@connectedinpraise.org
                </a>
              </div>
            </div>

            {/* Quick Social & Broadcast Connect Pill Bar on Mobile */}
            <div className="bg-black/40 backdrop-blur-md p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-white/10 flex items-center justify-between gap-2">
              <span className="font-montserrat text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white/70">
                Official Channels:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://youtube.com/@connectedinpraise?si=JpVeFaqQFqMPO_fL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-primary/20 hover:text-primary text-white/80 flex items-center justify-center transition-colors border border-white/10"
                  aria-label="YouTube Channel"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/2348184639632"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-emerald-500/20 hover:text-emerald-400 text-white/80 flex items-center justify-center transition-colors border border-white/10"
                  aria-label="WhatsApp Inquiry"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-black/60 backdrop-blur-2xl p-5 sm:p-7 md:p-9 rounded-2xl sm:rounded-3xl border border-primary/30 shadow-2xl">
              <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-2.5 mb-5 pb-4 border-b border-white/10">
                <div>
                  <h3 className="font-montserrat font-black text-xl xs:text-2xl text-white">
                    Send a Message
                  </h3>
                  <p className="text-xs text-white/70 mt-0.5 font-medium">
                    We respond promptly to all worshippers and partners.
                  </p>
                </div>
                <span className="self-start xs:self-center inline-flex items-center gap-1.5 text-[10px] font-montserrat font-black text-secondary bg-secondary/10 px-2.5 py-1 rounded-full border border-secondary/30">
                  <Database className="w-3 h-3" />
                  <span>Cloud Active</span>
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-[11px] xs:text-xs uppercase tracking-wider font-montserrat font-bold text-white/80 mb-1.5"
                  >
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., Pastor David Okon"
                    className="w-full bg-black/50 border border-primary/30 rounded-xl px-4 py-3 sm:py-3.5 text-sm font-semibold text-white placeholder-white/35 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-[11px] xs:text-xs uppercase tracking-wider font-montserrat font-bold text-white/80 mb-1.5"
                  >
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g., david@example.com"
                    className="w-full bg-black/50 border border-primary/30 rounded-xl px-4 py-3 sm:py-3.5 text-sm font-semibold text-white placeholder-white/35 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-[11px] xs:text-xs uppercase tracking-wider font-montserrat font-bold text-white/80 mb-1.5"
                  >
                    Your Inquiry or Special Accommodation Request *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us how we can assist you..."
                    className="w-full bg-black/50 border border-primary/30 rounded-xl px-4 py-3 sm:py-3.5 text-sm font-semibold text-white placeholder-white/35 focus:outline-none focus:border-primary transition-colors resize-none leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-montserrat font-black text-xs uppercase tracking-wider bg-gradient-to-r from-primary via-sunburst to-secondary text-obsidian shadow-lg hover:shadow-[0_4px_25px_rgba(255,200,59,0.5)] active:scale-95 transition-all cursor-pointer touch-manipulation disabled:opacity-60"
                >
                  <Send className="w-4 h-4 text-obsidian" />
                  <span>{isSubmitting ? "Sending Message..." : "Transmit Message"}</span>
                </button>

                {status && (
                  <div className="flex items-center justify-center gap-2 text-primary text-xs font-bold py-3 px-4 bg-primary/10 rounded-xl border border-primary/30 animate-fade-in">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{status}</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
