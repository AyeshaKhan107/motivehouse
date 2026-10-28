"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight, ArrowUpRight, BarChart3, CalendarDays, Check, Eye, Facebook, Heart, Instagram,
  Linkedin, MessageCircle, Moon, MousePointerClick, Palette, Sun, Target, TrendingUp, Users,
} from "lucide-react";

/* ------------------------------------------------------------------
   IMAGES: replace any URL with your own file (e.g. "/images/hero.jpg").
   All photos are darkened automatically. If a link fails, a dark
   maroon fallback shows, so the layout never breaks.
------------------------------------------------------------------- */
const U = (id: string, w = 1000) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;
const IMG = {
  hero: U("photo-1498050108023-c5249f4df085", 1800),
  overview: U("photo-1611162617213-7d7a39e9b1d7", 1000),
  why: U("photo-1524758631624-e2822e304c36", 1200),
  cta: U("photo-1497215728101-856f4ea42174", 1400),
  p1: U("photo-1556761175-5973dc0f32e7", 1200),
  p2: U("photo-1523275335684-37898b6baf30", 1200),
  p3: U("photo-1498050108023-c5249f4df085", 1200),
  p4: U("photo-1521737711867-e3b97375f902", 1200),
  p5: U("photo-1611162617213-7d7a39e9b1d7", 1200),
};
const CONSULT_HREF = "mailto:support@motivehouse.co";

const services: { n: string; Icon: LucideIcon; t: string; d: string; tags: string[] }[] = [
  { n: "01", Icon: Palette, t: "Content Creation", d: "Eye-catching graphics, engaging posts, and branded visuals that make your business stand out.", tags: ["Creative Designs", "Brand Consistency"] },
  { n: "02", Icon: CalendarDays, t: "Social Media Management", d: "Consistent posting, content calendars, and professional account management to keep your brand active.", tags: ["Content Planning", "Scheduling"] },
  { n: "03", Icon: TrendingUp, t: "Social Media Growth", d: "Build your online presence with strategic content designed to attract the right audience.", tags: ["Organic Growth", "Engagement"] },
  { n: "04", Icon: Target, t: "Paid Social Campaigns", d: "Reach the right people with carefully planned campaigns focused on your business goals.", tags: ["Audience Targeting", "Campaign Strategy"] },
  { n: "05", Icon: BarChart3, t: "Analytics & Reporting", d: "Understand your performance through meaningful insights, engagement metrics, and regular reports.", tags: ["Performance Tracking", "Insights"] },
  { n: "06", Icon: Users, t: "Community Management", d: "Build stronger customer relationships through thoughtful communication and audience engagement.", tags: ["Audience Engagement", "Brand Trust"] },
];
const steps = [
  { n: "01", t: "Discover", d: "We learn about your business, audience, and objectives." },
  { n: "02", t: "Strategize", d: "We create a clear direction for your content and communication." },
  { n: "03", t: "Create & Manage", d: "We bring your strategy to life with consistent, engaging content." },
  { n: "04", t: "Review & Improve", d: "We review performance and identify opportunities to improve." },
];
const platforms: [string, string, LucideIcon][] = [
  ["Instagram", "Visual storytelling", Instagram],
  ["Facebook", "Community building", Facebook],
  ["LinkedIn", "Professional growth", Linkedin],
];
const why = [
  "Strategic & Data-Driven Approach",
  "Customized Content Strategy",
  "Consistent Brand Voice & Aesthetic",
  "Engaging Community Management",
  "Transparent Reporting & Insights",
];
/* Replace these with your real numbers before launch */
const results = [
  { n: 3.5, s: "x", l: "Average growth in engagement", w: 70 },
  { n: 120, s: "+", l: "Successful campaigns", w: 85 },
  { n: 85, s: "%", l: "Increase in brand awareness", w: 85 },
  { n: 98, s: "%", l: "Client satisfaction rate", w: 98 },
];
const overviewStats = [["120+", "Brands managed"], ["85+", "Happy clients"], ["5+", "Years experience"], ["98%", "Client satisfaction"]];
const words = ["Ideas", "People", "Strategy", "Creativity", "Technology", "Growth"];

/* ---------- Content pillars ---------- */
const pillars = [
  { t: "Behind the scenes", d: "Show the people and process behind your brand to build trust.", cap: "A quick look at how it all comes together.", img: IMG.p1 },
  { t: "Product & service spotlights", d: "Highlight what you offer with clean, on-brand visuals.", cap: "Meet the one everyone is asking about.", img: IMG.p2 },
  { t: "Tips & education", d: "Useful, shareable content that positions you as the expert.", cap: "Three quick tips you can use today.", img: IMG.p3 },
  { t: "Community & stories", d: "Celebrate your audience and spark real conversations.", cap: "Your stories make our community.", img: IMG.p4 },
  { t: "Offers & announcements", d: "Clear, well-timed updates that drive action.", cap: "Something new is coming this Friday.", img: IMG.p5 },
];
const PILLAR_MS = 5000;

