import React, { useState, useEffect } from "react";
import {
  ShieldCheck,
  Lock,
  X,
  MessageSquare,
  Mail,
  Trash2,
  RefreshCw,
  Download,
  ExternalLink,
  Search,
  CheckCircle,
  Database,
} from "lucide-react";
import {
  getAllPrayersAdmin,
  deletePrayerAdmin,
  getAllContactMessagesAdmin,
  deleteContactMessageAdmin,
} from "../../services/db";

const DEFAULT_ADMIN_PASSCODE = "cip2026";

export function AdminDashboard({ isOpen, onClose }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [activeTab, setActiveTab] = useState("prayers"); // 'prayers' | 'messages'

  const [prayers, setPrayers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [actionNotice, setActionNotice] = useState("");

  // Check if session already authenticated
  useEffect(() => {
    const authed = sessionStorage.getItem("cip_admin_authed") === "true";
    if (authed) {
      setIsAuthenticated(true);
    }
  }, []);

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
    if (passcode.trim() === DEFAULT_ADMIN_PASSCODE) {
      setIsAuthenticated(true);
      sessionStorage.setItem("cip_admin_authed", "true");
      setErrorMsg("");
      loadAllData();
    } else {
      setErrorMsg("Incorrect admin passcode. Please verify and try again.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("cip_admin_authed");
    setPasscode("");
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
      <div className="relative w-full max-w-5xl glass-card-warm p-6 sm:p-8 rounded-3xl border border-gold/40 shadow-2xl my-auto">
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-ivory/70 hover:text-gold-bright p-2 rounded-full glass cursor-pointer z-10"
          aria-label="Close Admin Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Not Authenticated: Passcode Screen */}
        {!isAuthenticated ? (
          <div className="max-w-md mx-auto py-10 text-center">
            <div className="w-16 h-16 rounded-3xl bg-gold/20 flex items-center justify-center text-gold-bright mx-auto mb-4 border border-gold/40 shadow-lg">
              <Lock className="w-8 h-8" />
            </div>

            <h3 className="font-display font-black text-2xl sm:text-3xl text-ivory mb-2">
              Admin Access Portal
            </h3>
            <p className="text-xs sm:text-sm text-ivory/70 mb-6 font-semibold">
              Enter your admin security passcode to inspect all incoming prayer petitions and contact
              submissions.
            </p>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <input
                  type="password"
                  required
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="Enter passcode (default: cip2026)"
                  className="w-full bg-black/50 border border-gold/30 rounded-2xl px-4 py-3.5 text-center text-sm font-bold text-ivory placeholder-ivory/30 focus:outline-none focus:border-gold-bright transition-colors"
                />
              </div>

              {errorMsg && (
                <p className="text-xs text-red-400 font-bold">{errorMsg}</p>
              )}

              <button
                type="submit"
                className="btn-gold w-full py-3.5 text-sm font-black uppercase tracking-wider cursor-pointer shadow-xl"
              >
                Authenticate & Unlock
              </button>
            </form>
          </div>
        ) : (
          /* Authenticated Dashboard */
          <div>
            {/* Header Strip */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gold/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gold/20 flex items-center justify-center text-gold-bright border border-gold/40">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-black text-xl sm:text-2xl text-ivory flex items-center gap-2">
                    <span>Admin Central Dashboard</span>
                    <span className="text-[10px] font-black uppercase bg-green-500/20 text-green-400 border border-green-500/40 px-2 py-0.5 rounded-full">
                      Live Cloud DB
                    </span>
                  </h3>
                  <p className="text-xs text-ivory/60 font-semibold">
                    Supabase: <strong className="text-gold-bright">zaidnzbsdboyyhdptfxz</strong>
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

                <a
                  href="https://supabase.com/dashboard/project/zaidnzbsdboyyhdptfxz/editor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl glass border border-gold/30 text-xs font-bold text-gold-bright hover:border-gold/60 flex items-center gap-1.5"
                >
                  <span>Supabase Console</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <button
                  onClick={handleLogout}
                  className="px-3.5 py-2 rounded-xl glass border border-red-500/30 text-xs font-bold text-red-400 hover:bg-red-500/10 cursor-pointer"
                >
                  Lock
                </button>
              </div>
            </div>

            {/* Notification Banner */}
            {actionNotice && (
              <div className="mt-3 p-2.5 rounded-xl bg-gold/15 border border-gold/40 text-gold-bright text-xs font-bold text-center flex items-center justify-center gap-2 animate-fade-in">
                <CheckCircle className="w-4 h-4" />
                <span>{actionNotice}</span>
              </div>
            )}

            {/* Overview Stats Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 my-6">
              <div className="glass-card p-4 rounded-2xl border border-gold/20">
                <span className="text-[10px] uppercase tracking-wider text-ivory/60 font-bold block mb-1">
                  Total Prayers
                </span>
                <span className="font-display font-black text-2xl sm:text-3xl text-gold-bright">
                  {prayers.length}
                </span>
              </div>

              <div className="glass-card p-4 rounded-2xl border border-gold/20">
                <span className="text-[10px] uppercase tracking-wider text-ivory/60 font-bold block mb-1">
                  Contact Messages
                </span>
                <span className="font-display font-black text-2xl sm:text-3xl text-neon">
                  {messages.length}
                </span>
              </div>

              <div className="col-span-2 sm:col-span-1 glass-card p-4 rounded-2xl border border-gold/20 flex flex-col justify-center">
                <span className="text-[10px] uppercase tracking-wider text-ivory/60 font-bold block mb-1">
                  Cloud Status
                </span>
                <span className="text-xs font-black text-green-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                  PostgreSQL Active
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
                    Fetching prayers from Supabase cloud...
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
                          <span className="font-display font-extrabold text-gold-bright text-base">
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
                    Fetching messages from Supabase cloud...
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
                          <span className="font-display font-extrabold text-neon text-base">
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
