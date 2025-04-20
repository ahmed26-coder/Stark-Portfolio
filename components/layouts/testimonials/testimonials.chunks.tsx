import SectionTitle from '@/components/shared/section-title'
import { ArrowRight, Award, BarChart, MessageSquare, PenTool, Star, TrendingUp, Users, Zap } from 'lucide-react';
import { DataPride } from "../../../constants"
import React from 'react'

export function Clients() {
    const DataClients = [
        {
            id: "1",
            quote: "فريق ctrl p قدم لنا هوية بصرية مميزة ساعدتنا على التميز في سوق مزدحم بالمنافسين. النتائج تجاوزت توقعاتنا بكثير.",
            name: "أحمد الشمري",
            position: "المدير التنفيذي، شركة هورايزن للتقنية",
            company: "هورايزن للتقنية",
            industry: "التكنولوجيا",
            rating: 5,
            icon: <Award className="h-10 w-10 text-primary" />,
        },
        {
            id: "2",
            quote: "استراتيجية التسويق الرقمي التي طورها فريق ctrl p ساعدتنا على زيادة مبيعاتنا بشكل كبير وتوسيع قاعدة عملائنا.",
            name: "سارة القحطاني",
            position: "مديرة التسويق، جرين نيتشر",
            company: "جرين نيتشر",
            industry: "المنتجات الطبيعية",
            rating: 5,
            icon: <Zap className="h-10 w-10 text-primary" />,
        },
        {
            id: "3",
            quote: "الموقع الجديد الذي طوره فريق ctrl p غير تجربة المستخدم بالكامل وساهم في زيادة التسجيلات في منصتنا بنسبة 85%.",
            name: "محمد العتيبي",
            position: "مؤسس منصة تعليم",
            company: "منصة تعليم",
            industry: "التعليم الإلكتروني",
            rating: 5,
            icon: <Users className="h-10 w-10 text-primary" />,
        },
        {
            id: "4",
            quote: "حملات الإعلانات المدفوعة التي أدارها فريق ctrl p ساهمت بشكل كبير في زيادة عدد زبائننا وتعريف الناس بمطاعمنا وأطباقنا الصحية.",
            name: "نورة الدوسري",
            position: "مديرة التسويق، هيلثي فود",
            company: "هيلثي فود",
            industry: "المطاعم",
            rating: 5,
            icon: <TrendingUp className="h-10 w-10 text-primary" />,
        },
        {
            id: "5",
            quote: "فريق ctrl p نجح في تحويل حساباتنا على وسائل التواصل الاجتماعي إلى قنوات تسويقية فعالة تجذب العملاء المحتملين وتزيد من مبيعاتنا.",
            name: "خالد العمري",
            position: "مدير التسويق، لاكشري هومز",
            company: "لاكشري هومز",
            industry: "العقارات",
            rating: 5,
            icon: <BarChart className="h-10 w-10 text-primary" />,
        },
        {
            id: "6",
            quote: "الهوية البصرية الجديدة التي طورها فريق ctrl p أعطت وكالتنا مظهرًا عصريًا ومميزًا ساهم في جذب المزيد من العملاء وتعزيز مكانتنا في السوق.",
            name: "فهد السالم",
            position: "المدير العام، وكالة سفريات الشرق",
            company: "وكالة سفريات الشرق",
            industry: "السياحة والسفر",
            rating: 5,
            icon: <PenTool className="h-10 w-10 text-primary" />,
        },
    ];
    return (
        <div className=" max-w-7xl mx-auto py-12 lg:py-20">
            <SectionTitle headline='شهادات مميزة' title='ما يميزنا في نظر عملائنا' />
            <div className=" grid gap-10 md:grid-cols-2 lg:grid-cols-3 mt-15 mx-5">
                {DataClients.map((item) => (
                    <article key={item.id} className="bg-background rounded-xl p-6 border relative">
                        <div className="absolute top-0 right-8 transform -translate-y-1/2 inline-flex items-center justify-center w-12 h-12 rounded-full bg-background border">
                            {item.icon}
                        </div>
                        <div className="pt-6">
                            <div className="flex mb-4">
                                {Array.from({ length: item.rating }).map((_, i) => (
                                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                            <p className="text-muted-foreground mb-6">{item.quote}</p>
                            <div className="flex gap-2 items-center">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                                    <span className="font-bold text-primary">{item.name.charAt(0)}</span>
                                </div>
                                <div>
                                    <h4 className="font-bold">{item.name}</h4>
                                    <p className="text-sm text-muted-foreground">{item.position}</p>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium">{item.company}</span>
                                    <span className="text-xs bg-primary/10 px-2 py-1 rounded-full">{item.industry}</span>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}




export  function Pride() {

    return (
        <div className=" max-w-7xl mx-auto py-12 lg:py-20">
            <SectionTitle headline='عملاؤنا' title='نفخر بالعمل مع' description='نعمل مع مجموعة متنوعة من العملاء في مختلف القطاعات' />
            <div className="grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-6 gap-5 items-center mt-10 mx-5 ">
                {DataPride.map((text, index) => (
                    <article key={index} className="flex items-center justify-center p-6 bg-muted/50 rounded-lg border hover:border-primary/20 transition-colors">
                        <h3 className="text-center font-medium">{text}</h3>
                    </article>
                ))}
            </div>
        </div>
    )
}




export  function Experience() {
  return (
    <div className=" max-w-7xl lg:mx-auto text-center py-12 lg:py-20 mx-5">
      <SectionTitle headline='شارك تجربتك' title='هل انت أحد عملائنا؟' description='نحن نقدر آراءك وتجاربك معنا. شارك قصة نجاحك وكيف ساعدناك في تحقيق أهدافك التسويقية' />
      <button className=" sm:w-fit w-[70%] flex gap-4 items-center bg-primary hover:bg-primary/90 text-white py-2 px-5 rounded-md text-lg mt-10 mx-auto">شارك تجربتك معنا <MessageSquare className="h-5 w-5 mr-1" /></button>
    </div>
  )
}



export function Similartestimonials() {
    return (
      <div className=" bg-primary/5 py-15 sm:py-[13%] lg:py-20">
        <SectionTitle title="هل أنت جاهز لتحقيق نتائج مماثلة؟" description="دعنا نساعدك في تحقيق أهدافك التسويقية وتنمية أعمالك. تواصل معنا اليوم للحصول على استشارة مجانية." />
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-4 mt-5">
          <button className="flex items-center justify-center sm:w-fit w-[70%] bg-primary text-white py-2 px-5 hover:bg-primary/90 rounded-md gap-3">
            احصل على استشارة مجانية
            <ArrowRight className="h-4 w-4 mr-1" />
          </button>
          <button className="flex items-center justify-center sm:w-fit w-[70%] border border-muted-foreground/20 bg-white py-2 px-5 rounded-md gap-3 hover:bg-accent hover:text-white ">
             تعرف على المزيد من خدماتنا
          </button>
        </div>
      </div>
    )
  }
