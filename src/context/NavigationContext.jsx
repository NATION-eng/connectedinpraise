import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

const NavigationContext = createContext({
  currentPath: "/",
  navigate: () => {},
});

export function normalizePath(path = "") {
  // If hash is used (e.g. #/about, #about, or #donate)
  if (path.startsWith("#")) {
    const cleanHash = path.replace(/^#\/?/, "");
    if (!cleanHash || cleanHash === "home") return "/";
    return `/${cleanHash}`;
  }

  // If path is root or starts with /
  const clean = path.replace(/\/+$/, "") || "/";
  if (clean === "/home") return "/";
  return clean;
}

export function NavigationProvider({ children }) {
  const getInitialPath = () => {
    if (typeof window === "undefined") return "/";
    if (window.location.hash) {
      return normalizePath(window.location.hash);
    }
    return normalizePath(window.location.pathname);
  };

  const [currentPath, setCurrentPath] = useState(getInitialPath);

  const navigate = useCallback((toPath) => {
    const normalized = normalizePath(toPath);
    setCurrentPath(normalized);

    // Update history state cleanly
    if (window.location.pathname !== normalized) {
      window.history.pushState(null, "", normalized);
    }

    // Scroll to top with smooth motion
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      if (window.location.hash) {
        setCurrentPath(normalizePath(window.location.hash));
      } else {
        setCurrentPath(normalizePath(window.location.pathname));
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("hashchange", handlePopState);

    // Keyboard shortcut for Admin: Ctrl+Shift+A
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.shiftKey && (e.key === "A" || e.key === "a")) {
        e.preventDefault();
        setCurrentPath((prev) => (prev === "/admin" ? "/" : "/admin"));
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("hashchange", handlePopState);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
}
