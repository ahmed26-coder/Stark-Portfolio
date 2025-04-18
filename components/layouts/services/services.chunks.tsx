import Link from "next/link";
import React from "react";

export function ServicesHeroLinks() {
  const servicesLinks = [
    {
      lable: "الاستراتيجية والاستشارات",
      href: "#consulting",
    },
    {
      lable: "التسويق عبر وسائل التواصل",
      href: "#social-media-marketing",
    },
    {
      lable: "تحسين محركات البحث (SEO & SEM)",
      href: "#seo-optimization",
    },
    {
      lable: "الإعلانات المدفوعة (Meta, Google)",
      href: "#campaigns",
    },
    {
      lable: "الهوية البصرية والتصميم",
      href: "#branding-design",
    },
    {
      lable: "تصميم وتطوير المواقع",
      href: "#web-development",
    },
    {
      lable: "إنتاج المحتوى",
      href: "#content-creation",
    },
  ];

  return (
    <div className="mt-10 px-4">
      <div className="flex items-center justify-center gap-x-2 gap-y-3 flex-wrap relative z-10 max-w-4xl mx-auto">
        {servicesLinks.map((service) => (
          <Link
            href={service.href}
            className="flex items-center justify-center gap-2 w-fit px-4 py-2 bg-background rounded-full text-sm font-medium border hover:bg-primary/10 transition-colors">
            {service.lable}
          </Link>
        ))}
      </div>
    </div>
  );
}
