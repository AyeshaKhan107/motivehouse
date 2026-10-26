


"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowLeft, ArrowRight, ArrowUpRight, BarChart3, Instagram, Monitor, PenTool, Palette, Play,
} from "lucide-react";

/* ------------------------------------------------------------------
   IMAGES: replace any URL with your own file (e.g. "/images/hero.jpg").
   All photos are darkened automatically. If a link fails to load, a
   dark maroon fallback shows so the layout never breaks.
------------------------------------------------------------------- */
const IMG = {
  hero: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85",
  bookkeeping: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=85",
  tax: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=85",
  about: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85",
  brand: "https://images.unsplash.com/photo-1634942536790-253b1a6a6c6c?auto=format&fit=crop&w=900&q=85",
  social: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=85",
  web: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85",
  graphic: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=85",
  cta: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1400&q=85",
};

/* Replace with your real numbers before launch */
const stats = [
  { n: 120, s: "+", l: "Projects completed", w: 88 },
  { n: 85, s: "+", l: "Happy clients", w: 72 },
  { n: 3.5, s: "x", l: "Average growth", w: 64 },
  { n: 98, s: "%", l: "Client satisfaction", w: 98 },
];

/* Services carousel: the five from the reference, linked to your pages */
const services = [
  { t: "Tax&Accounts", d: "Professional tax and accounting services.", Icon: PenTool, href: "/services/tax-accounting" },
  { t: "Social Media Management", d: "Consistent content and community growth.", Icon: Instagram, href: "/services/social-media-management" },
  { t: "Book-keeping", d: "Accurate bookkeeping to keep your finances clear and organised.", Icon: BarChart3, href: "/services/book-keeping" },
  { t: "Web Design & Development", d: "Modern websites that convert.", Icon: Monitor, href: "/services/web-design" },
  { t: "Graphic Design", d: "Scroll-stopping visuals for your brand.", Icon: Palette, href: "/services/graphic-design" },
];
const business = [
  { t: "Bookkeeping & Accounting", d: "Accurate bookkeeping to keep your finances clear and organised.", img: IMG.bookkeeping, href: "/services/bookkeeping" },
  { t: "Tax Preparation & Filing", d: "Reliable tax support with organised, accurate documentation.", img: IMG.tax, href: "/services/tax-accounting" },
];
const steps = [
  ["Discover", "We understand your goals."],
  ["Plan", "We create a tailored strategy."],
  ["Create", "We bring ideas to life with creative excellence."],
  ["Deliver", "We launch, optimize and grow."],
];
const projects = [
  // { t: "Brand Identity", c: "Strategy & Design", img: IMG.brand, href: "/services/graphic-design" },
  { t: "Social Media Campaign", c: "Content & Ads", img: IMG.social, href: "/services/social-media-management" },
  { t: "Website Development", c: "Design & Development", img: IMG.web, href: "/services/web-design" },
  { t: "Graphic Design", c: "Visual Content", img: IMG.graphic, href: "/services/graphic-design" },
];
/* Brand statements, not client quotes. Swap in verified testimonials before publishing. */
const testimonials = [
  { q: "The right creative partner makes a real difference. Everything should feel intentional, professional and aligned with your business goals.", n: "Built around your goals", r: "The Motive House approach" },
  { q: "A great digital experience is more than appearance. It communicates clearly, builds trust and makes every interaction count.", n: "Designed to convert", r: "Our commitment" },
  { q: "Strong businesses need thoughtful execution, consistency and systems that support long-term growth.", n: "Made for growth", r: "Our commitment" },
];
const words = ["Brands", "Strategy", "Creative", "Technology", "Growth"];
const SLIDE_MS = 6000;

