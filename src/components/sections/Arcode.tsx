import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { GlobeIcon, SparklesIcon, BoltIcon, BookOpenIcon } from "@/components/ui/icons";

const services = [
  { icon: <GlobeIcon className="w-5 h-5" />, name: "Arcode Web",     desc: "Desarrollo web profesional, landing pages y tiendas digitales optimizadas para conversión." },
  { icon: <SparklesIcon className="w-5 h-5" />, name: "Arcode AI",   desc: "Chatbots con IA, agentes inteligentes y automatización de procesos con n8n y Make." },
  { icon: <BoltIcon className="w-5 h-5" />, name: "Arcode Flow",     desc: "Automatización empresarial: CRM, reportes, integraciones y eliminación de tareas repetitivas." },
  { icon: <BookOpenIcon className="w-5 h-5" />, name: "Arcode Academy", desc: "Talleres y capacitaciones en IA para equipos empresariales. Armenia y Eje Cafetero." },
];

export default function Arcode() {
  return (
    <section
      id="arcode"
      className="py-[100px] relative overflow-hidden"
      style={{ background: "linear-gradient(135deg,#0B1426 0%,#0F2557 45%,#0B1426 100%)" }}
    >
      {/* Center radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 900,
          height: 900,
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(37,99,235,.13),transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      />

      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: glass logo card + desc + CTA — slides from left */}
          <BlurFade delay={0.1} inView direction="right" offset={40}>
            <div className="flex flex-col items-start gap-6">

              {/* Logo glass card with BorderBeam */}
              <div
                className="relative inline-flex items-center gap-4 px-7 py-5 rounded-[20px]"
                style={{
                  background: "rgba(255,255,255,.06)",
                  border: "1px solid rgba(255,255,255,.1)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                }}
              >
                <BorderBeam size={80} duration={10} colorFrom="#2563EB" colorTo="#38BDF8" borderWidth={1} />
                <div className="w-[52px] h-[52px] rounded-xl overflow-hidden flex-shrink-0 relative">
                  <Image
                    src="/images/ArcoImg.png"
                    alt="Arcode"
                    fill
                    className="object-contain"
                    sizes="52px"
                  />
                </div>
                <div>
                  <div className="font-heading text-[1.6rem] font-extrabold text-white tracking-tight">
                    Arcode
                  </div>
                  <div className="font-mono-brand text-[0.68rem] text-brand-accent tracking-[.1em] uppercase">
                    AI &amp; Digital Transformation Agency
                  </div>
                </div>
              </div>

              <p className="leading-[1.8]" style={{ fontSize: "1.02rem", color: "rgba(255,255,255,.62)" }}>
                Mi agencia especializada en IA y transformación digital para PyMEs
                colombianas. Automatizamos procesos, construimos chatbots,
                desarrollamos soluciones web y capacitamos equipos en inteligencia
                artificial aplicada.
              </p>

              <a
                href="mailto:estebanarcosayala@gmail.com"
                className="inline-flex items-center gap-2 px-7 py-3.5 font-bold text-[0.9rem] rounded-[10px] no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,99,235,.4)]"
                style={{ background: "#2563eb", color: "#fff" }}
              >
                Conocer Arcode →
              </a>
            </div>
          </BlurFade>

          {/* Right: services list — slides from right */}
          <BlurFade delay={0.2} inView direction="left" offset={40}>
            <div className="flex flex-col gap-3">
              {services.map((svc, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 px-[22px] py-[18px] rounded-xl transition-all duration-300 hover:border-[rgba(37,99,235,.4)] hover:bg-[rgba(37,99,235,.07)] hover:-translate-y-0.5"
                  style={{
                    background: "rgba(255,255,255,.04)",
                    border: "1px solid rgba(255,255,255,.07)",
                  }}
                >
                  <span className="flex-shrink-0 mt-0.5 text-brand-accent">{svc.icon}</span>
                  <div>
                    <div className="font-heading text-[0.92rem] font-semibold text-white">{svc.name}</div>
                    <div className="text-[0.8rem] mt-[3px]" style={{ color: "rgba(255,255,255,.45)" }}>{svc.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </BlurFade>

        </div>
      </div>
    </section>
  );
}
