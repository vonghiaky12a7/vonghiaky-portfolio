"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  Layers,
  Smartphone,
  Globe,
  Cpu,
  Zap,
  ShieldCheck,
  Clock,
  Users,
  Code2,
  Database,
  ExternalLink,
  FileText,
  Sparkles,
  Printer,
  CheckCircle2,
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  Flame,
} from "lucide-react";
import { projects } from "@/data/projects";

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const featuredProjects = projects.slice(0, 4);

  const faqs = [
    {
      q: "What is your primary engineering background and focus?",
      a: "I am a Senior Full-Stack Developer & Odoo 18/19 Specialist at B24 JSC. I build end-to-end solutions: from enterprise ERP business workflows (Odoo/Python/PostgreSQL) and automated payment integrations (VNPay/VietQR), to cross-platform mobile apps (React Native/Expo) and real-time AI camera microservices (FastAPI/Go2RTC).",
    },
    {
      q: "Can you customize large-scale business workflows in Odoo 18/19?",
      a: "Yes. I have engineered multi-branch ERP solutions across automotive garages (Thanh Phong Auto), healthcare hospitals (SportsMedic), construction materials testing laboratories (Vinh Loc), and pharmacy retail with full accounting integration.",
    },
    {
      q: "How do you integrate automated payment gateways (VNPay & VietQR)?",
      a: "I generate dynamic EMVCo VietQR payloads with exact invoice balances on printouts and process cryptographic HMAC-SHA512 VNPay IPN webhooks for instant automated reconciliation.",
    },
    {
      q: "Can you build mobile apps connected to Odoo backends?",
      a: "Yes! Using React Native & Expo, I develop mobile applications (like FitTrack and SportsMedic Companion) that sync with Odoo via secure REST and JSON-RPC APIs, supporting offline-first SQLite workflows.",
    },
    {
      q: "What is your experience with AI Camera systems (xcamera)?",
      a: "I developed xcamera, a microservice using FastAPI, OpenCV, and Go2RTC that ingests multi-camera RTSP video feeds, performs facial recognition, and dispatches automated attendance check-ins directly into Odoo.",
    },
    {
      q: "How does your silent printing engine (xprint) work?",
      a: "Through xprint, a dedicated C# .NET Core microservice, we print prescriptions, barcode labels, and invoices directly to local thermal and laser printers without any browser dialog interruptions.",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Redesigned Clean Split Hero Section */}
      <section className="relative pt-8 pb-16 md:py-16 overflow-hidden">
        {/* Subtle Ambient Light */}
        <div className="absolute top-10 left-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-20 right-1/4 w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-[90px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Heading, Bio, CTAs */}
            <div className="lg:col-span-7 space-y-6">
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-slate-700 dark:text-slate-300 text-xs font-semibold shadow-sm w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Google Play Developer Profile • Mobile Apps &amp; Full-Stack</span>
              </div>

              {/* Title */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.2]">
                  Võ Nghĩa Kỳ
                  <span className="block text-2xl sm:text-3xl md:text-4xl font-bold mt-1 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
                    Full-Stack &amp; Mobile App Developer
                  </span>
                </h1>
              </div>

              {/* Concise Bio */}
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                Creator of <strong className="text-slate-900 dark:text-white">Streak Học Bài</strong> (<code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-indigo-500">com.streakhocbai.app</code>) and cross-platform mobile apps on <strong className="text-slate-900 dark:text-white">Google Play</strong>. Senior engineer specializing in enterprise <strong className="text-slate-900 dark:text-white">Odoo 18/19 ERP</strong>, automated payments, and Edge AI vision systems.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all flex items-center gap-2 shadow-lg shadow-indigo-500/20 hover:scale-105 active:scale-95"
                >
                  <span>Let&apos;s Talk</span>
                  <div className="w-6 h-6 rounded-full bg-white/20 dark:bg-black/10 flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>

                <Link
                  href="/portfolio"
                  className="px-6 py-3 rounded-full glass-panel text-slate-900 dark:text-white text-sm font-semibold hover:bg-white/90 dark:hover:bg-slate-800/90 transition-all hover:scale-105"
                >
                  Explore 12+ Projects
                </Link>

                <a
                  href="/cv.html"
                  target="_blank"
                  className="px-5 py-3 rounded-full glass-card text-indigo-600 dark:text-indigo-400 text-sm font-semibold hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-all flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>View CV</span>
                </a>
              </div>

              {/* Tech Stack Micro-Pills */}
              <div className="pt-3 flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-400 dark:text-slate-500 font-medium mr-1">Core Tech:</span>
                {["Odoo 18/19", "Python", "React Native", "Next.js 14", "FastAPI", "PostgreSQL", "Docker"].map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-medium border border-slate-200/50 dark:border-slate-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Interactive Profile Card (Double-Bezel Architecture) */}
            <div className="lg:col-span-5">
              <div className="p-2 rounded-[2rem] bg-gradient-to-b from-indigo-500/20 via-purple-500/10 to-transparent border border-slate-200/60 dark:border-slate-800/80 shadow-2xl">
                <div className="glass-panel p-6 rounded-[calc(2rem-0.5rem)] space-y-6">
                  {/* Photo and Header info */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-indigo-500/40 shrink-0 shadow-md">
                      <img
                        src="/images/vo-nghia-ky.webp"
                        alt="Võ Nghĩa Kỳ"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Võ Nghĩa Kỳ</h2>
                        <span className="w-2 h-2 rounded-full bg-emerald-500" title="Active" />
                      </div>
                      <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold">
                        Backend Odoo Developer @ B24 JSC
                      </p>
                      <div className="flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        <span>Ho Chi Minh City, Vietnam</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-2.5 pt-1">
                    <div className="p-3 rounded-xl bg-slate-100/70 dark:bg-slate-800/60 border border-slate-200/40 dark:border-slate-700/40">
                      <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">195+</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">ERP Business Addons</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-100/70 dark:bg-slate-800/60 border border-slate-200/40 dark:border-slate-700/40">
                      <div className="text-xl font-bold text-violet-600 dark:text-violet-400">10+</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Enterprise Clients</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-100/70 dark:bg-slate-800/60 border border-slate-200/40 dark:border-slate-700/40">
                      <div className="text-xl font-bold text-pink-600 dark:text-pink-400">4+</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Mobile &amp; Web Apps</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-100/70 dark:bg-slate-800/60 border border-slate-200/40 dark:border-slate-700/40">
                      <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400">100%</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">On-Time Delivery</div>
                    </div>
                  </div>

                  {/* Quick Connect Row */}
                  <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <a
                        href="https://github.com/vonghiaky"
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 transition-colors"
                        title="GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href="https://linkedin.com/in/vonghiaky"
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors"
                        title="LinkedIn"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a
                        href="mailto:vonghiaky.dev@gmail.com"
                        className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-red-500 transition-colors"
                        title="Email"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>

                    <a
                      href="tel:+84913476315"
                      className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>(+84) 91 347 6315</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Play Applications Spotlight Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6 max-w-6xl space-y-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Google Play Developer Showcase</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                Mobile Apps &amp; Production Builds
              </h2>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
                Cross-platform mobile apps engineered for fluid 60fps UX, offline-first reliability, and strict Google Play Store data safety compliance.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/privacy-policy"
                className="text-xs font-semibold px-3.5 py-2 rounded-full glass-panel hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/data-deletion"
                className="text-xs font-semibold px-3.5 py-2 rounded-full glass-panel text-red-500/80 hover:text-red-500 transition-colors"
              >
                Data Deletion
              </Link>
            </div>
          </div>

          {/* Flagship App: Streak Học Bài */}
          <div className="glass-card rounded-3xl p-6 md:p-10 border border-indigo-500/20 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-transparent relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Info */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 fill-current" />
                    <span>Flagship App</span>
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    com.streakhocbai.app
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    v1.0.0
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                    Streak Học Bài — Gamified Daily Habits &amp; Pomodoro
                  </h3>
                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    Ứng dụng rèn luyện tính kỷ luật học tập hàng ngày với ngọn lửa streak Duolingo-style, đồng hồ Pomodoro tập trung khoa học kết hợp âm thanh sóng não white noise, bảng xếp hạng thi đua bạn bè và hệ thống thông báo nhắc nhở thông minh.
                  </p>
                </div>

                {/* Highlights List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Streak Flame System:</strong> Giữ lửa học tập hàng ngày &amp; đóng băng streak</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Pomodoro Timer:</strong> Đếm giờ tập trung kèm âm thanh white noise</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Offline-First:</strong> Dữ liệu lưu an toàn trên máy, không theo dõi ẩn danh</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Local Notifications:</strong> Nhắc nhở thông minh theo lịch học cá nhân</span>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {["React Native", "Expo", "TypeScript", "Tailwind CSS", "Reanimated", "AsyncStorage", "Expo Notifications"].map((t) => (
                    <span key={t} className="text-[11px] px-2.5 py-1 rounded-lg bg-white/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium border border-slate-200/50 dark:border-slate-700/50">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <Link
                    href="/portfolio"
                    className="px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-md shadow-indigo-500/20 flex items-center gap-1.5"
                  >
                    <span>Xem Dự Án &amp; Screenshots</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/privacy-policy"
                    className="px-4 py-2.5 rounded-full glass-panel text-slate-700 dark:text-slate-300 text-xs font-semibold hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    Chính Sách Bảo Mật
                  </Link>
                  <Link
                    href="/data-deletion"
                    className="px-4 py-2.5 rounded-full glass-panel text-red-500/90 hover:text-red-500 text-xs font-semibold transition-colors"
                  >
                    Yêu Cầu Xóa Dữ Liệu
                  </Link>
                </div>
              </div>

              {/* Right Phone Mockup */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-64 md:w-72 aspect-[9/18.5] rounded-[2.5rem] p-3 bg-slate-900 border-4 border-slate-700/60 shadow-2xl shadow-indigo-500/10 overflow-hidden group">
                  {/* Speaker notch */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-800 rounded-full z-20" />
                  <img
                    src="/portfolio/streak-hoc-bai.png"
                    alt="Streak Học Bài App Screenshot"
                    className="w-full h-full object-cover rounded-[2rem] group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none rounded-[2rem]" />
                  <div className="absolute bottom-6 left-5 right-5 text-center pointer-events-none">
                    <span className="text-xs font-bold text-white px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md">
                      Streak Học Bài v1.0.0
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Mobile Apps (FitTrack & Serene Yoga) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card rounded-3xl p-6 md:p-8 space-y-4 hover:-translate-y-1 transition-all">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-violet-50 dark:bg-violet-950/40 flex items-center justify-center text-violet-600 dark:text-violet-400">
                  <Smartphone className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  React Native / SQLite
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  FitTrack — Workout &amp; Calorie Companion
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  Ứng dụng theo dõi luyện tập gym/calisthenics, nhật ký bài tập, tính toán lượng calo tiêu thụ và biểu đồ tiến độ trực quan với cơ sở dữ liệu SQLite offline-first.
                </p>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-slate-200/50 dark:border-slate-800/60">
                <div className="flex items-center gap-3">
                  <Link href="/privacy-policy" className="text-xs text-slate-500 hover:text-indigo-500 underline">Privacy</Link>
                  <Link href="/data-deletion" className="text-xs text-red-500/80 hover:text-red-500 underline">Data Deletion</Link>
                </div>
                <Link href="/portfolio" className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1">
                  <span>Chi tiết</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-6 md:p-8 space-y-4 hover:-translate-y-1 transition-all">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  Wellness / Audio Engine
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Serene Yoga &amp; Mindfulness Meditation
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  Ứng dụng thiền định và yoga thư giãn với engine phát âm thanh nền tùy chỉnh, phối âm thanh thiên nhiên, chuông hẹn giờ thở và theo dõi chuỗi ngày tĩnh tâm.
                </p>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-slate-200/50 dark:border-slate-800/60">
                <div className="flex items-center gap-3">
                  <Link href="/privacy-policy" className="text-xs text-slate-500 hover:text-indigo-500 underline">Privacy</Link>
                  <Link href="/data-deletion" className="text-xs text-red-500/80 hover:text-red-500 underline">Data Deletion</Link>
                </div>
                <Link href="/portfolio" className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1">
                  <span>Chi tiết</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Google Play Trust & Compliance Banner */}
          <div className="p-6 md:p-8 rounded-3xl bg-slate-900 text-white dark:bg-slate-950 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>Google Play Console Ready</span>
              </div>
              <h4 className="text-xl font-bold">Hồ Sơ Nhà Phát Triển Đã Sẵn Sàng Xác Thực</h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Đáp ứng đầy đủ 100% chính sách Google Play: Website nhà phát triển công khai, Chính sách quyền riêng tư chi tiết, Cơ chế tự phục vụ xóa dữ liệu người dùng, và Kênh liên hệ hỗ trợ chính thức.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <Link
                href="/privacy-policy"
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold transition-colors"
              >
                Chính Sách Bảo Mật
              </Link>
              <Link
                href="/data-deletion"
                className="px-4 py-2 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-red-300 text-xs font-semibold transition-colors"
              >
                Yêu Cầu Xóa Dữ Liệu
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-colors"
              >
                Liên Hệ Hỗ Trợ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Bento Grid */}
      <section className="py-16 bg-slate-100/50 dark:bg-slate-900/40 border-y border-slate-200/50 dark:border-slate-800/50">
        <div className="container mx-auto px-6 max-w-6xl space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
              Core Stack
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              The 4 Full-Stack Engineering Pillars
            </h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
              Complete, end-to-end technical capabilities from enterprise ERP backends to mobile apps and Edge AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pillar 1 */}
            <div className="glass-card p-6 md:p-8 rounded-3xl space-y-4 hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-sm">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  1. Enterprise Odoo 18/19 ERP
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                  Model inheritance, custom DocTypes, multi-step interactive wizards, automated workflows, access rights, record rules, and custom QWeb reports.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="text-[11px] px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-medium">Odoo 18/19</span>
                <span className="text-[11px] px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-medium">Python ORM</span>
                <span className="text-[11px] px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-medium">PostgreSQL</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="glass-card p-6 md:p-8 rounded-3xl space-y-4 hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-violet-50 dark:bg-violet-950/40 flex items-center justify-center text-violet-600 dark:text-violet-400 shadow-sm">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  2. Cross-Platform Mobile Apps
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                  Native iOS &amp; Android development with React Native &amp; Expo. 60fps animations, offline-first SQLite sync, and companion apps (FitTrack &amp; Serene Yoga).
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="text-[11px] px-2.5 py-1 rounded-lg bg-violet-50 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 font-medium">React Native</span>
                <span className="text-[11px] px-2.5 py-1 rounded-lg bg-violet-50 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 font-medium">Expo</span>
                <span className="text-[11px] px-2.5 py-1 rounded-lg bg-violet-50 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 font-medium">SQLite Offline</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="glass-card p-6 md:p-8 rounded-3xl space-y-4 hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  3. Modern Web Applications &amp; SaaS
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                  High-speed Next.js 14 App Router web applications, patient booking portals (MedConnect), customer garage trackers (AutoCare Plus), and analytics dashboards.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-medium">Next.js 14</span>
                <span className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-medium">React 19</span>
                <span className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-medium">Tailwind CSS</span>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="glass-card p-6 md:p-8 rounded-3xl space-y-4 hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-sm">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  4. AI Vision, Payments &amp; Silent Printing
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                  AI camera recognition microservices (xcamera FastAPI + Go2RTC), VNPay/VietQR automated reconciliation, and high-speed silent printing engines (xprint .NET).
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="text-[11px] px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-medium">xcamera AI</span>
                <span className="text-[11px] px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-medium">VNPay &amp; VietQR</span>
                <span className="text-[11px] px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-medium">xprint (.NET)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-6xl space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
                Selected Work
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                Featured Enterprise &amp; App Projects
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 transition-colors"
            >
              <span>View All 12 Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/80 text-white backdrop-blur-md">
                    {project.tag}
                  </div>
                </div>

                <div className="p-6 md:p-8 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {project.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/50 dark:border-slate-800/60 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 3).map((t, idx) => (
                        <span key={idx} className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                    <Link
                      href="/portfolio"
                      className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-100/40 dark:bg-slate-900/30 border-t border-slate-200/50 dark:border-slate-800/50">
        <div className="container mx-auto px-6 max-w-4xl space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
              Common questions about my engineering capabilities, Odoo customization, and full-stack project delivery.
            </p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-base"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-indigo-600 dark:text-indigo-400" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-200/50 dark:border-slate-700/50 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="relative rounded-3xl overflow-hidden p-8 md:p-12 text-center glass-panel bg-gradient-to-r from-indigo-900/40 via-purple-900/40 to-pink-900/40 border border-indigo-500/20 shadow-2xl space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Ready to Build Your Next Software Solution?
            </h2>
            <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Let&apos;s collaborate on your next Odoo ERP customization, React Native mobile app, automated payment gateway, or AI vision microservice.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full bg-white text-slate-900 font-bold hover:bg-slate-100 transition-all shadow-xl hover:scale-105 text-sm flex items-center gap-2"
              >
                <span>Get in Touch Today</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="/cv.html"
                target="_blank"
                className="px-6 py-3.5 rounded-full bg-white/10 text-white font-bold hover:bg-white/20 transition-all border border-white/20 hover:scale-105 text-sm flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>View Full CV</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
