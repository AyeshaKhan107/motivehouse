// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useRef, useState } from "react";
// import { ArrowRight, ChevronDown, Globe, Menu, Palette, Sparkles, X } from "lucide-react";

// /* Main links shown directly in the header */
// const mainLinks = [
//   { label: "Home", href: "/" },
//   { label: "Social Media Management", href: "/services/social-media-management" },
//   { label: "Web Design", href: "/services/web-design" },
//   { label: "Bookkeeping", href: "/services/book-keeping" },
  
// ];

// const otherServices = [
//   { title: "SEO Services", description: "Improve visibility on search engines.", href: "/services/seo", icon: Globe },
//   { title: "Graphic Design", description: "Visuals that make your brand stand out.", href: "/services/graphic-design", icon: Palette },
//   { title: "Tax & Accounting", description: "Support for your business finances.", href: "/services/tax-accounting", icon: Sparkles },
// ];
// const Links = [
//   { label: "About Us", href: "/about" },
// ];


// function LogoMark() {
//   return (
//     <svg
//       viewBox="0 0 48 48"
//       aria-hidden="true"
//       className="h-10 w-10 shrink-0 overflow-visible transition-transform duration-500 [transition-timing-function:cubic-bezier(0.3,1.4,0.5,1)] group-hover:-rotate-[8deg] group-hover:scale-110"
//     >
//       <rect x="2" y="2" width="44" height="44" rx="13" fill="#6b1a2b" />

//       <path
//         d="M13 34V16l11 9.5L35 16v18"
//         pathLength={1}
//         strokeDasharray={1}
//         strokeDashoffset={0}
//         strokeWidth={3.4}
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         fill="none"
//         stroke="#f5efe6"
//       />

//       <circle
//         cx="24"
//         cy="31"
//         r="3"
//         fill="none"
//         strokeWidth={1.5}
//         stroke="#f5efe6"
//         className="origin-center animate-[mh-ping_2.4s_ease-out_infinite] [transform-box:fill-box] motion-reduce:animate-none"
//       />

//       <circle cx="24" cy="31" r="2.6" fill="#f5efe6" />
//     </svg>
//   );
// }

// const HEADER_CSS = `
// @keyframes mh-ping{0%{transform:scale(1);opacity:.9}100%{transform:scale(3);opacity:0}}
// @keyframes hdrIn{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:none}}
// @keyframes hdrPop{from{opacity:0;transform:translateY(8px) scale(.97)}to{opacity:1;transform:none}}
// `;

// /*
//   RESPONSIVE MAP (only change from the original):
//   - below 768px (phones)  : hamburger + mobile menu
//   - 768px to 1023px       : full desktop nav, shown as a second row under the logo / button
//   - 1024px and up         : single row; compact spacing at 1024-1279px, original spacing from 1280px
// */
// export function SiteHeader() {
//   const pathname = usePathname();
//   const [open, setOpen] = useState(false);
//   const [otherOpen, setOtherOpen] = useState(false); // mobile accordion
//   const [dd, setDd] = useState(false); // desktop dropdown
//   const [scrolled, setScrolled] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const ddRef = useRef<HTMLDivElement>(null);
//   const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

//   const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/"));
//   const otherActive = otherServices.some((s) => isActive(s.href));

//   const closeMenu = () => {
//     setOpen(false);
//     setOtherOpen(false);
//     setDd(false);
//   };

//   /* close on route change */
//   useEffect(() => { closeMenu(); }, [pathname]);

//   /* if the screen grows past the phone breakpoint, close the mobile menu and release the scroll lock */
//   useEffect(() => {
//     const mq = window.matchMedia("(min-width: 768px)");
//     const onChange = (e: MediaQueryListEvent) => {
//       if (e.matches) {
//         setOpen(false);
//         setOtherOpen(false);
//       }
//     };
//     mq.addEventListener("change", onChange);
//     return () => mq.removeEventListener("change", onChange);
//   }, []);

