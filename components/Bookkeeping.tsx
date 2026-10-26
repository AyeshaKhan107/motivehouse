

"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowLeft, ArrowRight, ArrowUpRight, BadgeCheck, BarChart3, Calculator, Clock, Eye, FileCheck,
  HardHat, Percent, Play, Plus, Receipt, RefreshCw, Scale, ScrollText, ShieldCheck, Target,
  Wallet, Wrench,
} from "lucide-react";

/* ------------------------------------------------------------------
   IMAGES: same photo set and dark treatment as the reference. Replace
   any URL with your own file (e.g. "/images/hero.jpg"). If a link
   fails, a dark maroon fallback shows so the layout never breaks.
------------------------------------------------------------------- */
const U = (id: string, w = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;
const IMG = {
  hero: U("photo-1497366754035-f200968a6e72", 1800),
  focus: U("photo-1554224155-6726b3ff858f", 1100),
  workBg: U("photo-1497215728101-856f4ea42174", 1200),
  faq: U("photo-1497215728101-856f4ea42174", 900),
  cta: U("photo-1486406146926-c627a92ad1ab", 1400),
};
const EMAIL_PAGE = "mailto:support@motivehouse.co";

const stats = [
  { n: 7, s: "", l: "Core services" },
  { n: 4, s: "", l: "Accounting platforms" },
  { n: 2, s: "", l: "Countries served" },
  { n: 4, s: "", l: "Simple steps" },
];
const platforms = ["QuickBooks Online", "Xero", "Sage", "Zoho Books"];

const services = [
  { t: "Monthly Bookkeeping", d: "Categorisation and reconciliation with a dependable monthly routine.", Icon: Receipt },
  { t: "Catch-up & Clean-up", d: "Bring overdue, duplicated or misclassified books back in order.", Icon: Wrench },
  { t: "Management Reports", d: "Profit and loss, balance sheet and cash-flow insights.", Icon: BarChart3 },
  { t: "Tax-Time Support", d: "Year-end schedules and organised records for your tax preparer.", Icon: FileCheck },
];
const benefits = [
  { t: "Clear Cash Flow", d: "See where your money goes.", Icon: Eye },
  { t: "Tax-Ready Records", d: "Organised for your tax preparer.", Icon: FileCheck },
  { t: "Save Time", d: "Spend less time sorting transactions.", Icon: Clock },
  { t: "Fewer Surprises", d: "Open items flagged early.", Icon: ShieldCheck },
];
const steps = [
  ["Discover", "We learn about your business, records and deadlines."],
  ["Set Up", "We agree scope, access and the close calendar."],
  ["Keep Books Moving", "We review and reconcile on the agreed schedule."],
  ["Review & Improve", "We share reports and flag open questions."],
];
const tools = [
  { t: "QuickBooks Online", c: "#2CA01C", l: "Q" },
  { t: "Xero", c: "#13B5EA", l: "X" },
  { t: "Sage", c: "#1B9A4B", l: "S" },
  { t: "Zoho Books", c: "#D4202A", l: "Z" },
];
const tiles = [
  { t: "Monthly Financial Report", c: "P&L, balance sheet, cash flow", img: U("photo-1543286386-713bdd548da4") },
  { t: "Invoicing & A/R Aging", c: "Who has paid, who is late", img: U("photo-1450101499163-c8848c66ca85") },
  { t: "Bookkeeping Setup", c: "Chart of accounts, organised", img: U("photo-1554224154-26032ffc0d07") },
  { t: "Expense Tracking", c: "Where the money goes", img: U("photo-1554224155-6726b3ff858f") },
  { t: "Monthly Overview", c: "Trends at a glance", img: U("photo-1551288049-bebda4e38f71") },
  { t: "Bank Reconciliation", c: "Statements matched, line by line", img: U("photo-1568992687947-868a62a9f521") },
];
const why = [
  { t: "Consistency", d: "A repeatable close and reconciliation process.", Icon: RefreshCw },
  { t: "Transparency", d: "Missing items and open questions raised early.", Icon: Eye },
  { t: "Fit-for-Purpose Reporting", d: "Information that supports your decisions.", Icon: Target },
  { t: "Responsible Boundaries", d: "Clear scope; qualified professionals for filings.", Icon: Scale },
];
/* Working principles from your About copy, not client quotes. Swap in verified reviews when you have them. */
const voices = [
  { q: "Useful financial information starts with dependable records. We value careful reconciliations, documented questions and sensible controls.", n: "Our approach", r: "How we work" },
  { q: "We focus on reports that are understandable, not just completed tasks, so you can have better conversations with lenders and tax professionals.", n: "Our reporting", r: "What you get" },
  { q: "We flag missing information rather than assume an answer, and involve appropriately qualified professionals when specialist advice is needed.", n: "Our boundaries", r: "How we stay accurate" },
];
const faqs = [
  ["Do you work with businesses in both the US and Canada?", "We are building workflows for both markets. Availability depends on your location, structure, accounting needs and the tax work requested. We confirm fit before onboarding."],
  ["Which accounting software do you support?", "QuickBooks Online, Xero, Sage and Zoho Books, subject to your subscription, data access and engagement requirements."],
  ["Can you fix books that are several months behind?", "Often, yes. We assess the period, transaction volume and source documents, then agree a cleanup plan and list items needing your approval."],
  ["Do you prepare tax returns?", "That depends on country, return type, engagement terms and required qualifications. We confirm during onboarding whether we prepare, coordinate, or provide tax-ready records only."],
  ["How much do your services cost?", "Pricing depends on transaction volume, accounts and entities, software condition, reporting needs and any catch-up work. We quote a defined scope after an initial review."],
];
const words = ["Bookkeeping", "Reconciliation", "Reporting", "Tax-Ready"];

/* US / Canada switch (copy from your US and Canada service pages) */
const modes = {
  US: {
    t: "Bookkeeping and tax-time support for US small businesses",
    d: "Keep your books organised throughout the year, not just when a federal or state deadline is close. A reconciled ledger and organised source documents make it easier for a qualified tax preparer to assess income, deductible expenses, asset purchases and contractor payments.",
    items: [["Contractor-payment records", HardHat], ["Sales-tax transaction summaries, where applicable", Percent], ["Payroll journal and liability reconciliation", Wallet], ["Year-end workpapers", ScrollText]],
    scope: "Tax services may include document organisation, workpapers, coordination with a qualified US tax professional, and return preparation when expressly included and performed by appropriately qualified personnel. No particular filing outcome or tax savings is guaranteed.",
    cta: "Get your US bookkeeping workflow under control",
    img: U("photo-1496442226666-8d4d0e62e6e9", 1100),
  },
  Canada: {
    t: "Bookkeeping and tax-time support for Canadian small businesses",
    d: "Build a consistent routine that supports better decisions and more organised year-end work, with records relevant to federal and provincial obligations, based on your activities and registration status.",
    items: [["GST/HST and provincial sales-tax records", Percent], ["Eligible input tax credit review support", BadgeCheck], ["Fixed-asset schedules", Calculator], ["Payroll journal and liability reconciliation", Wallet]],
    scope: "Depending on the engagement and personnel qualifications, services may include tax-document preparation, GST/HST recordkeeping support, coordination with a Canadian tax professional, and return preparation where offered by an appropriately qualified preparer.",
    cta: "Talk with us about your Canadian bookkeeping needs",
    img: U("photo-1517935706615-2717063c2225", 1100),
  },
} as const;

const CSS = `
@keyframes bkUp{from{transform:translateY(110%)}to{transform:none}}
@keyframes bkRise{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}
@keyframes bkZoom{from{transform:scale(1.02)}to{transform:scale(1.14)}}
@keyframes bkGlow{0%,100%{opacity:.45}50%{opacity:.95}}
@keyframes bkBar{from{transform:scaleX(0)}to{transform:scaleX(1)}}
@keyframes bkSwap{from{opacity:0;transform:translateX(24px)}to{opacity:1;transform:none}}
@media (prefers-reduced-motion:reduce){.bk *{animation:none!important;transition:none!important}.bk .rv{opacity:1!important;transform:none!important}.bk .ln{transform:none!important}}
.bk :focus-visible{outline:2px solid #c4506a;outline-offset:3px}
`;

/* ---------- helpers ---------- */
function useInView<T extends HTMLElement>(th = 0.15) {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: th });
    io.observe(el);
    return () => io.disconnect();
  }, [th]);
  return [ref, seen] as const;
}
function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const [ref, seen] = useInView<HTMLDivElement>(0.12);
  return (
    <div ref={ref} className={`rv opacity-0 ${seen ? "[animation:bkRise_.9s_cubic-bezier(.2,.7,.2,1)_forwards]" : ""} ${className}`} style={{ animationDelay: `${delay}s` }}>{children}</div>
  );
}
function Photo({ src, alt, className = "", imgClass = "", dark = true }: { src: string; alt: string; className?: string; imgClass?: string; dark?: boolean }) {
  const [bad, setBad] = useState(false);
  return (
    <div className={`relative overflow-hidden bg-[#1b1413] ${className}`}>
      {!bad ? (
        <img src={src} alt={alt} loading="lazy" onError={() => setBad(true)} className={`h-full w-full object-cover ${dark ? "brightness-[.62] contrast-110 saturate-[.8] sepia-[.2]" : ""} ${imgClass}`} />
      ) : (
        <div className="h-full w-full bg-[radial-gradient(circle_at_70%_20%,#6b1a2b,#1b1413_70%)]" />
      )}
      {dark && <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#120d0d]/55 via-transparent to-[#6b1a2b]/10" />}
    </div>
  );
}
function Count({ n, s, play }: { n: number; s: string; play: boolean }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!play) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const k = Math.min(1, (t - t0) / 1400);
      setV(Math.round(n * (1 - Math.pow(1 - k, 3))));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [play, n]);
  return <>{v}{s}</>;
}

