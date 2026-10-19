import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText, CheckCircle2, Globe, Shield, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Terms of Service | Võ Nghĩa Kỳ - Apps & Services",
  description: "Official Terms of Service for web applications, social media management tools, and mobile software developed by Võ Nghĩa Kỳ.",
};

export default function TermsOfServicePage() {
  const lastUpdated = "October 19, 2026";

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
                Nhà phát triển: <strong>Võ Nghĩa Kỳ (Vo Nghia Ky)</strong> • Cập nhật lần cuối: {lastUpdated}
              </p>
            </div>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold self-start sm:self-auto">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Standard Terms</span>
          </div>
        </div>

        <div className="space-y-6 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
          <p>
            Chào mừng bạn đến với các dịch vụ web, công cụ quản lý nội dung mạng xã hội (bao gồm <strong>Postiz Social Manager</strong>) và các ứng dụng di động được phát triển và vận hành bởi <strong>Võ Nghĩa Kỳ</strong>. Bằng việc truy cập, cài đặt hoặc sử dụng bất kỳ dịch vụ nào của chúng tôi, bạn đồng ý chịu sự ràng buộc bởi các Điều khoản Dịch vụ này.
          </p>

          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">1. Giấy Phép Sử Dụng Dịch Vụ (License to Use)</h2>
            <p>
              Chúng tôi cấp cho bạn một quyền sử dụng cá nhân, có giới hạn, không độc quyền và không thể chuyển nhượng để truy cập trang web, các công cụ quản lý nội dung và các ứng dụng di động cho mục đích cá nhân hoặc quản lý nội dung số hợp pháp của bạn.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">2. Tuân Thủ Quy Định Của Các Mạng Xã Hội Đối Tác (Third-Party Platforms)</h2>
            <p>
              Khi bạn sử dụng các tính năng liên kết và đăng tải nội dung tự động lên các mạng xã hội, bạn xác nhận và cam kết tuân thủ đầy đủ các điều khoản người dùng của từng nền tảng tương ứng:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li>
                <strong>YouTube:</strong> Tuân thủ <a href="https://www.youtube.com/t/terms" target="_blank" rel="noreferrer" className="text-red-600 dark:text-red-400 underline font-medium inline-flex items-center gap-0.5">Điều khoản dịch vụ của YouTube (YouTube Terms of Service) <ExternalLink className="w-3 h-3 inline" /></a> và Tiêu chuẩn cộng đồng YouTube.
              </li>
              <li>
                <strong>TikTok:</strong> Tuân thủ <a href="https://www.tiktok.com/legal/page/row/terms-of-service/en" target="_blank" rel="noreferrer" className="text-indigo-600 dark:text-indigo-400 underline font-medium inline-flex items-center gap-0.5">Điều khoản dịch vụ của TikTok <ExternalLink className="w-3 h-3 inline" /></a> và Quy tắc cộng đồng TikTok.
              </li>
              <li>
                <strong>Meta (Facebook &amp; Instagram):</strong> Tuân thủ <a href="https://www.facebook.com/terms.php" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 underline font-medium inline-flex items-center gap-0.5">Điều khoản dịch vụ của Meta <ExternalLink className="w-3 h-3 inline" /></a> và Tiêu chuẩn cộng đồng Instagram.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">3. Trách Nhiệm Về Nội Dung Người Dùng (User Generated Content)</h2>
            <p>
              Bạn chịu hoàn toàn trách nhiệm pháp lý đối với mọi nội dung (video, âm thanh, hình ảnh, bài viết, hashtag) được đăng tải thông qua công cụ của chúng tôi. Bạn cam kết không đăng tải:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li>Nội dung vi phạm bản quyền sở hữu trí tuệ của bất kỳ cá nhân hay tổ chức nào.</li>
              <li>Nội dung khiêu dâm, bạo lực, kích động thù địch, quấy rối hoặc vi phạm pháp luật hiện hành.</li>
              <li>Phát tán thư rác (spam), thông tin sai lệch hoặc mã độc hại.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">4. Sở Hữu Trí Tuệ (Intellectual Property)</h2>
            <p>
              Mã nguồn, thiết kế giao diện, logo, nhãn hiệu và tài liệu hướng dẫn của các phần mềm và website thuộc quyền sở hữu trí tuệ độc quyền của Võ Nghĩa Kỳ. Bạn giữ toàn bộ quyền sở hữu đối với nội dung mà bạn tạo ra và tải lên.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">5. Miễn Trừ Trách Nhiệm (Disclaimer of Warranties)</h2>
            <p>
              Các dịch vụ được cung cấp trên nguyên tắc &quot;nguyên trạng&quot; (&quot;as is&quot;) và &quot;sẵn có&quot; (&quot;as available&quot;). Mặc dù chúng tôi nỗ lực tối đa để đảm bảo sự ổn định của hệ thống đồng bộ API và lịch đăng tải, chúng tôi không chịu trách nhiệm trong trường hợp gián đoạn do sự thay đổi chính sách đột ngột từ các API bên thứ ba (YouTube, TikTok, Meta) hoặc lỗi kết nối mạng internet.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-3 pt-4 border-t border-slate-200/60 dark:border-slate-800/80">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">6. Thông Tin Liên Hệ</h2>
            <p>Nếu bạn có bất kỳ câu hỏi hoặc khiếu nại nào liên quan đến Điều khoản Dịch vụ, xin vui lòng liên hệ:</p>
            <p className="font-medium text-slate-900 dark:text-white">
              Võ Nghĩa Kỳ • Email: <a href="mailto:vonghiaky.dev@gmail.com" className="text-indigo-600 dark:text-indigo-400 underline font-semibold">vonghiaky.dev@gmail.com</a> • Điện thoại: (+84) 91 347 6315
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
