import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, Youtube, Instagram, Facebook } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Thank you! Your message has been sent to the planning team.");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus(""), 5000);
  };

  return (
    <section id="contact" className="relative section-padding overflow-hidden bg-maroon-deep">
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-neon/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative container-max">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-4 border border-gold/25">
            <Mail className="w-4 h-4 text-gold-bright" />
            <span className="text-xs uppercase tracking-widest text-ivory/80 font-bold">
              Connect With Us
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-ivory mb-4">
            Get in <span className="text-gold-bright gold-text">Touch</span>
          </h2>
          <p className="text-ivory/70 max-w-xl mx-auto text-sm sm:text-base font-normal">
            Need special accessibility arrangements, want to volunteer, or have an inquiry? Our team is
            ready to support you.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Location Box */}
            <div className="glass-card p-6 rounded-3xl border border-gold/20 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gold/15 flex items-center justify-center text-gold-bright flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-ivory mb-1">Venue Location</h4>
                <p className="text-xs sm:text-sm text-ivory/70 leading-relaxed font-normal">
                  Convocation Arena, Rivers State University (RSU), Port Harcourt, Rivers State,
                  Nigeria.
                </p>
                <span className="inline-block mt-2 text-[11px] text-gold-bright font-semibold">
                  Wheelchair ramp access at Gates 1 & 2
                </span>
              </div>
            </div>

            {/* Email Box */}
            <div className="glass-card p-6 rounded-3xl border border-gold/20 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gold/15 flex items-center justify-center text-gold-bright flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-ivory mb-1">Email Inquiry</h4>
                <p className="text-xs sm:text-sm text-ivory/70 font-normal">
                  connectedinpraise@gmail.com
                </p>
                <p className="text-[11px] text-ivory/50 mt-1">General inquiries & choir coordination</p>
              </div>
            </div>

            {/* WhatsApp Direct Line */}
            <a
              href="https://wa.me/2348000000000?text=Hello%20Connected%20in%20Praise%20Team"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card-warm p-6 rounded-3xl border border-green-500/30 flex items-center justify-between group hover:border-green-400 transition-all block cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-ivory mb-0.5">WhatsApp Desk</h4>
                  <p className="text-xs text-ivory/70">Instant support & Accessibility hotline</p>
                </div>
              </div>
              <span className="text-xs text-green-400 font-bold group-hover:translate-x-1 transition-transform">
                Chat &rarr;
              </span>
            </a>

            {/* Social Icons Strip */}
            <div className="pt-4 flex items-center gap-3">
              <a
                href="https://youtube.com/@connectedinpraise"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-2xl glass flex items-center justify-center text-gold-bright hover:bg-gold/20 transition-all"
                aria-label="YouTube channel"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-2xl glass flex items-center justify-center text-gold-bright hover:bg-gold/20 transition-all"
                aria-label="Instagram profile"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-2xl glass flex items-center justify-center text-gold-bright hover:bg-gold/20 transition-all"
                aria-label="Facebook page"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 rounded-3xl border border-gold/30 shadow-2xl">
              <h3 className="font-display font-bold text-2xl text-ivory mb-2">Send a Message</h3>
              <p className="text-xs sm:text-sm text-ivory/60 mb-6 font-normal">
                Let us know how we can best welcome you to Connected in Praise 2026.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs uppercase tracking-wider text-ivory/70 font-semibold mb-1">
                    Your Full Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., Sister Grace Amadi"
                    className="w-full bg-black/40 border border-gold/20 rounded-2xl px-4 py-3 text-sm text-ivory placeholder-ivory/30 focus:outline-none focus:border-gold-bright transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs uppercase tracking-wider text-ivory/70 font-semibold mb-1">
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g., grace@example.com"
                    className="w-full bg-black/40 border border-gold/20 rounded-2xl px-4 py-3 text-sm text-ivory placeholder-ivory/30 focus:outline-none focus:border-gold-bright transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs uppercase tracking-wider text-ivory/70 font-semibold mb-1">
                    Your Message / Accessibility Needs *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us your questions, special accommodations needed, or how you want to join..."
                    className="w-full bg-black/40 border border-gold/20 rounded-2xl px-4 py-3 text-sm text-ivory placeholder-ivory/30 focus:outline-none focus:border-gold-bright transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold w-full flex items-center justify-center gap-2 py-3.5 cursor-pointer text-sm font-bold shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>

                {status && (
                  <p className="text-center text-xs text-gold-bright font-semibold py-2">
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
