import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "../globals.css";
// Fonts
const cairo = Cairo({
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
      <body className={`${cairo.className} antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
