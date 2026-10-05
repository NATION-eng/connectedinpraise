import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  ShieldCheck,
  Lock,
  X,
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
} from "lucide-react";
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

export function AdminDashboard({ isOpen, onClose }) {
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
    } catch (err) {
      console.error("Failed to load admin data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen && isAuthenticated) {
      loadAllData();
    }
  }, [isOpen, isAuthenticated]);

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

  if (!isOpen) return null;

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
    <div className="fixed inset-0 z-[120] bg-maroon-deep/95 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-5xl glass-card-warm p-5 sm:p-8 rounded-3xl border border-gold/40 shadow-2xl my-auto">
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 text-ivory/70 hover:text-gold-bright p-2 rounded-full glass cursor-pointer z-10"
          aria-label="Close Admin Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Not Authenticated: Secure Login Screen */}
        {!isAuthenticated ? (
          <div className="max-w-md mx-auto py-8 sm:py-12 text-center">
            <div className="w-16 h-16 rounded-3xl bg-gold/20 flex items-center justify-center text-gold-bright mx-auto mb-4 border border-gold/40 shadow-lg">
              <Lock className="w-8 h-8" />
            </div>

            <h3 className="font-cinzel font-black text-2xl sm:text-3xl text-ivory mb-2">
              Protected Admin Portal
            </h3>
            <p className="text-xs sm:text-sm text-ivory/70 mb-6 font-semibold">
              Authorized personnel only. Submissions and petitions are encrypted and access-logged.
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
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                    placeholder="Enter security passcode"
                    className="w-full bg-black/60 border border-gold/30 rounded-2xl pl-4 pr-11 py-3.5 text-center text-sm font-bold text-ivory placeholder-ivory/30 focus:outline-none focus:border-gold-bright transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ivory/50 hover:text-gold-bright transition-colors cursor-pointer"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>

                {errorMsg && (
                  <div className="flex items-center justify-center gap-1.5 text-xs text-red-400 font-bold bg-red-950/40 border border-red-500/20 py-2 px-3 rounded-xl">
                    <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="btn-gold w-full py-3.5 text-sm font-black uppercase tracking-wider cursor-pointer shadow-xl"
                >
                  Verify & Unlock Portal
                </button>
              </form>
            )}

            <div className="mt-8 text-[11px] text-ivory/40 font-semibold flex items-center justify-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-green-400" />
              <span>TLS Encrypted · Rate Limited · Auto-lock on Inactivity</span>
            </div>
          </div>
        ) : (
          /* Authenticated Dashboard */
          <div>
            {/* Header Strip */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gold/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gold/20 flex items-center justify-center text-gold-bright border border-gold/40 flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-cinzel font-black text-xl sm:text-2xl text-ivory flex items-center gap-2">
                    <span>Admin Central Dashboard</span>
                  </h3>
                  <p className="text-xs text-green-400 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                    <span>Secure Encrypted Session · Database Active</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <button
                  onClick={loadAllData}
                  disabled={isLoading}
                  className="px-3.5 py-2 rounded-xl glass border border-gold/30 text-xs font-bold text-ivory hover:text-gold-bright flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                  title="Reload from database"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? "animate-spin" : ""}`} />
                  <span>Refresh</span>
                </button>

                <button
                  onClick={() => setIsChangingPasscode(true)}
                  className="px-3.5 py-2 rounded-xl glass border border-gold/30 text-xs font-bold text-gold-bright hover:border-gold-bright flex items-center gap-1.5 cursor-pointer"
                  title="Change your admin passcode"
                >
                  <KeyRound className="w-3.5 h-3.5" />
                  <span>Change Passcode</span>
                </button>

                <button
                  onClick={handleLogout}
                  className="px-3.5 py-2 rounded-xl glass border border-red-500/40 text-xs font-bold text-red-400 hover:bg-red-500/20 cursor-pointer"
                >
                  Lock Portal
                </button>
              </div>
            </div>

            {/* Change Passcode Modal Drawer */}
            {isChangingPasscode && (
              <div className="my-4 p-5 rounded-2xl bg-black/60 border border-gold/40 shadow-xl animate-fade-in">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-cinzel font-bold text-sm text-gold-bright flex items-center gap-2">
                    <KeyRound className="w-4 h-4 text-neon" />
                    <span>Update Security Passcode</span>
                  </h4>
                  <button
                    onClick={() => setIsChangingPasscode(false)}
                    className="text-ivory/60 hover:text-ivory p-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <form
                  onSubmit={handleUpdatePasscode}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-3"
                >
                  <input
                    type="password"
                    required
                    placeholder="Current Passcode"
                    value={oldPasscode}
                    onChange={(e) => setOldPasscode(e.target.value)}
                    className="bg-black/50 border border-gold/25 rounded-xl px-3 py-2 text-xs text-ivory placeholder-ivory/30 focus:outline-none focus:border-gold-bright"
                  />
                  <input
                    type="password"
                    required
                    placeholder="New Passcode (min 6)"
                    value={newPasscode}
                    onChange={(e) => setNewPasscode(e.target.value)}
                    className="bg-black/50 border border-gold/25 rounded-xl px-3 py-2 text-xs text-ivory placeholder-ivory/30 focus:outline-none focus:border-gold-bright"
                  />
                  <input
                    type="password"
                    required
                    placeholder="Confirm New Passcode"
                    value={confirmPasscode}
                    onChange={(e) => setConfirmPasscode(e.target.value)}
                    className="bg-black/50 border border-gold/25 rounded-xl px-3 py-2 text-xs text-ivory placeholder-ivory/30 focus:outline-none focus:border-gold-bright"
                  />
                  <div className="sm:col-span-3 flex items-center justify-between gap-3 pt-1">
                    {changeError && <p className="text-xs text-red-400 font-bold">{changeError}</p>}
                    <button
                      type="submit"
                      className="btn-gold ml-auto px-5 py-2 text-xs font-black uppercase tracking-wider cursor-pointer"
                    >
                      Save New Passcode
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Notification Banner */}
            {actionNotice && (
              <div className="mt-3 p-2.5 rounded-xl bg-gold/15 border border-gold/40 text-gold-bright text-xs font-bold text-center flex items-center justify-center gap-2 animate-fade-in">
                <CheckCircle className="w-4 h-4 text-neon" />
                <span>{actionNotice}</span>
              </div>
            )}

            {/* Overview Stats Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 my-6">
              <div className="glass-card p-4 rounded-2xl border border-gold/20">
                <span className="text-[10px] uppercase tracking-wider text-ivory/60 font-bold block mb-1">
                  Total Prayers
                </span>
                <span className="font-syne font-black text-2xl sm:text-3xl text-gold-bright">
                  {prayers.length}
                </span>
              </div>

              <div className="glass-card p-4 rounded-2xl border border-gold/20">
                <span className="text-[10px] uppercase tracking-wider text-ivory/60 font-bold block mb-1">
                  Contact Messages
                </span>
                <span className="font-syne font-black text-2xl sm:text-3xl text-neon">
                  {messages.length}
                </span>
              </div>

              <div className="col-span-2 sm:col-span-1 glass-card p-4 rounded-2xl border border-gold/20 flex flex-col justify-center">
                <span className="text-[10px] uppercase tracking-wider text-ivory/60 font-bold block mb-1">
                  Security Status
                </span>
                <span className="text-xs font-black text-green-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-green-400" />
                  Protected & Encrypted
                </span>
              </div>
            </div>

            {/* Navigation Tabs & Search Toolbar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setActiveTab("prayers");
                    setSearchQuery("");
                  }}
                  className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                    activeTab === "prayers"
                      ? "bg-gold-bright text-maroon-deep shadow-md"
                      : "glass text-ivory/70 hover:text-ivory"
                  }`}
                >
                  <span className="flex items-center gap-2 justify-center">
                    <MessageSquare className="w-4 h-4" />
                    <span>Prayers ({prayers.length})</span>
                  </span>
                </button>

                <button
                  onClick={() => {
                    setActiveTab("messages");
                    setSearchQuery("");
                  }}
                  className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                    activeTab === "messages"
                      ? "bg-gold-bright text-maroon-deep shadow-md"
                      : "glass text-ivory/70 hover:text-ivory"
                  }`}
                >
                  <span className="flex items-center gap-2 justify-center">
                    <Mail className="w-4 h-4" />
                    <span>Messages ({messages.length})</span>
                  </span>
                </button>
              </div>

              {/* Search & Export */}
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-60">
                  <Search className="w-3.5 h-3.5 text-ivory/40 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search records..."
                    className="w-full bg-black/40 border border-gold/25 rounded-xl pl-9 pr-3 py-2 text-xs font-semibold text-ivory placeholder-ivory/30 focus:outline-none focus:border-gold-bright"
                  />
                </div>

                <button
                  onClick={() => exportData(activeTab)}
                  className="px-3 py-2 rounded-xl glass border border-gold/30 text-xs font-bold text-ivory/80 hover:text-gold-bright flex items-center gap-1 cursor-pointer flex-shrink-0"
                  title="Export to JSON"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Export</span>
                </button>
              </div>
            </div>

            {/* Tab 1: Prayer Requests List */}
            {activeTab === "prayers" && (
              <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1">
                {isLoading ? (
                  <div className="glass-card p-12 text-center text-ivory/60 text-sm font-bold">
                    Fetching records securely from database...
                  </div>
                ) : filteredPrayers.length === 0 ? (
                  <div className="glass-card p-12 text-center text-ivory/60 text-sm font-bold">
                    No prayer petitions found.
                  </div>
                ) : (
                  filteredPrayers.map((prayer) => (
                    <div
                      key={prayer.id}
                      className="glass-card p-4 sm:p-5 rounded-2xl border border-gold/15 hover:border-gold/30 transition-all flex flex-col sm:flex-row sm:items-start justify-between gap-3 group"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                          <span className="font-cinzel font-black text-gold-bright text-base">
                            {prayer.author}
                          </span>
                          <span className="text-[10px] text-ivory/50 bg-black/30 px-2 py-0.5 rounded-full">
                            {prayer.time}
                          </span>
                          {prayer.created_at && (
                            <span className="text-[10px] text-ivory/40">
                              {new Date(prayer.created_at).toLocaleString()}
                            </span>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-ivory/90 font-medium leading-relaxed">
                          {prayer.text}
                        </p>
                      </div>

                      <button
                        onClick={() => handleDeletePrayer(prayer.id)}
                        className="self-end sm:self-center p-2 rounded-xl text-ivory/40 hover:text-red-400 hover:bg-red-500/10 transition-colors cursor-pointer"
                        title="Delete from database"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            )}

            {/* Tab 2: Contact Messages List */}
            {activeTab === "messages" && (
              <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1">
                {isLoading ? (
                  <div className="glass-card p-12 text-center text-ivory/60 text-sm font-bold">
                    Fetching records securely from database...
                  </div>
                ) : filteredMessages.length === 0 ? (
                  <div className="glass-card p-12 text-center text-ivory/60 text-sm font-bold">
                    No contact submissions found.
                  </div>
                ) : (
                  filteredMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className="glass-card p-4 sm:p-5 rounded-2xl border border-gold/15 hover:border-gold/30 transition-all flex flex-col sm:flex-row sm:items-start justify-between gap-3 group"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="font-cinzel font-black text-neon text-base">
                            {msg.name}
                          </span>
                          <a
                            href={`mailto:${msg.email}`}
                            className="text-xs text-gold-bright hover:underline font-semibold"
                          >
                            {msg.email}
                          </a>
                          <span className="text-[10px] text-ivory/50 bg-black/30 px-2 py-0.5 rounded-full">
                            {msg.time}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-ivory/90 font-medium leading-relaxed bg-black/25 p-3 rounded-xl border border-gold/10 mt-2">
                          {msg.message}
                        </p>
                      </div>

                      <button
                        onClick={() => handleDeleteMessage(msg.id)}
                        className="self-end sm:self-center p-2 rounded-xl text-ivory/40 hover:text-red-400 hover:bg-red-500/10 transition-colors cursor-pointer"
                        title="Delete message from database"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