//   /* scroll state + reading progress */
//   useEffect(() => {
//     let raf = 0;
//     const on = () => {
//       if (raf) return;
//       raf = requestAnimationFrame(() => {
//         raf = 0;
//         const h = document.documentElement;
//         const max = h.scrollHeight - h.clientHeight;
//         setScrolled(h.scrollTop > 8);
//         setProgress(max > 0 ? h.scrollTop / max : 0);
//       });
//     };
//     on();
//     window.addEventListener("scroll", on, { passive: true });
//     return () => window.removeEventListener("scroll", on);
//   }, []);

//   /* lock page scroll while the mobile menu is open */
//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "";
//     return () => { document.body.style.overflow = ""; };
//   }, [open]);

//   /* Escape + click outside close the dropdown */
//   useEffect(() => {
//     const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setDd(false); setOpen(false); } };
//     const onDown = (e: MouseEvent) => { if (ddRef.current && !ddRef.current.contains(e.target as Node)) setDd(false); };
//     document.addEventListener("keydown", onKey);
//     document.addEventListener("mousedown", onDown);
//     return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("mousedown", onDown); };
//   }, []);

//   const enter = () => { if (timer.current) clearTimeout(timer.current); setDd(true); };
//   const leave = () => { timer.current = setTimeout(() => setDd(false), 140); };

//   /* 13px on 1024-1279px so everything fits on one row; original 13.5px from 1280px */
//   const linkCls = (active: boolean) =>
//     `group/link relative whitespace-nowrap py-2 text-[13px] font-medium transition-colors duration-200 xl:text-[13.5px] ${active ? "text-[#8b2332]" : "text-[#1a0b0f] hover:text-[#8b2332]"}`;
//   const underline = (active: boolean) =>
//     `absolute inset-x-0 -bottom-0.5 h-[2px] origin-left rounded-full bg-[#8b2332] transition-transform duration-300 ${active ? "scale-x-100" : "scale-x-0 group-hover/link:scale-x-100"}`;

//   return (
//     <header
//       id="site-header"
//       className={`site-header sticky top-0 z-50 border-b border-black/[0.07] transition-[background-color,box-shadow] duration-300 ${
//         scrolled ? "bg-[#fffdf9]/90 shadow-[0_10px_30px_-20px_rgba(26,11,15,0.45)] backdrop-blur-md" : "bg-[#fffdf9]"
//       }`}
//     >
//       <style>{HEADER_CSS}</style>

//       <div className={`mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 px-5 transition-[padding] duration-300 lg:flex-nowrap lg:px-8 ${scrolled ? "py-2.5" : "py-4"}`}>
//         {/* Footer-style Motive House Logo (unchanged) */}
//         <Link href="/" onClick={closeMenu} aria-label="Motive House home" className="group order-1 inline-flex shrink-0 items-center gap-2.5">
//           <LogoMark />

//           <span className="flex flex-col leading-none">
//             <span className="text-xl font-extrabold tracking-[-0.04em] text-[#6b1a2b]">Motive</span>
//             <span className="mt-1 text-xs font-medium tracking-[0.28em] text-[#6b1a2b]/70">HOUSE</span>
//           </span>
//         </Link>

//         {/* Desktop navigation: visible from 768px. Second row on tablets, centred row item from 1024px */}
//         <nav
//           aria-label="Main navigation"
//           className="hidden items-center justify-center gap-x-7 md:order-3 md:mt-3 md:flex md:w-full md:basis-full md:border-t md:border-black/[0.06] md:pt-2.5 lg:order-2 lg:mt-0 lg:w-auto lg:basis-auto lg:gap-x-[18px] lg:border-0 lg:pt-0 xl:gap-x-7"
//         >
//           {mainLinks.map((link) => {
//             const active = isActive(link.href);
//             return (
//               <Link key={link.label} href={link.href} aria-current={active ? "page" : undefined} className={linkCls(active)}>
//                 {link.label}
//                 <span aria-hidden="true" className={underline(active)} />
//               </Link>
//             );
//           })}

