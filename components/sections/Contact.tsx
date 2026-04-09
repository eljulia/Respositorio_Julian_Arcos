"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { BlurFade } from "@/components/ui/blur-fade";

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
}

interface FormErrors {
  nombre?: string;
  email?: string;
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

const socialLinks = [
  { label: "Email",    href: "mailto:estebanarcosayala@gmail.com", icon: <EmailIcon /> },
  { label: "LinkedIn", href: "https://linkedin.com/in/julian-arcos", icon: <LinkedInIcon /> },
  { label: "GitHub",   href: "https://github.com/eljulia", icon: <GitHubIcon /> },
];

export default function Contact() {
  const [form, setForm] = useState<FormData>({ nombre: "", email: "", telefono: "", mensaje: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);

  function validate(): boolean {
    const newErrors: FormErrors = {};
    if (!form.nombre.trim()) newErrors.nombre = "Nombre requerido";
    if (!form.email.trim()) {
      newErrors.email = "Email requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Email inválido";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: form.nombre,
          email: form.email,
          telefono: form.telefono || undefined,
          mensaje: form.mensaje || undefined,
        }),
      });
      const data: { success?: boolean; error?: string } = await res.json();
      if (data.success) {
        toast.success("¡Mensaje enviado! Te contactaré pronto.", { description: "Gracias por escribir." });
        setForm({ nombre: "", email: "", telefono: "", mensaje: "" });
        setErrors({});
      } else {
        toast.error(data.error ?? "Error al enviar. Intenta de nuevo.");
      }
    } catch {
      toast.error("Error de conexión. Intenta de nuevo.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contacto" className="py-[100px] relative overflow-hidden" style={{ background: "#0f172a" }}>
      {/* subtle radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(37,99,235,.07),transparent 70%)",
          top: "50%",
          right: "-10%",
          transform: "translateY(-50%)",
        }}
      />

      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-12 lg:gap-20">

          {/* Left: header + social + decorative */}
          <BlurFade delay={0.1} inView>
            <div className="flex flex-col">
              <p className="slabel slabel-light mb-3">Contacto</p>
              <h2
                className="font-heading font-bold text-white tracking-tight mb-6"
                style={{ fontSize: "clamp(2rem,4vw,3rem)", lineHeight: 1.15 }}
              >
                Trabajemos<br />juntos
              </h2>
              <p className="leading-[1.8] mb-10" style={{ fontSize: "1rem", color: "rgba(255,255,255,.55)" }}>
                Disponible para roles de Backend Developer, AI Engineer y
                proyectos de automatización. También para servicios de Arcode
                en el Eje Cafetero y remoto.
              </p>

              {/* Social icons — enhanced */}
              <div className="flex gap-3 mb-10">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    aria-label={link.label}
                    className="group w-12 h-12 flex items-center justify-center rounded-xl text-white/50 transition-all duration-300 hover:text-brand-accent hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(37,99,235,.3)]"
                    style={{
                      background: "rgba(255,255,255,.05)",
                      border: "1px solid rgba(255,255,255,.09)",
                    }}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>

              {/* Decorative availability card */}
              <div
                className="inline-flex items-center gap-3 px-5 py-3.5 rounded-xl self-start"
                style={{
                  background: "rgba(16,185,129,.07)",
                  border: "1px solid rgba(16,185,129,.2)",
                }}
              >
                <span className="w-2 h-2 rounded-full pulse-dot" style={{ background: "#10b981" }} />
                <div>
                  <p className="text-[0.75rem] font-semibold text-white">Disponible ahora</p>
                  <p className="text-[0.68rem] text-brand-muted font-mono-brand">Armenia · Colombia · Remoto</p>
                </div>
              </div>
            </div>
          </BlurFade>

          {/* Right: glass form card */}
          <BlurFade delay={0.2} inView>
            <div
              className="rounded-2xl p-8"
              style={{
                background: "rgba(255,255,255,.03)",
                border: "1px solid rgba(255,255,255,.08)",
                backdropFilter: "blur(12px)",
              }}
            >
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="nombre" className="text-[0.72rem] font-mono-brand text-brand-muted">
                      Nombre y Apellido *
                    </Label>
                    <Input
                      id="nombre"
                      value={form.nombre}
                      onChange={(e) => setForm((f) => ({ ...f, nombre: e.target.value }))}
                      placeholder="Julián Arcos"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/25 focus-visible:ring-brand-primary focus-visible:border-brand-primary/60 h-10"
                    />
                    {errors.nombre && <p className="text-[0.72rem] text-red-400">{errors.nombre}</p>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="email" className="text-[0.72rem] font-mono-brand text-brand-muted">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      placeholder="tu@email.com"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/25 focus-visible:ring-brand-primary focus-visible:border-brand-primary/60 h-10"
                    />
                    {errors.email && <p className="text-[0.72rem] text-red-400">{errors.email}</p>}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="telefono" className="text-[0.72rem] font-mono-brand text-brand-muted">
                    Teléfono (opcional)
                  </Label>
                  <Input
                    id="telefono"
                    type="tel"
                    value={form.telefono}
                    onChange={(e) => setForm((f) => ({ ...f, telefono: e.target.value }))}
                    placeholder="+57 300 000 0000"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/25 focus-visible:ring-brand-primary focus-visible:border-brand-primary/60 h-10"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="mensaje" className="text-[0.72rem] font-mono-brand text-brand-muted">
                    Mensaje (opcional)
                  </Label>
                  <Textarea
                    id="mensaje"
                    value={form.mensaje}
                    onChange={(e) => setForm((f) => ({ ...f, mensaje: e.target.value }))}
                    placeholder="Cuéntame sobre tu proyecto..."
                    rows={4}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/25 focus-visible:ring-brand-primary focus-visible:border-brand-primary/60 resize-y min-h-[110px]"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={submitting}
                  className="mt-1 bg-brand-primary hover:bg-brand-primary-dark text-white font-semibold py-3 h-11 rounded-[10px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,99,235,.4)] disabled:opacity-60 cursor-pointer"
                >
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </span>
                  ) : (
                    "Enviar mensaje →"
                  )}
                </Button>
              </form>
            </div>
          </BlurFade>

        </div>
      </div>
    </section>
  );
}
