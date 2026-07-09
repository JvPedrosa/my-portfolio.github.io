import React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Nova mensagem enviada pelo portfólio</Preview>
      <Tailwind>
        <Body className="bg-slate-100 py-10 text-slate-950">
          <Container className="mx-auto max-w-xl">
            <Section className="rounded-2xl border border-slate-200 bg-white px-8 py-6 shadow-sm">
              <Heading className="m-0 text-2xl leading-tight">
                Nova mensagem do formulário de contato
              </Heading>
              <Text className="mb-0 mt-5 text-sm leading-7 text-slate-700">
                {message}
              </Text>
              <Hr className="my-6 border-slate-200" />
              <Text className="m-0 text-sm text-slate-600">
                E-mail de resposta: {senderEmail}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
