"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  LayoutTemplate,
  Moon,
  Newspaper,
  RotateCcw,
  Server,
  ShoppingBag,
  Sun,
  Zap,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  COLOURS: same maroon + off-white as the footer and About page.     */
/*  Replace with your exact site hex codes.                            */
/* ------------------------------------------------------------------ */
const MAROON = "#6b1a2b";
const OFFWHITE = "#f5efe6";
const INK = "#1a0b0f";

const WEB_CSS = `
.mh-web[data-theme="dark"]{
  --mh-bg:${INK}; --mh-text:${OFFWHITE}; --mh-muted:rgba(245,239,230,.66);
  --mh-line:rgba(245,239,230,.14); --mh-surface:rgba(245,239,230,.05);
  --mh-accent:${OFFWHITE}; --mh-accent-ink:${MAROON};
  --mh-glow:rgba(170,52,84,.34);
}
.mh-web[data-theme="light"]{
  --mh-bg:${OFFWHITE}; --mh-text:${MAROON}; --mh-muted:rgba(107,26,43,.7);
  --mh-line:rgba(107,26,43,.18); --mh-surface:rgba(107,26,43,.05);
  --mh-accent:${MAROON}; --mh-accent-ink:${OFFWHITE};
  --mh-glow:rgba(107,26,43,.16);
}
@keyframes mh-line-up{from{transform:translateY(110%)}to{transform:translateY(0)}}
@keyframes mh-rise{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
@keyframes mh-ping{0%{transform:scale(1);opacity:.8}100%{transform:scale(3);opacity:0}}
@keyframes mh-blink{50%{opacity:0}}
@keyframes mh-float{50%{transform:translateY(-8px)}}
@keyframes mh-pop{from{opacity:0;transform:scale(.96) translateY(10px)}to{opacity:1;transform:none}}
@keyframes mh-slide{from{opacity:0;transform:translateX(-14px)}to{opacity:1;transform:none}}
`;

/* ------------------------------------------------------------------ */
/*  Content                                                            */
/*  Edit freely so it matches exactly what you offer.                  */
/* ------------------------------------------------------------------ */
const EMAIL = "support@motivehouse.co";

/* Order: Node.js, Next.js, WordPress, Wix, Shopify */
type Platform = {
  id: string;
  name: string;
  tag: string;
  Icon: typeof Server;
  bestFor: string[];
  build: string[];
  stack: string[];
};

const platforms: Platform[] = [
  {
    id: "node",
    name: "Node.js",
    tag: "Custom backends and APIs",
    Icon: Server,
    bestFor: ["Web apps", "Booking systems", "Marketplaces", "Internal tools"],
    build: [
      "REST APIs with Express.js",
      "JWT login with user roles",
      "MongoDB or MySQL data layer",
      "Payments, emails and webhooks",
      "Admin panels and dashboards",
    ],
    stack: ["Express.js", "MongoDB", "MySQL", "REST APIs", "JWT"],
  },
  {
    id: "next",
    name: "Next.js",
    tag: "Fast, SEO-first, fully custom",
    Icon: Zap,
    bestFor: ["Marketing sites", "SaaS products", "Customer portals", "Content platforms"],
    build: [
      "Server-rendered React pages",
      "API route handlers",
      "Auth, dashboards and gated pages",
      "Headless CMS integration",
      "Image and Core Web Vitals tuning",
    ],
    stack: ["React.js", "Tailwind CSS", "REST APIs", "JWT"],
  },
  {
    id: "wordpress",
    name: "WordPress",
    tag: "Content you can edit yourself",
    Icon: Newspaper,
    bestFor: ["Blogs", "Business sites", "Publishers", "WooCommerce stores"],
    build: [
      "Custom themes, styled with Tailwind CSS",
      "Block patterns your team can reuse",
      "WooCommerce store setup",
      "Speed and security hardening",
      "Headless setup through the REST API",
    ],
    stack: ["MySQL", "WP REST API", "Tailwind CSS", "React.js"],
  },
  {
    id: "wix",
    name: "Wix",
    tag: "The fastest way to launch",
    Icon: LayoutTemplate,
    bestFor: ["Small businesses", "Portfolios", "Restaurants", "Bookings"],
    build: [
      "Custom design in Wix Studio",
      "Bookings, Stores and Events setup",
      "Velo custom JavaScript",
      "Member areas and login",
      "SEO and analytics setup",
    ],
    stack: ["Velo (JavaScript)", "Wix CMS", "Wix Members"],
  },
  {
    id: "shopify",
    name: "Shopify",
    tag: "Stores built to sell",
    Icon: ShoppingBag,
    bestFor: ["Online stores", "Direct-to-consumer brands", "Subscriptions", "Wholesale"],
    build: [
      "Custom theme development",
      "Products, collections and checkout setup",
      "Custom apps and webhooks in Node.js",
      "Headless storefronts with React",
      "Speed, SEO and conversion tuning",
    ],
    stack: ["Node.js", "Admin and Storefront APIs", "App session tokens", "React.js"],
  },
];

