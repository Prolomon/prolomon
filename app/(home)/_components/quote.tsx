"use client";

import { useCallback, useEffect, useRef, useState } from "react";
const { getQuote } = require("generate-quote");

import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Button,
  Divider,
  Spinner,
} from "@heroui/react";

import { Shuffle, Clipboard, ClipboardCheck } from "react-bootstrap-icons";

type QuoteData = {
  text: string;
  author?: string;
};

export function QuoteCard() {
  const [quote, setQuote] = useState<QuoteData | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const copyTimer = useRef<number | null>(null);

  const fetchRandom = useCallback(() => {
    setLoading(true);
    // generate-quote is synchronous; use rAF for a smooth spinner tick.
    if (typeof window !== "undefined" && "requestAnimationFrame" in window) {
      window.requestAnimationFrame(() => {
        const q = getQuote(); // { text, author }
        setQuote(q);
        setLoading(false);
      });
    } else {
      const q = getQuote();
      setQuote(q);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRandom();

    return () => {
      if (copyTimer.current) {
        window.clearTimeout(copyTimer.current);
      }
    };
  }, [fetchRandom]);

  const qText = quote?.text ?? (loading ? "" : "Stay hungry, stay foolish.");
  const qAuthor = quote?.author; 

  const onCopy = useCallback(async () => {
    if (!quote) return;
    const payload = `“${quote.text}”${quote.author ? ` — ${quote.author}` : ""}`;
    try {
      await navigator.clipboard.writeText(payload);
      setCopied(true);
    } catch {
      // Fallback for older browsers
      try {
        const el = document.createElement("textarea");
        el.value = payload;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        setCopied(true);
      } catch {
        // Ignore
      }
    } finally {
      if (copyTimer.current) window.clearTimeout(copyTimer.current);
      copyTimer.current = window.setTimeout(() => setCopied(false), 1500);
    }
  }, [quote]);

  return (
    <section className="px-4">
      <Card className="mx-auto mt-16">
        <CardHeader className="flex items-center justify-between">
          <div className="font-semibold">Daily Inspiration</div>
          <Button
            size="md"
            variant="flat"
            startContent={loading ? <Spinner size="sm" /> : <Shuffle />}
            onPress={fetchRandom}
            isDisabled={loading}
          >
            New
          </Button>
        </CardHeader>

        <Divider />

        <CardBody>
          <blockquote className="text-lg italic leading-relaxed">
            {loading ? (
              <div className="flex items-center gap-2 text-default-500">
                <Spinner size="sm" /> Loading inspiration...
              </div>
            ) : (
              <>“{qText}”</>
            )}
          </blockquote>
          {qAuthor && !loading && (
            <div className="mt-3 text-sm text-default-500">— {qAuthor}</div>
          )}
        </CardBody>
        <Divider />

        <CardFooter className="flex items-center justify-end gap-2">
          <Button
            size="sm"
            variant="flat"
            startContent={copied ? <ClipboardCheck /> : <Clipboard />}
            onPress={onCopy}
            isDisabled={!quote}
            className="hover:outline-primary"
          >
            {copied ? "Copied" : "Copy"}
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}
