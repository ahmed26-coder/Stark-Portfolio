import CustomHeroSection from "@/components/shared/custom-hero-section";
import DecorativeSeparator from "@/components/shared/decorative-separator";
import SectionTitle from "@/components/shared/section-title";
import React from "react";
import { Similartestimonials } from "./testimonials.chunks";
import { Clients, Experience } from "./testimonials.client";

export default function Testimonials() {
  return (
    <>
      <CustomHeroSection>
        <SectionTitle
          highlighted={true}
          headline="آراء العملاء"
          title="ماذا يقول عملاؤنا عنا"
          description="نفخر بالعلاقات طويلة الأمد التي بنيناها مع عملائنا. اطلع على تجاربهم معنا وكيف ساعدناهم على تحقيق أهدافهم الذكية"
        />
      </CustomHeroSection>
      <DecorativeSeparator />
      <Clients />
      <Experience />
      <Similartestimonials />
    </>
  );
}
