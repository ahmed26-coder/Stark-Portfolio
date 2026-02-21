import SectionTitle from "@/components/shared/section-title";
import { DataAbout, status } from "../../../constants"
import { PenTool, Users, FileText, Printer, CheckCircle, ArrowRight, Target, Layers, Zap, TrendingUp, Calendar, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Brain, ChevronLeft, Globe, Cpu, BarChart } from "lucide-react";
import React from "react";
import BookingForm, { CarouselSize } from "./page.client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { supabase } from "@/lib/supabase";


export function HeroSection({ children }: { children: React.ReactNode }) {
    return (
        <main className="py-12 md:py-16 xl:py-36 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10 z-0" aria-hidden="true"></div>

            <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
                <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-float-space-1"></div>
                <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-secondary/10 blur-3xl animate-float-space-2"></div>

                <div className="absolute top-[18%] left-[12%] w-6 h-6 rounded-full bg-secondary/30 animate-float-space-3"></div>
                <div className="absolute top-[42%] left-[22%] w-2 h-2 rounded-full bg-primary/35 animate-float-space-2"></div>
                <div className="absolute top-[28%] right-[18%] w-3 h-3 rounded-full bg-primary/30 animate-float-space-1"></div>
                <div className="absolute top-[65%] right-[35%] w-1.5 h-1.5 rounded-full bg-secondary/35 animate-float-space-3"></div>
                <div className="absolute bottom-[22%] right-[26%] w-8 h-8 rounded-full bg-primary/20 animate-float-space-2"></div>
                <div className="absolute bottom-[14%] left-[18%] w-4 h-4 rounded-full bg-secondary/25 animate-float-space-1"></div>

                <div className="absolute top-[22%] right-[28%] w-20 h-20 border-2 border-primary/20 rounded-lg transform rotate-45 animate-float-space-1"></div>
                <div className="absolute top-[58%] left-[10%] w-14 h-14 border border-secondary/25 rounded-lg transform rotate-12 animate-float-space-2"></div>
                <div className="absolute bottom-[30%] left-[32%] w-16 h-16 border-2 border-secondary/30 rounded-full animate-float-space-3"></div>
                <div className="absolute top-[72%] right-[20%] w-12 h-12 bg-secondary/10 rounded-md transform -rotate-12 animate-float-space-2"></div>
                <div className="absolute top-[10%] right-[8%] w-9 h-9 bg-primary/10 rounded-md transform rotate-12 animate-float-space-3"></div>

                <div className="absolute top-[34%] left-[45%] w-40 h-40 rounded-full bg-accent/10 blur-3xl animate-float-space-3"></div>
                <div className="absolute bottom-[10%] right-[10%] w-56 h-56 rounded-full bg-secondary/10 blur-3xl animate-float-space-1"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">{children}</div>
        </main>
    );
}

