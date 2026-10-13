import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield, Mail, Smartphone, Lock, Eye, Trash2, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Võ Nghĩa Kỳ - Google Play Apps",
  description: "Privacy Policy for mobile applications and software engineering services developed by Võ Nghĩa Kỳ, including Streak Học Bài, FitTrack, and Serene Yoga.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "March 15, 2025";

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
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Chính Sách Quyền Riêng Tư (Privacy Policy)
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Nhà phát triển: <strong>Võ Nghĩa Kỳ (Vo Nghia Ky)</strong> • Cập nhật lần cuối: {lastUpdated}
              </p>
            </div>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold self-start sm:self-auto">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Google Play Compliant</span>
          </div>
        </div>

        {/* Intro */}
        <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
          <p>
            Chính sách quyền riêng tư này áp dụng cho trang web portfolio, các dịch vụ phần mềm và toàn bộ các ứng dụng di động được phát triển và xuất bản bởi <strong>Võ Nghĩa Kỳ</strong> trên cửa hàng <strong>Google Play Store</strong> và <strong>Apple App Store</strong>, bao gồm nhưng không giới hạn ở:
          </p>
          <ul className="list-disc list-inside pl-2 space-y-1 font-medium text-slate-800 dark:text-slate-200">
            <li><strong>Streak Học Bài</strong> (Package: <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-indigo-600 dark:text-indigo-400">com.streakhocbai.app</code>)</li>
            <li><strong>FitTrack</strong> (Workout &amp; Health Companion)</li>
            <li><strong>Serene Yoga</strong> (Mindfulness &amp; Audio Meditation)</li>
            <li><strong>SportsMedic Companion</strong></li>
          </ul>
          <p>
            Chúng tôi cam kết tôn trọng và bảo vệ quyền riêng tư của bạn. Chúng tôi tuân thủ nghiêm ngặt các chính sách dành cho nhà phát triển của Google Play (Google Play Developer Program Policies) cũng như các quy định pháp luật về bảo vệ dữ liệu cá nhân.
          </p>
        </div>

        {/* Section 1 */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
            <Eye className="w-5 h-5 text-indigo-500" />
            <h2>1. Dữ Liệu Chúng Tôi Thu Thập (Information We Collect)</h2>
          </div>
          <div className="text-sm text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed pl-1">
            <p>
              Tùy thuộc vào ứng dụng bạn sử dụng, các loại dữ liệu sau có thể được xử lý:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong>Dữ liệu lưu trữ nội bộ trên thiết bị (Offline-First Local Data):</strong> Lịch sử chuỗi học tập (streak), thời gian đếm giờ Pomodoro, lịch nhắc nhở học bài, danh sách thói quen được lưu trữ trực tiếp trong bộ nhớ cục bộ của thiết bị (thông qua AsyncStorage / SQLite). Dữ liệu này không bị gửi về máy chủ từ xa khi không có sự đồng ý của bạn.
              </li>
              <li>
                <strong>Thông tin tài khoản (nếu người dùng đăng nhập):</strong> Tên hiển thị, địa chỉ email, ảnh đại diện nhằm mục đích đồng bộ chuỗi streak và hiển thị bảng xếp hạng thi đua bạn bè.
              </li>
              <li>
                <strong>Mã thông báo thông báo đẩy (Push Notification Token):</strong> Được tạo tự động bởi Expo Notifications / Firebase Cloud Messaging khi bạn bật tính năng nhắc nhở học bài, chỉ dùng để gửi thông báo nhắc lịch học tập theo cài đặt của bạn.
              </li>
              <li>
                <strong>Dữ liệu chẩn đoán kỹ thuật không định danh (Anonymous Diagnostics):</strong> Phiên bản hệ điều hành Android/iOS, dòng thiết bị và nhật ký lỗi crash ẩn danh nhằm mục đích phát hiện lỗi và tối ưu hiệu năng ứng dụng.
              </li>
            </ul>
          </div>
        </div>

        {/* Section 2 */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
            <Smartphone className="w-5 h-5 text-purple-500" />
            <h2>2. Quyền Truy Cập Trên Thiết Bị (Device Permissions)</h2>
          </div>
          <div className="text-sm text-slate-600 dark:text-slate-300 space-y-2 leading-relaxed pl-1">
            <p>Ứng dụng chỉ yêu cầu những quyền tối thiểu cần thiết để vận hành tính năng:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li><strong>Thông báo (<code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">POST_NOTIFICATIONS</code>):</strong> Để báo chuông khi hết phiên Pomodoro hoặc nhắc nhở duy trì chuỗi Streak học bài hàng ngày.</li>
              <li><strong>Chạy nền âm thanh (<code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">WAKE_LOCK / FOREGROUND_SERVICE</code>):</strong> Cho phép phát âm thanh sóng não white noise khi màn hình tắt trong lúc người dùng học bài.</li>
            </ul>
            <p className="text-xs text-slate-500 dark:text-slate-400 italic">
              * Người dùng có thể bật/tắt các quyền này bất cứ lúc nào trong mục Cài đặt hệ thống của thiết bị.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
            <Lock className="w-5 h-5 text-indigo-500" />
            <h2>3. Chia Sẻ Dữ Liệu &amp; Dịch Vụ Bên Thứ Ba (Third-Party Services)</h2>
          </div>
          <div className="text-sm text-slate-600 dark:text-slate-300 space-y-2 leading-relaxed pl-1">
            <p>
              <strong>Chúng tôi TUYỆT ĐỐI KHÔNG bán, cho thuê hoặc thương mại hóa dữ liệu cá nhân của người dùng cho bất kỳ bên thứ ba nào.</strong>
            </p>
            <p>Ứng dụng có thể sử dụng các dịch vụ nền tảng chuẩn mực sau:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li><strong>Google Play Services:</strong> Phục vụ phân phối ứng dụng, cập nhật và các dịch vụ cốt lõi của Google Play.</li>
              <li><strong>Expo Application Services (EAS):</strong> Quản lý bản build và dịch vụ đẩy thông báo.</li>
            </ul>
          </div>
        </div>

        {/* Section 4 */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
            <Trash2 className="w-5 h-5 text-red-500" />
            <h2>4. Quyền Xóa Tài Khoản &amp; Dữ Liệu (Account &amp; Data Deletion)</h2>
          </div>
          <div className="text-sm text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed pl-1">
            <p>
              Tuân thủ chính sách <strong>Google Play Data Deletion Policy</strong>, người dùng có toàn quyền yêu cầu xóa bỏ vĩnh viễn tài khoản và toàn bộ dữ liệu cá nhân liên quan bất kỳ lúc nào:
            </p>
            <div className="p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-200/50 dark:border-indigo-800/50 space-y-2">
              <p className="font-semibold text-slate-900 dark:text-white">Cách thức yêu cầu xóa dữ liệu:</p>
              <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                <li><strong>Cách 1 (Trong ứng dụng):</strong> Vào mục <em>Cài đặt (Settings) &rarr; Tài khoản (Account) &rarr; Xóa tài khoản &amp; dữ liệu</em>.</li>
                <li><strong>Cách 2 (Trang web):</strong> Truy cập trực tiếp trang <Link href="/data-deletion" className="text-indigo-600 dark:text-indigo-400 font-semibold underline hover:text-indigo-500">Yêu Cầu Xóa Dữ Liệu Người Dùng</Link> để gửi form trực tuyến.</li>
                <li><strong>Cách 3 (Email):</strong> Gửi email đến <a href="mailto:vonghiaky.dev@gmail.com" className="text-indigo-600 dark:text-indigo-400 underline font-medium">vonghiaky.dev@gmail.com</a> với tiêu đề <em>[Yêu cầu xóa dữ liệu - Tên Ứng Dụng]</em>. Yêu cầu sẽ được xử lý trong vòng 30 ngày.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 5 */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
            <Shield className="w-5 h-5 text-emerald-500" />
            <h2>5. Quyền Riêng Tư Của Trẻ Em (Children&apos;s Privacy / COPPA)</h2>
          </div>
          <div className="text-sm text-slate-600 dark:text-slate-300 space-y-2 leading-relaxed pl-1">
            <p>
              Các ứng dụng của chúng tôi không hướng mục tiêu trực tiếp và không chủ ý thu thập thông tin nhận dạng cá nhân từ trẻ em dưới 13 tuổi (hoặc độ tuổi tối thiểu theo quy định tại quốc gia sở tại). Nếu phụ huynh hoặc người giám hộ phát hiện trẻ em đã cung cấp dữ liệu cá nhân cho chúng tôi, vui lòng liên hệ ngay để chúng tôi tiến hành xóa bỏ lập tức.
            </p>
          </div>
        </div>

        {/* Section 6 */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
            <Mail className="w-5 h-5 text-indigo-500" />
            <h2>6. Thông Tin Liên Hệ Của Nhà Phát Triển (Developer Contact)</h2>
          </div>
          <div className="text-sm text-slate-600 dark:text-slate-300 space-y-2 leading-relaxed pl-1">
            <p>Nếu bạn có bất kỳ thắc mắc, phản hồi hoặc yêu cầu pháp lý nào liên quan đến Chính sách quyền riêng tư này, vui lòng liên hệ với nhà phát triển:</p>
            <div className="p-4 rounded-2xl bg-slate-100/70 dark:bg-slate-800/70 space-y-1 text-slate-800 dark:text-slate-200">
              <p><strong>Nhà phát triển:</strong> Võ Nghĩa Kỳ (Vo Nghia Ky)</p>
              <p><strong>Email hỗ trợ:</strong> <a href="mailto:vonghiaky.dev@gmail.com" className="text-indigo-600 dark:text-indigo-400 underline">vonghiaky.dev@gmail.com</a></p>
              <p><strong>Điện thoại:</strong> (+84) 91 347 6315</p>
              <p><strong>Địa chỉ:</strong> Thành phố Hồ Chí Minh, Việt Nam</p>
              <p><strong>Website:</strong> <a href="https://vonghiaky.dev" target="_blank" rel="noreferrer" className="text-indigo-600 dark:text-indigo-400 underline">https://vonghiaky.dev</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