const goals = [
  { t: "An online store", p: "shopify", why: "Shopify gives you secure checkout, inventory and payments out of the box. We customise the theme and add Node.js apps where you need more." },
  { t: "A custom web app", p: "node", why: "A Node.js backend with Express.js, a database and JWT login gives you full control over your own rules and data." },
  { t: "A fast marketing site", p: "next", why: "Next.js pages are server-rendered and tuned for speed, which helps both search rankings and conversions." },
  { t: "A blog or content site", p: "wordpress", why: "WordPress lets your team publish and edit without a developer, with a huge plugin ecosystem behind it." },
  { t: "A quick small-business site", p: "wix", why: "Wix gets a polished site live fast, with bookings, members and payments built in." },
  { t: "User accounts and dashboards", p: "node", why: "Accounts, roles and private data need a proper backend: Node.js, JWT authentication and a database." },
];

type Layer = {
  id: string;
  title: string;
  tech: string[];
  what: string;
  where: string[];
};

const layers: Layer[] = [
  {
    id: "ui",
    title: "Interface",
    tech: ["React.js", "Next.js", "Tailwind CSS"],
    what: "Everything visitors see and tap: pages, forms and responsive layouts, built from reusable React components and styled with Tailwind CSS.",
    where: ["Next.js: the core of the site", "Node.js apps: dashboards and admin screens", "WordPress and Shopify: custom themes and headless storefronts"],
  },
  {
    id: "api",
    title: "REST APIs",
    tech: ["REST", "JSON", "HTTPS"],
    what: "Clean, validated endpoints (GET, POST, PUT, DELETE) that let the interface, mobile apps and other tools talk to your data safely.",
    where: ["Node.js: the heart of every app", "Next.js: route handlers", "WordPress: WP REST API", "Shopify and Wix: Admin, Storefront and Velo APIs"],
  },
  {
    id: "server",
    title: "Server logic",
    tech: ["Node.js", "Express.js"],
    what: "Business rules, payments, email, file uploads, webhooks and rate limiting. The code that decides what is allowed to happen.",
    where: ["Node.js apps: core", "Shopify: custom app backends and webhooks", "Next.js and WordPress: companion services when needed"],
  },
  {
    id: "auth",
    title: "Authentication",
    tech: ["JWT", "Hashed passwords", "Roles"],
    what: "Signup, login and permissions. Short-lived JSON Web Tokens, refresh tokens, hashed passwords and role checks for admin, staff and customers.",
    where: ["Node.js and Next.js apps: built to order", "Shopify apps: session tokens", "WordPress: through a vetted plugin", "Wix: built-in Members"],
  },
  {
    id: "db",
    title: "Database",
    tech: ["MongoDB", "MySQL"],
    what: "MongoDB for flexible data such as catalogues, content and activity logs. MySQL for structured, transactional data such as orders, invoices and accounts.",
    where: ["Node.js apps: either or both", "WordPress: MySQL is built in", "Shopify and Wix: managed for you"],
  },
];

const jwtSteps = [
  { t: "Login", d: "The user sends email and password over HTTPS." },
  { t: "Verify and sign", d: "The server checks the hashed password and signs a short-lived JWT." },
  { t: "Store safely", d: "The token lives in an httpOnly, Secure cookie, out of reach of page scripts." },
  { t: "Every request", d: "The browser sends the token. The server checks the signature and the role." },
  { t: "Refresh", d: "A refresh token issues a new one, and can be revoked on logout." },
];

const matrixCols = ["Node.js", "Next.js", "WordPress", "Wix", "Shopify"];
const matrix: { row: string; cells: string[] }[] = [
  { row: "React.js", cells: ["Admin and dashboards", "Core", "Headless option", "Headless option", "Hydrogen storefronts"] },
  { row: "Tailwind CSS", cells: ["Dashboard UI", "Core", "Custom themes", "—", "Custom themes"] },
  { row: "Express.js", cells: ["Core", "Optional API", "Companion API", "—", "App backend"] },
  { row: "MongoDB", cells: ["Core option", "Optional", "—", "—", "App data"] },
  { row: "MySQL", cells: ["Core option", "Optional", "Built in", "—", "App data"] },
  { row: "REST APIs", cells: ["Core", "Route handlers", "WP REST API", "Velo and REST", "Admin and Storefront"] },
  { row: "JWT auth", cells: ["Core", "Sessions and roles", "Via plugin", "Wix Members", "App session tokens"] },
];

