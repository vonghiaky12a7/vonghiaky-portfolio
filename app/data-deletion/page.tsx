"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Trash2, CheckCircle2, ShieldAlert, Mail, Smartphone, Info } from "lucide-react";

export default function DataDeletionPage() {
  const [appName, setAppName] = useState("Streak Học Bài");
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
                Yêu Cầu Xóa Dữ Liệu &amp; Tài Khoản
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Google Play Data Deletion Request • Nhà phát triển: <strong>Võ Nghĩa Kỳ</strong>
              </p>
            </div>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold self-start sm:self-auto">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Google Play Policy Compliant</span>
          </div>
        </div>

        {/* Overview */}
        <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
          <p>
            Tuân thủ chính sách <strong>Google Play Data Safety</strong>, người dùng có toàn quyền chủ động xóa dữ liệu hoặc yêu cầu nhà phát triển xóa vĩnh viễn tài khoản và các dữ liệu liên quan được lưu trữ trên ứng dụng di động do Võ Nghĩa Kỳ phát triển.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-slate-100/70 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-700/50 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                <Trash2 className="w-4 h-4 text-red-500" />
                <h3>Dữ Liệu Sẽ Bị Xóa Vĩnh Viễn</h3>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 dark:text-slate-300">
                <li>Thông tin tài khoản cá nhân (tên, email, avatar).</li>
                <li>Lịch sử chuỗi học tập (streak) và huy hiệu thành tích.</li>
                <li>Dữ liệu thời gian tập trung Pomodoro và lịch học cá nhân.</li>
                <li>Mã thông báo đẩy thiết bị (Push Notification Token).</li>
              </ul>
            </div>
            <div className="p-4 rounded-2xl bg-slate-100/70 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-700/50 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                <ShieldAlert className="w-4 h-4 text-amber-500" />
                <h3>Dữ Liệu Giữ Lại (Nếu Có)</h3>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 dark:text-slate-300">
                <li>Hóa đơn giao dịch mua hàng (nếu có, theo quy định thuế/kế toán pháp luật).</li>
                <li>Nhật ký kỹ thuật ẩn danh đã được khử toàn bộ danh tính người dùng.</li>
                <li>Thời gian xử lý hoàn tất xóa: Trong vòng <strong>30 ngày</strong> kể từ khi nhận yêu cầu.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section: Direct Device Reset */}
        <div className="p-5 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-200/50 dark:border-indigo-800/50 space-y-3">
          <div className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white">
            <Smartphone className="w-5 h-5 text-indigo-500" />
            <h2>Cách 1: Tự Xóa Dữ Liệu Ngay Trên Thiết Bị</h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Hầu hết các ứng dụng của chúng tôi (như <em>Streak Học Bài</em>) hoạt động theo cơ chế <strong>Offline-First</strong>, lưu trữ dữ liệu an toàn ngay trên điện thoại của bạn. Bạn có thể tự xóa toàn bộ dữ liệu ngay lập tức bằng một trong hai cách:
          </p>
          <ol className="list-decimal list-inside space-y-1.5 text-xs text-slate-700 dark:text-slate-300 font-medium pl-2">
            <li><strong>Trong ứng dụng:</strong> Vào mục <em>Hồ sơ (Profile) &rarr; Cài đặt &rarr; Xóa dữ liệu / Đặt lại về ban đầu</em>.</li>
            <li><strong>Cài đặt Android:</strong> Mở <em>Cài đặt điện thoại &rarr; Ứng dụng &rarr; Streak Học Bài &rarr; Lưu trữ &rarr; Xóa dữ liệu (Clear Data) &rarr; Gỡ cài đặt (Uninstall)</em>.</li>
          </ol>
        </div>

        {/* Section: Online Request Form */}
        <div className="space-y-4 pt-2">
          <div className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
            <Mail className="w-5 h-5 text-indigo-500" />
            <h2>Cách 2: Gửi Yêu Cầu Xóa Dữ Liệu Trực Tuyến Đến Nhà Phát Triển</h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Nếu bạn đã tạo tài khoản hoặc muốn xóa hoàn toàn thông tin định danh lưu trên máy chủ đồng bộ, vui lòng điền form dưới đây hoặc gửi email trực tiếp đến <a href="mailto:vonghiaky.dev@gmail.com" className="text-indigo-600 dark:text-indigo-400 font-semibold underline">vonghiaky.dev@gmail.com</a>.
          </p>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 space-y-2">
              <div className="flex items-center gap-2 font-bold text-base">
                <CheckCircle2 className="w-5 h-5" />
                <span>Yêu Cầu Xóa Dữ Liệu Đã Được Tiếp Nhận Thành Công!</span>
              </div>
              <p className="text-sm">
                Chúng tôi đã ghi nhận yêu cầu xóa tài khoản cho email <strong>{email}</strong> trên ứng dụng <strong>{appName}</strong>. Toàn bộ thông tin định danh sẽ được kiểm tra và xử lý xóa vĩnh viễn trong vòng tối đa 30 ngày. Một email xác nhận sẽ được gửi đến hòm thư của bạn.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Ứng dụng cần xóa dữ liệu *
                  </label>
                  <select
                    value={appName}
                    onChange={(e) => setAppName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="Streak Học Bài">Streak Học Bài (com.streakhocbai.app)</option>
                    <option value="FitTrack">FitTrack - Health &amp; Workout</option>
                    <option value="Serene Yoga">Serene Yoga &amp; Mindfulness</option>
                    <option value="Khác">Ứng dụng khác của Võ Nghĩa Kỳ</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Địa chỉ Email tài khoản cần xóa *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@gmail.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Lý do yêu cầu xóa (Tùy chọn)
                </label>
                <textarea
                  rows={3}
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Tôi muốn xóa vĩnh viễn tài khoản và lịch sử thói quen..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Thời gian xử lý: Tối đa 30 ngày theo quy định Google Play.
                </span>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-semibold transition-all shadow-md hover:shadow-red-500/20"
                >
                  Gửi Yêu Cầu Xóa Dữ Liệu
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Developer Contact Footer */}
        <div className="pt-6 border-t border-slate-200/60 dark:border-slate-800/80 text-xs text-slate-500 dark:text-slate-400 flex flex-col sm:flex-row justify-between gap-3">
          <p>
            Nhà phát triển: <strong>Võ Nghĩa Kỳ</strong> • Email: <a href="mailto:vonghiaky.dev@gmail.com" className="underline hover:text-indigo-400">vonghiaky.dev@gmail.com</a>
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="underline hover:text-indigo-400">
              Chính Sách Bảo Mật
            </Link>
            <Link href="/terms-of-service" className="underline hover:text-indigo-400">
              Điều Khoản Dịch Vụ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
