function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const footerLinks = [
  { label: "Sobre mí",    href: "#sobre-mi" },
  { label: "Proyectos",   href: "#proyectos" },
  { label: "Arcode",      href: "#arcode" },
  { label: "Contacto",    href: "#contacto" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#060608" }}>
      {/* Top gradient divider */}
      <div className="h-[1px]" style={{ background: "linear-gradient(90deg,transparent,rgba(37,99,235,.3),transparent)" }} />

      <div className="container-main py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="font-heading text-[1rem] font-bold text-white">
              Julián <span className="text-brand-primary">Arcos</span>
            </p>
            <p className="font-mono-brand text-[0.7rem] text-brand-muted tracking-wide">
              AI Engineer &amp; Backend Developer
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex items-center gap-5 flex-wrap justify-center">
            {footerLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[0.8rem] text-white/45 no-underline hover:text-white transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/eljulia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-8 h-8 flex items-center justify-center rounded-lg text-white/40 transition-all duration-200 hover:text-white hover:bg-white/8"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://linkedin.com/in/julian-arcos"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 flex items-center justify-center rounded-lg text-white/40 transition-all duration-200 hover:text-white hover:bg-white/8"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <div
          className="mt-8 pt-6 text-center font-mono-brand text-[0.68rem] text-brand-muted"
          style={{ borderTop: "1px solid rgba(255,255,255,.05)" }}
        >
          © {new Date().getFullYear()} Julián Esteban Arcos · Armenia, Colombia 🇨🇴
        </div>
      </div>
    </footer>
  );
}
