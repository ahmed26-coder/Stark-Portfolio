"use client";
import { Button } from '@/components/ui/button';
import { BarChart, ChevronLeft, Filter, Globe, PenTool, TrendingUp, Users, Brain, Cpu } from 'lucide-react';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import Image from 'next/image';

const ProjectIconMap: Record<string, React.ReactNode> = {
    PenTool: <PenTool className="h-6 w-6" />,
    BarChart: <BarChart className="h-6 w-6" />,
    Globe: <Globe className="h-6 w-6" />,
    Users: <Users className="h-6 w-6" />,
    TrendingUp: <TrendingUp className="h-6 w-6" />,
    Brain: <Brain className="h-6 w-6" />,
    Cpu: <Cpu className="h-6 w-6" />,
};

interface Project {
    id: string;
    title: string;
    description: string;
    category: string;
    icon_name: string;
    live?: string | null;
    main_image?: string;
    created_at: string;
}

export default function PortfolioClient() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
    const [activeCategory, setActiveCategory] = useState('الكل');
    const [loading, setLoading] = useState(true);

    const categories = [
        'الكل',
        'ذكاء اصطناعي',
        'الهوية البصرية',
        'تطوير المنصات',
        'إدارة المجتمع',
        'كتابة المحتوى',
        'طباعة تقنية',
    ];

    useEffect(() => {
        async function fetchProjects() {
            setLoading(true);
            const { data, error } = await supabase
                .from('projects')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) {
                console.error('Error fetching projects:', error);
            } else {
                setProjects(data || []);
                setFilteredProjects(data || []);
            }
            setLoading(false);
        }
        fetchProjects();
    }, []);

    useEffect(() => {
        if (activeCategory === 'الكل') {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter(p => p.category === activeCategory));
        }
    }, [activeCategory, projects]);
    return (
        <>
            <section className=" w-full py-8 bg-background border-b">
                <div className=" max-w-7xl mx-auto container px-4 md:px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                            <Filter className="h-5 w-5 text-muted-foreground" />
                            <span className="font-medium">تصفية حسب:</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {categories.map((cat) => (
                                <Button
                                    key={cat}
                                    variant={activeCategory === cat ? "default" : "ghost"}
                                    className="rounded-full hover:text-white"
                                    size="sm"
                                    onClick={() => setActiveCategory(cat)}
                                >
                                    {cat}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className=" max-w-7xl mx-auto w-full py-12 bg-background">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {loading ? (
                            <div className="col-span-full py-20 text-center text-muted-foreground">
                                جاري تحميل المشاريع...
                            </div>
                        ) : filteredProjects.length > 0 ? (
                            filteredProjects.map((project) => (
                                <Link
                                    href={`/portfolio/${project.id}`}
                                    key={project.id}
                                    className="group h-full"
                                >
                                    <div className="flex flex-col h-full overflow-hidden rounded-xl border bg-background transition-all hover:shadow-md">
                                        <div className="p-6 flex flex-col h-full">
                                            <div className="flex-grow">
                                                <div className="rounded-full bg-secondary/10 text-primary p-3 w-12 h-12 flex items-center justify-center mb-4">
                                                    {ProjectIconMap[project.icon_name] || <PenTool className="h-8 w-8 text-primary" />}
                                                </div>
                                                <div className=" pb-4 sm:flex justify-between items-center">
                                                    <div className="">
                                                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                                        <div className="inline-block px-2 py-1 bg-primary/10 rounded-full text-xs font-medium mb-3">
                                                            {project.category}
                                                        </div>
                                                    </div>
                                                    {project.live && (
                                                        <Link
                                                            href={project.live}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            onClick={(e) => e.stopPropagation()}
                                                            className="text-primary hover:bg-primary hover:text-white border border-primary py-0 sm:py-0.5 px-5 sm:px-2.5 rounded-2xl text-sm"
                                                        >
                                                            عرض المشروع
                                                        </Link>
                                                    )}
                                                </div>
                                                <p className="text-muted-foreground mb-4 line-clamp-2 text-sm h-10">{project.description}</p>
                                                <div className="relative mb-4">
                                                    <div className="h-40 rounded-lg bg-muted/50 overflow-hidden relative">
                                                        {project.main_image ? (
                                                            <Image
                                                                src={project.main_image}
                                                                alt={project.title}
                                                                fill
                                                                className="object-cover"
                                                            />
                                                        ) : (
                                                            <>
                                                                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/10"></div>
                                                                <div className="absolute inset-0 flex items-center justify-center">
                                                                    <div className="w-16 h-16 rounded-lg border-2 border-dashed border-secondary/30 flex items-center justify-center">
                                                                        <div className="w-8 h-8 bg-secondary/20 rounded-md"></div>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-auto flex justify-between items-center 
                                                px-2 py-2 rounded-md
                                                transition-all duration-300
                                                group-hover:bg-accent ring-1 ring-transparent group-hover:ring-primary/10">
                                                <span className="text-sm text-primary font-bold transition-colors duration-300 group-hover:text-white">
                                                    عرض التفاصيل
                                                </span>
                                                <ChevronLeft
                                                    className="h-4 w-4 text-primary transition-all duration-300
                                                    group-hover:text-white
                                                    group-hover:-translate-x-1"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className="col-span-full py-20 text-center text-muted-foreground">
                                لا توجد مشاريع في هذا القسم بعد.
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}
