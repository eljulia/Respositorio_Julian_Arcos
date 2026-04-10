import type { Metadata } from "next";
import { Sora, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Julián Arcos — AI Engineer & Backend Developer",
  description:
    "Portafolio de Julián Esteban Arcos. Especialista en LLMs, APIs RESTful, automatización e ingeniería de agentes IA. Armenia, Colombia.",
  keywords: [
    "AI Engineer",
    "Backend Developer",
    "LLMs",
    "APIs RESTful",
    "automatización",
    "agentes IA",
    "Colombia",
  ],
  authors: [{ name: "Julián Esteban Arcos" }],
  openGraph: {
    title: "Julián Arcos — AI Engineer & Backend Developer",
    description:
      "Especialista en LLMs, APIs RESTful, automatización e ingeniería de agentes IA.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${sora.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </head>
      <body className="min-h-screen antialiased">
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#0f172a",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#fff",
            },
          }}
        />
      </body>
    </html>
  );
}
