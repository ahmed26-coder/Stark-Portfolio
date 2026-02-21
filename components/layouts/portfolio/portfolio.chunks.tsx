import SectionTitle from "@/components/shared/section-title";

import {
  ArrowRight,
  CheckCircle,
  ChevronLeft,
  Globe,
  Cpu,
  Brain,
} from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Stagger, StaggerItem } from "@/components/shared/reveal";


export function Stories() {
  const DataStories = [
    {
      title: "مجموعة بن لادن الهندسية",
      category: "الحلول الهندسية الذكية",
      industry: "الهندسة والإنشاءات",
      problem: "صعوبة في التنبؤ باحتياجات المواد وهدر في الموارد",
      solution: "نظام محاكاة وتنبؤ هندسي مبني على الذكاء الاصطناعي",
      results: [
        { label: "تقليل الهدر", value: "+30%" },
        { label: "دقة التنفيذ", value: "+95%" },
      ],
      icon: <Cpu className="h-10 w-10 text-primary" />,
    },
    {
      title: "منصة تعليم",
      category: "تطوير المواقع",
      industry: "التعليم الإلكتروني",
      problem: "موقع بطيء وغير متوافق مع الأجهزة المحمولة مع تجربة مستخدم سيئة",
      solution:
        "تطوير موقع جديد بالكامل مع التركيز على سرعة التحميل وتجربة المستخدم",
      results: [
        { label: "زيادة في معدل التحويل", value: "+85%" },
        { label: "انخفاض في معدل الارتداد", value: "-60%" },
      ],
      icon: <Globe className="h-10 w-10 text-primary" />,
    },
  ];
  return (
    <div className=" py-15 sm:py-[13%] lg:py-20">
      <SectionTitle
        headline="المزيد من دراسات الحالة"
        highlighted={true}
        title="قصص نجاح أخرى"
        description="استكشف المزيد من المشاريع الناجحة التي ساعدنا فيها عملائنا على تحقيق أهدافهم"
      />
      <Stagger className=" max-w-7xl xl:mx-auto mx-5 grid gap-8 md:grid-cols-2 mt-10">
        {DataStories.map((caseStudy, index) => (
          <StaggerItem key={index}>
            <article
              className="relative overflow-hidden rounded-xl border bg-background transition-all hover:shadow-md">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                    {caseStudy.icon}
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-xs font-medium mb-1">
                      {caseStudy.category}
                    </span>
                    <h3 className="text-xl font-bold">{caseStudy.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {caseStudy.industry}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-bold text-muted-foreground mb-1">
                      المشكلة:
                    </h4>
                    <p>{caseStudy.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-muted-foreground mb-1">
                      الحل:
                    </h4>
                    <p>{caseStudy.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-muted-foreground mb-1">
                      النتائج:
                    </h4>
                    <Stagger className="grid grid-cols-2 gap-3 mt-2">
                      {caseStudy.results.map((result, idx) => (
                        <StaggerItem
                          key={idx}
                          className="text-center p-3 bg-primary/5 rounded-lg"
                        >
                          <p className="text-xl font-bold text-primary">
                            {result.value}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {result.label}
                          </p>
                        </StaggerItem>
                      ))}
                    </Stagger>
                  </div>
                </div>

                <button className=" flex gap-4 items-center justify-center hover:bg-accent py-2 border-1 border-muted-foreground/20 rounded-md hover:text-white w-full">
                  عرض دراسة الحالة كاملة
                  <ChevronLeft className="h-4 w-4 mr-1" />
                </button>
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}




export function Learn() {
  return (
    <section className="w-full py-16 md:py-24 bg-primary/10">
      <div className=" max-w-7xl mx-auto container px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm mb-4">دراسة حالة مميزة</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
            كيف ساعدنا &quot;مجموعة زاد&quot; على خفض التكاليف
            <br />
            بنسبة <span className="text-primary">40%</span> وزيادة الوصول بنسبة <span className="text-primary">300%</span>
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Visual representation */}
          <div className="relative h-[400px] overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-background"></div>

            {/* Before/After visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full max-w-md grid grid-cols-2 gap-6 p-6">
                <div className="relative">
                  <div className="absolute top-0 left-0 bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium">
                    قبل
                  </div>
                  <div className="border rounded-lg bg-background/40 backdrop-blur-sm p-4 h-full">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center">
                        <span className="text-muted-foreground">بيانات</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-muted rounded-full w-full"></div>
                      <div className="h-2 bg-muted rounded-full w-3/4"></div>
                      <div className="h-2 bg-muted rounded-full w-1/2"></div>
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div className="text-center">
                        <div className="text-sm font-bold text-muted-foreground">15%</div>
                        <div className="text-xs text-muted-foreground">كفاءة</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-bold text-muted-foreground">1.2k</div>
                        <div className="text-xs text-muted-foreground">تفاعل</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute top-0 left-0 bg-primary/20 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium">
                    بعد
                  </div>
                  <div className="border-2 border-primary/20 rounded-lg bg-background/60 backdrop-blur-sm p-4 h-full shadow-sm">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Brain className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-primary/20 rounded-full w-full"></div>
                      <div className="h-2 bg-primary/20 rounded-full w-3/4"></div>
                      <div className="h-2 bg-primary/20 rounded-full w-1/2"></div>
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div className="text-center">
                        <div className="text-sm font-bold text-primary">85%</div>
                        <div className="text-xs text-muted-foreground">كفاءة</div>
                      </div>
                      <div className="text-center">
                        <div className="text-center">
                          <div className="text-sm font-bold text-primary">5.8k</div>
                          <div className="text-xs text-muted-foreground">تفاعل</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case study content */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="inline-block rounded-lg bg-primary/10 p-2">
                <Brain className="h-5 w-5 text-primary" />
              </div>
              <div>
                <span className="text-sm text-muted-foreground">العميل:</span>
                <h3 className="font-bold">مجموعة زاد التجارية</h3>
              </div>
              <div className="mr-4">
                <span className="text-sm text-muted-foreground">المجال:</span>
                <h3 className="font-bold">التجارة والتجزئة</h3>
              </div>
            </div>

            {/* Problem */}
            <div className="bg-background rounded-lg p-6 border">
              <h3 className="text-lg font-bold mb-3 flex items-center">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 ml-2">
                  <span>1</span>
                </div>
                المشكلة
              </h3>
              <p className="text-muted-foreground text-sm">
                كانت مجموعة زاد تواجه صعوبة في تحليل بيانات عملائها الضخمة، مما أدى لتبديد ميزانية التسويق في حملات غير مستهدفة، بالإضافة إلى تكاليف تشغيلية مرتفعة نتيجة العمليات اليدوية في إدارة المخزون وتوقع الطلب.
              </p>
            </div>

            {/* Solution */}
            <div className="bg-background rounded-lg p-6 border">
              <h3 className="text-lg font-bold mb-3 flex items-center">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 ml-2">
                  <span>2</span>
                </div>
                الحل
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                قمنا بتطبيق نظام Stark AI المتكامل الذي يربط بين تحليل البيانات وأتمتة العمليات التسويقية، مما خلق تجربة مستخدم مخصصة وذكية:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  "تحليل سلوك المستهلك بالذكاء الاصطناعي",
                  "أتمتة الحملات الإعلانية الموسمية",
                  "نظام توقع الطلب وخفض الهدر",
                  "تحسين تجربة العميل الرقمية (UI/UX)",
                  "تكامل ذكي مع منصات التواصل الاجتماعي",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-xs">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Results */}
            <div className="bg-background rounded-lg p-6 border">
              <h3 className="text-lg font-bold mb-3 flex items-center">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 ml-2">
                  <span>3</span>
                </div>
                النتائج
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="text-center p-3 bg-primary/5 rounded-lg">
                  <p className="text-2xl font-bold text-primary">+300%</p>
                  <p className="text-[10px] text-muted-foreground">زيادة في الوصول</p>
                </div>
                <div className="text-center p-3 bg-primary/5 rounded-lg">
                  <p className="text-2xl font-bold text-primary">+85%</p>
                  <p className="text-[10px] text-muted-foreground">معدل التحويل</p>
                </div>
                <div className="text-center p-3 bg-primary/5 rounded-lg">
                  <p className="text-2xl font-bold text-primary">-40%</p>
                  <p className="text-[10px] text-muted-foreground">التكاليف التشغيلية</p>
                </div>
                <div className="text-center p-3 bg-primary/5 rounded-lg">
                  <p className="text-2xl font-bold text-primary">+200%</p>
                  <p className="text-[10px] text-muted-foreground">نمو المبيعات</p>
                </div>
              </div>
              <p className="text-muted-foreground text-xs">
                تحول العمل من التخمين إلى اتخاذ قرارات مبنية على البيانات اللحظية، مما ساهم في تحقيق استدامة مالية ونمو متسارع في فترة قياسية.
              </p>
            </div>
            <Link href="/contact-us">
              <Button className="w-full">عرض دراسة الحالة كاملة</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}



export function SimilarPortfolio() {
  return (
    <div className=" bg-secondary/4 py-15 sm:py-[13%] lg:py-20">
      <SectionTitle
        highlighted={false}
        title="هل أنت جاهز لتحقيق نتائج مماثلة؟"
        description="دعنا نساعدك في دمج الذكاء الاصطناعي في صميم أعمالك وتحقيق نتائج استثنائية. تواصل معنا اليوم للحصول على استشارة تقنية مجانية."
      />
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-4 mt-5">
        <Button size="lg">
          احصل على استشارة تقنية مجانية
          <ArrowRight className="h-4 w-4 mr-1" />
        </Button>
        <button className="flex items-center justify-center sm:w-fit w-[70%] border border-muted-foreground/20 hover:bg-accent hover:text-white bg-background py-2 px-5 rounded-md gap-3">
          تعرف على حلولنا الذكية
        </button>
      </div>
    </div>
  );
}
