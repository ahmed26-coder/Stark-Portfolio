import SectionTitle from "@/components/shared/section-title";
import { DataDistinguishes } from "../../../constants"
import Image from "next/image";
import { CheckCircle, Award, Disc2, Heart, Lightbulb, TrendingUp, ChevronLeft, Mail, Phone, MapPin } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Stagger, StaggerItem } from "@/components/shared/reveal";

export function Journey() {
    return (
        <>
            <section className=" max-w-7xl xl:mx-auto my-10 w-full py-12 md:py-24 lg:py-32 bg-background">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
                        <div className="relative">
                            <div className="absolute inset-0 rounded-2xl bg-primary/25 transform rotate-5"></div>
                            <Image
                                src="/about-us.jpg"
                                width={600}
                                height={500}
                                priority
                                alt="قصة الشركة"
                                className="relative z-10 rounded-2xl object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <div className="space-y-4 text-muted-foreground">
                                    <span className=" bg-primary/10 text-primary font-bold py-0.5 px-5 rounded-md">قصتنا</span>
                                    <h1 className=" mt-3 text-4xl font-bold text-accent">كيف بدأت رحلتنا في Stark AI</h1>
                                    <p className=" text-xl mt-4 text-muted-foreground">بدأت قصة Stark AI في عام 2025، عندما اجتمعت مجموعة من أمهر مهندسي الذكاء الاصطناعي وخبراء البيانات، يجمعهم شغف واحد: سد الفجوة بين التقنيات المتقدمة واحتياجات السوق في الشرق الأوسط.</p>
                                    <p className=" text-xl mt-4 text-muted-foreground">رؤيتنا كانت واضحة منذ اللحظة الأولى؛ تقديم حلول ذكية مخصصة لقطاعات حيوية مثل الطب، الهندسة، والمحاسبة، بعيداً عن الحلول البرمجية التقليدية والمملة.</p>
                                    <p className=" text-xl mt-4 text-muted-foreground">اسم Stark يرمز إلى القوة والوضوح، فنحن نؤمن بأن الذكاء الاصطناعي يجب أن يكون قوياً في أدائه وواضحاً في النتائج التي يحققها لأصحاب الأعمال.</p>
                                    <p className=" text-xl mt-4 text-muted-foreground">اليوم، Stark AI تقود مسيرة الابتكار الرقمي، مع فريق يضم نخبة من المتخصصين الملتزمين بقيمنا الأساسية: التميز التقني، والشفافية، وتحقيق أثر ملموس في نمو عملائنا.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export function Values() {
    const DataValues = [
        {
            id: "1",
            icon: <Disc2 size={35} />,
            title: "رسالتنا",
            description: "تمكين الشركات والمؤسسات من الاستفادة القصوى من الذكاء الاصطناعي لتحويل البيانات إلى رؤى اتخاذ قرار دقيقة، وتحسين الكفاءة التشغيلية في كافة القطاعات الحيوية.",
        },
        {
            id: "2",
            icon: <Lightbulb size={35} />,
            title: "رؤيتنا",
            description: "أن نكون القوة الدافعة للتحول الرقمي الذكي في الشرق الأوسط، وأن تصبح تقنيات Stark AI هي المعيار العالمي للحلول البرمجية المتخصصة المبنية على الذكاء الاصطناعي.",
        },
    ];

    const DataBasic = [
        {
            id: "1",
            icon: <Award size={40} />,
            title: "التميز",
            description: "نسعى دائمًا لتقديم أعلى مستويات الجودة في كل ما نقوم به",
        },
        {
            id: "2",
            icon: <TrendingUp size={40} />,
            title: "النتائج",
            description: "نركز على تحقيق نتائج ملموسة وقابلة للقياس لعملائنا",
        },
        {
            id: "3",
            icon: <Heart size={40} />,
            title: "الشغف",
            description: "نعمل بشغف وحماس لتحقيق النجاح لعملائنا ولأنفسنا",
        },
        {
            id: "4",
            icon: <CheckCircle size={40} />,
            title: "النزاهة",
            description: "نلتزم بالشفافية والصدق في جميع تعاملاتنا",
        },
    ];
    return (
        <>
            <div className="  bg-primary/5 py-15 sm:py-[13%] lg:py-20">
                <SectionTitle headline="رسالتنا وقيمنا" title="رؤية ذكية للمستقبل" description="نسعى لتغيير مشهد التكنولوجيا في المنطقة من خلال تقديم حلول ذكاء اصطناعي تحقق نتائج حقيقية وملموسة" highlighted={true} />
                <Stagger className="max-w-7xl xl:mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mx-5 lg:mx-12 mt-10">
                    {DataValues.map((item) => (
                        <StaggerItem key={item.id}>
                            <article className=" rounded-2xl bg-card border-1 border-border p-8">
                                <h1 className=" text-foreground font-bold text-3xl flex items-center gap-5"><span className="bg-primary/15 text-primary w-[55px] h-[55px] flex items-center justify-center rounded-full">{item.icon}</span>{item.title}</h1>
                                <p className=" text-lg mt-3 text-muted-foreground">{item.description}</p>
                            </article>
                        </StaggerItem>
                    ))}
                </Stagger>
                <h1 className=" text-3xl text-center my-8 font-medium text-foreground">قيمنا الأساسية</h1>
                <Stagger className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-5 lg:px-10">
                    {DataBasic.map((item) => (
                        <StaggerItem key={item.id}>
                            <article className=" w-full xl:w-[290px] shadow-sm text-center rounded-2xl bg-card border-1 border-border p-8">
                                <span className="text-primary flex justify-center">{item.icon}</span>
                                <h2 className=" text-xl text-foreground font-bold my-3 ">{item.title}</h2>
                                <p className="text-muted-foreground">{item.description}</p>
                            </article>
                        </StaggerItem>
                    ))}
                </Stagger>
            </div>
        </>
    )
}


export function Distinguishes() {

    const DataContact = [
        {
            id: "1",
            icon: <Mail size={27} />,
            title: "البريد الإلكتروني",
            description: "info@stark-ai.com",
        },
        {
            id: "2",
            icon: <Phone size={27} />,
            title: "رقم الهاتف",
            description: "+966 50 123 4567",
        },
        {
            id: "3",
            icon: <MapPin size={27} />,
            title: "العنوان",
            description: "مركز التقنية الرقمية، الرياض، المملكة العربية السعودية",
        },
    ];
    return (
        <div className=" bg-primary/5 py-15 sm:py-[13%] lg:py-20">
            <SectionTitle headline="لماذا تختارنا" title="ما يميزنا عن الآخرين" description="نقدم أكثر من مجرد خدمات تسويقية. نحن نقدم شراكة حقيقية تساعدك على تحقيق أهدافك" highlighted={true} />
            <Stagger className="max-w-7xl xl:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-5 lg:mx-12 mt-7">
                {DataDistinguishes.map((item) => (
                    <StaggerItem key={item.id}>
                        <article className=" rounded-2xl bg-card border-1 border-border p-6">
                            <h2 className=" text-xl text-foreground font-bold my-3 ">{item.title}</h2>
                            <p className="text-muted-foreground">{item.description}</p>
                        </article>
                    </StaggerItem>
                ))}
            </Stagger>
            <div className=" shadow-sm max-w-7xl xl:mx-auto space-y-8 sm:space-y-0 grid gap-8 md:grid-cols-2 items-center rounded-2xl bg-card border-1 border-border p-10 mx-5 lg:mx-12 mt-15">
                <div className="">
                    <h1 className=" text-foreground text-2xl font-bold">جاهزون للبدء في التحول الذكي؟</h1>
                    <p className=" text-muted-foreground py-4  text-lg">دعنا نناقش كيف يمكن لتقنيات Stark AI مساعدتك في تحقيق أهدافك التقنية. احصل على استشارة مجانية مع أحد خبرائنا.</p>
                    <Button size="lg">تواصل معنا الان<ChevronLeft /></Button>
                </div>
                <div className=" space-y-5">
                    <Stagger className=" space-y-5">
                        {DataContact.map((item) => (
                            <StaggerItem key={item.id}>
                                <article className=" flex gap-3">
                                    <div className="flex gap-4 items-center space-x-3 space-x-reverse">
                                        <div className="rounded-full bg-primary/10 p-2">
                                            <span className="h-5 w-5 text-primary">{item.icon}</span>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold">{item.title}</h4>
                                            <p className="text-muted-foreground">{item.description}</p>
                                        </div>
                                    </div>
                                </article>
                            </StaggerItem>
                        ))}
                    </Stagger>
                </div>
            </div>
        </div>
    )
}
