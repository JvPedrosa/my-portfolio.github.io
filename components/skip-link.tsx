"use client";

import { useLanguage } from "@/context/language-context";

export default function SkipLink() {
  const { t } = useLanguage();

  return (
    <a href="#main-content" className="skip-link">
      {t.nav.skipToContent}
    </a>
  );
}
