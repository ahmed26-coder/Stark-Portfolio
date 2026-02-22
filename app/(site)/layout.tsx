import type { Metadata } from "next";
import { Noto_Sans_Arabic } from "next/font/google";
import "../globals.css";
import Header from "@/components/shared/header";
import { Toaster } from "sonner";
import Footer from "@/components/shared/footer";
// Fonts
const cairo = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-cairo",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Stark | ذكاء الأعمال والحلول البرمجية المبتكرة",
  description: "شريكك التقني للتحول الرقمي. نقدم حلول Stark AI المتكاملة للأتمتة الذكية، تحليل البيانات، وتطوير التطبيقات المخصصة لرفع كفاءة أعمالك.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} antialiased bg-background text-foreground`}>
        <Header />
        {children}
        <Toaster richColors position="top-center" />
        <Footer />
      </body>
    </html>
  );
}
