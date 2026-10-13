"use client";

import React, { useState } from "react";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import { Calendar, Clock, ArrowRight, Tag, Search, BookOpen } from "lucide-react";

export default function BlogListPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = blogs.filter(
    (b) =>
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="container mx-auto px-6 py-12 max-w-5xl space-y-16">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto pt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
          Articles &amp; Architecture
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
          Engineering <span className="premium-gradient-text">Blog &amp; Insights</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          Technical deep-dives on Odoo 18/19 ERP customization, automated payment gateways, React Native offline-first architecture, and Edge AI vision systems.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto pt-4">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search articles, tags, topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-full glass-panel border border-slate-200/80 dark:border-slate-700/80 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all shadow-sm"
          />
        </div>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredBlogs.map((post) => (
          <article
            key={post.slug}
            className="glass-card p-8 rounded-3xl flex flex-col justify-between space-y-6 hover:-translate-y-1.5 transition-all group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-200/50 dark:border-slate-800/60">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
