import type React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { CpuChipIcon, BoltIcon, CogIcon, PlugIcon, SparklesIcon, GlobeIcon } from "@/components/ui/icons";

type DevIconItem = { icon: string; name: string; style?: React.CSSProperties };
type SvgItem = { svg: React.ReactNode; name: string };

const categories: Array<{
  label: string;
  isSvg?: boolean;
  items: DevIconItem[] | SvgItem[];
}> = [
  {
    label: "Lenguajes",
    items: [
      { icon: "devicon-python-plain colored", name: "Python" },
      { icon: "devicon-javascript-plain colored", name: "JavaScript" },
      { icon: "devicon-typescript-plain colored", name: "TypeScript" },
      { icon: "devicon-java-plain colored", name: "Java" },
      { icon: "devicon-cplusplus-plain colored", name: "C++" },
      { icon: "devicon-csharp-plain colored", name: "C#" },
    ] as DevIconItem[],
  },
  {
    label: "Backend",
    items: [
      { icon: "devicon-nodejs-plain colored", name: "Node.js" },
      { icon: "devicon-express-original", name: "Express.js", style: { color: "#94a3b8" } },
      { icon: "devicon-spring-plain colored", name: "Spring Boot" },
      { icon: "devicon-nestjs-plain colored", name: "NestJS" },
    ] as DevIconItem[],
  },
  {
    label: "Bases de datos",
    items: [
      { icon: "devicon-mysql-plain colored", name: "MySQL" },
      { icon: "devicon-postgresql-plain colored", name: "PostgreSQL" },
      { icon: "devicon-microsoftsqlserver-plain colored", name: "SQL Server" },
    ] as DevIconItem[],
  },
  {
    label: "IA & Auto.",
    isSvg: true,
    items: [
      { svg: <CpuChipIcon className="w-7 h-7" />, name: "LLMs" },
      { svg: <BoltIcon className="w-7 h-7" />, name: "n8n" },
      { svg: <CogIcon className="w-7 h-7" />, name: "Make" },
      { svg: <GlobeIcon className="w-7 h-7" />, name: "Zapier" },
      { svg: <SparklesIcon className="w-7 h-7" />, name: "OpenAI API" },
      { svg: <PlugIcon className="w-7 h-7" />, name: "Power Auto." },
    ] as SvgItem[],
  },
  {
    label: "DevOps",
    items: [
      { icon: "devicon-docker-plain colored", name: "Docker" },
      { icon: "devicon-linux-plain", name: "Linux", style: { color: "#94a3b8" } },
      { icon: "devicon-git-plain colored", name: "Git" },
      { icon: "devicon-github-original", name: "GitHub", style: { color: "#94a3b8" } },
    ] as DevIconItem[],
  },
];

// Alternating directions per row
const directions = ["right", "left", "right", "left", "right"] as const;

export default function Stack() {
  return (
    <section id="stack" className="py-[100px]" style={{ background: "#1e293b" }}>
      <div className="container-main">
        <BlurFade delay={0.1} inView direction="up" offset={24}>
          <p className="slabel slabel-light mb-3">Tecnologías</p>
          <h2
            className="font-heading font-bold text-white tracking-tight mb-14"
            style={{ fontSize: "clamp(2rem,4vw,3rem)", lineHeight: 1.15 }}
          >
            Mi stack técnico
          </h2>
        </BlurFade>

        <div className="flex flex-col gap-8">
          {categories.map((cat, ci) => (
            <BlurFade key={ci} delay={0.15 + ci * 0.08} inView direction={directions[ci]} offset={28}>
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-10">
                <span className="font-mono-brand text-[0.7rem] font-medium uppercase tracking-[.1em] text-brand-muted sm:w-24 flex-shrink-0 sm:pt-[14px]">
                  {cat.label}
                </span>
                <div className="flex flex-wrap gap-2.5 flex-1">
                  {cat.isSvg
                    ? (cat.items as SvgItem[]).map((item, i) => (
                        <div
                          key={i}
                          className="flex flex-col items-center gap-[7px] py-3.5 px-[18px] rounded-xl transition-all duration-300 cursor-default min-w-[78px] hover:-translate-y-1 hover:border-brand-primary"
                          style={{
                            background: "rgba(255,255,255,.05)",
                            border: "1px solid rgba(255,255,255,.09)",
                          }}
                        >
                          <span className="text-brand-accent leading-none">{item.svg}</span>
                          <span className="text-[0.68rem] font-medium text-brand-text-light text-center font-mono-brand">
                            {item.name}
                          </span>
                        </div>
                      ))
                    : (cat.items as DevIconItem[]).map((item, i) => (
                        <div
                          key={i}
                          className="flex flex-col items-center gap-[7px] py-3.5 px-[18px] rounded-xl transition-all duration-300 cursor-default min-w-[78px] hover:-translate-y-1 hover:border-brand-primary"
                          style={{
                            background: "rgba(255,255,255,.05)",
                            border: "1px solid rgba(255,255,255,.09)",
                          }}
                        >
                          <i className={`${item.icon} text-[1.9rem]`} style={item.style} />
                          <span className="text-[0.68rem] font-medium text-brand-text-light text-center font-mono-brand">
                            {item.name}
                          </span>
                        </div>
                      ))}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
