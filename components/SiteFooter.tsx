

"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUp,
  ArrowUpRight,
  Instagram,
  Linkedin,
  Mail,
  Moon,
  Phone,
  Sun,
  Youtube,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Content                                                            */
/* ------------------------------------------------------------------ */
const EMAIL = "support@motivehouse.co";
const PHONE_DISPLAY = "+1 (234) 567 8900";
const PHONE_HREF = "tel:+12345678900";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
 

  
];

const services = [
  { label: "Graphic Design", href: "/services/graphic-design" },
  { label: "Social Media Management", href: "/services/social-media" },
  { label: "Web Design & Development", href: "/#services" },
  { label: "Bookkeeping & Accounting", href: "/services/bookkeeping-accounting" },
  { label: "Tax Preparation & Filing", href: "/services/tax-preparation" },
];

// const socials = [
//   { label: "Instagram", href: "https://www.instagram.com/", Icon: Instagram },
//   { label: "LinkedIn", href: "https://www.linkedin.com/", Icon: Linkedin },
//   { label: "YouTube", href: "https://www.youtube.com/", Icon: Youtube },
// ];

/* ------------------------------------------------------------------ */
/*  COLOURS: maroon + off-white, inverted between the two modes.       */
/*  Replace MAROON / OFFWHITE / INK with your exact site hex codes.    */
/* ------------------------------------------------------------------ */
const MAROON = "#6b1a2b";
const OFFWHITE = "#f5efe6";
const INK = "#1a0b0f"; // very dark maroon, used as the dark background

const FOOTER_CSS = `
/* Dark mode: dark background, light text, off-white accent */
.mh-footer[data-theme="dark"]{
  --mh-bg:${INK}; --mh-text:${OFFWHITE}; --mh-muted:rgba(245,239,230,.62);
  --mh-line:rgba(245,239,230,.12); --mh-surface:rgba(245,239,230,.06);
  --mh-accent:${OFFWHITE}; --mh-accent-ink:${MAROON};
}
/* Light mode: off-white background, maroon text, maroon accent */
.mh-footer[data-theme="light"]{
  --mh-bg:${OFFWHITE}; --mh-text:${MAROON}; --mh-muted:rgba(107,26,43,.68);
  --mh-line:rgba(107,26,43,.16); --mh-surface:rgba(107,26,43,.06);
  --mh-accent:${MAROON}; --mh-accent-ink:${OFFWHITE};
}
@keyframes mh-up{to{transform:translateY(-50%)}}
@keyframes mh-ping{0%{transform:scale(1);opacity:.9}100%{transform:scale(3);opacity:0}}
@keyframes mh-draw{to{stroke-dashoffset:0}}
@keyframes mh-rise{to{opacity:1;transform:none}}
`;

/* Reusable class strings */
const linkCls =
  "relative w-fit pb-0.5 text-sm text-[color:var(--mh-muted)] transition-all duration-300 hover:translate-x-1 hover:text-[color:var(--mh-text)] " +
  "after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-[var(--mh-accent)] after:transition-all after:duration-300 hover:after:w-full";

const headingCls = "mb-1 text-sm font-semibold tracking-tight text-[color:var(--mh-text)]";

