import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogs } from "@/data/blogs";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogs.find((b) => b.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-6 py-12 max-w-4xl space-y-12">
      {/* Back Button */}
      <div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to all engineering articles</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="space-y-6">
        <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </span>
          <span className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 font-medium">
            {post.category}
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
          {post.title}
        </h1>

        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed border-l-4 border-indigo-500 pl-4 italic">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
      </header>

      {/* Article Content */}
      <div className="glass-panel p-8 md:p-12 rounded-3xl space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed max-w-none text-base md:text-lg">
        {post.content.split("\n\n").map((block, idx) => {
          const trimmed = block.trim();
          if (trimmed.startsWith("## ")) {
            return (
              <h2 key={idx} className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white pt-6 border-t border-slate-200/50 dark:border-slate-800/50">
                {trimmed.replace("## ", "")}
              </h2>
            );
          }
          if (trimmed.startsWith("### ")) {
            return (
              <h3 key={idx} className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white pt-4">
                {trimmed.replace("### ", "")}
              </h3>
            );
          }
          if (trimmed.startsWith("```")) {
            const code = trimmed.replace(/```[a-z]*\n?/g, "");
            return (
              <pre key={idx} className="p-5 rounded-2xl bg-slate-900 text-slate-100 overflow-x-auto text-sm my-4 font-mono leading-relaxed border border-slate-800">
                <code>{code}</code>
              </pre>
            );
          }
          if (trimmed.startsWith("- ") || trimmed.startsWith("1. ")) {
            const lines = trimmed.split("\n");
            return (
              <ul key={idx} className="space-y-2 list-disc list-inside">
                {lines.map((l, lIdx) => (
                  <li key={lIdx} className="text-slate-600 dark:text-slate-300">
                    {l.replace(/^[-0-9.]+\s*/, "")}
                  </li>
                ))}
              </ul>
            );
          }
          return (
            <p key={idx} className="leading-relaxed">
              {trimmed}
            </p>
          );
        })}
      </div>

      {/* Author Box */}
      <div className="glass-card p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-indigo-500/40 shrink-0">
            <img
              src="/images/vo-nghia-ky.webp"
              alt="Võ Nghĩa Kỳ"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">Võ Nghĩa Kỳ</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">Senior Full-Stack &amp; Odoo 18/19 Developer</p>
          </div>
        </div>
        <Link
          href="/contact"
          className="px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:scale-105 transition-all text-sm"
        >
          Discuss Project Architecture
        </Link>
      </div>
    </article>
  );
}