const eyebrow = "text-[10px] font-bold uppercase tracking-[3px] text-[#6b1a2b]";
const wrap = "mx-auto max-w-[1280px] px-5 md:px-10";
const solid = "group inline-flex items-center gap-4 bg-[#6b1a2b] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#8a2338] hover:shadow-[0_14px_30px_-12px_#6b1a2b]";
const solidD = solid.replace("bg-[#6b1a2b]","bg-[#a8283f]").replace("hover:bg-[#8a2338]","hover:bg-[#c23550]").replace("-12px_#6b1a2b","-12px_#a8283f");
const arrowCls = "transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5";
const iconBox = "grid place-items-center bg-[#eddcde] text-[#6b1a2b] transition duration-500 group-hover:bg-[#6b1a2b] group-hover:text-white";

/* ---------- page ---------- */
export default function BookkeepingPage() {
  const [mounted, setMounted] = useState(false);
  const [prog, setProg] = useState(0);
  const [sRef, sSeen] = useInView<HTMLElement>(0.3);
  const [pRef, pSeen] = useInView<HTMLDivElement>(0.3);
  const [faq, setFaq] = useState<number | null>(0);
  const [vi, setVi] = useState(0);
  const [mode, setMode] = useState<"US" | "Canada">("US");
  const m = modes[mode];

  useEffect(() => {
    setMounted(true);
    const on = () => setProg(window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight));
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => setVi((v) => (v + 1) % voices.length), 7000);
    return () => clearTimeout(id);
  }, [vi]);

  const onHero = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--px", String(((e.clientX - r.left) / r.width - 0.5) * 2));
    e.currentTarget.style.setProperty("--py", String(((e.clientY - r.top) / r.height - 0.5) * 2));
  };
  const line = `ln block translate-y-[110%] ${mounted ? "[animation:bkUp_1s_cubic-bezier(.2,.8,.2,1)_forwards]" : ""}`;

  return (
    <main className="bk min-h-screen overflow-x-clip bg-[#f6f2ec] text-[#1d1214] selection:bg-[#6b1a2b] selection:text-white">
      <style>{CSS}</style>
      <div aria-hidden="true" className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-gradient-to-r from-[#6b1a2b] to-[#e4a0ae]" style={{ transform: `scaleX(${prog})` }} />

      {/* ================= HERO ================= */}
      <section onMouseMove={onHero} className="relative isolate overflow-hidden bg-[#120d0d] text-white">
        <div className="absolute inset-y-0 right-0 -z-10 w-full transition-transform duration-300 ease-out [transform:translate(calc(var(--px,0)*-14px),calc(var(--py,0)*-8px))] lg:w-[74%]">
          <Photo src={IMG.hero} alt="Modern office at dusk" dark={false} className="h-full w-full scale-110" imgClass="brightness-[.5] contrast-110 saturate-75 sepia-[.3] [animation:bkZoom_22s_ease-in-out_infinite_alternate]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#120d0d] via-[#120d0d]/55 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(255,186,110,.24),transparent_55%)] [animation:bkGlow_6s_ease-in-out_infinite]" />
        </div>
        <div className={`${wrap} relative z-10 pb-28 pt-24 md:pb-40 md:pt-36`}>
          <p className={`mb-6 text-[10px] font-semibold uppercase tracking-[4px] text-white/70 opacity-0 ${mounted ? "[animation:bkRise_.8s_.1s_forwards]" : ""}`}>Bookkeeping &amp; Accounting</p>
          <h1 className="m-0 text-[clamp(3rem,7.5vw,6.2rem)] font-medium leading-[0.98] tracking-[-0.05em]">
            <span className="block overflow-hidden pb-[0.08em]"><span className={line} style={{ animationDelay: ".15s" }}>Clear Books.</span></span>
            <span className="block overflow-hidden pb-[0.08em]"><span className={line} style={{ animationDelay: ".3s" }}>Stay Confident<span className="text-[#a8283f]">.</span></span></span>
          </h1>
          <p className={`mb-9 mt-7 max-w-[440px] text-base leading-7 text-white/75 opacity-0 md:text-lg ${mounted ? "[animation:bkRise_.9s_.7s_forwards]" : ""}`}>
            Reliable bookkeeping and accounting support for small businesses across the United States and Canada, so records stay organised and tax time gets easier.
          </p>
          <div className={`flex flex-wrap items-center gap-6 opacity-0 ${mounted ? "[animation:bkRise_.9s_.9s_forwards]" : ""}`}>
            <a href={EMAIL_PAGE} className={solidD}>Let&apos;s Talk <ArrowRight size={16} className={arrowCls} /></a>
            {/* <Link href="#p" className="group inline-flex items-center gap-3 text-sm font-medium text-white/85 hover:text-white">
              <span className="relative grid h-10 w-10 place-items-center rounded-full border border-white/40 transition group-hover:border-[#c4506a] group-hover:bg-[#6b1a2b]">
                <span className="absolute inset-0 rounded-full border border-white/40 [animation:bkGlow_2.4s_ease-in-out_infinite]" /><Play size={13} fill="currentColor" />
              </span>
              How It Works
            </Link> */}
          </div>
        </div>
        <ul className="absolute bottom-10 right-8 z-10 m-0 hidden list-none flex-col gap-1.5 p-0 text-[9px] font-semibold uppercase tracking-[0.35em] text-white/70 lg:flex">
          <li className="mb-2 h-px w-8 bg-white/50" />
          {words.map((w) => (<li key={w}>{w}</li>))}
        </ul>
      </section>

      {/* ================= STATS ================= */}
      <section ref={sRef} className="border-b border-[#e3d7d3] bg-[#faf6f0]">
        <div className={`${wrap} grid items-center gap-8 py-9 lg:grid-cols-[1.3fr_1fr]`}>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l} className="border-l border-[#e3d7d3] pl-5 first:border-0 first:pl-0">
                <div className="text-3xl font-medium tracking-[-0.04em] md:text-4xl"><Count n={s.n} s={s.s} play={sSeen} /></div>
                <div className="mt-1 text-[11px] text-[#6f6366]">{s.l}</div>
              </div>
            ))}
          </div>
          <div>
            <p className="m-0 mb-3 text-[8px] font-semibold uppercase tracking-[3px] text-[#9a8b8c]">Works with</p>
            <div className="flex flex-wrap gap-x-7 gap-y-2 text-sm font-medium tracking-[0.04em] text-[#4a3d40]">{platforms.map((p) => (<span key={p} className="transition-colors hover:text-[#6b1a2b]">{p}</span>))}</div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className={`${wrap} py-20 md:py-24`}>
        <Reveal className="grid items-end gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className={eyebrow}>Our bookkeeping services</p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">Reliable Bookkeeping for Small Businesses.</h2>
          </div>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <p className="m-0 max-w-[400px] text-sm leading-6 text-[#6f6366]">Ongoing support, help with a backlog, or a focused project. We define the deliverables and responsibilities before work begins.</p>
            <Link href="/servicespage" className="group inline-flex items-center gap-2 text-xs font-bold text-[#6b1a2b]">View all services <ArrowRight size={14} className={arrowCls} /></Link>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {services.map(({ t, d, Icon }, i) => (
            <Reveal key={t} delay={i * 0.1}>
              <div className="group relative h-full lg:border-l lg:border-[#e3d7d3] lg:px-7 lg:first:border-0 lg:first:pl-0">
                <span className={`${iconBox} h-12 w-12 border border-[#e3d7d3] group-hover:scale-110`}><Icon size={20} strokeWidth={1.5} /></span>
                <h3 className="mb-2 mt-5 text-base font-semibold">{t}</h3>
                <p className="m-0 max-w-[220px] text-xs leading-5 text-[#6f6366]">{d}</p>
                <span className="mt-5 grid h-8 w-8 place-items-center rounded-full border border-[#d9c8c6] transition duration-500 group-hover:rotate-45 group-hover:border-[#6b1a2b] group-hover:bg-[#6b1a2b] group-hover:text-white"><ArrowUpRight size={14} /></span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= MORE THAN JUST BOOKKEEPING ================= */}
      <section className="bg-[#efe8de]">
        <div className={`${wrap} grid items-center gap-10 py-16 lg:grid-cols-[0.8fr_0.85fr_0.7fr] lg:gap-12`}>
          <Reveal>
            <p className={eyebrow}>More than just bookkeeping</p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.04em] md:text-4xl">Clear Records. Better Decisions.</h2>
            <p className="mb-6 mt-4 text-sm leading-7 text-[#6f6366]">When books fall behind, cash flow, profitability and tax prep all get harder to see. Our outsourced bookkeeping gives you a clearer view of your numbers and a consistent process for keeping records up to date.</p>
            <a href={EMAIL_PAGE} className={solid}>Let&apos;s Talk <ArrowRight size={15} className={arrowCls} /></a>
          </Reveal>
          <Reveal delay={0.12}>
            <Photo src={IMG.focus} alt="Calculator and financial documents" className="aspect-[1.2/1] shadow-2xl shadow-black/20" imgClass="brightness-[.78] [animation:bkZoom_24s_ease-in-out_infinite_alternate]" />
          </Reveal>
          <ul className="m-0 grid list-none gap-5 p-0">
            {benefits.map(({ t, d, Icon }, i) => (
              <Reveal key={t} delay={0.1 + i * 0.08}>
                <li className="group flex items-start gap-4">
                  <span className={`${iconBox} h-10 w-10 shrink-0 border border-[#e0cfd2]`}><Icon size={17} strokeWidth={1.6} /></span>
                  <span><b className="block text-sm">{t}</b><span className="text-xs text-[#6f6366]">{d}</span></span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section id="process" className={`${wrap} py-16`}>
        <div ref={pRef} className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:items-center">
          <div>
            <p className={eyebrow}>Our process</p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.04em] md:text-4xl">A Simple Process. From Start to Books.</h2>
          </div>
          <ol className="relative m-0 grid list-none gap-8 p-0 sm:grid-cols-4">
            <span aria-hidden="true" className={`absolute left-0 top-[11px] hidden h-px w-full origin-left bg-[#6b1a2b]/35 sm:block ${pSeen ? "[animation:bkBar_1.6s_ease-out_forwards]" : "scale-x-0"}`} />
            {steps.map(([t, d], i) => (
              <li key={t} className="group relative sm:border-l sm:border-[#e3d7d3] sm:pl-5 sm:first:border-0 sm:first:pl-0">
                <span className="relative inline-block bg-[#f6f2ec] pr-2 text-xs font-bold text-[#6b1a2b]">0{i + 1}</span>
                <h3 className="mb-1.5 mt-3 text-sm font-semibold transition-colors group-hover:text-[#6b1a2b]">{t}</h3>
                <p className="m-0 max-w-[170px] text-[11px] leading-5 text-[#6f6366]">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ================= US / CANADA ================= */}
      <section id="regions" className="relative isolate overflow-hidden bg-[#120d0d] text-[#f4eee6]">
        <div aria-hidden="true" className="absolute -left-24 top-0 -z-10 h-full w-[45%] bg-[radial-gradient(circle,rgba(168,40,63,.3),transparent_65%)] [animation:bkGlow_7s_ease-in-out_infinite]" />
        <div aria-hidden="true" className="absolute -right-24 top-0 -z-10 h-full w-[40%] bg-[radial-gradient(circle,rgba(255,186,110,.12),transparent_65%)] [animation:bkGlow_9s_ease-in-out_infinite]" />
        <div className={`${wrap} py-20 md:py-24`}>
          <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#e4a0ae]">Bookkeeping for US and Canadian businesses</p>
              <h2 className="mt-4 max-w-[620px] text-3xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">The right process depends on where you operate.</h2>
            </div>
            <div role="tablist" aria-label="Country" className="relative flex border border-[#f4eee6]/15 bg-[#f4eee6]/5 p-1">
              <span aria-hidden="true" className="absolute bottom-1 top-1 w-[calc(50%-4px)] bg-[#a8283f] transition-transform duration-500 [transition-timing-function:cubic-bezier(.3,1.2,.5,1)]" style={{ transform: mode === "US" ? "translateX(0)" : "translateX(100%)" }} />
              {(["US", "Canada"] as const).map((c) => (
                <button key={c} type="button" role="tab" aria-selected={mode === c} onClick={() => setMode(c)} className={`relative z-10 w-28 py-2.5 text-sm font-semibold transition-colors ${mode === c ? "text-white" : "text-[#f4eee6]/65 hover:text-white"}`}>{c}</button>
              ))}
            </div>
          </Reveal>

          <div key={mode} className="grid items-stretch gap-5 [animation:bkSwap_.6s_both] lg:grid-cols-[1.05fr_0.95fr]">
            <div className="border border-[#f4eee6]/15 bg-[#1b1413] p-7 sm:p-9">
              <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight">{m.t}</h3>
              <p className="mb-6 mt-3 text-sm leading-6 text-[#f4eee6]/68">{m.d}</p>
              <ul className="m-0 mb-6 grid list-none gap-3 p-0 sm:grid-cols-2">
                {m.items.map(([t, I]) => (
                  <li key={t} className="group flex items-start gap-3 border border-[#f4eee6]/12 bg-[#f4eee6]/[0.04] p-4 text-sm font-medium transition duration-300 hover:-translate-y-1 hover:border-[#a8283f]">
                    <span className="grid h-9 w-9 shrink-0 place-items-center bg-[#a8283f] text-[#fff8f0] transition-transform duration-500 group-hover:rotate-[8deg]"><I size={17} /></span>{t}
                  </li>
                ))}
              </ul>
              <p className="mb-7 mt-0 text-xs leading-5 text-[#f4eee6]/60">{m.scope}</p>
              <a href={EMAIL_PAGE} className={solidD}>{m.cta} <ArrowRight size={15} className={arrowCls} /></a>
            </div>
            <div className="relative min-h-[320px] overflow-hidden border border-[#f4eee6]/15">
              <Photo src={m.img} alt={mode === "US" ? "United States city skyline" : "Canadian city skyline"} className="absolute inset-0" imgClass="brightness-[.6] [animation:bkZoom_24s_ease-in-out_infinite_alternate]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120d0d]/80 via-transparent to-[#6b1a2b]/20" />
              <span className="absolute left-5 top-5 bg-[#120d0d]/85 px-4 py-2 text-[10px] font-bold uppercase tracking-[3px] text-[#e4a0ae] backdrop-blur">{mode === "US" ? "United States" : "Canada"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TOOLS ================= */}
      <section className={`${wrap} pb-20`}>
        <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className={eyebrow}>Tools we work with</p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.04em] md:text-4xl">Accounting Software We Support.</h2>
            <p className="mt-3 max-w-[340px] text-sm leading-6 text-[#6f6366]">We maintain an existing setup or plan a more orderly transition, where engagement and access permissions allow.</p>
          </Reveal>
          <ul className="m-0 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-4">
            {tools.map((t, i) => (
              <Reveal key={t.t} delay={0.08 + i * 0.08}>
                <li className="group flex h-full flex-col items-center gap-3 border border-[#e3d7d3] bg-[#faf6f0] px-3 py-6 text-center transition duration-500 hover:-translate-y-1.5 hover:border-[#6b1a2b] hover:shadow-xl hover:shadow-black/10">
                  <span className="grid h-12 w-12 place-items-center rounded-full text-lg font-extrabold text-white transition-transform duration-700 group-hover:rotate-[360deg]" style={{ background: t.c }}>{t.l}</span>
                  <span className="text-[11px] font-medium text-[#4a3d40]">{t.t}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= WHAT YOU RECEIVE (dark) ================= */}
      <section className="relative isolate overflow-hidden bg-[#120d0d] text-white">
        <div className="absolute inset-y-0 left-0 -z-10 w-full lg:w-[45%]">
          <Photo src={IMG.workBg} alt="" className="h-full w-full" imgClass="brightness-[.55] [animation:bkZoom_26s_ease-in-out_infinite_alternate]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#120d0d]/70 to-[#120d0d]" />
        </div>
        <div className={`${wrap} grid gap-10 py-20 lg:grid-cols-[0.55fr_1.45fr] lg:py-24`}>
          <Reveal>
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#e4a0ae]">What you receive</p>
            <h2 className="mb-4 mt-4 text-3xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">Clear Reports. Organised Records.</h2>
            <p className="mb-7 max-w-[300px] text-xs leading-6 text-white/60">Illustrative samples of the deliverables you can expect each month, not client data.</p>
            <Link href="#services" className={solidD}>Explore Services <ArrowRight size={15} className={arrowCls} /></Link>
          </Reveal>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
            {tiles.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.08}>
                <div className="group relative block aspect-[1.1/1] overflow-hidden bg-[#1d1214]">
                  <Photo src={p.img} alt={p.t} className="absolute inset-0" imgClass="transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-colors duration-500 group-hover:from-[#6b1a2b]/85" />
                  <div className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-2">
                    <div><h3 className="m-0 text-[12px] font-semibold leading-tight">{p.t}</h3><p className="mb-0 mt-0.5 text-[10px] text-white/70">{p.c}</p></div>
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/50 transition duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#6b1a2b]"><ArrowUpRight size={12} /></span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className={`${wrap} py-16`}>
        <div className="grid items-center gap-8 lg:grid-cols-[0.5fr_1.5fr]">
          <Reveal>
            <p className={eyebrow}>Why choose Motive House</p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.04em] md:text-4xl">Your Partner in Clear Books.</h2>
          </Reveal>
          <ul className="m-0 grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {why.map(({ t, d, Icon }, i) => (
              <Reveal key={t} delay={i * 0.09}>
                <li className="group text-center lg:border-l lg:border-[#e3d7d3] lg:px-5 lg:first:border-0">
                  <span className="mx-auto grid h-12 w-12 place-items-center text-[#6b1a2b] transition duration-500 group-hover:-translate-y-1 group-hover:scale-110"><Icon size={28} strokeWidth={1.3} /></span>
                  <b className="mt-3 block text-sm">{t}</b>
                  <span className="mx-auto mt-1 block max-w-[170px] text-[11px] leading-5 text-[#6f6366]">{d}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= VOICES (replace with real reviews later) ================= */}
      <section className="border-y border-[#e3d7d3] bg-[#faf6f0]">
        <div className={`${wrap} py-14`}>
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className={eyebrow}>Our commitment</p>
              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.04em] md:text-4xl">A Partner You Can Rely On.</h2>
            </div>
            <div className="flex gap-2">
              {[-1, 1].map((d) => (
                <button key={d} type="button" aria-label={d < 0 ? "Previous" : "Next"} onClick={() => setVi((v) => (v + d + voices.length) % voices.length)} className="grid h-10 w-10 place-items-center rounded-full border border-[#d9c8c6] transition hover:border-[#6b1a2b] hover:bg-[#6b1a2b] hover:text-white">
                  {d < 0 ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                </button>
              ))}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[0, 1].map((k) => {
              const t = voices[(vi + k) % voices.length];
              return (
                <figure key={`${vi}-${k}`} className={`m-0 border border-[#e3d7d3] bg-[#f6f2ec] p-6 [animation:bkSwap_.6s_both] ${k === 1 ? "hidden md:block" : ""}`}>
                  <span className="font-serif text-4xl leading-none text-[#6b1a2b]">“</span>
                  <blockquote className="m-0 min-h-[90px] text-sm leading-6 text-[#4a3d40]">{t.q}</blockquote>
                  <figcaption className="mt-4 flex items-center gap-3 border-t border-[#e3d7d3] pt-4">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-[#6b1a2b] text-xs font-bold text-white">{t.n.split(" ")[1][0].toUpperCase()}</span>
                    <span className="text-xs"><b className="block text-sm">{t.n}</b><span className="text-[#6f6366]">{t.r}</span></span>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className={`${wrap} py-16 md:py-20`}>
        <div className="grid items-center gap-10 lg:grid-cols-[0.5fr_0.55fr_1fr]">
          <Reveal>
            <p className={eyebrow}>Frequently asked questions</p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.04em] md:text-4xl">Common Questions.</h2>
          </Reveal>
          {/* <Reveal delay={0.1}><Photo src={IMG.faq} alt="Desk with plant and books" className="aspect-[1.1/1]" imgClass="brightness-[.7] [animation:bkZoom_24s_ease-in-out_infinite_alternate]" /></Reveal> */}
          <div className="border-t border-[#e3d7d3]">
            {faqs.map(([q, a], i) => {
              const on = faq === i;
              return (
                <div key={q} className="border-b border-[#e3d7d3]">
                  <button type="button" aria-expanded={on} onClick={() => setFaq(on ? null : i)} className="flex w-full items-center justify-between gap-4 py-4 text-left text-[13px] font-medium transition-colors hover:text-[#6b1a2b]">
                    {q}
                    <span className={`grid h-6 w-6 shrink-0 place-items-center transition-transform duration-300 ${on ? "rotate-45 text-[#6b1a2b]" : ""}`}><Plus size={14} /></span>
                  </button>
                  <div className={`grid transition-[grid-template-rows] duration-500 ${on ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <p className="m-0 overflow-hidden text-xs leading-6 text-[#6f6366]"><span className="block pb-4 pr-8">{a}</span></p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative isolate overflow-hidden bg-[#120d0d] text-white">
        <div className="absolute inset-y-0 right-0 -z-10 w-full lg:w-1/2">
          <Photo src={IMG.cta} alt="" className="h-full w-full" imgClass="brightness-[.7] [animation:bkZoom_24s_ease-in-out_infinite_alternate]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#120d0d] via-[#120d0d]/80 to-[#120d0d]/30" />
        </div>
        <div className={`${wrap} py-20 md:py-24`}>
          <Reveal>
            <p className="text-[10px] font-semibold uppercase tracking-[4px] text-white/60">Let&apos;s work together</p>
            <h2 className="mb-4 mt-5 max-w-[560px] text-4xl font-medium leading-[1.05] tracking-[-0.045em] md:text-6xl">Ready for Clearer Books<span className="text-[#a8283f]">?</span></h2>
            <p className="mb-8 max-w-[400px] text-sm leading-7 text-white/70">Schedule a discovery call. Not sure what you need? We&apos;ll help define the first practical step.</p>
            <a href={EMAIL_PAGE} className={solidD}>Let&apos;s Talk <ArrowRight size={16} className={arrowCls} /></a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}