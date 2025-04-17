import DecorativeSeparator from "@/components/decorative-separator";
import HomePage from "@/components/layouts/home/page";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function page() {
  const status = [
    {
      title: "+500",
      description: "عميل سعيد",
    },
    {
      title: "+1000",
      description: "مشروع ناجح",
    },
    {
      title: "+5",
      description: "سنوات من الخبرة",
    },
    {
      title: "+20",
      description: "خبير تسويق",
    },
  ];
  return (
    <div>
      <main className="py-14 md:py-20 xl:py-44 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10 z-0"></div>
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-secondary/10 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-6 h-6 rounded-full bg-secondary/30"></div>
        <div className="absolute top-2/3 right-1/3 w-3 h-3 rounded-full bg-primary/20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-8 h-8 rounded-full bg-primary/20"></div>
        <div className="absolute top-1/4 right-1/4 w-20 h-20 border-2 border-primary/20 rounded-lg transform rotate-45 animate-float"></div>
        <div className="absolute bottom-1/3 left-1/3 w-16 h-16 border-2 border-secondary/30 rounded-full animate-float"></div>
        <div className="absolute top-2/3 right-1/5 w-12 h-12 bg-secondary/10 rounded-md transform -rotate-12 animate-float"></div>
        <div className="max-w-7xl mx-auto px-5 text-center">
          <span className="py-1 px-2.5 inline-block bg-primary/10 rounded-lg text-sm font-medium mb-7">
            شركة تسويق رقمي متكاملة
          </span>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            <span className="block text-secondary">نحول أفكارك </span>
            <span className="block text-accent">الي حملات تسويقية ناجحة</span>
          </h1>
          <p className="max-w-3xl mx-auto text-muted-foreground text-lg md:text-xl mb-8">
            نساعدك على النمو وتحقيق أهدافك التسويقية بأحدث الاستراتيجيات
            والأدوات في عالم التسويق الرقمي المتغير باستمرار
          </p>
          {/* status */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-10 text-center">
            {status.map((st, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-white/80 backdrop-blur border relative overflow-hidden group">
                <div className="absolute inset-0 bg-secondary/5 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg"></div>
                <div className="relative z-10">
                  <div className="text-3xl font-bold text-primary">
                    {st.title}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {st.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={"/contact-us"}>
              <Button
                size="lg"
                className="gap-1 text-base px-8 py-6 relative overflow-hidden group cursor-pointer">
                <span className="absolute inset-0 w-full h-full bg-primary/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                <span className="relative z-10">ابدأ الآن</span>
                <ArrowRight className="h-4 w-4 mr-1 relative z-10" />
              </Button>
            </Link>
            <Link href={"/about-us"}>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 py-6 relative overflow-hidden group cursor-pointer">
                <span className="absolute inset-0 w-full h-full bg-primary/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                <span className="relative z-10 group-hover:text-secondary">
                  تعرف علينا
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <DecorativeSeparator />
      <HomePage />
    </div>
  );
}
