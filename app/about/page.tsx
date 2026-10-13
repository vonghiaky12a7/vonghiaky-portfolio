import React from "react";
import Link from "next/link";
import { ArrowRight, Briefcase, Code2, Database, Globe, Layers, ShieldCheck, Terminal, GraduationCap, Award, FileText, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "About Me | Võ Nghĩa Kỳ - Senior Full-Stack & Odoo Developer",
  description:
    "Learn about Võ Nghĩa Kỳ (Vo Nghia Ky), a Senior Full-Stack Engineer and Odoo 18/19 Developer specializing in Python, React Native, Next.js, and AI Camera systems.",
};

export default function AboutPage() {
  const experiences = [
    {
      role: "Backend Odoo Developer",
      company: "B24 JSC — Ho Chi Minh City",
      period: "04/2025 – Present",
      desc: "Customize shared Odoo 18/19 addons and client-specific modules across CRM, Sales, Inventory, Accounting, Pharmacy, and Garage operations. Implement backend Python/ORM logic, wizards, QWeb reports, automated VNPay/VietQR payment processing, and laboratory instrument data import pipelines.",
      highlights: [
        "Architected 195+ modular business addons in xbook_addons",
        "Developed VNPay payment integration on Sale Order invoices",
        "Implemented camera management UI and attendance webhook syncing in xcamera",
        "Maintained client-specific addons through Linux and Docker environments"
      ]
    },
    {
      role: "Full-Stack Software Engineer & Mobile Developer",
      company: "Independent & Open Source Projects",
      period: "2023 – Present",
      desc: "Engineered modern cross-platform mobile apps (FitTrack, Serene Yoga) in React Native/Expo, and full-stack Next.js web applications (MedConnect, AutoCare Plus) integrated with Odoo ERP and Edge AI microservices.",
      highlights: [
        "Built offline-first React Native mobile applications with SQLite sync",
        "Constructed high-speed C# .NET Core silent printing microservice (xprint)",
        "Designed FastAPI computer vision stream ingestion service with Go2RTC"
      ]
    },
    {
      role: "Bachelor of Information Technology",
      company: "Ho Chi Minh City University of Technology (HUTECH)",
      period: "09/2021 – 09/2025",
      desc: "Comprehensive study in Software Engineering, Algorithms, Database Management Systems, Computer Networks, and Cloud Infrastructure.",
      highlights: [
        "Strong foundation in OOP, Design Patterns, and Database Normalization",
        "Good reading comprehension of technical documentation in English"
      ]
    }
  ];

  const skillCategories = [
    {
      title: "Odoo & ERP Architecture",
      icon: Database,
      color: "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40",
      skills: [
        "Odoo 18 / 19",
        "Python & Odoo ORM",
        "Model Inheritance",
        "Computed Fields & Constraints",
        "Wizards (TransientModel)",
        "QWeb Reports & PDF",
        "XML Views & OWL",
        "Access Rights & Record Rules"
      ]
    },
    {
      title: "Mobile App Development",
      icon: Layers,
      color: "text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/40",
      skills: [
        "React Native",
        "Expo & EAS",
        "TypeScript",
        "Reanimated & Gestures",
        "SQLite / WatermelonDB",
        "Offline-First Sync",
        "NativeWind / Tailwind",
        "Push Notifications"
      ]
    },
    {
      title: "Modern Web & Full-Stack",
      icon: Globe,
      color: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40",
      skills: [
        "Next.js 14 / 15",
        "React 19",
        "Tailwind CSS",
        "REST APIs & JSON-RPC",
        "FastAPI & Flask",
        "C# .NET Core",
        "DevExpress Reports",
        "WebSockets"
      ]
    },
    {
      title: "Fintech, AI & DevOps",
      icon: ShieldCheck,
      color: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40",
      skills: [
        "VNPay Gateway",
        "VietQR Dynamic Payload",
        "OpenCV & Face Recognition",
        "Go2RTC & RTSP Streams",
        "PostgreSQL & MariaDB",
        "Docker & Docker Compose",
        "Linux (Ubuntu/Debian)",
        "Git & GitHub Actions"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12 max-w-5xl space-y-24">
      {/* Intro Section */}
      <section className="flex flex-col md:flex-row items-center gap-12 pt-6">
        <div className="w-full md:w-5/12 flex justify-center">
          <div className="relative group max-w-sm w-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-600 rounded-3xl -rotate-6 opacity-25 group-hover:-rotate-3 transition-transform duration-500" />
            <img
              src="/images/vo-nghia-ky.webp"
              alt="Võ Nghĩa Kỳ"
              className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[3/4] border border-slate-200/50 dark:border-slate-700/50"
            />
          </div>
        </div>

        <div className="w-full md:w-7/12 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            About Me
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
            Hi, I&apos;m <span className="premium-gradient-text">Võ Nghĩa Kỳ</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            I am a Senior Full-Stack Developer and Odoo ERP Specialist based in Ho Chi Minh City, Vietnam. I bridge the gap between complex enterprise ERP backends, high-speed mobile apps, automated payment gateways, and Edge AI vision systems.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Currently at <strong className="text-slate-900 dark:text-white">B24 JSC</strong>, I architect and customize business workflows across automotive repair garages, healthcare hospitals, materials testing laboratories, and retail pharmacies.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:scale-105 transition-all shadow-lg shadow-indigo-500/15"
            >
              Get in Touch
            </Link>
            <a
              href="/cv.html"
              target="_blank"
              className="px-6 py-3 rounded-full glass-panel font-semibold hover:scale-105 transition-all flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
            Career &amp; Education
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Professional Experience Timeline
          </h3>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="glass-card p-6 md:p-8 rounded-3xl relative space-y-4 hover:-translate-y-1 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/50 dark:border-slate-800/60 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h4>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">{exp.company}</p>
                  </div>
                </div>
                <span className="text-xs font-semibold px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 w-fit">
                  {exp.period}
                </span>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{exp.desc}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                {exp.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full-Stack Technical Arsenal */}
      <section className="space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
            Skills &amp; Technologies
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Full-Stack Technical Arsenal
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => {
            const IconComp = cat.icon;
            return (
              <div key={idx} className="glass-card p-8 rounded-3xl space-y-6">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${cat.color}`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">{cat.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-medium border border-slate-200/50 dark:border-slate-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
