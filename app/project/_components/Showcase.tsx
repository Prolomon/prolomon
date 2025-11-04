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
          <h1 className="text-4xl">Featured Project.</h1>
          <p>Bringing Your Ideas to Life with Code.</p>
        </div>
        <div className="w-84">
          <p>
            I transform ideas into reality, building high-quality digital solutions that solve problems and drive success. Explore my work to see how we can innovate together.
          </p>
        </div>
      </div>
    </section>
  );
};
