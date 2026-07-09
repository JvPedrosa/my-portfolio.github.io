import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import LanguageContextProvider from "@/context/language-context";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.websiteUrl),
  title: {
    default: `${siteConfig.firstName} | Desenvolvedor Frontend e Full Stack`,
    template: `%s | ${siteConfig.firstName}`,
  },
  description:
    "Portfólio de João Victor Pedrosa, desenvolvedor com foco em frontend e experiência full stack em interfaces modernas, integrações e produtos web.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.firstName} | Desenvolvedor Frontend e Full Stack`,
    description:
      "Projetos, experiência profissional e stack de João Victor Pedrosa em um portfólio moderno e responsivo.",
    url: siteConfig.websiteUrl,
    locale: "pt_BR",
    type: "website",
    siteName: `${siteConfig.firstName} Portfolio`,
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.firstName} | Desenvolvedor Frontend e Full Stack`,
    description:
      "Projetos, experiência profissional e stack de João Victor Pedrosa em um portfólio moderno e responsivo.",
    images: ["/twitter-image"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "João Victor Pedrosa",
    "Desenvolvedor Frontend",
    "Desenvolvedor Full Stack",
    "Next.js",
    "React",
    "Vue.js",
    "TypeScript",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-[var(--color-bg)] text-[var(--color-text)] antialiased">
        <div className="site-noise" aria-hidden="true" />
        <div className="site-orb site-orb-one" aria-hidden="true" />
        <div className="site-orb site-orb-two" aria-hidden="true" />
        <LanguageContextProvider>
          <ThemeContextProvider>
            <ActiveSectionContextProvider>
              <Header />
              {children}
            </ActiveSectionContextProvider>
          </ThemeContextProvider>
        </LanguageContextProvider>
      </body>
    </html>
  );
}
