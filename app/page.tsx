import About from "@/components/about";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import { siteConfig } from "@/lib/data";

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: "Desenvolvedor Full Stack",
    email: siteConfig.email,
    url: siteConfig.websiteUrl,
    sameAs: [siteConfig.githubUrl, siteConfig.linkedinUrl],
    address: {
      "@type": "PostalAddress",
      addressLocality: "João Pessoa",
      addressRegion: "PB",
      addressCountry: "BR",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <main className="px-4 pb-12 pt-28 sm:px-6 sm:pt-36">
        <div className="mx-auto flex max-w-6xl flex-col gap-8">
          <Intro />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </div>
        <Footer />
      </main>
    </>
  );
}
