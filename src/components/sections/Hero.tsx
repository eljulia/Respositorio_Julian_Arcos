"use client";

import { useState } from "react";
import { toast } from "sonner";
import { NumberTicker } from "@/components/ui/number-ticker";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { Marquee } from "@/components/ui/marquee";
import { DotPattern } from "@/components/ui/dot-pattern";

const pills = [
  "Python", "Node.js", "LLMs", "n8n", "Docker",
  "Linux", "REST APIs", "TypeScript", "OpenAI API", "FastAPI",
];

const stats = [
  { value: 200, suffix: "+", label: "prompts diseñados" },
  { value: 70,  suffix: "%", label: "reducción reportes manuales" },
  { value: 3,   suffix: "°", label: "puesto hackathon regional" },
  { value: 800, suffix: "+", label: "horas certificadas" },
];

export default function Hero() {
  const [cvLoading, setCvLoading] = useState(false);

  async function handleDownloadCV() {
    setCvLoading(true);
    try {
      const res = await fetch("/api/cv");
      const data: { url?: string; error?: string } = await res.json();
      if (data.url) {
        window.open(data.url, "_blank");
      } else {
        toast.error(data.error ?? "No se pudo obtener el CV");
      }
    } catch {
      toast.error("Error al descargar el CV");
    } finally {
      setCvLoading(false);
    }
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#060608" }}
    >
      {/* DotPattern background */}
      <DotPattern
        width={32}
        height={32}
        cx={1} cy={1} cr={1}
        className="[mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,black,transparent)] text-blue-600/[0.09]"
      />

      {/* Primary radial glow — blue center */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 900,
          height: 900,
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(37,99,235,.15) 0%,transparent 65%)",
          top: "50%",
          left: "45%",
          transform: "translate(-50%,-50%)",
        }}
      />
      {/* Secondary glow — cyan offset right */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(56,189,248,.07) 0%,transparent 70%)",
          top: "30%",
          right: "5%",
        }}
      />

      <div className="container-main relative z-10 pt-[120px] pb-28 w-full">

        {/* Badge */}
        <div className="mb-8">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-mono-brand text-[0.8rem] font-medium"
            style={{
              border: "1px solid rgba(37,99,235,.35)",
              background: "rgba(37,99,235,.07)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: "#10b981" }} />
            <AnimatedGradientText
              colorFrom="#2563EB"
              colorTo="#38BDF8"
              speed={0.6}
              className="font-mono-brand text-[0.8rem] font-medium"
            >
              Disponible para proyectos · Armenia, Colombia 🇨🇴
            </AnimatedGradientText>
          </div>
        </div>

        {/* Title */}
        <h1
          className="font-heading font-extrabold text-white leading-[1.02] tracking-[-0.035em] mb-4"
          style={{ fontSize: "clamp(3.2rem, 8vw, 6rem)" }}
        >
          Julián
          <br />
          <span
            style={{
              background: "linear-gradient(135deg,#2563EB 20%,#38BDF8 80%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Arcos
          </span>
        </h1>

        {/* Role with cursor blink */}
        <p
          className="font-mono-brand text-brand-accent mb-6 flex items-center gap-3"
          style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)" }}
        >
          <span className="text-brand-primary">{">"}</span>
          AI Engineer &amp; Backend Developer
          <span
            className="inline-block w-[2px] h-[1.1em] bg-brand-accent align-middle"
            style={{ animation: "blink 1.1s step-start infinite" }}
          />
        </p>

        {/* Description */}
        <p
          className="mb-10 leading-[1.8] max-w-[520px]"
          style={{ fontSize: "1.05rem", color: "rgba(255,255,255,.58)" }}
        >
          Diseño APIs RESTful, automatizo flujos con agentes IA y construyo
          sistemas escalables sobre Linux. Ingeniería Electrónica + IA aplicada
          al mundo real.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 mb-12">
          <a
            href="#proyectos"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-primary text-white font-semibold text-[0.9rem] rounded-[10px] no-underline transition-all duration-300 hover:bg-brand-primary-dark hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,99,235,.45)]"
          >
            Ver proyectos →
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-white font-medium text-[0.9rem] rounded-[10px] no-underline transition-all duration-300 hover:bg-white/5 hover:-translate-y-0.5"
            style={{ border: "1px solid rgba(255,255,255,.18)" }}
          >
            Hablemos
          </a>
          <button
            onClick={handleDownloadCV}
            disabled={cvLoading}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-white font-medium text-[0.9rem] rounded-[10px] transition-all duration-300 hover:bg-white/5 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
            style={{ border: "1px solid rgba(255,255,255,.18)" }}
          >
            {cvLoading ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Cargando...
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Descargar CV
              </>
            )}
          </button>
          <a
            href="https://github.com/eljulia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-white font-medium text-[0.9rem] rounded-[10px] no-underline transition-all duration-300 hover:bg-white/5 hover:-translate-y-0.5"
            style={{ border: "1px solid rgba(255,255,255,.18)" }}
          >
            GitHub ↗
          </a>
        </div>

        {/* Marquee pills */}
        <div className="relative mb-12 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 z-10"
            style={{ background: "linear-gradient(to right, #060608, transparent)" }} />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 z-10"
            style={{ background: "linear-gradient(to left, #060608, transparent)" }} />
          <Marquee pauseOnHover className="[--duration:28s] [--gap:0.625rem]">
            {pills.map((p) => <span key={p} className="pill-dark">{p}</span>)}
          </Marquee>
        </div>

        {/* Stats */}
        <div
          className="flex flex-wrap gap-10 sm:gap-16 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,.08)" }}
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-heading text-[1.8rem] font-extrabold text-white tracking-tight leading-none flex items-baseline gap-0.5">
                <NumberTicker
                  value={s.value}
                  delay={0.2}
                  className="font-heading text-[1.8rem] font-extrabold text-white tracking-tight leading-none"
                />
                <span className="text-brand-primary">{s.suffix}</span>
              </div>
              <div className="text-[0.75rem] text-brand-muted font-mono-brand mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40">
        <span className="font-mono-brand text-[0.62rem] text-white/50 tracking-[.15em] uppercase">scroll</span>
        <div
          className="w-[1px] h-8"
          style={{
            background: "linear-gradient(to bottom, rgba(255,255,255,.4), transparent)",
            animation: "pulse 2s ease-in-out infinite",
          }}
        />
      </div>

    </section>
  );
}
