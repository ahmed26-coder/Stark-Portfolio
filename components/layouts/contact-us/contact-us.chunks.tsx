import SectionTitle from '@/components/shared/section-title'
import { DataFaq } from "../../../constants"
import React from 'react'

export function FAQ() {

    return (
        <div className=" max-w-7xl mx-auto py-15 sm:py-[13%] lg:py-20">
            <SectionTitle headline='الأسئله الشائعه' title='أسئلة يتم طرحها بشكل متكرر' description='إليك بعض الإجابات على الأسئلة الشائعة التي قد تكون لديك. إذا لم تجد إجابة لسؤالك، فلا تتردد في التواصل معنا مباشرة.' />
            <div className="max-w-3xl lg:mx-auto space-y-6 mx-5 mt-10">
                {DataFaq.map((faq, index) => (
                    <article key={index} className="bg-primary/5 rounded-lg p-6">
                        <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                        <p className="text-muted-foreground">{faq.answer}</p>
                    </article>
                ))}
            </div>
        </div>
    )
}



