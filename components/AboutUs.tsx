"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import {
  ArrowUpRight,
  Calculator,
  Check,
  Code2,
  FileText,
  Flag,
  MessageCircle,
  Moon,
  Palette,
  Share2,
  ShieldCheck,
  Sun,
  Users,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  COLOURS: same maroon + off-white as the footer.                    */
/*  Replace with your exact site hex codes.                            */
/* ------------------------------------------------------------------ */
const MAROON = "#6b1a2b";
const OFFWHITE = "#f5efe6";
const INK = "#1a0b0f";

const ABOUT_CSS = `
.mh-about[data-theme="dark"]{
  --mh-bg:${INK}; --mh-text:${OFFWHITE}; --mh-muted:rgba(245,239,230,.66);
  --mh-line:rgba(245,239,230,.14); --mh-surface:rgba(245,239,230,.05);
  --mh-accent:${OFFWHITE}; --mh-accent-ink:${MAROON};
  --mh-glow:rgba(170,52,84,.34);
}
.mh-about[data-theme="light"]{
  --mh-bg:${OFFWHITE}; --mh-text:${MAROON}; --mh-muted:rgba(107,26,43,.7);
  --mh-line:rgba(107,26,43,.18); --mh-surface:rgba(107,26,43,.05);
  --mh-accent:${MAROON}; --mh-accent-ink:${OFFWHITE};
  --mh-glow:rgba(107,26,43,.16);
}
@keyframes mh-line-up{from{transform:translateY(110%)}to{transform:translateY(0)}}
@keyframes mh-rise{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
@keyframes mh-fill{from{width:0}to{width:100%}}
@keyframes mh-wipe{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0 0 0 0)}}
@keyframes mh-spin{to{transform:rotate(360deg)}}
@keyframes mh-ping{0%{transform:scale(1);opacity:.8}100%{transform:scale(3.2);opacity:0}}
@keyframes mh-draw{to{stroke-dashoffset:0}}
@keyframes mh-loop{0%{stroke-dashoffset:1}50%{stroke-dashoffset:0}100%{stroke-dashoffset:-1}}
@keyframes mh-grow{from{transform:scaleY(.15)}to{transform:scaleY(1)}}
@keyframes mh-type{from{transform:scaleX(0)}to{transform:scaleX(1)}}
@keyframes mh-blink{50%{opacity:0}}
@keyframes mh-float{50%{transform:translateY(-7px)}}
@keyframes mh-cue{0%{transform:translateY(-100%)}100%{transform:translateY(100%)}}
`;

/* ------------------------------------------------------------------ */
/*  Content                                                            */
/* ------------------------------------------------------------------ */
const EMAIL = "support@motivehouse.co";

type Service = {
  id: "design" | "social" | "web" | "books" | "tax";
  title: string;
  short: string;
  Icon: typeof Palette;
  promise: string;
  includes: string[];
  tools: string[];
  usa: string[];
  href: string;
};

/* NOTE: Edit these specs so they match exactly what you offer.
   Only list credentials / tools your team actually has. */
