// "use client";

// import {
//   createContext,
//   useContext,
//   useState,
//   useEffect,
//   type ReactNode,
// } from "react";

// type Language = "uz" | "ru";

// interface I18nContextType {
//   language: Language;
//   setLanguage: (lang: Language) => void;
//   t: (key: string) => string;
// }

// const I18nContext = createContext<I18nContextType | undefined>(undefined);

// interface I18nProviderProps {
//   children: ReactNode;
// }

// export function I18nProvider({ children }: I18nProviderProps) {
//   const [language, setLanguage] = useState<Language>("uz");
//   const [translations, setTranslations] = useState<Record<string, any>>({});

//   useEffect(() => {
//     // Load saved language from localStorage
//     const savedLanguage = localStorage.getItem("language") as Language;
//     if (savedLanguage && (savedLanguage === "uz" || savedLanguage === "ru")) {
//       setLanguage(savedLanguage);
//     }
//   }, []);

//   useEffect(() => {
//     // Load translations for current language
//     const loadTranslations = async () => {
//       try {
//         const response = await fetch(`/locales/${language}.json`);
//         const data = await response.json();
//         setTranslations(data);
//       } catch (error) {
//         console.error("Failed to load translations:", error);
//       }
//     };

//     loadTranslations();
//     localStorage.setItem("language", language);
//   }, [language]);

//   const t = (key: string): string => {
//     const keys = key.split(".");
//     let value = translations;

//     for (const k of keys) {
//       if (value && typeof value === "object" && k in value) {
//         value = value[k];
//       } else {
//         return key; // Return key if translation not found
//       }
//     }

//     return typeof value === "string" ? value : key;
//   };

//   return (
//     <I18nContext.Provider value={{ language, setLanguage, t }}>
//       {children}
//     </I18nContext.Provider>
//   );
// }

// export function useI18n() {
//   const context = useContext(I18nContext);
//   if (context === undefined) {
//     throw new Error("useI18n must be used within an I18nProvider");
//   }
//   return context;
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// src/lib/i18n.tsx
"use client";
import { createContext, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
type Language = "uz" | "ru";

interface I18nContextType { language: Language; setLanguage: (l: Language) => void; t: (k: string) => string; }
const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children, defaultLang = "uz" }: { children: ReactNode; defaultLang?: Language }) {
  const mounted = useRef(false);
  const [language, setLanguage] = useState<Language>(defaultLang);
  const [translations, setTranslations] = useState<Record<string, any>>({});

  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;
    const saved = (typeof window !== "undefined" ? (localStorage.getItem("language") as Language | null) : null);
    if (saved === "uz" || saved === "ru") setLanguage(saved);
  }, [defaultLang]);

  useEffect(() => {
    let aborted = false;
    (async () => {
      try {
        // 1) public/locales/... dan fetch qilib ko‘ramiz
        const res = await fetch(`/locales/${language}.json`, { cache: "no-store" });
        if (res.ok) {
          const text = await res.text();
          const json = JSON.parse(text);
          if (!aborted) setTranslations(json);
          return;
        }
        throw new Error(`404 or non-ok: ${res.status}`);
      } catch {
        // 2) Agar fetch bo‘lmasa, bundle ichidan dynamic import
        try {
          const mod = await import(`@/locales/${language}.json`);
          if (!aborted) setTranslations(mod.default ?? mod);
        } catch (e2) {
          console.error("i18n load failed", e2);
          if (!aborted) setTranslations({});
        }
      } finally {
        localStorage.setItem("language", language);
      }
    })();
    return () => { aborted = true; };
  }, [language]);

  const t = useMemo(() => (key: string) => {
    const parts = key.split(".");
    let val: any = translations;
    for (const p of parts) { if (val && typeof val === "object" && p in val) val = val[p]; else return key; }
    return typeof val === "string" ? val : key;
  }, [translations]);

  return <I18nContext.Provider value={{ language, setLanguage, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within an I18nProvider");
  return ctx;
}
