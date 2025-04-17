import CustomHeroSection from "@/components/shared/custom-hero-section";
import SectionTitle from "@/components/shared/section-title";
import React from "react";

export default function Services() {
  return (
    <>
      <CustomHeroSection>
        <SectionTitle
          headline="خدماتنا"
          title="حلول تسويقية متكاملة لنمو أعمالك"
          description="نقدم مجموعة شاملة من الخدمات التسويقية المصممة خصيصًا لتلبية احتياجات عملك وتحقيق أهدافك"
        />
      </CustomHeroSection>
    </>
  );
}
