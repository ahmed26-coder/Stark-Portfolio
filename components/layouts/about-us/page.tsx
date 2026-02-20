import CustomHeroSection from "@/components/shared/custom-hero-section";
import DecorativeSeparator from "@/components/shared/decorative-separator";
import SectionTitle from "@/components/shared/section-title";
import React from "react";
import { Distinguishes, Journey, Values } from "./about-us.chunks";

export default function AboutUs() {
  return (
    <>
      <CustomHeroSection>
        <SectionTitle
          highlighted={true}
          headline="تعرف علينا"
          title="نخبة العقول الهندسية في خدمة أعمالك"
          description="نحن في Stark AI أكثر من مجرد شركة برمجيات. نحن شركاء نجاح ندمج الذكاء الاصطناعي في صميم عملياتك لتحقيق نتائج تفوق التوقعات."
        />

      </CustomHeroSection>
      <DecorativeSeparator />
      <Journey />
      <Values />

      <Distinguishes />
    </>
  );
}
