import React from "react";

export function HeroSection({ children }: { children: React.ReactNode }) {
  return (
    <main className="py-12 md:py-16 xl:py-36 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10 z-0"></div>
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-secondary/10 blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 w-6 h-6 rounded-full bg-secondary/30"></div>
      <div className="absolute top-2/3 right-1/3 w-3 h-3 rounded-full bg-primary/20"></div>
      <div className="absolute bottom-1/4 right-1/4 w-8 h-8 rounded-full bg-primary/20"></div>
      <div className="absolute top-1/4 right-1/4 w-20 h-20 border-2 border-primary/20 rounded-lg transform rotate-45 animate-float"></div>
      <div className="absolute bottom-1/3 left-1/3 w-16 h-16 border-2 border-secondary/30 rounded-full animate-float"></div>
      <div className="absolute top-2/3 right-1/5 w-12 h-12 bg-secondary/10 rounded-md transform -rotate-12 animate-float"></div>
      <div className="max-w-7xl mx-auto px-4">{children}</div>
    </main>
  );
}

export function HeroStatus() {
  const status = [
    {
      title: "+500",
      description: "عميل سعيد",
    },
    {
      title: "+1000",
      description: "مشروع ناجح",
    },
    {
      title: "+5",
      description: "سنوات من الخبرة",
    },
    {
      title: "+20",
      description: "خبير تسويق",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-10 text-center">
      {status.map((st, idx) => (
        <div
          key={idx}
          className="p-4 rounded-lg bg-white/80 backdrop-blur border relative overflow-hidden group">
          <div className="absolute inset-0 bg-secondary/5 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg"></div>
          <div className="relative z-10">
            <div className="text-3xl font-bold text-primary">{st.title}</div>
            <div className="text-sm text-muted-foreground">
              {st.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
