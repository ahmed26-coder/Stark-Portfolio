import React from "react";

export default function CustomHeroSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-float-space-1"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-float-space-2"></div>
        <div className="absolute top-1/3 left-1/4 w-6 h-6 rounded-full bg-primary/30 animate-float-space-3"></div>
        <div className="absolute top-2/3 right-1/3 w-3 h-3 rounded-full bg-primary/20 animate-float-space-1" style={{ animationDelay: '-5s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-8 h-8 rounded-full bg-primary/20 animate-float-space-2" style={{ animationDelay: '-10s' }}></div>
        <div className="relative z-10">{children}</div>
      </main>

    </>
  );
}
