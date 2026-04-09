import { BlurFade } from "@/components/ui/blur-fade";
import { CpuChipIcon, BoltIcon, PlugIcon, PenLineIcon } from "@/components/ui/icons";

const experiments = [
  {
    icon: <CpuChipIcon className="w-6 h-6" />,
    title: "Entrenamiento & Evaluación de LLMs",
    desc: "Diseño y validación de prompts para detectar fallos lógicos, sesgos y errores de razonamiento en modelos generativos. Técnicas: Chain-of-Thought, Few-Shot, System Prompts.",
    status: "Activo",
    stat: "200+ prompts",
  },
  {
    icon: <BoltIcon className="w-6 h-6" />,
    title: "Automatización con Agentes IA",
    desc: "Construcción de flujos end-to-end con n8n, Make, Zapier y Power Automate integrados con APIs de OpenAI y Copilot para automatización empresarial real.",
    status: "Activo",
    stat: "6+ plataformas",
  },
  {
    icon: <PlugIcon className="w-6 h-6" />,
    title: "Integraciones API + IA",
    desc: "Conexión de modelos IA con sistemas existentes mediante APIs RESTful. Pipelines de procesamiento con OpenAI, Copilot y servicios OCI sobre infraestructura Linux.",
    status: "Activo",
    stat: "OCI · Linux",
  },
  {
    icon: <PenLineIcon className="w-6 h-6" />,
    title: "Prompt Engineering Avanzado",
    desc: "Diseño de system prompts, plantillas reutilizables y frameworks de validación para producción. Exploración de técnicas para optimización de outputs en Claude, GPT-4 y Gemini.",
    status: "Activo",
    stat: "3 modelos",
  },
];

// Alternate slide direction per card: left-col slides from left, right-col from right
const directions = ["right", "left", "right", "left"] as const;

export default function AILab() {
  return (
    <section id="ai-lab" className="py-[100px]" style={{ background: "#0f172a" }}>
      <div className="container-main">
        <BlurFade delay={0.1} inView direction="up" offset={24}>
          <p className="slabel slabel-light mb-3">IA Lab</p>
          <h2
            className="font-heading font-bold text-white tracking-tight mb-14"
            style={{ fontSize: "clamp(2rem,4vw,3rem)", lineHeight: 1.15 }}
          >
            Experimentos & expertise IA
          </h2>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {experiments.map((exp, i) => (
            <BlurFade key={i} delay={0.15 + i * 0.1} inView direction={directions[i]} offset={36}>
              <div
                className="p-7 rounded-[20px] flex flex-col gap-3.5 transition-all duration-300 relative overflow-hidden group hover:-translate-y-1 hover:shadow-[0_12px_48px_rgba(0,0,0,.4)] h-full"
                style={{
                  background: "rgba(255,255,255,.04)",
                  border: "1px solid rgba(255,255,255,.08)",
                }}
              >
                {/* gradient top line on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[400ms] ease-out"
                  style={{ background: "linear-gradient(90deg,#2563eb,#38bdf8)" }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: "linear-gradient(135deg,rgba(37,99,235,.06),transparent)" }}
                />

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-brand-accent"
                  style={{ background: "rgba(37,99,235,.15)" }}
                >
                  {exp.icon}
                </div>

                <h3 className="font-heading text-[1rem] font-bold text-white">{exp.title}</h3>

                <p className="text-[0.875rem] leading-[1.7] flex-1" style={{ color: "rgba(255,255,255,.55)" }}>
                  {exp.desc}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <span className="inline-flex items-center gap-1.5 text-[0.7rem] font-mono-brand font-medium text-brand-success">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-success" />
                    {exp.status}
                  </span>
                  <span className="text-[0.75rem] font-mono-brand font-semibold text-brand-accent">
                    {exp.stat}
                  </span>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