const CSS = `
@keyframes mhUp{from{transform:translateY(110%)}to{transform:none}}
@keyframes mhRise{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}
@keyframes mhZoom{from{transform:scale(1.02)}to{transform:scale(1.14)}}
@keyframes mhMarq{to{transform:translateX(-50%)}}
@keyframes mhGlow{0%,100%{opacity:.45}50%{opacity:.95}}
@keyframes mhBar{from{transform:scaleX(0)}to{transform:scaleX(1)}}
@keyframes mhShine{0%{background-position:-200% 0}100%{background-position:200% 0}}
@keyframes mhFloat{50%{transform:translateY(-10px)}}
@keyframes mhSwap{from{opacity:0;transform:translateX(30px)}to{opacity:1;transform:none}}
.mh .snap{scrollbar-width:none}.mh .snap::-webkit-scrollbar{display:none}
@media (prefers-reduced-motion:reduce){.mh *{animation:none!important;transition:none!important}.mh .rv{opacity:1!important;transform:none!important}.mh .ln{transform:none!important}}
.mh :focus-visible{outline:2px solid #c9566d;outline-offset:3px}
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
    <div ref={ref} className={`rv opacity-0 ${seen ? "[animation:mhRise_.9s_cubic-bezier(.2,.7,.2,1)_forwards]" : ""} ${className}`} style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  );
}

function Photo({ src, alt, className = "", imgClass = "", dark = true }: { src: string; alt: string; className?: string; imgClass?: string; dark?: boolean }) {
  const [bad, setBad] = useState(false);
  return (
    <div className={`relative overflow-hidden bg-[#140d0e] ${className}`}>
      {!bad ? (
        <img src={src} alt={alt} loading="lazy" onError={() => setBad(true)} className={`h-full w-full object-cover ${dark ? "brightness-[.62] contrast-110 saturate-[.8] sepia-[.2]" : ""} ${imgClass}`} />
      ) : (
        <div className="h-full w-full bg-[radial-gradient(circle_at_70%_20%,#6b1a2b,#140d0e_70%)]" />
      )}
      {dark && <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0e0b0b]/55 via-transparent to-[#871D34]/10" />}
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
      const k = Math.min(1, (t - t0) / 1600);
      setV(n * (1 - Math.pow(1 - k, 3)));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [play, n]);
  return <>{Number.isInteger(n) ? Math.round(v) : v.toFixed(1)}{s}</>;
}

const eyebrow = "text-[10px] font-bold uppercase tracking-[3px] text-[#871D34]";
const wrap = "mx-auto max-w-[1280px] px-5 md:px-10";
const solid = "group inline-flex items-center gap-4 bg-[#871D34] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#a02340] hover:shadow-[0_14px_30px_-12px_#871D34]";
const arrowCls = "transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5";

