"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Globe, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

type Language = {
  code: string
  name: string
  nativeName: string
  direction: "ltr" | "rtl"
}

const languages: Language[] = [
  { code: "ar", name: "Arabic", nativeName: "العربية", direction: "rtl" },
  { code: "en", name: "English", nativeName: "English", direction: "ltr" },
]

export default function LanguageSwitcher() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0])

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language)
    // Here you would implement the actual language change logic
    // This might involve setting a cookie, localStorage value, or calling an API
    console.log(`Switching to ${language.name}`)

    // For demonstration purposes only - in a real implementation you would use a proper i18n library
    // and wouldn't manipulate the HTML directly
    document.documentElement.lang = language.code
    document.documentElement.dir = language.direction
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex hover:text-white items-center gap-1 px-2 h-8">
          <Globe className="h-4 w-4" />
          <span className="mx-1">{currentLanguage.nativeName}</span>
          <ChevronDown className="h-3 w-3 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className=" w-40">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language)}
            className="flex items-center focus:text-white justify-between"
          >
            <span className="focus:text-white">{language.nativeName}</span>
            {currentLanguage.code === language.code && <Check className="h-4 w-4 text-[#17ddb9]" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

