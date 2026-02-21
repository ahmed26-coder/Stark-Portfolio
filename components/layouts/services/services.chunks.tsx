import { ArrowRight, Brain, Calculator, ChevronLeft, Cpu, Database, FileCheck, Microscope, Package, Stethoscope, TrendingUp, Users, Zap } from "lucide-react";
import { Data, DataIcons, DataResultss, Datapractical, servicesLinks, DataAdvertisements, DataExpectedAdvertisements, DatapracticalAdvertisements, DataIdentity, DataIdentiy, DataIdentit, DataDesign, DataDesin, DataDesig, DataProduction, DataProductio, DataProductin } from "../../../constants"
import Link from "next/link";
import React from "react";
import SectionTitle from "@/components/shared/section-title";
import ServiceSection from "@/components/shared/ServiceSection";
import { Button } from "@/components/ui/button";
import { Stagger, StaggerItem } from "@/components/shared/reveal";

export function ServicesHeroLinks() {

  return (
    <div className="mt-10 px-4">
      <Stagger className="flex items-center justify-center gap-x-2 gap-y-3 flex-wrap relative z-10 max-w-4xl mx-auto">
        {servicesLinks.map((service, index) => (
          <StaggerItem key={index}>
            <article>
              <Link
                href={service.href}
                className="flex items-center justify-center gap-2 w-fit px-4 py-2 bg-background rounded-full text-sm font-medium border hover:bg-primary/10 transition-colors"
              >
                {service.label}
              </Link>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}



export function Strategy() {
  return (
    <div id="medical-ai" className=" max-w-7xl mx-auto w-full py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <ServiceSection
            title="الذكاء الاصطناعي في الطب"
            icon={<Stethoscope className="h-9 w-9 text-primary" />}
            description="نطور خوارزميات متقدمة لتحليل الصور الطبية، وتشخيص الأمراض بدقة عالية، وإدارة بيانات المرضى بذكاء لتحسين الرعاية الصحية."
            benefits={Data}
            workSteps={Datapractical}
            expectedResults={DataResultss}
            highlighted={true}
          />

          <div className="order-1 lg:order-2">
            <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex items-center justify-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/10 rounded-full transform translate-x-1/3 translate-y-1/3"></div>
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-4">
                  <Microscope className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">دقة طبية فائقة</h3>
                <p className="mt-2 max-w-xs mx-auto">نحول البيانات الطبية المعقدة إلى رؤى إنقاذ حياة</p>
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
                <Stagger className="grid grid-cols-3 gap-4 p-6">
                  {DataIcons.map((Icon, index) => (
                    <StaggerItem key={index}>
                      <div
                        className="flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm p-4 rounded-lg shadow-sm"
                      >
                        <Icon className="h-8 w-8 text-primary mb-2" />
                        <span className="text-xs font-medium text-center">
                          {index === 0 ? "تواصل" : index === 1 ? "نمو" : "تفاعل"}
                        </span>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>
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
            highlighted={false}
          />
        </div>
      </div>
    </div>
  )
}



export function Seo() {
  return (
    <div id="accounting-ai" className=" max-w-7xl mx-auto w-full py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <ServiceSection
            title="أنظمة المحاسبة المتقدمة"
            icon={<Calculator className="h-9 w-9 text-primary" />}
            description="نحول العمليات المحاسبية التقليدية إلى أنظمة ذكية تقوم بالأتمتة الكاملة للقيود، وكشف الأخطاء المالية، وتحليل التدفقات النقدية بدقة 100%."
            benefits={DataAdvertisements}
            workSteps={DatapracticalAdvertisements}
            expectedResults={DataExpectedAdvertisements}
            highlighted={true}
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
                        <Calculator className="h-4 w-4 text-primary mr-2" />
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
    <div id="inventory-prediction" className=" w-full py-16 md:py-24 bg-primary/5">
      <div className=" max-w-7xl mx-auto container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-gradient-to-r from-primary/5 to-primary/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 p-6 w-full max-w-md">
                  <div className="col-span-2 bg-background rounded-lg gap-2 shadow-sm p-4 flex items-center">
                    <Package className="h-8 w-8 text-primary mr-3" />
                    <div>
                      <div className="font-bold">تنبؤ ذكي بالمخزون</div>
                      <div className="text-xs text-muted-foreground">وداعاً للهالك والمنتجات الراكدة</div>
                    </div>
                  </div>
                  <div className="bg-background rounded-lg shadow-sm p-3 flex flex-col items-center justify-center">
                    <div className="text-primary font-bold text-xl">WMS</div>
                    <div className="text-xs text-muted-foreground">تكامل الأنظمة</div>
                  </div>
                  <div className="bg-background rounded-lg shadow-sm p-3 flex flex-col items-center justify-center">
                    <div className="text-primary font-bold text-xl">AI</div>
                    <div className="text-xs text-muted-foreground">تحليل موسمي</div>
                  </div>
                  <div className="col-span-2 bg-background/80 backdrop-blur rounded-lg shadow-sm p-3">
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-medium">دقة التنبؤ</div>
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[95%] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ServiceSection
            icon={<Package className="h-9 w-9 text-primary" />}
            title="نظام التنبؤ بالمخازن"
            description="نساعد المستودعات والشركات اللوجستية على توقع الكميات المطلوبة مستقبلاً بناءً على بيانات المبيعات التاريخية والمتغيرات الخارجية."
            benefits={DataIdentity}
            workSteps={DataIdentiy}
            expectedResults={DataIdentit}
            highlighted={false}
          />
        </div>
      </div>
    </div>
  )
}




export function Identity() {
  return (
    <div id="invoice-assistant" className=" max-w-7xl mx-auto w-full py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <ServiceSection
            title="مساعد الفواتير الذكي"
            icon={<FileCheck className="h-9 w-9 text-primary" />}
            description="نظام معالجة تلقائي للفواتير يستخدم رؤية الكمبيوتر (Computer Vision) لقراءة البيانات واستخراجها وتحويلها إلى قيود محاسبية فورية."
            benefits={DataDesign}
            workSteps={DataDesin}
            expectedResults={DataDesig}
            highlighted={true}
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
                    <FileCheck className="h-12 w-12 text-primary" />
                  </div>
                  <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-background px-3 py-1 rounded-full text-sm font-medium">
                    جدولة
                  </div>
                  <div className="absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 bg-background px-3 py-1 rounded-full text-sm font-medium">
                    OCR
                  </div>
                  <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 bg-background px-3 py-1 rounded-full text-sm font-medium">
                    استخراج
                  </div>
                  <div className="absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-background px-3 py-1 rounded-full text-sm font-medium">
                    مطابقة
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










export function Production() {
  return (
    <div id="custom-models" className=" w-full py-16 md:py-24 bg-primary/5">
      <div className="container px-4 max-w-7xl mx-auto md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <ServiceSection
            title="تطوير نماذج ذكاء اصطناعي مخصصة"
            icon={<Cpu className="h-9 w-9 text-primary" />}
            description="نبني نماذج تعلم آلي وتوأمة رقمية (Digital Twin) مخصصة لتلبية احتياجات فريدة في منشأتك الصناعية أو التجارية لزيادة كفاءة الإنتاج."
            benefits={DataProduction}
            workSteps={DataProductio}
            expectedResults={DataProductin}
            highlighted={true}
          />

          <div className="order-1 lg:order-2">
            <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-gradient-to-bl from-primary/5 to-primary/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full max-w-md p-6">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-3 bg-background rounded-lg shadow-sm p-4 mb-3">
                      <div className="flex items-center mb-2">
                        <Cpu className="h-5 w-5 text-primary mr-2" />
                        <div className="font-bold">نماذج مخصصة</div>
                      </div>
                      <div className="space-y-1">
                        <div className="bg-muted h-3 w-full rounded"></div>
                        <div className="bg-muted h-3 w-full rounded"></div>
                        <div className="bg-muted h-3 w-3/4 rounded"></div>
                      </div>
                    </div>
                    <div className="bg-background rounded-lg shadow-sm p-3 flex flex-col items-center justify-center">
                      <div className="bg-primary/10 h-8 w-8 rounded-full flex items-center justify-center mb-2">
                        <Brain className="h-4 w-4 text-primary" />
                      </div>
                      <div className="text-xs font-medium">تعلم عميق</div>
                    </div>
                    <div className="bg-background rounded-lg shadow-sm p-3 flex flex-col items-center justify-center">
                      <div className="bg-primary/10 h-8 w-8 rounded-full flex items-center justify-center mb-2">
                        <Zap className="h-4 w-4 text-primary" />
                      </div>
                      <div className="text-xs font-medium">سرعة أداء</div>
                    </div>
                    <div className="bg-background rounded-lg shadow-sm p-3 flex flex-col items-center justify-center">
                      <div className="bg-primary/10 h-8 w-8 rounded-full flex items-center justify-center mb-2">
                        <Database className="h-4 w-4 text-primary" />
                      </div>
                      <div className="text-xs font-medium">بيانات ضخمة</div>
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
    <div className=" py-15 sm:py-[13%] lg:py-20">
      <SectionTitle title="جاهز لبدء التحول الذكي؟" description="دعنا نساعدك في دمج الذكاء الاصطناعي في صميم أعمالك وتحقيق نتائج استثنائية. تواصل معنا اليوم للحصول على استشارة تقنية مجانية." />
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-4 mt-5">
        <Link href="/contact-us">
          <Button size="lg">
            احصل على استشارة تقنية مجانية
            <ArrowRight className="h-4 w-4 mr-1" />
          </Button>
        </Link>
        <Link href="/about-us">
          <button className="flex items-center justify-center sm:w-fit w-full border border-muted-foreground/20 bg-background py-2 px-5 rounded-md gap-3 hover:bg-accent hover:text-white ">
            تعرف على حلولنا
          </button>
        </Link>
      </div>
    </div>
  )
}
