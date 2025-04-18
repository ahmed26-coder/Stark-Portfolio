"use client";

import { Button } from "@/components/ui/button";
import LogoWord from "@/public/logo-word";
import Link from "next/link";

export function MobileNavbar() {
  const navLink = [
    {
      lable: "الرئيسية",
      href: "/",
    },
    {
      lable: "من نحن",
      href: "/about-us",
    },
    {
      lable: "خدماتنا",
      href: "/services",
    },
    {
      lable: "أعمالنا",
      href: "/portfolio",
    },
    {
      lable: "آراء العملاء",
      href: "/testimonials",
    },
    {
      lable: "المدونة",
      href: "/blogs",
    },
  ];
  return (
    <div>
      <div className="max-w-2xl mx-auto py-2 px-5">
        <div className="flex items-center justify-between">
          <LogoWord width="110" height="50" />
          <div>
            <Link href={"/contact-us"}>
              <Button>تواصل معنا</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
