import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://vonghiaky.dev"),
  title: "Võ Nghĩa Kỳ | Senior Full-Stack & Odoo 18/19 Developer",
  description:
    "Official portfolio of Võ Nghĩa Kỳ (Vo Nghia Ky) - Senior Full-Stack Developer & Odoo 18/19 Specialist. Expertise in enterprise ERP, React Native mobile apps, automated payment gateways, and AI camera vision.",
  icons: {
    icon: "/images/vo-nghia-ky.webp",
  },
  openGraph: {
    title: "Võ Nghĩa Kỳ | Senior Full-Stack & Odoo Developer",
    description:
      "Full-Stack Developer & Odoo 18/19 Engineer based in Ho Chi Minh City. Delivering enterprise ERP solutions, React Native mobile apps, and Edge AI services.",
    url: "https://vonghiaky.dev",
    siteName: "Võ Nghĩa Kỳ Portfolio",
    images: [
      {
        url: "/images/vo-nghia-ky.webp",
        width: 800,
        height: 800,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  verification: {
    other: {
      "tiktok-developers-site-verification": [
        "qTKOJMoBROcrGdZgMZtokUpWVY4R50NU",
        "x23lXL5ijztKIjl7Cp4ifP7i1SXaGWZ7",
      ],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen flex flex-col bg-slate-50 dark:bg-[#0B0F19] text-slate-800 dark:text-slate-200 antialiased selection:bg-indigo-500 selection:text-white transition-colors duration-300`}>
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow pt-24">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
