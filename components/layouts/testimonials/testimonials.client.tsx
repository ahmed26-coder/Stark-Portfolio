"use client";

import React from 'react';
import SectionTitle from '@/components/shared/section-title';
import { supabase } from '@/lib/supabase';
import { useState, useEffect } from 'react';
import { Award, BarChart, MessageSquare, PenTool, Star, TrendingUp, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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

export function Clients() {
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
            <div className="max-w-7xl mx-auto py-12 lg:py-20 text-center">
                <p className="text-muted-foreground">جاري تحميل الآراء...</p>
            </div>
        );
    }

    return (
        <div className=" max-w-7xl mx-auto py-12 lg:py-20">
            <SectionTitle headline='شهادات مميزة' title='ما يميزنا في نظر عملائنا' highlighted={true} />
            <div className=" grid gap-10 md:grid-cols-2 lg:grid-cols-3 mt-15 mx-5">
                {dataClients.map((item) => (
                    <article key={item.id} className="bg-background rounded-xl p-6 border relative">
                        <div className="absolute top-0 right-8 transform -translate-y-1/2 inline-flex items-center justify-center w-12 h-12 rounded-full bg-background border">
                            {getIcon(item.icon_name)}
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



import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

export function Experience() {
    const [open, setOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        position: "",
        company: "",
        industry: "",
        quote: "",
        rating: 5,
        icon_name: "Award"
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const { error } = await supabase
                .from('testimonials')
                .insert([formData]);

            if (error) throw error;

            toast.success("تم إرسال تجربتك بنجاح! شكراً لك.");
            setOpen(false);
            setFormData({
                name: "",
                position: "",
                company: "",
                industry: "",
                quote: "",
                rating: 5,
                icon_name: "Award"
            });
        } catch (error) {
            console.error("Error submitting testimonial:", error);
            toast.error("حدث خطأ أثناء إرسال البيانات. يرجى المحاولة مرة أخرى.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className=" max-w-7xl lg:mx-auto text-center py-12 lg:py-20 mx-5">
            <SectionTitle headline='شارك تجربتك' title='هل انت أحد عملائنا؟' description='نحن نقدر آراءك وتجاربك معنا. شارك قصة نجاحك وكيف ساعدناك في تحقيق التحول الرقمي الذكي' highlighted={true} />

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button size="lg" className=" mt-10">
                        شارك تجربتك معنا <MessageSquare className="h-5 w-5 mr-1" />
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px] text-right" dir="rtl">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-[#17ddb9] bg-clip-text text-transparent">شاركنا قصة نجاحك</DialogTitle>
                        <DialogDescription className="text-right">
                            يسعدنا سماع رأيك وتجربتك مع Stark AI. سيتم عرض رأيك في صفحة الشهادات بعد المراجعة.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">الاسم الكامل</label>
                                <Input
                                    required
                                    placeholder="أحمد محمد"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">المسمى الوظيفي</label>
                                <Input
                                    required
                                    placeholder="المدير التنفيذي"
                                    value={formData.position}
                                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">الشركة</label>
                                <Input
                                    required
                                    placeholder="شركة التقنية"
                                    value={formData.company}
                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">القطاع</label>
                                <Input
                                    required
                                    placeholder="التكنولوجيا"
                                    value={formData.industry}
                                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">التقييم</label>
                            <div className="flex gap-1 justify-end">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        onClick={() => setFormData({ ...formData, rating: star })}
                                        className="focus:outline-none"
                                    >
                                        <Star
                                            className={cn(
                                                "h-6 w-6 transition-colors",
                                                formData.rating >= star ? "text-yellow-400 fill-yellow-400" : "text-muted border-muted"
                                            )}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">اختر أيقونة تعبر عن تجربتك</label>
                            <div className="flex gap-2 justify-end flex-wrap">
                                {Object.keys(iconComponents).map((iconKey) => (
                                    <button
                                        key={iconKey}
                                        type="button"
                                        onClick={() => setFormData({ ...formData, icon_name: iconKey })}
                                        className={cn(
                                            "p-2 rounded-lg border transition-all",
                                            formData.icon_name === iconKey ? "border-primary bg-primary/5 shadow-sm" : "border-muted hover:border-primary/50"
                                        )}
                                    >
                                        {getIcon(iconKey, "h-6 w-6 text-primary")}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">رأيك بالتفصيل</label>
                            <Textarea
                                required
                                className="min-h-[100px]"
                                placeholder="اكتب تجربتك هنا..."
                                value={formData.quote}
                                onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                            />
                        </div>
                        <DialogFooter className="mt-6">
                            <Button type="submit" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? "جاري الإرسال..." : "إرسال الشهادة"}
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}