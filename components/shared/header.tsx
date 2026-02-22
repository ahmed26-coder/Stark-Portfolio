"use client";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import LanguageSwitcher from "./language-switcher";

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
        "sticky top-0 z-50 bg-background/70 backdrop-blur-md border-b border-border transition duration-300",
        showNavbar ? "translate-y-0" : "-translate-y-full"
      )}>
      <div className="max-w-7xl mx-auto py-2 px-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-stark-cyan via-stark-purple to-stark-green rounded-full blur-xl opacity-40 animate-pulse"></div>
              <video
                autoPlay
                loop
                muted
                width={56}
                height={56}
                playsInline
                className="relative h-14 w-14 rounded-full object-cover stark-logo-glow drop-shadow-2xl"
              >
                <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663303194648/oWubjrfMnYuOknoT.mp4" type="video/mp4" />
              </video>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              STARK
            </h1>
          </Link>
          <nav className="items-center justify-center gap-2 hidden lg:flex">
            {navLink.map((link) => (
              <Link
                key={link.lable}
                href={link.href}
                className={cn(
                  "mx-4 text-muted-foreground hover:text-foreground",
                  activePage === link.href && "text-primary"
                )}>
                {link.lable}
              </Link>
            ))}
          </nav>
          <div className="flex items-center justify-start gap-2">
            <LanguageSwitcher />
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
          <div className="flex flex-col items-start p-10 mt-10 text-2xl text-foreground space-y-5">
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