const CSS = `
.sm [data-tone="dark"]{--bg:#120d0d;--bg2:#1b1413;--tx:#f4eee6;--mu:rgba(244,238,230,.68);--ln:rgba(244,238,230,.14);--sf:rgba(244,238,230,.05);--ac:#a8283f;--ink:#fff8f0;--br:#d9a85b;--gl:rgba(255,186,110,.24)}
.sm [data-tone="light"]{--bg:#f6f2ec;--bg2:#efe8de;--tx:#1d1214;--mu:rgba(29,18,20,.68);--ln:rgba(107,26,43,.16);--sf:rgba(107,26,43,.05);--ac:#6b1a2b;--ink:#f6f2ec;--br:#a9772a;--gl:rgba(107,26,43,.12)}
.sm [data-tone="light2"]{--bg:#efe8de;--bg2:#f6f2ec;--tx:#1d1214;--mu:rgba(29,18,20,.68);--ln:rgba(107,26,43,.16);--sf:rgba(107,26,43,.05);--ac:#6b1a2b;--ink:#f6f2ec;--br:#a9772a;--gl:rgba(107,26,43,.12)}
@keyframes smUp{from{transform:translateY(110%)}to{transform:none}}
@keyframes smRise{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}
@keyframes smFloat{50%{transform:translateY(-9px)}}
@keyframes smGlow{0%,100%{opacity:.45}50%{opacity:.95}}
@keyframes smZoom{from{transform:scale(1.02)}to{transform:scale(1.12)}}
@keyframes smFade{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
@keyframes smPop{from{opacity:0;transform:scale(.85) translateY(10px)}to{opacity:1;transform:none}}
@keyframes smTile{0%,100%{filter:brightness(1)}50%{filter:brightness(1.25)}}
@keyframes smMarq{to{transform:translateX(-50%)}}
@keyframes mswSteam{0%{transform:translateY(8px);opacity:0}40%{opacity:.55}100%{transform:translateY(-26px);opacity:0}}
@keyframes mswGrow{from{transform:scaleY(.3)}to{transform:scaleY(1)}}
@keyframes mswBlink{0%,100%{opacity:.25}50%{opacity:1}}
@keyframes mswSway{0%,100%{transform:rotate(-7deg)}50%{transform:rotate(7deg)}}
@keyframes mswBar{from{transform:scaleX(0)}to{transform:scaleX(1)}}
@keyframes mswSpin{to{transform:rotate(360deg)}}
.sm .sp{position:relative}
.sm .sp .spl{position:absolute;inset:0;pointer-events:none;opacity:0;transition:opacity .3s;background:radial-gradient(320px circle at var(--mx,50%) var(--my,50%),rgba(217,168,91,.2),transparent 65%)}
.sm .sp:hover .spl{opacity:1}
@media (prefers-reduced-motion:reduce){.sm *{animation:none!important;transition:none!important}.sm .rv{opacity:1!important;transform:none!important}.sm .ln{transform:none!important}}
.sm :focus-visible{outline:2px solid var(--br);outline-offset:3px}
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
  return <div ref={ref} className={`rv opacity-0 ${seen ? "[animation:smRise_.9s_cubic-bezier(.2,.7,.2,1)_forwards]" : ""} ${className}`} style={{ animationDelay: `${delay}s` }}>{children}</div>;
}
function Tilt({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-6px)`;
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return <div ref={ref} onMouseMove={move} onMouseLeave={() => { if (ref.current) ref.current.style.transform = ""; }} className={`sp transition-transform duration-300 ease-out ${className}`}><span className="spl" />{children}</div>;
}
function Photo({ src, alt, className = "", imgClass = "" }: { src: string; alt: string; className?: string; imgClass?: string }) {
  const [bad, setBad] = useState(false);
  return (
    <div className={`relative overflow-hidden bg-[#1b1413] ${className}`}>
      {!bad ? <img src={src} alt={alt} loading="lazy" onError={() => setBad(true)} className={`h-full w-full object-cover brightness-[.62] contrast-110 saturate-[.8] sepia-[.2] ${imgClass}`} /> : <div className="h-full w-full bg-[radial-gradient(circle_at_70%_20%,#6b1a2b,#1b1413_70%)]" />}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#120d0d]/60 via-transparent to-[#6b1a2b]/15" />
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

const eyebrow = "text-[10px] font-bold uppercase tracking-[3px] text-[color:var(--br)]";
const h2 = "m-0 text-[clamp(1.9rem,4.2vw,3rem)] font-semibold leading-[1.06] tracking-[-0.035em]";
const btn = "group inline-flex items-center gap-3 bg-[var(--ac)] px-6 py-3.5 text-sm font-semibold text-[color:var(--ink)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-12px_var(--ac)]";
const btnOutline = "group inline-flex items-center gap-3 border border-[color:var(--ac)] px-6 py-3.5 text-sm font-semibold text-[color:var(--ac)] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--ac)] hover:text-[color:var(--ink)]";
function Cta({ children, href = "/contact", outline = false }: { children: ReactNode; href?: string; outline?: boolean }) {
  const cls = outline ? btnOutline : btn;
  const inner = (<>{children}<ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" /></>);
  return href.startsWith("mailto:") ? <a href={href} className={cls}>{inner}</a> : <Link href={href} className={cls}>{inner}</Link>;
}

/* ---------- Hero visual: animated phone ---------- */
const tileBg = ["linear-gradient(135deg,#6b1a2b,#a8283f)", "linear-gradient(135deg,#d9c3a5,#a9772a)", "linear-gradient(135deg,#2a1c1a,#4a2a2a)", "linear-gradient(135deg,#a8283f,#e4a0ae)", "linear-gradient(135deg,#3a2622,#6b1a2b)", "linear-gradient(135deg,#efe8de,#d9c3a5)", "linear-gradient(135deg,#4a2a2a,#a9772a)", "linear-gradient(135deg,#6b1a2b,#2a1c1a)", "linear-gradient(135deg,#e4a0ae,#a8283f)"];
const notes: [LucideIcon, string][] = [[Heart, "+128 likes on your latest post"], [MessageCircle, "New comment to reply to"], [CalendarDays, "Post scheduled for 9:00"], [Eye, "Reach is trending up"]];
function Phone() {
  const [likes, setLikes] = useState(1284);
  const [ni, setNi] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const a = setInterval(() => setLikes((v) => v + 1 + (v % 3)), 1100);
    const b = setInterval(() => setNi((v) => (v + 1) % notes.length), 2600);
    return () => { clearInterval(a); clearInterval(b); };
  }, []);
  const [NI, nt] = notes[ni];
  return (
    <div className="relative mx-auto w-full max-w-[420px]" aria-hidden="true">
      <div className="absolute -inset-8 bg-[radial-gradient(circle_at_60%_20%,var(--gl),transparent_60%)] [animation:smGlow_6s_ease-in-out_infinite]" />
      <div className="relative mx-auto w-[250px] [animation:smFloat_7s_ease-in-out_infinite] sm:w-[270px]">
        <div className="rounded-[2.4rem] border border-[#f4eee6]/20 bg-[#0c0808] p-2.5 shadow-[0_50px_90px_-30px_rgba(0,0,0,.95)]">
          <div className="overflow-hidden rounded-[1.9rem] bg-[#171010]">
            <div className="mx-auto mt-2 h-4 w-20 rounded-full bg-black" />
            <div className="flex items-center gap-2.5 px-4 py-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#a8283f] to-[#d9a85b] text-[11px] font-bold text-white">B</span>
              <span className="flex-1 text-xs"><b className="block text-[#f4eee6]">yourbrand</b><span className="text-[10px] text-[#f4eee6]/50">Social media, managed</span></span>
              <Instagram size={15} className="text-[#f4eee6]/60" />
            </div>
            <div className="grid grid-cols-3 gap-0.5 px-0.5">
              {tileBg.map((b, i) => (<span key={i} className="aspect-square [animation:smTile_3.2s_ease-in-out_infinite]" style={{ background: b, animationDelay: `${i * 0.28}s` }} />))}
            </div>
            <div className="flex items-center justify-between px-4 py-3.5 text-[#f4eee6]">
              <span className="flex items-center gap-1.5 text-xs font-semibold"><Heart size={14} fill="#a8283f" className="text-[#a8283f]" />{likes.toLocaleString("en-US")}</span>
              <span className="flex items-center gap-3 text-[#f4eee6]/60"><MessageCircle size={14} /><MousePointerClick size={14} /></span>
            </div>
          </div>
        </div>
      </div>
      <div key={ni} className="absolute -left-2 top-24 flex max-w-[210px] items-center gap-3 border border-[color:var(--ln)] bg-[var(--bg2)] px-4 py-3 text-xs shadow-xl [animation:smPop_.5s_both] sm:-left-8">
        <span className="grid h-8 w-8 shrink-0 place-items-center bg-[var(--ac)] text-[color:var(--ink)]"><NI size={15} /></span>{nt}
      </div>
      <div className="absolute -right-1 bottom-16 flex items-center gap-3 border border-[color:var(--ln)] bg-[var(--bg2)] px-4 py-3 text-xs shadow-xl [animation:smFloat_6s_ease-in-out_1s_infinite] sm:-right-6">
        <TrendingUp size={16} className="text-[color:var(--br)]" />Strategy first
      </div>
    </div>
  );
}

/* ---------- page ---------- */
export default function SocialMediaPage() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);
  const [prog, setProg] = useState(0);
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);
  const [pi, setPi] = useState(0);
  const [pp, setPp] = useState(false);
  const [rRef, rSeen] = useInView<HTMLElement>(0.3);

  useEffect(() => {
    try { const s = localStorage.getItem("mh-theme"); if (s === "light" || s === "dark") setTheme(s); } catch {}
    setMounted(true);
    const sc = () => setProg(window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight));
    window.addEventListener("scroll", sc, { passive: true });
    return () => window.removeEventListener("scroll", sc);
  }, []);
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => setStep((s) => (s + 1) % steps.length), 3200);
    return () => clearTimeout(id);
  }, [step, paused]);

  useEffect(() => {
    if (pp || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => setPi((v) => (v + 1) % pillars.length), PILLAR_MS);
    return () => clearTimeout(id);
  }, [pi, pp]);

  const toggle = () => {
    const n = theme === "dark" ? "light" : "dark";
    setTheme(n);
    try { localStorage.setItem("mh-theme", n); } catch {}
  };
  const T = (b: "dark" | "light" | "light2") => (theme === "dark" ? b : b === "dark" ? "light" : "dark");
  const band = "bg-[var(--bg)] text-[color:var(--tx)] transition-colors duration-500";
  const wrap = "mx-auto max-w-[1200px]";
  const line = `ln block translate-y-[110%] ${mounted ? "[animation:smUp_1s_cubic-bezier(.2,.8,.2,1)_forwards]" : ""}`;
  const ticker = services.map((s) => s.t);

  return (
    <main className="sm relative overflow-x-clip">
      <style>{CSS}</style>
      <div aria-hidden="true" className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-gradient-to-r from-[#6b1a2b] to-[#e4a0ae]" style={{ transform: `scaleX(${prog})` }} />

      {/* ============ HERO (dark) ============ */}
      {/* <section data-tone={T("dark")} className={`${band} relative isolate overflow-hidden px-5 pb-24 pt-24 sm:px-8 sm:pt-28`}>
        <div className="absolute inset-0 -z-10">
          <Photo src={IMG.hero} alt="Creative workspace" className="h-full w-full" imgClass="[animation:smZoom_24s_ease-in-out_infinite_alternate]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#120d0d] via-[#120d0d]/80 to-[#120d0d]/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(255,186,110,.24),transparent_55%)] [animation:smGlow_6s_ease-in-out_infinite]" />
        </div>
        <button type="button" onClick={toggle} aria-label="Swap light and dark sections" className="absolute right-5 top-5 z-10 grid h-9 w-9 place-items-center rounded-full border border-[color:var(--ln)] bg-[var(--sf)] transition duration-500 hover:rotate-180 hover:bg-[var(--ac)] sm:right-8">{theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}</button>
        <div className={`${wrap} grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]`}>
          <div>
            <p className={`mb-6 text-[10px] font-semibold uppercase tracking-[4px] text-[color:var(--mu)] opacity-0 ${mounted ? "[animation:smRise_.8s_.1s_forwards]" : ""}`}>Social media management</p>
            <h1 className="m-0 text-[clamp(2.8rem,6.8vw,5.6rem)] font-medium leading-[1] tracking-[-0.05em]">
              <span className="block overflow-hidden pb-[0.08em]"><span className={line} style={{ animationDelay: ".15s" }}>Social Media</span></span>
              <span className="block overflow-hidden pb-[0.08em]"><span className={line} style={{ animationDelay: ".3s" }}>That Drives</span></span>
              <span className="block overflow-hidden pb-[0.08em]"><span className={line} style={{ animationDelay: ".45s" }}>Real Growth<span className="text-[color:var(--ac)]">.</span></span></span>
            </h1>
            <p className={`mt-7 max-w-[440px] text-base leading-7 text-[color:var(--mu)] opacity-0 sm:text-lg ${mounted ? "[animation:smRise_.9s_.7s_forwards]" : ""}`}>Strategic content, engaging communities and data-driven campaigns to grow your brand online.</p>
          </div>

          <Phone />
        </div>
        <ul className="absolute bottom-10 right-8 z-10 m-0 hidden list-none flex-col gap-1.5 p-0 text-[9px] font-semibold uppercase tracking-[0.35em] text-[color:var(--mu)] xl:flex">
          <li className="mb-2 h-px w-8 bg-[var(--mu)]" />{words.map((w) => (<li key={w}>{w}</li>))}
        </ul>
      </section> */}


<section
  data-tone={T("dark")}
  className={`${band} relative isolate overflow-hidden px-5 pb-24 pt-24 sm:px-8 sm:pt-28`}
>
  <div className="absolute inset-0 -z-10">
    <Photo
      src={IMG.hero}
      alt="Creative workspace"
      className="h-full w-full"
      imgClass="[animation:smZoom_24s_ease-in-out_infinite_alternate]"
    />

    <div className="absolute inset-0 bg-gradient-to-r from-[#120d0d] via-[#120d0d]/80 to-[#120d0d]/40" />

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(255,186,110,.24),transparent_55%)] [animation:smGlow_6s_ease-in-out_infinite]" />
  </div>

  <button
    type="button"
    onClick={toggle}
    aria-label="Swap light and dark sections"
    className="absolute right-5 top-5 z-10 grid h-9 w-9 place-items-center rounded-full border border-[color:var(--ln)] bg-[var(--sf)] transition duration-500 hover:rotate-180 hover:bg-[var(--ac)] sm:right-8"
  >
    {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
  </button>

  <div className={`${wrap} grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]`}>
    <div>
      <p
        className={`mb-6 text-[10px] font-semibold uppercase tracking-[4px] text-[color:var(--mu)] opacity-0 ${
          mounted ? "[animation:smRise_.8s_.1s_forwards]" : ""
        }`}
      >
        Social media management
      </p>

      <h1 className="m-0 text-[clamp(2.8rem,6.8vw,5.6rem)] font-medium leading-[1] tracking-[-0.05em]">
        <span className="block overflow-hidden pb-[0.08em]">
          <span className={line} style={{ animationDelay: ".15s" }}>
            Social Media
          </span>
        </span>

        <span className="block overflow-hidden pb-[0.08em]">
          <span className={line} style={{ animationDelay: ".3s" }}>
            That Drives
          </span>
        </span>

        <span className="block overflow-hidden pb-[0.08em]">
          <span className={line} style={{ animationDelay: ".45s" }}>
            Real Growth
            <span className="text-[color:var(--ac)]">.</span>
          </span>
        </span>
      </h1>

      <p
        className={`mt-7 max-w-[440px] text-base leading-7 text-[color:var(--mu)] opacity-0 sm:text-lg ${
          mounted ? "[animation:smRise_.9s_.7s_forwards]" : ""
        }`}
      >
        Strategic content, engaging communities and data-driven campaigns to
        grow your brand online.
      </p>

      <Link
        href="/portfolio/motive-house-portfolio.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#8b2332] bg-[#8b2332] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#6b1a2b] hover:shadow-lg"
      >
        View Portfolio
        <ArrowUpRight size={16} />
      </Link>
    </div>

    <Phone />
  </div>

  <ul className="absolute bottom-10 right-8 z-10 m-0 hidden list-none flex-col gap-1.5 p-0 text-[9px] font-semibold uppercase tracking-[0.35em] text-[color:var(--mu)] xl:flex">
    <li className="mb-2 h-px w-8 bg-[var(--mu)]" />
    {words.map((w) => (
      <li key={w}>{w}</li>
    ))}
  </ul>
</section>


      {/* ticker */}
      <section data-tone={T("light2")} className={`${band} overflow-hidden border-b border-[color:var(--ln)] py-5`} aria-hidden="true">
        <div className="flex w-max gap-14 text-xs font-bold uppercase tracking-[0.3em] text-[color:var(--mu)] [animation:smMarq_32s_linear_infinite]">
          {[...ticker, ...ticker, ...ticker, ...ticker].map((w, i) => (<span key={i} className="flex items-center gap-14">{w}<span className="h-1.5 w-1.5 rounded-full bg-[var(--ac)]" /></span>))}
        </div>
      </section>

      {/* ============ OVERVIEW (light) ============ */}
      <section data-tone={T("light")} className={`${band} px-5 py-20 sm:px-8 sm:py-24`}>
        <div className={`${wrap} grid items-center gap-12 lg:grid-cols-[0.9fr_1fr_0.45fr]`}>
          <Reveal>
            <p className={eyebrow}>Overview</p>
            <h2 className={`${h2} mt-4`}>More Than Posting. A Complete Strategy.</h2>
            <p className="mb-7 mt-5 max-w-[380px] text-sm leading-7 text-[color:var(--mu)]">We create and manage social media strategies that build brand awareness, increase engagement and drive measurable results.</p>
            <Cta href="/booking" outline>Get a Free Consultation</Cta>
          </Reveal>
          <Reveal delay={0.12}>
            <Photo src={IMG.overview} alt="Social media on a phone" className="aspect-[1.05/1] shadow-2xl shadow-black/25" imgClass="brightness-[.8] [animation:smZoom_26s_ease-in-out_infinite_alternate]" />
          </Reveal>
          <ul className="m-0 grid list-none gap-5 p-0">
            {overviewStats.map(([n, l], i) => (<Reveal key={l} delay={0.1 + i * 0.08}><li><b className="block text-3xl font-medium tracking-[-0.04em]">{n}</b><span className="text-xs text-[color:var(--mu)]">{l}</span></li></Reveal>))}
          </ul>
        </div>
      </section>

      {/* ============ PLATFORMS (dark) ============ */}
      <section data-tone={T("dark")} className={`${band} relative isolate overflow-hidden px-5 py-24 sm:px-8`}>
        <div aria-hidden="true" className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-[#a8283f] opacity-25 blur-[90px] [animation:smGlow_7s_ease-in-out_infinite]" />
        <div className={wrap}>
          <Reveal className="mb-10 text-center">
            <p className={eyebrow}>Your brand, where it matters</p>
            <h2 className={h2}>Meet your audience where they are.</h2>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {platforms.map(([name, desc, I], i) => (
              <Reveal key={name} delay={i * 0.1}>
                <Tilt className="group flex items-center gap-4 border border-[color:var(--ln)] bg-[var(--sf)] p-6 hover:border-[color:var(--ac)]">
                  <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[var(--ac)] text-[color:var(--ink)] transition duration-500 group-hover:rotate-[10deg] group-hover:scale-105"><I size={24} /></span>
                  <span className="relative flex-1"><b className="block">{name}</b><span className="text-xs text-[color:var(--mu)]">{desc}</span></span>
                  <ArrowUpRight size={18} className="relative text-[color:var(--mu)] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[color:var(--br)]" />
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICES (light, beige) ============ */}
      <section id="services" data-tone={T("light2")} className={`${band} px-5 py-24 sm:px-8`}>
        <div className={wrap}>
          <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className={eyebrow}>Our social media services</p>
              <h2 className={`${h2} mt-4 max-w-[640px]`}>Everything You Need to Grow Your Brand Online.</h2>
            </div>
            <p className="m-0 max-w-[380px] text-sm leading-7 text-[color:var(--mu)]">A thoughtful mix of creative content, consistent management, and strategic planning to help your business build a stronger digital presence.</p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ n, Icon, t, d, tags }, i) => (
              <Reveal key={n} delay={(i % 3) * 0.1}>
                <Tilt className="group h-full overflow-hidden border border-[color:var(--ln)] bg-[var(--bg2)] p-7 hover:border-[color:var(--ac)] hover:shadow-2xl hover:shadow-[#6b1a2b]/15">
                  <span aria-hidden="true" className="pointer-events-none absolute -right-2 -top-6 text-[110px] font-bold leading-none tracking-tighter text-[color:var(--ac)] opacity-[0.07]">{n}</span>
                  <span aria-hidden="true" className="absolute bottom-0 left-0 h-[3px] w-0 bg-[var(--ac)] transition-all duration-500 group-hover:w-full" />
                  <div className="relative">
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-[var(--ac)] text-[color:var(--ink)] transition duration-500 group-hover:scale-110 group-hover:rotate-[8deg]"><Icon size={24} /></span>
                    <h3 className="mb-3 mt-7 text-xl font-semibold tracking-tight">{t}</h3>
                    <p className="m-0 min-h-[96px] text-sm leading-7 text-[color:var(--mu)]">{d}</p>
                    <div className="mt-5 flex flex-wrap gap-2">{tags.map((g) => (<span key={g} className="border border-[color:var(--ln)] px-3 py-1.5 text-[10px] font-semibold text-[color:var(--ac)]">{g}</span>))}</div>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTENT PILLARS (dark) ============ */}
      <section id="work" data-tone={T("dark")} className={`${band} relative isolate overflow-hidden px-5 py-24 sm:px-8 lg:py-28`} onMouseEnter={() => setPp(true)} onMouseLeave={() => setPp(false)}>
        <div aria-hidden="true" className="absolute -left-24 top-10 -z-10 h-80 w-80 rounded-full bg-[#a8283f] opacity-20 blur-[100px] [animation:smGlow_7s_ease-in-out_infinite]" />
        <div className={wrap}>
          <Reveal className="mb-12 max-w-[640px]">
            <p className={eyebrow}>Content pillars</p>
            <h2 className={`${h2} mt-4`}>Social Media That Stands Out.</h2>
            <p className="mb-0 mt-4 text-sm leading-7 text-[color:var(--mu)]">Every post has a purpose. We plan content around a few clear pillars so your feed stays varied, on-brand and engaging.</p>
          </Reveal>
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <ol className="m-0 grid list-none gap-2 p-0">
              {pillars.map((x, i) => {
                const a = i === pi;
                return (
                  <li key={x.t}>
                    <button type="button" onClick={() => setPi(i)} aria-current={a} className={`group relative w-full overflow-hidden border p-5 text-left transition duration-500 ${a ? "border-[color:var(--ac)] bg-[var(--sf)]" : "border-transparent hover:border-[color:var(--ln)]"}`}>
                      <span className="flex items-start gap-4">
                        <span className={`font-mono text-xs transition-colors ${a ? "text-[color:var(--br)]" : "text-[color:var(--mu)]"}`}>0{i + 1}</span>
                        <span className="flex-1">
                          <b className={`block text-lg tracking-tight transition-colors ${a ? "" : "text-[color:var(--mu)] group-hover:text-[color:var(--tx)]"}`}>{x.t}</b>
                          <span className={`grid transition-[grid-template-rows] duration-500 ${a ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}><span className="overflow-hidden"><span className="block pt-2 text-sm leading-6 text-[color:var(--mu)]">{x.d}</span></span></span>
                        </span>
                        <ArrowUpRight size={18} className={`mt-1 shrink-0 transition duration-500 ${a ? "rotate-45 text-[color:var(--br)]" : "text-[color:var(--mu)]"}`} />
                      </span>
                      {a && <span key={pi} aria-hidden="true" className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-[var(--ac)]" style={{ animation: `mswBar ${PILLAR_MS}ms linear forwards`, animationPlayState: pp ? "paused" : "running" }} />}
                    </button>
                  </li>
                );
              })}
            </ol>
            <div className="relative">
              <span aria-hidden="true" className="absolute -right-3 -top-3 h-28 w-28 border border-[color:var(--br)] opacity-50" />
              <div className="relative aspect-[4/3.4] overflow-hidden border border-[color:var(--ln)] shadow-[0_40px_80px_-30px_rgba(0,0,0,.9)]">
                {pillars.map((x, i) => (
                  <div key={x.t} className={`absolute inset-0 transition-all duration-[900ms] ease-out ${i === pi ? "scale-100 opacity-100" : "scale-[1.06] opacity-0"}`} aria-hidden={i !== pi}>
                    <Photo src={x.img} alt={x.t} className="h-full w-full" />
                  </div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-[#120d0d]/90 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 bg-[#120d0d]/85 px-4 py-2 text-[10px] font-bold uppercase tracking-[3px] text-[#d9a85b] backdrop-blur">{pillars[pi].t}</span>
                <div key={pi} className="absolute inset-x-4 bottom-4 border border-white/15 bg-[#120d0d]/75 p-4 backdrop-blur [animation:smPop_.6s_both]">
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-[#a8283f] to-[#d9a85b] text-[10px] font-bold text-white">B</span>
                    <b className="text-xs text-[#f4eee6]">yourbrand</b>
                    <span className="ml-auto flex items-center gap-3 text-[#f4eee6]/70"><Heart size={14} /><MessageCircle size={14} /></span>
                  </div>
                  <p className="mb-0 mt-3 text-sm text-[#f4eee6]">{pillars[pi].cap}</p>
                  <p className="mb-0 mt-1 text-[10px] uppercase tracking-[2px] text-[#f4eee6]/50">Sample post idea</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROCESS (light) ============ */}
      <section data-tone={T("light")} className={`${band} px-5 py-24 sm:px-8`} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <div className={`${wrap} grid gap-12 lg:grid-cols-[0.6fr_1.4fr] lg:items-center`}>
          <Reveal>
            <p className={eyebrow}>Our process</p>
            <h2 className={`${h2} mt-4`}>A Simple Process. Real Results.</h2>
            <p className="mb-0 mt-5 max-w-[360px] text-sm leading-7 text-[color:var(--mu)]">We follow a clear and collaborative process to ensure your social media presence is strategic, consistent and growth-focused.</p>
          </Reveal>
          <div className="relative">
            <span aria-hidden="true" className="absolute left-0 right-0 top-[27px] hidden h-px bg-[var(--ln)] sm:block" />
            <span aria-hidden="true" className="absolute left-0 top-[27px] hidden h-px bg-[var(--ac)] transition-[width] duration-700 sm:block" style={{ width: `${((step + 0.5) / steps.length) * 100}%` }} />
            <ol className="relative m-0 grid list-none gap-6 p-0 sm:grid-cols-4">
              {steps.map((s, i) => {
                const a = i === step;
                return (
                  <li key={s.n}>
                    <button onClick={() => setStep(i)} aria-current={a} className="group w-full text-left">
                      <span className={`grid h-14 w-14 place-items-center rounded-full text-sm font-bold transition duration-500 ${a ? "scale-110 bg-[var(--ac)] text-[color:var(--ink)] shadow-[0_0_0_8px_rgba(107,26,43,.12)]" : i < step ? "bg-[var(--ac)]/70 text-[color:var(--ink)]" : "border border-[color:var(--ln)] bg-[var(--bg)] text-[color:var(--mu)]"}`}>{s.n}</span>
                      <h3 className={`mb-2 mt-5 text-lg font-semibold transition-colors ${a ? "text-[color:var(--ac)]" : ""}`}>{s.t}</h3>
                      <p className="m-0 text-xs leading-6 text-[color:var(--mu)]">{s.d}</p>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* ============ RESULTS (dark) ============ */}
      <section ref={rRef} data-tone={T("dark")} className={`${band} relative isolate overflow-hidden px-5 py-24 sm:px-8`}>
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,#a8283f,transparent)]" />
        <div aria-hidden="true" className="absolute -left-20 top-0 -z-10 h-full w-[40%] bg-[radial-gradient(circle,rgba(168,40,63,.3),transparent_65%)] [animation:smGlow_7s_ease-in-out_infinite]" />
        <div aria-hidden="true" className="absolute -right-20 top-0 -z-10 h-full w-[40%] bg-[radial-gradient(circle,rgba(255,186,110,.12),transparent_65%)] [animation:smGlow_9s_ease-in-out_infinite]" />
        <div className={wrap}>
          <Reveal className="mb-12 max-w-[560px]">
            <p className={eyebrow}>Our results</p>
            <h2 className={`${h2} mt-4`}>Real Growth. Real Impact.</h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {results.map((r, i) => (
              <div key={r.l} className="group">
                <div className="flex items-center gap-2 text-4xl font-medium tracking-[-0.05em] transition-transform duration-500 group-hover:-translate-y-1 md:text-6xl"><TrendingUp size={16} className="text-[color:var(--br)]" /><Count n={r.n} s={r.s} play={rSeen} /></div>
                <p className="mb-5 mt-2 text-xs text-[color:var(--mu)]">{r.l}</p>
                <span className="block h-px w-full bg-[var(--ln)]"><span className="block h-full origin-left bg-gradient-to-r from-[#a8283f] to-[#e4a0ae]" style={{ width: `${r.w}%`, transform: rSeen ? "scaleX(1)" : "scaleX(0)", transition: `transform 1.6s ${0.2 + i * 0.15}s cubic-bezier(.2,.8,.2,1)` }} /></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE (dark) ============ */}
      <section data-tone={T("light")} className={`${band} px-5 py-24 sm:px-8`}>
        <div className={`${wrap} grid items-center gap-12 lg:grid-cols-2`}>
          <Reveal>
            <div className="relative">
              <span aria-hidden="true" className="absolute -left-3 -top-3 h-24 w-24 border border-[color:var(--br)] opacity-60" />
              <Photo src={IMG.why} alt="Workspace with laptop" className="relative aspect-[1.2/1]" imgClass="[animation:smZoom_26s_ease-in-out_infinite_alternate]" />
              <span className="absolute -bottom-4 right-4 flex items-center gap-2 border border-[color:var(--ln)] bg-[var(--bg2)] px-4 py-3 text-xs [animation:smFloat_6s_ease-in-out_infinite]"><BarChart3 size={15} className="text-[color:var(--br)]" />Transparent reporting</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className={eyebrow}>Why choose Motive House</p>
            <h2 className={`${h2} mt-4`}>Your Social Media Partner for Long-Term Success.</h2>
            <p className="mb-7 mt-5 max-w-[500px] text-sm leading-7 text-[color:var(--mu)]">We combine creativity, strategy and data to help your brand grow online. From stunning content to paid campaigns, we focus on real results that make a difference.</p>
            <ul className="m-0 mb-9 grid list-none gap-3.5 p-0">
              {why.map((w, i) => (
                <li key={w} className="flex items-center gap-3 text-sm opacity-0 [animation:smRise_.7s_forwards]" style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[var(--ac)] text-[color:var(--ink)]"><Check size={13} strokeWidth={3} /></span>{w}
                </li>
              ))}
            </ul>
            <Cta href="mailto:support@motivehouse.co">Let&apos;s Talk</Cta>
          </Reveal>
        </div>
      </section>

      {/* ============ CTA (maroon) ============ */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#6b1a2b] via-[#521321] to-[#2a0c14] px-5 py-20 text-white sm:px-8 lg:py-24">
        <div className="absolute inset-y-0 right-0 -z-10 hidden w-1/2 lg:block">
          <Photo src={IMG.cta} alt="" className="h-full w-full" imgClass="opacity-50 [animation:smZoom_24s_ease-in-out_infinite_alternate]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#521321] via-[#521321]/70 to-transparent" />
        </div>
        <span aria-hidden="true" className="pointer-events-none absolute -right-20 -top-36 h-96 w-96 rounded-full border border-white/10" />
        <Reveal className={`relative ${wrap}`}>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium tracking-wide"><MessageCircle size={15} />Let&apos;s work together</p>
          <h2 className="m-0 max-w-[620px] text-[clamp(2.2rem,5.4vw,4.2rem)] font-semibold leading-[1.04] tracking-[-0.04em]">Ready to Grow<br />Your Brand Online?</h2>
          <p className="mb-9 mt-5 max-w-[460px] text-sm leading-7 text-white/75 sm:text-base">Let&apos;s create a social media strategy that gets real results, and a presence that feels authentic to your business.</p>
          <Link href="mailto:support@motivehouse.co" className="group inline-flex items-center gap-3 bg-[#f6f2ec] px-7 py-4 text-sm font-semibold text-[#6b1a2b] transition duration-300 hover:-translate-y-1 hover:shadow-xl">Let&apos;s Talk<ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></Link>
        </Reveal>
      </section>
    </main>
  );
}