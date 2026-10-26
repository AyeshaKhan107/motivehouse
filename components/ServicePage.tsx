"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";

/* ------------------------------------------------------------------
   Colours (same as your file): maroon #6b1a2b, red #8b2332,
   cream #f5efe6, white #fffdf9, dark #211b1b.
------------------------------------------------------------------- */
const CSS = `
.sv{--maroon:#6b1a2b;--red:#8b2332;--cream:#f5efe6;--white:#fffdf9;--dark:#211b1b;--rose:#e9c6bd;--mu:#766d69}
@keyframes rise{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
@keyframes up{from{transform:translateY(112%)}to{transform:none}}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes float{50%{transform:translateY(-8px)}}
@keyframes draw{from{stroke-dashoffset:1}60%,to{stroke-dashoffset:0}}
@keyframes grow{from{transform:scaleY(.25)}to{transform:scaleY(1)}}
@keyframes ping{0%{transform:scale(1);opacity:.6}100%{transform:scale(2.6);opacity:0}}
@keyframes type{from{transform:scaleX(.2)}to{transform:scaleX(1)}}
@keyframes breathe{0%,100%{opacity:.6;transform:scale(1)}50%{opacity:1;transform:scale(1.06)}}
.sv-ticket{-webkit-mask:radial-gradient(15px at 0 60%,#0000 97%,#000) left/51% 100% no-repeat,radial-gradient(15px at 100% 60%,#0000 97%,#000) right/51% 100% no-repeat;mask:radial-gradient(15px at 0 60%,#0000 97%,#000) left/51% 100% no-repeat,radial-gradient(15px at 100% 60%,#0000 97%,#000) right/51% 100% no-repeat}
.sv-chamfer{clip-path:polygon(0 0,calc(100% - 46px) 0,100% 46px,100% 100%,46px 100%,0 calc(100% - 46px))}
@media (prefers-reduced-motion:reduce){.sv *{animation:none!important;transition:none!important}.sv .o0{opacity:1!important}.sv .ln{transform:none!important}.sv .dr{stroke-dashoffset:0!important}}
.sv :focus-visible{outline:2px solid var(--red);outline-offset:3px}
`;
const serif = "[font-family:Georgia,'Times_New_Roman',serif]";

/* ------------------------------------------------------------------
   Your services, each linked to the page we built for it
------------------------------------------------------------------- */
type Svc = {
  id: "graphic" | "social" | "web" | "books" | "tax";
  n: string; title: string; text: string; tags: string[]; href: string;
  shape: string; card: string; muted: string; btn: string; tall?: boolean;
};

const SERVICES: Svc[] = [
  {
    id: "graphic", n: "01", title: "Graphic Design", href: "/services/graphic-design", tall: true,
    text: "Logos, brand identities, social graphics, print and packaging, designed with care and delivered as print-ready and web-ready files.",
    tags: ["Logo & Brand Identity", "Print & Packaging", "Social Graphics"],
    shape: "rounded-t-[999px] rounded-b-[34px] items-center pt-24 text-center",
    card: "bg-[var(--maroon)] text-[color:var(--cream)]", muted: "text-[color:rgba(245,239,230,.8)]",
    btn: "bg-[var(--cream)] text-[color:var(--maroon)]",
  },
  {
    id: "social", n: "02", title: "Social Media Management", href: "/services/social-media-management",
    text: "Consistent, on-brand content, community management and campaigns that turn followers into customers.",
    tags: ["Content Planning", "Community", "Reports"],
    shape: "rounded-tl-[110px] rounded-br-[110px] rounded-tr-[24px] rounded-bl-[24px]",
    card: "bg-[var(--cream)] text-[color:var(--dark)] shadow-[inset_0_0_0_1px_#e3d6cb]", muted: "text-[color:var(--mu)]",
    btn: "bg-[var(--maroon)] text-[color:var(--cream)]",
  },
  {
    id: "web", n: "03", title: "Web Design & Development", href: "/services/web-design",
    text: "Fast, responsive websites and web apps on Next.js, Node.js, WordPress, Shopify and Wix, with secure APIs and login where needed.",
    tags: ["Next.js & Node.js", "WordPress", "Shopify & Wix"],
    shape: "sv-ticket rounded-3xl",
    card: "bg-[var(--dark)] text-[color:var(--cream)]", muted: "text-[color:rgba(245,239,230,.72)]",
    btn: "bg-[var(--cream)] text-[color:var(--maroon)]",
  },
  {
    id: "books", n: "04", title: "Bookkeeping", href: "/services/bookkeeping",
    text: "Reconciliations, reports and day-to-day records that keep your finances organised and your decisions confident.",
    tags: ["Reconciliations", "Financial Reports", "Payroll & AP/AR"],
    shape: "rounded-tr-[110px] rounded-bl-[110px] rounded-tl-[24px] rounded-br-[24px]",
    card: "bg-[#f7eeea] text-[color:var(--dark)] shadow-[inset_0_0_0_1px_#ead9d2]", muted: "text-[color:var(--mu)]",
    btn: "bg-[var(--maroon)] text-[color:var(--cream)]",
  },
  {
    id: "tax", n: "05", title: "Tax & Accounting", href: "/services/tax-accounting",
    text: "Tax-ready records and year-end support for US and Canadian small businesses, scoped to qualified personnel.",
    tags: ["US & Canada", "Year-end Workpapers", "GST/HST"],
    shape: "sv-chamfer",
    card: "bg-[var(--red)] text-[color:var(--cream)]", muted: "text-[color:rgba(245,239,230,.82)]",
    btn: "bg-[var(--cream)] text-[color:var(--red)]",
  },
];

