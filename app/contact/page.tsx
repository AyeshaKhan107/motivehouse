import type { Metadata } from "next";
import { ArrowUpRight, Mail, MessageCircle, Sparkles } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Motive House",
  description:
    "Tell Motive House about your next project. Get in touch about web design, SEO, social media, design, bookkeeping, and accounting.",
};

export default function ContactPage() {
  const whatsappNumber = process.env.WHATSAPP_BUSINESS_NUMBER?.replace(/\D/g, "");

  return (
    <main className="min-h-screen overflow-hidden bg-[#fffdf9] text-[#1a0b0f]">
      <section className="relative isolate overflow-hidden bg-[#f5eee8]">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-32 -z-10 h-80 w-80 rounded-full border-[48px] border-[#6b1a2b]/[0.04] sm:-right-16 sm:h-[28rem] sm:w-[28rem]"
        />
        <div className="mx-auto max-w-7xl px-5 pb-14 pt-14 sm:px-8 sm:pb-16 sm:pt-20 lg:px-12 lg:pb-20 lg:pt-24">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#8b2332]">
            <span className="h-px w-7 bg-[#8b2332]" />
            Let&apos;s talk
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-[#6b1a2b] sm:text-5xl lg:text-6xl">
            Let&apos;s Build Something Great Together.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#1a0b0f]/70 sm:text-lg sm:leading-8">
            Tell us where you want to go. We&apos;ll listen, learn about your
            business, and help shape a thoughtful next step for your project.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 lg:px-12 lg:py-20">
        <div className="relative flex flex-col">
          <div className="absolute -left-5 top-2 hidden h-28 w-1 rounded-full bg-[#8b2332] sm:block" />
          <div className="max-w-lg">
            <p className="text-sm leading-7 text-[#1a0b0f]/70 sm:text-base">
              Whether you&apos;re starting from scratch or ready to make your
              next move, we&apos;d love to hear what you have in mind. Share a
              few details and our team will be in touch.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <a
              href="mailto:support@motivehouse.co"
              className="group flex min-w-0 items-center gap-4 rounded-2xl border border-[#6b1a2b]/10 bg-white p-5 shadow-[0_12px_36px_-28px_rgba(26,11,15,0.4)] transition duration-200 hover:-translate-y-0.5 hover:border-[#8b2332]/30 hover:shadow-[0_18px_40px_-28px_rgba(107,26,43,0.35)]"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f5eee8] text-[#8b2332]">
                <Mail size={21} aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#1a0b0f]/55">
                  Email us
                </span>
                <span className="mt-1 block break-all text-sm font-semibold text-[#6b1a2b] sm:break-normal">
                  support@motivehouse.co
                </span>
              </span>
              <ArrowUpRight
                size={17}
                aria-hidden="true"
                className="shrink-0 text-[#8b2332] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            {whatsappNumber ? (
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="group flex min-w-0 items-center gap-4 rounded-2xl border border-[#6b1a2b]/10 bg-white p-5 shadow-[0_12px_36px_-28px_rgba(26,11,15,0.4)] transition duration-200 hover:-translate-y-0.5 hover:border-[#8b2332]/30 hover:shadow-[0_18px_40px_-28px_rgba(107,26,43,0.35)]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f5eee8] text-[#8b2332]">
                  <MessageCircle size={21} aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#1a0b0f]/55">
                    WhatsApp
                  </span>
                  <span className="mt-1 block text-sm font-semibold text-[#6b1a2b]">
                    Chat with our team
                  </span>
                </span>
                <ArrowUpRight
                  size={17}
                  aria-hidden="true"
                  className="shrink-0 text-[#8b2332] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            ) : (
              <div className="flex min-w-0 items-center gap-4 rounded-2xl border border-[#6b1a2b]/10 bg-white p-5 shadow-[0_12px_36px_-28px_rgba(26,11,15,0.4)]">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f5eee8] text-[#8b2332]">
                  <MessageCircle size={21} aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#1a0b0f]/55">
                    Prefer a quick note?
                  </span>
                  <span className="mt-1 block text-sm font-semibold text-[#6b1a2b]">
                    Email is the best way to reach us.
                  </span>
                </span>
              </div>
            )}
          </div>

          <div className="mt-8 flex items-start gap-3 rounded-2xl bg-[#f5eee8]/70 p-5 text-sm leading-6 text-[#1a0b0f]/70">
            <Sparkles
              size={18}
              aria-hidden="true"
              className="mt-0.5 shrink-0 text-[#8b2332]"
            />
            <p>
              A little context goes a long way. Let us know your goals, timing,
              or any questions you&apos;re already thinking about.
            </p>
          </div>
        </div>

        <ContactForm />
      </section>
    </main>
  );
}
