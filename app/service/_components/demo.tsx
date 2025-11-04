"use client";

import Link from "next/link";

export default function Demo() {
  return (
    <section className="w-full mx-auto pb-12">
      <div className="text-center">
        <Link
          href="/contact"
          className="inline-flex items-center rounded-md border px-4 py-2 text-sm hover:bg-accent"
        >
          Request a custom package
        </Link>
      </div>
    </section>
  );
}
