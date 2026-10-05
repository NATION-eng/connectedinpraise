import React from "react";
import { Heart, Youtube, Facebook, ArrowUp, Lock } from "lucide-react";
import { Logo } from "../ui/Logo";
import { CustomTikTokEmoji } from "../ui/CustomEmoji";

export function Footer({ onOpenAdmin }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-midnight-950 border-t border-gold/20 pt-16 pb-12 overflow-hidden text-ivory/80">
      <div className="relative container-max px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gold/15">
          {/* Brand & Wordmark */}
          <div className="md:col-span-5 space-y-4">
            <Logo size="nav" />
            <p className="text-xs sm:text-sm text-ivory/80 max-w-sm leading-relaxed font-semibold">
              Connected in Praise is an annual praise and worship evangelism concert hosted by
              Jerusalem Choir in strategic partnership with Adventist Possibility Ministries (APM).
            </p>
            <div className="text-xs text-gold-bright font-black tracking-wide">
              Convocation Arena, Rivers State University, Oroworukwo, Port Harcourt
            </div>
            <div className="text-xs text-neon font-black">
              Nov 4–6: 6:00 PM – 8:00 PM · Sabbath Nov 7: 8:00 AM – 12:00 PM
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display font-black text-base text-ivory uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-bold">
              <li>
                <a href="#about" className="hover:text-gold-bright transition-colors">
                  About APM Inclusion
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
                  Program Schedule
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-gold-bright transition-colors">
                  Visual Archives (Gallery)
                </a>
              </li>
              <li>
                <a href="#stories" className="hover:text-gold-bright transition-colors">
                  Stories & Prayer Wall
                </a>
              </li>
            </ul>
          </div>

          {/* Official Media & Socials */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-black text-base text-ivory uppercase tracking-wider">
              Official Media Channels
            </h4>
            <p className="text-xs text-ivory/70 leading-relaxed font-medium">
              Join thousands of worshippers online. Follow our official pages for real-time video
              broadcasts, photos, and live session updates.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@connectedinpraise?_r=1&_t=ZS-99v3wfSwKz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-2xl glass border border-gold/30 flex items-center justify-center text-ivory hover:text-gold-bright hover:bg-gold/20 transition-all group"
                aria-label="TikTok"
                title="Follow on TikTok"
              >
                <CustomTikTokEmoji className="w-4 h-4 text-ivory group-hover:text-gold-bright transition-colors" />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61578565720573"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-2xl glass border border-gold/30 flex items-center justify-center text-blue-400 hover:text-gold-bright hover:bg-gold/20 transition-all"
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
                className="w-10 h-10 rounded-2xl glass border border-gold/30 flex items-center justify-center text-red-500 hover:text-gold-bright hover:bg-gold/20 transition-all"
                aria-label="YouTube"
                title="Subscribe on YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            <div className="text-xs text-ivory/60 pt-2 font-medium">
              Inquiries: <span className="text-gold-bright font-bold">connectedinpraise@gmail.com</span>
              <br />
              Hotline: <span className="text-gold-bright font-bold">+234 818 463 9632</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top & Admin */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory/60 font-semibold">
          <p>
            &copy; 2026 Connected in Praise & Jerusalem Choir. All rights reserved. Worship movement for
            God&apos;s glory.
          </p>

          <div className="flex items-center gap-5">
            {onOpenAdmin && (
              <button
                onClick={onOpenAdmin}
                className="flex items-center gap-1.5 text-xs text-ivory/40 hover:text-gold-bright transition-colors cursor-pointer"
                title="Admin Database Portal"
              >
                <Lock className="w-3.5 h-3.5 text-gold/60" />
                <span>Admin Portal</span>
              </button>
            )}

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-gold-bright hover:text-white transition-colors cursor-pointer font-bold"
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
