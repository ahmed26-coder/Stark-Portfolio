import { ArrowRight, BarChart, ChevronLeft, FileText, Globe, MousePointer, PenTool, Search, TrendingUp, Users } from "lucide-react";
import { DataBenefits, DataBenefits2, DataExpected, DataSeo, Data, DataIcons, DataResultss, Datapractical, servicesLinks, DatapracticalSeo, DataExpectedSeo, DataAdvertisements, DataExpectedAdvertisements, DatapracticalAdvertisements, DataIdentity, DataIdentiy, DataIdentit, DataDesin, DataDesig, DataProduction, DataProductio, DataProductin } from "../../../constants"
import Link from "next/link";
import React from "react";
import SectionTitle from "@/components/shared/section-title";
import ServiceSection from "@/components/shared/ServiceSection";
import ServiceSectionlight from "@/components/shared/ServiceSectionlight";

export function ServicesHeroLinks() {

  return (
    <div className="mt-10 px-4">
      <div className="flex items-center justify-center gap-x-2 gap-y-3 flex-wrap relative z-10 max-w-4xl mx-auto">
        {servicesLinks.map((service, index) => (
          <article key={index}>
            <Link
              href={service.href}
              className="flex items-center justify-center gap-2 w-fit px-4 py-2 bg-background rounded-full text-sm font-medium border hover:bg-primary/10 transition-colors"
            >
              {service.label}
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}



export function Strategy() {
  return (
    <div className=" max-w-7xl mx-auto w-full py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <ServiceSectionlight
            title="الاستراتيجية والاستشارات"
            icon={<BarChart className="h-9 w-9 text-primary" />}
            description="نساعدك على وضع استراتيجية تسويقية شاملة تتماشى مع أهداف عملك وتضمن تحقيق أقصى عائد على الاستثمار."
            benefits={DataBenefits}
            workSteps={DataBenefits2}
            expectedResults={DataExpected}
          />

          <div className="order-1 lg:order-2">
            <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex items-center justify-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/10 rounded-full transform translate-x-1/3 translate-y-1/3"></div>
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-4">
                  <BarChart className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">استراتيجية متكاملة</h3>
                <p className="mt-2 max-w-xs mx-auto">نحول رؤيتك إلى خطة عمل واضحة وقابلة للتنفيذ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



export default function Contact() {

  return (
    <div className=" py-16 md:py-24 bg-primary/5">
      <div className=" max-w-7xl mx-auto container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <div className="relative h-80 w-full overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-background"></div>
              <div className="absolute top-4 right-4 bottom-4 left-4 border-2 border-dashed border-primary/20 rounded-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4 p-6">
                  {DataIcons.map((Icon, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm p-4 rounded-lg shadow-sm"
                    >
                      <Icon className="h-8 w-8 text-primary mb-2" />
                      <span className="text-xs font-medium text-center">
                        {index === 0 ? "تواصل" : index === 1 ? "نمو" : "تفاعل"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <ServiceSection
            icon={<Users className="h-9 w-9 text-primary" />}
            title="التسويق عبر وسائل التواصل"
            description="نساعدك على بناء وجود قوي على منصات التواصل الاجتماعي، وزيادة التفاعل مع جمهورك المستهدف، وتحويل المتابعين إلى عملاء."
            benefits={Data}
            workSteps={Datapractical}
            expectedResults={DataResultss}
          />
        </div>
      </div>
    </div>
  )
}



export function Seo() {
  return (
    <div className=" max-w-7xl mx-auto w-full py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
        <ServiceSectionlight
            title="تحسين محركات البحث (SEO & SEM)"
            icon={<Search className="h-9 w-9 text-primary" />}
            description="نساعدك على تحسين ظهور موقعك في نتائج محركات البحث، وزيادة حركة المرور العضوية، وتحسين معدلات التحويل."
            benefits={DataSeo}
            workSteps={DatapracticalSeo}
            expectedResults={DataExpectedSeo}
          />
          <div className="order-1 lg:order-2">
            <div className="relative h-80 w-full overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-bl from-primary/20 to-background"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full max-w-xs">
                  <div className="bg-background rounded-lg shadow-lg p-4 mb-3">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="bg-muted h-6 rounded mb-2"></div>
                    <div className="space-y-2">
                      <div className="bg-primary/10 h-10 rounded flex items-center px-3">
                        <Search className="h-4 w-4 text-primary mr-2" />
                        <div className="bg-background h-4 w-full rounded"></div>
                      </div>
                      <div className="bg-muted h-4 w-3/4 rounded"></div>
                      <div className="bg-muted h-4 w-full rounded"></div>
                      <div className="bg-muted h-4 w-5/6 rounded"></div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/20">
                      <ChevronLeft className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



export function Advertisements() {
  return (
    <div className=" w-full py-16 md:py-24 bg-primary/5">
      <div className=" max-w-7xl mx-auto container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-gradient-to-r from-primary/5 to-primary/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 p-6 w-full max-w-md">
                  <div className="col-span-2 bg-background rounded-lg gap-2 shadow-sm p-4 flex items-center">
                    <MousePointer className="h-8 w-8 text-primary mr-3" />
                    <div>
                      <div className="font-bold">إعلانات مستهدفة</div>
                      <div className="text-xs text-muted-foreground">تصل إلى الجمهور المناسب في الوقت المناسب</div>
                    </div>
                  </div>
                  <div className="bg-background rounded-lg shadow-sm p-3 flex flex-col items-center justify-center">
                    <div className="text-primary font-bold text-xl">Meta</div>
                    <div className="text-xs text-muted-foreground">فيسبوك وانستغرام</div>
                  </div>
                  <div className="bg-background rounded-lg shadow-sm p-3 flex flex-col items-center justify-center">
                    <div className="text-primary font-bold text-xl">Google</div>
                    <div className="text-xs text-muted-foreground">بحث وعرض</div>
                  </div>
                  <div className="col-span-2 bg-background/80 backdrop-blur rounded-lg shadow-sm p-3">
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-medium">أداء الحملة</div>
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-3/4 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ServiceSection
            icon={<MousePointer className="h-9 w-9 text-primary" />}
            title="الإعلانات المدفوعة (Meta, Google)"
            description="نصمم وندير حملات إعلانية فعالة على منصات مثل Meta و Google لاستهداف جمهورك المناسب وتحقيق أهدافك التسويقية."
            benefits={DataAdvertisements}
            workSteps={DataDesin}
            expectedResults={DataDesig}
          />
        </div>
      </div>
    </div>
  )
}



export function Identity() {
  return (
    <div className=" max-w-7xl mx-auto w-full py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
        <ServiceSectionlight
            title="الهوية البصرية والتصميم"
            icon={<PenTool className="h-9 w-9 text-primary" />}
            description="نصمم هويات بصرية فريدة وجذابة تعكس قيم علامتك التجارية وتميزها عن المنافسين، مع الحفاظ على اتساق العلامة التجارية عبر جميع نقاط الاتصال."
            benefits={DataIdentity}
            workSteps={DataIdentiy}
            expectedResults={DataIdentit}
          />

          <div className="order-1 lg:order-2">
            <div className="relative h-80 w-full overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-background to-primary/10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48">
                  <div
                    className="absolute inset-0 rotate-x-180 rounded-full border-4 border-dashed border-primary/30"
                    style={{ animation: 'var(--animate-spin-slow-reverse)' }}
                  ></div>
                  <div className="absolute inset-8 rounded-full bg-background shadow-lg flex items-center justify-center">
                    <PenTool className="h-12 w-12 text-primary" />
                  </div>
                  <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-background px-3 py-1 rounded-full text-sm font-medium">
                    الألوان
                  </div>
                  <div className="absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 bg-background px-3 py-1 rounded-full text-sm font-medium">
                    الخطوط
                  </div>
                  <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 bg-background px-3 py-1 rounded-full text-sm font-medium">
                    الشعار
                  </div>
                  <div className="absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-background px-3 py-1 rounded-full text-sm font-medium">
                    الهوية
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}




export function Design() {
  return (
    <div className=" w-full py-16 md:py-24 bg-primary/5">
      <div className=" max-w-7xl mx-auto container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-background to-primary/10">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full max-w-md p-6">
                <div className="bg-background rounded-t-lg shadow-sm p-3 border-b border-muted">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="bg-background shadow-sm p-4">
                  <div className="flex justify-between items-center mb-4">
                    <div className="bg-primary/10 h-8 w-24 rounded"></div>
                    <div className="flex gap-2">
                      <div className="bg-muted h-6 w-16 rounded"></div>
                      <div className="bg-muted h-6 w-16 rounded"></div>
                      <div className="bg-muted h-6 w-16 rounded"></div>
                    </div>
                  </div>
                  <div className="bg-primary/5 h-40 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                      <div className="bg-primary/20 h-12 w-12 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <Globe className="h-6 w-6 text-primary" />
                      </div>
                      <div className="bg-muted h-4 w-32 rounded mx-auto"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-muted h-20 rounded"></div>
                    <div className="bg-muted h-20 rounded"></div>
                    <div className="bg-muted h-20 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ServiceSection
            icon={<Globe className="h-9 w-9 text-primary" />}
            title="الإعلانات المدفوعة (Meta, Google)"
            description="نصمم وندير حملات إعلانية فعالة على منصات مثل Meta و Google لاستهداف جمهورك المناسب وتحقيق أهدافك التسويقية."
            benefits={DataAdvertisements}
            workSteps={DatapracticalAdvertisements}
            expectedResults={DataExpectedAdvertisements}
          />
          
        </div>
      </div>
    </div>
  )
}




export function Production() {
  return (
    <div className=" max-w-7xl mx-auto w-full py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
        <ServiceSectionlight
            title="إنتاج المحتوى"
            icon={<FileText className="h-9 w-9 text-primary" />}
            description="ننتج محتوى إبداعي ومقنع يجذب جمهورك المستهدف ويعزز تواجدك الرقمي، سواء كان نصوصًا أو صورًا أو فيديوهات."
            benefits={DataProduction}
            workSteps={DataProductio}
            expectedResults={DataProductin}
          />

          <div className="order-1 lg:order-2">
            <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-gradient-to-bl from-primary/5 to-primary/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full max-w-md p-6">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-3 bg-background rounded-lg shadow-sm p-4 mb-3">
                      <div className="flex items-center mb-2">
                        <FileText className="h-5 w-5 text-primary mr-2" />
                        <div className="font-bold">المدونة</div>
                      </div>
                      <div className="space-y-1">
                        <div className="bg-muted h-3 w-full rounded"></div>
                        <div className="bg-muted h-3 w-full rounded"></div>
                        <div className="bg-muted h-3 w-3/4 rounded"></div>
                      </div>
                    </div>
                    <div className="bg-background rounded-lg shadow-sm p-3 flex flex-col items-center justify-center">
                      <div className="bg-primary/10 h-8 w-8 rounded-full flex items-center justify-center mb-2">
                        <FileText className="h-4 w-4 text-primary" />
                      </div>
                      <div className="text-xs font-medium">مقالات</div>
                    </div>
                    <div className="bg-background rounded-lg shadow-sm p-3 flex flex-col items-center justify-center">
                      <div className="bg-primary/10 h-8 w-8 rounded-full flex items-center justify-center mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
                          <line x1="7" y1="2" x2="7" y2="22" />
                          <line x1="17" y1="2" x2="17" y2="22" />
                          <line x1="2" y1="12" x2="22" y2="12" />
                          <line x1="2" y1="7" x2="7" y2="7" />
                          <line x1="2" y1="17" x2="7" y2="17" />
                          <line x1="17" y1="17" x2="22" y2="17" />
                          <line x1="17" y1="7" x2="22" y2="7" />
                        </svg>
                      </div>
                      <div className="text-xs font-medium">انفوجرافيك</div>
                    </div>
                    <div className="bg-background rounded-lg shadow-sm p-3 flex flex-col items-center justify-center">
                      <div className="bg-primary/10 h-8 w-8 rounded-full flex items-center justify-center mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <polygon points="23 7 16 12 23 17 23 7" />
                          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                        </svg>
                      </div>
                      <div className="text-xs font-medium">فيديو</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



export function SimilarServices() {
  return (
    <div className=" bg-primary/5 py-15 sm:py-[13%] lg:py-20">
      <SectionTitle title="جاهز لتنمية أعمالك؟" description="دعنا نساعدك في تحقيق أهدافك التسويقية وتنمية أعمالك. تواصل معنا اليوم للحصول على استشارة مجانية." />
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-4 mt-5">
        <button className="flex items-center justify-center sm:w-fit w-[70%] bg-primary text-white py-2 px-5 hover:bg-primary/90 rounded-md gap-3">
          احصل على استشارة مجانية
          <ArrowRight className="h-4 w-4 mr-1" />
        </button>
        <button className="flex items-center justify-center sm:w-fit w-[70%] border border-muted-foreground/20 bg-white py-2 px-5 rounded-md gap-3 hover:bg-accent hover:text-white ">
          تعرف على المزيد
        </button>
      </div>
    </div>
  )
}