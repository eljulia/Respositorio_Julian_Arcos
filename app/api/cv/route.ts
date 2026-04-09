import { NextResponse } from "next/server";
import { getCVUrl } from "@/lib/notion";

export async function GET() {
  try {
    const url = await getCVUrl();
    return NextResponse.json({ url });
  } catch (error) {
    console.error("[GET /api/cv]", error);
    return NextResponse.json(
      { error: "No se pudo obtener el CV" },
      { status: 500 }
    );
  }
}
