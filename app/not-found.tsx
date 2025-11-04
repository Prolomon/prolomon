"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button, Card, CardBody, Divider } from "@heroui/react";

export default function NotFound() {
  const year = new Date().getFullYear();
  return (
    <main className="flex flex-col bg-background text-foreground">
      <div className="container mx-auto flex-1 px-4 sm:px-6 lg:px-8">
        <Card shadow="sm" className="border bg-card">
          <CardBody className="p-6 sm:p-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left: Headline */}
              <div className="order-2 lg:order-1 space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
                  You&apos;ve strayed
                  <br /> beyond the map.
                  <br /> This page doesn&apos;t exist.
                </h1>
              </div>

              {/* Right: Big mark + copy + CTA */}
              <div className="order-1 lg:order-2">
                <div className="relative">
                  {/* Big word mark */}
                  <div className="select-none font-extrabold text-[96px] sm:text-[128px] md:text-[160px] lg:text-[220px] leading-none text-purple-600/90 tracking-tight -mb-6 lg:-mb-10">
                    ops!
                  </div>
                  {/* Body copy */}
                  <p className="mt-8 max-w-xl text-muted-foreground text-base sm:text-lg">
                    Looks like you&apos;ve reached a dead end. The link may be broken or the page was moved. No worries — use the button below to head back home and continue exploring.
                  </p>
                  {/* CTA */}
                  <div className="mt-8">
                    <Button as={Link} href="/" color="primary" variant="solid" className="rounded-full px-8 py-6 text-sm font-semibold">
                      Back to home
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
          <Divider />
          <div className="px-6 sm:px-10 py-4 flex items-center text-xs sm:text-sm text-muted-foreground">
            <span>© {year} {siteConfig.name}. All rights reserved.</span>
            <div className="ml-auto flex items-center gap-3 opacity-80" />
          </div>
        </Card>
      </div>
    </main>
  );
}
