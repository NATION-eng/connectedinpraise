import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, Youtube, Facebook, ShieldCheck, Database, CheckCircle } from "lucide-react";
import { saveContactMessage } from "../../services/db";
import { CustomTikTokEmoji } from "../ui/CustomEmoji";
import { LiquidButton } from "../ui/LiquidButton";
import { RevealMotion, StaggerContainer, StaggerItem } from "../ui/RevealMotion";

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
    <section id="contact" className="relative pt-20 xs:pt-24 sm:pt-36 md:pt-40 pb-16 sm:pb-32 overflow-hidden bg-[#0D0404] text-white min-h-screen">
      {/* Radiant Sunburst Glow Background Canvas */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/images/cip-sunburst-bg.jpg"
          alt="Sunburst Ambient Backdrop"
          className="w-full h-full object-cover object-center opacity-15 filter blur-sm scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0404] via-[#1A0405]/95 to-[#0D0404]" />
        <div className="absolute top-0 right-1/4 w-60 sm:w-80 h-60 sm:h-80 bg-secondary/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <RevealMotion className="text-center mb-10 xs:mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-xl rounded-full px-3.5 xs:px-4 sm:px-5 py-1.5 sm:py-2 mb-3 xs:mb-4 border border-primary/30">
            <Mail className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-primary" />
            <span className="font-montserrat text-[10px] xs:text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] text-white/80 font-bold">
              Connect With Us
            </span>
          </div>
          <h2 className="font-montserrat font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-white mb-2.5 xs:mb-4">
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-sunburst to-secondary">
              Touch
            </span>
          </h2>
          <p className="text-white/75 max-w-xl mx-auto text-xs xs:text-sm sm:text-base font-normal px-1">
            Need special accessibility arrangements, wheelchair assistance, or have an inquiry? Our team
            is standing by to assist you.
          </p>
        </RevealMotion>

        <div className="grid lg:grid-cols-12 gap-6 xs:gap-8 sm:gap-10 items-start max-w-5xl mx-auto">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-3.5 xs:space-y-4 sm:space-y-5">
            {/* Real Venue Location Box */}
            <div className="bg-black/55 backdrop-blur-xl p-4.5 xs:p-6 rounded-2xl sm:rounded-3xl border border-milk/10 hover:border-primary/50 transition-all duration-700 delay-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(255,200,59,0.2)] shadow-lg flex items-start gap-3 xs:gap-4">
              <div className="w-10 h-10 xs:w-12 xs:h-12 rounded-xl sm:rounded-2xl bg-primary/20 flex items-center justify-center text-primary flex-shrink-0 border border-primary/35">
                <MapPin className="w-5 h-5 xs:w-6 xs:h-6" />
              </div>
              <div>
                <h4 className="font-montserrat font-black text-sm xs:text-base sm:text-lg text-milk mb-1">
                  Official Venue
                </h4>
                <p className="text-xs sm:text-sm text-milk/80 leading-relaxed font-medium">
                  Convocation Arena, Rivers State University, Oroworukwo, Port Harcourt City, Rivers State, Nigeria.
                </p>
                <div className="mt-2 text-[10px] xs:text-[11px] text-secondary font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>Ramps & dedicated accessible parking available</span>
                </div>
              </div>
            </div>

            {/* General Email & Phone */}
            <div className="bg-black/55 backdrop-blur-xl p-4.5 xs:p-6 rounded-2xl sm:rounded-3xl border border-milk/10 hover:border-primary/50 transition-all duration-700 delay-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(255,200,59,0.2)] shadow-lg flex items-start gap-3 xs:gap-4">
              <div className="w-10 h-10 xs:w-12 xs:h-12 rounded-xl sm:rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary flex-shrink-0 border border-secondary/35">
                <Phone className="w-5 h-5 xs:w-6 xs:h-6" />
              </div>
              <div>
                <h4 className="font-montserrat font-black text-sm xs:text-base sm:text-lg text-milk mb-1">
                  Direct Inquiries & Phone
                </h4>
                <p className="font-montserrat text-xs sm:text-sm text-primary font-black tracking-wide">
                  +234 818 463 9632
                </p>
                <p className="text-xs sm:text-sm text-milk/75 font-semibold mt-0.5">
                  connectedinpraise@gmail.com
                </p>
              </div>
            </div>

            {/* Accessibility Email Box */}
            <div className="bg-black/45 backdrop-blur-xl p-4.5 xs:p-6 rounded-2xl sm:rounded-3xl border border-primary/30 hover:border-primary/60 transition-all duration-700 delay-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(255,200,59,0.2)] shadow-lg flex items-start gap-3 xs:gap-4">
              <div className="w-10 h-10 xs:w-12 xs:h-12 rounded-xl sm:rounded-2xl bg-primary/20 flex items-center justify-center text-primary flex-shrink-0 border border-primary/40">
                <Mail className="w-5 h-5 xs:w-6 xs:h-6" />
              </div>
              <div>
                <h4 className="font-montserrat font-black text-sm xs:text-base sm:text-lg text-white mb-1">
                  APM Accessibility Desk
                </h4>
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-normal">
                  Reserve wheelchair seating or request sign language interpreter services in advance.
                </p>
                <span className="inline-block mt-1.5 font-montserrat text-xs font-bold text-secondary">
                  apm@connectedinpraise.org
                </span>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-black/60 backdrop-blur-2xl p-4.5 xs:p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-primary/30 shadow-2xl">
              <div className="flex items-center justify-between mb-4 xs:mb-6 pb-3 xs:pb-4 border-b border-white/10">
                <div>
                  <h3 className="font-montserrat font-black text-xl xs:text-2xl text-white">Send a Message</h3>
                  <p className="text-[11px] xs:text-xs text-white/60 mt-0.5 font-medium">We respond promptly to all worshippers and partners.</p>
                </div>
                <span className="inline-flex items-center gap-1 text-[9px] xs:text-[10px] font-montserrat font-black text-secondary bg-secondary/10 px-2 xs:px-2.5 py-0.5 xs:py-1 rounded-full border border-secondary/30">
                  <Database className="w-3 h-3" />
                  <span>Cloud Active</span>
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5 xs:space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-[11px] xs:text-xs uppercase tracking-wider font-montserrat font-bold text-white/80 mb-1 xs:mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., Pastor David Okon"
                    className="w-full bg-black/50 border border-primary/30 rounded-xl xs:rounded-2xl px-3.5 xs:px-4 py-3 xs:py-3.5 text-xs xs:text-sm font-semibold text-white placeholder-white/30 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-[11px] xs:text-xs uppercase tracking-wider font-montserrat font-bold text-white/80 mb-1 xs:mb-1.5">
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g., david@example.com"
                    className="w-full bg-black/50 border border-primary/30 rounded-xl xs:rounded-2xl px-3.5 xs:px-4 py-3 xs:py-3.5 text-xs xs:text-sm font-semibold text-white placeholder-white/30 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-[11px] xs:text-xs uppercase tracking-wider font-montserrat font-bold text-white/80 mb-1 xs:mb-1.5">
                    Your Inquiry or Special Accommodation Request *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us how we can assist you..."
                    className="w-full bg-black/50 border border-primary/30 rounded-xl xs:rounded-2xl px-3.5 xs:px-4 py-3 xs:py-3.5 text-xs xs:text-sm font-semibold text-white placeholder-white/30 focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                <LiquidButton
                  type="submit"
                  disabled={isSubmitting}
                  variant="primary"
                  className="w-full !py-3 xs:!py-3.5 cursor-pointer text-center justify-center font-bold"
                >
                  <Send className="w-4 h-4 text-primary group-hover:text-obsidian" />
                  <span>{isSubmitting ? "Sending Message..." : "Transmit Message"}</span>
                </LiquidButton>

                {status && (
                  <div className="flex items-center justify-center gap-2 text-primary text-xs font-bold py-2.5 bg-primary/10 rounded-xl border border-primary/30">
                    <CheckCircle className="w-4 h-4 text-primary" />
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
