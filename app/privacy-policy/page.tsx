import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield, Mail, Smartphone, Lock, Eye, Trash2, CheckCircle2, Globe, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Võ Nghĩa Kỳ - Apps & Services",
  description: "Official Privacy Policy for web services, social media publishing platforms, and mobile applications developed by Võ Nghĩa Kỳ, compliant with Google, YouTube, Meta (Facebook/Instagram), and TikTok developer policies.",
};

export default function PrivacyPolicyPage() {
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
            <span>Multi-Platform Compliant</span>
          </div>
        </div>

        {/* Intro */}
        <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
          <p>
            Chính sách quyền riêng tư này áp dụng cho toàn bộ các sản phẩm phần mềm, dịch vụ web, công cụ quản lý truyền thông xã hội (Postiz), và các ứng dụng di động được phát triển và vận hành bởi <strong>Võ Nghĩa Kỳ</strong> (sau đây gọi là &quot;chúng tôi&quot;), bao gồm:
          </p>
          <ul className="list-disc list-inside pl-2 space-y-1 font-medium text-slate-800 dark:text-slate-200">
            <li><strong>Dịch vụ Web &amp; Tích hợp mạng xã hội:</strong> Postiz Social Manager (tích hợp YouTube, TikTok, Facebook, Instagram).</li>
            <li><strong>Ứng dụng di động trên Google Play &amp; App Store:</strong> <em>Streak Học Bài</em> (<code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-indigo-600 dark:text-indigo-400">com.streakhocbai.app</code>), <em>FitTrack</em>, <em>Serene Yoga</em>, <em>SportsMedic Companion</em>.</li>
            <li><strong>Website chính thức:</strong> <a href="https://vonghiaky.dev" target="_blank" rel="noreferrer" className="text-indigo-600 dark:text-indigo-400 underline">https://vonghiaky.dev</a>.</li>
          </ul>
          <p>
            Chúng tôi cam kết bảo vệ dữ liệu cá nhân của người dùng và tuân thủ tuyệt đối các tiêu chuẩn bảo mật của các nền tảng đối tác bao gồm: <strong>Google API Services User Data Policy</strong>, <strong>YouTube Developer Policies</strong>, <strong>Meta Platform Terms</strong>, <strong>TikTok Developer Terms of Service</strong>, và các quy định pháp luật về bảo vệ dữ liệu cá nhân.
          </p>
        </div>

        {/* Section 1 */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
            <Eye className="w-5 h-5 text-indigo-500" />
            <h2>1. Thông Tin Chúng Tôi Thu Thập (Information We Collect)</h2>
          </div>
          <div className="text-sm text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed pl-1">
            <p>Chúng tôi chỉ thu thập dữ liệu tối thiểu cần thiết để cung cấp tính năng cho người dùng:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong>Dữ liệu xác thực tài khoản bên thứ ba (OAuth Tokens):</strong> Khi bạn ủy quyền liên kết tài khoản (YouTube, TikTok, Facebook, Instagram), chúng tôi nhận các mã xác thực (Access Token / Refresh Token) và thông tin hồ sơ cơ bản (User ID, Tên kênh, Ảnh đại diện) do nền tảng đó cung cấp. Chúng tôi <strong>không bao giờ lưu trữ mật khẩu</strong> mạng xã hội của bạn.
              </li>
              <li>
                <strong>Nội dung đăng tải do người dùng cung cấp:</strong> Các file video, hình ảnh, văn bản tiêu đề, mô tả và hashtag mà bạn tải lên để lên lịch xuất bản lên các mạng xã hội.
              </li>
              <li>
                <strong>Dữ liệu ứng dụng di động lưu nội bộ (Offline-first Local Data):</strong> Lịch sử chuỗi học tập (streak), thời gian đếm giờ Pomodoro, lịch nhắc nhở thói quen được lưu trữ trực tiếp trên thiết bị của bạn.
              </li>
              <li>
                <strong>Dữ liệu phân tích kỹ thuật ẩn danh (Anonymous Analytics):</strong> Nhật ký lỗi kỹ thuật, phiên bản thiết bị và hệ điều hành nhằm phát hiện sự cố và cải thiện hiệu năng phần mềm.
              </li>
            </ul>
          </div>
        </div>

        {/* Section 2: Special compliance for YouTube, TikTok, Facebook */}
        <div className="space-y-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
            <Globe className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <h2>2. Điều Khoản Tuân Thủ Các Nền Tảng Đối Tác (Platform Specific Policies)</h2>
          </div>

          {/* YouTube */}
          <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300 pl-2 border-l-2 border-red-500">
            <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <span>A. YouTube API Services</span>
            </h3>
            <p>
              Ứng dụng của chúng tôi sử dụng <strong>YouTube API Services</strong> để cho phép người dùng ủy quyền tải lên video, quản lý nội dung và xem số liệu phân tích của kênh.
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Khi sử dụng tính năng liên kết YouTube, bạn đồng ý tuân thủ <a href="https://www.youtube.com/t/terms" target="_blank" rel="noreferrer" className="text-red-600 dark:text-red-400 underline font-medium inline-flex items-center gap-0.5">Điều khoản dịch vụ của YouTube (YouTube Terms of Service) <ExternalLink className="w-3 h-3 inline" /></a>.</li>
              <li>Việc xử lý dữ liệu của Google được quy định chi tiết tại <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="text-red-600 dark:text-red-400 underline font-medium inline-flex items-center gap-0.5">Chính sách quyền riêng tư của Google (Google Privacy Policy) <ExternalLink className="w-3 h-3 inline" /></a>.</li>
              <li>
                <strong>Thu hồi quyền truy cập:</strong> Bạn có toàn quyền thu hồi quyền truy cập của ứng dụng vào dữ liệu YouTube của mình bất cứ lúc nào thông qua <a href="https://security.google.com/settings/security/permissions" target="_blank" rel="noreferrer" className="text-indigo-600 dark:text-indigo-400 underline font-medium inline-flex items-center gap-0.5">Trang cài đặt bảo mật của Google (Google Security Settings) <ExternalLink className="w-3 h-3 inline" /></a>.
              </li>
            </ul>
          </div>

          {/* TikTok */}
          <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300 pl-2 border-l-2 border-black dark:border-white">
            <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <span>B. TikTok Developer Platform (Login Kit &amp; Content Posting API)</span>
            </h3>
            <p>
              Khi bạn kết nối tài khoản TikTok, chúng tôi sử dụng TikTok Content Posting API và Login Kit để hỗ trợ đăng tải trực tiếp các video đã được bạn phê duyệt:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Chúng tôi chỉ truy cập các phạm vi (scopes) bạn đã phê duyệt: <code className="text-xs bg-slate-200 dark:bg-slate-800 px-1 py-0.5 rounded">user.info.basic</code>, <code className="text-xs bg-slate-200 dark:bg-slate-800 px-1 py-0.5 rounded">video.upload</code>, <code className="text-xs bg-slate-200 dark:bg-slate-800 px-1 py-0.5 rounded">video.publish</code>.</li>
              <li>Bạn có thể xem thêm <a href="https://www.tiktok.com/legal/page/row/privacy-policy/en" target="_blank" rel="noreferrer" className="text-indigo-600 dark:text-indigo-400 underline font-medium inline-flex items-center gap-0.5">Chính sách quyền riêng tư của TikTok <ExternalLink className="w-3 h-3 inline" /></a>.</li>
              <li>
                <strong>Hủy liên kết tài khoản:</strong> Bạn có thể thu hồi quyền của ứng dụng bất cứ lúc nào trong ứng dụng TikTok: <em>Hồ sơ &rarr; Cài đặt &amp; quyền riêng tư &rarr; Bảo mật &rarr; Quản lý quyền ứng dụng (Manage app permissions)</em>.
              </li>
            </ul>
          </div>

          {/* Facebook & Instagram */}
          <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300 pl-2 border-l-2 border-blue-600">
            <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <span>C. Meta Platform (Facebook &amp; Instagram Graph API)</span>
            </h3>
            <p>
              Chúng tôi tuân thủ các Điều khoản nền tảng Meta (Meta Platform Terms) và Chính sách sử dụng dữ liệu nhà phát triển:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Mã truy cập Trang Facebook (Page Access Token) và Instagram Business Token chỉ được sử dụng cho tác vụ lên lịch và xuất bản bài viết theo yêu cầu trực tiếp của bạn.</li>
              <li>Chúng tôi không chia sẻ, chuyển giao hoặc bán bất kỳ dữ liệu người dùng Meta nào cho các mạng quảng cáo hoặc môi giới dữ liệu.</li>
              <li>
                <strong>Thu hồi quyền:</strong> Bạn có thể xóa ứng dụng khỏi tài khoản Facebook bất cứ lúc nào tại <em>Cài đặt &amp; Quyền riêng tư &rarr; Cài đặt &rarr; Ứng dụng và trang web</em>.
              </li>
            </ul>
          </div>
        </div>

        {/* Section 3 */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
            <Lock className="w-5 h-5 text-indigo-500" />
            <h2>3. Cam Kết Bảo Vệ &amp; Không Thương Mại Hóa Dữ Liệu</h2>
          </div>
          <div className="text-sm text-slate-600 dark:text-slate-300 space-y-2 leading-relaxed pl-1">
            <p className="font-semibold text-slate-900 dark:text-white">
              Chúng tôi cam kết tuyệt đối:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li><strong>KHÔNG bán, không cho thuê, không chia sẻ</strong> thông tin cá nhân hoặc dữ liệu mạng xã hội của bạn cho bất kỳ bên thứ ba vì mục đích tiếp thị hoặc quảng cáo.</li>
              <li>Mọi token truy cập đều được mã hóa theo tiêu chuẩn công nghiệp (AES-256) trên cơ sở dữ liệu bảo mật.</li>
              <li>Dữ liệu chỉ được dùng cho mục đích duy nhất: thực thi các hành động xuất bản nội dung mà bạn đã chủ động yêu cầu và phê duyệt.</li>
            </ul>
          </div>
        </div>

        {/* Section 4 */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
            <Trash2 className="w-5 h-5 text-red-500" />
            <h2>4. Hướng Dẫn &amp; Quyền Yêu Cầu Xóa Dữ Liệu (Data Deletion Instructions)</h2>
          </div>
          <div className="text-sm text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed pl-1">
            <p>
              Tuân thủ chính sách bảo vệ dữ liệu của Google, Meta, TikTok và các quy định quốc tế (GDPR/CCPA), bạn có toàn quyền yêu cầu xóa bỏ vĩnh viễn mọi dữ liệu, token và tài khoản bất kỳ lúc nào:
            </p>
            <div className="p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-200/50 dark:border-indigo-800/50 space-y-2">
              <p className="font-semibold text-slate-900 dark:text-white">Các kênh tiếp nhận yêu cầu xóa dữ liệu:</p>
              <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                <li>
                  <strong>Trang xóa dữ liệu trực tuyến:</strong> Truy cập trực tiếp <Link href="/data-deletion" className="text-indigo-600 dark:text-indigo-400 font-semibold underline hover:text-indigo-500">Trang Hướng Dẫn &amp; Yêu Cầu Xóa Dữ Liệu (/data-deletion)</Link> để gửi yêu cầu xóa tài khoản tức thì.
                </li>
                <li>
                  <strong>Gửi Email trực tiếp:</strong> Gửi email đến <a href="mailto:vonghiaky.dev@gmail.com" className="text-indigo-600 dark:text-indigo-400 underline font-medium">vonghiaky.dev@gmail.com</a> với tiêu đề <em>[Yêu cầu xóa dữ liệu - Tên Dịch Vụ/Ứng Dụng]</em>. Toàn bộ dữ liệu của bạn sẽ được xóa sạch khỏi cơ sở dữ liệu trong vòng 24 - 48 giờ làm việc.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 5 */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
            <Mail className="w-5 h-5 text-indigo-500" />
            <h2>5. Thông Tin Liên Hệ Của Nhà Phát Triển (Developer Contact)</h2>
          </div>
          <div className="text-sm text-slate-600 dark:text-slate-300 space-y-2 leading-relaxed pl-1">
            <p>Nếu bạn có bất kỳ câu hỏi nào về Chính sách quyền riêng tư này hoặc cần hỗ trợ về mặt kỹ thuật, vui lòng liên hệ:</p>
            <div className="p-4 rounded-2xl bg-slate-100/70 dark:bg-slate-800/70 space-y-1 text-slate-800 dark:text-slate-200">
              <p><strong>Nhà phát triển:</strong> Võ Nghĩa Kỳ (Vo Nghia Ky)</p>
              <p><strong>Email chính thức:</strong> <a href="mailto:vonghiaky.dev@gmail.com" className="text-indigo-600 dark:text-indigo-400 underline font-semibold">vonghiaky.dev@gmail.com</a></p>
              <p><strong>Điện thoại:</strong> (+84) 91 347 6315</p>
              <p><strong>Website:</strong> <a href="https://vonghiaky.dev" target="_blank" rel="noreferrer" className="text-indigo-600 dark:text-indigo-400 underline">https://vonghiaky.dev</a></p>
              <p><strong>Địa chỉ:</strong> Thành phố Hồ Chí Minh, Việt Nam</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
