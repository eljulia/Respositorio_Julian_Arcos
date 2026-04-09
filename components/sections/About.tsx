import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { GradCapIcon, CpuChipIcon, TrophyIcon, ArrowTrendingUpIcon } from "@/components/ui/icons";

const highlights = [
  { icon: <GradCapIcon className="w-[18px] h-[18px]" />, title: "Ing. Electrónico", sub: "Universidad del Quindío · 2025" },
  { icon: <CpuChipIcon className="w-[18px] h-[18px]" />, title: "AI Trainer · Outlier AI", sub: "LLMs & Prompt Engineering" },
  { icon: <TrophyIcon className="w-[18px] h-[18px]" />, title: "3° Puesto Hackathon", sub: "Talento Tech · Región 2 · 2025" },
  { icon: <ArrowTrendingUpIcon className="w-[18px] h-[18px]" />, title: "Fundador Arcode", sub: "IA & Transformación Digital" },
];

export default function About() {
  return (
    <section id="sobre-mi" className="py-[100px]" style={{ background: "#060608" }}>
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-center">

          {/* Photo column — slides in from left */}
          <BlurFade delay={0.1} inView direction="right" offset={40}>
            <div className="relative max-w-[380px] mx-auto w-full lg:max-w-none">
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: "3/4", borderRadius: 20, boxShadow: "0 12px 48px rgba(0,0,0,.5)" }}
              >
                <Image
                  src="/images/FotoJulian.png"
                  alt="Julián Arcos"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 1024px) 380px, 420px"
                />
                <div className="absolute inset-0" style={{ borderRadius: 20, border: "1px solid rgba(37,99,235,.2)" }} />
              </div>

              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl -z-10"
                style={{ background: "#2563eb", opacity: 0.1 }} />

              <div
                className="absolute top-6 -right-5 rounded-[10px] px-4 py-2.5 flex items-center gap-2 text-[0.8rem] font-semibold"
                style={{
                  background: "rgba(15,23,42,.9)",
                  border: "1px solid rgba(37,99,235,.3)",
                  color: "#e2e8f0",
                  boxShadow: "0 8px 32px rgba(0,0,0,.4)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <span className="w-2 h-2 rounded-full pulse-dot" style={{ background: "#10b981" }} />
                Disponible
              </div>
            </div>
          </BlurFade>

          {/* Content column — slides in from right */}
          <div>
            <BlurFade delay={0.15} inView direction="left" offset={40}>
              <p className="slabel slabel-light mb-3">Sobre mí</p>
              <h2
                className="font-heading font-bold text-white tracking-tight mb-8"
                style={{ fontSize: "clamp(2rem,4vw,3rem)", lineHeight: 1.15 }}
              >
                Ingeniero que construye con IA
              </h2>
            </BlurFade>

            <BlurFade delay={0.2} inView direction="left" offset={30}>
              <div className="space-y-[18px]" style={{ color: "rgba(255,255,255,.55)", fontSize: "1.02rem", lineHeight: 1.8 }}>
                <p>
                  Soy <strong className="text-white">Ingeniero Electrónico</strong> graduado de
                  la Universidad del Quindío, con especialización práctica en{" "}
                  <strong className="text-white">desarrollo backend</strong> e{" "}
                  <strong className="text-white">inteligencia artificial aplicada</strong>.
                  Construyo desde APIs RESTful en producción hasta flujos de automatización con agentes IA.
                </p>
                <p>
                  He entrenado y evaluado modelos LLM en Outlier AI, administrado
                  infraestructura Linux en ambientes empresariales y automatizado
                  procesos que eliminaron horas de trabajo manual en organizaciones reales.
                </p>
                <p>
                  Hoy lidero{" "}
                  <strong className="text-white">Arcode</strong>, mi agencia
                  de IA y transformación digital para PyMEs del Eje Cafetero,
                  donde conecto tecnología de vanguardia con negocios reales.
                </p>
              </div>
            </BlurFade>

            {/* Highlights grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-8">
              {highlights.map((h, i) => (
                <BlurFade key={i} delay={0.25 + i * 0.08} inView direction="up" offset={20}>
                  <div
                    className="flex items-start gap-3 p-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: "rgba(255,255,255,.04)",
                      border: "1px solid rgba(255,255,255,.08)",
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-brand-accent"
                      style={{ background: "rgba(37,99,235,.15)" }}
                    >
                      {h.icon}
                    </div>
                    <div>
                      <strong className="text-sm font-semibold text-white block">{h.title}</strong>
                      <span className="text-xs text-brand-muted">{h.sub}</span>
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
