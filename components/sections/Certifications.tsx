import { BlurFade } from "@/components/ui/blur-fade";
import { CloudIcon, CpuChipIcon, CodeBracketIcon, ChartBarIcon } from "@/components/ui/icons";

const featured = [
  { icon: <CloudIcon className="w-6 h-6" />, name: "Oracle Cloud Infrastructure 2025", issuer: "Oracle · Certificación OCI", tags: ["Cloud", "OCI"] },
  { icon: <CpuChipIcon className="w-6 h-6" />, name: "Oracle Cloud Infrastructure IA 2025", issuer: "Oracle · Certificación OCI IA", tags: ["AI", "OCI"] },
  { icon: <CodeBracketIcon className="w-6 h-6" />, name: "ONE Back-End Specialist", issuer: "Oracle + Alura Latam", tags: ["Backend"], hours: "301 H" },
  { icon: <ChartBarIcon className="w-6 h-6" />, name: "Analista de Datos", issuer: "UdeA + Talento Tech", tags: ["Data"], hours: "159 H" },
];

const others = [
  { name: "Python Essentials", issuer: "Cisco NetAcad" },
  { name: "Power BI", issuer: "Microsoft" },
  { name: "Scrum Fundamentals", issuer: "SCRUMstudy" },
  { name: "Git & GitHub", issuer: "Platzi" },
];

const directions = ["right", "left", "right", "left"] as const;

export default function Certifications() {
  return (
    <section id="certificaciones" className="py-[100px]" style={{ background: "#1e293b" }}>
      <div className="container-main">
        <BlurFade delay={0.1} inView direction="up" offset={24}>
          <p className="slabel slabel-light mb-3">Certificaciones</p>
          <h2
            className="font-heading font-bold text-white tracking-tight mb-14"
            style={{ fontSize: "clamp(2rem,4vw,3rem)", lineHeight: 1.15 }}
          >
            Formación & credenciales
          </h2>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px] mb-5">
          {featured.map((cert, i) => (
            <BlurFade key={i} delay={0.15 + i * 0.08} inView direction={directions[i]} offset={32}>
              <div
                className="flex items-start gap-[18px] p-6 rounded-[20px] transition-all duration-300 hover:-translate-y-0.5 h-full"
                style={{
                  background: "rgba(255,255,255,.04)",
                  border: "1px solid rgba(255,255,255,.08)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-[10px] flex items-center justify-center flex-shrink-0 text-brand-accent"
                  style={{ background: "rgba(37,99,235,.15)" }}
                >
                  {cert.icon}
                </div>
                <div>
                  <span className="font-heading text-[0.92rem] font-bold text-white block">{cert.name}</span>
                  <span className="text-[0.78rem] text-brand-muted block mt-0.5">{cert.issuer}</span>
                  <div className="flex gap-2 mt-2 items-center flex-wrap">
                    {cert.tags.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[0.7rem] font-medium font-mono-brand"
                        style={{ background: "rgba(37,99,235,.2)", color: "#93c5fd" }}
                      >
                        {t}
                      </span>
                    ))}
                    {cert.hours && (
                      <span className="font-mono-brand text-[0.7rem] text-brand-accent font-medium">{cert.hours}</span>
                    )}
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
          {others.map((cert, i) => (
            <BlurFade key={i} delay={0.35 + i * 0.06} inView direction="up" offset={20}>
              <div
                className="px-[18px] py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,.04)",
                  border: "1px solid rgba(255,255,255,.08)",
                }}
              >
                <span className="font-heading text-[0.8rem] font-bold text-white block">{cert.name}</span>
                <span className="text-[0.7rem] text-brand-muted block mt-0.5">{cert.issuer}</span>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