/* ---------- Services carousel (touch swipe, arrows, autoplay, dots) ---------- */
function ServicesCarousel() {
  const track = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((i: number) => {
    const el = track.current;
    if (!el) return;
    const idx = (i + services.length) % services.length;
    const card = el.children[idx] as HTMLElement;
    el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
    setActive(idx);
  }, []);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => go(active + 1), 3800);
    return () => clearInterval(id);
  }, [active, paused, go]);

  const onScroll = () => {
    const el = track.current;
    if (!el) return;
    let best = 0, dist = Infinity;
    Array.from(el.children).forEach((c, i) => {
      const d = Math.abs((c as HTMLElement).offsetLeft - el.offsetLeft - el.scrollLeft);
      if (d < dist) { dist = d; best = i; }
    });
    setActive(best);
  };

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <ul ref={track} onScroll={onScroll} className="snap m-0 flex list-none snap-x snap-mandatory gap-4 overflow-x-auto p-0 pb-2">
        {services.map(({ t, d, Icon, href }, i) => (
          <li key={t} className="w-[82%] shrink-0 snap-start sm:w-[46%] lg:w-[31.5%]">
            <Link href={href} className={`group relative flex h-[300px] flex-col justify-between overflow-hidden border p-7 transition duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#871D34]/20 ${i === active ? "border-[#871D34] bg-[#171012] text-white" : "border-[#DDD5CA] bg-[#FFFDFA] hover:bg-[#171012] hover:text-white"}`}>
              <span aria-hidden="true" className="pointer-events-none absolute -right-3 -top-6 text-[120px] font-bold leading-none tracking-tighter opacity-[0.07]">0{i + 1}</span>
              <span aria-hidden="true" className="pointer-events-none absolute -bottom-16 -right-16 h-44 w-44 rounded-full bg-[#871D34] opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-50" />
              <span className="relative grid h-14 w-14 place-items-center rounded-full bg-[#871D34] text-white transition duration-500 group-hover:scale-110 group-hover:rotate-[8deg]"><Icon size={22} strokeWidth={1.6} /></span>
              <div className="relative">
                <h3 className="m-0 max-w-[230px] text-2xl font-semibold leading-tight tracking-[-0.03em]">{t}</h3>
                <p className={`mb-0 mt-3 max-w-[240px] text-sm leading-6 ${i === active ? "text-white/65" : "text-[#77716C] group-hover:text-white/65"}`}>{d}</p>
              </div>
              <span className="relative flex items-center justify-between border-t border-current/15 pt-4 text-xs font-semibold">
                Explore service
                <span className="grid h-9 w-9 place-items-center rounded-full border border-current/30 transition duration-500 group-hover:rotate-45 group-hover:border-[#871D34] group-hover:bg-[#871D34] group-hover:text-white"><ArrowUpRight size={15} /></span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-2" role="tablist" aria-label="Services">
          {services.map((s, i) => (
            <button key={s.t} type="button" role="tab" aria-selected={i === active} aria-label={s.t} onClick={() => go(i)} className={`h-1.5 transition-all duration-500 ${i === active ? "w-10 bg-[#871D34]" : "w-5 bg-[#D9D0C6] hover:bg-[#b99]"}`} />
          ))}
        </div>
        <div className="flex gap-2">
          {[-1, 1].map((d) => (
            <button key={d} type="button" aria-label={d < 0 ? "Previous service" : "Next service"} onClick={() => go(active + d)} className="grid h-11 w-11 place-items-center rounded-full border border-[#D9D0C6] transition hover:border-[#871D34] hover:bg-[#871D34] hover:text-white">
              {d < 0 ? <ArrowLeft size={17} /> : <ArrowRight size={17} />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- Testimonials: autoplay spotlight with progress ---------- */
function Spotlight() {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => setI((v) => (v + 1) % testimonials.length), SLIDE_MS);
    return () => clearTimeout(id);
  }, [i]);
  const t = testimonials[i];
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-br from-[#2a0c14] via-[#171012] to-[#0e0b0b] text-white">
      <div aria-hidden="true" className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-[#871D34] opacity-40 blur-[90px] [animation:mhGlow_6s_ease-in-out_infinite]" />
      <span aria-hidden="true" className="absolute right-8 top-2 -z-10 font-serif text-[220px] leading-none text-white/[0.05]">”</span>
      <div className="grid gap-8 p-7 md:grid-cols-[1fr_auto] md:p-12">
        <div>
          <p className="m-0 text-[10px] font-bold uppercase tracking-[3px] text-[#d98a9a]">0{i + 1} / 0{testimonials.length}</p>
          <blockquote key={i} className="mb-0 mt-6 min-h-[150px] text-2xl font-medium leading-[1.4] tracking-[-0.02em] [animation:mhSwap_.7s_both] md:text-[1.7rem]">
            “{t.q}”
          </blockquote>
          <div key={`a${i}`} className="mt-8 flex items-center gap-4 [animation:mhSwap_.7s_.1s_both]">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-[#871D34] text-sm font-bold ring-4 ring-white/10">{t.n[0]}</span>
            <div><b className="block text-sm">{t.n}</b><span className="text-xs text-white/55">{t.r}</span></div>
          </div>
        </div>
        <div className="flex gap-3 md:flex-col md:justify-center">
          {testimonials.map((x, k) => (
            <button key={x.n} type="button" aria-label={`Show testimonial ${k + 1}`} aria-current={k === i} onClick={() => setI(k)} className={`grid h-14 w-14 place-items-center rounded-full border text-sm font-bold transition duration-500 ${k === i ? "scale-110 border-[#871D34] bg-[#871D34]" : "border-white/20 text-white/60 hover:border-white/60"}`}>{x.n[0]}</button>
          ))}
        </div>
      </div>
      <div className="h-[3px] bg-white/10">
        <span key={i} className="block h-full origin-left bg-[#c9314f]" style={{ animation: `mhBar ${SLIDE_MS}ms linear forwards` }} />
      </div>
    </div>
  );
}

/* ---------- page ---------- */
export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [sRef, sSeen] = useInView<HTMLElement>(0.3);
  const [pRef, pSeen] = useInView<HTMLDivElement>(0.3);
  const [prog, setProg] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
    const on = () => setProg(window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight));
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const onHero = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--px", String(((e.clientX - r.left) / r.width - 0.5) * 2));
    e.currentTarget.style.setProperty("--py", String(((e.clientY - r.top) / r.height - 0.5) * 2));
  };

  const line = `ln block translate-y-[110%] ${mounted ? "[animation:mhUp_1s_cubic-bezier(.2,.8,.2,1)_forwards]" : ""}`;

  return (
    <main className="mh min-h-screen overflow-x-clip bg-[#F8F6F2] text-[#171615] selection:bg-[#871D34] selection:text-white">
      <style>{CSS}</style>
      <div aria-hidden="true" className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-gradient-to-r from-[#871D34] to-[#e4607a]" style={{ transform: `scaleX(${prog})` }} />

      {/* ================= HERO ================= */}
      <section ref={heroRef} onMouseMove={onHero} className="relative isolate overflow-hidden bg-[#0e0b0b] text-white">
        <div className="absolute inset-y-0 right-0 -z-10 w-full transition-transform duration-300 ease-out [transform:translate(calc(var(--px,0)*-14px),calc(var(--py,0)*-8px))] lg:w-[74%]">
          <Photo src={IMG.hero} alt="Modern creative office at dusk" dark={false} className="h-full w-full scale-110" imgClass="brightness-[.5] contrast-110 saturate-75 sepia-[.3] [animation:mhZoom_22s_ease-in-out_infinite_alternate]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e0b0b] via-[#0e0b0b]/55 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(255,170,90,.28),transparent_55%)] [animation:mhGlow_6s_ease-in-out_infinite]" />
        </div>

        <div className={`${wrap} relative z-10 pb-28 pt-24 md:pb-40 md:pt-36`}>
          <p className={`mb-6 text-[10px] font-semibold uppercase tracking-[4px] text-white/70 opacity-0 ${mounted ? "[animation:mhRise_.8s_.1s_forwards]" : ""}`}>Independent creative &amp; digital agency</p>
          <h1 className="m-0 text-[clamp(3rem,7.5vw,6.4rem)] font-medium leading-[0.98] tracking-[-0.05em]">
            <span className="block overflow-hidden pb-[0.08em]"><span className={line} style={{ animationDelay: ".15s" }}>We Make</span></span>
            <span className="block overflow-hidden pb-[0.08em]"><span className={line} style={{ animationDelay: ".3s" }}>Ideas Matter<span className="text-[#c9314f]">.</span></span></span>
          </h1>
          <p className={`mb-9 mt-7 max-w-[440px] text-base leading-7 text-white/75 opacity-0 md:text-lg ${mounted ? "[animation:mhRise_.9s_.7s_forwards]" : ""}`}>
            We turn ideas into meaningful brands, digital experiences and measurable growth.
          </p>
          <div className={`flex flex-wrap items-center gap-6 opacity-0 ${mounted ? "[animation:mhRise_.9s_.9s_forwards]" : ""}`}>
            <a href="mailto:support@motivehouse.co" className={solid}>Let&apos;s Talk <ArrowRight size={16} className={arrowCls} /></a>
            <Link href="#services" className="group inline-flex items-center gap-3 text-sm font-medium text-white/85 hover:text-white">
              <span className="relative grid h-10 w-10 place-items-center rounded-full border border-white/40 transition group-hover:border-[#c9566d] group-hover:bg-[#871D34]">
                <span className="absolute inset-0 rounded-full border border-white/40 [animation:mhGlow_2.4s_ease-in-out_infinite]" /><Play size={13} fill="currentColor" />
              </span>
              Watch Our Work
            </Link>
          </div>
        </div>

        <ul className="absolute bottom-10 right-8 z-10 m-0 hidden list-none flex-col gap-1.5 p-0 text-[9px] font-semibold uppercase tracking-[0.35em] text-white/70 lg:flex">
          <li className="mb-2 h-px w-8 bg-white/50" />
          {words.map((w) => (<li key={w}>{w}</li>))}
        </ul>
      </section>

      {/* ================= STATS (black band) ================= */}
      <section ref={sRef} className="relative isolate overflow-hidden bg-[#0e0b0b] text-white">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,#c9314f,transparent)] bg-[length:200%_100%] [animation:mhShine_5s_linear_infinite]" />
        <div aria-hidden="true" className="absolute -left-20 top-0 -z-10 h-full w-[40%] bg-[radial-gradient(circle,rgba(135,29,52,.35),transparent_65%)] [animation:mhGlow_7s_ease-in-out_infinite]" />
        <div aria-hidden="true" className="absolute -right-20 top-0 -z-10 h-full w-[40%] bg-[radial-gradient(circle,rgba(255,170,90,.12),transparent_65%)] [animation:mhGlow_9s_ease-in-out_infinite]" />
        <div className={`${wrap} grid gap-10 py-14 md:py-16`}>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div key={s.l} className="group relative">
                <div className="text-4xl font-medium tracking-[-0.05em] transition-transform duration-500 group-hover:-translate-y-1 md:text-6xl"><Count n={s.n} s={s.s} play={sSeen} /></div>
                <div className="mt-2 text-xs text-white/60">{s.l}</div>
                <span className="mt-5 block h-px w-full bg-white/10"><span className="block h-full origin-left bg-gradient-to-r from-[#871D34] to-[#e4607a]" style={{ width: `${s.w}%`, transform: sSeen ? "scaleX(1)" : "scaleX(0)", transition: `transform 1.6s ${0.2 + i * 0.15}s cubic-bezier(.2,.8,.2,1)`, transformOrigin: "left" }} /></span>
              </div>
            ))}
          </div>
          <div className="overflow-hidden border-t border-white/10 pt-6 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]" aria-hidden="true">
            <div className="flex w-max gap-14 text-xs font-bold tracking-[0.35em] text-white/35 [animation:mhMarq_26s_linear_infinite]">
              {[...words, ...words, ...words, ...words].map((w, i) => (<span key={i} className="flex items-center gap-14 uppercase">{w}<span className="h-1 w-1 rounded-full bg-[#c9314f]" /></span>))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CREATIVE & DIGITAL SERVICES (carousel) ================= */}
      <section id="services" className={`${wrap} py-20 md:py-24`}>
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className={eyebrow}>Our services</p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] md:text-5xl">Creative &amp; Digital Services</h2>
            <p className="mt-3 text-sm text-[#77716C]">Everything you need to build, grow and scale your brand online.</p>
          </div>
          <Link href="/servicespage" className="group inline-flex items-center gap-2 text-xs font-bold text-[#871D34]">View all services <ArrowRight size={14} className={arrowCls} /></Link>
        </Reveal>
        <Reveal delay={0.1}><ServicesCarousel /></Reveal>
      </section>

      {/* ================= BUSINESS SERVICES ================= */}
      <section className="bg-[#0e0b0b] text-white">
        <div className={`${wrap} grid items-center gap-10 py-16 lg:grid-cols-[0.6fr_1.4fr]`}>
          <Reveal>
            <p className={eyebrow}>Business services</p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">Support for a Stronger Business</h2>
            <p className="mb-5 mt-4 max-w-[340px] text-sm leading-6 text-[#77716C]">Keep your business organized, compliant and ready for growth.</p>
            <Link href="/servicespage" className="group inline-flex items-center gap-2 text-xs font-bold text-[#871D34]">View all business services <ArrowRight size={14} className={arrowCls} /></Link>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {business.map(({ t, d, img, href }, i) => (
              <Reveal key={t} delay={i * 0.12}>
                <Link href={href} className="group grid h-full grid-cols-[0.8fr_1fr] overflow-hidden border border-[#DDD5CA] bg-[#FFFDFA] transition duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10">
                  <Photo src={img} alt={t} className="min-h-[170px]" imgClass="transition-transform duration-700 group-hover:scale-110" />
                  <div className="flex flex-col justify-between p-5">
                    <div>
                      <h3 className="m-0 text-base font-semibold">{t}</h3>
                      <p className="mb-0 mt-2 text-xs leading-5 text-[#77716C]">{d}</p>
                    </div>
                    <span className="mt-4 grid h-8 w-8 place-items-center self-end rounded-full border border-[#D9D0C6] transition duration-500 group-hover:rotate-45 group-hover:border-[#871D34] group-hover:bg-[#871D34] group-hover:text-white"><ArrowUpRight size={14} /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="bg-[#FFFDFA]">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative min-h-[320px] lg:min-h-[440px]">
            <Photo src={IMG.about} alt="Quiet corner of our studio" className="absolute inset-0" imgClass="brightness-[.8] [animation:mhZoom_26s_ease-in-out_infinite_alternate]" />
            <ul className="absolute bottom-8 left-8 m-0 list-none p-0 text-[9px] font-semibold uppercase leading-5 tracking-[0.35em] text-white/80">
              {["Ideas", "People", "Strategy", "Technology", "Impact"].map((w) => (<li key={w}>{w}</li>))}
            </ul>
          </div>
          <Reveal className="grid items-center gap-10 px-5 py-14 md:px-12 lg:grid-cols-[1.3fr_0.7fr] lg:py-16">
            <div>
              <p className={eyebrow}>About Motive House</p>
              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">A Creative Partner for Ambitious Businesses.</h2>
              <p className="mb-6 mt-5 max-w-[520px] text-sm leading-7 text-[#77716C]">
                We&apos;re an independent creative and digital agency that combines strategy, creativity and technology to help businesses grow. From stunning brands to high-performing websites, impactful campaigns and reliable business support, we bring clarity, consistency and measurable results.
              </p>
              <Link href="/about" className={solid}>Our Story <ArrowRight size={15} className={arrowCls} /></Link>
            </div>
            <ul className="m-0 hidden list-none gap-5 border-l border-[#E7E1DA] p-0 pl-8 lg:grid">
              {[["5+", "Years experience"], ...stats.slice(0, 3).map((s) => [`${s.n}${s.s}`, s.l])].map(([n, l]) => (<li key={l}><b className="block text-2xl font-medium tracking-tight">{n}</b><span className="text-xs text-[#77716C]">{l}</span></li>))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className={`${wrap} py-20`}>
        <div ref={pRef} className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:items-center">
          <div>
            <p className={eyebrow}>Our process</p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">A Simple Process. Real Results.</h2>
          </div>
          <ol className="relative m-0 grid list-none gap-8 p-0 sm:grid-cols-4">
            <span aria-hidden="true" className={`absolute left-0 top-[17px] hidden h-px w-full origin-left bg-[#871D34]/40 sm:block ${pSeen ? "[animation:mhBar_1.6s_ease-out_forwards]" : "scale-x-0"}`} />
            {steps.map(([t, d], i) => (
              <li key={t} className="group relative">
                <span className="relative grid h-9 w-9 place-items-center rounded-full border border-[#871D34] bg-[#F8F6F2] text-xs font-bold text-[#871D34] transition duration-500 group-hover:scale-110 group-hover:bg-[#871D34] group-hover:text-white">0{i + 1}</span>
                <h3 className="mb-1.5 mt-4 text-base font-semibold">{t}</h3>
                <p className="m-0 max-w-[190px] text-xs leading-5 text-[#77716C]">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="work" className={`${wrap} pb-20`}>
        <Reveal className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className={eyebrow}>Featured work</p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] md:text-4xl">Selected Projects.</h2>
          </div>
          {/* <a href="#portfolio" className="group inline-flex items-center gap-2 text-xs font-bold text-[#871D34]">View portfolio <ArrowRight size={14} className={arrowCls} /></a> */}
        </Reveal>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {projects.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.08}>
              <Link href={p.href} className="group relative block aspect-[1.05/1] overflow-hidden bg-[#171615]">
                <Photo src={p.img} alt={p.t} className="absolute inset-0" imgClass="transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent transition-colors duration-500 group-hover:from-[#871D34]/85" />
                <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-2 text-white">
                  <div>
                    <h3 className="m-0 text-sm font-semibold">{p.t}</h3>
                    <p className="mb-0 mt-0.5 text-[11px] text-white/70">{p.c}</p>
                  </div>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/50 transition duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#871D34]"><ArrowUpRight size={14} /></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="portfolio" className="relative isolate overflow-hidden bg-[#171012] text-white">
        <div className="absolute inset-y-0 right-0 -z-10 hidden w-[48%] lg:block">
          <Photo src={IMG.brand} alt="Brand identity design detail" className="h-full w-full" imgClass="brightness-[.55]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#171012] via-[#171012]/45 to-transparent" />
        </div>
        <div className={`${wrap} py-14 md:py-20`}>
          <Reveal className="max-w-3xl">
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#D3A6AE]">Motive House Portfolio</p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">A closer look at the work behind the ideas.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 md:text-base">Explore the Motive House portfolio for a considered selection of creative work, visual identities and digital projects.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="/portfolio/motive-house-portfolio.pdf" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 bg-[#871D34] px-5 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#a02340]">
                View Portfolio <ArrowUpRight size={16} className={arrowCls} />
              </a>
              <a href="/portfolio/motive-house-portfolio.pdf" download="motive-house-portfolio.pdf" className="inline-flex items-center gap-3 border border-white/35 px-5 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white">
                Download Portfolio <ArrowUpRight size={16} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= WHAT OUR CLIENTS SAY ================= */}
      <section className="border-y border-[#E7E1DA] bg-[#FFFDFA]">
        <div className={`${wrap} grid items-center gap-10 py-16 lg:grid-cols-[0.5fr_1.5fr]`}>
          <Reveal>
            <p className={eyebrow}>Client testimonials</p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">What Our Clients Say.</h2>
            <div className="mt-6 flex items-center gap-1 text-[#871D34]" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((s) => (<span key={s} className="text-xl [animation:mhFloat_3s_ease-in-out_infinite]" style={{ animationDelay: `${s * 0.15}s` }}>★</span>))}
            </div>
          </Reveal>
          <Reveal delay={0.12}><Spotlight /></Reveal>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative isolate overflow-hidden bg-[#0e0b0b] text-white">
        <div className="absolute inset-y-0 right-0 -z-10 w-full lg:w-1/2">
          <Photo src={IMG.cta} alt="" className="h-full w-full" imgClass="brightness-[.7] [animation:mhZoom_24s_ease-in-out_infinite_alternate]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e0b0b] via-[#0e0b0b]/80 to-[#0e0b0b]/30" />
        </div>
        <div className={`${wrap} py-24 md:py-28`}>
          <Reveal>
            <p className="text-[10px] font-semibold uppercase tracking-[4px] text-white/60">Let&apos;s work together</p>
            <h2 className="mb-5 mt-5 max-w-[620px] text-4xl font-medium leading-[1.05] tracking-[-0.045em] md:text-6xl">Ready to Make Your Ideas Matter<span className="text-[#c9314f]">?</span></h2>
            <p className="mb-9 max-w-[400px] text-base leading-7 text-white/70">Let&apos;s create something meaningful for your business.</p>
            <a href="mailto:support@motivehouse.co" className={solid}>Let&apos;s Talk <ArrowRight size={16} className={arrowCls} /></a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}