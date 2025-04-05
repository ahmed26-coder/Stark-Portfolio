import type { Metadata } from "next";
import { Cairo, Rubik } from "next/font/google";
import "../globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

// Fonts
const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  display: "swap",
  weight: ["400", "500", "700"],
});

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "التسويق الرقمي و الحلول البرمجيه",
  description: "وكالة متخصصة في تقديم خدمات التسويق الإبداعي وتطوير البرمجيات.",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const isArabic = locale === "ar";
  const fontClass = isArabic ? cairo.variable : rubik.variable;

  return (
    <html lang={locale} dir={isArabic ? "rtl" : "ltr"}>
      <body className={`${fontClass} antialiased bg-white text-gray-900`}>
        <NextIntlClientProvider locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
