"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mb-8 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">{t.footer}</small>
    </footer>
  );
}