/* ------------------------------------------------------------------
   Helpers
------------------------------------------------------------------- */
function R({ delay = 0, className = "", children }: { delay?: number; className?: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`o0 opacity-0 ${seen ? "[animation:rise_.85s_cubic-bezier(.2,.7,.2,1)_forwards]" : ""} ${className}`} style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  );
}

function Art({ id }: { id: Svc["id"] }) {
  const box = "[transform-box:fill-box]";
  return (
    <svg viewBox="0 0 120 90" className="h-full w-full" aria-hidden="true">
      {id === "graphic" && (
        <>
          <circle cx="38" cy="46" r="22" fill="currentColor" opacity=".9" className="[animation:float_4s_ease-in-out_infinite]" />
          <rect x="58" y="26" width="38" height="38" rx="8" fill="none" stroke="currentColor" strokeWidth="3" className={`origin-center ${box} [animation:spin_14s_linear_infinite]`} />
          <path d="M22 78Q60 56 100 80" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1} className="dr [animation:draw_3s_ease-in-out_infinite_alternate]" />
        </>
      )}
      {id === "social" && (
        <>
          {[0, 1].map((i) => <circle key={i} cx="60" cy="45" r="12" fill="none" stroke="currentColor" strokeWidth="2" className={`origin-center ${box} [animation:ping_2.8s_ease-out_infinite]`} style={{ animationDelay: `${i * 1.3}s` }} />)}
          <circle cx="60" cy="45" r="12" fill="currentColor" />
          <g className="[transform-origin:60px_45px] [animation:spin_8s_linear_infinite]">
            <circle cx="60" cy="10" r="5" fill="currentColor" /><circle cx="95" cy="62" r="4" fill="currentColor" opacity=".7" /><circle cx="25" cy="62" r="4" fill="currentColor" opacity=".7" />
          </g>
        </>
      )}
      {id === "web" && (
        <>
          <rect x="12" y="12" width="96" height="66" rx="8" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <path d="M12 28h96" stroke="currentColor" strokeWidth="2.5" />
          {[22, 32, 42].map((x) => <circle key={x} cx={x} cy="20" r="2" fill="currentColor" />)}
          {[{ y: 40, w: 62 }, { y: 51, w: 44 }, { y: 62, w: 54 }].map((l, i) => <rect key={l.y} x="22" y={l.y} width={l.w} height="5" rx="2.5" fill="currentColor" opacity=".85" className={`origin-left ${box} [animation:type_2.4s_ease-in-out_infinite_alternate]`} style={{ animationDelay: `${i * 0.3}s` }} />)}
        </>
      )}
      {id === "books" && (
        <>
          <path d="M10 80h100" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          {[{ x: 20, h: 28 }, { x: 44, h: 46 }, { x: 68, h: 36 }, { x: 92, h: 58 }].map((b, i) => <rect key={b.x} x={b.x} y={80 - b.h} width="14" height={b.h} rx="3" fill="currentColor" opacity={0.55 + i * 0.15} className={`origin-bottom ${box} [animation:grow_2.4s_ease-in-out_infinite_alternate]`} style={{ animationDelay: `${i * 0.25}s` }} />)}
        </>
      )}
      {id === "tax" && (
        <>
          <rect x="30" y="8" width="60" height="76" rx="8" fill="none" stroke="currentColor" strokeWidth="2.5" />
          {[24, 36].map((y) => <path key={y} d={`M42 ${y}h36`} stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity=".55" />)}
          <path d="M42 60l10 10 24-26" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1} className="dr [animation:draw_3s_ease-in-out_infinite_alternate]" />
        </>
      )}
    </svg>
  );
}

