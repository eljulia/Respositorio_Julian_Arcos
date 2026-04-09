import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { TrophyIcon, StarIcon, ClockIcon, CloudIcon, BoltIcon, ChartBarIcon } from "@/components/ui/icons";

const projects = [
  {
    id: "hackathon",
    featured: true,
    award: "3° Puesto · Hackathon Talento Tech · Región 2 · 2025",
    title: "MVP Inteligencia de Marketing con IA",
    desc: "MVP completo construido en 8 horas: chatbot IA + análisis predictivo del comportamiento de clientes + dashboards interactivos para empresa de marketing digital. Finalista regional evaluado por panel técnico especializado.",
    metric: "MVP entregado en 8 horas · 3 módulos integrados",
    stack: ["Python", "OpenAI API", "n8n", "Streamlit"],
  },
  {
    id: "sdr",
    award: "1° Lugar · Muestra Tecnológica X · Categoría Gauss",
    title: "Radio Definida por Software (SDR)",
    desc: "Sistema SDR diseñado con lógica programable VHDL sobre FPGA. Proyecto ganador de la Muestra Tecnológica X de Ingeniería Electrónica, Universidad del Quindío.",
    metric: "1° lugar · evaluación técnica unánime",
    stack: ["VHDL", "FPGA", "Xilinx"],
  },
  {
    id: "automation",
    wide: true,
    title: "Automatización Empresarial · Envíos Digitales SAS",
    desc: "Sistema de automatización end-to-end: integración Power Automate + SharePoint + SQL para eliminar reportes manuales, más virtualización y despliegue de pasarela ERP Factool en producción sobre servidores Linux.",
    metrics: [
      { icon: <ChartBarIcon className="w-4 h-4" />, text: "70% menos reportes manuales" },
      { icon: <CloudIcon className="w-4 h-4" />, text: "+500 registros migrados a cloud" },
      { icon: <BoltIcon className="w-4 h-4" />, text: "60% menos tiempo en reportes" },
    ],
    stack: ["Power Automate", "SharePoint", "SQL Server", "Linux", "ERP Factool"],
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-[100px]" style={{ background: "#0f172a" }}>
      <div className="container-main">
        <BlurFade delay={0.1} inView direction="up" offset={24}>
          <p className="slabel slabel-light mb-3">Proyectos</p>
          <h2
            className="font-heading font-bold text-white tracking-tight mb-14"
            style={{ fontSize: "clamp(2rem,4vw,3rem)", lineHeight: 1.15 }}
          >
            Trabajo destacado
          </h2>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {/* Featured card — slides from left */}
          <BlurFade delay={0.15} inView direction="right" offset={36} className="lg:col-span-2">
            <div
              className="relative rounded-[20px] p-7 flex flex-col gap-4 transition-all duration-300 overflow-hidden group hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(0,0,0,.4)] h-full"
              style={{
                background: "linear-gradient(135deg,rgba(37,99,235,.12),rgba(56,189,248,.05))",
                border: "1px solid rgba(37,99,235,.2)",
              }}
            >
              <BorderBeam
                size={120}
                duration={8}
                colorFrom="#2563EB"
                colorTo="#38BDF8"
                borderWidth={1.5}
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: "linear-gradient(135deg,rgba(37,99,235,.08),transparent)" }}
              />
              <div className="award-badge">
                <TrophyIcon className="w-3 h-3" />
                {projects[0].award}
              </div>
              <h3 className="font-heading text-[1.15rem] font-bold text-white leading-tight">
                {projects[0].title}
              </h3>
              <p className="text-[0.875rem] leading-[1.7] flex-1" style={{ color: "rgba(255,255,255,.55)" }}>
                {projects[0].desc}
              </p>
              <div
                className="flex items-center gap-2 px-3.5 py-2.5 rounded-lg"
                style={{ background: "rgba(37,99,235,.12)", border: "1px solid rgba(37,99,235,.25)" }}
              >
                <ClockIcon className="w-3.5 h-3.5 text-brand-accent flex-shrink-0" />
                <span className="text-brand-accent font-mono-brand text-[0.78rem]">{projects[0].metric}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {projects[0].stack.map((s) => <span key={s} className="pill-dark">{s}</span>)}
              </div>
            </div>
          </BlurFade>

          {/* SDR card — slides from right */}
          <BlurFade delay={0.2} inView direction="left" offset={36}>
            <div
              className="relative rounded-[20px] p-7 flex flex-col gap-4 transition-all duration-300 overflow-hidden group hover:-translate-y-1 hover:border-[rgba(37,99,235,.4)] hover:shadow-[0_24px_48px_rgba(0,0,0,.4)] h-full"
              style={{
                background: "rgba(255,255,255,.04)",
                border: "1px solid rgba(255,255,255,.08)",
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: "linear-gradient(135deg,rgba(37,99,235,.06),transparent)" }}
              />
              <div className="award-badge">
                <StarIcon className="w-3 h-3" />
                {projects[1].award}
              </div>
              <h3 className="font-heading text-[1.15rem] font-bold text-white leading-tight">
                {projects[1].title}
              </h3>
              <p className="text-[0.875rem] leading-[1.7] flex-1" style={{ color: "rgba(255,255,255,.55)" }}>
                {projects[1].desc}
              </p>
              <div
                className="flex items-center gap-2 px-3.5 py-2.5 rounded-lg"
                style={{ background: "rgba(37,99,235,.1)", border: "1px solid rgba(37,99,235,.2)" }}
              >
                <StarIcon className="w-3.5 h-3.5 text-brand-accent flex-shrink-0" />
                <span className="text-brand-accent font-mono-brand text-[0.78rem]">{projects[1].metric}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {projects[1].stack.map((s) => <span key={s} className="pill-dark">{s}</span>)}
              </div>
            </div>
          </BlurFade>

          {/* Wide automation card — slides from bottom */}
          <BlurFade delay={0.25} inView direction="up" offset={28} className="col-span-1 md:col-span-2 lg:col-span-3">
            <div
              className="rounded-[20px] p-7 flex flex-col gap-4 transition-all duration-300 group hover:-translate-y-1 hover:border-[rgba(37,99,235,.4)] hover:shadow-[0_24px_48px_rgba(0,0,0,.4)]"
              style={{
                background: "rgba(255,255,255,.04)",
                border: "1px solid rgba(255,255,255,.08)",
              }}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="font-heading text-[1.15rem] font-bold text-white leading-tight mb-2">
                    {projects[2].title}
                  </h3>
                  <p className="text-[0.875rem] leading-[1.7]" style={{ color: "rgba(255,255,255,.55)" }}>
                    {projects[2].desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {projects[2].stack.map((s) => <span key={s} className="pill-dark">{s}</span>)}
                  </div>
                </div>
                <div className="flex flex-col gap-2.5 lg:min-w-[220px]">
                  {projects[2].metrics?.map((m, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-3.5 py-2.5 rounded-lg"
                      style={{ background: "rgba(37,99,235,.1)", border: "1px solid rgba(37,99,235,.2)" }}
                    >
                      <span className="text-brand-accent flex-shrink-0">{m.icon}</span>
                      <span className="text-[0.78rem] text-brand-accent font-mono-brand">{m.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </BlurFade>

        </div>
      </div>
    </section>
  );
}