const services: Service[] = [
  {
    id: "design",
    title: "Graphic Design",
    short: "Brand, print & ads",
    Icon: Palette,
    promise: "Brands that look established before anyone reads a word.",
    includes: [
      "Logo and full brand identity system",
      "Brand guidelines: colour, type, usage rules",
      "Brochures, menus, flyers and pitch decks",
      "Packaging and label design",
      "Social and ad creatives in every size",
      "Print-ready and web-ready file handover",
    ],
    tools: ["Illustrator", "Photoshop", "InDesign", "Figma", "AI · SVG · PDF · PNG"],
    usa: [
      "US print sizes: Letter, Tabloid, 3.5 × 2 in business cards",
      "CMYK files with bleed for US print shops",
      "Original artwork with editable source files included",
    ],
    href: "/services/graphic-design",
  },
  {
    id: "social",
    title: "Social Media Management",
    short: "Content & community",
    Icon: Share2,
    promise: "Consistent, on-brand content that turns followers into customers.",
    includes: [
      "Strategy and monthly content calendar",
      "Posts, Reels, Stories and carousels",
      "Community management and replies",
      "Paid social campaign setup and tuning",
      "Hashtag, trend and competitor research",
      "Monthly analytics report in plain English",
    ],
    tools: ["Instagram", "Facebook", "LinkedIn", "TikTok", "YouTube", "Meta Ads"],
    usa: [
      "Posting times planned for Eastern to Pacific audiences",
      "Seasonal US campaigns: holidays, back-to-school, Black Friday",
      "FTC-style disclosures on sponsored and partner content",
    ],
    href: "/services/social-media",
  },
  {
    id: "web",
    title: "Web Design & Development",
    short: "Fast, findable sites",
    Icon: Code2,
    promise: "Websites that load fast, rank well and are easy to use for everyone.",
    includes: [
      "Custom responsive design, mobile first",
      "E-commerce stores and secure checkout",
      "Next.js and React performance builds",
      "On-page and local SEO, Google Business Profile",
      "Editable content so you can update it yourself",
      "Hosting, SSL, backups and maintenance plans",
    ],
    tools: ["Next.js", "React", "Tailwind CSS", "Node.js", "REST API", "WordPress", "Wix", "Shopify"],
    usa: [
      "Built to WCAG 2.1 AA, the benchmark often cited in US ADA web cases",
      "Privacy policy and cookie banner set up for CCPA / CPRA",
      "Card, Apple Pay and Google Pay checkout for US shoppers",
    ],
    href: "/#services",
  },
  {
    id: "books",
    title: "Bookkeeping & Accounting",
    short: "Clean books, every month",
    Icon: Calculator,
    promise: "Books you can trust, so decisions stop being guesses.",
    includes: [
      "Monthly bookkeeping and bank / card reconciliation",
      "Accounts payable and receivable tracking",
      "P&L, balance sheet and cash-flow reports",
      "Chart of accounts setup and backlog clean-up",
      "Payroll coordination and 1099 contractor tracking",
      "Sales tax tracking by state",
    ],
    tools: ["QuickBooks Online", "Xero", "Sage", "Zoho Books"],
    usa: [
      "US GAAP-aligned categories and reports",
      "Year-end 1099-NEC contractor records kept ready",
      "State-by-state sales tax records for online sellers",
    ],
    href: "/services/bookkeeping-accounting",
  },
  {
    id: "tax",
    title: "Tax Preparation & Filing",
    short: "Federal & state returns",
    Icon: FileText,
    promise: "Accurate returns, filed on time, with fewer surprises.",
    includes: [
      "Individual returns: Form 1040 and schedules",
      "Freelancers and self-employed: Schedule C",
      "Business returns: 1120, 1120-S and 1065",
      "Quarterly estimated tax planning (1040-ES)",
      "W-2 and 1099 preparation",
      "Support when you receive an IRS or state notice",
    ],
    tools: ["IRS e-file", "State e-file", "Secure document portal"],
    usa: [
      "Federal and state returns prepared together",
      "Deduction review: home office, vehicle, equipment, software",
      "EIN application guidance for new US businesses",
    ],
    href: "/services/tax-preparation",
  },
];

const steps = [
  { t: "Discover", d: "A short call and brief to learn your business, customers and goals." },
  { t: "Plan", d: "A clear scope, timeline and quote. You know what you get before we start." },
  { t: "Create", d: "We build, with regular check-ins so nothing surprises you." },
  { t: "Grow", d: "Launch, measure and improve, with support after delivery." },
];

const promises = [
  {
    Icon: Users,
    t: "One team, many skills",
    d: "Design, marketing, web and finance handled by people who actually talk to each other.",
  },
  {
    Icon: Flag,
    t: "Built for the US",
    d: "US print sizes, ADA-minded websites, IRS-aware bookkeeping and US time zones.",
  },
  {
    Icon: MessageCircle,
    t: "Straight talk",
    d: "Plain-language scopes, clear deliverables and honest advice, even when it is a no.",
  },
  {
    Icon: ShieldCheck,
    t: "Your work stays yours",
    d: "Source files, logins and records are handed over. You are never locked in.",
  },
];

const STATEMENT =
  "A business should look sharp, be easy to find and keep its books clean. We bring all of that under one roof, for companies across the United States.";

