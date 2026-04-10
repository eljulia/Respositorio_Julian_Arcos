import { BlurFade } from "@/components/ui/blur-fade";
import { CloudIcon, CpuChipIcon, CodeBracketIcon, ChartBarIcon } from "@/components/ui/icons";

const featured = [
  {
    icon: <CloudIcon className="w-6 h-6" />,
    name: "Oracle Cloud Infrastructure 2025",
    issuer: "Oracle · Certificación OCI",
    tags: ["Cloud", "OCI"],
    badge: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=12DEE3EC298B3F381717DECAA2936005F6FB9BE44971EF87DDB56FDC92068C22",
  },
  {
    icon: <CpuChipIcon className="w-6 h-6" />,
    name: "Oracle Cloud Infrastructure IA 2025",
    issuer: "Oracle · Certificación OCI IA",
    tags: ["AI", "OCI"],
    badge: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=DC26D8C07DDCE4B8104BD477716CD32407445B0254E41714C8196B28E7A49910",
  },
  {
    icon: <CodeBracketIcon className="w-6 h-6" />,
    name: "ONE Back-End Specialist",
    issuer: "Oracle + Alura Latam",
    tags: ["Backend"],
    hours: "301 H",
    badge: "https://app.aluracursos.com/program/certificate/a59def17-84c6-4c33-9c61-5f08dc11cab6?lang",
  },
  {
    icon: <ChartBarIcon className="w-6 h-6" />,
    name: "Analista de Datos",
    issuer: "UdeA + Talento Tech",
    tags: ["Data"],
    hours: "159 H",
    badge: "https://mb.auco.ai/download/?document=d87ca6421ac0ab17f26af16c1de3874f&company=6542af2b23441bbeaef8d3f6",
  },
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px]">
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
                  <a
                    href={cert.badge}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-3 text-[0.72rem] font-mono-brand text-brand-accent hover:underline"
                  >
                    Ver insignia →
                  </a>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
