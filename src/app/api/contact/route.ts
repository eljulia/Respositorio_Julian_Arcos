import { NextRequest, NextResponse } from "next/server";
import { writeContact } from "@/lib/services/notion";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body: unknown = await request.json();

    if (typeof body !== "object" || body === null) {
      return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
    }

    const { nombre, email, telefono, mensaje } = body as Record<string, unknown>;

    if (typeof nombre !== "string" || nombre.trim().length === 0) {
      return NextResponse.json(
        { error: "Nombre es requerido" },
        { status: 400 }
      );
    }

    if (typeof email !== "string" || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Email inválido" },
        { status: 400 }
      );
    }

    await writeContact({
      nombre: nombre.trim(),
      email: email.trim().toLowerCase(),
      telefono:
        typeof telefono === "string" && telefono.trim()
          ? telefono.trim()
          : undefined,
      mensaje:
        typeof mensaje === "string" && mensaje.trim()
          ? mensaje.trim()
          : undefined,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[POST /api/contact]", error);
    return NextResponse.json(
      { error: "Error interno. Intenta de nuevo." },
      { status: 500 }
    );
  }
}
