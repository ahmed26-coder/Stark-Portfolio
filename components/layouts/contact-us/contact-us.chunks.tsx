import SectionTitle from '@/components/shared/section-title'
import { DataFaq } from "../../../constants"
import React from 'react'
import { Calendar, CheckCircle, Facebook, Instagram, Linkedin, Mail, Phone, Twitter } from 'lucide-react'
import ContactForm, { BookingForm } from './contact-us.client'
import { Button } from '@/components/ui/button'
import { Stagger, StaggerItem } from '@/components/shared/reveal'

export function FAQ() {

    return (
        <div className=" max-w-7xl mx-auto py-15 sm:py-[13%] lg:py-20">
            <SectionTitle headline='الأسئله الشائعه' title='أسئلة يتم طرحها بشكل متكرر' description='إليك بعض الإجابات على الأسئلة الشائعة التي قد تكون لديك. إذا لم تجد إجابة لسؤالك، فلا تتردد في التواصل معنا مباشرة.' highlighted={true} />
            <Stagger className="max-w-3xl lg:mx-auto space-y-6 mx-5 mt-10">
                {DataFaq.map((faq, index) => (
                    <StaggerItem key={index}>
                        <article className="bg-primary/5 rounded-lg p-6">
                            <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                            <p className="text-muted-foreground">{faq.answer}</p>
                        </article>
                    </StaggerItem>
                ))}
            </Stagger>
        </div>
    )
}


export function Contactform() {
    const DataContact = [
        {
            id: "1",
            title: "البريد الإلكتروني",
            description: "info@stark-ai.com",
            icon: <Mail />,
        },
        {
            id: "2",
            title: "رقم الهاتف",
            description: "+20 11 21079983",
            icon: <Phone />,
        },
    ];

    const DataIcon = [
        {
            icon: <Phone />,
            url: "https://wa.me/201121079983"
        },
        {
            icon: <Facebook />,
            url: "https://www.facebook.com/people/Stark-Excel-Power-BI-AI-Solutions/61583014826632/"
        },
        {
            icon: <Instagram />,
            url: "https://www.instagram.com/stark_ai1/"
        },
        {
            icon: <Linkedin />,
            url: "https://www.linkedin.com/in/mohamed-ibrahim-967831187"
        },
    ];
    return (
        <div className=" grid gap-10 lg:grid-cols-2 lg:gap-16 max-w-7xl xl:mx-auto mx-8 py-16 md:py-24">
            <ContactForm />
            <div className="space-y-8">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight mb-4 ">
                        معلومات الاتصال
                    </h2>
                    <p className="text-muted-foreground mb-6 text-lg ">
                        يمكنك التواصل معنا مباشرة من خلال وسائل الاتصال التالية.
                    </p>
                </div>
                <Stagger className="space-y-4">
                    {DataContact.map((item) => (
                        <StaggerItem key={item.id}>
                            <article className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/10">
                                    <span className="text-primary text-3xl">{item.icon}</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">{item.title}</h3>
                                    <p className="text-muted-foreground" dir='ltr'>{item.description}</p>
                                </div>
                            </article>
                        </StaggerItem>
                    ))}
                </Stagger>

                <div>
                    <h3 className="text-lg font-bold mb-4">تابعنا على</h3>
                    <div className="flex items-center gap-4">
                        <Stagger className="flex items-center gap-4">
                            {DataIcon.map((social, index) => (
                                <StaggerItem key={index}>
                                    <article
                                        className="rounded-full p-3 bg-primary/10 hover:bg-primary/20 transition"
                                    >
                                        <a href={social.url} className=" text-2xl">{social.icon}</a>
                                    </article>
                                </StaggerItem>
                            ))}
                        </Stagger>
                    </div>
                </div>
                <h1 className="text-3xl font-bold mb-4">موقعنا</h1>
                
            </div>
        </div>
    )
}

export function Contactreservation() {
    const DataContact = [
        "تحليل أولي لاحتياجاتك التقنية",
        "نصائح مخصصة لدمج الذكاء الاصطناعي",
        "فرصة لطرح أسئلتك على خبير تقني",
        "استشارة مجانية بالكامل - لا توجد التزامات",
    ];
    return (
        <div className=" bg-primary/7">
            <div className=" max-w-7xl lg:mx-auto mx-5 py-16 md:py-24">
                <div className=" grid grid-cols-1 lg:mx-10 gap-10 md:grid-cols-2 items-center">
                    <div className=" space-y-3">
                        <span className="bg-primary/10 rounded-lg text-sm w-fit mx-auto px-3 py-1">جدولة مكالمة</span>
                        <h2 className=" text-3xl font-bold mt-5 text-accent">احجز استشارة مجانية</h2>
                        <p className=" text-base ">احجز مكالمة استشارية مجانية مدتها 30 دقيقة مع أحد خبرائنا لمناقشة مشروعك واحتياجاتك<br /> التقنية. سنقدم لك رؤى قيمة ونصائح مخصصة لمساعدتك في تحقيق أهدافك الذكية.</p>
                        <div className=" space-y-2">
                            <Stagger className=" space-y-2">
                                {DataContact.map((item, index) => (
                                    <StaggerItem key={index}>
                                        <article>
                                            <p className=" flex items-center gap-2"><CheckCircle size={20} className=" text-primary" />{item}</p>
                                        </article>
                                    </StaggerItem>
                                ))}
                            </Stagger>
                        </div>
                        <Button size="lg">احجز موعدًا الان<Calendar /></Button>
                    </div>
                    <BookingForm />
                    {/*<BookingForm />*/}
                </div>
            </div>
        </div>
    )
}
