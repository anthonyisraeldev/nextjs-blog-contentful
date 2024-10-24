import { fetchEntries } from "@/lib/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const entries = await fetchEntries("blog");
    return NextResponse.json(entries);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Error fetching Contentful entries" },
      { status: 500 }
    );
  }
}
