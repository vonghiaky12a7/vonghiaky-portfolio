import React from "react";
import Link from "next/link";
import { ArrowRight, Database, Smartphone, Globe, ShieldCheck, CheckCircle2, Zap, Settings, RefreshCw, Cpu, Printer, CreditCard } from "lucide-react";

export const metadata = {
  title: "Full-Stack Services | Võ Nghĩa Kỳ - Odoo ERP & Software Engineering",
  description:
    "Comprehensive full-stack software development services: Odoo 18/19 ERP implementations, React Native mobile apps, automated payment gateways, and Edge AI camera vision.",
};

export default function ServicesPage() {
  const serviceCategories = [
    {
      title: "Enterprise Odoo 18/19 ERP Solutions",
      desc: "End-to-end ERP implementation, business logic customization, and performance optimization.",
      icon: Database,
      items: [
        {
          name: "Odoo 18/19 Module Customization",
          desc: "Bespoke DocTypes, model inheritance, custom fields, automated onchange logic, and Python business constraints tailored for automotive, healthcare, and retail.",
        },
        {
          name: "Interactive Wizards & Business Workflows",
          desc: "Multi-step interactive wizards (TransientModel) for complex data entry, batch order processing, and quick invoice generation.",
        },
        {
          name: "QWeb Report Design & Document Templating",
          desc: "Custom branded invoice templates, medical prescription layouts, lab inspection certificates, and barcode label printing.",
        },
        {
          name: "Role-Based Access Rights & Record Rules",
          desc: "Multi-branch security isolation, department manager approvals, and strict row-level record rules.",
        },
      ],
    },
    {
      title: "Cross-Platform Mobile Apps (React Native)",
      desc: "High-performance iOS and Android applications connected to enterprise cloud backends.",
      icon: Smartphone,
      items: [
        {
          name: "React Native & Expo Applications",
          desc: "Native 60fps mobile interfaces with smooth gestures, modern design systems, and responsive layouts for phones and tablets.",
        },
        {
          name: "Offline-First SQLite Synchronization",
          desc: "Reliable local database caching ensuring seamless operation in remote warehouse or field environments with background sync.",
        },
        {
          name: "ERP Mobile Companions",
          desc: "Mobile apps for field technicians, patient booking, doctor schedules, and warehouse inventory barcode scanning.",
        },
      ],
    },
    {
      title: "Modern Web Applications & SaaS (Next.js)",
      desc: "Fast, SEO-optimized web portals, dashboards, and customer self-service platforms.",
      icon: Globe,
      items: [
        {
          name: "Next.js 14 App Router Development",
          desc: "Ultra-fast server-rendered web applications with Server Components, TypeScript, and responsive Glassmorphism styling.",
        },
        {
          name: "Patient & Customer Self-Service Portals",
          desc: "Interactive customer portals for vehicle tracking (AutoCare Plus), telemedicine booking (MedConnect), and invoice settlement.",
        },
        {
          name: "Executive Analytics Dashboards",
          desc: "Consolidated revenue analytics, inventory turnover graphs, and financial heatmaps with role-based widgets.",
        },
      ],
    },
    {
      title: "Automated Payment Gateways & Fintech",
      desc: "Instant payment reconciliation with banking APIs and electronic wallets.",
      icon: CreditCard,
      items: [
        {
          name: "VietQR Dynamic Payload Generation",
          desc: "Automated generation of EMVCo compliant VietQR codes embedding exact invoice balance and reference on printouts.",
        },
        {
          name: "VNPay Payment Gateway Integration",
          desc: "Seamless online checkout flow with HMAC-SHA512 cryptographic verification and automated IPN webhook reconciliation.",
        },
        {
          name: "Zalo ZNS Customer Notifications",
          desc: "Automated transaction confirmations, service reminders, and digital invoice links sent directly to customer phones.",
        },
      ],
    },
    {
      title: "Edge AI Camera Vision Systems (xcamera)",
      desc: "Real-time video stream processing and automated attendance webhooks.",
      icon: Cpu,
      items: [
        {
          name: "Multi-Stream RTSP Ingestion & Decoding",
          desc: "Hardware-accelerated video decoding with Go2RTC and OpenCV across multiple IP surveillance cameras.",
        },
        {
          name: "Face Recognition & Biometric Logging",
          desc: "Deep-learning facial embedding matching for instant employee attendance logging and unauthorized visitor alerts.",
        },
        {
          name: "FastAPI Event Broker & Webhook Sync",
          desc: "Asynchronous webhook dispatcher pushing attendance payloads and snapshots directly into Odoo HR models.",
        },
      ],
    },
    {
      title: "Industrial Silent Printing (xprint)",
      desc: "High-throughput direct thermal and laser printing microservices.",
      icon: Printer,
      items: [
        {
          name: "Zero-Click Silent Printing Engine",
          desc: "C# .NET Core microservice for printing invoices and medical prescriptions directly without browser print dialog popups.",
        },
        {
          name: "DevExpress & QWeb PDF Processing",
          desc: "High-speed document compilation, thermal barcode rendering, and automatic printer queue recovery.",
        },
        {
          name: "Network & USB Hardware Interfacing",
          desc: "Automated discovery of POS receipt printers, laboratory testing instruments, and barcode label dispensers.",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12 max-w-6xl space-y-24">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto pt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
          Full-Stack Services
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
          Enterprise ERP, Mobile &amp; <span className="premium-gradient-text">Software Solutions</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          From robust Odoo 18/19 ERP customization to cross-platform mobile apps and AI camera microservices, I deliver software that transforms business operations.
        </p>
      </div>

      {/* Services List */}
      <div className="space-y-16">
        {serviceCategories.map((cat, idx) => {
          const CatIcon = cat.icon;
          return (
            <div key={idx} className="space-y-8">
              <div className="flex items-center gap-4 border-b border-slate-200/60 dark:border-slate-800/80 pb-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <CatIcon className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                    {cat.title}
                  </h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{cat.desc}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cat.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="glass-card p-6 md:p-8 rounded-3xl space-y-3 hover:-translate-y-1 transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1.5">
                          {item.name}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="glass-panel p-10 rounded-3xl text-center space-y-6 max-w-3xl mx-auto shadow-xl">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
          Have an ERP or Full-Stack Project to Build?
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
          Let&apos;s discuss your technical requirements, architecture design, and project milestones.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:scale-105 transition-all shadow-xl"
        >
          <span>Schedule a Consultation</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
