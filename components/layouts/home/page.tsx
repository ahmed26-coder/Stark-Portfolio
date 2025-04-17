import SectionTitle from "@/components/shared/section-title";
import React from "react";
import { HeroSection, HeroStatus } from "./page.chunks";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <HeroSection>
        <div className="text-center">
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
        </div>
        <HeroStatus />
        <div className="flex items-center justify-center gap-2">
          <Link href={""}>
            <Button
              size="lg"
              className="gap-1 text-base px-8 py-6 relative overflow-hidden group ">
              <span className="absolute inset-0 w-full h-full bg-primary/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              <span className="relative z-10">ابدأ الآن</span>
              <ArrowRight className="h-4 w-4 mr-1 relative z-10" />
            </Button>
          </Link>
          <Link href={""}>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 py-6 relative overflow-hidden group hover:text-white">
              <span className="absolute inset-0 w-full h-full bg-primary/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              <span className="relative z-10">تعرف علينا</span>
            </Button>
          </Link>
        </div>
      </HeroSection>
    </>
  );
}
