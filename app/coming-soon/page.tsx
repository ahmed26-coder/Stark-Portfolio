import { Mail, Instagram, Facebook, Linkedin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Comingoon() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#011749] via-[#011749]/90 to-[#1285ca] flex flex-col items-center justify-center p-4 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none hidden md:block">
        {/* Animated circles */}
        <div className="absolute top-[10%] right-[15%] w-64 h-64 rounded-full bg-[#17ddb9]/10 animate-pulse-slow"></div>
        <div className="absolute bottom-[20%] left-[10%] w-40 h-40 rounded-full bg-[#1285ca]/10 animate-float"></div>

        {/* Geometric shapes */}
        <div className="absolute top-[30%] left-[20%] w-32 h-32 rotate-45 border-2 border-[#17ddb9]/20 animate-spin-slow"></div>
        <div className="absolute bottom-[30%] right-[25%] w-24 h-24 border-2 border-[#1285ca]/20 rounded-md animate-bounce-slow"></div>

        {/* Lines */}
        <div className="absolute top-0 left-[30%] h-[30vh] w-px bg-gradient-to-b from-transparent via-[#17ddb9]/30 to-transparent"></div>
        <div className="absolute top-[60%] right-[40%] h-[40vh] w-px bg-gradient-to-b from-transparent via-[#1285ca]/30 to-transparent"></div>
      </div>
      <div className="max-w-3xl mx-auto relative">
        <Image
          src={"/logo-gradient-word-mark.svg"}
          width={200}
          height={10}
          alt="ctrl p"
          className="mx-auto mb-5"
        />

        <h1 className="text-center text-3xl font-bold bg-gradient-to-r to-white/90 from-[#17ddb9] bg-clip-text text-transparent">
          نحن نعمل علي شيئ مميز
        </h1>
        <p className="text-center text-white/50 my-5">
          موقعنا قيد الإنشاء. سنطلق قريباً خدمات تسويقية مبتكرة ستغير مفهوم
          التسويق الرقمي.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#17ddb9] to-transparent mx-auto mb-7"></div>
        <p className="text-center font-semibold text-xl text-white/85">
          أبقى على اطلاع
        </p>
        <p className="text-center text-base text-white/50 mt-3">
          اشترك في نشرتنا البريدية للحصول على إشعار عند إطلاق الموقع
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto w-full mt-4">
          <div className="relative flex-grow">
            <Mail
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#17ddb9]"
              size={18}
            />
            <Input
              type="email"
              placeholder="ctrlp@mail.com"
              className="bg-white/10 border-[#1285ca]/30 text-white text-base md:text-base placeholder:text-white/50 pl-4 pr-10 py-4"
            />
          </div>
          <Button className="bg-[#17ddb9] hover:bg-[#17ddb9]/80 text-[#011749] font-medium text-center items-center flex">
            اشترك الان
          </Button>
        </div>
        <div className="mt-10">
          <p className="text-white/50 mb-4 text-center">
            تابعنا علي وسائل التواصل الاجتماعي
          </p>
          <ul className="flex justify-center gap-4">
            {[
              {
                icon: Instagram,
                label: "Instagram",
                acount: process.env.NEXT_PUBLIC_INSTAGRAM,
              },
              {
                icon: Facebook,
                label: "Facebook",
                acount: process.env.NEXT_PUBLIC_FACEBOOK,
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                acount: process.env.NEXT_PUBLIC_LINKEDIN,
              },
            ].map((social, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-[#17ddb9] text-white transition-all duration-300 group"
                  aria-label={social.label}>
                  <social.icon
                    size={20}
                    className="group-hover:text-[#011749]"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