/* ------------------------------------------------------------------ */
/*  Logo: an "M" whose valley is a roof, with a spark inside the house */
/* ------------------------------------------------------------------ */
function LogoMark({ inView }: { inView: boolean }) {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className="h-9 w-9 overflow-visible transition-transform duration-500 [transition-timing-function:cubic-bezier(0.3,1.4,0.5,1)] group-hover:-rotate-[8deg] group-hover:scale-110"
    >
      <rect x="2" y="2" width="44" height="44" rx="13" className="fill-[var(--mh-accent)]" />
      <path
        d="M13 34V16l11 9.5L35 16v18"
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={1}
        strokeWidth={3.4}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        className={`stroke-[color:var(--mh-accent-ink)] motion-reduce:[stroke-dashoffset:0] ${
          inView
            ? "animate-[mh-draw_1.1s_0.3s_cubic-bezier(0.6,0,0.2,1)_forwards] motion-reduce:animate-none"
            : ""
        }`}
      />
      <circle
        cx="24"
        cy="31"
        r="3"
        fill="none"
        strokeWidth={1.5}
        className="origin-center animate-[mh-ping_2.4s_ease-out_infinite] stroke-[color:var(--mh-accent-ink)] [transform-box:fill-box] motion-reduce:animate-none"
      />
      <circle cx="24" cy="31" r="2.6" className="fill-[var(--mh-accent-ink)]" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */
export default function SiteFooter() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [progress, setProgress] = useState(0);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  /* Entrance plays once when the footer scrolls into view */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* Scroll progress for the back-to-top ring */
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? Math.min(1, h.scrollTop / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Theme: saved choice > system preference */
  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem("mh-theme");
    } catch {}
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
    } else {
      setTheme(
        window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
      );
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem("mh-theme", next);
    } catch {}
  };

  /* Staggered entrance props */
  const rev = (i: number, cls = "") => ({
    className: `${cls} translate-y-5 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
      inView
        ? "animate-[mh-rise_0.7s_cubic-bezier(0.2,0.7,0.2,1)_forwards] motion-reduce:animate-none"
        : ""
    }`,
    style: { animationDelay: `${0.05 + i * 0.09}s` },
  });

  const C = 2 * Math.PI * 17;

  return (
    <footer
      ref={ref}
      id="top"
      data-theme={theme}
      className="mh-footer relative overflow-hidden bg-[var(--mh-bg)] text-[color:var(--mh-text)] transition-colors duration-500"
    >
      <style>{FOOTER_CSS}</style>

      <div className="relative mx-auto max-w-[1100px] px-5 sm:px-6">
        {/* Slim call to action */}
        <div
          {...rev(
            0,
            "flex flex-wrap items-center justify-between gap-4 border-b border-[color:var(--mh-line)] py-7"
          )}
        >
          <p className="m-0 text-lg font-semibold tracking-tight sm:text-xl">
            Have an idea? Let&apos;s make it matter.
          </p>

          <a
            href={`mailto:${EMAIL}`}
            className="group inline-flex items-center gap-2.5 rounded-full bg-[var(--mh-accent)] py-1.5 pl-4 pr-1.5 text-sm font-semibold text-[color:var(--mh-accent-ink)] transition duration-300 hover:-translate-y-0.5"
          >
            <span>Send Message</span>
            <i className="grid h-7 w-7 place-items-center rounded-full bg-[var(--mh-accent-ink)] text-[color:var(--mh-accent)] transition-transform duration-500 [transition-timing-function:cubic-bezier(0.3,1.4,0.5,1)] group-hover:rotate-45">
              <ArrowUpRight size={15} />
            </i>
          </a>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 gap-8 py-9 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_1.15fr_1.2fr] lg:gap-10">
          {/* Brand */}
          <div {...rev(1, "")}>
            <Link
              href="/"
              aria-label="Motive House home"
              className="group inline-flex items-center gap-2.5"
            >
              <LogoMark inView={inView} />
              <span className="flex flex-col leading-none">
                <b className="text-xl font-extrabold tracking-[-0.04em]">Motive</b>
                <em className="mt-0.5 text-sm font-light not-italic tracking-[0.22em] text-[color:var(--mh-muted)]">
                  House
                </em>
              </span>
            </Link>

            <p className="mb-4 mt-3 max-w-[240px] text-sm leading-6 text-[color:var(--mh-muted)]">
              Independent creative &amp; digital agency. We make ideas matter.
            </p>
{/* 
            <div className="flex gap-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--mh-line)] bg-[var(--mh-surface)] transition duration-300 [transition-timing-function:cubic-bezier(0.3,1.5,0.5,1)] hover:-translate-y-1 hover:border-[color:var(--mh-accent)] hover:bg-[var(--mh-accent)] hover:text-[color:var(--mh-accent-ink)]"
                > */}
                  {/* <Icon size={16} />
                </a>
              ))}
            </div> */}
          </div>

          {/* Quick links */}
          <nav aria-label="Quick links" {...rev(2, "flex flex-col items-start gap-2.5")}>
            <h4 className={headingCls}>Quick Links</h4>
            {quickLinks.map((l) => (
              <Link key={l.label} href={l.href} className={linkCls}>
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Services: vertical slider that moves upward */}
          <nav aria-label="Services" {...rev(3, "")}>
            <h4 className={headingCls}>Services</h4>

            <div className="group/slider relative mt-2 h-[132px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,#000_24%,#000_76%,transparent)] motion-reduce:overflow-y-auto">
              <ul className="m-0 flex list-none animate-[mh-up_16s_linear_infinite] flex-col p-0 group-hover/slider:[animation-play-state:paused] motion-reduce:animate-none">
                {[...services, ...services].map((l, i) => (
                  <li key={`${l.label}-${i}`} aria-hidden={i >= services.length}>
                    <Link
                      href={l.href}
                      tabIndex={i >= services.length ? -1 : 0}
                      className="group/item flex h-11 items-center gap-2 text-sm text-[color:var(--mh-muted)] transition duration-300 hover:translate-x-1 hover:text-[color:var(--mh-text)]"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--mh-accent)] opacity-60 transition-all duration-300 group-hover/item:scale-125 group-hover/item:opacity-100" />
                      <span className="truncate">{l.label}</span>
                      <ArrowUpRight
                        size={13}
                        className="shrink-0 -translate-x-1 opacity-0 transition-all duration-300 group-hover/item:translate-x-0 group-hover/item:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Contact */}
          <div {...rev(4, "flex flex-col items-start gap-2.5")}>
            <h4 className={headingCls}>Contact Us</h4>

            {[
              { href: `mailto:${EMAIL}`, text: EMAIL, Icon: Mail },
              // { href: PHONE_HREF, text: PHONE_DISPLAY, Icon: Phone },
            ].map(({ href, text, Icon }) => (
              <a
                key={text}
                href={href}
                className="group flex items-center gap-2.5 text-sm text-[color:var(--mh-muted)] transition duration-300 hover:translate-x-1 hover:text-[color:var(--mh-text)]"
              >
                <span className="grid h-8 w-8 place-items-center rounded-lg border border-[color:var(--mh-line)] bg-[var(--mh-surface)] text-[color:var(--mh-accent)] transition-colors duration-300 group-hover:bg-[var(--mh-accent)] group-hover:text-[color:var(--mh-accent-ink)]">
                  <Icon size={14} />
                </span>
                {text}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-3 border-t border-[color:var(--mh-line)] py-4 text-xs text-[color:var(--mh-muted)] sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Motive House.</span>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/privacy-policy" className={linkCls}>
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className={linkCls}>
              Terms &amp; Conditions
            </Link>

            {/* Theme toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="grid h-8 w-8 place-items-center rounded-full border border-[color:var(--mh-line)] bg-[var(--mh-surface)] text-[color:var(--mh-text)] transition duration-500 hover:rotate-180 hover:bg-[var(--mh-accent)] hover:text-[color:var(--mh-accent-ink)]"
            >
              {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            </button>

            {/* Back to top + progress ring */}
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="group relative grid h-9 w-9 place-items-center rounded-full text-[color:var(--mh-text)]"
            >
              <svg
                viewBox="0 0 40 40"
                aria-hidden="true"
                className="absolute inset-0 h-full w-full -rotate-90"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="17"
                  fill="none"
                  strokeWidth={2}
                  className="stroke-[color:var(--mh-line)]"
                />
                <circle
                  cx="20"
                  cy="20"
                  r="17"
                  fill="none"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeDasharray={C}
                  strokeDashoffset={C * (1 - progress)}
                  className="stroke-[color:var(--mh-accent)] transition-[stroke-dashoffset] duration-150 ease-linear"
                />
              </svg>
              <ArrowUp
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}