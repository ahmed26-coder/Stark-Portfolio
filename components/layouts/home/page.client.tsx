"use client";
import * as React from "react"
import { useState, useRef, useEffect } from "react";
import { createBooking } from "./page.actions";
import { toast } from "sonner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Star, Award, Zap, Users, TrendingUp, BarChart, PenTool } from "lucide-react"
import { supabase } from "@/lib/supabase"


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



const iconComponents = {
  Award,
  Zap,
  Users,
  TrendingUp,
  BarChart,
  PenTool,
};

type IconType = keyof typeof iconComponents;

const getIcon = (iconName: string, className: string = "h-10 w-10 text-primary") => {
  const Icon = iconComponents[iconName as IconType] || Award;
  return <Icon className={className} />;
};

type ClientData = {
  id: string;
  quote: string;
  name: string;
  position: string;
  company: string;
  industry: string;
  rating: number;
  icon_name: string;
}

export function CarouselSize() {
  const [dataClients, setDataClients] = useState<ClientData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const { data, error } = await supabase
          .from('testimonials')
          .select('*')
          .order('created_at', { ascending: true });

        if (error) throw error;
        setDataClients(data || []);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto py-12 text-center">
        <p className="text-muted-foreground">جاري تحميل الآراء...</p>
      </div>
    );
  }

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
        {dataClients.map((item) => (
          <CarouselItem
            key={item.id}
            className="pl-4 text-start pt-10 shrink-0 basis-full sm:basis-1/2 lg:basis-1/3 transition-transform duration-500 ease-in-out"
          >
            <div className="p-1 h-full text-start" dir="rtl">
              <article className="bg-background rounded-xl p-6 border relative h-full flex flex-col justify-between">
                <div className="absolute top-0 right-8 transform -translate-y-1/2 inline-flex items-center justify-center w-12 h-12 rounded-full bg-background border">
                  {getIcon(item.icon_name, "h-6 w-6 text-primary")}
                </div>
                <div className="pt-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex mb-4">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm">{item.quote}</p>
                  </div>
                  <div>
                    <div className="flex gap-2 items-center">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-bold text-primary text-sm">{item.name.charAt(0)}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm">{item.name}</h4>
                        <p className="text-xs text-muted-foreground">{item.position}</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-medium">{item.company}</span>
                        <span className="text-[10px] bg-primary/10 px-2 py-1 rounded-full">{item.industry}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
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
