import { NextResponse } from "next/server";

// Optional: force Node runtime if you ever move to edge by mistake
export const runtime = "nodejs";

// const DEFAULT_RANGE = "last_7_days"; 
export async function GET(request: Request) {
  try {
    // const { searchParams } = new URL(request.url);
    // const range = searchParams.get("range") || DEFAULT_RANGE;

    const apiKey = process.env.WAKATIME_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "WAKATIME_API_KEY not configured on server" },
        { status: 500 }
      );
    }

    // Build Basic auth header: base64("<apiKey>:")
    const basic = Buffer.from(`${apiKey}:`).toString("base64");

    const wakatimeUrl = `https://wakatime.com/api/v1/users/current/stats`;

    const resp = await fetch(wakatimeUrl, {
      method: "GET",
      headers: {
        Authorization: `Basic ${basic}`,
        Accept: "application/json",
      },
      // Avoid caching if you want fresh data on each request
      cache: "no-store",
    });

    if (!resp.ok) {
      const text = await resp.text().catch(() => "");
      return NextResponse.json(
        {
          error: "Failed to fetch WakaTime stats",
          status: resp.status,
          statusText: resp.statusText,
          body: text || undefined,
        },
        { status: resp.status }
      );
    }

    const data = await resp.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching WakaTime stats:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error?.message },
      { status: 500 }
    );
  }
}