function Card({ s, i }: { s: Svc; i: number }) {
  const center = !!s.tall;
  return (
    <R delay={i * 0.1} className={s.tall ? "lg:row-span-2" : ""}>
      <div className="h-full transition-[transform,filter] duration-500 hover:-translate-y-2 hover:[filter:drop-shadow(0_22px_22px_rgba(33,27,27,.22))]">
        <article className={`group relative flex h-full min-h-[330px] flex-col p-8 pb-7 ${s.shape} ${s.card} ${center ? "lg:min-h-[690px]" : ""}`}>
          <span aria-hidden="true" className={`pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:[animation:shine_1s_ease-out]`} />
          <div className={`flex w-full ${center ? "flex-col items-center gap-4" : "items-start justify-between"}`}>
            <div className={`${center ? "h-32 w-44" : "h-20 w-28"} transition-transform duration-500 group-hover:scale-110`}><Art id={s.id} /></div>
            <span className={`${serif} text-xl opacity-50`}>{s.n}</span>
          </div>

          <h3 className={`mb-3 mt-5 ${serif} text-[clamp(1.5rem,2.4vw,1.9rem)] font-medium leading-[1.15]`}>{s.title}</h3>
          <p className={`m-0 text-[13px] leading-[1.85] ${s.muted}`}>{s.text}</p>

          <ul className={`m-0 mt-4 flex list-none flex-wrap gap-1.5 p-0 ${center ? "justify-center" : ""}`}>
            {s.tags.map((t) => <li key={t} className="rounded-full border border-current px-2.5 py-1 text-[10px] opacity-70">{t}</li>)}
          </ul>

          <div className={`mt-auto flex w-full pt-6 ${center ? "justify-center" : ""}`}>
            <Link href={s.href} className={`inline-flex items-center gap-2.5 rounded-full py-1.5 pl-5 pr-1.5 text-[13px] font-bold transition duration-300 after:absolute after:inset-0 after:content-[''] ${s.btn}`}>
              View Service
              <i className="grid h-8 w-8 place-items-center rounded-full bg-black/15 transition-transform duration-500 group-hover:rotate-45"><ArrowUpRight size={15} /></i>
            </Link>
          </div>
        </article>
      </div>
    </R>
  );
}

