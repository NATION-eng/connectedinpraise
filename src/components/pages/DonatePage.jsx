import React, { useState } from "react";
import {
  Heart,
  Copy,
  Check,
  Building,
  CreditCard,
  User,
  ShieldCheck,
  Sparkles,
  Accessibility,
  Ear,
  Radio,
  Users,
  ExternalLink,
  PhoneCall,
  Mail,
  ArrowRight,
} from "lucide-react";
import { RevealMotion, StaggerContainer, StaggerItem } from "../ui/RevealMotion";
import { AuraRings } from "../ui/AuraRings";
import { useNavigation } from "../../context/NavigationContext";

export function DonatePage() {
  const { navigate } = useNavigation();
  const [copied, setCopied] = useState(false);

  const accountDetails = {
    bank: "UBA",
    accountName: "Seventh-day Adventist Church, Rumuokwuta District",
    accountNumber: "1015166374",
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(accountDetails.accountNumber);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2800);
  };

  const impactAreas = [
    {
      icon: <Accessibility className="w-6 h-6 text-primary" />,
      title: "Barrier-Free Mobility & Ramps",
      description:
        "Funding wheelchair ramps, accessible restrooms, dedicated transit shuttles, and priority seating at RSU Convocation Arena.",
    },
    {
      icon: <Ear className="w-6 h-6 text-secondary" />,
      title: "Sign Language Interpreters",
      description:
        "Providing certified Nigerian Sign Language (NSL) stage interpreters and screen captioning for deaf and hard-of-hearing attendees.",
    },
    {
      icon: <Radio className="w-6 h-6 text-primary" />,
      title: "Worldwide HD Livestream Broadcast",
      description:
        "Empowering satellite and multi-platform streaming so hospital-bound individuals, homebound worshippers, and global audiences can join live.",
    },
    {
      icon: <Users className="w-6 h-6 text-secondary" />,
      title: "100% Free Public Admission",
      description:
        "Keeping all 4 days completely free and open to everyone, regardless of socio-economic background, physical ability, or denomination.",
    },
  ];

  return (
    <div className="relative min-h-screen pt-28 sm:pt-36 pb-24 overflow-hidden bg-[#0A0203] text-white">
      {/* Radiant Sunburst Ambient Canvas */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/6 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/15 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-3/4 left-0 w-[450px] h-[450px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumb & Tag */}
        <RevealMotion className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary font-montserrat text-xs uppercase tracking-widest font-black mb-5 shadow-[0_2px_15px_rgba(255,200,59,0.2)]">
            <Heart className="w-3.5 h-3.5 fill-current text-secondary animate-pulse" />
            <span>Support The Movement</span>
          </div>

          <h1 className="font-syne font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.1] mb-5">
            Partner In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-sunburst to-secondary">Praise</span> &{" "}
            <span className="text-milk">Possibility</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed font-sans max-w-2xl mx-auto">
            Your sacrificial giving elevates worship, breaks disability barriers across Port Harcourt City, and ensures
            every worshipper—regardless of physical limitation—experiences God&apos;s love without obstacle.
          </p>
        </RevealMotion>

        {/* Master Official Bank Account Card */}
        <RevealMotion className="max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="relative rounded-3xl p-1 bg-gradient-to-b from-primary/60 via-secondary/40 to-primary/20 shadow-[0_20px_60px_rgba(255,200,59,0.25)] group">
            <div className="relative rounded-[22px] bg-[#140406]/95 backdrop-blur-2xl p-6 sm:p-10 border border-white/10 overflow-hidden">
              {/* Subtle Watermark Emblems */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-secondary/15 rounded-full blur-2xl pointer-events-none" />

              {/* Verified Badge */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                <div className="flex items-center gap-2 text-xs font-montserrat font-black uppercase tracking-wider text-primary">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span>Official Church Account</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/40 text-[11px] font-montserrat font-bold text-secondary uppercase tracking-wider">
                  <Sparkles className="w-3 h-3 text-secondary" />
                  <span>Direct Bank Transfer</span>
                </div>
              </div>

              {/* Account Rows */}
              <div className="space-y-6">
                {/* Bank Name */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-3.5 rounded-2xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-3 text-white/70">
                    <Building className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-xs uppercase tracking-wider font-montserrat font-bold">Bank Name</span>
                  </div>
                  <span className="text-base sm:text-lg font-montserrat font-black text-white sm:text-right pl-8 sm:pl-0">
                    {accountDetails.bank}
                  </span>
                </div>

                {/* Account Name */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 p-3.5 rounded-2xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-3 text-white/70">
                    <User className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-xs uppercase tracking-wider font-montserrat font-bold">Account Name</span>
                  </div>
                  <span className="text-sm sm:text-base font-montserrat font-bold text-primary sm:text-right pl-8 sm:pl-0 max-w-sm">
                    {accountDetails.accountName}
                  </span>
                </div>

                {/* Account Number Box (Huge, Prominent, Copyable) */}
                <div className="relative p-5 sm:p-6 rounded-2xl bg-black/60 border-2 border-primary/50 shadow-[0_8px_30px_rgba(0,0,0,0.6)]">
                  <div className="flex items-center justify-between text-xs font-montserrat font-black uppercase tracking-wider text-white/60 mb-2">
                    <span className="flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-primary" />
                      Account Number
                    </span>
                    <span className="text-[11px] text-primary">NUBAN Verified</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="font-mono text-2xl sm:text-4xl font-black tracking-widest text-white selection:bg-primary selection:text-black">
                      {accountDetails.accountNumber}
                    </div>

                    <button
                      onClick={handleCopy}
                      className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-montserrat font-black text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-lg active:scale-95 ${
                        copied
                          ? "bg-emerald-500 text-black border border-emerald-400 shadow-emerald-500/40"
                          : "bg-gradient-to-r from-primary via-sunburst to-secondary text-obsidian hover:shadow-[0_4px_20px_rgba(255,200,59,0.5)] hover:scale-105"
                      }`}
                      aria-label="Copy account number to clipboard"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-black stroke-[3]" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copy Number</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Transfer Narration Note */}
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/25 text-xs text-white/90 leading-relaxed flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 mt-1.5" />
                  <div>
                    <strong className="text-primary font-bold">Transfer Remark / Narration:</strong> Please input{" "}
                    <span className="font-mono font-bold text-white bg-black/50 px-2 py-0.5 rounded border border-white/20">
                      CIP 2026
                    </span>{" "}
                    or <span className="font-semibold text-white">Connected in Praise</span> so your donation can be
                    properly tagged for the concert and disability inclusion program.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealMotion>

        {/* Where Your Giving Goes Section */}
        <div className="mb-16 sm:mb-24">
          <RevealMotion className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-syne font-black text-2xl sm:text-4xl text-white mb-3">
              How Your Seed Creates Impact
            </h2>
            <p className="text-xs sm:text-sm text-white/75 font-sans">
              100% of proceeds directly fund the execution of Connected in Praise and Adventist Possibility Ministries
              initiatives.
            </p>
          </RevealMotion>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {impactAreas.map((area, index) => (
              <StaggerItem key={index}>
                <div className="h-full rounded-2xl p-5 sm:p-6 bg-[#130304]/80 backdrop-blur-md border border-white/10 hover:border-primary/40 hover:shadow-[0_12px_35px_rgba(255,200,59,0.15)] transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center mb-4">
                      {area.icon}
                    </div>
                    <h3 className="font-montserrat font-bold text-base text-white mb-2">{area.title}</h3>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans">{area.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Direct Inquiries & Transparency Hotline */}
        <RevealMotion className="rounded-3xl p-6 sm:p-10 bg-gradient-to-r from-[#170406] via-[#100304] to-[#170406] border border-primary/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-syne font-bold text-xl sm:text-2xl text-white">
              Questions or Corporate Sponsorships?
            </h3>
            <p className="text-xs sm:text-sm text-white/70 max-w-xl">
              Our financial and hospitality team is on standby to provide official receipts, partnership documentation,
              or assist with institutional bank transfers.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href="tel:+2348184639632"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-montserrat font-bold text-xs uppercase tracking-wider transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-primary" />
              <span>+234 818 463 9632</span>
            </a>

            <button
              onClick={() => navigate("/contact")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary via-sunburst to-secondary text-obsidian font-montserrat font-black text-xs uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-lg cursor-pointer"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </RevealMotion>
      </div>
    </div>
  );
}