const included = [
  "Mobile-first, responsive design",
  "SEO foundations: meta, sitemap, schema",
  "WCAG 2.1 AA accessibility, the benchmark often cited in US ADA cases",
  "Core Web Vitals and speed tuning",
  "HTTPS, security headers and backups",
  "Privacy policy and cookie banner set up for CCPA / CPRA",
  "Analytics and conversion tracking",
  "Post-launch support and maintenance plans",
];

const heroScript: { t: string; k: "cmd" | "ok" | "dim" | "err" }[] = [
  { t: "POST /api/auth/login", k: "cmd" },
  { t: '200 OK  { "token": "eyJhbGciOi…" }', k: "ok" },
  { t: "GET /api/orders", k: "cmd" },
  { t: "Authorization: Bearer eyJhbGciOi…", k: "dim" },
  { t: "200 OK  [ 24 orders ]", k: "ok" },
  { t: "GET /api/orders   (no token)", k: "cmd" },
  { t: "401 Unauthorized", k: "err" },
];

const techChips = ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs", "JWT", "Tailwind CSS", "WordPress", "Shopify", "Wix"];

/* ------------------------------------------------------------------ */
/*  Hooks                                                              */
/* ------------------------------------------------------------------ */
function useInView<T extends HTMLElement>(threshold = 0.15) {
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

function useTicker(n: number, ms: number, paused: boolean) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setI((v) => (v + 1) % n), ms);
    return () => clearInterval(id);
  }, [n, ms, paused]);
  return [i, setI] as const;
}

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

const h2Cls =
  "m-0 text-[clamp(1.9rem,4.4vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.035em]";

/* ------------------------------------------------------------------ */
/*  Hero terminal: types a login + protected request, on a loop        */
/* ------------------------------------------------------------------ */
function HeroTerminal({ reduce }: { reduce: boolean }) {
  const total = heroScript.reduce((a, l) => a + l.t.length, 0);
  const [n, setN] = useState(reduce ? total : 0);

  useEffect(() => {
    if (reduce) {
      setN(total);
      return;
    }
    let timer: ReturnType<typeof setTimeout>;
    const tick = (count: number) => {
      if (count > total) {
        timer = setTimeout(() => tick(0), 2600);
        return;
      }
      setN(count);
      timer = setTimeout(() => tick(count + 1), 26);
    };
    timer = setTimeout(() => tick(0), 900);
    return () => clearTimeout(timer);
  }, [reduce, total]);

  let left = n;
  return (
    <div className="w-full max-w-[470px] overflow-hidden rounded-2xl border border-[color:var(--mh-line)] bg-[var(--mh-surface)] backdrop-blur-sm">
      <div className="flex items-center gap-2 border-b border-[color:var(--mh-line)] px-4 py-3">
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-2.5 w-2.5 rounded-full bg-[var(--mh-accent)] opacity-40" />
        ))}
        <span className="ml-3 text-xs text-[color:var(--mh-muted)]">api.yourbusiness.com</span>
      </div>
      <pre
        className="m-0 min-h-[224px] whitespace-pre-wrap break-words px-4 py-4 font-mono text-[12.5px] leading-[1.9]"
        aria-label="Example of a login request and a protected API request"
      >
        {heroScript.map((l, i) => {
          const shown = Math.max(0, Math.min(l.t.length, left));
          left -= l.t.length;
          if (shown === 0) return null;
          const cls =
            l.k === "ok"
              ? "font-semibold text-[color:var(--mh-accent)]"
              : l.k === "dim"
              ? "text-[color:var(--mh-muted)]"
              : l.k === "err"
              ? "bg-[var(--mh-accent)] px-1 text-[color:var(--mh-accent-ink)]"
              : "";
          return (
            <div key={i}>
              <span className={cls}>{l.t.slice(0, shown)}</span>
              {shown < l.t.length && (
                <span className="ml-px inline-block h-[1em] w-[7px] translate-y-[2px] animate-[mh-blink_0.9s_steps(1)_infinite] bg-[var(--mh-accent)] motion-reduce:animate-none" />
              )}
            </div>
          );
        })}
      </pre>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */
export default function WebDesign() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);
  const [reduce, setReduce] = useState(false);

  /* Theme shared with footer + About page */
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
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
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

  const onHeroMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  /* ---------------- Carousel ---------------- */
  const N = platforms.length;
  const [active, setActive] = useState(0);
  const [hoverCar, setHoverCar] = useState(false);
  const [goal, setGoal] = useState<number | null>(null);
  const dragX = useRef<number | null>(null);

  const go = useCallback((dir: number) => setActive((a) => (a + dir + N) % N), [N]);

  useEffect(() => {
    if (reduce || hoverCar) return;
    const id = setInterval(() => setActive((a) => (a + 1) % N), 6500);
    return () => clearInterval(id);
  }, [reduce, hoverCar, N]);

  const offsetOf = (i: number) => {
    let d = i - active;
    if (d > N / 2) d -= N;
    if (d < -N / 2) d += N;
    return d;
  };

  const pickGoal = (gi: number) => {
    setGoal(gi);
    const idx = platforms.findIndex((p) => p.id === goals[gi].p);
    if (idx >= 0) setActive(idx);
  };

  /* ---------------- Stack layers ---------------- */
  const [layerLocked, setLayerLocked] = useState(false);
  const [layerHover, setLayerHover] = useState(false);
  const [layer, setLayer] = useTicker(layers.length, 4200, layerLocked || layerHover || reduce);
  const layerRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [packetY, setPacketY] = useState(0);

  useEffect(() => {
    const place = () => {
      const el = layerRefs.current[layer];
      if (el) setPacketY(el.offsetTop + el.offsetHeight / 2);
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [layer]);

  /* ---------------- JWT flow ---------------- */
  const [jwtHover, setJwtHover] = useState(false);
  const [jwt, setJwt] = useTicker(jwtSteps.length, 2800, jwtHover || reduce);

  /* ---------------- Matrix hover ---------------- */
  const [hr, setHr] = useState(-1);
  const [hc, setHc] = useState(-1);

  /* ---------------- Section reveals ---------------- */
  const [carRef, carSeen] = useInView<HTMLElement>(0.1);
  const [stackRef, stackSeen] = useInView<HTMLElement>(0.1);
  const [matRef, matSeen] = useInView<HTMLElement>(0.1);
  const [incRef, incSeen] = useInView<HTMLElement>(0.15);

  /* Magnetic CTA */
  const magnet = useRef<HTMLAnchorElement>(null);
  const onMagnet = (e: React.MouseEvent<HTMLElement>) => {
    const el = magnet.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.transform = `translate(${(e.clientX - (r.left + r.width / 2)) * 0.22}px, ${
      (e.clientY - (r.top + r.height / 2)) * 0.22
    }px)`;
  };
  const offMagnet = () => {
    if (magnet.current) magnet.current.style.transform = "";
  };

  const lineCls = `block translate-y-[110%] motion-reduce:translate-y-0 ${
    mounted ? "animate-[mh-line-up_1s_cubic-bezier(0.2,0.8,0.2,1)_forwards] motion-reduce:animate-none" : ""
  }`;

  const sel = layers[layer];

  return (
    <main
      data-theme={theme}
      className="mh-web relative overflow-x-clip bg-[var(--mh-bg)] text-[color:var(--mh-text)] transition-colors duration-500"
    >
      <style>{WEB_CSS}</style>

      {/* ============================ HERO ============================ */}
      <section
        onMouseMove={onHeroMove}
        className="relative overflow-hidden border-b border-[color:var(--mh-line)] px-5 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-28"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(520px_circle_at_var(--mx,70%)_var(--my,30%),var(--mh-glow),transparent_62%)]"
        />

        <button
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full border border-[color:var(--mh-line)] bg-[var(--mh-surface)] transition duration-500 hover:rotate-180 hover:bg-[var(--mh-accent)] hover:text-[color:var(--mh-accent-ink)] sm:right-8"
        >
          {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
        </button>

        <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <p
              className={`mb-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--mh-line)] bg-[var(--mh-surface)] px-3.5 py-1.5 text-xs text-[color:var(--mh-muted)] opacity-0 motion-reduce:opacity-100 ${
                mounted ? "animate-[mh-rise_0.8s_0.1s_forwards] motion-reduce:animate-none" : ""
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-[mh-ping_2s_ease-out_infinite] rounded-full bg-[var(--mh-accent)] motion-reduce:animate-none" />
                <span className="relative h-2 w-2 rounded-full bg-[var(--mh-accent)]" />
              </span>
              Web design and development for US businesses
            </p>

            <h1 className="m-0 text-[clamp(2.4rem,6.6vw,5.4rem)] font-extrabold leading-[1] tracking-[-0.045em]">
              <span className="block overflow-hidden pb-[0.08em]">
                <span className={lineCls} style={{ animationDelay: "0.15s" }}>
                  Websites with real
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.08em]">
                <span
                  className={`${lineCls} text-transparent [-webkit-text-stroke:1.5px_var(--mh-text)]`}
                  style={{ animationDelay: "0.3s" }}
                >
                  engineering underneath.
                </span>
              </span>
            </h1>

            <p
              className={`mt-6 max-w-[540px] text-base leading-7 text-[color:var(--mh-muted)] opacity-0 motion-reduce:opacity-100 sm:text-lg sm:leading-8 ${
                mounted ? "animate-[mh-rise_0.9s_0.7s_forwards] motion-reduce:animate-none" : ""
              }`}
            >
              Node.js, Next.js, WordPress, Wix and Shopify, with secure APIs, login and
              databases where your project needs them. We pick the right tool for the job,
              not the one that is easiest for us.
            </p>

            <div
              className={`mt-8 flex flex-wrap gap-2 opacity-0 motion-reduce:opacity-100 ${
                mounted ? "animate-[mh-rise_0.9s_0.9s_forwards] motion-reduce:animate-none" : ""
              }`}
            >
              {techChips.map((t, i) => (
                <span
                  key={t}
                  className="animate-[mh-float_5s_ease-in-out_infinite] rounded-full border border-[color:var(--mh-line)] px-3 py-1 text-xs text-[color:var(--mh-muted)] motion-reduce:animate-none"
                  style={{ animationDelay: `${(i % 6) * 0.45}s` }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div
            className={`flex justify-center opacity-0 motion-reduce:opacity-100 lg:justify-end ${
              mounted ? "animate-[mh-pop_1s_0.6s_forwards] motion-reduce:animate-none" : ""
            }`}
          >
            <HeroTerminal reduce={reduce} />
          </div>
        </div>
      </section>

      {/* ============================ CAROUSEL ============================ */}
      <section ref={carRef} id="mh-platforms" className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1200px]">
          <Rise show={carSeen} className="mb-8 max-w-[680px]">
            <h2 className={h2Cls}>Five platforms. One honest recommendation.</h2>
            <p className="mt-4 text-base leading-7 text-[color:var(--mh-muted)]">
              Tell us what you are building and we will point you to the platform that fits.
              Swipe, drag or use the arrows to explore each one.
            </p>
          </Rise>

          {/* Goal picker */}
          <Rise show={carSeen} delay={0.1} className="mb-6">
            <p className="mb-3 text-sm font-semibold">What are you building?</p>
            <div className="flex flex-wrap gap-2">
              {goals.map((g, i) => (
                <button
                  key={g.t}
                  type="button"
                  onClick={() => pickGoal(i)}
                  aria-pressed={goal === i}
                  className={`rounded-full border px-4 py-2 text-sm transition duration-300 hover:-translate-y-0.5 ${
                    goal === i
                      ? "border-[color:var(--mh-accent)] bg-[var(--mh-accent)] text-[color:var(--mh-accent-ink)]"
                      : "border-[color:var(--mh-line)] text-[color:var(--mh-muted)] hover:border-[color:var(--mh-accent)] hover:text-[color:var(--mh-text)]"
                  }`}
                >
                  {g.t}
                </button>
              ))}
            </div>
            <div className="min-h-[52px]" aria-live="polite">
              {goal !== null && (
                <p
                  key={goal}
                  className="mt-4 max-w-[680px] animate-[mh-slide_0.5s_both] text-sm leading-6 text-[color:var(--mh-muted)] motion-reduce:animate-none"
                >
                  <b className="text-[color:var(--mh-text)]">
                    {platforms.find((p) => p.id === goals[goal].p)?.name}:
                  </b>{" "}
                  {goals[goal].why}
                </p>
              )}
            </div>
          </Rise>

          {/* Coverflow */}
          <Rise show={carSeen} delay={0.2}>
            <div
              className="relative h-[540px] touch-pan-y select-none [perspective:1400px] sm:h-[520px]"
              onMouseEnter={() => setHoverCar(true)}
              onMouseLeave={() => setHoverCar(false)}
              onPointerDown={(e) => {
                dragX.current = e.clientX;
              }}
              onPointerUp={(e) => {
                if (dragX.current === null) return;
                const dx = e.clientX - dragX.current;
                dragX.current = null;
                if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
              }}
              onKeyDown={(e) => {
                if (e.key === "ArrowRight") go(1);
                if (e.key === "ArrowLeft") go(-1);
              }}
              role="group"
              aria-roledescription="carousel"
              aria-label="Web platforms"
              tabIndex={0}
            >
              <div className="absolute inset-0 [transform-style:preserve-3d]">
                {platforms.map((p, i) => {
                  const d = offsetOf(i);
                  const on = d === 0;
                  const far = Math.abs(d);
                  return (
                    <article
                      key={p.id}
                      aria-hidden={!on}
                      onClick={() => !on && setActive(i)}
                      className={`absolute left-1/2 top-0 flex h-[500px] w-[min(82vw,420px)] flex-col overflow-hidden rounded-[28px] border p-6 transition-[transform,opacity,background-color,border-color] duration-[700ms] [transition-timing-function:cubic-bezier(0.2,0.8,0.2,1)] sm:h-[480px] sm:p-7 ${
                        on
                          ? "border-[color:var(--mh-accent)] bg-[var(--mh-accent)] text-[color:var(--mh-accent-ink)]"
                          : "cursor-pointer border-[color:var(--mh-line)] bg-[var(--mh-bg)]"
                      }`}
                      style={{
                        marginLeft: "calc(min(82vw, 420px) / -2)",
                        transform: `translateX(${d * 62}%) translateZ(${-far * 140}px) rotateY(${-d * 18}deg) scale(${1 - far * 0.08})`,
                        opacity: far > 1 ? 0.28 : on ? 1 : 0.6,
                        zIndex: 10 - far,
                        pointerEvents: far > 1 ? "none" : "auto",
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={`grid h-11 w-11 place-items-center rounded-full ${
                            on
                              ? "bg-[var(--mh-accent-ink)] text-[color:var(--mh-accent)]"
                              : "bg-[var(--mh-accent)] text-[color:var(--mh-accent-ink)]"
                          }`}
                        >
                          <p.Icon size={20} />
                        </span>
                        <span className={`text-xs ${on ? "opacity-75" : "text-[color:var(--mh-muted)]"}`}>
                          {String(i + 1).padStart(2, "0")} / {String(N).padStart(2, "0")}
                        </span>
                      </div>

                      <h3 className="mb-1 mt-5 text-4xl font-extrabold tracking-[-0.04em]">{p.name}</h3>
                      <p className={`m-0 text-sm ${on ? "opacity-80" : "text-[color:var(--mh-muted)]"}`}>{p.tag}</p>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {p.bestFor.map((b) => (
                          <span
                            key={b}
                            className={`rounded-full border px-2.5 py-0.5 text-[11px] ${
                              on ? "border-current opacity-80" : "border-[color:var(--mh-line)] text-[color:var(--mh-muted)]"
                            }`}
                          >
                            {b}
                          </span>
                        ))}
                      </div>

                      <ul className="m-0 mt-5 grid list-none gap-2 p-0">
                        {p.build.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-[13px] leading-5">
                            <Check size={14} strokeWidth={3} className="mt-0.5 shrink-0" />
                            <span className={on ? "" : "text-[color:var(--mh-muted)]"}>{b}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto flex items-end justify-between gap-3 pt-4">
                        <div className="flex flex-wrap gap-1.5">
                          {p.stack.slice(0, 3).map((s) => (
                            <span
                              key={s}
                              className={`rounded-md px-2 py-0.5 text-[11px] font-semibold ${
                                on
                                  ? "bg-[var(--mh-accent-ink)] text-[color:var(--mh-accent)]"
                                  : "bg-[var(--mh-surface)] text-[color:var(--mh-muted)]"
                              }`}
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                        {on && (
                          <a
                            href={`mailto:${EMAIL}?subject=${encodeURIComponent(p.name + " project")}`}
                            className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold"
                          >
                            Start
                            <ArrowUpRight
                              size={16}
                              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                          </a>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="mt-2 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous platform"
                className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--mh-line)] transition duration-300 hover:-translate-x-0.5 hover:bg-[var(--mh-accent)] hover:text-[color:var(--mh-accent-ink)]"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex items-center gap-2">
                {platforms.map((p, i) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Show ${p.name}`}
                    aria-current={i === active}
                    className={`h-2 rounded-full bg-[var(--mh-accent)] transition-all duration-500 ${
                      i === active ? "w-8 opacity-100" : "w-2 opacity-30 hover:opacity-60"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next platform"
                className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--mh-line)] transition duration-300 hover:translate-x-0.5 hover:bg-[var(--mh-accent)] hover:text-[color:var(--mh-accent-ink)]"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </Rise>
        </div>
      </section>

      {/* ============================ STACK ============================ */}
      <section
        ref={stackRef}
        className="border-y border-[color:var(--mh-line)] bg-[var(--mh-surface)] px-5 py-20 sm:px-8 sm:py-24"
      >
        <div className="mx-auto max-w-[1200px]">
          <Rise show={stackSeen} className="mb-10 max-w-[680px]">
            <h2 className={h2Cls}>What goes where, layer by layer.</h2>
            <p className="mt-4 text-base leading-7 text-[color:var(--mh-muted)]">
              Follow a single request from the browser down to the database. Click a layer to
              see which technology lives there and on which platform we use it.
            </p>
          </Rise>

          <Rise show={stackSeen} delay={0.15} className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
            {/* Layers + travelling request */}
            <div
              className="relative pl-9"
              onMouseEnter={() => setLayerHover(true)}
              onMouseLeave={() => setLayerHover(false)}
            >
              <div aria-hidden="true" className="absolute bottom-0 left-[13px] top-0 w-px bg-[color:var(--mh-line)]" />
              <span
                aria-hidden="true"
                className="absolute left-[7px] h-[13px] w-[13px] rounded-full bg-[var(--mh-accent)] shadow-[0_0_0_6px_var(--mh-glow)] transition-[top] duration-[800ms] [transition-timing-function:cubic-bezier(0.6,0,0.2,1)]"
                style={{ top: packetY - 6 }}
              />

              <div className="flex flex-col gap-3">
                {layers.map((l, i) => {
                  const on = i === layer;
                  return (
                    <button
                      key={l.id}
                      ref={(el) => {
                        layerRefs.current[i] = el;
                      }}
                      type="button"
                      onClick={() => {
                        setLayer(i);
                        setLayerLocked(true);
                      }}
                      aria-pressed={on}
                      className={`flex flex-wrap items-center justify-between gap-x-4 gap-y-2 rounded-2xl border px-4 py-3.5 text-left transition-all duration-500 ${
                        on
                          ? "translate-x-2 border-[color:var(--mh-accent)] bg-[var(--mh-accent)] text-[color:var(--mh-accent-ink)]"
                          : "border-[color:var(--mh-line)] bg-[var(--mh-bg)] hover:translate-x-1 hover:border-[color:var(--mh-accent)]"
                      }`}
                    >
                      <span className="text-base font-bold tracking-tight">{l.title}</span>
                      <span className="flex flex-wrap gap-1.5">
                        {l.tech.map((t) => (
                          <span
                            key={t}
                            className={`rounded-md px-2 py-0.5 text-[11px] font-semibold ${
                              on
                                ? "bg-[var(--mh-accent-ink)] text-[color:var(--mh-accent)]"
                                : "bg-[var(--mh-surface)] text-[color:var(--mh-muted)]"
                            }`}
                          >
                            {t}
                          </span>
                        ))}
                      </span>
                    </button>
                  );
                })}
              </div>

              {layerLocked && (
                <button
                  type="button"
                  onClick={() => setLayerLocked(false)}
                  className="mt-4 inline-flex items-center gap-1.5 text-xs text-[color:var(--mh-muted)] transition-colors hover:text-[color:var(--mh-text)]"
                >
                  <RotateCcw size={13} /> Follow the request automatically
                </button>
              )}
            </div>

            {/* Layer detail */}
            <div
              key={sel.id}
              className="animate-[mh-pop_0.6s_both] rounded-[28px] border border-[color:var(--mh-line)] bg-[var(--mh-bg)] p-6 motion-reduce:animate-none sm:p-8"
            >
              <h3 className="m-0 text-2xl font-bold tracking-tight">{sel.title}</h3>
              <p className="mb-6 mt-3 text-base leading-7 text-[color:var(--mh-muted)]">{sel.what}</p>

              <h4 className="mb-3 text-sm font-semibold">Where we add it</h4>
              <ul className="m-0 grid list-none gap-2.5 p-0">
                {sel.where.map((w, i) => (
                  <li
                    key={w}
                    className="flex items-start gap-2.5 text-sm leading-6 text-[color:var(--mh-muted)] opacity-0 animate-[mh-slide_0.5s_forwards] motion-reduce:animate-none motion-reduce:opacity-100"
                    style={{ animationDelay: `${0.15 + i * 0.08}s` }}
                  >
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--mh-accent)] text-[color:var(--mh-accent-ink)]">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </Rise>

          {/* JWT flow */}
          <Rise show={stackSeen} delay={0.3} className="mt-14">
            <h3 className="m-0 text-xl font-bold tracking-tight sm:text-2xl">How JWT login works</h3>
            <p className="mb-6 mt-2 max-w-[560px] text-sm leading-6 text-[color:var(--mh-muted)]">
              Every account system we build follows the same safe pattern.
            </p>

            <ol
              className="relative m-0 grid list-none gap-3 p-0 md:grid-cols-5"
              onMouseEnter={() => setJwtHover(true)}
              onMouseLeave={() => setJwtHover(false)}
            >
              {jwtSteps.map((s, i) => {
                const on = i === jwt;
                const done = i < jwt;
                return (
                  <li key={s.t}>
                    <button
                      type="button"
                      onClick={() => setJwt(i)}
                      className={`h-full w-full rounded-2xl border p-4 text-left transition-all duration-500 ${
                        on
                          ? "-translate-y-1 border-[color:var(--mh-accent)] bg-[var(--mh-accent)] text-[color:var(--mh-accent-ink)]"
                          : "border-[color:var(--mh-line)] bg-[var(--mh-bg)]"
                      }`}
                    >
                      <span
                        className={`mb-3 grid h-7 w-7 place-items-center rounded-full border text-xs font-bold transition-colors duration-500 ${
                          on
                            ? "border-current"
                            : done
                            ? "border-transparent bg-[var(--mh-accent)] text-[color:var(--mh-accent-ink)]"
                            : "border-[color:var(--mh-line)] text-[color:var(--mh-muted)]"
                        }`}
                      >
                        {done ? <Check size={13} strokeWidth={3} /> : i + 1}
                      </span>
                      <span className="block text-sm font-bold">{s.t}</span>
                      <span className={`mt-1 block text-xs leading-5 ${on ? "opacity-80" : "text-[color:var(--mh-muted)]"}`}>
                        {s.d}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </Rise>
        </div>
      </section>

      {/* ============================ MATRIX ============================ */}
      <section ref={matRef} className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1200px]">
          <Rise show={matSeen} className="mb-8 max-w-[680px]">
            <h2 className={h2Cls}>Which technology on which platform.</h2>
            <p className="mt-4 text-base leading-7 text-[color:var(--mh-muted)]">
              A dash means we do not use that technology on that platform.
            </p>
          </Rise>

          <Rise show={matSeen} delay={0.15}>
            <div className="overflow-x-auto rounded-3xl border border-[color:var(--mh-line)]">
              <table
                className="w-full min-w-[760px] border-collapse text-left text-sm"
                onMouseLeave={() => {
                  setHr(-1);
                  setHc(-1);
                }}
              >
                <thead>
                  <tr>
                    <th className="sticky left-0 bg-[var(--mh-bg)] px-4 py-4 font-semibold text-[color:var(--mh-muted)]">
                      Technology
                    </th>
                    {matrixCols.map((c, ci) => (
                      <th
                        key={c}
                        className={`px-4 py-4 font-bold transition-colors duration-300 ${
                          hc === ci ? "bg-[var(--mh-accent)] text-[color:var(--mh-accent-ink)]" : ""
                        }`}
                      >
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {matrix.map((r, ri) => (
                    <tr key={r.row} className="border-t border-[color:var(--mh-line)]">
                      <th
                        className={`sticky left-0 px-4 py-3.5 font-semibold transition-colors duration-300 ${
                          hr === ri
                            ? "bg-[var(--mh-accent)] text-[color:var(--mh-accent-ink)]"
                            : "bg-[var(--mh-bg)]"
                        }`}
                      >
                        {r.row}
                      </th>
                      {r.cells.map((cell, ci) => {
                        const hot = hr === ri || hc === ci;
                        const none = cell === "—";
                        return (
                          <td
                            key={ci}
                            onMouseEnter={() => {
                              setHr(ri);
                              setHc(ci);
                            }}
                            className={`px-4 py-3.5 transition-colors duration-300 ${
                              hot ? "bg-[var(--mh-surface)]" : ""
                            } ${none ? "text-[color:var(--mh-muted)] opacity-50" : ""} ${
                              hr === ri && hc === ci ? "font-bold text-[color:var(--mh-text)]" : ""
                            }`}
                          >
                            {cell}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Rise>
        </div>
      </section>

      {/* ============================ INCLUDED ============================ */}
      <section
        ref={incRef}
        className="border-t border-[color:var(--mh-line)] px-5 py-20 sm:px-8 sm:py-24"
      >
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Rise show={incSeen}>
            <h2 className={h2Cls}>Included with every build.</h2>
            <p className="mt-4 max-w-[420px] text-base leading-7 text-[color:var(--mh-muted)]">
              The basics are never extras. Each site we ship meets these standards, whichever
              platform it runs on.
            </p>
          </Rise>

          <ul className="m-0 grid list-none gap-x-8 gap-y-1 p-0 sm:grid-cols-2">
            {included.map((t, i) => (
              <Rise key={t} show={incSeen} delay={0.08 + i * 0.07}>
                <li className="flex items-start gap-3 border-b border-[color:var(--mh-line)] py-3.5 text-sm leading-6">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--mh-accent)] text-[color:var(--mh-accent-ink)]">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {t}
                </li>
              </Rise>
            ))}
          </ul>
        </div>
      </section>

      {/* ============================== CTA ============================== */}
      <section
        onMouseMove={onMagnet}
        onMouseLeave={offMagnet}
        className="relative overflow-hidden px-5 py-24 text-center sm:px-8 sm:py-28"
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
          <h2 className="m-0 text-[clamp(2.1rem,6vw,4.4rem)] font-extrabold leading-[1] tracking-[-0.04em]">
            Let&apos;s build something that lasts.
          </h2>
          <p className="mx-auto mb-9 mt-5 max-w-[480px] text-base leading-7 opacity-80">
            Not sure which platform fits? Tell us your goal and we will recommend one, with a
            clear plan and quote.
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

          <p className="mt-6 text-sm opacity-70">
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a> ·{" "}
            <Link href="/#services" className="underline underline-offset-4">
              See all services
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}