//           {/* Other Services dropdown */}
//           <div ref={ddRef} className="relative" onMouseEnter={enter} onMouseLeave={leave} onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node)) setDd(false); }}>
//             <button
//               type="button"
//               onClick={() => setDd((v) => !v)}
//               aria-haspopup="menu"
//               aria-expanded={dd}
//               aria-controls="other-services-menu"
//               className={`${linkCls(otherActive || dd)} flex items-center gap-1.5`}
//             >
//               Other Services
//               <ChevronDown size={15} className={`transition-transform duration-300 ${dd ? "rotate-180" : ""}`} />
//               <span aria-hidden="true" className={underline(otherActive || dd)} />
//             </button>

//             {dd && (
//               <div id="other-services-menu" role="menu" className="absolute right-0 top-full z-50 w-[380px] max-w-[calc(100vw-2.5rem)] pt-4 [animation:hdrPop_.22s_ease-out_both]">
//                 <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-[#fffdf9] shadow-[0_28px_60px_-24px_rgba(26,11,15,0.45)]">
//                   <span aria-hidden="true" className="absolute -top-1.5 right-10 h-3 w-3 rotate-45 border-l border-t border-black/10 bg-[#fffdf9]" />

//                   <div className="border-b border-black/[0.07] px-5 pb-3 pt-4">
//                     <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8b2332]">More Services</p>
//                   </div>

//                   <div className="p-2">
//                     {otherServices.map((s) => {
//                       const Icon = s.icon;
//                       const active = isActive(s.href);
//                       return (
//                         <Link
//                           key={s.title}
//                           href={s.href}
//                           role="menuitem"
//                           onClick={closeMenu}
//                           className={`group/item flex items-center gap-3.5 rounded-xl p-3 transition-colors duration-200 ${active ? "bg-[#f5eee8]" : "hover:bg-[#f5eee8]"}`}
//                         >
//                           <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#8b2332]/10 text-[#8b2332] transition-all duration-300 group-hover/item:bg-[#8b2332] group-hover/item:text-white">
//                             <Icon size={20} />
//                           </span>
//                           <span className="min-w-0 flex-1">
//                             <span className="block text-sm font-semibold text-[#1a0b0f]">{s.title}</span>
//                             <span className="mt-0.5 block text-xs leading-5 text-black/60">{s.description}</span>
//                           </span>
//                           <ArrowRight size={16} className="shrink-0 -translate-x-2 text-[#8b2332] opacity-0 transition-all duration-300 group-hover/item:translate-x-0 group-hover/item:opacity-100" />
//                         </Link>
//                       );
//                     })}
//                   </div>

//                   <Link href="/servicespage" role="menuitem" onClick={closeMenu} className="flex items-center justify-between border-t border-black/[0.07] bg-[#f5eee8]/60 px-5 py-3.5 text-sm font-semibold text-[#8b2332] transition-colors hover:bg-[#f5eee8] hover:text-[#6f1926]">
//                     View all services <ArrowRight size={15} />
//                   </Link>
//                 </div>
//               </div>
//             )}
//           </div>
//         </nav>

//         {/* Desktop contact button (visible from 768px) */}
//         <Link className="button button-red group hidden shrink-0 items-center gap-2 md:order-2 md:inline-flex lg:order-3" href="mailto:support@motivehouse.co">
//           Let&apos;s Talk <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
//         </Link>

//         {/* Mobile menu button: phones only (below 768px) */}
//         <button
//           type="button"
//           onClick={() => setOpen(!open)}
//           className="order-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/10 transition-colors hover:bg-[#8b2332] hover:text-white md:hidden"
//           aria-label={open ? "Close navigation" : "Open navigation"}
//           aria-expanded={open}
//           aria-controls="mobile-nav"
//         >
//           {open ? <X size={22} /> : <Menu size={22} />}
//         </button>
//       </div>

