"use client";


export default function Showcase() {
  return (
    <section
      className="relative min-h-64 text-white flex flex-col justify-center items-center"
      style={{
        backgroundImage: "url('/images/service.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-64 text-center bg-black/70 object-cover flex flex-col items-center justify-center">
        <p className="text-sm uppercase tracking-widest text-muted-foreground">
          Services
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mt-2">
          What I can do for you
        </h1>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          End-to-end product engineering - from concept to deployment - with
          pragmatic, maintainable code.
        </p>
      </div>
    </section>
  );
}
