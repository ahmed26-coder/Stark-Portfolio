import CustomHeroSection from "@/components/shared/custom-hero-section";
import DecorativeSeparator from "@/components/shared/decorative-separator";
import SectionTitle from "@/components/shared/section-title";
import React from "react";

export default function Testimonials() {
  return (
    <>
      <CustomHeroSection>
        <SectionTitle
          headline="آراء العملاء"
          title="ماذا يقول عملاؤنا عنا"
          description="نفخر بالعلاقات طويلة الأمد التي بنيناها مع عملائنا. اطلع على تجاربهم معنا وكيف ساعدناهم على تحقيق أهدافهم التسويقية"
        />
      </CustomHeroSection>
      <DecorativeSeparator />
    </>
  );
}
