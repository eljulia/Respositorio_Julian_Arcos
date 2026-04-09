import { BlurFade } from "@/components/ui/blur-fade";

const experience = [
  {
    period: "Jun. 2025 — Actualidad",
    role: "Desarrollador Freelancer & Entrenador IA",
    company: "Outlier AI",
    badge: "Remoto",
    current: true,
    items: [
      "Evaluación y entrenamiento de modelos LLM para detección de errores lógicos y de razonamiento.",
      "Diseño de prompts avanzados: Chain-of-Thought, Few-Shot, System Prompts para modelos en producción.",
      "Validación de respuestas con criterios técnicos de precisión, coherencia y utilidad.",
    ],
    tech: ["LLMs", "Prompt Engineering", "Python", "Evaluación IA"],
  },
  {
    period: "Dic. 2025 — Mar. 2026",
    role: "Analista de Despliegue de Servicios",
    company: "Envíos Digitales SAS",
    badge: "Remoto",
    items: [
      "Eliminé 70% de reportes manuales con automatizaciones en Power Automate.",
      "Despliegue de pasarela ERP Factool en servidores Linux de producción.",
      "Migración de +500 registros a infraestructura cloud con reducción del 60% en tiempo de reporte.",
    ],
    tech: ["Power Automate", "SharePoint", "SQL Server", "Linux", "ERP"],
  },
  {
    period: "Feb. 2025 — Jun. 2025",
    role: "Auxiliar de Automatización y Gestión de Datos",
    company: "Universidad del Quindío",
    badge: "Presencial",
    items: [
      "Desarrollé automatizaciones con Power Platform, SharePoint y herramientas de la suite Microsoft.",
      "Gestión y migración de bases de datos para procesos administrativos universitarios.",
      "Soporte técnico en infraestructura y herramientas digitales para equipos académicos.",
    ],
    tech: ["Power Platform", "SharePoint", "Microsoft 365", "SQL"],
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="py-[100px]" style={{ background: "#060608" }}>
      <div className="container-main">
        <BlurFade delay={0.1} inView direction="up" offset={24}>
          <p className="slabel slabel-light mb-3">Experiencia</p>
          <h2
            className="font-heading font-bold text-white tracking-tight mb-14"
            style={{ fontSize: "clamp(2rem,4vw,3rem)", lineHeight: 1.15 }}
          >
            Trayectoria profesional
          </h2>
        </BlurFade>

        {/* Timeline */}
        <div className="relative pl-8" style={{ borderLeft: "1px solid rgba(37,99,235,.25)" }}>
          {experience.map((exp, i) => (
            <BlurFade key={i} delay={0.15 + i * 0.15} inView direction="right" offset={32}>
              <div className="relative pb-[52px] last:pb-0 pl-12">

                {/* Timeline dot — pulse for current role */}
                <div
                  className="absolute left-[-7px] top-[5px] w-[15px] h-[15px] rounded-full flex items-center justify-center"
                  style={{
                    background: exp.current ? "#2563eb" : "#1e293b",
                    border: `2px solid ${exp.current ? "#2563eb" : "#334155"}`,
                    boxShadow: exp.current
                      ? "0 0 0 4px rgba(37,99,235,.15), 0 0 12px rgba(37,99,235,.3)"
                      : "none",
                  }}
                >
                  {exp.current && (
                    <span
                      className="absolute inset-0 rounded-full"
                      style={{
                        animation: "pulse-dot 2s infinite",
                        background: "rgba(37,99,235,.4)",
                      }}
                    />
                  )}
                  <span
                    className="relative w-[5px] h-[5px] rounded-full"
                    style={{ background: exp.current ? "#fff" : "#64748b" }}
                  />
                </div>

                {/* Current badge */}
                {exp.current && (
                  <span
                    className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full font-mono-brand text-[0.62rem] font-medium mb-2"
                    style={{
                      background: "rgba(16,185,129,.1)",
                      border: "1px solid rgba(16,185,129,.25)",
                      color: "#10b981",
                    }}
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-success pulse-dot" />
                    Actual
                  </span>
                )}

                <p className="font-mono-brand text-[0.7rem] text-brand-accent font-medium mb-1.5 tracking-[.05em]">
                  {exp.period}
                </p>

                <h3 className="font-heading text-[1.1rem] font-bold text-white mb-1">{exp.role}</h3>

                <div className="flex items-center gap-2 mb-3.5" style={{ fontSize: "0.85rem", color: "#64748b" }}>
                  {exp.company}
                  <span
                    className="px-2 py-0.5 rounded font-mono-brand text-[0.66rem]"
                    style={{ background: "rgba(255,255,255,.05)", color: "#64748b" }}
                  >
                    {exp.badge}
                  </span>
                </div>

                <ul className="flex flex-col gap-[7px] mb-3.5 list-none">
                  {exp.items.map((item, j) => (
                    <li
                      key={j}
                      className="text-[0.85rem] leading-[1.6] pl-4 relative"
                      style={{ color: "rgba(255,255,255,.55)" }}
                    >
                      <span className="absolute left-0 top-[3px] text-brand-primary text-[0.68rem]">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => <span key={t} className="pill-dark">{t}</span>)}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
