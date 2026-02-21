"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowRight, FileQuestion } from "lucide-react"

export default function NotFoundPage() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4 relative overflow-hidden bg-background">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] -z-10"></div>

            <div className="max-w-xl w-full text-center space-y-8 animate-in fade-in zoom-in duration-700">
                <div className="relative inline-block">
                    <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150"></div>
                    <FileQuestion className="h-24 w-24 text-primary relative mx-auto" strokeWidth={1.5} />
                </div>

                <div className="space-y-4">
                    <h1 className="text-8xl font-black tracking-tighter bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        404
                    </h1>
                    <h2 className="text-3xl font-bold text-foreground">عذراً، الصفحة غير موجودة</h2>
                    <p className="text-muted-foreground text-lg max-w-md mx-auto leading-relaxed">
                        يبدو أنك سلكت مساراً غير موجود، أو أن الصفحة قد تم نقلها إلى عالم آخر في الذكاء الاصطناعي.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <Link href="/" className="w-full sm:w-auto">
                        <Button size="lg" className="w-full px-8 gap-2 bg-primary hover:bg-primary/90">
                            <Home className="h-5 w-5" />
                            العودة للرئيسية
                        </Button>
                    </Link>
                    <Link href="/services" className="w-full group sm:w-auto">
                        <Button variant="outline" size="lg" className="w-full group-hover:text-white hover:text-white px-8 gap-2 group">
                            استكشف خدماتنا
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>

                <div className="pt-8 border-t border-border/50">
                    <p className="text-sm text-muted-foreground italic">
                        &quot;حتى الذكاء الاصطناعي يحتاج لبعض الضياع أحياناً ليكتشف مسارات جديدة&quot;
                    </p>
                </div>
            </div>
        </div>
    )
}