/* ------------------------------------------------------------------ */
/*  Hooks                                                              */
/* ------------------------------------------------------------------ */
function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, seen] as const;
}

/** 0 → 1 as the element scrolls through the viewport */
function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [p, setP] = useState(0);
  useEffect(() => {
    let raf = 0;
    const calc = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.85;
      const end = vh * 0.35;
      const v = (start - r.top) / (r.height + start - end);
      setP(Math.max(0, Math.min(1, v)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(calc);
    };
    calc();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return [ref, p] as const;
}

/* ------------------------------------------------------------------ */
/*  Small pieces                                                       */
/* ------------------------------------------------------------------ */
function Rise({
  children,
  show,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  show: boolean;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={`opacity-0 motion-reduce:opacity-100 ${
        show ? "animate-[mh-rise_0.8s_cubic-bezier(0.2,0.7,0.2,1)_forwards] motion-reduce:animate-none" : ""
      } ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

/** Small animated drawing for each service */
function ServiceArt({ id }: { id: Service["id"] }) {
  const s = "stroke-[color:var(--mh-accent)]";
  const f = "fill-[var(--mh-accent)]";
  const box = "[transform-box:fill-box]";
  return (
    <svg
      viewBox="0 0 120 120"
      aria-hidden="true"
      className="h-24 w-24 shrink-0 overflow-visible sm:h-28 sm:w-28"
    >
      {id === "design" && (
        <>
          <circle
            cx="44"
            cy="52"
            r="26"
            fill="none"
            strokeWidth="2"
            className={`${s} animate-[mh-float_5s_ease-in-out_infinite] motion-reduce:animate-none`}
          />
          <rect
            x="56"
            y="38"
            width="44"
            height="44"
            rx="8"
            fill="none"
            strokeWidth="2"
            className={`${s} origin-center ${box} animate-[mh-spin_14s_linear_infinite] motion-reduce:animate-none`}
          />
          <path
            d="M18 98 Q58 70 102 100"
            fill="none"
            strokeWidth="2.5"
            strokeLinecap="round"
            pathLength={1}
            strokeDasharray={1}
            className={`${s} animate-[mh-loop_4s_ease-in-out_infinite] motion-reduce:animate-none`}
          />
          <circle cx="60" cy="60" r="5" className={f} />
        </>
      )}

      {id === "social" && (
        <>
          {[0, 1].map((i) => (
            <circle
              key={i}
              cx="60"
              cy="60"
              r="14"
              fill="none"
              strokeWidth="1.5"
              className={`${s} origin-center ${box} animate-[mh-ping_3s_ease-out_infinite] motion-reduce:animate-none`}
              style={{ animationDelay: `${i * 1.4}s` }}
            />
          ))}
          <circle cx="60" cy="60" r="14" className={f} />
          <g
            className="animate-[mh-spin_9s_linear_infinite] motion-reduce:animate-none"
            style={{ transformOrigin: "60px 60px" }}
          >
            <circle cx="60" cy="14" r="5" className={f} />
            <circle cx="100" cy="82" r="4" className={f} opacity="0.7" />
            <circle cx="20" cy="82" r="4" className={f} opacity="0.7" />
          </g>
        </>
      )}

      {id === "web" && (
        <>
          <rect x="8" y="20" width="104" height="80" rx="9" fill="none" strokeWidth="2" className={s} />
          <path d="M8 38h104" strokeWidth="2" className={s} />
          {[18, 28, 38].map((x) => (
            <circle key={x} cx={x} cy="29" r="2" className={f} />
          ))}
          {[
            { y: 50, w: 70 },
            { y: 62, w: 52 },
            { y: 74, w: 62 },
          ].map(({ y, w }, i) => (
            <rect
              key={y}
              x="20"
              y={y}
              width={w}
              height="6"
              rx="3"
              className={`${f} origin-left ${box} animate-[mh-type_2.6s_ease-in-out_infinite_alternate] motion-reduce:animate-none`}
              style={{ animationDelay: `${i * 0.35}s` }}
              opacity="0.85"
            />
          ))}
          <rect
            x="84"
            y="72"
            width="3"
            height="10"
            className={`${f} animate-[mh-blink_1s_steps(1)_infinite] motion-reduce:animate-none`}
          />
        </>
      )}

      {id === "books" && (
        <>
          <path d="M10 100h100" strokeWidth="2" strokeLinecap="round" className={s} />
          {[
            { x: 20, h: 36 },
            { x: 44, h: 56 },
            { x: 68, h: 44 },
            { x: 92, h: 74 },
          ].map(({ x, h }, i) => (
            <rect
              key={x}
              x={x}
              y={100 - h}
              width="14"
              height={h}
              rx="3"
              className={`${f} origin-bottom ${box} animate-[mh-grow_2.6s_ease-in-out_infinite_alternate] motion-reduce:animate-none`}
              style={{ animationDelay: `${i * 0.25}s` }}
              opacity={0.55 + i * 0.15}
            />
          ))}
        </>
      )}

      {id === "tax" && (
        <>
          <rect x="26" y="12" width="68" height="96" rx="8" fill="none" strokeWidth="2" className={s} />
          {[30, 42].map((y) => (
            <path key={y} d={`M38 ${y}h44`} strokeWidth="3" strokeLinecap="round" className={s} opacity="0.6" />
          ))}
          <path
            d="M40 76l13 13 28-30"
            fill="none"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength={1}
            strokeDasharray={1}
            className={`${s} animate-[mh-loop_3.6s_ease-in-out_infinite] motion-reduce:animate-none`}
          />
        </>
      )}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */
export default function AboutUs() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  /* Theme, shared with the footer through localStorage + a custom event */
  const readTheme = useCallback(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem("mh-theme");
    } catch {}
    setTheme(
      saved === "light" || saved === "dark"
        ? saved
        : window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark"
    );
  }, []);

  useEffect(() => {
    readTheme();
    setMounted(true);
    window.addEventListener("mh-theme", readTheme);
    window.addEventListener("storage", readTheme);
    return () => {
      window.removeEventListener("mh-theme", readTheme);
      window.removeEventListener("storage", readTheme);
    };
  }, [readTheme]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem("mh-theme", next);
    } catch {}
    window.dispatchEvent(new Event("mh-theme"));
  };

  /* Hero spotlight follows the cursor */
  const onHeroMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  /* Scroll-driven sections */
  const [stateRef, stateP] = useScrollProgress<HTMLDivElement>();
  const [procRef, procP] = useScrollProgress<HTMLDivElement>();
  const words = STATEMENT.split(" ");

  /* Services tabs */
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const [paused, setPaused] = useState(false);
  const [svcRef, svcSeen] = useInView<HTMLElement>(0.1);
  const [promRef, promSeen] = useInView<HTMLElement>(0.15);
  const current = services[active];

  const pick = (i: number) => {
    setActive(i);
    setAuto(false);
  };

  /* Magnetic CTA button */
  const magnet = useRef<HTMLAnchorElement>(null);
  const onMagnet = (e: React.MouseEvent<HTMLElement>) => {
    const el = magnet.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * 0.22;
    const y = (e.clientY - (r.top + r.height / 2)) * 0.22;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };
  const offMagnet = () => {
    if (magnet.current) magnet.current.style.transform = "";
  };

  const lineCls = () =>
    `block translate-y-[110%] motion-reduce:translate-y-0 ${
      mounted
        ? "animate-[mh-line-up_1s_cubic-bezier(0.2,0.8,0.2,1)_forwards] motion-reduce:animate-none"
        : ""
    }`;

  return (
    <main
      data-theme={theme}
      className="mh-about relative overflow-x-clip bg-[var(--mh-bg)] text-[color:var(--mh-text)] transition-colors duration-500"
    >
      <style>{ABOUT_CSS}</style>

      {/* ============================ HERO ============================ */}
      <section
        onMouseMove={onHeroMove}
        className="relative flex min-h-[88vh] items-center overflow-hidden border-b border-[color:var(--mh-line)] px-5 py-24 sm:px-8"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(520px_circle_at_var(--mx,72%)_var(--my,32%),var(--mh-glow),transparent_62%)]"
        />

        {/* Huge house-roof M, drawn once, with a spark that keeps pinging */}
        <svg
          viewBox="0 0 48 48"
          aria-hidden="true"
          className="pointer-events-none absolute -right-[6%] top-1/2 w-[min(82vw,680px)] -translate-y-1/2 overflow-visible opacity-[0.22]"
        >
          <path
            d="M13 34V16l11 9.5L35 16v18"
            pathLength={1}
            strokeDasharray={1}
            strokeDashoffset={1}
            fill="none"
            strokeWidth="0.9"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`stroke-[color:var(--mh-accent)] motion-reduce:[stroke-dashoffset:0] ${
              mounted
                ? "animate-[mh-draw_2.6s_0.4s_cubic-bezier(0.6,0,0.2,1)_forwards] motion-reduce:animate-none"
                : ""
            }`}
          />
          <circle cx="24" cy="31" r="0.9" className="fill-[var(--mh-accent)]" />
          <circle
            cx="24"
            cy="31"
            r="0.9"
            fill="none"
            strokeWidth="0.25"
            className="origin-center animate-[mh-ping_2.8s_ease-out_infinite] stroke-[color:var(--mh-accent)] [transform-box:fill-box] motion-reduce:animate-none"
          />
        </svg>

        <button
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full border border-[color:var(--mh-line)] bg-[var(--mh-surface)] transition duration-500 hover:rotate-180 hover:bg-[var(--mh-accent)] hover:text-[color:var(--mh-accent-ink)] sm:right-8"
        >
          {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
        </button>

        <div className="relative mx-auto w-full max-w-[1200px]">
          <p
            className={`mb-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--mh-line)] bg-[var(--mh-surface)] px-3.5 py-1.5 text-xs text-[color:var(--mh-muted)] opacity-0 motion-reduce:opacity-100 ${
              mounted ? "animate-[mh-rise_0.8s_0.1s_forwards] motion-reduce:animate-none" : ""
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-[mh-ping_2s_ease-out_infinite] rounded-full bg-[var(--mh-accent)] motion-reduce:animate-none" />
              <span className="relative h-2 w-2 rounded-full bg-[var(--mh-accent)]" />
            </span>
            About Motive House
          </p>

          <h1 className="m-0 text-[clamp(2.6rem,8.4vw,7rem)] font-extrabold leading-[0.98] tracking-[-0.045em]">
            <span className="block overflow-hidden pb-[0.08em]">
              <span className={lineCls()} style={{ animationDelay: "0.15s" }}>
                We build the house
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <span
                className={`${lineCls()} text-transparent [-webkit-text-stroke:1.5px_var(--mh-text)]`}
                style={{ animationDelay: "0.3s" }}
              >
                your ideas live in.
              </span>
            </span>
          </h1>

          <p
            className={`mt-7 max-w-[560px] text-base leading-7 text-[color:var(--mh-muted)] opacity-0 motion-reduce:opacity-100 sm:text-lg sm:leading-8 ${
              mounted ? "animate-[mh-rise_0.9s_0.7s_forwards] motion-reduce:animate-none" : ""
            }`}
          >
            Motive House is a creative and digital agency. Design, social media, web,
            bookkeeping and taxes, all under one roof and built around how US businesses
            actually work.
          </p>

          <div
            className={`mt-8 flex flex-wrap gap-2 opacity-0 motion-reduce:opacity-100 ${
              mounted ? "animate-[mh-rise_0.9s_0.9s_forwards] motion-reduce:animate-none" : ""
            }`}
          >
            {services.map(({ id, title }) => (
              <a
                key={id}
                href="#mh-services"
                onClick={() => pick(services.findIndex((s) => s.id === id))}
                className="rounded-full border border-[color:var(--mh-line)] px-3.5 py-1.5 text-sm text-[color:var(--mh-muted)] transition duration-300 hover:-translate-y-0.5 hover:border-[color:var(--mh-accent)] hover:bg-[var(--mh-accent)] hover:text-[color:var(--mh-accent-ink)]"
              >
                {title}
              </a>
            ))}
          </div>

          <div
            aria-hidden="true"
            className="mt-14 hidden h-14 w-px overflow-hidden bg-[color:var(--mh-line)] sm:block"
          >
            <span className="block h-full w-full animate-[mh-cue_2s_ease-in-out_infinite] bg-[var(--mh-accent)] motion-reduce:animate-none" />
          </div>
        </div>
      </section>

      {/* ====================== STATEMENT (scroll fill) ====================== */}
      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div ref={stateRef} className="mx-auto max-w-[1000px]">
          <p className="m-0 text-[clamp(1.6rem,4.2vw,3.2rem)] font-bold leading-[1.18] tracking-[-0.03em]">
            {words.map((w, i) => {
              const o = Math.max(
                0,
                Math.min(1, (stateP * (words.length + 3) - i) / 3)
              );
              return (
                <span
                  key={i}
                  className="transition-opacity duration-200 motion-reduce:!opacity-100"
                  style={{ opacity: 0.16 + o * 0.84 }}
                >
                  {w}{" "}
                </span>
              );
            })}
          </p>
        </div>
      </section>

      {/* ============================ SERVICES ============================ */}
      <section
        id="mh-services"
        ref={svcRef}
        className="border-y border-[color:var(--mh-line)] bg-[var(--mh-surface)] px-5 py-20 sm:px-8 sm:py-24"
      >
        <div className="mx-auto max-w-[1200px]">
          <Rise show={svcSeen} className="mb-10 max-w-[640px]">
            <h2 className="m-0 text-[clamp(1.9rem,4.4vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.035em]">
              Five services. One roof. Built for US businesses.
            </h2>
            <p className="mt-4 text-base leading-7 text-[color:var(--mh-muted)]">
              Pick any service to see exactly what is included and how it fits US rules,
              formats and habits.
            </p>
          </Rise>

          <Rise
            show={svcSeen}
            delay={0.15}
            className="grid gap-5 lg:grid-cols-[300px_1fr] lg:gap-8"
          >
            {/* Tabs */}
            <div
              role="tablist"
              aria-label="Services"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0"
            >
              {services.map((s, i) => {
                const on = i === active;
                return (
                  <button
                    key={s.id}
                    role="tab"
                    type="button"
                    aria-selected={on}
                    onClick={() => pick(i)}
                    className={`group relative flex shrink-0 items-center gap-3 overflow-hidden rounded-2xl border px-4 py-3.5 text-left transition duration-300 lg:w-full ${
                      on
                        ? "border-[color:var(--mh-accent)] bg-[var(--mh-accent)] text-[color:var(--mh-accent-ink)]"
                        : "border-[color:var(--mh-line)] hover:border-[color:var(--mh-accent)] hover:bg-[var(--mh-surface)]"
                    }`}
                  >
                    <s.Icon size={20} className="shrink-0" />
                    <span className="flex flex-col leading-tight">
                      <span className="whitespace-nowrap text-sm font-semibold">{s.title}</span>
                      <span
                        className={`hidden whitespace-nowrap text-xs lg:block ${
                          on ? "opacity-75" : "text-[color:var(--mh-muted)]"
                        }`}
                      >
                        {s.short}
                      </span>
                    </span>

                    {on && (
                      <span
                        aria-hidden="true"
                        onAnimationEnd={() => setActive((a) => (a + 1) % services.length)}
                        className={`absolute bottom-0 left-0 h-[3px] bg-[var(--mh-accent-ink)] opacity-70 ${
                          auto
                            ? "animate-[mh-fill_9s_linear_forwards] motion-reduce:animate-none"
                            : "w-full"
                        }`}
                        style={{ animationPlayState: paused ? "paused" : "running" }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Panel */}
            <div
              role="tabpanel"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              className="relative min-h-[470px] overflow-hidden rounded-[28px] border border-[color:var(--mh-line)] bg-[var(--mh-bg)] p-6 sm:p-9"
            >
              <div
                key={current.id}
                className="animate-[mh-wipe_0.8s_cubic-bezier(0.2,0.7,0.2,1)_both] motion-reduce:animate-none"
              >
                <div className="flex flex-wrap items-center gap-6">
                  <ServiceArt id={current.id} />
                  <div className="min-w-[220px] flex-1">
                    <h3 className="m-0 text-2xl font-bold tracking-tight sm:text-3xl">
                      {current.title}
                    </h3>
                    <p className="mt-2 max-w-[460px] text-base leading-7 text-[color:var(--mh-muted)]">
                      {current.promise}
                    </p>
                  </div>
                  <Link
                    href={current.href}
                    className="group inline-flex items-center gap-2 rounded-full border border-[color:var(--mh-line)] py-1.5 pl-4 pr-1.5 text-sm font-semibold transition duration-300 hover:border-[color:var(--mh-accent)] hover:bg-[var(--mh-accent)] hover:text-[color:var(--mh-accent-ink)]"
                  >
                    Learn more
                    <i className="grid h-7 w-7 place-items-center rounded-full bg-[var(--mh-accent)] text-[color:var(--mh-accent-ink)] transition-transform duration-500 [transition-timing-function:cubic-bezier(0.3,1.4,0.5,1)] group-hover:rotate-45 group-hover:bg-[var(--mh-accent-ink)] group-hover:text-[color:var(--mh-accent)]">
                      <ArrowUpRight size={14} />
                    </i>
                  </Link>
                </div>

                <div className="mt-8 grid gap-8 md:grid-cols-[1.25fr_1fr]">
                  <div>
                    <h4 className="mb-3 text-sm font-semibold">What is included</h4>
                    <ul className="m-0 grid list-none gap-2.5 p-0 sm:grid-cols-1">
                      {current.includes.map((t, i) => (
                        <li
                          key={t}
                          className="flex items-start gap-2.5 text-sm leading-6 text-[color:var(--mh-muted)] opacity-0 animate-[mh-rise_0.6s_forwards] motion-reduce:animate-none motion-reduce:opacity-100"
                          style={{ animationDelay: `${0.25 + i * 0.07}s` }}
                        >
                          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--mh-accent)] text-[color:var(--mh-accent-ink)]">
                            <Check size={12} strokeWidth={3} />
                          </span>
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-7">
                    <div>
                      <h4 className="mb-3 text-sm font-semibold">Tools and standards</h4>
                      <div className="flex flex-wrap gap-2">
                        {current.tools.map((t, i) => (
                          <span
                            key={t}
                            className="rounded-full border border-[color:var(--mh-line)] bg-[var(--mh-surface)] px-3 py-1 text-xs opacity-0 animate-[mh-rise_0.6s_forwards] motion-reduce:animate-none motion-reduce:opacity-100"
                            style={{ animationDelay: `${0.4 + i * 0.06}s` }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-[color:var(--mh-line)] bg-[var(--mh-surface)] p-4">
                      <h4 className="mb-2.5 flex items-center gap-2 text-sm font-semibold">
                        <Flag size={14} /> Made for the USA
                      </h4>
                      <ul className="m-0 grid list-none gap-2 p-0">
                        {current.usa.map((t) => (
                          <li key={t} className="text-[0.82rem] leading-5 text-[color:var(--mh-muted)]">
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Rise>
        </div>
      </section>

      {/* ============================ PROCESS ============================ */}
      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div ref={procRef} className="mx-auto max-w-[1200px]">
          <h2 className="m-0 max-w-[560px] text-[clamp(1.9rem,4.4vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.035em]">
            How a project moves, start to finish.
          </h2>

          <div className="relative mt-14">
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 top-[18px] hidden h-px bg-[color:var(--mh-line)] md:block"
            />
            <div
              aria-hidden="true"
              className="absolute left-0 top-[18px] hidden h-px bg-[var(--mh-accent)] transition-[width] duration-200 ease-out md:block"
              style={{ width: `${Math.min(100, procP * 125)}%` }}
            />

            <ol className="relative m-0 grid list-none gap-10 p-0 md:grid-cols-4 md:gap-6">
              {steps.map((s, i) => {
                const on = procP * 1.25 >= i / 3 - 0.02;
                return (
                  <li key={s.t}>
                    <span
                      className={`grid h-9 w-9 place-items-center rounded-full border text-sm font-bold transition-all duration-500 ${
                        on
                          ? "scale-100 border-[color:var(--mh-accent)] bg-[var(--mh-accent)] text-[color:var(--mh-accent-ink)]"
                          : "scale-90 border-[color:var(--mh-line)] bg-[var(--mh-bg)] text-[color:var(--mh-muted)]"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <h3 className="mb-2 mt-5 text-xl font-bold tracking-tight">{s.t}</h3>
                    <p className="m-0 max-w-[260px] text-sm leading-6 text-[color:var(--mh-muted)]">
                      {s.d}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* ============================ PROMISES ============================ */}
      <section
        ref={promRef}
        className="border-t border-[color:var(--mh-line)] px-5 py-20 sm:px-8 sm:py-24"
      >
        <div className="mx-auto max-w-[1200px]">
          <Rise show={promSeen}>
            <h2 className="m-0 mb-10 max-w-[560px] text-[clamp(1.9rem,4.4vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.035em]">
              What you can count on.
            </h2>
          </Rise>

          <div className="border-t border-[color:var(--mh-line)]">
            {promises.map(({ Icon, t, d }, i) => (
              <Rise key={t} show={promSeen} delay={0.1 + i * 0.1}>
                <div
                  tabIndex={0}
                  className="group relative flex flex-col gap-3 overflow-hidden border-b border-[color:var(--mh-line)] px-4 py-7 transition-colors duration-500 before:absolute before:inset-0 before:origin-left before:scale-x-0 before:bg-[var(--mh-accent)] before:transition-transform before:duration-500 before:[transition-timing-function:cubic-bezier(0.7,0,0.2,1)] hover:before:scale-x-100 focus-visible:before:scale-x-100 sm:flex-row sm:items-center sm:gap-10 sm:px-6"
                >
                  <div className="relative z-10 flex items-center gap-4 transition-colors duration-500 group-hover:text-[color:var(--mh-accent-ink)] group-focus-visible:text-[color:var(--mh-accent-ink)] sm:w-[40%]">
                    <Icon size={22} className="shrink-0" />
                    <h3 className="m-0 text-xl font-bold tracking-tight sm:text-2xl">{t}</h3>
                  </div>
                  <p className="relative z-10 m-0 max-w-[480px] text-sm leading-6 text-[color:var(--mh-muted)] transition-colors duration-500 group-hover:text-[color:var(--mh-accent-ink)] group-focus-visible:text-[color:var(--mh-accent-ink)] sm:text-base sm:leading-7">
                    {d}
                  </p>
                </div>
              </Rise>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== CTA ============================== */}
      <section
        onMouseMove={onMagnet}
        onMouseLeave={offMagnet}
        className="relative overflow-hidden px-5 py-24 text-center sm:px-8 sm:py-32"
        style={{ background: MAROON, color: OFFWHITE }}
      >
        <svg
          viewBox="0 0 48 48"
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 w-[min(120vw,900px)] -translate-x-1/2 -translate-y-1/2 opacity-[0.1]"
        >
          <path
            d="M13 34V16l11 9.5L35 16v18"
            fill="none"
            stroke={OFFWHITE}
            strokeWidth="0.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="relative mx-auto max-w-[760px]">
          <h2 className="m-0 text-[clamp(2.2rem,6.4vw,4.8rem)] font-extrabold leading-[1] tracking-[-0.04em]">
            Ready to build your house?
          </h2>
          <p className="mx-auto mb-9 mt-5 max-w-[480px] text-base leading-7 opacity-80">
            Tell us about your business. We will reply with a clear plan and a quote, no
            jargon and no pressure.
          </p>

          <a
            ref={magnet}
            href={`mailto:${EMAIL}`}
            className="group inline-flex items-center gap-3 rounded-full py-2 pl-7 pr-2 text-base font-semibold transition-[transform,box-shadow] duration-200 ease-out hover:shadow-[0_18px_50px_-14px_rgba(0,0,0,0.6)]"
            style={{ background: OFFWHITE, color: MAROON }}
          >
            Start a project
            <i
              className="grid h-11 w-11 place-items-center rounded-full transition-transform duration-500 [transition-timing-function:cubic-bezier(0.3,1.4,0.5,1)] group-hover:rotate-45"
              style={{ background: MAROON, color: OFFWHITE }}
            >
              <ArrowUpRight size={20} />
            </i>
          </a>

          <p className="mt-6 text-sm opacity-70">{EMAIL}</p>
        </div>
      </section>
    </main>
  );
}