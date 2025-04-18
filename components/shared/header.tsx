"use client";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import LogoWord from "@/public/logo-word";
import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

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
export default function Header() {
  const activePage = usePathname();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // Hide navbar on scroll down
      } else {
        setShowNavbar(true); // Show navbar on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={cn(
        "sticky top-0 z-50 bg-white/50 backdrop-blur-md border-b border-gray-200 transition duration-300",
        showNavbar ? "translate-y-0" : "-translate-y-full"
      )}>
      <div className="max-w-7xl mx-auto py-2 px-5">
        <div className="flex items-center justify-between">
          <LogoWord width="100" height="50" />
          <nav className="items-center justify-center gap-2 hidden lg:flex">
            {navLink.map((link) => (
              <Link
                key={link.lable}
                href={link.href}
                className={cn(
                  "mx-4 text-gray-700 hover:text-gray-900",
                  activePage === link.href && "text-primary"
                )}>
                {link.lable}
              </Link>
            ))}
          </nav>
          <div className="flex items-center justify-start gap-2">
            <Link href={"/contact-us"} className="hidden lg:block">
              <Button>تواصل معنا</Button>
            </Link>
            <MobileMenuSheet activePage={activePage} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileMenuSheet({ activePage }: { activePage: string }) {
  return (
    <div className="block lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col items-start p-10 mt-10 text-2xl text-gray-700 space-y-5">
            {navLink.map((link) => (
              <SheetClose asChild key={link.href}>
                <Link
                  href={link.href}
                  className={cn(activePage === link.href && "text-primary")}>
                  {link.lable}
                </Link>
              </SheetClose>
            ))}
            <SheetClose asChild>
              <Link href={"/contact-us"} className="">
                <Button>تواصل معنا</Button>
              </Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