/* ------------------------------------------------------------------
   Page
------------------------------------------------------------------- */
export default function ServicePage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const line = `ln block translate-y-[112%] ${mounted ? "[animation:up_1.1s_cubic-bezier(.2,.8,.2,1)_forwards]" : ""}`;
  const wrap = "mx-auto w-[min(1180px,calc(100%-40px))] sm:w-[min(1180px,calc(100%-64px))]";
  const eyebrow = "inline-flex items-center gap-2.5 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[color:var(--maroon)] before:h-0.5 before:w-6 before:bg-current before:content-['']";

  return (
    <main className="sv overflow-x-clip bg-[var(--white)] text-[color:var(--dark)] [font-family:Arial,Helvetica,sans-serif]">
      <style>{CSS + `@keyframes shine{from{transform:translateX(-140%) skewX(-18deg)}to{transform:translateX(330%) skewX(-18deg)}}`}</style>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_90%_10%,rgba(139,35,50,.12),transparent_32%),var(--cream)] pb-20 pt-20 sm:pt-24">
        <div className={`${wrap} grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]`}>
          <div>
            <span className={`${eyebrow} o0 opacity-0 ${mounted ? "[animation:rise_.8s_.1s_forwards]" : ""}`}>What We Do · How We Help</span>
            <h1 className={`m-0 my-6 ${serif} text-[clamp(3rem,7vw,5.8rem)] font-medium leading-[1.04] tracking-[-0.04em]`}>
              <span className="block overflow-hidden pb-[0.08em]"><span className={line} style={{ animationDelay: ".15s" }}>Creative ideas.</span></span>
              <span className="block overflow-hidden pb-[0.08em]"><span className={line} style={{ animationDelay: ".3s" }}><em className="text-[color:var(--maroon)]">Meaningful</em> results.</span></span>
            </h1>
            <p className={`m-0 max-w-[530px] text-[15px] leading-[1.95] text-[color:var(--mu)] o0 opacity-0 ${mounted ? "[animation:rise_.9s_.7s_forwards]" : ""}`}>
              From building your website to strengthening your online presence, Motive House brings design, technology and strategy together to help your business move forward.
            </p>
            <div className={`mt-8 flex flex-wrap gap-4 o0 opacity-0 ${mounted ? "[animation:rise_.9s_.9s_forwards]" : ""}`}>
              <a href="mailto:support@motivehouse.co" className="group inline-flex items-center gap-3 rounded-full bg-[var(--maroon)] px-6 py-3.5 text-[13px] font-bold text-[color:var(--cream)] transition duration-300 hover:-translate-y-1 hover:bg-[var(--red)]">Discuss Your Project<ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" /></a>
              <a href="#services" className="group inline-flex items-center gap-3 rounded-full border border-[color:var(--maroon)] px-6 py-3.5 text-[13px] font-bold text-[color:var(--maroon)] transition duration-300 hover:-translate-y-1 hover:bg-[var(--maroon)] hover:text-[color:var(--cream)]">Explore Services<ArrowUpRight size={16} /></a>
            </div>
          </div>

          <div className={`o0 opacity-0 ${mounted ? "[animation:rise_1s_.5s_forwards]" : ""}`}>
            <div className="relative mx-auto flex h-[430px] w-[min(100%,330px)] flex-col items-center justify-center overflow-hidden rounded-t-[999px] rounded-b-[34px] bg-[var(--maroon)] px-8 pt-10 text-center text-[color:var(--cream)] shadow-[0_40px_70px_-30px_rgba(107,26,43,.8)]">
              <svg aria-hidden="true" viewBox="0 0 300 300" className="absolute -top-16 left-1/2 h-[300px] w-[300px] -translate-x-1/2 opacity-50">
                <g className="[transform-origin:150px_150px] [animation:spin_40s_linear_infinite]">
                  {[140, 105, 70].map((r, k) => <circle key={r} cx="150" cy="150" r={r} fill="none" strokeWidth="1" strokeDasharray={k === 1 ? "3 7" : undefined} className="stroke-[rgba(245,239,230,.6)]" />)}
                  <circle cx="150" cy="10" r="5" className="fill-[var(--rose)]" />
                </g>
              </svg>
              <Sparkles size={26} className="relative mb-4 text-[color:var(--rose)] [animation:float_4s_ease-in-out_infinite]" />
              <div className={`relative ${serif} text-[clamp(1.9rem,3.4vw,2.5rem)] leading-[1.12]`}>Build your<br />vision.<br /><em className="text-[color:var(--rose)]">Grow your</em><br />business.</div>
              <span className="relative mt-6 text-[10px] font-bold tracking-[0.28em] text-[color:var(--rose)]">DESIGN · DIGITAL · GROWTH</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="scroll-mt-6 py-20 sm:py-24">
        <div className={wrap}>
          <R className="mb-12 max-w-[620px]">
            <span className={eyebrow}>Our Services</span>
            <h2 className={`m-0 mt-5 ${serif} text-[clamp(2.2rem,4.8vw,3.6rem)] font-medium leading-[1.1] tracking-[-0.02em]`}>Choose the service<br /><em className="text-[color:var(--maroon)]">your business needs.</em></h2>
          </R>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
            {SERVICES.map((s, i) => <Card key={s.id} s={s} i={i} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[var(--maroon)] py-16 text-[color:var(--cream)] sm:py-20">
        <svg aria-hidden="true" viewBox="0 0 600 600" className="pointer-events-none absolute -right-44 top-1/2 h-[640px] w-[640px] -translate-y-1/2 opacity-50">
          <g className="[transform-origin:300px_300px] [animation:spin_80s_linear_infinite]">
            {[290, 220, 150].map((r, k) => <circle key={r} cx="300" cy="300" r={r} fill="none" strokeWidth="1.2" strokeDasharray={k === 1 ? "2 10" : undefined} className="stroke-[rgba(245,239,230,.35)]" />)}
            <circle cx="300" cy="10" r="8" className="fill-[var(--rose)]" />
          </g>
        </svg>
        <div className={`${wrap} relative flex flex-wrap items-center justify-between gap-8`}>
          <div>
            <h2 className={`m-0 mb-3 max-w-[640px] ${serif} text-[clamp(2.1rem,4.6vw,3.4rem)] font-medium leading-[1.12]`}>Have a project in mind?<br />Let&apos;s make it happen.</h2>
            <p className="m-0 text-sm leading-7 text-[color:#ead8d3]">Tell us what you&apos;re working on and let&apos;s explore how we can help.</p>
          </div>
          <a href="mailto:support@motivehouse.co" className="group inline-flex items-center gap-3 rounded-full bg-[var(--cream)] px-7 py-4 text-[13px] font-bold text-[color:var(--maroon)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-14px_rgba(0,0,0,.6)]">
            Start a Conversation<ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </section>
    </main>
  );
}