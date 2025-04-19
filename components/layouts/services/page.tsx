import CustomHeroSection from "@/components/shared/custom-hero-section";
import SectionTitle from "@/components/shared/section-title";
import React from "react";
import Contact, { Advertisements, Design, Identity, Production, Seo, ServicesHeroLinks, SimilarServices, Strategy } from "./services.chunks";
import DecorativeSeparator from "@/components/shared/decorative-separator";

export default function Services() {
  return (
    <>
      <CustomHeroSection>
        <SectionTitle
          headline="خدماتنا"
          title="حلول تسويقية متكاملة لنمو أعمالك"
          description="نقدم مجموعة شاملة من الخدمات التسويقية المصممة خصيصًا لتلبية احتياجات عملك وتحقيق أهدافك"
        />
        <ServicesHeroLinks />
      </CustomHeroSection>
      <DecorativeSeparator />
      <Strategy />
      <Contact />
      <Seo />
      <Advertisements />
      <Identity />
      <Design />
      <Production />
      <SimilarServices />
    </>
  );
}
