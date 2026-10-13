"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X, Sun, Moon, Code2 } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed w-full top-4 z-50 px-4 md:px-0 pointer-events-none">
      <div className="container mx-auto max-w-5xl pointer-events-auto">
        <div className="relative rounded-full glass-panel px-6 h-16 flex items-center justify-between shadow-2xl shadow-indigo-500/10 dark:shadow-black/40 transition-all duration-300">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-full overflow-hidden border border-indigo-500/30 group-hover:scale-105 transition-transform shrink-0 shadow-sm">
              <img
                src="/images/vo-nghia-ky.webp"
                alt="Vo Nghia Ky"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 leading-tight">
                Võ Nghĩa Kỳ
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium tracking-wide">
                Full-Stack & Odoo Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-slate-100/60 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-700/50">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all relative ${
                    isActive
                      ? "bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm font-semibold"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </button>

            <Link
              href="/contact"
              className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-lg shadow-indigo-500/20 hover:scale-105 active:scale-95"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors"
              aria-label="Open Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div className="md:hidden mt-2 p-4 rounded-3xl glass-panel shadow-2xl flex flex-col gap-2 animate-fade-in-up">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-2.5 rounded-2xl text-sm font-medium transition-all ${
                  pathname === link.href
                    ? "bg-indigo-600 text-white font-semibold"
                    : "text-slate-700 dark:text-slate-200 hover:bg-slate-100/50 dark:hover:bg-slate-800/50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-indigo-600 text-white text-sm font-semibold shadow-lg shadow-indigo-500/30"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
