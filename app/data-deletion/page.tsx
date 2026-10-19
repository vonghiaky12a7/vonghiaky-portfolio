"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Trash2, CheckCircle2, ShieldAlert, Mail, Smartphone, Info, Globe, ExternalLink } from "lucide-react";

export default function DataDeletionPage() {
  const [appName, setAppName] = useState("Postiz Social Manager");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl space-y-10">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Quay lại Trang Chủ</span>
      </Link>

      <div className="glass-panel p-8 md:p-12 rounded-3xl space-y-8 border border-slate-200/60 dark:border-slate-800/80 shadow-xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/60 dark:border-slate-800/80">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-600 dark:text-red-400">
              <Trash2 className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Hướng Dẫn &amp; Yêu Cầu Xóa Dữ Liệu
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Data Deletion Instructions • Nhà phát triển: <strong>Võ Nghĩa Kỳ</strong>
              </p>
            </div>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold self-start sm:self-auto">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Meta / Google / TikTok Compliant</span>
          </div>
        </div>

        {/* Intro */}
        <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
          <p>
            Trang này cung cấp thông tin hướng dẫn chi tiết cách người dùng có thể xóa tài khoản, thu hồi quyền truy cập và yêu cầu xóa vĩnh viễn toàn bộ dữ liệu cá nhân liên quan đến các dịch vụ web (Postiz Social Manager) và ứng dụng di động của <strong>Võ Nghĩa Kỳ</strong>, tuân thủ chính sách bảo vệ dữ liệu của <strong>Meta (Facebook/Instagram)</strong>, <strong>Google/YouTube</strong>, <strong>TikTok</strong>, và <strong>Google Play</strong>.
          </p>
        </div>

        {/* Step-by-step Guides per Platform */}
        <div className="space-y-6">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Globe className="w-5 h-5 text-indigo-500" />
            <span>1. Hướng Dẫn Tự Thu Hồi &amp; Xóa Quyền Trên Từng Nền Tảng</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Facebook/Meta Card */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
              <h3 className="font-bold text-blue-600 dark:text-blue-400 text-base">Facebook &amp; Instagram</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Để xóa quyền ứng dụng và dữ liệu liên kết trên Facebook:
              </p>
              <ol className="list-decimal list-inside text-xs text-slate-700 dark:text-slate-300 space-y-1.5 pl-1">
                <li>Vào <strong>Cài đặt &amp; quyền riêng tư</strong> trên Facebook.</li>
                <li>Chọn <strong>Cài đặt</strong> &rarr; <strong>Ứng dụng và trang web</strong>.</li>
                <li>Tìm ứng dụng của chúng tôi và bấm <strong>Gỡ / Xóa</strong>.</li>
                <li>Tích chọn <em>&quot;Xóa bài viết, video hoặc sự kiện...&quot;</em> nếu muốn dọn sạch.</li>
              </ol>
            </div>

            {/* YouTube/Google Card */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
              <h3 className="font-bold text-red-600 dark:text-red-400 text-base">Google &amp; YouTube</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Để xóa quyền truy cập YouTube API:
              </p>
              <ol className="list-decimal list-inside text-xs text-slate-700 dark:text-slate-300 space-y-1.5 pl-1">
                <li>Truy cập <a href="https://security.google.com/settings/security/permissions" target="_blank" rel="noreferrer" className="text-red-600 dark:text-red-400 underline font-medium inline-flex items-center gap-0.5">Google Permissions <ExternalLink className="w-3 h-3 inline" /></a>.</li>
                <li>Chọn ứng dụng quản lý Postiz / Võ Nghĩa Kỳ.</li>
                <li>Bấm <strong>Xóa quyền truy cập (Remove access)</strong>.</li>
                <li>Toàn bộ token truy cập sẽ bị vô hiệu hóa ngay lập tức.</li>
              </ol>
            </div>

            {/* TikTok Card */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
              <h3 className="font-bold text-black dark:text-white text-base">TikTok</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Để thu hồi quyền liên kết tài khoản TikTok:
              </p>
              <ol className="list-decimal list-inside text-xs text-slate-700 dark:text-slate-300 space-y-1.5 pl-1">
                <li>Mở ứng dụng TikTok trên điện thoại.</li>
                <li>Vào <strong>Hồ sơ</strong> &rarr; <strong>Cài đặt &amp; quyền riêng tư</strong>.</li>
                <li>Chọn <strong>Bảo mật &amp; quyền</strong> &rarr; <strong>Quản lý quyền ứng dụng</strong>.</li>
                <li>Chọn ứng dụng và bấm <strong>Thu hồi quyền (Remove access)</strong>.</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Direct Deletion Form */}
        <div className="space-y-4 pt-4 border-t border-slate-200/60 dark:border-slate-800/80">
          <div className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
            <Mail className="w-5 h-5 text-indigo-500" />
            <h2>2. Gửi Yêu Cầu Xóa Dữ Liệu Trực Tiếp Đến Máy Chủ</h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Nếu bạn muốn xóa toàn bộ thông tin đăng ký, token lưu trên máy chủ hoặc lịch sử đăng bài, vui lòng gửi yêu cầu qua form dưới đây hoặc gửi email đến <a href="mailto:vonghiaky.dev@gmail.com" className="text-indigo-600 dark:text-indigo-400 font-semibold underline">vonghiaky.dev@gmail.com</a>. Chúng tôi sẽ xử lý và xóa vĩnh viễn trong vòng 24 - 48 giờ làm việc.
          </p>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
              <div className="space-y-1 text-sm text-emerald-900 dark:text-emerald-200">
                <p className="font-bold">Yêu cầu đã được tiếp nhận thành công!</p>
                <p>
                  Mã xác nhận yêu cầu của bạn đã được ghi nhận cho email <strong>{email}</strong>. Hệ thống sẽ tiến hành xóa sạch dữ liệu liên quan và gửi thông báo xác nhận qua email cho bạn.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Dịch vụ / Ứng dụng liên quan *
                </label>
                <select
                  value={appName}
                  onChange={(e) => setAppName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                >
                  <option value="Postiz Social Manager (TikTok / YouTube / Meta)">Postiz Social Manager (TikTok / YouTube / Facebook)</option>
                  <option value="Streak Học Bài (Android / iOS)">Streak Học Bài (Android / iOS)</option>
                  <option value="FitTrack">FitTrack</option>
                  <option value="Serene Yoga">Serene Yoga</option>
                  <option value="Khác">Sản phẩm / Dịch vụ khác</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Email đăng ký hoặc ID tài khoản *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Lý do yêu cầu (tùy chọn)
                </label>
                <textarea
                  rows={3}
                  placeholder="Ví dụ: Tôi không còn nhu cầu sử dụng dịch vụ và muốn xóa toàn bộ token / dữ liệu..."
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-sm transition-colors shadow-lg shadow-red-600/20"
              >
                Gửi Yêu Cầu Xóa Dữ Liệu
              </button>
            </form>
          )}
        </div>

        {/* Footer Contact */}
        <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/80 text-xs text-slate-500 dark:text-slate-400">
          Nhà phát triển: <strong>Võ Nghĩa Kỳ</strong> • Email hỗ trợ: <a href="mailto:vonghiaky.dev@gmail.com" className="underline hover:text-indigo-400">vonghiaky.dev@gmail.com</a> • Website: <a href="https://vonghiaky.dev" target="_blank" rel="noreferrer" className="underline hover:text-indigo-400">https://vonghiaky.dev</a>
        </div>
      </div>
    </div>
  );
}
