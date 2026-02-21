import CustomHeroSection from "@/components/shared/custom-hero-section";
import DecorativeSeparator from "@/components/shared/decorative-separator";
import SectionTitle from "@/components/shared/section-title";
import React from "react";
import { Learn, SimilarPortfolio } from "./portfolio.chunks";
import { PageClient } from "../home/page.chunks";
import PortfolioClient from "./portfolio.client";

export default function Portfolio() {
  return (
    <>
      <CustomHeroSection>
        <SectionTitle
          highlighted={true}
          headline="أعمالنا"
          title="مشاريع ناجحة تتحدث عن نفسها"
          description="نفخر بالنتائج التي حققناها لعملائنا. استكشف دراسات الحالة لدينا لترى كيف ساعدنا المؤسسات على تحقيق أهدافها بالذكاء الاصطناعي"
        />
      </CustomHeroSection>
      <DecorativeSeparator />
      <PortfolioClient />
      <Learn />
      <PageClient />
      <SimilarPortfolio />
    </>
  );
}
