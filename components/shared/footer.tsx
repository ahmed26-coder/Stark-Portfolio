import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, Facebook, Instagram, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { label: "الرئيسية", href: "/" },
        { label: "من نحن", href: "/about-us" },
        { label: "خدماتنا", href: "/services" },
        { label: "أعمالنا", href: "/portfolio" },
        { label: "آراء العملاء", href: "/testimonials" },
    ];

    const services = [
        { label: "أنظمة المحاسبة المتقدمة", href: "/services#accounting-ai" },
        { label: "التنبؤ بالمخازن الذكي", href: "/services#inventory-prediction" },
        { label: "مساعد الفواتير (OCR)", href: "/services#invoice-assistant" },
        { label: "نماذج ذكاء اصطناعي مخصصة", href: "/services#custom-models" },
        { label: "الرعاية الصحية الذكية", href: "/services#medical-ai" },
    ];

    const socialLinks = [
        { icon: <Twitter size={20} />, href: "#" },
        { icon: <Facebook size={20} />, href: "#" },
        { icon: <Instagram size={20} />, href: "#" },
        { icon: <Linkedin size={20} />, href: "#" },
    ];

    return (
        <footer className="bg-background border-t text-white pt-16 pb-4">
            <div className="max-w-7xl mx-auto px-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Column 1: Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-stark-cyan via-stark-purple to-stark-green rounded-full blur-xl opacity-40 animate-pulse"></div>
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    width={40}
                                    height={40}
                                    playsInline
                                    className="relative h-12 w-12 rounded-full object-cover stark-logo-glow drop-shadow-2xl"
                                >
                                    <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663303194648/oWubjrfMnYuOknoT.mp4" type="video/mp4" />
                                </video>
                            </div>
                            <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                STARK
                            </h1>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            نحن في Stark AI نؤمن بأن الابتكار هو مفتاح المستقبل. نقدم حلولاً برمجية ذكية تغير وجه العمل في مختلف القطاعات.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold border-r-4 border-primary pr-3 leading-none">روابط سريعة</h3>
                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-muted-foreground hover:text-accent flex items-center gap-2 group transition-colors"
                                    >
                                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold border-r-4 border-primary pr-3 leading-none">خدماتنا</h3>
                        <ul className="space-y-4">
                            {services.map((service) => (
                                <li key={service.label}>
                                    <Link
                                        href={service.href}
                                        className="text-muted-foreground hover:text-accent flex items-center gap-2 group transition-colors"
                                    >
                                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {service.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold border-r-4 border-primary pr-3 leading-none">تواصل معنا</h3>
                        <div className="space-y-5">
                            <a href="mailto:info@stark-ai.com" className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <Mail size={20} className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">البريد الإلكتروني</p>
                                    <p className="font-medium group-hover:text-primary transition-colors">info@stark-ai.com</p>
                                </div>
                            </a>
                            <a href="tel:+201123244937" className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <Phone size={20} className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">رقم الهاتف</p>
                                    <p className="font-medium group-hover:text-primary transition-colors" dir="ltr">+20 112 324 4937</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-right">
                    <p className="text-muted-foreground text-sm">
                        &copy; {currentYear} <span className="text-white font-bold">Stark AI</span>. جميع الحقوق محفوظة.
                    </p>
                    <div className="flex gap-8 text-sm text-muted-foreground">
                        <Link href="#" className="hover:text-white transition-colors">سياسة الخصوصية</Link>
                        <Link href="#" className="hover:text-white transition-colors">الشروط والأحكام</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
