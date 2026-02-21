import SectionTitle from '@/components/shared/section-title'
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';


export function Similartestimonials() {
    return (
        <div className=" bg-primary/5 py-15 sm:py-[13%] lg:py-20">
            <SectionTitle title="هل أنت جاهز لتحقيق نتائج مماثلة؟" description="دعنا نساعدك في دمج الذكاء الاصطناعي في صميم أعمالك وتحقيق نتائج استثنائية. تواصل معنا اليوم للحصول على استشارة تقنية مجانية." highlighted={false} />
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-4 mt-5">
                <Link href="/services" className="cursor-pointer">
                    <Button size="lg">
                        احصل على استشارة مجانية
                        <ArrowRight className="h-4 w-4 mr-1" />
                    </Button>
                </Link>
                <Link href="/contact-us" className="cursor-pointer">
                    <button className="flex items-center justify-center sm:w-fit w-full border border-muted-foreground/20 bg-background py-2 px-5 rounded-md gap-3 hover:bg-accent hover:text-white ">
                        تعرف على المزيد من خدماتنا
                    </button>
                </Link>
            </div>
        </div>
    )
}
