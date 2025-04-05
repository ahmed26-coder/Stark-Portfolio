"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import { Languages } from "lucide-react";

const locales = [
  { code: "ar", label: "العربية" },
  { code: "en", label: "English" },
];

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const segments = pathname.split("/");
  const currentLocale =
    locales.find((l) => l.code === segments[1])?.code || "ar";

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale === currentLocale) return;

    const updatedSegments = [...segments];
    updatedSegments[1] = newLocale;
    const newPath = updatedSegments.join("/");

    startTransition(() => {
      router.replace(newPath);
    });
  };

  return (
    <div className="mt-10">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="capitalize flex items-center justify-center gap-2">
            <Languages className="text-[#17ddb9]" />{" "}
            {locales.find((l) => l.code === currentLocale)?.label || "Language"}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="bottom" align="end">
          {locales.map((locale) => (
            <DropdownMenuItem
              key={locale.code}
              onClick={() => handleLocaleChange(locale.code)}
              disabled={locale.code === currentLocale}>
              {locale.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
