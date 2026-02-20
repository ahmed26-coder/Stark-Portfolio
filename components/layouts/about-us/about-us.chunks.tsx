import SectionTitle from "@/components/shared/section-title";
import { DataDistinguishes } from "../../../constants"
import { CheckCircle, Award, Disc2, Heart, Lightbulb, TrendingUp, ChevronLeft, Mail, Phone, MapPin } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

export function Journey() {
    return (
        <>
            <div className=" max-w-7xl xl:mx-auto my-15 mx-5">
                <span className=" bg-primary/10 py-0.5 px-5 rounded-md">قصتنا</span>
                <h1 className=" mt-3 text-4xl font-bold text-accent">كيف بدأت رحلتنا</h1>
                <p className=" text-xl mt-4 text-muted-foreground">بدأت قصة &quot;ctrl p&quot; في عام 2015 عندما اجتمع أربعة من المتخصصين في مجال التسويق والتصميم، يجمعهم شغف مشترك: تقديم حلول تسويقية مبتكرة تتجاوز التقليدية.</p>
                <p className=" text-xl mt-4 text-muted-foreground">في بداية الأمر، كنا فريقًا صغيرًا يعمل من مكتب متواضع في الرياض، لكن رؤيتنا كانت كبيرة. أردنا إنشاء وكالة تسويق تفهم حقًا احتياجات العملاء المحليين وتقدم لهم حلولًا مخصصة تناسب السوق العربي.</p>
                <p className=" text-xl mt-4 text-muted-foreground">اخترنا اسم &quot;ctrl p&quot; تيمنًا بأمر الطباعة في الحاسوب، لأننا نؤمن بأن التسويق الناجح يشبه الطباعة - يحول الأفكار المجردة إلى واقع ملموس يمكن للجميع رؤيته والتفاعل معه.</p>
                <p className=" text-xl mt-4 text-muted-foreground">مع مرور السنوات، نمت الوكالة لتضم أكثر من 25 متخصصًا في مختلف مجالات التسويق الرقمي، وأصبحنا من الوكالات الرائدة في المنطقة، مع الحفاظ على قيمنا الأساسية: الإبداع، الشفافية، والتركيز على النتائج.</p>
            </div>
        </>
    )
}

export function Values() {
    const DataValues = [
        {
            id: "1",
            icon: <Disc2 size={35} />,
            title: "رسالتنا",
            description: "مساعدة الشركات على النمو وتحقيق أهدافها من خلال استراتيجيات تسويقية مبتكرة ومخصصة تناسب احتياجاتها وتتماشى مع ثقافة المنطقة. نسعى لأن نكون الشريك الموثوق الذي يساعد العملاء على التميز في سوق تنافسي متغير باستمرار.",
        },
        {
            id: "2",
            icon: <Lightbulb size={35} />,
            title: "رؤيتنا",
            description: "أن نصبح الوكالة الرائدة في مجال التسويق الرقمي في الشرق الأوسط، معروفين بالابتكار والجودة والنتائج المتميزة. نطمح لتشكيل مستقبل التسويق الرقمي في المنطقة من خلال تبني أحدث التقنيات والاستراتيجيات العالمية وتكييفها لتناسب السوق المحلي.",
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
                <SectionTitle headline="رسالتنا وقيمنا" title="ما نؤمن به" description="نسعى لتغيير مشهد التسويق الرقمي في المنطقة من خلال تقديم حلول مبتكرة تحقق نتائج ملموسة" highlighted={true} />
                <div className="max-w-7xl xl:mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mx-5 lg:mx-12 mt-10">
                    {DataValues.map((item) => (
                        <article key={item.id} className=" rounded-2xl bg-white border-1 border-muted-foreground/15 p-8">
                            <h1 className=" text-accent font-bold text-3xl flex items-center gap-5"><span className="bg-primary/15 text-primary w-[55px] h-[55px] flex items-center justify-center rounded-full">{item.icon}</span>{item.title}</h1>
                            <p className=" text-lg mt-3 text-muted-foreground">{item.description}</p>
                        </article>
                    ))}
                </div>
                <h1 className=" text-3xl text-center my-8 font-medium text-accent">قيمنا الأساسية</h1>
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-5 lg:px-10">
                    {DataBasic.map((item) => (
                        <article key={item.id} className=" w-full xl:w-[290px] shadow-sm text-center rounded-2xl bg-white border-1 border-muted-foreground/15 p-8">
                            <span className="text-primary flex justify-center">{item.icon}</span>
                            <h2 className=" text-xl text-accent font-bold my-3 ">{item.title}</h2>
                            <p className="text-muted-foreground">{item.description}</p>
                        </article>
                    ))}
                </div>
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
            description: "info@ctrlp.com",
        },
        {
            id: "2",
            icon: <Phone size={27} />,
            title: "رقم الهاتف",
            description: "+966 12 345 6789",
        },
        {
            id: "3",
            icon: <MapPin size={27} />,
            title: "العنوان",
            description: "شارع الملك فهد، الرياض، المملكة العربية السعودية",
        },
    ];
    return (
        <div className=" bg-primary/5 py-15 sm:py-[13%] lg:py-20">
            <SectionTitle headline="لماذا تختارنا" title="ما يميزنا عن الآخرين" description="نقدم أكثر من مجرد خدمات تسويقية. نحن نقدم شراكة حقيقية تساعدك على تحقيق أهدافك" highlighted={true} />
            <div className="max-w-7xl xl:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-5 lg:mx-12 mt-7">
                {DataDistinguishes.map((item) => (
                    <article key={item.id} className=" rounded-2xl bg-white border-1 border-muted-foreground/15 p-6">
                        <h2 className=" text-xl text-accent font-bold my-3 ">{item.title}</h2>
                        <p className="text-muted-foreground">{item.description}</p>
                    </article>
                ))}
            </div>
            <div className=" shadow-sm max-w-7xl xl:mx-auto space-y-8 sm:space-y-0 grid gap-8 md:grid-cols-2 items-center rounded-2xl bg-white border-1 border-muted-foreground/15 p-10 mx-5 lg:mx-12 mt-15">
                <div className="">
                    <h1 className=" text-accent text-2xl font-bold">جاهزون للبدء في مشروعك التالي؟</h1>
                    <p className=" text-muted-foreground py-4  text-lg">دعنا نناقش كيف يمكننا مساعدتك في تحقيق أهدافك التسويقية. احصل على استشارة مجانية أحد خبرائنا.</p>
                    <Button size="lg">تواصل معنا الان<ChevronLeft /></Button>
                </div>
                <div className=" space-y-5">
                    {DataContact.map((item) => (
                        <article key={item.id} className=" flex gap-3">
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
                    ))}
                </div>
            </div>
        </div>
    )
}
