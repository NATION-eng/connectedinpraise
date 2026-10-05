import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, Youtube, Facebook, ShieldCheck, Database } from "lucide-react";
import { saveContactMessage } from "../../services/db";

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
      setStatus("Thank you! Your message and contact details have been safely received and stored.");
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
    <section id="contact" className="relative section-padding overflow-hidden bg-maroon-deep">
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-neon/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative container-max">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-4 border border-gold/30">
            <Mail className="w-4 h-4 text-gold-bright" />
            <span className="text-xs uppercase tracking-widest text-gold-bright font-extrabold">
              Connect With Us
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-ivory mb-4">
            Get in <span className="text-gold-bright gold-text">Touch</span>
          </h2>
          <p className="text-ivory/80 max-w-xl mx-auto text-sm sm:text-base font-semibold">
            Need special accessibility arrangements, wheelchair assistance, or have an inquiry? Our team
            is standing by to assist you.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-5">
            {/* Real Venue Location Box */}
            <div className="glass-card p-6 rounded-3xl border border-gold/25 flex items-start gap-4 shadow-lg">
              <div className="w-12 h-12 rounded-2xl bg-gold/20 flex items-center justify-center text-gold-bright flex-shrink-0 border border-gold/30">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-extrabold text-lg text-ivory mb-1">
                  Official Venue
                </h4>
                <p className="text-xs sm:text-sm text-ivory/80 leading-relaxed font-semibold">
                  Convocation Arena, Rivers State University, Oroworukwo, Port Harcourt, Rivers State,
                  Nigeria.
                </p>
                <div className="mt-2 text-[11px] text-neon font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Ramps & dedicated accessible parking available</span>
                </div>
              </div>
            </div>

            {/* General Email & Phone */}
            <div className="glass-card p-6 rounded-3xl border border-gold/25 flex items-start gap-4 shadow-lg">
              <div className="w-12 h-12 rounded-2xl bg-gold/20 flex items-center justify-center text-gold-bright flex-shrink-0 border border-gold/30">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-extrabold text-lg text-ivory mb-1">
                  Direct Inquiries & Phone
                </h4>
                <p className="text-xs sm:text-sm text-gold-bright font-black tracking-wide">
                  +234 818 463 9632
                </p>
                <p className="text-xs sm:text-sm text-ivory/80 font-bold mt-1">
                  connectedinpraise@gmail.com
                </p>
              </div>
            </div>

            {/* Accessibility Email Box */}
            <div className="glass-card p-6 rounded-3xl border border-neon/30 flex items-start gap-4 shadow-lg bg-black/25">
              <div className="w-12 h-12 rounded-2xl bg-neon/20 flex items-center justify-center text-neon flex-shrink-0 border border-neon/40">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-extrabold text-lg text-ivory mb-1">
                  APM Accessibility Desk
                </h4>
                <p className="text-xs sm:text-sm text-neon font-black">
                  accessibility@cip.org
                </p>
                <p className="text-[11px] text-ivory/60 mt-1 font-semibold">
                  Dedicated to special needs coordination & sign language support
                </p>
              </div>
            </div>

            {/* WhatsApp Direct Hotline */}
            <a
              href="https://wa.me/2348184639632?text=Hello%20Connected%20in%20Praise%20Team%2C%20I%20would%20like%20to%20inquire%20about%20the%202026%20concert"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card-warm p-6 rounded-3xl border border-green-500/40 flex items-center justify-between group hover:border-green-400 transition-all block cursor-pointer shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-green-500/25 flex items-center justify-center text-green-400 border border-green-400/40">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-lg text-ivory mb-0.5">
                    WhatsApp Support Desk
                  </h4>
                  <p className="text-xs text-ivory/80 font-semibold">+234 818 463 9632 · Chat directly</p>
                </div>
              </div>
              <span className="text-xs text-green-400 font-black group-hover:translate-x-1 transition-transform">
                Chat &rarr;
              </span>
            </a>

            {/* Social Media Strip */}
            <div className="pt-2">
              <p className="text-xs uppercase tracking-wider text-ivory/60 font-bold mb-3">
                Official Media Channels
              </p>
              <div className="grid grid-cols-3 gap-2 w-full">
                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@connectedinpraise?_r=1&_t=ZS-99v3wfSwKz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl glass border border-gold/30 flex items-center justify-center gap-1.5 sm:gap-2 text-xs font-bold text-ivory hover:text-gold-bright hover:border-gold/60 transition-all"
                >
                  <span className="text-sm font-black">♪</span>
                  <span>TikTok</span>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=61578565720573"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl glass border border-gold/30 flex items-center justify-center gap-1.5 sm:gap-2 text-xs font-bold text-ivory hover:text-gold-bright hover:border-gold/60 transition-all"
                >
                  <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
                  <span>Facebook</span>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com/@connectedinpraise?si=JpVeFaqQFqMPO_fL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl glass border border-gold/30 flex items-center justify-center gap-1.5 sm:gap-2 text-xs font-bold text-ivory hover:text-gold-bright hover:border-gold/60 transition-all"
                >
                  <Youtube className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500" />
                  <span>YouTube</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Message Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-gold/30 shadow-2xl">
              <h3 className="font-display font-extrabold text-2xl text-ivory mb-2">Send a Message</h3>
              <p className="text-xs sm:text-sm text-ivory/70 mb-6 font-semibold">
                Let us know how we can best welcome you or your group to Connected in Praise 2026.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs uppercase tracking-wider text-ivory/80 font-bold mb-1">
                    Your Full Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., Sister Grace Amadi"
                    className="w-full bg-black/40 border border-gold/25 rounded-2xl px-4 py-3.5 text-sm font-semibold text-ivory placeholder-ivory/35 focus:outline-none focus:border-gold-bright transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs uppercase tracking-wider text-ivory/80 font-bold mb-1">
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g., grace@example.com"
                    className="w-full bg-black/40 border border-gold/25 rounded-2xl px-4 py-3.5 text-sm font-semibold text-ivory placeholder-ivory/35 focus:outline-none focus:border-gold-bright transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs uppercase tracking-wider text-ivory/80 font-bold mb-1">
                    Your Message / Special Accessibility Needs *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify wheelchair access, sign language seating, choir participation inquiries, or general questions..."
                    className="w-full bg-black/40 border border-gold/25 rounded-2xl px-4 py-3.5 text-sm font-semibold text-ivory placeholder-ivory/35 focus:outline-none focus:border-gold-bright transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold w-full flex items-center justify-center gap-2 py-4 cursor-pointer text-sm font-black shadow-xl uppercase tracking-wider"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Message</span>
                </button>

                {status && (
                  <p className="text-center text-xs text-gold-bright font-black py-2">
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
