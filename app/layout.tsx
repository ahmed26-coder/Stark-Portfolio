import type { Metadata } from "next";
import { Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/header";
import { Toaster } from "sonner";
// Fonts
const cairo = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-cairo",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "التسويق الرقمي و الحلول البرمجيه",
  description: "وكالة متخصصة في تقديم خدمات التسويق الإبداعي وتطوير البرمجيات.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} antialiased bg-white text-gray-900`}>
        <Header />
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
