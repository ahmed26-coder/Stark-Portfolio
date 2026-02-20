"use client";
import * as React from "react"
import { useState, useRef } from "react";
import { createBooking } from "./page.actions";
import { toast } from "sonner";



export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const result = await createBooking(formData);
    if (result?.error) {
      toast.error("حدث خطأ اثناء الارسال حاول مجددا!");
    }

    if (result?.success) {
      toast.success("تم إرسال الرسالة بنجاح!");
      formRef.current?.reset();
    }

    if (result?.success && formRef.current) {
      formRef.current.reset();
    }

    setIsSubmitting(false);
  };

  return (
    <div className="space-y-4 rounded-lg border xl:w-[600px] md:mx-auto mx-5 p-6 bg-background">
      <h3 className="text-xl font-bold text-center">أرسل لنا رسالة</h3>
      <form className="space-y-4" onSubmit={handleSubmit} ref={formRef}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className=" flex flex-col gap-3">
            <label htmlFor="name" className="text-sm font-medium">الاسم</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="أدخل اسمك"
              className="block w-full p-2 rounded border-2 outline-0 focus:border-primary focus:border-2"
              required
            />
          </div>

          <div className=" flex flex-col gap-3">
            <label htmlFor="email" className="text-sm font-medium">البريد الإلكتروني</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="block w-full border-2 p-2 rounded outline-0 focus:border-primary focus:border-2"
              required
            />
          </div>
        </div>

        <div className=" flex flex-col gap-3">
          <label htmlFor="subject" className="text-sm font-medium">الموضوع</label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="ادخل موضوع الرساله "
            className="block w-full border-2 p-2 rounded outline-0 focus:border-primary focus:border-2"
            required
          />
        </div>

        <div className=" flex flex-col gap-3">
          <label htmlFor="message" className="text-sm font-medium">الرسالة</label>
          <textarea
            name="message"
            id="message"
            placeholder="أدخل رسالتك أو استفسارك"
            className="block w-full border-2 p-2 rounded outline-0 focus:border-primary focus:border-2"
            rows={6}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary hover:bg-primary/85 text-white py-2 rounded disabled:opacity-50"
          disabled={isSubmitting}
        >
          {isSubmitting ? "جاري الإرسال..." : "إرسال الرسالة"}
        </button>
      </form>
    </div>
  );
}


import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: "1",
    name: "أحمد محمد",
    position: "المدير التنفيذي، شركة التقنية المتطورة",
    quote: "تعاملنا مع فريق ctrl p كان تجربة رائعة. قدموا لنا حلولًا إبداعية ساعدت في زيادة مبيعاتنا بنسبة 40%.",
    rating: 4,
  },
  {
    id: "2",
    name: "سارة أحمد",
    position: "مديرة التسويق، مجموعة الأفق",
    quote: "الاحترافية والإبداع هما أهم ما يميز فريق ctrl p. استطاعوا فهم احتياجاتنا وتقديم حلول مخصصة تناسب علامتنا التجارية.",
    rating: 5,
  },
  {
    id: "3",
    name: "خالد العمري",
    position: "مؤسس، متجر الإلكترونيات الذكية",
    quote: "بفضل حملات التسويق الرقمي التي نفذها فريق ctrl p، تمكنا من الوصول إلى شريحة جديدة من العملاء وزيادة المبيعات.",
    rating: 5,
  },
  {
    id: "4",
    name: "أحمد ادهم",
    position: "المدير التنفيذي، شركة التقنية المتطورة",
    quote: "تعاملنا مع فريق ctrl p كان تجربة رائعة. قدموا لنا حلولًا إبداعية ساعدت في زيادة مبيعاتنا بنسبة 40%.",
    rating: 4,
  },
  {
    id: "5",
    name: "سارة محمد",
    position: "مديرة التسويق، مجموعة الأفق",
    quote: "الاحترافية والإبداع هما أهم ما يميز فريق ctrl p. استطاعوا فهم احتياجاتنا وتقديم حلول مخصصة تناسب علامتنا التجارية.",
    rating: 5,
  },
  {
    id: "6",
    name: "خالد العوضي",
    position: "مؤسس، متجر الإلكترونيات الذكية",
    quote: "بفضل حملات التسويق الرقمي التي نفذها فريق ctrl p، تمكنا من الوصول إلى شريحة جديدة من العملاء وزيادة المبيعات.",
    rating: 5,
  },
  {
    id: "7",
    name: "أحمد ادهم",
    position: "المدير التنفيذي، شركة التقنية المتطورة",
    quote: "تعاملنا مع فريق ctrl p كان تجربة رائعة. قدموا لنا حلولًا إبداعية ساعدت في زيادة مبيعاتنا بنسبة 40%.",
    rating: 5,
  },
  {
    id: "8",
    name: "سارة محمد",
    position: "مديرة التسويق، مجموعة الأفق",
    quote: "الاحترافية والإبداع هما أهم ما يميز فريق ctrl p. استطاعوا فهم احتياجاتنا وتقديم حلول مخصصة تناسب علامتنا التجارية.",
    rating: 5,
  },
  {
    id: "9",
    name: "خالد العوضي",
    position: "مؤسس، متجر الإلكترونيات الذكية",
    quote: "بفضل حملات التسويق الرقمي التي نفذها فريق ctrl p، تمكنا من الوصول إلى شريحة جديدة من العملاء وزيادة المبيعات.",
    rating: 4,
  },
]
export function CarouselSize() {

  return (
    <Carousel
      opts={{
        loop: false,
        align: "start",
        slidesToScroll: 1,
      }}
      dir="ltr"
      className="w-full xl:max-w-7xl mx-auto" 
    >
      <CarouselContent className="-ml-4">
        {testimonials.map((testimonial) => (
          <CarouselItem
            key={testimonial.id}
            className="pl-4 shrink-0 basis-full sm:basis-1/2 lg:basis-1/3 transition-transform duration-500 ease-in-out"
          >
            <div className="p-1 h-full">
              <Card className="h-full mx-auto w-[325px] md:w-[350px] lg:w-[300px] xl:w-full rounded-md pb-0 border bg-background flex flex-col justify-between transition-all ">
                <CardContent dir="rtl" className="p-6 relative flex flex-col justify-between h-full">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-secondary/10 rounded-full transform translate-x-1/2 -translate-y-1/2 blur-2xl" />
                  <div className="flex flex-col items-center space-y-3 z-10 relative">
                    <div className="rounded-full bg-primary/10 p-1">
                      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                        <span className="text-xl font-bold text-secondary">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div className="flex">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-secondary fill-secondary" />
                      ))}
                    </div>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <p className="mt-4 text-center text-sm text-muted-foreground">
                      {testimonial.quote}
                    </p>
                  </div>
                  <div className="mt-6 border-t pt-4 text-center space-y-1">
                    <h3 className="text-lg font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center mt-10 gap-3 items-center">
        <CarouselPrevious className="hover:text-white" />
        <CarouselNext className="hover:text-white" />
      </div>
    </Carousel>
  )
}