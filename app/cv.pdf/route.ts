import React from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import { CvDocument } from "@/components/cv/CvDocument";
import type { Language } from "@/lib/i18n";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const language: Language = searchParams.get("lang") === "en" ? "en" : "pt";

  const buffer = await renderToBuffer(
    React.createElement(CvDocument, { language })
  );

  return new Response(buffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="CV-Joao-Victor-Pedrosa.pdf"',
      "Cache-Control": "no-store",
    },
  });
}
