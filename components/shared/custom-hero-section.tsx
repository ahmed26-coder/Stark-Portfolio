import React from "react";

export default function CustomHeroSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-6 h-6 rounded-full bg-primary/30"></div>
        <div className="absolute top-2/3 right-1/3 w-3 h-3 rounded-full bg-primary/20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-8 h-8 rounded-full bg-primary/20"></div>
        <div className="">{children}</div>
      </main>
    </>
  );
}
