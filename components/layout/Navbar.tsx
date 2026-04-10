"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { href: "#sobre-mi",   label: "Sobre mí" },
  { href: "#stack",      label: "Stack" },
  { href: "#proyectos",  label: "Proyectos" },
  { href: "#experiencia",label: "Experiencia" },
  { href: "#arcode",     label: "Arcode" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active, setActive]       = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", "")).concat(["contacto"]);
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(`#${id}`); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={
        scrolled
          ? {
              background: "rgba(6,6,8,0.88)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              boxShadow: "0 4px 32px rgba(0,0,0,.3)",
            }
          : { background: "transparent" }
      }
    >
      {/* top accent line when scrolled */}
      {scrolled && (
        <div
          className="absolute top-0 left-0 right-0 h-[1px]"
          style={{ background: "linear-gradient(90deg,transparent,rgba(37,99,235,.5),transparent)" }}
        />
      )}

      <div className="container-main flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#" className="font-heading text-[1.1rem] font-bold text-white flex items-center gap-1.5 no-underline group">
          Julián
          <span className="text-brand-primary transition-colors duration-200 group-hover:text-brand-accent">
            {" "}Arcos
          </span>
          <span
            className="inline-block w-[5px] h-[5px] rounded-full ml-0.5 pulse-dot"
            style={{ background: "#2563eb" }}
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-7 list-none">
          {navLinks.map((link) => (
            <li key={link.href} className="relative">
              <a
                href={link.href}
                className={`text-sm font-medium no-underline transition-colors duration-200 ${
                  active === link.href ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
              </a>
              {/* active underline */}
              <span
                className="absolute -bottom-1 left-0 right-0 h-[1.5px] rounded-full transition-all duration-300"
                style={{
                  background: "linear-gradient(90deg,#2563eb,#38bdf8)",
                  opacity: active === link.href ? 1 : 0,
                  transform: active === link.href ? "scaleX(1)" : "scaleX(0)",
                }}
              />
            </li>
          ))}
          <li>
            <a
              href="#contacto"
              className="text-sm font-semibold text-white no-underline px-5 py-2 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(37,99,235,.35)]"
              style={{ background: "#2563eb" }}
            >
              Contacto
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu — slide */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? "400px" : "0px",
          opacity: menuOpen ? 1 : 0,
        }}
      >
        <div
          className="px-6 py-4 flex flex-col gap-3"
          style={{
            background: "rgba(6,6,8,0.97)",
            borderTop: "1px solid rgba(255,255,255,.07)",
            backdropFilter: "blur(16px)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium no-underline transition-colors py-1 ${
                active === link.href ? "text-white" : "text-white/60 hover:text-white"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="text-sm font-semibold text-white no-underline px-5 py-2.5 rounded-lg text-center mt-1 transition-colors hover:bg-brand-primary-dark"
            style={{ background: "#2563eb" }}
            onClick={() => setMenuOpen(false)}
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
}
