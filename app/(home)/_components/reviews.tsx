"use client";

import { siteConfig } from "@/config/site";
import clsx from "clsx";
import {
  Card,
  CardBody,
  CardFooter,
  Avatar,
  Chip,
  Divider,
  Button,
} from "@heroui/react";

import { useMemo } from "react";

import { StarFill as Star, ChevronRight, ChevronLeft } from "react-bootstrap-icons";
import { useId } from "react";


export type Review = {
  id: string;
  author: string;
  role?: string;
  avatar?: string; // public path under /public/images or full URL
  rating?: number; // 0-5
  content: string;
  source?: {
    name: string;
    url?: string;
    icon?: React.ReactNode;
  };
  date?: string | Date;
};

function Stars({
  value = 5,
  className,
}: {
  value?: number;
  className?: string;
}) {
  const clamped = Math.max(0, Math.min(5, Math.round(value)));
  return (
    <div className={`flex items-center gap-1 text-warning ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={clsx(
            i < clamped ? "text-warning" : "text-foreground-400 opacity-40"
          )}
        />
      ))}
    </div>
  );
}

export function ReviewCard({
  review,
  className,
}: {
  review: Review;
  className?: string;
}) {
  const dateLabel = useMemo(() => {
    if (!review.date) return undefined;
    const d =
      typeof review.date === "string" ? new Date(review.date) : review.date;
    if (Number.isNaN(d.getTime())) return undefined;
    return d.toLocaleDateString(undefined, { year: "numeric", month: "short" });
  }, [review.date]);

  return (
    <Card
      className={clsx("h-full bg-content1/70 backdrop-blur-sm", className)}
      shadow="sm"
      radius="lg"
    >
      <CardBody className="gap-3">
        <blockquote className="text-sm leading-relaxed text-foreground-600">
          <span className="select-none text-xl text-foreground-300">“</span>
          {review.content}
          <span className="select-none text-xl text-foreground-300">”</span>
        </blockquote>
        <Divider className="my-1" />
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar
            name={review.author}
            src={review.avatar}
            className="h-10 w-10"
            radius="full"
          />
          <div className="min-w-0">
            <div className="truncate text-sm font-medium text-foreground">
              {review.author}
            </div>
            <div className="flex items-center gap-2 text-xs text-foreground-500">
              <Chip size="sm" variant="flat" color="default">
                {review.role ?? review.source?.name ?? siteConfig.name}
              </Chip>
              {dateLabel ? (
                <span className="text-foreground-400">{dateLabel}</span>
              ) : null}
            </div>
          </div>
        </div>
        {typeof review.rating === "number" ? (
          <Stars value={review.rating} />
        ) : null}
      </CardFooter>
    </Card>
  );
}

export function ReviewList({
  reviews,
  className,
}: {
  reviews: Review[];
  className?: string;
}) {
  const scrollerId = useId();

  // Horizontal carousel layout: swipe on mobile; arrow buttons on desktop; wheel transforms vertical to horizontal.
  const container = clsx("group relative w-full", className);

  return (
    <section className={container} aria-label="Customer reviews">
      {/* Desktop arrow controls */}
      <div className="pointer-events-none absolute inset-y-0 hidden w-full items-center justify-between px-1 md:flex z-50">
        <Button
          isIconOnly
          size="sm"
          radius="full"
          variant="flat"
          className="pointer-events-auto shadow-md"
          onPress={() => {
            const scroller = document.getElementById(scrollerId);
            if (!scroller) return;
            scroller.scrollBy({
              left: -Math.max(320, scroller.clientWidth * 0.8),
              behavior: "smooth",
            }); // Corrected: scroll left
          }}
          aria-label="Previous reviews"
        >
          <ChevronLeft />
        </Button>
        <Button
          isIconOnly
          size="sm"
          radius="full"
          variant="flat"
          className="pointer-events-auto shadow-md"
          onPress={() => {
            const scroller = document.getElementById(scrollerId);
            if (!scroller) return;
            scroller.scrollBy({
              left: Math.max(320, scroller.clientWidth * 0.8),
              behavior: "smooth",
            }); // Corrected: scroll right
          }}
          aria-label="Next reviews"
        >
          <ChevronRight />
        </Button>
      </div>

      {/* Horizontal scroller with snap */}
      <div // Corrected: use scrollerId for the id attribute
        id={scrollerId}
        className={clsx(
          "flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden pb-2 pt-1",
          "[-ms-overflow-style:none] [scrollbar-width:none]",
          "[&::-webkit-scrollbar]:hidden"
        )}
        onWheel={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          // If the user scrolls vertically on desktop, translate it to horizontal movement
          if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
            el.scrollLeft += e.deltaY;
          }
        }}
      >
        {reviews.map((r) => (
          <div
            key={r.id}
            className="min-w-[85%] snap-start md:min-w-[55%] lg:min-w-[40%] xl:min-w-[33%]"
          >
            <ReviewCard review={r} />
          </div>
        ))}
      </div>
    </section>
  );
}

// Demo data for quick usage in home page
export const demoReviews: Review[] = [
  {
    id: "1",
    author: "Sofia I.",
    role: "Product Designer",
    avatar: "/images/man.png",
    rating: 5,
    date: "2025-03-12",
    content:
      "This system nails the details. The tokens, spacing, and motion feel cohesive. Shipping features is faster and less error‑prone.",
    source: { name: "App UI" },
  },
  {
    id: "2",
    author: "Derrick U.",
    role: "Full‑stack Engineer",
    avatar: "/images/prolomon.png",
    rating: 5,
    date: "2025-05-02",
    content:
      "Composables are straightforward and type‑safe. Dark mode and theming work out of the box across pages.",
    source: { name: "Component Library" },
  },
  {
    id: "3",
    author: "Amira T.",
    role: "Founder",
    avatar: "/images/showcase.jpg",
    rating: 2.6,
    date: "2025-06-28",
    content:
      "We embedded reviews in minutes. Zero fiddling with styles—everything matched our brand instantly.",
    source: { name: "Marketing" },
  },
];

export function ReviewsSection() {
  return (
    <section className="mx-auto px-4 py-12">
      <h2 className="text-balance text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
        Feedback from Clients
      </h2>
      <p className="mt-2 max-w-2xl text-pretty text-sm text-zinc-600 dark:text-zinc-400">
        Real feedback from people i have worked with.
      </p>
      <div className="mt-6">
        <ReviewList reviews={demoReviews} />
      </div>
    </section>
  );
}
