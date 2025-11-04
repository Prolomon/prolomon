"use client";

export const Showcase = () => {
  return (
    <section
      className="relative min-h-64 text-white flex flex-col justify-center items-center"
      style={{
        backgroundImage: "url('/images/contact.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full min-h-64 flex items-center justify-between bg-black/60 px-4">
        <div>
          <h1 className="text-4xl">Got an Idea? Let&apos;s Talk.</h1>
          <p>Your Vision, My Expertise.</p>
        </div>
        <div className="w-84">
          <p>
            I bring passion and precision to every project, crafting exceptional digital experiences from concept to launch. Let&apos;s create something remarkable together.
          </p>
        </div>
      </div>
    </section>
  );
};