//       {/* Mobile navigation: phones only */}
//       <div
//         id="mobile-nav"
//         className={`absolute left-0 right-0 top-full overflow-y-auto border-t border-black/10 bg-[#fffdf9] shadow-xl transition-[max-height,opacity] duration-300 md:hidden ${
//           open ? "visible max-h-[calc(100vh-72px)] opacity-100" : "invisible max-h-0 opacity-0"
//         }`}
//       >
//         <nav aria-label="Mobile navigation" className="mx-auto max-w-7xl px-5 py-5">
//           {mainLinks.map((link, i) => {
//             const active = isActive(link.href);
//             return (
//               <Link
//                 key={link.label}
//                 href={link.href}
//                 onClick={closeMenu}
//                 aria-current={active ? "page" : undefined}
//                 className={`flex items-center justify-between border-b border-black/5 py-3.5 text-sm font-medium ${active ? "text-[#8b2332]" : ""} ${open ? "[animation:hdrIn_.4s_both]" : ""}`}
//                 style={{ animationDelay: `${i * 45}ms` }}
//               >
//                 {link.label}
//                 {active && <span className="h-1.5 w-1.5 rounded-full bg-[#8b2332]" />}
//               </Link>
//             );
//           })}

//           {/* Other Services accordion */}
//           <button
//             type="button"
//             onClick={() => setOtherOpen(!otherOpen)}
//             className={`flex w-full items-center justify-between border-b border-black/5 py-3.5 text-sm font-medium ${open ? "[animation:hdrIn_.4s_both]" : ""}`}
//             style={{ animationDelay: `${mainLinks.length * 45}ms` }}
//             aria-expanded={otherOpen}
//           >
//             Other Services
//             <ChevronDown size={17} className={`transition-transform duration-200 ${otherOpen ? "rotate-180" : ""}`} />
//           </button>

//           {otherOpen && (
//             <div className="space-y-1 rounded-xl bg-[#f5eee8] p-3 [animation:hdrPop_.25s_ease-out_both]">
//               {otherServices.map((s) => {
//                 const Icon = s.icon;
//                 return (
//                   <Link key={s.title} href={s.href} onClick={closeMenu} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-white">
//                     <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#8b2332]/10 text-[#8b2332]"><Icon size={16} /></span>
//                     {s.title}
//                   </Link>
//                 );
//               })}
//               <Link href="/servicespages" onClick={closeMenu} className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-[#8b2332]">
//                 View all services →
//               </Link>
//             </div>
//           )}

//           {/* Mobile contact button */}
//           <Link
//             href="/contact"
//             onClick={closeMenu}
//             className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#8b2332] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#6f1926]"
//           >
//             Let&apos;s Talk <ArrowRight size={16} />
//           </Link>
//         </nav>
//       </div>

//       {/* reading progress */}
//       <span aria-hidden="true" className="pointer-events-none absolute bottom-[-1px] left-0 h-[2px] bg-[#8b2332] transition-[width] duration-150" style={{ width: `${progress * 100}%` }} />
//     </header>
//   );
// }







"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Globe, Menu, Palette, Sparkles, X } from "lucide-react";

/* Main links shown directly in the header */
const mainLinks = [
  { label: "Home", href: "/" },
  { label: "Social Media Management", href: "/services/social-media-management" },
  { label: "Web Design", href: "/services/web-design" },
  { label: "Bookkeeping", href: "/services/book-keeping" },
  
];

const otherServices = [
  { title: "SEO Services", description: "Improve visibility on search engines.", href: "/services/seo", icon: Globe },
  { title: "Graphic Design", description: "Visuals that make your brand stand out.", href: "/services/graphic-design", icon: Palette },
  { title: "Tax & Accounting", description: "Support for your business finances.", href: "/services/tax-accounting", icon: Sparkles },
];

/* Shown after "Other Services" */
const Links = [
  { label: "About Us", href: "/about" },
];


