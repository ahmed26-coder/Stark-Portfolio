import CustomHeroSection from "@/components/shared/custom-hero-section";
import DecorativeSeparator from "@/components/shared/decorative-separator";
import SectionTitle from "@/components/shared/section-title";
import React from "react";

export default function Blogs() {
  return (
    <>
      <CustomHeroSection>
        <SectionTitle
          highlighted={true}
          headline="المدونة"
          title="أحدث الأفكار والرؤى في الذكاء الاصطناعي"
          description="اكتشف أحدث الاتجاهات والابتكارات في عالم الذكاء الاصطناعي من خلال مدونتنا المتخصصة"
        />
      </CustomHeroSection>
      <DecorativeSeparator />
    </>
  );
}
