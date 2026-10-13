"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ExternalLink, ArrowRight, Tag, Layers, CheckCircle2, Github } from "lucide-react";
import { projects } from "@/data/projects";

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Odoo ERP", "Mobile Apps", "Web Apps", "AI & Systems"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <div className="container mx-auto px-6 py-12 max-w-6xl space-y-16">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto pt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
          Portfolio &amp; Work
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
          Featured <span className="premium-gradient-text">Full-Stack Projects</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          A showcase of enterprise Odoo 18/19 implementations, cross-platform React Native mobile applications, modern Next.js SaaS platforms, and Edge AI microservices.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                filter === cat
                  ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md scale-105"
                  : "glass-panel text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="glass-card rounded-3xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Project Image */}
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

            {/* Content */}
            <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.desc}
                </p>

                {/* Key Highlights */}
                <div className="space-y-1 pt-2">
                  {project.highlights.slice(0, 2).map((h, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

                {/* Tech Stack & Links */}
                <div className="pt-4 border-t border-slate-200/50 dark:border-slate-800/60 flex flex-col gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.packageName && (
                    <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 bg-slate-100/60 dark:bg-slate-800/60 px-2.5 py-1 rounded-lg flex items-center justify-between">
                      <span>Package: {project.packageName}</span>
                      <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold uppercase">Google Play</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-1">
                    {project.category === "Mobile Apps" ? (
                      <div className="flex items-center gap-3">
                        <Link
                          href="/privacy-policy"
                          className="text-[11px] font-semibold text-slate-500 hover:text-indigo-500 underline"
                        >
                          Privacy
                        </Link>
                        <Link
                          href="/data-deletion"
                          className="text-[11px] font-semibold text-red-500/80 hover:text-red-500 underline"
                        >
                          Data Deletion
                        </Link>
                      </div>
                    ) : (
                      <Link
                        href="/contact"
                        className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                      >
                        <span>Inquire Solution</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                    {project.category === "Mobile Apps" && (
                      <Link
                        href="/contact"
                        className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                      >
                        <span>Support</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="text-center pt-8">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:scale-105 transition-all shadow-xl"
        >
          <span>Discuss a Custom Solution for Your Business</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
