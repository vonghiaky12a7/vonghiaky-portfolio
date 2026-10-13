import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Terms of Service | Võ Nghĩa Kỳ - Google Play Apps",
  description: "Terms of Service for mobile applications and software engineering services developed by Võ Nghĩa Kỳ.",
};

export default function TermsOfServicePage() {
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
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Điều Khoản Dịch Vụ (Terms of Service)
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Nhà phát triển: <strong>Võ Nghĩa Kỳ</strong> • Cập nhật lần cuối: {lastUpdated}
              </p>
            </div>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold self-start sm:self-auto">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Google Play Standard</span>
          </div>
        </div>

        <div className="space-y-6 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
          <p>
            Chào mừng bạn đến với các ứng dụng di động và dịch vụ phần mềm được phát triển bởi <strong>Võ Nghĩa Kỳ</strong> (bao gồm <em>Streak Học Bài</em>, <em>FitTrack</em>, <em>Serene Yoga</em> và các sản phẩm liên quan trên Google Play Store). Khi tải về, cài đặt hoặc sử dụng các ứng dụng của chúng tôi, bạn đồng ý tuân thủ các Điều khoản Dịch vụ này.
          </p>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">1. Giấy Phép Sử Dụng Ứng Dụng (License to Use)</h2>
            <p>
              Chúng tôi cấp cho bạn một giấy phép cá nhân, có giới hạn, không độc quyền, không thể chuyển nhượng để tải về và sử dụng các ứng dụng trên thiết bị di động tương thích của bạn cho mục đích cá nhân, phi thương mại.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">2. Trách Nhiệm Của Người Dùng (User Conduct)</h2>
            <p>Bạn đồng ý không thực hiện bất kỳ hành vi nào sau đây:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li>Dịch ngược, tháo rời hoặc đảo ngược mã nguồn (reverse engineer) của ứng dụng.</li>
              <li>Sử dụng ứng dụng vào các mục đích gian lận, phát tán mã độc hoặc gây hại đến máy chủ và người dùng khác.</li>
              <li>Lạm dụng hệ thống tính năng bảng xếp hạng hoặc gian lận thành tích chuỗi streak học bài.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">3. Sở Hữu Trí Tuệ (Intellectual Property)</h2>
            <p>
              Toàn bộ nhãn hiệu, logo, thiết kế giao diện, hình ảnh minh họa 3D, thuật toán tính toán và mã nguồn trong các ứng dụng (bao gồm <em>Streak Học Bài</em>) thuộc quyền sở hữu trí tuệ độc quyền của Võ Nghĩa Kỳ, được bảo hộ bởi luật sở hữu trí tuệ Việt Nam và các công ước quốc tế.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">4. Miễn Trừ Trách Nhiệm &amp; Giới Hạn Trách Nhiệm (Disclaimers)</h2>
            <p>
              Ứng dụng được cung cấp trên nguyên tắc &quot;nguyên trạng&quot; (&quot;as is&quot;) và &quot;sẵn có&quot; (&quot;as available&quot;). Mặc dù chúng tôi nỗ lực tối đa để đảm bảo sự ổn định và chính xác của dữ liệu đếm giờ, lịch học và âm thanh tập trung, chúng tôi không cam kết ứng dụng hoàn toàn không phát sinh lỗi hoặc hoạt động không gián đoạn trong mọi điều kiện phần cứng.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">5. Luật Áp Dụng &amp; Giải Quyết Tranh Chấp (Governing Law)</h2>
            <p>
              Các điều khoản này được điều chỉnh và giải thích theo pháp luật nước Cộng hòa Xã hội Chủ nghĩa Việt Nam. Mọi tranh chấp phát sinh sẽ được ưu tiên giải quyết thông qua thương lượng hòa giải thiện chí.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-slate-200/60 dark:border-slate-800/80">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">6. Thông Tin Liên Hệ Hỗ Trợ</h2>
            <p>Mọi thắc mắc về điều khoản dịch vụ xin vui lòng gửi về:</p>
            <p className="font-medium text-slate-900 dark:text-white">
              Võ Nghĩa Kỳ • Email: <a href="mailto:vonghiaky2003@gmail.com" className="text-indigo-600 dark:text-indigo-400 underline">vonghiaky2003@gmail.com</a> • Điện thoại: (+84) 91 347 6315
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
