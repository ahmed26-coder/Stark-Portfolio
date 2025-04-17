import CustomHeroSection from "@/components/shared/custom-hero-section";
import SectionTitle from "@/components/shared/section-title";
import React from "react";

export default function Blogs() {
  return (
    <>
      <CustomHeroSection>
        <SectionTitle
          headline="المدونة"
          title="أحدث الأفكار والرؤى التسويقية"
          description="اكتشف أحدث الاتجاهات والاستراتيجيات في عالم التسويق الرقمي من خلال مدونتنا المتخصصة"
        />
      </CustomHeroSection>
    </>
  );
}
