"use client";

import { useState, useRef } from "react";
import { createBooking, sendMessage } from "./contact-us.actions";
import { toast } from "sonner";

type DateItem = { day: string; date: string };

const times = ["10:00 ص", "11:30 ص", "1:00 م", "2:30 م", "4:00 م", "5:30 م"];
const weekdays = ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
const customWeekdays = ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء"];

const generateNextDates = (count = 4): DateItem[] => {
  const today = new Date();
  const currentDate = new Date(today);
  const result: DateItem[] = [];;
  while (result.length < count) {
    const dayIndex = currentDate.getDay();
    const dayName = weekdays[dayIndex];
    const dateStr = `${currentDate.getDate()}/${currentDate.getMonth() + 1}`;

    if (customWeekdays.includes(dayName)) {
      result.push({ day: dayName, date: dateStr });
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }
  return customWeekdays.flatMap((day) =>
    result.filter((item) => item.day === day)
  );
};


export function BookingForm() {
  const dates = generateNextDates();
  const formRef = useRef<HTMLFormElement>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedDate || !selectedTime) {
      toast.error("يرجى اختيار التاريخ والوقت");
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      formData.append("date", selectedDate);
      formData.append("time", selectedTime);

      const result = await createBooking(formData);

      if (result?.error) {
        toast.error(result.error);
      } else {
        toast.success("تم إرسال الحجز بنجاح!");
        formRef.current?.reset();
        setSelectedDate(null);
        setSelectedTime(null);
      }
    } catch (error) {
      toast.error("حدث خطأ غير متوقع.");
      console.error("Booking error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl transform rotate-3"></div>
        <div className="relative bg-background rounded-2xl p-8 shadow-sm border">
          <form onSubmit={handleSubmit} ref={formRef} className="p-4">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">اختر وقتًا يناسبك</h3>
              <p className="text-sm text-muted-foreground">مكالمة استشارية مجانية لمدة 30 دقيقة</p>
            </div>
            <div className="space-y-6 mt-10">
              <div className="">
                <h4>التاريخ</h4>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                  {dates.map((d, i) => (
                    <button
                      type="button"
                      key={i}
                      name="date"
                      className={`cursor-pointer rounded-lg p-2 text-center text-sm transition-colors
                        ${selectedDate === d.date
                          ? "bg-primary/80 text-white"
                          : "bg-primary/4 hover:bg-primary/10"
                        }`}
                      onClick={() => setSelectedDate(d.date)}
                    >
                      {d.day}
                      <br />
                      {d.date}
                    </button>
                  ))}

                </div>
              </div>

              <div className="">
                <h4>الوقت</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 my-3">
                  {times.map((t, i) => (
                    <button
                      type="button"
                      key={i}
                      name="time"
                      className={`cursor-pointer rounded-lg p-2 text-center text-sm transition-colors
          ${selectedTime === t
                          ? "bg-primary/80 text-white"
                          : "bg-primary/4 hover:bg-primary/10"
                        }`}
                      onClick={() => setSelectedTime(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">الاسم</label>
                  <input type="text" name="name" id="name" placeholder="أدخل اسمك" className="block w-full border-2 outline-0 focus:border-primary focus:border-2 my-2 p-2 rounded" required />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">البريد الإلكتروني</label>
                  <input type="email" name="email" id="email" placeholder="أدخل بريدك الإلكتروني" className="block w-full border-2 outline-0 focus:border-primary focus:border-2 my-2 p-2 rounded" required />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">رقم الهاتف</label>
                  <input dir="rtl" type="tel" inputMode="numeric" pattern="[0-9]{10,15}" name="phone" id="phone" placeholder="أدخل رقم هاتفك" className="block w-full border-2 outline-0 focus:border-primary focus:border-2 my-2 p-2 rounded" required />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/85 text-white py-2 rounded disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? "جاري الإرسال..." : "تأكيد الحجز"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}



export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);

    try {
      const result = await sendMessage(formData);

      if (result?.error) {
        toast.error(result.error);
      } else {
        toast.success("تم إرسال الرسالة بنجاح!");
        form.reset();
      }
    } catch (error) {
      toast.error("حدث خطأ غير متوقع. حاول مرة أخرى.");
    }


    setIsSubmitting(false);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tighter mb-4">أرسل لنا رسالة</h2>
        <p className="text-muted-foreground mb-6">
          املأ النموذج أدناه وسنقوم بالرد عليك في أقرب وقت ممكن. نحن متحمسون للاستماع إلى مشروعك والمساعدة في تحقيق أهدافك.
        </p>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 lg:mx-0 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium">الاسم</label>
            <input className="block w-full border-2 outline-0 focus:border-primary focus:border-2 my-2 p-2 rounded" id="name" name="name" placeholder="أدخل اسمك" required />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium">البريد الإلكتروني</label>
            <input className="block w-full border-2 outline-0 focus:border-primary focus:border-2 my-2 p-2 rounded" id="email" name="email" type="email" placeholder="أدخل بريدك الإلكتروني" required />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-medium">رقم الهاتف</label>
          <input className="block w-full border-2 outline-0 focus:border-primary focus:border-2 my-2 p-2 rounded" id="phone" name="phone" type="tel" inputMode="numeric" pattern="[0-9]{10,15}" placeholder="أدخل رقم هاتفك" required />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="Subject" className="text-sm font-medium">الموضوع</label>
          <input className="block w-full border-2 outline-0 focus:border-primary focus:border-2 my-2 p-2 rounded" id="Subject" name="Subject" placeholder="أدخل موضوع الرسالة" required />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="Service" className="text-sm font-medium">الخدمة المطلوبة</label>
          <select
            id="Service"
            name="Service"
            defaultValue=""
            required
            className="flex h-10 w-full rounded-md border-2 outline-0 focus:border-primary focus:border-2 border-input bg-background px-3 text-sm"
          >
            <option value="" disabled>اختر الخدمة</option>
            <option value="التسويق الرقمي">التسويق الرقمي</option>
            <option value="الهوية البصرية">الهوية البصرية</option>
            <option value="تطوير المواقع">تطوير المواقع</option>
            <option value="إدارة وسائل التواصل">إدارة وسائل التواصل</option>
            <option value="إنتاج المحتوى">إنتاج المحتوى</option>
            <option value="خدمات الطباعة">خدمات الطباعة</option>
            <option value="أخرى">أخرى</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="Message" className="text-sm font-medium">الرسالة</label>
          <textarea className="block w-full border-2 outline-0 focus:border-primary focus:border-2 my-2 p-2 rounded" rows={6} id="Message" name="Message" placeholder="اكتب رسالتك هنا" required />
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
