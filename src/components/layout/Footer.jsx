import React from "react";
import { Heart, Youtube, Instagram, Facebook, ArrowUp } from "lucide-react";
import { Logo } from "../ui/Logo";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-midnight-950 border-t border-gold/15 pt-16 pb-12 overflow-hidden text-ivory/70">
      <div className="relative container-max px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gold/10">
          {/* Brand & Wordmark */}
          <div className="md:col-span-5 space-y-4">
            <Logo size="nav" />
            <p className="text-xs sm:text-sm text-ivory/60 max-w-sm leading-relaxed font-normal">
              Connected in Praise is an annual praise and worship evangelism concert hosted by
              Jerusalem Choir in strategic partnership with Adventist Possibility Ministries (APM).
            </p>
            <div className="text-xs text-gold-bright font-semibold">
              Convocation Arena, RSU, Port Harcourt · Nov 4–7, 2026
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-base text-ivory uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#about" className="hover:text-gold-bright transition-colors">
                  About APM Mission
                </a>
              </li>
              <li>
                <a href="#why-praise" className="hover:text-gold-bright transition-colors">
                  Why Do You Praise?
                </a>
              </li>
              <li>
                <a href="#choir" className="hover:text-gold-bright transition-colors">
                  Jerusalem Choir Host
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-gold-bright transition-colors">
                  4-Day Itinerary
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-gold-bright transition-colors">
                  Photo Archives
                </a>
              </li>
              <li>
                <a href="#stories" className="hover:text-gold-bright transition-colors">
                  Stories & Prayer Wall
                </a>
              </li>
            </ul>
          </div>

          {/* Accessibility Statement & Socials */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-base text-ivory uppercase tracking-wider">
              Inclusion Commitment
            </h4>
            <p className="text-xs text-ivory/60 leading-relaxed font-normal">
              Connected in Praise is committed to full accessibility. Every venue entrance, stage
              presentation, and worship program is engineered for barrier-free participation.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://youtube.com/@connectedinpraise"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl glass flex items-center justify-center text-gold-bright hover:bg-gold/20 transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl glass flex items-center justify-center text-gold-bright hover:bg-gold/20 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl glass flex items-center justify-center text-gold-bright hover:bg-gold/20 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory/50">
          <p>
            &copy; 2026 Connected in Praise & Jerusalem Choir. All rights reserved. Built with{" "}
            <Heart className="w-3.5 h-3.5 text-neon inline" /> for God&apos;s glory.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-gold-bright hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
