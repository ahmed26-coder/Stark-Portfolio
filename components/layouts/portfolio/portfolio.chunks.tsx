import SectionTitle from "@/components/shared/section-title";
import { DataSolution, DataResults } from "../../../constants";
import {
  ArrowRight,
  Award,
  BarChart,
  CheckCircle,
  ChevronLeft,
  Globe,
  PenTool,
  Users,
  Zap,
} from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

export function Casestudy() {
  return (
    <div className=" bg-primary/5 py-15 sm:py-[13%] lg:py-20">
      <SectionTitle
        headline="دراسة حالة مميزة"
        title="كيف ساعدنا شركة هورايزن للتقنية على زيادة مبيعاتها بنسبة 150%"
        highlighted={true}
      />
      <div className=" max-w-7xl xl:mx-auto mt-15 mx-5 sm:mx-10 grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
        <div className="relative h-[400px] overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-background"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-md grid grid-cols-2 gap-6 p-6">
              <div className="relative">
                <div className="absolute top-0 left-0 bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium">
                  قبل
                </div>
                <div className="border rounded-lg bg-background/40 backdrop-blur-sm p-4 h-full">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center">
                      <span className="text-muted-foreground">شعار</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-muted rounded-full w-full"></div>
                    <div className="h-2 bg-muted rounded-full w-3/4"></div>
                    <div className="h-2 bg-muted rounded-full w-1/2"></div>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div className="text-center">
                      <div className="text-sm font-bold text-muted-foreground">
                        20%
                      </div>
                      <div className="text-xs text-muted-foreground">تحويل</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-muted-foreground">
                        500
                      </div>
                      <div className="text-xs text-muted-foreground">زيارة</div>
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
                      <PenTool className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-primary/20 rounded-full w-full"></div>
                    <div className="h-2 bg-primary/20 rounded-full w-3/4"></div>
                    <div className="h-2 bg-primary/20 rounded-full w-1/2"></div>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div className="text-center">
                      <div className="text-sm font-bold text-primary">65%</div>
                      <div className="text-xs text-muted-foreground">تحويل</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-primary">2500</div>
                      <div className="text-xs text-muted-foreground">زيارة</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="inline-block rounded-lg bg-primary/10 p-2">
              <PenTool className="h-5 w-5 text-primary" />
            </div>
            <div>
              <span className="text-sm text-muted-foreground">العميل:</span>
              <h3 className="font-bold">شركة هورايزن للتقنية</h3>
            </div>
            <div className="mr-4">
              <span className="text-sm text-muted-foreground">المجال:</span>
              <h3 className="font-bold">التكنولوجيا</h3>
            </div>
          </div>
          <div className="bg-background rounded-lg p-6 border">
            <h3 className="text-lg font-bold mb-3 flex items-center">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 ml-2">
                <span>1</span>
              </div>
              المشكلة
            </h3>
            <p className="text-muted-foreground">
              كانت شركة هورايزن للتقنية تعاني من ضعف في الهوية البصرية وعدم
              اتساقها عبر منصاتها المختلفة، مما أدى إلى صعوبة في التعرف على
              العلامة التجارية وانخفاض في ثقة العملاء. كما كانت تواجه منافسة
              شديدة في سوق التكنولوجيا المتنامي.
            </p>
          </div>
          <div className="bg-background rounded-lg p-6 border">
            <h3 className="text-lg font-bold mb-3 flex items-center">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 ml-2">
                <span>2</span>
              </div>
              الحل
            </h3>
            <p className="text-muted-foreground mb-4">
              قمنا بتطوير هوية بصرية جديدة تمامًا تعكس قيم الشركة وتطلعاتها
              المستقبلية، مع التركيز على الابتكار والموثوقية. شملت الهوية
              الجديدة:
            </p>
            <ul className="space-y-2">
              {DataSolution.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-background rounded-lg p-6 border">
            <h3 className="text-lg font-bold mb-3 flex items-center">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 ml-2">
                <span>3</span>
              </div>
              النتائج
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {DataResults.map((item) => (
                <article
                  key={item.id}
                  className="text-center p-3 bg-primary/5 rounded-lg">
                  <p className="text-2xl font-bold text-primary">
                    {item.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
            <p className="text-muted-foreground">
              أدت الهوية البصرية الجديدة إلى تحول كبير في أداء الشركة، حيث أصبحت
              أكثر تميزًا وجاذبية للعملاء. كما ساهمت في بناء ثقة أكبر مع العملاء
              الحاليين والمحتملين، مما انعكس إيجابًا على المبيعات والنمو.
            </p>
          </div>
          <Button size="lg" className=" w-full">
            عرض دراسة الحالة كاملة
          </Button>
        </div>
      </div>
    </div>
  );
}

export function Stories() {
  const DataStories = [
    {
      title: "جرين نيتشر",
      category: "التسويق الرقمي",
      industry: "المنتجات الطبيعية",
      problem: "انخفاض في المبيعات وضعف في الوعي بالعلامة التجارية",
      solution: "استراتيجية تسويق رقمي متكاملة مع حملات إعلانية مستهدفة",
      results: [
        { label: "زيادة في المبيعات", value: "+120%" },
        { label: "زيادة في الوعي بالعلامة", value: "+200%" },
      ],
      icon: <BarChart className="h-10 w-10 text-primary" />,
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
      <div className=" max-w-7xl xl:mx-auto mx-5 grid gap-8 md:grid-cols-2 mt-10">
        {DataStories.map((caseStudy, index) => (
          <article
            key={index}
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
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    {caseStudy.results.map((result, idx) => (
                      <div
                        key={idx}
                        className="text-center p-3 bg-primary/5 rounded-lg">
                        <p className="text-xl font-bold text-primary">
                          {result.value}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {result.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <button className=" flex gap-4 items-center justify-center hover:bg-accent py-2 border-1 border-muted-foreground/20 rounded-md hover:text-white w-full">
                عرض دراسة الحالة كاملة
                <ChevronLeft className="h-4 w-4 mr-1" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export function Clients() {
  const DataClients = [
    {
      id: "1",
      icon: <Award />,
      description:
        "فريق ctrl p قدم لنا هوية بصرية مميزة ساعدتنا على التميز في سوق مزدحم بالمنافسين. النتائج تجاوزت توقعاتنا بكثير.",
      title: "أحمد الشمري",
      responsible: "المدير التنفيذي، شركة هورايزن للتقنية",
    },
    {
      id: "2",
      icon: <Zap />,
      description:
        "استراتيجية التسويق الرقمي التي طورها فريق ctrl p ساعدتنا على زيادة مبيعاتنا بشكل كبير وتوسيع قاعدة عملائنا.",
      title: "سارة القحطاني",
      responsible: "مديرة التسويق، جرين نيتشر",
    },
    {
      id: "3",
      icon: <Users />,
      description:
        "الموقع الجديد الذي طوره فريق ctrl p غير تجربة المستخدم بالكامل وساهم في زيادة التسجيلات في منصتنا بنسبة 85%.",
      title: "محمد العتيبي",
      responsible: "مؤسس منصة تعليم",
    },
  ];
  return (
    <div className=" bg-primary/5 py-15 sm:py-[13%] lg:py-20">
      <SectionTitle
        headline="آراء العملاء"
        title="ماذا يقول عملاؤنا عن تجربتهم معنا"
        highlighted={true}
      />
      <div className=" max-w-7xl xl:mx-auto mx-5 grid gap-8 md:grid-cols-3 mt-15">
        {DataClients.map((item) => (
          <article
            key={item.id}
            className="bg-background rounded-xl p-6 border relative">
            <div className="absolute top-0 text-primary right-8 transform -translate-y-1/2 inline-flex items-center justify-center w-12 h-12 rounded-full bg-background border">
              {item.icon}
            </div>
            <div className="pt-6">
              <p className="text-muted-foreground mb-6">{item.description}</p>
              <div className="flex items-center">
                <div>
                  <h4 className="font-bold">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {item.responsible}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export function SimilarPortfolio() {
  return (
    <div className=" bg-secondary/4 py-15 sm:py-[13%] lg:py-20">
      <SectionTitle
        highlighted={false}
        title="هل أنت جاهز لتحقيق نتائج مماثلة؟"
        description="دعنا نساعدك في تحقيق أهدافك التسويقية وتنمية أعمالك. تواصل معنا اليوم للحصول على استشارة مجانيه."
      />
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-4 mt-5">
        <Button size="lg">
          احصل على استشارة مجانية
          <ArrowRight className="h-4 w-4 mr-1" />
        </Button>
        <button className="flex items-center justify-center sm:w-fit w-[70%] border border-muted-foreground/20 hover:bg-accent hover:text-white bg-white py-2 px-5 rounded-md gap-3">
          تعرف على المزيد عن خدماتنا
        </button>
      </div>
    </div>
  );
}
