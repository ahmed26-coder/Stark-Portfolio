import { CheckCircle } from "lucide-react";
import React from "react";

interface Benefit {
  text: string;
}

interface WorkStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

interface ExpectedResult {
  id: string;
  title: string;
  description: string;
}

interface ServiceSectionProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  benefits: Benefit[];
  workSteps: WorkStep[];
  expectedResults: ExpectedResult[];
  highlighted?: boolean;
}

export default function ServiceSection({
  icon,
  title,
  description,
  benefits,
  workSteps,
  expectedResults,
  highlighted,
}: ServiceSectionProps) {
  return (
    <div>
      <div className="space-y-4">
        <div className="inline-block rounded-lg bg-primary/10 p-2">{icon}</div>
        <h2 className="text-3xl font-bold tracking-tighter">{title}</h2>
        <p className="text-muted-foreground text-lg">{description}</p>
        <div className="mt-6">
          <h3 className="text-xl font-bold mb-4">الفوائد</h3>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>{benefit.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">عملية العمل</h3>
          <div className="grid gap-4 md:grid-cols-3">
            {workSteps.map((step) => (
              <article key={step.id} className= {`p-6 rounded-lg ${highlighted ? "bg-primary/5" : "bg-white"}`}>
                <div className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center mb-3">
                  <span className="font-bold">{step.number}</span>
                </div>
                <h4 className="font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
        <div className={`mt-8 ${highlighted ? "bg-primary/5" : "bg-white"} p-4 rounded-lg`}>
          <h3 className="text-xl font-bold mb-2">النتائج المتوقعة</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {expectedResults.map((result) => (
              <article key={result.id} className="text-center">
                <p className="text-2xl font-bold text-primary">{result.title}</p>
                <p className="text-sm text-muted-foreground">{result.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
