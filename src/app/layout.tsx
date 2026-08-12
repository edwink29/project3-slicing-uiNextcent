import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ 1. Metadata diaktifkan untuk SEO Landing Page Anda
export const metadata: Metadata = {
  title: "Nexcent - Lessons and Insights from 8 Years",
  description: "Manage your entire community in a single system with Nexcent.",
};

// ✅ 2. Tipe data props disesuaikan menggunakan React.ReactNode
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
