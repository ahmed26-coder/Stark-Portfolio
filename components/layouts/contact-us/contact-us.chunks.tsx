import SectionTitle from '@/components/shared/section-title'
import { DataFaq } from "../../../constants"
import React from 'react'
import { Calendar, CheckCircle, Clock4, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import ContactForm, { BookingForm } from './contact-us.client'

export function FAQ() {

    return (
        <div className=" max-w-7xl mx-auto py-15 sm:py-[13%] lg:py-20">
            <SectionTitle headline='الأسئله الشائعه' title='أسئلة يتم طرحها بشكل متكرر' description='إليك بعض الإجابات على الأسئلة الشائعة التي قد تكون لديك. إذا لم تجد إجابة لسؤالك، فلا تتردد في التواصل معنا مباشرة.' highlighted={true} />
            <div className="max-w-3xl lg:mx-auto space-y-6 mx-5 mt-10">
                {DataFaq.map((faq, index) => (
                    <article key={index} className="bg-primary/5 rounded-lg p-6">
                        <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                        <p className="text-muted-foreground">{faq.answer}</p>
                    </article>
                ))}
            </div>
        </div>
    )
}




export function Contactform() {
    const DataContact = [
        {
            id: "1",
            title: "البريد الإلكتروني",
            description: "info@ctrlp.com",
            icon: <Mail />,
        },
        {
            id: "2",
            title: "رقم الهاتف",
            description: "+966 12 345 6789",
            icon: <Phone />,
        },
        {
            id: "3",
            title: "العنوان",
            description: "شارع الملك فهد، الرياض، المملكة العربية السعودية",
            icon: <MapPin />,
        },
        {
            id: "4",
            title: "ساعات العمل",
            description: "الأحد - الخميس: 9 صباحًا - 5 مساءً",
            icon: <Clock4 />,
        },
    ];

    const DataIcon = [
        {
            icon: <Twitter />,
        },
        {
            icon: <Facebook />,
        },
        {
            icon: <Instagram />,
        },
        {
            icon: <Linkedin />,
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
                        يمكنك التواصل معنا مباشرة من خلال وسائل الاتصال التالية. نحن متواجدون للرد على استفساراتك من الأحد إلى الخميس، من الساعة 9 صباحًا حتى 5 مساءً.
                    </p>
                </div>
                <div className="space-y-4">
                    {DataContact.map((item) => (
                        <article key={item.id} className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/10">
                                <span className="text-primary text-3xl">{item.icon}</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">{item.title}</h3>
                                <p className="text-muted-foreground">{item.description}</p>
                            </div>
                        </article>
                    ))}
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-4">تابعنا على</h3>
                    <div className="flex items-center gap-4">
                        {DataIcon.map((social, index) => (
                            <article
                                key={index}
                                className="rounded-full p-3 bg-primary/10 hover:bg-primary/20 transition"
                            >
                                <a href='' className=" text-2xl">{social.icon}</a>
                            </article>
                        ))}
                    </div>
                </div>
                <h1 className="text-3xl font-bold mb-4">موقعنا</h1>
            </div>
        </div>
    )
}

export function Contactreservation() {
    const DataContact = [
        "تحليل أولي لاحتياجاتك التسويقية",
        "نصائح مخصصة لتحسين استراتيجيتك الحالية",
        "فرصة لطرح أسئلتك على خبير متخصص",
        "لا توجد التزامات - استشارة مجانية بالكامل",
    ];
    return (
        <div className=" bg-primary/7">
            <div className=" max-w-7xl lg:mx-auto mx-5 py-16 md:py-24">
                <div className=" grid grid-cols-1 lg:mx-10 gap-10 md:grid-cols-2 items-center">
                    <div className=" space-y-3">
                        <span className="bg-primary/10 rounded-lg text-sm w-fit mx-auto px-3 py-1">جدولة مكالمة</span>
                        <h2 className=" text-3xl font-bold mt-5 text-accent">احجز استشارة مجانية</h2>
                        <p className=" text-muted-foreground text-base ">احجز مكالمة استشارية مجانية مدتها 30 دقيقة مع أحد خبرائنا لمناقشة مشروعك واحتياجاتك<br /> التسويقية. سنقدم لك رؤى قيمة ونصائح مخصصة لمساعدتك في تحقيق أهدافك.</p>
                        <div className=" space-y-2">
                            {DataContact.map((item, index) => (
                                <article key={index}>
                                    <p className=" flex items-center gap-2"><CheckCircle size={20} className=" text-primary" />{item}</p>
                                </article>
                            ))}
                        </div>
                        <button className="flex items-center justify-center sm:w-fit w-[70%] bg-primary text-white py-2 px-5 hover:bg-primary/90 rounded-md gap-3">احجز موعدًا الان<Calendar /></button>
                    </div>
                    <BookingForm />
                </div>
            </div>
        </div>
    )
}
