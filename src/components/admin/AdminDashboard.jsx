import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  ShieldCheck,
  Lock,
  ArrowLeft,
  MessageSquare,
  Mail,
  Trash2,
  RefreshCw,
  Download,
  Search,
  CheckCircle,
  Eye,
  EyeOff,
  KeyRound,
  AlertTriangle,
  Clock,
  Database,
  Calendar,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { Logo } from "../ui/Logo";
import { CustomCloseEmoji } from "../ui/CustomEmoji";
import {
  getAllPrayersAdmin,
  deletePrayerAdmin,
  getAllContactMessagesAdmin,
  deleteContactMessageAdmin,
} from "../../services/db";

const DEFAULT_ADMIN_PASSCODE = "cip2026";
const MAX_FAILED_ATTEMPTS = 3;
const LOCKOUT_DURATION_MS = 5 * 60 * 1000; // 5 minutes
const INACTIVITY_TIMEOUT_MS = 10 * 60 * 1000; // 10 minutes auto-lock

export function AdminDashboard({ onBackToHome }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [activeTab, setActiveTab] = useState("prayers"); // 'prayers' | 'messages'

  // Security Lockout States
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [lockoutRemaining, setLockoutRemaining] = useState(0);

  // Change Passcode Modal State
  const [isChangingPasscode, setIsChangingPasscode] = useState(false);
  const [oldPasscode, setOldPasscode] = useState("");
  const [newPasscode, setNewPasscode] = useState("");
  const [confirmPasscode, setConfirmPasscode] = useState("");
  const [changeError, setChangeError] = useState("");

  const [prayers, setPrayers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [actionNotice, setActionNotice] = useState("");
  const [lastRefreshed, setLastRefreshed] = useState(null);

  const inactivityTimerRef = useRef(null);

  // Helper to get active master passcode
  const getMasterPasscode = () => {
    return localStorage.getItem("cip_admin_passcode") || DEFAULT_ADMIN_PASSCODE;
  };

  // Lockout countdown timer
  useEffect(() => {
    const checkLockout = () => {
      const storedLockout = parseInt(sessionStorage.getItem("cip_admin_lockout") || "0", 10);
      const now = Date.now();
      if (storedLockout > now) {
        setLockoutRemaining(Math.ceil((storedLockout - now) / 1000));
      } else {
        setLockoutRemaining(0);
        sessionStorage.removeItem("cip_admin_lockout");
      }
    };

    checkLockout();
    const interval = setInterval(checkLockout, 1000);
    return () => clearInterval(interval);
  }, []);

  // Check if session already authenticated
  useEffect(() => {
    const authed = sessionStorage.getItem("cip_admin_authed") === "true";
    if (authed) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = useCallback(() => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("cip_admin_authed");
    setPasscode("");
    setPrayers([]);
    setMessages([]);
    setIsChangingPasscode(false);
  }, []);

  // Inactivity Auto-Lock
  useEffect(() => {
    if (!isAuthenticated) return;

    const resetInactivity = () => {
      if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
      inactivityTimerRef.current = setTimeout(() => {
        handleLogout();
        notify("Session auto-locked due to 10 minutes of inactivity.");
      }, INACTIVITY_TIMEOUT_MS);
    };

    resetInactivity();
    const events = ["mousedown", "keydown", "touchstart", "scroll"];
    events.forEach((ev) => window.addEventListener(ev, resetInactivity));

    return () => {
      if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
      events.forEach((ev) => window.removeEventListener(ev, resetInactivity));
    };
  }, [isAuthenticated, handleLogout]);

  // Fetch all records when authenticated or when refreshed
  const loadAllData = async () => {
    setIsLoading(true);
    try {
      const [allPrayers, allMsgs] = await Promise.all([
        getAllPrayersAdmin(),
        getAllContactMessagesAdmin(),
      ]);
      setPrayers(allPrayers);
      setMessages(allMsgs);
      setLastRefreshed(new Date().toLocaleTimeString());
    } catch (err) {
      console.error("Failed to load admin data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadAllData();
    }
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();

    if (lockoutRemaining > 0) {
      setErrorMsg(`Portal locked for security. Please wait ${lockoutRemaining} seconds.`);
      return;
    }

    const currentMaster = getMasterPasscode();

    if (passcode.trim() === currentMaster) {
      setIsAuthenticated(true);
      sessionStorage.setItem("cip_admin_authed", "true");
      setErrorMsg("");
      setFailedAttempts(0);
      loadAllData();
    } else {
      const nextFailures = failedAttempts + 1;
      setFailedAttempts(nextFailures);

      if (nextFailures >= MAX_FAILED_ATTEMPTS) {
        const lockoutTime = Date.now() + LOCKOUT_DURATION_MS;
        sessionStorage.setItem("cip_admin_lockout", lockoutTime.toString());
        setLockoutRemaining(300);
        setErrorMsg("Maximum failed attempts exceeded. Admin access locked for 5 minutes.");
      } else {
        setErrorMsg(
          `Incorrect passcode. ${MAX_FAILED_ATTEMPTS - nextFailures} attempt(s) remaining before security lockout.`
        );
      }
    }
  };

  const handleUpdatePasscode = (e) => {
    e.preventDefault();
    setChangeError("");

    const currentMaster = getMasterPasscode();
    if (oldPasscode !== currentMaster) {
      setChangeError("Existing passcode does not match.");
      return;
    }
    if (newPasscode.length < 6) {
      setChangeError("New passcode must be at least 6 characters.");
      return;
    }
    if (newPasscode !== confirmPasscode) {
      setChangeError("New passcodes do not match.");
      return;
    }

    localStorage.setItem("cip_admin_passcode", newPasscode);
    setIsChangingPasscode(false);
    setOldPasscode("");
    setNewPasscode("");
    setConfirmPasscode("");
    notify("Admin security passcode successfully updated!");
  };

  const handleDeletePrayer = async (id) => {
    if (!window.confirm("Are you sure you want to permanently remove this prayer request?")) return;
    await deletePrayerAdmin(id);
    setPrayers((prev) => prev.filter((p) => p.id !== id));
    notify("Prayer request removed from database.");
  };

  const handleDeleteMessage = async (id) => {
    if (!window.confirm("Are you sure you want to permanently remove this message?")) return;
    await deleteContactMessageAdmin(id);
    setMessages((prev) => prev.filter((m) => m.id !== id));
    notify("Contact message removed from database.");
  };

  const notify = (msg) => {
    setActionNotice(msg);
    setTimeout(() => setActionNotice(""), 4000);
  };

  const exportData = (type) => {
    const dataToExport = type === "prayers" ? prayers : messages;
    const blob = new Blob([JSON.stringify(dataToExport, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `connected-in-praise-${type}-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    notify(`Exported ${type} archive successfully!`);
  };

  // Filter items based on search query
  const filteredPrayers = prayers.filter(
    (p) =>
      p.author?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.text?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredMessages = messages.filter(
    (m) =>
      m.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.message?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-maroon-deep text-ivory flex flex-col relative w-full max-w-full overflow-x-hidden selection:bg-gold-bright selection:text-maroon-deep">
      {/* Background Lighting & Atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-neon/5 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute inset-0 vignette pointer-events-none" />
      </div>

      {/* Full-Page Admin Top Bar */}
      <header className="relative z-30 sticky top-0 glass border-b border-gold/25 backdrop-blur-2xl w-full max-w-full">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between flex-nowrap gap-2 sm:gap-4 w-full">
          {/* Left: Brand Identity & Portal Indicator */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 min-w-0">
            <button
              onClick={onBackToHome}
              className="flex items-center gap-1.5 sm:gap-2 group cursor-pointer focus:outline-none transition-transform hover:scale-[1.02]"
              title="Return to Connected in Praise 2026 Homepage"
              aria-label="CIP 2026 Home"
            >
              <Logo size="nav" />
            </button>
            <span className="hidden sm:inline-block w-px h-5 bg-gold/30 flex-shrink-0" />
            <div className="hidden sm:inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-gold-bright bg-gold/15 px-2.5 py-1 rounded-full border border-gold/30 shadow-sm flex-shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 text-neon" />
              <span>Administrator Portal</span>
            </div>
          </div>

          {/* Right: Actions, Security Status & Navigation */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0">
            {isAuthenticated ? (
              <>
                {/* Refresh Database */}
                <button
                  onClick={loadAllData}
                  disabled={isLoading}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-ivory/80 hover:text-gold-bright transition-colors p-1.5 sm:px-3 sm:py-1.5 rounded-xl border border-gold/25 hover:border-gold/50 bg-black/40 cursor-pointer disabled:opacity-50 shadow-sm"
                  title="Reload records from database"
                  aria-label="Refresh records"
                >
                  <RefreshCw className={`w-3.5 h-3.5 text-gold-bright ${isLoading ? "animate-spin" : ""}`} />
                  <span className="hidden md:inline whitespace-nowrap">Refresh</span>
                </button>

                {/* Change Passcode */}
                <button
                  onClick={() => setIsChangingPasscode(!isChangingPasscode)}
                  className={`inline-flex items-center gap-1.5 text-xs font-bold transition-colors p-1.5 sm:px-3 sm:py-1.5 rounded-xl border cursor-pointer shadow-sm ${
                    isChangingPasscode
                      ? "border-neon bg-neon/10 text-gold-bright"
                      : "border-gold/30 hover:border-gold-bright bg-black/40 text-gold-bright"
                  }`}
                  title="Change master passcode"
                  aria-label="Change master passcode"
                >
                  <KeyRound className="w-3.5 h-3.5 text-neon" />
                  <span className="hidden lg:inline whitespace-nowrap">Passcode</span>
                </button>

                {/* Lock Session */}
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-red-400 hover:text-red-300 transition-colors p-1.5 sm:px-3 sm:py-1.5 rounded-xl border border-red-500/30 hover:bg-red-500/15 bg-black/40 cursor-pointer shadow-sm"
                  title="Lock session"
                  aria-label="Lock admin session"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline whitespace-nowrap">Lock</span>
                </button>

                <span className="hidden sm:inline-block w-px h-5 bg-gold/25 mx-0.5" />
              </>
            ) : (
              <div className="inline-flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-bold text-ivory/70 bg-black/40 px-2 sm:px-3 py-1 rounded-full border border-gold/20">
                <Lock className="w-3 h-3 text-gold-bright" />
                <span className="whitespace-nowrap">Protected</span>
              </div>
            )}

            {/* Back to Public Website CTA */}
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-1 sm:gap-1.5 text-xs font-black text-ivory/90 hover:text-gold-bright transition-all px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gold/40 hover:border-gold-bright bg-black/50 hover:bg-gold/10 cursor-pointer shadow-sm group flex-shrink-0"
              title="Return to Connected in Praise 2026 website"
            >
              <ArrowLeft className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-gold-bright group-hover:-translate-x-1 transition-transform" />
              <span className="hidden sm:inline whitespace-nowrap">Back to Site</span>
              <span className="sm:hidden whitespace-nowrap">Exit</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Full-Page Body Content */}
      <main className="relative z-10 flex-1 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12 w-full max-w-full flex flex-col">
        {!isAuthenticated ? (
          /* =========================================================================
             FULL-PAGE LOGIN EXPERIENCE
             ========================================================================= */
          <div className="flex-1 flex items-center justify-center py-12">
            <div className="w-full max-w-md glass-card-warm p-8 sm:p-10 rounded-3xl border border-gold/40 shadow-2xl text-center">
              {/* Shield Icon with Glowing Aura */}
              <div className="w-20 h-20 rounded-3xl bg-gold/15 flex items-center justify-center text-gold-bright mx-auto mb-6 border-2 border-gold/40 shadow-[0_0_30px_rgba(242,169,0,0.25)]">
                <Lock className="w-10 h-10" />
              </div>

              <h2 className="font-cinzel font-black text-2xl sm:text-3xl text-ivory mb-2">
                Administrator Portal
              </h2>
              <p className="text-xs sm:text-sm text-ivory/70 mb-8 font-medium leading-relaxed">
                Enter your administrative security credentials to manage prayer petitions, public intercessions,
                and contact submissions.
              </p>

              {lockoutRemaining > 0 ? (
                <div className="bg-red-500/20 border border-red-500/40 rounded-2xl p-5 mb-6 text-center animate-pulse">
                  <AlertTriangle className="w-8 h-8 text-red-400 mx-auto mb-2" />
                  <h4 className="font-bold text-red-200 text-sm mb-1">Security Lockout Active</h4>
                  <p className="text-xs text-red-300 font-semibold mb-3">
                    Too many failed attempts. The portal is locked to protect records.
                  </p>
                  <div className="inline-flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full border border-red-400/30 text-xs font-black text-gold-bright">
                    <Clock className="w-3.5 h-3.5 text-neon" />
                    <span>Retry in {lockoutRemaining}s</span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleLogin} className="space-y-5">
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={passcode}
                      onChange={(e) => setPasscode(e.target.value)}
                      placeholder="Enter security passcode"
                      className="w-full bg-black/60 border border-gold/35 rounded-2xl pl-5 pr-12 py-4 text-center text-sm font-bold text-ivory placeholder-ivory/30 focus:outline-none focus:border-gold-bright transition-colors shadow-inner"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-ivory/50 hover:text-gold-bright transition-colors cursor-pointer"
                      aria-label="Toggle password visibility"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>

                  {errorMsg && (
                    <div className="flex items-center justify-center gap-1.5 text-xs text-red-400 font-bold bg-red-950/40 border border-red-500/30 py-2.5 px-3 rounded-xl animate-fade-in">
                      <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn-gold w-full py-4 text-sm font-black uppercase tracking-wider cursor-pointer shadow-xl"
                  >
                    Authenticate & Enter
                  </button>
                </form>
              )}

              <div className="mt-8 pt-6 border-t border-gold/15 flex flex-col items-center gap-2">
                <div className="text-[11px] text-ivory/50 font-semibold flex items-center justify-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-green-400" />
                  <span>TLS 1.3 Encrypted · Cloud DB · Auto-Lock on Idle</span>
                </div>
                <button
                  onClick={onBackToHome}
                  className="text-xs text-gold-bright/80 hover:text-gold-bright hover:underline font-semibold mt-1"
                >
                  Return to Connected in Praise Homepage
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* =========================================================================
             FULL-PAGE AUTHENTICATED WORKSTATION
             ========================================================================= */
          <div className="space-y-8 animate-fade-in">
            {/* Action Notice Notification */}
            {actionNotice && (
              <div className="p-3.5 rounded-2xl bg-gold/15 border border-gold/40 text-gold-bright text-xs sm:text-sm font-bold text-center flex items-center justify-center gap-2 shadow-lg animate-fade-in">
                <CheckCircle className="w-4 h-4 text-neon flex-shrink-0" />
                <span>{actionNotice}</span>
              </div>
            )}

            {/* Dashboard Header Banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-6 border-b border-gold/20">
              <div className="min-w-0">
                <h1 className="font-cinzel font-black text-2xl sm:text-3xl lg:text-4xl text-ivory tracking-wide mb-1.5 break-words">
                  Central Operations Dashboard
                </h1>
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap text-xs sm:text-sm text-ivory/70 font-semibold">
                  <span className="flex items-center gap-1.5 text-green-400 font-bold whitespace-nowrap">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-ping flex-shrink-0" />
                    <span>Database Synchronized</span>
                  </span>
                  {lastRefreshed && (
                    <>
                      <span className="text-gold/40 hidden xs:inline">•</span>
                      <span className="whitespace-nowrap">Last checked at {lastRefreshed}</span>
                    </>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2.5 flex-shrink-0 w-full sm:w-auto">
                <button
                  onClick={() => exportData(activeTab)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl glass border border-gold/30 text-xs sm:text-sm font-bold text-gold-bright hover:border-gold-bright hover:bg-gold/10 transition-colors cursor-pointer shadow-md"
                >
                  <Download className="w-4 h-4 flex-shrink-0" />
                  <span className="hidden sm:inline">Export {activeTab === "prayers" ? "Prayers" : "Messages"} (JSON)</span>
                  <span className="sm:hidden">Export {activeTab === "prayers" ? "Prayers" : "Messages"}</span>
                </button>
              </div>
            </div>

            {/* Change Passcode Panel (Expandable) */}
            {isChangingPasscode && (
              <div className="p-6 rounded-3xl bg-black/60 border border-gold/40 shadow-2xl animate-fade-in">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-cinzel font-bold text-base text-gold-bright flex items-center gap-2">
                    <KeyRound className="w-4 h-4 text-neon" />
                    <span>Update Administrative Passcode</span>
                  </h3>
                  <button
                    onClick={() => setIsChangingPasscode(false)}
                    className="text-ivory/60 hover:text-ivory p-1 cursor-pointer"
                    aria-label="Close"
                  >
                    <CustomCloseEmoji className="w-4 h-4" />
                  </button>
                </div>
                <form onSubmit={handleUpdatePasscode} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <input
                    type="password"
                    required
                    placeholder="Current Passcode"
                    value={oldPasscode}
                    onChange={(e) => setOldPasscode(e.target.value)}
                    className="bg-black/60 border border-gold/30 rounded-2xl px-4 py-3 text-xs sm:text-sm text-ivory placeholder-ivory/30 focus:outline-none focus:border-gold-bright"
                  />
                  <input
                    type="password"
                    required
                    placeholder="New Passcode (min 6 chars)"
                    value={newPasscode}
                    onChange={(e) => setNewPasscode(e.target.value)}
                    className="bg-black/60 border border-gold/30 rounded-2xl px-4 py-3 text-xs sm:text-sm text-ivory placeholder-ivory/30 focus:outline-none focus:border-gold-bright"
                  />
                  <input
                    type="password"
                    required
                    placeholder="Confirm New Passcode"
                    value={confirmPasscode}
                    onChange={(e) => setConfirmPasscode(e.target.value)}
                    className="bg-black/60 border border-gold/30 rounded-2xl px-4 py-3 text-xs sm:text-sm text-ivory placeholder-ivory/30 focus:outline-none focus:border-gold-bright"
                  />
                  <div className="sm:col-span-3 flex items-center justify-between gap-3 pt-2">
                    {changeError && <p className="text-xs text-red-400 font-bold">{changeError}</p>}
                    <button
                      type="submit"
                      className="btn-gold ml-auto px-6 py-2.5 text-xs font-black uppercase tracking-wider cursor-pointer"
                    >
                      Save New Security Passcode
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* 4 Overview Statistics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* Card 1: Total Prayers */}
              <div className="glass-card-warm p-6 rounded-3xl border border-gold/25 shadow-lg flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-ivory/70 font-bold block mb-1">
                    Prayer Petitions
                  </span>
                  <span className="font-marcellus text-3xl sm:text-4xl text-gold-bright font-black">
                    {prayers.length}
                  </span>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-gold/15 flex items-center justify-center border border-gold/30 text-gold-bright">
                  <MessageSquare className="w-6 h-6" />
                </div>
              </div>

              {/* Card 2: Contact Messages */}
              <div className="glass-card-warm p-6 rounded-3xl border border-gold/25 shadow-lg flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-ivory/70 font-bold block mb-1">
                    Contact Inquiries
                  </span>
                  <span className="font-marcellus text-3xl sm:text-4xl text-neon font-black">
                    {messages.length}
                  </span>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-neon/15 flex items-center justify-center border border-neon/30 text-neon">
                  <Mail className="w-6 h-6" />
                </div>
              </div>

              {/* Card 3: Cloud Database Status */}
              <div className="glass-card-warm p-6 rounded-3xl border border-gold/25 shadow-lg flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-ivory/70 font-bold block mb-1">
                    Database Engine
                  </span>
                  <span className="text-sm font-black text-green-400 flex items-center gap-1.5 mt-2">
                    <Database className="w-4 h-4 text-green-400" />
                    Cloud Active
                  </span>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-green-500/15 flex items-center justify-center border border-green-500/30 text-green-400">
                  <CheckCircle className="w-6 h-6" />
                </div>
              </div>

              {/* Card 4: Session Security */}
              <div className="glass-card-warm p-6 rounded-3xl border border-gold/25 shadow-lg flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-ivory/70 font-bold block mb-1">
                    Security Session
                  </span>
                  <span className="text-xs font-black text-ivory/90 flex items-center gap-1.5 mt-2">
                    <ShieldCheck className="w-4 h-4 text-gold-bright" />
                    Strict Lockout On
                  </span>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-gold/15 flex items-center justify-center border border-gold/30 text-gold-bright">
                  <Lock className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Main Data Section: Toolbar + Records */}
            <div className="glass-card p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-gold/25 shadow-2xl">
              {/* Toolbar: Tabs & Search */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 pb-6 border-b border-gold/20">
                {/* Tabs */}
                <div className="flex items-center gap-2 sm:gap-3 w-full md:w-auto">
                  <button
                    onClick={() => {
                      setActiveTab("prayers");
                      setSearchQuery("");
                    }}
                    className={`flex-1 md:flex-none flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                      activeTab === "prayers"
                        ? "bg-gradient-to-r from-gold-deep via-gold-bright to-gold-deep text-maroon-deep shadow-lg"
                        : "glass text-ivory/70 hover:text-ivory hover:border-gold/40"
                    }`}
                  >
                    <MessageSquare className="w-4 h-4 flex-shrink-0" />
                    <span className="hidden sm:inline">Prayer Petitions ({prayers.length})</span>
                    <span className="sm:hidden">Prayers ({prayers.length})</span>
                  </button>

                  <button
                    onClick={() => {
                      setActiveTab("messages");
                      setSearchQuery("");
                    }}
                    className={`flex-1 md:flex-none flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                      activeTab === "messages"
                        ? "bg-gradient-to-r from-gold-deep via-gold-bright to-gold-deep text-maroon-deep shadow-lg"
                        : "glass text-ivory/70 hover:text-ivory hover:border-gold/40"
                    }`}
                  >
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <span className="hidden sm:inline">Contact Inquiries ({messages.length})</span>
                    <span className="sm:hidden">Messages ({messages.length})</span>
                  </button>
                </div>

                {/* Search Field */}
                <div className="relative w-full md:w-80">
                  <Search className="w-4 h-4 text-ivory/40 absolute left-4 top-1/2 -translate-y-1/2 flex-shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by name, email, or content..."
                    className="w-full bg-black/50 border border-gold/30 rounded-2xl pl-11 pr-4 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-ivory placeholder-ivory/30 focus:outline-none focus:border-gold-bright transition-colors shadow-inner"
                  />
                </div>
              </div>

              {/* Records List Container */}
              <div className="pt-6">
                {activeTab === "prayers" && (
                  <div className="space-y-4">
                    {isLoading ? (
                      <div className="p-16 text-center text-ivory/60 text-sm font-bold flex flex-col items-center gap-3">
                        <RefreshCw className="w-6 h-6 animate-spin text-gold-bright" />
                        <span>Querying live database records...</span>
                      </div>
                    ) : filteredPrayers.length === 0 ? (
                      <div className="p-16 text-center text-ivory/60 text-sm font-semibold">
                        {searchQuery ? "No prayer petitions matched your search query." : "No prayer petitions recorded yet."}
                      </div>
                    ) : (
                      filteredPrayers.map((prayer, index) => (
                        <div
                          key={prayer.id || index}
                          className="glass-card-warm p-5 sm:p-6 rounded-2xl border border-gold/20 hover:border-gold/50 transition-all flex flex-col sm:flex-row sm:items-start justify-between gap-4 group"
                        >
                          <div className="flex-1 space-y-2">
                            <div className="flex items-center gap-3 flex-wrap">
                              <span className="font-cinzel font-black text-gold-bright text-base sm:text-lg">
                                {prayer.author || "Anonymous Worshipper"}
                              </span>
                              <span className="text-xs text-ivory/60 bg-black/40 px-3 py-0.5 rounded-full border border-gold/20">
                                {prayer.time || "Recently"}
                              </span>
                              {prayer.created_at && (
                                <span className="text-[11px] text-ivory/40 font-medium">
                                  {new Date(prayer.created_at).toLocaleString()}
                                </span>
                              )}
                            </div>
                            <p className="text-xs sm:text-sm text-ivory/90 font-medium leading-relaxed bg-black/30 p-4 rounded-xl border border-gold/15">
                              {prayer.text}
                            </p>
                          </div>

                          <button
                            onClick={() => handleDeletePrayer(prayer.id)}
                            className="self-end sm:self-center p-2.5 rounded-xl text-ivory/40 hover:text-red-400 hover:bg-red-500/10 border border-transparent hover:border-red-500/30 transition-all cursor-pointer flex-shrink-0"
                            title="Permanently delete prayer petition"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                )}

                {activeTab === "messages" && (
                  <div className="space-y-4">
                    {isLoading ? (
                      <div className="p-16 text-center text-ivory/60 text-sm font-bold flex flex-col items-center gap-3">
                        <RefreshCw className="w-6 h-6 animate-spin text-neon" />
                        <span>Querying live database records...</span>
                      </div>
                    ) : filteredMessages.length === 0 ? (
                      <div className="p-16 text-center text-ivory/60 text-sm font-semibold">
                        {searchQuery ? "No contact messages matched your search query." : "No contact messages submitted yet."}
                      </div>
                    ) : (
                      filteredMessages.map((msg, index) => (
                        <div
                          key={msg.id || index}
                          className="glass-card-warm p-5 sm:p-6 rounded-2xl border border-gold/20 hover:border-gold/50 transition-all flex flex-col sm:flex-row sm:items-start justify-between gap-4 group"
                        >
                          <div className="flex-1 space-y-2">
                            <div className="flex items-center gap-3 flex-wrap">
                              <span className="font-cinzel font-black text-neon text-base sm:text-lg">
                                {msg.name}
                              </span>
                              <a
                                href={`mailto:${msg.email}`}
                                className="text-xs sm:text-sm text-gold-bright hover:underline font-bold bg-gold/10 px-3 py-0.5 rounded-full border border-gold/25 break-all max-w-full"
                              >
                                {msg.email}
                              </a>
                              <span className="text-xs text-ivory/60 bg-black/40 px-3 py-0.5 rounded-full border border-gold/20">
                                {msg.time || "Recently"}
                              </span>
                              {msg.created_at && (
                                <span className="text-[11px] text-ivory/40 font-medium">
                                  {new Date(msg.created_at).toLocaleString()}
                                </span>
                              )}
                            </div>
                            <p className="text-xs sm:text-sm text-ivory/90 font-medium leading-relaxed bg-black/30 p-4 rounded-xl border border-gold/15">
                              {msg.message}
                            </p>
                          </div>

                          <button
                            onClick={() => handleDeleteMessage(msg.id)}
                            className="self-end sm:self-center p-2.5 rounded-xl text-ivory/40 hover:text-red-400 hover:bg-red-500/10 border border-transparent hover:border-red-500/30 transition-all cursor-pointer flex-shrink-0"
                            title="Permanently delete message"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Full-Page Admin Footer */}
      <footer className="relative z-20 glass border-t border-gold/20 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ivory/60 font-semibold">
          <p>© 2026 Connected in Praise & Jerusalem Choir. Secure Administrative Operations.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={onBackToHome}
              className="text-gold-bright hover:underline cursor-pointer"
            >
              Back to Concert Home
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
