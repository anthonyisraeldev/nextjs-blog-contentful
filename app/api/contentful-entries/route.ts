import { fetchEntries } from "@/lib/client";
// import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
  // revalidatePath("/", "layout");
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

// export async function GET() {
//   try {
//     const entries = await fetchEntries("blog");

//     // Configura los encabezados para la revalidación
//     const response = NextResponse.json(entries);
//     response.headers.set(
//       "Cache-Control",
//       "public, s-maxage=10, stale-while-revalidate=15"
//     );

//     return response;
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json(
//       { error: "Error fetching Contentful entries" },
//       { status: 500 }
//     );
//   }
// }