function LogoMark() {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className="h-10 w-10 shrink-0 overflow-visible transition-transform duration-500 [transition-timing-function:cubic-bezier(0.3,1.4,0.5,1)] group-hover:-rotate-[8deg] group-hover:scale-110"
    >
      <rect x="2" y="2" width="44" height="44" rx="13" fill="#6b1a2b" />

      <path
        d="M13 34V16l11 9.5L35 16v18"
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={0}
        strokeWidth={3.4}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        stroke="#f5efe6"
      />

      <circle
        cx="24"
        cy="31"
        r="3"
        fill="none"
        strokeWidth={1.5}
        stroke="#f5efe6"
        className="origin-center animate-[mh-ping_2.4s_ease-out_infinite] [transform-box:fill-box] motion-reduce:animate-none"
      />

      <circle cx="24" cy="31" r="2.6" fill="#f5efe6" />
    </svg>
  );
}

const HEADER_CSS = `
@keyframes mh-ping{0%{transform:scale(1);opacity:.9}100%{transform:scale(3);opacity:0}}
@keyframes hdrIn{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:none}}
@keyframes hdrPop{from{opacity:0;transform:translateY(8px) scale(.97)}to{opacity:1;transform:none}}
`;

/*
  RESPONSIVE MAP (only change from the original):
  - below 768px (phones)  : hamburger + mobile menu
  - 768px to 1023px       : full desktop nav, shown as a second row under the logo / button
  - 1024px and up         : single row; compact spacing at 1024-1279px, original spacing from 1280px
*/
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [otherOpen, setOtherOpen] = useState(false); // mobile accordion
  const [dd, setDd] = useState(false); // desktop dropdown
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const ddRef = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/"));
  const otherActive = otherServices.some((s) => isActive(s.href));

  const closeMenu = () => {
    setOpen(false);
    setOtherOpen(false);
    setDd(false);
  };

  /* close on route change */
  useEffect(() => { closeMenu(); }, [pathname]);

  /* if the screen grows past the phone breakpoint, close the mobile menu and release the scroll lock */
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setOpen(false);
        setOtherOpen(false);
      }
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  /* scroll state + reading progress */
  useEffect(() => {
    let raf = 0;
    const on = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        setScrolled(h.scrollTop > 8);
        setProgress(max > 0 ? h.scrollTop / max : 0);
      });
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  /* lock page scroll while the mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  /* Escape + click outside close the dropdown */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setDd(false); setOpen(false); } };
    const onDown = (e: MouseEvent) => { if (ddRef.current && !ddRef.current.contains(e.target as Node)) setDd(false); };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("mousedown", onDown); };
  }, []);

  const enter = () => { if (timer.current) clearTimeout(timer.current); setDd(true); };
  const leave = () => { timer.current = setTimeout(() => setDd(false), 140); };

  /* 13px on 1024-1279px so everything fits on one row; original 13.5px from 1280px */
  const linkCls = (active: boolean) =>
    `group/link relative whitespace-nowrap py-2 text-[13px] font-medium transition-colors duration-200 xl:text-[13.5px] ${active ? "text-[#8b2332]" : "text-[#1a0b0f] hover:text-[#8b2332]"}`;
  const underline = (active: boolean) =>
    `absolute inset-x-0 -bottom-0.5 h-[2px] origin-left rounded-full bg-[#8b2332] transition-transform duration-300 ${active ? "scale-x-100" : "scale-x-0 group-hover/link:scale-x-100"}`;

  return (
    <header
      id="site-header"
      className={`site-header sticky top-0 z-50 border-b border-black/[0.07] transition-[background-color,box-shadow] duration-300 ${
        scrolled ? "bg-[#fffdf9]/90 shadow-[0_10px_30px_-20px_rgba(26,11,15,0.45)] backdrop-blur-md" : "bg-[#fffdf9]"
      }`}
    >
      <style>{HEADER_CSS}</style>

      <div className={`mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 px-5 transition-[padding] duration-300 lg:flex-nowrap lg:px-8 ${scrolled ? "py-2.5" : "py-4"}`}>
        {/* Footer-style Motive House Logo (unchanged) */}
        <Link href="/" onClick={closeMenu} aria-label="Motive House home" className="group order-1 inline-flex shrink-0 items-center gap-2.5">
          <LogoMark />

          <span className="flex flex-col leading-none">
            <span className="text-xl font-extrabold tracking-[-0.04em] text-[#6b1a2b]">Motive</span>
            <span className="mt-1 text-xs font-medium tracking-[0.28em] text-[#6b1a2b]/70">HOUSE</span>
          </span>
        </Link>

        {/* Desktop navigation: visible from 768px. Second row on tablets, centred row item from 1024px */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center justify-center gap-x-7 md:order-3 md:mt-3 md:flex md:w-full md:basis-full md:border-t md:border-black/[0.06] md:pt-2.5 lg:order-2 lg:mt-0 lg:w-auto lg:basis-auto lg:gap-x-[18px] lg:border-0 lg:pt-0 xl:gap-x-7"
        >
          {mainLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link key={link.label} href={link.href} aria-current={active ? "page" : undefined} className={linkCls(active)}>
                {link.label}
                <span aria-hidden="true" className={underline(active)} />
              </Link>
            );
          })}

          {/* Other Services dropdown */}
          <div ref={ddRef} className="relative" onMouseEnter={enter} onMouseLeave={leave} onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node)) setDd(false); }}>
            <button
              type="button"
              onClick={() => setDd((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={dd}
              aria-controls="other-services-menu"
              className={`${linkCls(otherActive || dd)} flex items-center gap-1.5`}
            >
              Other Services
              <ChevronDown size={15} className={`transition-transform duration-300 ${dd ? "rotate-180" : ""}`} />
              <span aria-hidden="true" className={underline(otherActive || dd)} />
            </button>

            {dd && (
              <div id="other-services-menu" role="menu" className="absolute right-0 top-full z-50 w-[380px] max-w-[calc(100vw-2.5rem)] pt-4 [animation:hdrPop_.22s_ease-out_both]">
                <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-[#fffdf9] shadow-[0_28px_60px_-24px_rgba(26,11,15,0.45)]">
                  <span aria-hidden="true" className="absolute -top-1.5 right-10 h-3 w-3 rotate-45 border-l border-t border-black/10 bg-[#fffdf9]" />

                  <div className="border-b border-black/[0.07] px-5 pb-3 pt-4">
                    <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8b2332]">More Services</p>
                  </div>

                  <div className="p-2">
                    {otherServices.map((s) => {
                      const Icon = s.icon;
                      const active = isActive(s.href);
                      return (
                        <Link
                          key={s.title}
                          href={s.href}
                          role="menuitem"
                          onClick={closeMenu}
                          className={`group/item flex items-center gap-3.5 rounded-xl p-3 transition-colors duration-200 ${active ? "bg-[#f5eee8]" : "hover:bg-[#f5eee8]"}`}
                        >
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#8b2332]/10 text-[#8b2332] transition-all duration-300 group-hover/item:bg-[#8b2332] group-hover/item:text-white">
                            <Icon size={20} />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block text-sm font-semibold text-[#1a0b0f]">{s.title}</span>
                            <span className="mt-0.5 block text-xs leading-5 text-black/60">{s.description}</span>
                          </span>
                          <ArrowRight size={16} className="shrink-0 -translate-x-2 text-[#8b2332] opacity-0 transition-all duration-300 group-hover/item:translate-x-0 group-hover/item:opacity-100" />
                        </Link>
                      );
                    })}
                  </div>

                  <Link href="/servicespage" role="menuitem" onClick={closeMenu} className="flex items-center justify-between border-t border-black/[0.07] bg-[#f5eee8]/60 px-5 py-3.5 text-sm font-semibold text-[#8b2332] transition-colors hover:bg-[#f5eee8] hover:text-[#6f1926]">
                    View all services <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* About Us (after Other Services) */}
          {Links.map((link) => {
            const active = isActive(link.href);
            return (
              <Link key={link.label} href={link.href} aria-current={active ? "page" : undefined} className={linkCls(active)}>
                {link.label}
                <span aria-hidden="true" className={underline(active)} />
              </Link>
            );
          })}
        </nav>

        {/* Desktop contact button (visible from 768px) */}
        <Link className="button button-red group hidden shrink-0 items-center gap-2 md:order-2 md:inline-flex lg:order-3" href="mailto:support@motivehouse.co">
          Let&apos;s Talk <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>

        {/* Mobile menu button: phones only (below 768px) */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="order-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/10 transition-colors hover:bg-[#8b2332] hover:text-white md:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile navigation: phones only */}
      <div
        id="mobile-nav"
        className={`absolute left-0 right-0 top-full overflow-y-auto border-t border-black/10 bg-[#fffdf9] shadow-xl transition-[max-height,opacity] duration-300 md:hidden ${
          open ? "visible max-h-[calc(100vh-72px)] opacity-100" : "invisible max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="Mobile navigation" className="mx-auto max-w-7xl px-5 py-5">
          {mainLinks.map((link, i) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                aria-current={active ? "page" : undefined}
                className={`flex items-center justify-between border-b border-black/5 py-3.5 text-sm font-medium ${active ? "text-[#8b2332]" : ""} ${open ? "[animation:hdrIn_.4s_both]" : ""}`}
                style={{ animationDelay: `${i * 45}ms` }}
              >
                {link.label}
                {active && <span className="h-1.5 w-1.5 rounded-full bg-[#8b2332]" />}
              </Link>
            );
          })}

          {/* Other Services accordion */}
          <button
            type="button"
            onClick={() => setOtherOpen(!otherOpen)}
            className={`flex w-full items-center justify-between border-b border-black/5 py-3.5 text-sm font-medium ${open ? "[animation:hdrIn_.4s_both]" : ""}`}
            style={{ animationDelay: `${mainLinks.length * 45}ms` }}
            aria-expanded={otherOpen}
          >
            Other Services
            <ChevronDown size={17} className={`transition-transform duration-200 ${otherOpen ? "rotate-180" : ""}`} />
          </button>

          {otherOpen && (
            <div className="space-y-1 rounded-xl bg-[#f5eee8] p-3 [animation:hdrPop_.25s_ease-out_both]">
              {otherServices.map((s) => {
                const Icon = s.icon;
                return (
                  <Link key={s.title} href={s.href} onClick={closeMenu} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-white">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#8b2332]/10 text-[#8b2332]"><Icon size={16} /></span>
                    {s.title}
                  </Link>
                );
              })}
              <Link href="/servicespages" onClick={closeMenu} className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-[#8b2332]">
                View all services →
              </Link>
            </div>
          )}

          {/* About Us (after Other Services) */}
          {Links.map((link, i) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                aria-current={active ? "page" : undefined}
                className={`flex items-center justify-between border-b border-black/5 py-3.5 text-sm font-medium ${active ? "text-[#8b2332]" : ""} ${open ? "[animation:hdrIn_.4s_both]" : ""}`}
                style={{ animationDelay: `${(mainLinks.length + 1 + i) * 45}ms` }}
              >
                {link.label}
                {active && <span className="h-1.5 w-1.5 rounded-full bg-[#8b2332]" />}
              </Link>
            );
          })}

          {/* Mobile contact button */}
          <Link
            href="/contact"
            onClick={closeMenu}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#8b2332] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#6f1926]"
          >
            Let&apos;s Talk <ArrowRight size={16} />
          </Link>
        </nav>
      </div>

      {/* reading progress */}
      <span aria-hidden="true" className="pointer-events-none absolute bottom-[-1px] left-0 h-[2px] bg-[#8b2332] transition-[width] duration-150" style={{ width: `${progress * 100}%` }} />
    </header>
  );
}