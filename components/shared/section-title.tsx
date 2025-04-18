import React from "react";

export default function SectionTitle({
  headline,
  title,
  description,
}: {
  headline: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="px-4">
      <p className="bg-primary/10 rounded-lg px-3 py-1 text-sm w-fit mx-auto">
        {headline}
      </p>
      <p className="text-center text-3xl sm:text-5xl font-bold text-accent my-2.5">
        {title}
      </p>
      <p className="text-center text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
        {description}
      </p>
    </div>
  );
}
