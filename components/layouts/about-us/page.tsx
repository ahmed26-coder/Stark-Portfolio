import CustomHeroSection from "@/components/shared/custom-hero-section";
import DecorativeSeparator from "@/components/shared/decorative-separator";
import SectionTitle from "@/components/shared/section-title";
import React from "react";

export default function AboutUs() {
  return (
    <>
      <CustomHeroSection>
        <SectionTitle
          headline="تعرف علينا"
          title="فريق من المبدعين يصنع الفرق"
          description="نحن أكثر من مجرد وكالة تسويق. نحن شركاء في نجاحك، نعمل معًا لتحقيق أهدافك وتجاوز توقعاتك"
        />
      </CustomHeroSection>
      <DecorativeSeparator />
    </>
  );
}
