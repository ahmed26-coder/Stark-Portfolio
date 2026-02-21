"use client";
import { Stagger, StaggerItem } from "@/components/shared/reveal";

export default function SectionTitle({
  headline,
  title,
  description,
  highlighted
}: {
  headline?: string;
  title: string;
  description?: string;
  highlighted?: boolean;
}) {
  return (
    <Stagger className="px-4 max-w-3xl mx-auto">
      <StaggerItem>
        <p className={`bg-primary/10 rounded-lg text-sm w-fit mx-auto ${highlighted ? "px-3 py-1" : "px-0 py-0"}`}>
          {headline}
        </p>
      </StaggerItem>
      <StaggerItem>
        <p className="text-center text-3xl sm:text-5xl font-bold text-accent my-4">
          {title}
        </p>
      </StaggerItem>
      <StaggerItem>
        <p className="text-center text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          {description}
        </p>
      </StaggerItem>
    </Stagger>
  );
}
