import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/60 dark:border-slate-800/80 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md mt-20">
      <div className="container mx-auto px-6 py-16 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-indigo-500/30 shrink-0">
                <img
                  src="/images/vo-nghia-ky.webp"
                  alt="Vo Nghia Ky"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
                Võ Nghĩa Kỳ
              </span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-sm leading-relaxed">
              Senior Full-Stack & Odoo 18/19 Engineer based in Ho Chi Minh City, Vietnam. Specializing in enterprise ERP architectures, React Native mobile apps, automated payment gateways, and Edge AI camera vision.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/vonghiaky"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-200/60 dark:hover:bg-slate-700/60 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/vonghiaky"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200/60 dark:hover:bg-slate-700/60 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:vonghiaky2003@gmail.com"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-red-500 hover:bg-slate-200/60 dark:hover:bg-slate-700/60 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Full-Stack Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Projects & Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Technical Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <span>Ho Chi Minh City, Vietnam</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <a href="tel:+84913476315" className="hover:underline">
                  (+84) 91 347 6315
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <a href="mailto:vonghiaky2003@gmail.com" className="hover:underline">
                  vonghiaky2003@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200/60 dark:border-slate-800/60 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Võ Nghĩa Kỳ (Vo Nghia Ky) • Google Play Developer. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="/data-deletion" className="hover:underline text-red-500/80 hover:text-red-500">
              Data Deletion
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
