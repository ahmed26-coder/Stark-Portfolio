import CustomHeroSection from "@/components/shared/custom-hero-section";
import DecorativeSeparator from "@/components/shared/decorative-separator";
import SectionTitle from "@/components/shared/section-title";
import React from "react";
import { Contactform, Contactreservation, FAQ } from "./contact-us.chunks";

export default function ContactUs() {
  return (
    <>
      <CustomHeroSection>
        <SectionTitle
          highlighted={true}
          title="دعنا نناقش مشروعك التالي"
          headline="اتصل بنا"
          description="نحن هنا للإجابة على استفساراتك ومساعدتك في تحقيق أهدافك التسويقية. تواصل معنا اليوم لبدء رحلة نجاح عملك"
        />
      </CustomHeroSection>
      <DecorativeSeparator />
      <Contactform />
      <Contactreservation />
      <FAQ />
    </>
  );
}
