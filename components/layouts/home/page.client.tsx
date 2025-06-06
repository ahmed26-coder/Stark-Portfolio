"use client";
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
        <div className="space-y-4 rounded-lg border xl:w-[600px] md:mx-auto mx-5 p-6 shadow-sm bg-background">
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
                            className="block w-full p-2 rounded border-2 outline-0 focus:border-blue-500 focus:border-2"
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
                            className="block w-full border-2 p-2 rounded outline-0 focus:border-blue-500 focus:border-2"
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
                        className="block w-full border-2 p-2 rounded outline-0 focus:border-blue-500 focus:border-2"
                        required
                    />
                </div>

                <div className=" flex flex-col gap-3">
                    <label htmlFor="message" className="text-sm font-medium">الرسالة</label>
                    <textarea
                        name="message"
                        id="message"
                        placeholder="أدخل رسالتك أو استفسارك"
                        className="block w-full border-2 p-2 rounded outline-0 focus:border-blue-500 focus:border-2"
                        rows={6}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded disabled:opacity-50"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "جاري الإرسال..." : "إرسال الرسالة"}
                </button>
            </form>
        </div>
    );
}
