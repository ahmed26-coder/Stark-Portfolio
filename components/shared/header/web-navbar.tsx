"use client";

import { Button } from "@/components/ui/button";
import LogoWord from "@/public/logo-word";
import Link from "next/link";

export function WebNavbar() {
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
      <div className="max-w-7xl mx-auto py-2 px-5">
        <div className="flex items-center justify-between">
          <LogoWord width="110" height="50" />
          <nav className="items-center justify-center gap-2 hidden lg:flex">
            {navLink.map((link) => (
              <Link
                key={link.lable}
                href={link.href}
                className="mx-4 text-gray-700 hover:text-gray-900">
                {link.lable}
              </Link>
            ))}
          </nav>
          <Link href={"/contact-us"}>
            <Button>تواصل معنا</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
