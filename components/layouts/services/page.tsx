import CustomHeroSection from "@/components/shared/custom-hero-section";
import SectionTitle from "@/components/shared/section-title";
import React from "react";
import Contact, { Advertisements, Identity, Production, Seo, ServicesHeroLinks, SimilarServices, Strategy } from "./services.chunks";
import DecorativeSeparator from "@/components/shared/decorative-separator";

export default function Services() {
  return (
    <>
      <CustomHeroSection>
        <SectionTitle
          highlighted={true}
          headline="خدماتنا"
          title="حلول برمجية ذكية لنمو أعمالك"
          description="نقدم مجموعة متكاملة من حلول الذكاء الاصطناعي المصممة خصيصاً لقطاعات الطب، الهندسة، والمحاسبة، بالإضافة إلى أنظمة التنبؤ الذكية."
        />

        <ServicesHeroLinks />
      </CustomHeroSection>
      <DecorativeSeparator />
      <Strategy />
      <Contact />
      <Seo />
      <Advertisements />
      <Identity />
      <Production />

      <SimilarServices />
    </>
  );
}