export function HeroStatus() {

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-10 text-center">
            {status.map((st, idx) => (
                <div
                    key={idx}
                    className="p-4 rounded-lg bg-card/80 backdrop-blur border border-border relative overflow-hidden group">
                    <div className="absolute inset-0 bg-secondary/5 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg"></div>
                    <div className="relative z-10">
                        <div className="text-3xl font-bold text-primary">{st.title}</div>
                        <div className="text-sm text-muted-foreground">
                            {st.description}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export function Services() {
    const DataServices = [
        {
            id: "1",
            icon: <Brain className="h-10 w-10 text-primary" />,
            title: "ذكاء اصطناعي متخصص",
            description: "نطور أنظمة ذكاء اصطناعي متخصصة للقطاعات الطبية والتمريضية والهندسية بدقة تناهز 99%.",
            features: [
                "تشخيص طبي ذكي",
                "محاكاة هندسية",
                "تحليل بيانات",
                "نماذج مخصصة"
            ],
            button: " المزيد من التفاصيل"
        },
        {
            id: "2",
            icon: <PenTool size={35} />,
            title: "تصميم الهوية البصرية الذكية",
            description: "تصميم شعارات وهويات بصرية تعكس الابتكار التقني لشركتك وتميزها عن المنافسين",
            features: [
                "تصميم الشعارات",
                "نظام الألوان التقني",
                "الخطوط والطباعة",
                "دليل الهوية البصرية",
            ],
            button: " المزيد من التفاصيل"
        },
        {
            id: "3",
            icon: <Globe size={35} />,
            title: "تطوير المنصات الذكية",
            description: "تصميم وتطوير منصات إلكترونية مدعومة بالذكاء الاصطناعي تعزز تجربة المستخدم",
            features: [
                "مواقع متجاوبة",
                "تكامل مع الـ AI",
                "تجربة مستخدم مميزة",
                "تحليل البيانات الفوري",
            ],
            button: " المزيد من التفاصيل"
        },
        {
            id: "4",
            icon: <Users size={35} />,
            title: "إدارة المجتمع الرقمي",
            description: "إدارة احترافية لحضورك الرقمي مع محتوى تقني يجذب الجمهور المستهدف",
            features: [
                "إنشاء المحتوى التقني",
                "جدولة المنشورات",
                "التفاعل الذكي",
                "تحليل الأداء",
            ],
            button: " المزيد من التفاصيل"
        },
        {
            id: "5",
            icon: <FileText size={35} />,
            title: "تحليل وكتابة المحتوى",
            description: "كتابة محتوى تقني إبداعي يعزز من تواجدك الرقمي ويشرح حلولك الذكية ببساطة",
            features: [
                "مقالات تقنية",
                "نشرات بريدية",
                "نصوص إعلانية ذكية",
                "محتوى تعليمي",
            ],
            button: " المزيد من التفاصيل"
        },
        {
            id: "6",
            icon: <Printer size={35} />,
            title: "خدمات الطباعة التقنية",
            description: "طباعة مواد تعريفية عالية الجودة لمشاريعك التقنية وهويتك بذكاء",
            features: [
                "بطاقات العمل الذكية",
                "البروشورات التقنية",
                "اللافتات الإعلانية",
                "المواد الترويجية",
            ],
            button: " المزيد من التفاصيل"
        },
    ];

    return (
        <>
            <div className=" max-w-7xl mx-[5%] lg:mx-auto py-12">
                <SectionTitle headline="خدماتنا" title="حلول ذكية متكاملة" description="نقدم مجموعة شاملة من خدمات الذكاء الاصطناعي المصممة خصيصًا لتلبية احتياجات عملك وتحقيق أهدافك التقنية" highlighted={true} />

                {/* Cards */}
                <div className=" gap-10 grid grid-cols-1 mt-[4%] mb-[10%] sm:grid-cols-2 lg:grid-cols-3">
                    {DataServices.map((item) => (
                        <article key={item.id} className="group bg-gradient-to-br hover:from-secondary/5 to-transparent hover:shadow px-[5%] py-[7%] border-muted-foreground/20 border-1 rounded-xl">

                            <span className=" bg-primary/15 text-primary w-[60px] h-[60px] flex items-center justify-center rounded-full">
                                {item.icon}
                            </span>
                            <h2 className=" font-bold text-xl my-3">{item.title}</h2>
                            <p className=" text-muted-foreground mb-4 ">{item.description}</p>
                            {item.features.map((f, idx) => (
                                <p key={idx} className=" my-2 flex items-center"><CheckCircle className=" text-secondary w-[4.5%] ml-3" />{f}</p>
                            ))}
                        </article>
                    ))}
                </div>
            </div>
        </>
    );
}


export function Work() {
    const Datasteps = [
        {
            id: "1",
            step: "1",
            title: "الاستماع والفهم",
            description: "نستمع إلى احتياجاتك وأهدافك ونفهم تحدياتك وفرصك",
            icon: <Target className="h-8 w-8 text-primary" />,
        },
        {
            id: "2",
            step: "2",
            title: "التخطيط والاستراتيجية",
            description: "نطور استراتيجية مخصصة تناسب أهدافك وميزانيتك",
            icon: <Layers className="h-8 w-8 text-primary" />,
        },
        {
            id: "3",
            step: "3",
            title: "التنفيذ والإبداع",
            description: "ننفذ الاستراتيجية بأعلى مستويات الإبداع والجودة",
            icon: <Zap className="h-8 w-8 text-primary" />,
        },
        {
            id: "4",
            step: "4",
            title: "القياس والتحسين",
            description: "نقيس النتائج ونحسن الأداء باستمرار لتحقيق أفضل النتائج",
            icon: <TrendingUp className="h-8 w-8 text-primary" />,
        },
    ];
    return (
        < div className=" bg-primary/5 py-12 sm:py-[13%] lg:py-20" >
            <div className=" max-w-7xl mx-auto">
                <SectionTitle headline="منهجية العمل" title="كيف نعمل معك" description="نتبع منهجية عمل واضحة ومنظمة لضمان تحقيق أفضل النتائج لعملائنا" highlighted={true} />
                <div className="relative mt-[4%] mx-[5%]">
                    <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary/20 transform -translate-y-1/2 z-0"></div>
                    <div className="grid gap-8 md:grid-cols-4">
                        {Datasteps.map((step) => (
                            <article key={step.id} className="relative z-10">
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 rounded-full bg-background border-4 border-secondary/20 flex items-center justify-center mb-4 relative">
                                        <div className="absolute inset-0 rounded-full bg-secondary/10 transform scale-0 hover:scale-100 transition-transform duration-300"></div>
                                        <span className="text-xl font-bold relative z-10">{step.step}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-muted-foreground mt-5 text-center">{step.description}</p>
                                    <div className="mt-4 rounded-full bg-primary/10 p-3"> <span className="h-8 w-8 text-primary">{step.icon}</span></div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
                <Link href="/about-us">
                    <Button className=" flex items-center py-2 px-5 rounded-md gap-5 mx-auto mt-[5%]">تعرف علي منهجيتنا بالتفصيل <ArrowRight size={20} /></Button>
                </Link>
            </div>
        </div >
    );
}


export function Marketing() {
    return (
        <section className="max-w-7xl mx-auto w-full py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">

            {/* Svg */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
            <div className="absolute -top-16 -left-16 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="container px-4 md:px-6">
                <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
                    <div className="relative">
                        <div className="aspect-video rounded-xl overflow-hidden bg-muted relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative w-48 h-48">
                                    <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-lg transform rotate-45"></div>
                                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/20 rounded-full"></div>
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-background rounded-lg border-2 border-primary/30 flex items-center justify-center">
                                        <Printer className="h-12 w-12 text-primary" />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-sm rounded-lg p-4 border">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Calendar className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <div className="font-bold">تأسست عام 2025</div>
                                        <div className="text-sm text-muted-foreground">1 سنوات من الخبرة والإبداع</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* text */}
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm">من نحن</div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-accent">شركة ذكاء اصطناعي رائدة في المنطقة</h2>
                            <p className="text-muted-foreground text-lg">
                                تأسست Stark AI في عام 2025 بهدف تقديم حلول ذكاء اصطناعي مبتكرة تساعد الشركات على التحول الرقمي الذكي وتحقيق أهدافها.
                                نحن فريق من المحترفين المتخصصين في مجالات هندسة البيانات والتعلم الآلي.
                            </p>
                            <p className="text-muted-foreground text-lg">
                                نؤمن بأن كل مؤسسة فريدة وتستحق حلولاً ذكية مخصصة تناسب أهدافها وتحدياتها الفنية. لذلك
                                نركز على التفاصيل ونبذل قصارى جهدنا لضمان تقديم حلول تقنية تفوق التوقعات.
                            </p>
                            <div className="pt-6 space-y-4">
                                {DataAbout.map((about) => (
                                    <article key={about.id} className="flex items-start gap-3">
                                        <div className="rounded-full bg-primary/10 p-1 mt-1">
                                            <CheckCircle className="h-4 w-4 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">{about.title}</h4>
                                            <p className="text-muted-foreground">{about.description}</p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                        <div className="flex gap-2 mt-6">
                            <Link href="/about-us"><Button size="lg">تعرف على فريقنا</Button></Link>
                            <Link href="/portfolio"><button className=" border-1 border-border py-2 px-5 rounded-md hover:bg-accent hover:text-white ">شاهد أعمالنا</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}



export function PageClient() {
    return (
        <section className=" py-10 relative overflow-hidden">
            <div className=" max-w-7xl mx-auto w-full  py-[20%] sm:py-[13%] lg:py-[6%]">
                <SectionTitle headline="آراء العملاء" title="ماذا يقول عملاؤنا" description="نحن نفخر بالعلاقات طويلة الأمد التي بنيناها مع عملائنا" highlighted={true} />
                <div className=" mt-10">
                    <CarouselSize />
                </div>
            </div>
        </section>
    )
}



export function Consultation() {
    return (
        <section className=" bg-primary/5 py-10 sm:py-16 relative overflow-hidden">
            <div className=" max-w-7xl mx-auto w-full  py-[20%] sm:py-[13%] lg:py-[6%]">
                <SectionTitle headline="اتصل بنا" highlighted={true} title="دعنا نناقش مشروعك الذكي" description="نحن هنا للإجابة على استفساراتك ومساعدتك في تحقيق أهدافك بالذكاء الاصطناعي" />
                <div className=" items-center grid gap-10 lg:mx-10 mt-10 lg:grid-cols-2 lg:gap-16">
                    <div className="space-y-6 mx-5 md:mx-10 lg:mx-0">
                        <div className="flex items-center gap-4 space-x-reverse">
                            <div className="rounded-full bg-secondary/10 p-3">
                                <Mail className="h-6 w-6 text-secondary" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">البريد الإلكتروني</h3>
                                <p className="text-muted-foreground">info@stark-ai.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 space-x-reverse">
                            <div className="rounded-full bg-secondary/10 p-3">
                                <Phone className="h-6 w-6 text-secondary" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">رقم الهاتف</h3>
                                <p className="text-muted-foreground">+966 12 345 6789</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 space-x-reverse">
                            <div className="rounded-full bg-secondary/10 p-3">
                                <MapPin className="h-6 w-6 text-secondary" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">العنوان</h3>
                                <p className="text-muted-foreground">شارع الملك فهد، الرياض، المملكة العربية السعودية</p>
                            </div>
                        </div>
                        <div className="mt-6">
                            <h3 className="text-lg font-bold mb-2">تابعنا على</h3>
                            <div className="flex mt-5 gap-4 space-x-reverse">
                                <a href="" target="_black" className="rounded-full bg-background p-2 hover:bg-primary/10"><Twitter /></a>
                                <a href="" target="_black" className="rounded-full bg-background p-2 hover:bg-primary/10"><Facebook /></a>
                                <a href="" target="_black" className="rounded-full bg-background p-2 hover:bg-primary/10"><Instagram /></a>
                                <a href="" target="_black" className="rounded-full bg-background p-2 hover:bg-primary/10"><Linkedin /></a>
                            </div>
                        </div>
                    </div>
                    <BookingForm />
                </div>
            </div>
        </section >
    )
}






const ProjectIconMap: Record<string, React.ReactNode> = {
    PenTool: <PenTool className="h-8 w-8 text-primary" />,
    BarChart: <BarChart className="h-8 w-8 text-primary" />,
    Globe: <Globe className="h-8 w-8 text-primary" />,
    Users: <Users className="h-8 w-8 text-primary" />,
    TrendingUp: <TrendingUp className="h-8 w-8 text-primary" />,
    Brain: <Brain className="h-8 w-8 text-primary" />,
    Cpu: <Cpu className="h-8 w-8 text-primary" />,
};

export async function Project({ limit = 6, showViewMore = true }: { limit?: number, showViewMore?: boolean } = {}) {
    const { data: projects, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(limit);

    if (error) {
        console.error('Error fetching projects:', error);
    }

    const displayProjects = projects || [];

    return (
        <section className=" bg-primary/5 py-10sm:py-16 relative overflow-hidden">
            <div className=" max-w-7xl mx-auto w-full  py-[20%] sm:py-[13%] lg:py-[6%]">
                <SectionTitle headline="أعمالنا" title="مشاريع ناجحة" description="نفخر بالعمل مع مجموعة متنوعة من العملاء في مختلف القطاعات" highlighted={true} />
                <div className=" mx-3 mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {displayProjects.map((project, index) => (
                        <div
                            key={project.id || index}
                            className="group relative overflow-hidden rounded-xl border bg-background transition-all hover:shadow-md"
                        >
                            <div className="p-6">
                                <div className="rounded-full bg-secondary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                                    {ProjectIconMap[project.icon_name] || <PenTool className="h-8 w-8 text-primary" />}
                                </div>
                                <div className=" sm:flex pb-4 justify-between items-center">
                                    <div className="">
                                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                        <div className="inline-block px-2 py-1 bg-primary/10 rounded-full text-xs font-medium mb-3">
                                            {project.category}
                                        </div>
                                    </div>
                                    {project.live && <Link href={project.live} className="text-primary hover:bg-primary hover:text-white border border-primary py-0 sm:py-0.5 sm:px-2.5 px-3.5 rounded-2xl ">عرض المشروع</Link>}
                                </div>
                                <p className="text-muted-foreground mb-4">{project.description}</p>
                                <div className="relative">
                                    <div className="h-40 rounded-lg bg-muted/50 overflow-hidden relative">
                                        {project.main_image ? (
                                            <Image
                                                src={project.main_image}
                                                alt={project.title}
                                                fill
                                                priority
                                                className="object-cover"
                                            />
                                        ) : (
                                            <>
                                                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/10"></div>
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="w-16 h-16 rounded-lg border-2 border-dashed border-secondary/30 flex items-center justify-center">
                                                        <div className="w-8 h-8 bg-secondary/20 rounded-md"></div>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                                <Link
                                    href={`/portfolio/${project.id}`}
                                    className="block group"
                                >
                                    <div className="mt-4 flex justify-between items-center 
                  px-2 py-2 rounded-md
                  transition-all duration-300
                  group-hover:bg-accent">

                                        <span className="text-sm text-primary font-bold transition-colors duration-300 group-hover:text-white">
                                            عرض التفاصيل
                                        </span>

                                        <ChevronLeft
                                            className="h-4 w-4 text-primary transition-all duration-300
                 group-hover:text-white
                 group-hover:-translate-x-1"
                                        />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                {showViewMore && (
                    <div className="flex justify-center mt-12">
                        <Link href="/portfolio">
                            <Button size="lg">عرض المزيد من الأعمال</Button>
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}

