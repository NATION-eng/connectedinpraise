import React from "react";
import { Heart, Youtube, Facebook, ArrowUp, Lock } from "lucide-react";
import { Logo } from "../ui/Logo";
import { CustomTikTokEmoji } from "../ui/CustomEmoji";

export function Footer({ onOpenAdmin }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#140405] to-[#0A0203] border-t border-primary/20 pt-16 pb-12 overflow-hidden text-white/80 font-sans">
      {/* Decorative Golden Top Glow Horizon */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent shadow-[0_0_20px_rgba(255,200,59,0.5)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-primary/15">
          {/* Brand & Wordmark */}
          <div className="md:col-span-5 space-y-4">
            <Logo size="nav" />
            <p className="text-xs sm:text-sm text-white/80 max-w-sm leading-relaxed font-medium">
              Connected in Praise is an annual praise and worship evangelism concert hosted by
              Jerusalem Choir in strategic partnership with Adventist Possibility Ministries (APM).
            </p>
            <div className="text-xs text-primary font-montserrat font-bold tracking-wide">
              Convocation Arena, Rivers State University, Oroworukwo, Port Harcourt
            </div>
            <div className="text-xs text-secondary font-montserrat font-black tracking-wider uppercase">
              Nov 4–6: 6:00 PM – 8:00 PM · Sabbath Nov 7: 8:00 AM – 12:00 PM
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-montserrat font-black text-sm text-sunburst uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-semibold">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About APM Inclusion
                </a>
              </li>
              <li>
                <a href="#why-praise" className="hover:text-primary transition-colors">
                  Why Do You Praise?
                </a>
              </li>
              <li>
                <a href="#choir" className="hover:text-primary transition-colors">
                  Jerusalem Choir Host
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-primary transition-colors">
                  Program Schedule
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-primary transition-colors">
                  Visual Archives (Gallery)
                </a>
              </li>
              <li>
                <a href="#stories" className="hover:text-primary transition-colors">
                  Stories & Prayer Wall
                </a>
              </li>
            </ul>
          </div>

          {/* Official Media & Socials */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-montserrat font-black text-sm text-sunburst uppercase tracking-widest">
              Official Media Channels
            </h4>
            <p className="text-xs text-white/70 leading-relaxed font-medium">
              Join thousands of worshippers online. Follow our official pages for real-time video
              broadcasts, photos, and live session updates.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@connectedinpraise?_r=1&_t=ZS-99v3wfSwKz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-2xl bg-white/5 border border-primary/25 flex items-center justify-center text-white hover:text-primary hover:border-primary/60 hover:bg-primary/10 transition-all group"
                aria-label="TikTok"
                title="Follow on TikTok"
              >
                <CustomTikTokEmoji className="w-4 h-4 text-white group-hover:text-primary transition-colors" />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61578565720573"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-2xl bg-white/5 border border-primary/25 flex items-center justify-center text-blue-400 hover:text-primary hover:border-primary/60 hover:bg-primary/10 transition-all"
                aria-label="Facebook"
                title="Connect on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@connectedinpraise?si=JpVeFaqQFqMPO_fL"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-2xl bg-white/5 border border-primary/25 flex items-center justify-center text-red-500 hover:text-primary hover:border-primary/60 hover:bg-primary/10 transition-all"
                aria-label="YouTube"
                title="Subscribe on YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            <div className="text-xs text-white/60 pt-2 font-medium">
              Inquiries: <span className="text-primary font-bold">connectedinpraise@gmail.com</span>
              <br />
              Hotline: <span className="text-primary font-bold">+234 818 463 9632</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top & Admin */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 font-medium">
          <p>
            &copy; 2026 Connected in Praise & Jerusalem Choir. All rights reserved. Worship movement for
            God&apos;s glory.
          </p>

          <div className="flex items-center gap-5">
            {onOpenAdmin && (
              <button
                onClick={onOpenAdmin}
                className="flex items-center gap-1.5 text-xs text-white/40 hover:text-primary transition-colors cursor-pointer"
                title="Admin Database Portal"
              >
                <Lock className="w-3.5 h-3.5 text-primary/70" />
                <span>Admin Portal</span>
              </button>
            )}

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-primary hover:text-white transition-colors cursor-pointer font-montserrat font-bold uppercase tracking-wider"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
