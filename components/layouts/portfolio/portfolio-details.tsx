import React from 'react';
import Image from 'next/image';
import { CheckCircle, ArrowRight, Zap, Target, Globe, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionTitle from '@/components/shared/section-title';
import Link from 'next/link';

interface ProjectDetail {
    id: string;
    title: string;
    category: string;
    description: string;
    description_full: string;
    problem: string;
    solution: string;
    icon_name: string;
    main_image: string;
    images: string[];
    features: string[];
    live?: string | null;
    demo?: string | null;
}

export default function PortfolioDetails({ project }: { project: ProjectDetail }) {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden bg-primary/5">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
                <div className="max-w-7xl mx-auto px-5 relative z-10">
                    <Link href="/portfolio" className="inline-flex items-center text-primary mb-8 hover:gap-2 transition-all">
                        <ArrowRight size={18} className="ml-2 rotate-180" />
                        <span>العودة إلى الأعمال</span>
                    </Link>
                    <div className="max-w-3xl">
                        <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
                            {project.category}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-accent mb-6 leading-tight">
                            {project.title}
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {project.description}
                        </p>
                        {(project.live || project.demo) && (
                            <div className="flex flex-wrap gap-4 mt-8">
                                {project.live && (
                                    <Link
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-primary/30 hover:scale-105"
                                    >
                                        <Globe size={18} />
                                        عرض المشروع
                                    </Link>
                                )}
                                {project.demo && (
                                    <Link
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-all hover:scale-105"
                                    >
                                        <Code size={18} />
                                        عرض الكود
                                    </Link>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-16">
                            {/* Full Description */}
                            <div>
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <div className="w-1 h-8 bg-primary rounded-full"></div>
                                    نظرة عامة على المشروع
                                </h2>
                                <p className="text-lg text-muted-foreground leading-loose">
                                    {project.description_full}
                                </p>
                            </div>

                            {/* Problem & Solution */}
                            <div className="grid md:grid-cols-2 gap-8 mt-12">
                                <div className="bg-red-50/50 p-8 rounded-2xl border border-red-100">
                                    <div className="flex items-center gap-3 mb-4 text-red-600">
                                        <Target size={24} />
                                        <h3 className="text-xl font-bold">التحدي</h3>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed italic">
                                        {project.problem}
                                    </p>
                                </div>
                                <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
                                    <div className="flex items-center gap-3 mb-4 text-primary">
                                        <Zap size={24} />
                                        <h3 className="text-xl font-bold">الحل الذكي</h3>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {project.solution}
                                    </p>
                                </div>
                            </div>

                            {/* Image Gallery */}
                            {project.images && project.images.length > 0 && (
                                <div>
                                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                        <div className="w-1 h-8 bg-primary rounded-full"></div>
                                        معرض الصور
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {project.images.map((img, idx) => (
                                            <div key={idx} className="relative aspect-video rounded-xl overflow-hidden shadow-sm border">
                                                <Image
                                                    src={img}
                                                    alt={`${project.title} - ${idx + 1}`}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            <div className="bg-accent text-white p-8 rounded-3xl shadow-xl">
                                <h3 className="text-xl font-bold mb-6 pb-4 border-b border-white/10">الخصائص والنتائج</h3>
                                <ul className="space-y-4">
                                    {project.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-4">
                                            <CheckCircle className="text-secondary flex-shrink-0 mt-1" size={20} />
                                            <span className="text-gray-300">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-8 border rounded-3xl bg-primary/5">
                                <h3 className="text-xl font-bold mb-4">هل لديك مشروع مماثل؟</h3>
                                <p className="text-muted-foreground mb-6">
                                    دعنا نساعدك في تصميم وتطوير حلولك الذكية وتحقيق أفضل النتائج التقنية.
                                </p>
                                <Link href="/contact-us">
                                    <Button className="w-full py-6 text-lg">احصل على استشارة مجانية</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Call to Action */}
            <section className="py-20 bg-primary/5 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5"></div>
                <div className="max-w-4xl mx-auto px-5 text-center relative z-10">
                    <SectionTitle
                        title="ابدأ رحلتك نحو التحول الذكي اليوم"
                        description="نحن هنا لمساعدتكم في تحويل أفكاركم إلى حلول رقمية ملموسة ومبهرة."
                    />
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="/contact-us">
                            <Button size="lg" className="px-10 py-7 text-xl">تواصل معنا الآن</Button>
                        </Link>
                        <Link href="/services">
                            <button className="px-10 text-xl py-3 border text-primary bg-white border-white rounded-lg hover:bg-primary hover:text-white transition-colors">
                                استكشف خدماتنا
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

