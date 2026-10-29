// "use client";

// import { useCallback, useEffect, useRef, useState } from "react";
// import {
//   ArrowRight, ArrowUpRight, Check, ChevronLeft, ChevronRight, Download, Eye, EyeOff, Moon, Plus, Sun, X,
// } from "lucide-react";

// /* ------------------------------------------------------------------
//    YOUR PORTFOLIO
//    1. Put your project images in /public/portfolio/ and fill `img` below,
//       e.g. img: "/portfolio/project-1.jpg". Until then a generated cover
//       is shown with a small "Sample" tag.
//    2. Put your PDF in /public/portfolio/ and change the file name here.
// ------------------------------------------------------------------- */
// const PORTFOLIO_PDF = "/portfolio/motive-house-portfolio.pdf";
// const EMAIL = "support@motivehouse.co";

// type Work = { t: string; cat: string; year: string; img: string; href?: string };
// const PORTFOLIO: Work[] = [
//   { t: "Project title", cat: "Brand identity", year: "2025", img: "" },
//   { t: "Project title", cat: "Logo design", year: "2025", img: "" },
//   { t: "Project title", cat: "Packaging", year: "2025", img: "" },
//   { t: "Project title", cat: "Social media", year: "2025", img: "" },
//   { t: "Project title", cat: "Print design", year: "2025", img: "" },
//   { t: "Project title", cat: "Advertising", year: "2025", img: "" },
// ];

// /* ------------------------------------------------------------------
//    COLOURS: maroon + off-white + brass, three tones.
// ------------------------------------------------------------------- */
// const CSS = `
// .gd [data-tone="dark"]{--bg:#110c0c;--bg2:#1c1514;--tx:#f5efe6;--mu:rgba(245,239,230,.68);--ln:rgba(245,239,230,.15);--sf:rgba(245,239,230,.05);--ac:#a8283f;--ink:#fff8f0;--br:#d9a85b;--gl:rgba(255,184,104,.26)}
// .gd [data-tone="light"]{--bg:#f7f3ed;--bg2:#efe8de;--tx:#1d1214;--mu:rgba(29,18,20,.68);--ln:rgba(107,26,43,.17);--sf:rgba(107,26,43,.05);--ac:#6b1a2b;--ink:#f7f3ed;--br:#a9772a;--gl:rgba(107,26,43,.14)}
// .gd [data-tone="maroon"]{--bg:#6b1a2b;--bg2:#7d2236;--tx:#f7f3ed;--mu:rgba(247,243,237,.76);--ln:rgba(247,243,237,.22);--sf:rgba(247,243,237,.09);--ac:#f7f3ed;--ink:#6b1a2b;--br:#e3b76a;--gl:rgba(255,184,104,.28)}
// @keyframes rise{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
// @keyframes up{from{transform:translateY(112%)}to{transform:none}}
// @keyframes marq{to{transform:translateX(-50%)}}
// @keyframes marqr{from{transform:translateX(-50%)}to{transform:none}}
// @keyframes spin{to{transform:rotate(360deg)}}
// @keyframes float{50%{transform:translateY(-9px)}}
// @keyframes breathe{0%,100%{opacity:.6;transform:scale(1)}50%{opacity:1;transform:scale(1.08)}}
// @keyframes draw{from{stroke-dashoffset:1}60%,to{stroke-dashoffset:0}}
// @keyframes pulse{0%,100%{transform:scale(.88)}50%{transform:scale(1.08)}}
// @keyframes car{0%,24%{transform:translateX(0)}34%,58%{transform:translateX(-110px)}68%,92%{transform:translateX(-220px)}100%{transform:translateX(0)}}
// @keyframes foldA{0%,100%{transform:scaleX(1)}50%{transform:scaleX(.18)}}
// @keyframes fanL{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(-17deg)}}
// @keyframes fanR{0%,100%{transform:rotate(3deg)}50%{transform:rotate(17deg)}}
// @keyframes iris{from{clip-path:circle(0% at var(--ox,50%) 0%)}to{clip-path:circle(150% at var(--ox,50%) 0%)}}
// @keyframes ping{0%{transform:scale(1);opacity:.7}100%{transform:scale(3);opacity:0}}
// @keyframes pop{from{opacity:0;transform:scale(.6)}to{opacity:1;transform:none}}
// @keyframes sweep{from{transform:translateX(-120%)}to{transform:translateX(220%)}}
// @keyframes wob{0%,100%{transform:rotate(-1.2deg)}50%{transform:rotate(1.2deg)}}
// @keyframes fade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
// @media (prefers-reduced-motion:reduce){.gd *{animation:none!important;transition:none!important}.gd .o0{opacity:1!important}.gd .ln{transform:none!important}.gd .dr{stroke-dashoffset:0!important}}
// .gd :focus-visible{outline:2px solid var(--br);outline-offset:3px}
// .gd ::-webkit-scrollbar{display:none}
// `;

// /* ------------------------------------------------------------------
//    SERVICES (edit freely so it matches what you offer)
// ------------------------------------------------------------------- */
// type SvcId = "logo" | "brand" | "social" | "print" | "packaging" | "ads" | "decks" | "illustration" | "stationery" | "flyers" | "brochures" | "menus" | "events";
// type Svc = { id: SvcId; art?: SvcId; t: string; tag: string; d: string; inc: string[]; fmt: string[]; usa: string[]; tone: "dark" | "maroon" | "light"; span: string };

// const SERVICES: Svc[] = [
//   {
//     id: "logo", t: "Logo Design", tag: "A mark people recognise in one glance.", tone: "maroon", span: "col-span-2 row-span-2",
//     d: "Logos built on your story and audience, drawn as clean vectors so they work at every size, from a favicon to a storefront sign.",
//     inc: ["Discovery brief and reference research", "Multiple concept directions", "Refinement on your chosen direction", "Primary, secondary and icon versions", "Colour, black and reversed versions", "Clear-space and minimum-size rules"],
//     fmt: ["AI", "SVG", "PDF", "PNG", "Illustrator", "Figma"],
//     usa: ["Vector artwork that scales to signage and print", "CMYK and RGB versions of every logo", "Editable source files handed over"],
//   },
//   {
//     id: "brand", t: "Brand Identity", tag: "Everything that makes you look like one company.", tone: "dark", span: "",
//     d: "A complete visual system: colour, type, logo lockups and usage rules, so every touchpoint looks consistent and confident.",
//     inc: ["Colour palette with HEX, RGB and CMYK values", "Typography system and pairings", "Logo lockups and usage rules", "Brand guidelines document", "Icons, patterns and graphic elements", "Stationery and template designs"],
//     fmt: ["PDF guidelines", "AI", "SVG", "Figma", "InDesign"],
//     usa: ["Print-ready colour values for US printers", "Templates your team can edit and reuse", "Guidelines written in plain language"],
//   },
//   {
//     id: "social", t: "Social Media Graphics", tag: "Scroll-stopping, on-brand, every week.", tone: "light", span: "",
//     d: "Consistent post, carousel and story designs that look like you across every platform, with templates your team can keep using.",
//     inc: ["Post and carousel templates", "Story and Reel covers", "Profile and highlight icons", "Launch and seasonal campaign sets", "Ad creatives in platform sizes", "Editable templates for your team"],
//     fmt: ["PNG", "JPG", "MP4 covers", "Figma", "Photoshop"],
//     usa: ["Sizes for Instagram, Facebook, LinkedIn, TikTok and YouTube", "Seasonal US campaign visuals", "Exports optimised for fast loading"],
//   },
//   {
//     id: "print", t: "Print Design", tag: "Ink, paper and details that feel premium.", tone: "dark", span: "col-span-2",
//     d: "Business cards, brochures, flyers, menus and posters, prepared exactly the way a print shop needs them.",
//     inc: ["Business cards and stationery", "Brochures and flyers", "Menus and rack cards", "Posters and banners", "Catalogues and booklets", "Print-ready PDFs with bleed and crop marks"],
//     fmt: ["PDF/X", "InDesign", "Illustrator", "CMYK", "PNG proofs"],
//     usa: ["US sizes: Letter, Tabloid, 3.5 × 2 in business cards", "CMYK with bleed for US print shops", "We follow your printer's exact specifications"],
//   },
//   {
//     id: "packaging", t: "Packaging & Labels", tag: "The first thing a customer actually holds.", tone: "light", span: "",
//     d: "Boxes, pouches, bottles and labels designed on your printer's dieline, so what you approve is what arrives.",
//     inc: ["Box, bag and pouch design", "Product labels and stickers", "Dieline-based layouts", "Mockups for approval", "Print-ready artwork", "Variant systems for flavours and sizes"],
//     fmt: ["PDF", "AI", "Dieline", "3D mockups", "CMYK + spot"],
//     usa: ["Artwork prepared on your printer's dieline", "Material and finish notes for the printer", "CMYK and spot colours where needed"],
//   },
//   {
//     id: "ads", t: "Advertising Creatives", tag: "Campaigns that earn the click.", tone: "maroon", span: "",
//     d: "Banners, ads, flyers and email headers designed as a set, so your message looks the same wherever it appears.",
//     inc: ["Digital banners and display ads", "Social ad sets", "Email headers and newsletters", "Flyers, posters and direct mail", "Landing page graphics", "Seasonal campaign visuals"],
//     fmt: ["PNG", "JPG", "GIF", "PDF", "Figma"],
//     usa: ["Standard ad sizes such as 300×250, 728×90 and 160×600", "Web-optimised exports", "Print versions for local campaigns"],
//   },
//   {
//     id: "decks", t: "Presentations & Pitch Decks", tag: "Slides that make the room lean in.", tone: "dark", span: "",
//     d: "Pitch decks, proposals and company profiles with clear layouts, charts that read at a glance and templates you can edit.",
//     inc: ["Pitch and investor decks", "Sales and proposal decks", "Company profiles and one-pagers", "Reports and infographics", "Charts and data visuals", "Editable master templates"],
//     fmt: ["PowerPoint", "Google Slides", "PDF", "Figma"],
//     usa: ["Letter and 16:9 layouts", "Print-friendly PDF versions", "Master templates for your team"],
//   },
//   {
//     id: "illustration", t: "Illustration & Icons", tag: "Visuals that belong only to you.", tone: "light", span: "",
//     d: "Custom illustrations, icon sets and patterns that give your brand a voice no stock library can match.",
//     inc: ["Custom illustrations", "Icon sets in one consistent style", "Spot illustrations for web and print", "Patterns and textures", "Infographic elements", "Vector delivery for any size"],
//     fmt: ["SVG", "AI", "PNG", "PDF"],
//     usa: ["Original artwork, not stock", "Editable vector source files", "Light and dark versions on request"],
//   },
//   {
//     id: "stationery", art: "brand", t: "Business Cards & Stationery", tag: "A polished first impression, in every detail.", tone: "maroon", span: "",
//     d: "Business cards, letterheads, envelopes and branded stationery designed as one coherent identity system.",
//     inc: ["Business cards and contact cards", "Letterheads and envelopes", "Email signatures", "Compliment slips and folders", "Print-ready source files", "Coordinated brand details"],
//     fmt: ["PDF", "AI", "InDesign", "CMYK", "SVG"],
//     usa: ["Standard US business-card sizing", "Print-ready bleed and colour setup", "Digital and print versions"],
//   },
//   {
//     id: "flyers", art: "ads", t: "Flyers & Posters", tag: "Promotional design that gets noticed.", tone: "dark", span: "",
//     d: "Flyers, posters and banners for launches, events, promotions and campaigns, prepared for print or digital display.",
//     inc: ["Promotional flyers", "Event and campaign posters", "Roll-up and display banners", "Digital and print layouts", "Multiple size adaptations", "Print-ready PDF delivery"],
//     fmt: ["PDF", "AI", "PNG", "JPG", "CMYK"],
//     usa: ["Common US print sizes", "Bleed and crop marks where needed", "Printer-ready export settings"],
//   },
//   {
//     id: "brochures", art: "print", t: "Brochures & Company Profiles", tag: "Your story, clearly and beautifully told.", tone: "light", span: "",
//     d: "Brochures, company profiles and capability statements that make your offer easy to understand and remember.",
//     inc: ["Company profiles and capability sheets", "Bi-fold and tri-fold brochures", "Editorial layout and typography", "Infographics and data visuals", "Digital and print versions", "Editable source files"],
//     fmt: ["PDF", "InDesign", "AI", "Print-ready CMYK"],
//     usa: ["Letter and custom page sizes", "Print-ready pagination and bleed", "Accessible digital PDF exports"],
//   },
//   {
//     id: "menus", art: "decks", t: "Menus, Certificates & Invitations", tag: "Designed for moments worth keeping.", tone: "maroon", span: "",
//     d: "Menus, certificates and invitations tailored to your venue, event or occasion, with a consistent and considered finish.",
//     inc: ["Restaurant and catering menus", "Certificates and awards", "Event and celebration invitations", "Matching table and event stationery", "Digital and print formats", "Revision-ready editable files"],
//     fmt: ["PDF", "AI", "InDesign", "PNG", "JPG"],
//     usa: ["Standard and custom print dimensions", "Digital invitation exports", "Production-ready artwork"],
//   },
// ];

// const LAYERS = [
//   { t: "Brief", d: "We learn your business, audience and goals, and collect references." },
//   { t: "Concepts", d: "Rough directions are explored and shared early, so you can steer." },
//   { t: "Refine", d: "The chosen direction is polished: type, colour, spacing and detail." },
//   { t: "Final files", d: "Print-ready, web-ready and source files are delivered to you." },
// ];

// const MOODS = [
//   { id: "bold", name: "Bold", bg: "#6b1a2b", fg: "#f7f3ed", ac: "#d9a85b", acInk: "#1a0b0f", sw: ["#6b1a2b", "#f7f3ed", "#d9a85b", "#1a0b0f"], ff: '"Arial Black", ui-sans-serif, system-ui, sans-serif', w: 900, ls: "-0.04em", up: true, r: 4, word: "LOUD & CLEAR", line: "Make a statement." },
//   { id: "calm", name: "Calm", bg: "#efe8de", fg: "#3a2622", ac: "#6b1a2b", acInk: "#f7f3ed", sw: ["#efe8de", "#c9b8a6", "#6b1a2b", "#3a2622"], ff: 'Georgia, "Times New Roman", serif', w: 400, ls: "-0.01em", up: false, r: 28, word: "Quietly confident", line: "Simple, warm and clear." },
//   { id: "luxe", name: "Luxe", bg: "#1a0b0f", fg: "#d9a85b", ac: "#d9a85b", acInk: "#1a0b0f", sw: ["#1a0b0f", "#d9a85b", "#f7f3ed", "#6b1a2b"], ff: "Georgia, serif", w: 400, ls: "0.26em", up: true, r: 0, word: "TIMELESS", line: "Refined, rare and lasting." },
//   { id: "play", name: "Playful", bg: "#f2c9cf", fg: "#6b1a2b", ac: "#6b1a2b", acInk: "#f7f3ed", sw: ["#f2c9cf", "#6b1a2b", "#f7f3ed", "#d9a85b"], ff: 'ui-rounded, "Trebuchet MS", system-ui, sans-serif', w: 800, ls: "-0.02em", up: false, r: 999, word: "Hello there!", line: "Friendly, bright and fun." },
// ];

// const ROTATE = ["brands", "logos", "packaging", "posters", "campaigns"];
// const MARQUEE = ["Logo Design", "Brand Identity", "Social Media", "Print", "Packaging", "Advertising", "Presentations", "Illustration"];

// /* ------------------------------------------------------------------
//    Helpers
// ------------------------------------------------------------------- */
// /* ------------------------------------------------------------------
//    REAL PHOTOS (free-licence stock from Pexels and Unsplash).
//    Swap any URL for your own file, e.g. "/portfolio/logo.jpg".
//    If a photo cannot load, the animated artwork shows instead.
// ------------------------------------------------------------------- */
// const PX = (path: string) => `https://images.pexels.com/photos/${path}?auto=compress&cs=tinysrgb&w=1400`;
// const UN = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=85`;

// const PHOTOS: Record<SvcId, string> = {
//   logo: PX("6368907/pexels-photo-6368907.jpeg"),
//   brand: PX("7319185/pexels-photo-7319185.jpeg"),
//   social: UN("photo-1611162617213-7d7a39e9b1d7"),
//   print: PX("17065813/pexels-photo-17065813/free-photo-of-documents.jpeg"),
//   packaging: UN("photo-1607082348824-0a96f2a4b9da"),
//   ads: UN("photo-1460925895917-afdab827c52f"),
//   decks: PX("9316/notebook-office-writing-table.jpg"),
//   illustration: PX("28182660/pexels-photo-28182660/free-photo-of-books-documents-graphic-tablet-on-top.jpeg"),
//   stationery: PX("7319182/pexels-photo-7319182.jpeg"),
//   flyers: UN("photo-1558655146-9f40138edfeb"),
//   brochures: PX("158771/notebook-pen-table-blank-158771.jpeg"),
//   menus: UN("photo-1495474472287-4d71bcdd2085"),
//   events: UN("photo-1511795409834-ef04bbd61622"),
// };

// /* Cover photos for portfolio cards without a project image */
// const COVERS = [
//   PX("6368907/pexels-photo-6368907.jpeg"),
//   PX("7319185/pexels-photo-7319185.jpeg"),
//   PX("28182660/pexels-photo-28182660/free-photo-of-books-documents-graphic-tablet-on-top.jpeg"),
//   PX("7319182/pexels-photo-7319182.jpeg"),
//   PX("17065813/pexels-photo-17065813/free-photo-of-documents.jpeg"),
//   PX("9316/notebook-office-writing-table.jpg"),
// ];

// function Photo({ src, alt, fallback, overlay = true }: { src: string; alt: string; fallback: React.ReactNode; overlay?: boolean }) {
//   const [bad, setBad] = useState(false);
//   const [ok, setOk] = useState(false);
//   if (!src || bad) return <>{fallback}</>;
//   return (
//     <>
//       <img src={src} alt={alt} loading="lazy" draggable={false} onLoad={() => setOk(true)} onError={() => setBad(true)} className={`absolute inset-0 h-full w-full object-cover saturate-[.92] contrast-[1.04] transition-opacity duration-700 ${ok ? "opacity-100" : "opacity-0"}`} />
//       {overlay && ok && <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-[#6b1a2b]/25" />}
//     </>
//   );
// }

// function useInView<T extends HTMLElement>(th = 0.15) {
//   const ref = useRef<T>(null);
//   const [seen, setSeen] = useState(false);
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: th });
//     io.observe(el);
//     return () => io.disconnect();
//   }, [th]);
//   return [ref, seen] as const;
// }
// function R({ delay = 0, className = "", children }: { delay?: number; className?: string; children: React.ReactNode }) {
//   const [ref, seen] = useInView<HTMLDivElement>(0.12);
//   return (
//     <div ref={ref} className={`o0 opacity-0 ${seen ? "[animation:rise_.8s_cubic-bezier(.2,.7,.2,1)_forwards]" : ""} ${className}`} style={{ animationDelay: `${delay}s` }}>
//       {children}
//     </div>
//   );
// }

// const h2 = "m-0 text-[clamp(2rem,4.6vw,3.4rem)] font-extrabold leading-[1.04] tracking-[-0.04em]";
// const eyebrow = "mb-4 text-xs font-semibold tracking-[0.14em] text-[color:var(--br)]";
// const btn = "group inline-flex items-center gap-2.5 rounded-full bg-[var(--ac)] py-1.5 pl-5 pr-1.5 text-sm font-semibold text-[color:var(--ink)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-12px_var(--ac)]";
// const dot = "grid h-8 w-8 place-items-center rounded-full bg-[var(--ink)] text-[color:var(--ac)] transition-transform duration-500 group-hover:rotate-45";
// const ghost = "inline-flex items-center gap-2 rounded-full border border-[color:var(--ln)] px-5 py-2.5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 hover:border-[color:var(--br)] hover:bg-[var(--sf)]";

// /* ------------------------------------------------------------------
//    Service artwork (animated, reused for tiles and detail panels)
// ------------------------------------------------------------------- */
// function Art({ id, uid }: { id: SvcId; uid: string }) {
//   const ln = "stroke-[color:var(--ln)]";
//   const ac = "stroke-[color:var(--ac)]";
//   const fa = "fill-[var(--ac)]";
//   const fb = "fill-[var(--br)]";
//   const ft = "fill-[var(--tx)]";
//   const box = "[transform-box:fill-box]";
//   return (
//     <svg viewBox="0 0 400 300" className="h-full w-full" aria-hidden="true">
//       {id === "logo" && (
//         <>
//           <g className="[transform-origin:200px_150px] [animation:spin_40s_linear_infinite]"><circle cx="200" cy="150" r="124" fill="none" strokeWidth="1.5" strokeDasharray="2 8" className="stroke-[color:var(--mu)]" /></g>
//           <circle cx="200" cy="150" r="88" fill="none" strokeWidth="1" className={ln} />
//           <path d="M200 14V286M64 150H336" strokeWidth="1" className={ln} />
//           <g transform="translate(80 25) scale(5)">
//             <path d="M13 34V16l11 9.5L35 16v18" pathLength={1} strokeDasharray={1} strokeDashoffset={1} fill="none" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className={`dr ${ac} [animation:draw_3s_ease-in-out_infinite_alternate]`} />
//             {[[13, 34], [13, 16], [24, 25.5], [35, 16], [35, 34]].map(([x, y]) => <rect key={`${x}${y}`} x={x - 1} y={y - 1} width="2" height="2" strokeWidth=".4" className="fill-[var(--bg)] stroke-[color:var(--br)]" />)}
//             <path d="M24 25.5V19M24 25.5V32" strokeWidth=".35" className="stroke-[color:var(--br)]" />
//             <circle cx="24" cy="31" r="1.5" className={`${fb} origin-center ${box} [animation:pulse_2s_ease-in-out_infinite]`} />
//           </g>
//         </>
//       )}

//       {id === "brand" && (
//         <>
//           {[[84, "fa"], [146, "fb"], [208, "ft"], [270, "ln"]].map(([x, c], i) => (
//             <circle key={String(x)} cx={Number(x)} cy="82" r="27" className={`${c === "fa" ? fa : c === "fb" ? fb : c === "ft" ? ft : "fill-[var(--ln)]"} origin-center ${box} [animation:pulse_3s_ease-in-out_infinite]`} style={{ animationDelay: `${i * 0.35}s` }} />
//           ))}
//           <text x="52" y="226" fontSize="104" fontWeight="800" className={ft} style={{ letterSpacing: "-4px" }}>Aa</text>
//           {[176, 196, 216, 236].map((y, i) => <rect key={y} x="214" y={y} width={120 - i * 14} height="8" rx="4" className={`${ft} ${box} origin-left [animation:pulse_3s_ease-in-out_infinite]`} opacity=".35" style={{ animationDelay: `${i * 0.2}s` }} />)}
//           <rect x="300" y="190" width="56" height="56" rx="14" className={fa} />
//           <path d="M313 232V210l15 11 15-11v22" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="stroke-[color:var(--ink)]" />
//         </>
//       )}

//       {id === "social" && (
//         <>
//           <defs><clipPath id={`ph-${uid}`}><rect x="146" y="64" width="108" height="168" rx="6" /></clipPath></defs>
//           <rect x="136" y="14" width="128" height="272" rx="24" fill="none" strokeWidth="3" className={ac} />
//           <rect x="178" y="22" width="44" height="8" rx="4" className={fa} opacity=".6" />
//           <circle cx="160" cy="50" r="12" fill="none" strokeWidth="2" strokeDasharray="5 4" className={`${ac} origin-center ${box} [animation:spin_6s_linear_infinite]`} />
//           <rect x="178" y="44" width="44" height="6" rx="3" className={ft} opacity=".4" />
//           <g clipPath={`url(#ph-${uid})`}>
//             <g className="[animation:car_7s_ease-in-out_infinite]">
//               <rect x="146" y="64" width="108" height="108" className={fa} />
//               <circle cx="200" cy="118" r="30" className={fb} />
//               <rect x="256" y="64" width="108" height="108" className={fb} />
//               <path d="M274 160l30-70 30 70z" className={fa} />
//               <rect x="366" y="64" width="108" height="108" className="fill-[var(--tx)]" opacity=".9" />
//               <rect x="384" y="100" width="70" height="10" rx="5" className={fa} />
//               <rect x="384" y="122" width="48" height="10" rx="5" className={fb} />
//             </g>
//           </g>
//           <path d="M168 196c-9-8-9-17 0-17 4 0 6 3 6 3s2-3 6-3c9 0 9 9 0 17l-6 5z" className={`${fa} origin-center ${box} [animation:pulse_1.6s_ease-in-out_infinite]`} />
//           <rect x="196" y="186" width="44" height="6" rx="3" className={ft} opacity=".35" />
//           <rect x="196" y="200" width="30" height="6" rx="3" className={ft} opacity=".22" />
//           <rect x="154" y="226" width="92" height="8" rx="4" className={ft} opacity=".18" />
//         </>
//       )}

//       {id === "print" && (
//         <>
//           {[[40, 40, 1], [360, 40, 2], [40, 260, 3], [360, 260, 4]].map(([x, y, n]) => (
//             <path key={n} d={`M${Number(x) + (n % 2 ? -14 : 14)} ${y}H${Number(x) + (n % 2 ? -4 : 4)}M${x} ${Number(y) + (n > 2 ? 14 : -14)}V${Number(y) + (n > 2 ? 4 : -4)}`} strokeWidth="1.5" className="stroke-[color:var(--mu)]" />
//           ))}
//           {[0, 1, 2].map((i) => (
//             <g key={i} className={`${box} origin-left [animation:foldA_4s_ease-in-out_infinite]`} style={{ animationDelay: `${i * 0.3}s`, transformOrigin: `${70 + i * 62}px 90px` }}>
//               <rect x={70 + i * 62} y="56" width="58" height="128" rx="3" className={i === 1 ? fb : fa} opacity={1 - i * 0.12} />
//               <rect x={80 + i * 62} y="72" width="38" height="6" rx="3" className="fill-[var(--ink)]" opacity=".8" />
//               <rect x={80 + i * 62} y="86" width="26" height="5" rx="2.5" className="fill-[var(--ink)]" opacity=".5" />
//             </g>
//           ))}
//           <g className={`${box} [animation:float_5s_ease-in-out_infinite]`}>
//             <g transform="rotate(-8 280 200)"><rect x="230" y="166" width="120" height="70" rx="5" className={ft} opacity=".92" /><circle cx="252" cy="190" r="9" className={fa} /><rect x="268" y="184" width="60" height="6" rx="3" className={fa} opacity=".7" /><rect x="244" y="212" width="86" height="5" rx="2.5" className={fa} opacity=".35" /></g>
//           </g>
//         </>
//       )}

//       {id === "packaging" && (
//         <g className={`${box} [animation:float_6s_ease-in-out_infinite]`}>
//           <polygon points="200,60 276,98 200,136 124,98" className="fill-[var(--tx)]" opacity=".9" />
//           <polygon points="124,98 200,136 200,236 124,198" className={fa} />
//           <polygon points="200,136 276,98 276,198 200,236" className={fa} opacity=".62" />
//           <polygon points="140,128 188,152 188,188 140,164" className="fill-[var(--ink)]" opacity=".92" />
//           <circle cx="164" cy="152" r="8" className={fb} />
//           <path d="M152 174l36 18" strokeWidth="3" strokeLinecap="round" className={ac} opacity=".7" />
//           <polygon points="200,136 276,98 276,198 200,236" fill="url(#none)" />
//           <rect x="190" y="100" width="40" height="150" className="fill-white opacity-0 [animation:sweep_3.6s_ease-in-out_infinite]" style={{ mixBlendMode: "overlay" }} transform="skewX(-18)" />
//           <path d="M276 70l8 8M92 214l-8-8M300 120h12" strokeWidth="3" strokeLinecap="round" className={`${ac} opacity-60`} />
//         </g>
//       )}

//       {id === "ads" && (
//         <>
//           {[
//             { x: 44, y: 54, w: 140, h: 116, l: "300×250", d: 0 },
//             { x: 44, y: 208, w: 240, h: 34, l: "728×90", d: 0.5 },
//             { x: 312, y: 40, w: 50, h: 200, l: "160×600", d: 1 },
//           ].map((b) => (
//             <g key={b.l} className={`${box} origin-center [animation:pulse_3.4s_ease-in-out_infinite]`} style={{ animationDelay: `${b.d}s` }}>
//               <rect x={b.x} y={b.y} width={b.w} height={b.h} rx="8" className={b.d === 0.5 ? fb : fa} />
//               <rect x={b.x + 12} y={b.y + 12} width={Math.min(b.w - 24, 70)} height="7" rx="3.5" className="fill-[var(--ink)]" opacity=".9" />
//               {b.h > 60 && <rect x={b.x + 12} y={b.y + 26} width={Math.min(b.w - 24, 46)} height="6" rx="3" className="fill-[var(--ink)]" opacity=".55" />}
//               <rect x={b.x + b.w - 52} y={b.y + b.h - 26} width="40" height="16" rx="8" className="fill-[var(--ink)]" />
//               <text x={b.x} y={b.y + b.h + 16} fontSize="10" className="fill-[var(--mu)]">{b.l}</text>
//             </g>
//           ))}
//           <circle cx="250" cy="120" r="5" className={`${fb} origin-center ${box} [animation:ping_2s_ease-out_infinite]`} />
//           <circle cx="250" cy="120" r="5" className={fb} />
//         </>
//       )}

//       {id === "decks" && (
//         <>
//           <g className="[transform-origin:200px_250px] [animation:fanL_4.5s_ease-in-out_infinite]"><rect x="124" y="60" width="152" height="96" rx="8" className="fill-[var(--bg2)] stroke-[color:var(--ln)]" strokeWidth="1.5" /></g>
//           <g className="[transform-origin:200px_250px] [animation:fanR_4.5s_ease-in-out_infinite]"><rect x="124" y="60" width="152" height="96" rx="8" className="fill-[var(--bg2)] stroke-[color:var(--ln)]" strokeWidth="1.5" /></g>
//           <g className={`${box} [animation:float_5s_ease-in-out_infinite]`}>
//             <rect x="124" y="60" width="152" height="96" rx="8" className={fa} />
//             <rect x="140" y="76" width="70" height="9" rx="4.5" className="fill-[var(--ink)]" />
//             <rect x="140" y="92" width="48" height="6" rx="3" className="fill-[var(--ink)]" opacity=".55" />
//             {[0, 1, 2, 3].map((i) => <rect key={i} x={142 + i * 20} y={142 - (14 + i * 9)} width="12" height={14 + i * 9} rx="2" className={`${fb} origin-bottom ${box} [animation:pulse_2.4s_ease-in-out_infinite]`} style={{ animationDelay: `${i * 0.2}s` }} />)}
//             <circle cx="244" cy="112" r="16" fill="none" strokeWidth="6" className="stroke-[color:var(--br)]" strokeDasharray="60 40" />
//           </g>
//           <rect x="130" y="206" width="140" height="8" rx="4" className={ft} opacity=".2" />
//           <rect x="150" y="224" width="100" height="6" rx="3" className={ft} opacity=".12" />
//         </>
//       )}

//       {id === "illustration" && (
//         <>
//           {[
//             { x: 90, y: 86, d: "M0-20a20 20 0 1 0 .01 0z" },
//             { x: 200, y: 86, d: "M0-22L21 16-21 16z" },
//             { x: 310, y: 86, d: "M0-22L6-7 22-7 9 3 14 19 0 10-14 19-9 3-22-7-6-7Z" },
//             { x: 90, y: 200, d: "M0-22L20 0 0 22-20 0Z" },
//             { x: 200, y: 200, d: "M-19-11L0-22 19-11 19 11 0 22-19 11Z" },
//             { x: 310, y: 200, d: "M0-20V20M-20 0H20" },
//           ].map((ic, i) => (
//             <g key={i} transform={`translate(${ic.x} ${ic.y})`}>
//               <rect x="-44" y="-44" width="88" height="88" rx="22" className="fill-[var(--sf)] stroke-[color:var(--ln)]" strokeWidth="1.5" />
//               <path d={ic.d} pathLength={1} strokeDasharray={1} strokeDashoffset={1} fill="none" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className={`dr ${i % 2 ? "stroke-[color:var(--br)]" : ac} [animation:draw_3s_ease-in-out_infinite_alternate]`} style={{ animationDelay: `${i * 0.25}s` }} />
//             </g>
//           ))}
//         </>
//       )}
//     </svg>
//   );
// }

// /* ------------------------------------------------------------------
//    Hero pieces
// ------------------------------------------------------------------- */
// function Swap({ reduce }: { reduce: boolean }) {
//   const [i, setI] = useState(0);
//   useEffect(() => {
//     if (reduce) return;
//     const t = setInterval(() => setI((v) => (v + 1) % ROTATE.length), 2300);
//     return () => clearInterval(t);
//   }, [reduce]);
//   const longest = ROTATE.reduce((a, b) => (b.length > a.length ? b : a));
//   return (
//     <span className="relative inline-block h-[1.14em] overflow-hidden align-bottom text-[color:var(--br)]">
//       <span className="invisible">{longest}</span>
//       <span className="absolute left-0 top-0 flex flex-col transition-transform duration-[800ms] [transition-timing-function:cubic-bezier(.7,0,.2,1)]" style={{ transform: `translateY(-${(i * 100) / ROTATE.length}%)` }}>
//         {ROTATE.map((w) => <span key={w} className="block h-[1.14em] leading-[1.14em]">{w}</span>)}
//       </span>
//     </span>
//   );
// }

// function Construct() {
//   const pts: [number, number][] = [[13, 34], [13, 16], [24, 25.5], [35, 16], [35, 34]];
//   return (
//     <svg viewBox="0 0 600 600" className="h-full w-full" aria-hidden="true">
//       <g className="[transform-origin:300px_300px] [animation:spin_70s_linear_infinite]"><circle cx="300" cy="300" r="284" fill="none" strokeWidth="1.5" strokeDasharray="2 10" className="stroke-[color:var(--mu)]" /></g>
//       {[240, 160, 90].map((r, i) => (
//         <circle key={r} cx="300" cy="300" r={r} fill="none" strokeWidth="1.5" pathLength={1} strokeDasharray={1} strokeDashoffset={1} className={`dr ${i === 1 ? "stroke-[color:var(--br)]" : "stroke-[color:var(--ln)]"} [animation:draw_4s_ease-in-out_infinite_alternate]`} style={{ animationDelay: `${i * 0.5}s` }} />
//       ))}
//       <path d="M300 10V590M10 300H590M92 92L508 508M508 92L92 508" strokeWidth="1" className="stroke-[color:var(--ln)]" />
//       <g transform="translate(96 88) scale(8.5)">
//         <path d="M13 34V16l11 9.5L35 16v18" pathLength={1} strokeDasharray={1} strokeDashoffset={1} fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="dr stroke-[color:var(--tx)] [animation:draw_3.6s_.6s_ease-in-out_infinite_alternate]" />
//         {pts.map(([x, y], i) => <rect key={i} x={x - 0.9} y={y - 0.9} width="1.8" height="1.8" strokeWidth=".3" className="fill-[var(--bg)] stroke-[color:var(--br)]" />)}
//         <path d="M24 25.5V18.5M24 25.5V32.5" strokeWidth=".25" className="stroke-[color:var(--br)]" />
//         <circle cx="24" cy="18.5" r=".55" className="fill-[var(--br)]" /><circle cx="24" cy="32.5" r=".55" className="fill-[var(--br)]" />
//         <circle cx="24" cy="31" r="1.4" className="origin-center fill-[var(--br)] [animation:pulse_2s_ease-in-out_infinite] [transform-box:fill-box]" />
//       </g>
//     </svg>
//   );
// }

// function MarqueeRow({ rev = false, outline = false }: { rev?: boolean; outline?: boolean }) {
//   const row = (
//     <div className="flex shrink-0 items-center">
//       {MARQUEE.map((w) => (
//         <span key={w} className="flex items-center gap-8 whitespace-nowrap pr-8 text-[clamp(2rem,5vw,3.6rem)] font-extrabold leading-none tracking-[-0.03em]">
//           <span className={outline ? "text-transparent [-webkit-text-stroke:1.5px_var(--tx)]" : ""}>{w}</span>
//           <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0 fill-[var(--br)] [animation:spin_9s_linear_infinite]" aria-hidden="true"><path d="M12 0c.7 6.6 4.8 10.7 12 12-7.2 1.3-11.3 5.4-12 12-.7-6.6-4.8-10.7-12-12C7.2 10.7 11.3 6.6 12 0z" /></svg>
//         </span>
//       ))}
//     </div>
//   );
//   return <div className={`flex w-max hover:[animation-play-state:paused] ${rev ? "[animation:marqr_46s_linear_infinite]" : "[animation:marq_40s_linear_infinite]"}`}>{row}{row}</div>;
// }

// /* ------------------------------------------------------------------
//    Process as a layers panel
// ------------------------------------------------------------------- */
// function LayersDemo({ reduce }: { reduce: boolean }) {
//   const [vis, setVis] = useState([false, false, false, false]);
//   const [auto, setAuto] = useState(true);
//   useEffect(() => {
//     if (reduce) { setVis([true, true, true, true]); return; }
//     if (!auto) return;
//     let k = 0;
//     const t = setInterval(() => {
//       k = (k + 1) % 6;
//       setVis([0, 1, 2, 3].map((i) => (k === 0 ? false : i < k)));
//     }, 1500);
//     return () => clearInterval(t);
//   }, [auto, reduce]);
//   const on = (i: number) => `transition-all duration-700 ${vis[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`;
//   return (
//     <div className="grid items-stretch gap-5 lg:grid-cols-[1.3fr_0.7fr]">
//       <div className="relative overflow-hidden rounded-3xl border border-[color:var(--ln)] bg-[var(--bg2)] p-4">
//         <svg viewBox="0 0 400 300" className="h-full w-full" role="img" aria-label="A design being built layer by layer">
//           <defs><pattern id="gdgrid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" fill="none" strokeWidth=".5" className="stroke-[color:var(--ln)]" /></pattern></defs>
//           <rect width="400" height="300" fill="url(#gdgrid)" opacity=".6" />
//           <ellipse cx="200" cy="278" rx="120" ry="8" className="fill-black opacity-30" />
//           <rect x="60" y="24" width="280" height="244" rx="10" className="fill-[var(--bg)] stroke-[color:var(--ln)]" strokeWidth="1.5" />
//           <g className={on(0)}>
//             <path d="M150 120c-30-10-50 25-30 50s60 30 85 5 20-55-5-65-35 0-50 10" fill="none" strokeWidth="1.8" strokeDasharray="5 5" className="stroke-[color:var(--mu)]" />
//             <path d="M82 48L316 52L318 246L84 244Z" fill="none" strokeWidth="1.3" strokeDasharray="4 6" className="stroke-[color:var(--mu)]" />
//             <path d="M96 190c20-6 40 4 60-2M230 88l50 6" fill="none" strokeWidth="1.5" className="stroke-[color:var(--mu)]" />
//           </g>
//           <g className={on(1)}>
//             <circle cx="182" cy="132" r="56" className="fill-[var(--ac)]" opacity=".92" />
//             <rect x="214" y="152" width="94" height="86" rx="10" className="fill-[var(--br)]" opacity=".95" />
//             <polygon points="96,240 148,176 200,240" className="fill-[var(--tx)]" opacity=".16" />
//           </g>
//           <g className={on(2)}>
//             <circle cx="182" cy="132" r="68" fill="none" strokeWidth="1.5" className="stroke-[color:var(--br)]" />
//             <text x="94" y="92" fontSize="42" fontWeight="800" className="fill-[var(--tx)]">Aa</text>
//             <path d="M226 176H294M226 190H274M226 204H288" strokeWidth="3" strokeLinecap="round" className="stroke-[color:var(--ink)]" opacity=".7" />
//             {[0, 1, 2, 3].map((i) => <circle key={i} cx={102 + i * 14} cy="254" r="4" className="fill-[var(--br)]" />)}
//           </g>
//           <g className={on(3)}>
//             <rect x="60" y="24" width="280" height="244" rx="10" fill="none" strokeWidth="2.5" className="stroke-[color:var(--br)]" />
//             {["AI", "SVG", "PDF", "PNG"].map((f, i) => (
//               <g key={f}><rect x={238 + (i % 2) * 48} y={34 + Math.floor(i / 2) * 24} width="42" height="18" rx="9" className="fill-[var(--br)]" /><text x={259 + (i % 2) * 48} y={46.5 + Math.floor(i / 2) * 24} textAnchor="middle" fontSize="9.5" fontWeight="800" className="fill-[var(--bg)]">{f}</text></g>
//             ))}
//             <g className="overflow-hidden"><rect x="60" y="24" width="60" height="244" className="fill-white opacity-[0.1] [animation:sweep_3.2s_ease-in-out_infinite]" transform="skewX(-14)" /></g>
//           </g>
//         </svg>
//       </div>

//       <ul className="m-0 flex list-none flex-col gap-3 p-0" aria-label="Layers">
//         {LAYERS.map((l, i) => (
//           <li key={l.t}>
//             <button type="button" aria-pressed={vis[i]} onClick={() => { setAuto(false); setVis((v) => v.map((x, j) => (j === i ? !x : x))); }} className={`flex w-full items-start gap-3 rounded-2xl border p-4 text-left transition duration-500 ${vis[i] ? "border-[color:var(--br)] bg-[var(--sf)]" : "border-[color:var(--ln)] opacity-60"}`}>
//               <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[var(--ac)] text-[color:var(--ink)]">{vis[i] ? <Eye size={15} /> : <EyeOff size={15} />}</span>
//               <span>
//                 <b className="block text-sm">Layer {i + 1} · {l.t}</b>
//                 <span className="mt-1 block text-xs leading-5 text-[color:var(--mu)]">{l.d}</span>
//               </span>
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// /* ------------------------------------------------------------------
//    Brand mood explorer
// ------------------------------------------------------------------- */
// function MoodExplorer() {
//   const [mi, setMi] = useState(0);
//   const m = MOODS[mi];
//   return (
//     <div>
//       <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Brand mood">
//         {MOODS.map((x, i) => (
//           <button key={x.id} role="tab" aria-selected={mi === i} onClick={() => setMi(i)} className={`rounded-full border px-5 py-2 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 ${mi === i ? "border-[color:var(--ac)] bg-[var(--ac)] text-[color:var(--ink)]" : "border-[color:var(--ln)] text-[color:var(--mu)] hover:border-[color:var(--ac)]"}`}>{x.name}</button>
//         ))}
//       </div>

//       <div className="grid gap-4 md:grid-cols-[1.4fr_1fr]">
//         <div className="relative flex min-h-[320px] flex-col justify-between overflow-hidden p-8 transition-all duration-700 sm:p-10" style={{ background: m.bg, color: m.fg, borderRadius: Math.min(m.r + 20, 36), fontFamily: m.ff }}>
//           <div key={m.id + "a"} className="[animation:fade_.6s_both]">
//             <div className="text-xs opacity-70" style={{ letterSpacing: "0.2em" }}>MOTIVE HOUSE · BRAND MOOD</div>
//             <div className="mt-8 text-[clamp(2rem,5vw,3.4rem)] leading-[1.02]" style={{ fontWeight: m.w, letterSpacing: m.ls, textTransform: m.up ? "uppercase" : "none" }}>{m.word}</div>
//             <p className="mb-0 mt-3 text-base opacity-80">{m.line}</p>
//           </div>
//           <div className="mt-8 flex flex-wrap items-center gap-4">
//             <span className="px-6 py-2.5 text-sm font-semibold transition-all duration-700" style={{ background: m.ac, color: m.acInk, borderRadius: m.r }}>Get started</span>
//             <span className="text-sm underline underline-offset-4 opacity-80">Learn more</span>
//           </div>
//         </div>

//         <div className="grid gap-4">
//           <div className="flex items-center justify-between rounded-3xl border border-[color:var(--ln)] bg-[var(--sf)] p-5">
//             <div key={m.id + "s"} className="flex gap-2">
//               {m.sw.map((c, i) => <span key={c} className="h-11 w-11 rounded-full border border-[color:var(--ln)] [animation:pop_.5s_both]" style={{ background: c, animationDelay: `${i * 0.08}s` }} />)}
//             </div>
//             <span className="text-xs text-[color:var(--mu)]">Palette</span>
//           </div>
//           <div className="flex items-center justify-between rounded-3xl border border-[color:var(--ln)] bg-[var(--sf)] p-5">
//             <span className="text-5xl leading-none transition-all duration-500" style={{ fontFamily: m.ff, fontWeight: m.w }}>Aa</span>
//             <span className="text-xs text-[color:var(--mu)]">Typography</span>
//           </div>
//           <div className="flex items-center justify-between rounded-3xl border border-[color:var(--ln)] bg-[var(--sf)] p-5">
//             <div className="flex h-20 w-32 flex-col justify-between p-3 text-[10px] shadow-lg transition-all duration-700" style={{ background: m.bg, color: m.fg, fontFamily: m.ff, borderRadius: Math.min(m.r, 16) }}>
//               <b style={{ letterSpacing: m.ls }}>Motive House</b>
//               <span className="opacity-70">support@motivehouse.co</span>
//             </div>
//             <span className="text-xs text-[color:var(--mu)]">Business card</span>
//           </div>
//         </div>
//       </div>
//       <p className="mb-0 mt-4 text-xs text-[color:var(--mu)]">Illustrative: one idea, four moods. Colour, type and shape change how a brand feels.</p>
//     </div>
//   );
// }

// /* ------------------------------------------------------------------
//    Sketch to final slider + print guide
// ------------------------------------------------------------------- */
// function CompareSlider() {
//   const [pos, setPos] = useState(50);
//   const touched = useRef(false);
//   const [ref, seen] = useInView<HTMLDivElement>(0.3);
//   useEffect(() => {
//     if (!seen || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
//     const t0 = performance.now();
//     let raf = 0;
//     const step = (t: number) => {
//       if (touched.current) return;
//       const k = (t - t0) / 1000;
//       if (k > 4.4) { setPos(50); return; }
//       setPos(50 + 38 * Math.sin(k * 1.8) * (1 - k / 4.6));
//       raf = requestAnimationFrame(step);
//     };
//     raf = requestAnimationFrame(step);
//     return () => cancelAnimationFrame(raf);
//   }, [seen]);
//   return (
//     <div ref={ref}>
//       <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[color:var(--ln)] bg-[var(--bg2)]">
//         <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" aria-hidden="true">
//           <rect width="400" height="300" className="fill-[var(--ac)]" />
//           <g transform="translate(88 40) scale(5)"><path d="M13 34V16l11 9.5L35 16v18" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="stroke-[color:var(--ink)]" /><circle cx="24" cy="31" r="1.7" className="fill-[var(--br)]" /></g>
//           <text x="200" y="262" textAnchor="middle" fontSize="22" fontWeight="800" className="fill-[var(--ink)]" style={{ letterSpacing: "-0.5px" }}>Motive House</text>
//         </svg>
//         <div className="absolute inset-0 bg-[var(--bg2)]" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
//           <svg viewBox="0 0 400 300" className="h-full w-full" aria-hidden="true">
//             <circle cx="200" cy="140" r="98" fill="none" strokeWidth="1" strokeDasharray="3 5" className="stroke-[color:var(--mu)]" />
//             <path d="M200 20V260M80 140H320" strokeWidth=".8" className="stroke-[color:var(--ln)]" />
//             <g transform="translate(88 40) scale(5)" className="[animation:wob_3s_ease-in-out_infinite] [transform-origin:200px_150px]">
//               <path d="M13.4 33.6L12.8 16.4 24.2 25.9 34.6 15.6 35.2 34.2" fill="none" strokeWidth="1.3" strokeLinecap="round" className="stroke-[color:var(--mu)]" />
//               <path d="M12.6 34.2L13.2 15.8 23.8 25.2 35.3 16.3 34.8 33.8" fill="none" strokeWidth=".9" strokeLinecap="round" strokeDasharray="2 1.4" className="stroke-[color:var(--tx)]" opacity=".6" />
//             </g>
//             <text x="46" y="52" fontSize="12" className="fill-[var(--mu)]">try 1…</text>
//             <text x="300" y="244" fontSize="12" className="fill-[var(--mu)]">too heavy?</text>
//             <path d="M296 238l-18-22" strokeWidth="1" className="stroke-[color:var(--mu)]" />
//           </svg>
//           <span className="absolute left-3 top-3 rounded-full border border-[color:var(--ln)] bg-[var(--bg)] px-3 py-1 text-[11px] font-semibold text-[color:var(--mu)]">Rough sketch</span>
//         </div>
//         <span className="absolute right-3 top-3 rounded-full bg-[var(--bg)] px-3 py-1 text-[11px] font-semibold">Final mark</span>
//         <div aria-hidden="true" className="pointer-events-none absolute bottom-0 top-0 w-px bg-[var(--br)]" style={{ left: `${pos}%` }}>
//           <span className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[var(--br)] text-[color:var(--bg)] shadow-lg"><ChevronLeft size={13} className="-mr-1" /><ChevronRight size={13} className="-ml-1" /></span>
//         </div>
//         <input type="range" min={0} max={100} value={pos} aria-label="Compare the rough sketch with the final logo" onChange={(e) => { touched.current = true; setPos(Number(e.target.value)); }} className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" />
//       </div>
//       <p className="mb-0 mt-3 text-xs text-[color:var(--mu)]">Drag to compare: from first pencil idea to the final vector mark.</p>
//     </div>
//   );
// }

// function PrintGuide() {
//   const [on, setOn] = useState({ bleed: true, trim: true, safe: true, marks: true });
//   const items: [keyof typeof on, string, string][] = [
//     ["bleed", "Bleed", "0.125 in beyond the trim, so colour runs to the edge"],
//     ["trim", "Trim", "3.5 × 2 in, the final cut size of a US business card"],
//     ["safe", "Safe zone", "0.125 in inside the trim, where text and logos stay"],
//     ["marks", "Crop marks", "Tell the cutter exactly where to trim"],
//   ];
//   const show = (k: keyof typeof on) => `transition-opacity duration-500 ${on[k] ? "opacity-100" : "opacity-0"}`;
//   return (
//     <div>
//       <div className="rounded-3xl border border-[color:var(--ln)] bg-[var(--bg2)] p-4 sm:p-6">
//         <svg viewBox="0 0 415 265" className="h-full w-full" role="img" aria-label="Business card with bleed, trim and safe zone">
//           <rect x="20" y="20" width="375" height="225" className="fill-[var(--ac)]" />
//           <g transform="translate(46 54)">
//             <g transform="scale(1.7)"><path d="M13 34V16l11 9.5L35 16v18" transform="translate(-13 -14)" fill="none" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className="stroke-[color:var(--ink)]" /><circle cx="11" cy="17" r="1.4" className="fill-[var(--br)]" /></g>
//             <text x="0" y="96" fontSize="20" fontWeight="800" className="fill-[var(--ink)]">Motive House</text>
//             <rect x="0" y="108" width="120" height="5" rx="2.5" className="fill-[var(--ink)]" opacity=".5" />
//             <rect x="0" y="120" width="84" height="5" rx="2.5" className="fill-[var(--ink)]" opacity=".3" />
//           </g>
//           <g className={show("bleed")}><rect x="20" y="20" width="375" height="225" fill="none" strokeWidth="2" strokeDasharray="6 5" className="stroke-[color:var(--br)]" /></g>
//           <g className={show("trim")}><rect x="32.5" y="32.5" width="350" height="200" fill="none" strokeWidth="2" className="stroke-[color:var(--tx)]" /></g>
//           <g className={show("safe")}><rect x="45" y="45" width="325" height="175" fill="none" strokeWidth="1.6" strokeDasharray="2 5" className="stroke-[color:var(--br)]" /></g>
//           <g className={show("marks")}>
//             {[[32.5, 32.5, -1, -1], [382.5, 32.5, 1, -1], [32.5, 232.5, -1, 1], [382.5, 232.5, 1, 1]].map(([x, y, sx, sy], i) => (
//               <path key={i} d={`M${x + sx * 4} ${y}H${x + sx * 16}M${x} ${y + sy * 4}V${y + sy * 16}`} strokeWidth="1.5" className="stroke-[color:var(--mu)]" />
//             ))}
//           </g>
//         </svg>
//       </div>
//       <ul className="m-0 mt-4 grid list-none gap-2 p-0 sm:grid-cols-2">
//         {items.map(([k, t, d]) => (
//           <li key={k}>
//             <button type="button" role="switch" aria-checked={on[k]} onClick={() => setOn((o) => ({ ...o, [k]: !o[k] }))} className={`flex h-full w-full items-start gap-3 rounded-2xl border p-3 text-left transition ${on[k] ? "border-[color:var(--br)] bg-[var(--sf)]" : "border-[color:var(--ln)] opacity-60"}`}>
//               <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md ${on[k] ? "bg-[var(--br)] text-[color:var(--bg)]" : "border border-[color:var(--ln)]"}`}>{on[k] && <Check size={12} strokeWidth={3.5} />}</span>
//               <span><b className="block text-[13px]">{t}</b><span className="text-[11.5px] leading-5 text-[color:var(--mu)]">{d}</span></span>
//             </button>
//           </li>
//         ))}
//       </ul>
//       <p className="mb-0 mt-3 text-xs text-[color:var(--mu)]">Typical US specifications. We always follow your printer&apos;s exact requirements.</p>
//     </div>
//   );
// }

// /* ------------------------------------------------------------------
//    Portfolio deck
// ------------------------------------------------------------------- */
// function Cover({ i }: { i: number }) {
//   const v = i % 6;
//   return (
//     <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden="true">
//       <rect width="400" height="500" className="fill-[var(--bg)]" />
//       {v === 0 && <g className="[transform-origin:200px_240px] [animation:spin_50s_linear_infinite]"><circle cx="200" cy="240" r="160" className="fill-[var(--ac)]" /><circle cx="200" cy="240" r="104" className="fill-[var(--br)]" /><circle cx="200" cy="240" r="52" className="fill-[var(--bg)]" /><circle cx="200" cy="130" r="22" className="fill-[var(--tx)]" /></g>}
//       {v === 1 && Array.from({ length: 9 }).map((_, k) => <rect key={k} x={-40 + k * 54} y="-60" width="26" height="640" transform="rotate(24 200 250)" className={k % 3 === 0 ? "fill-[var(--br)]" : "fill-[var(--ac)]"} opacity={0.45 + (k % 3) * 0.22} />)}
//       {v === 2 && <>{Array.from({ length: 42 }).map((_, k) => <circle key={k} cx={52 + (k % 6) * 59} cy={70 + Math.floor(k / 6) * 64} r={k === 15 ? 0 : 10} className="fill-[var(--ac)]" opacity={0.35 + (k % 4) * 0.15} />)}<circle cx="170" cy="230" r="70" className="fill-[var(--br)]" /></>}
//       {v === 3 && [0, 1, 2, 3, 4].map((k) => <path key={k} d={`M${30 + k * 14} 430A${170 - k * 14} ${170 - k * 14} 0 0 1 ${370 - k * 14} 430`} fill="none" strokeWidth="16" className={k % 2 ? "stroke-[color:var(--br)]" : "stroke-[color:var(--ac)]"} opacity={1 - k * 0.12} />)}
//       {v === 4 && <><rect x="40" y="70" width="210" height="210" rx="10" className="fill-[var(--ac)]" /><rect x="150" y="170" width="210" height="210" rx="10" className="fill-[var(--br)]" opacity=".92" /><rect x="90" y="300" width="130" height="130" rx="10" className="fill-[var(--tx)]" opacity=".85" /></>}
//       {v === 5 && [0, 1, 2].map((k) => <path key={k} d={`M0 ${290 + k * 60} C100 ${230 + k * 60} 200 ${350 + k * 60} 400 ${270 + k * 60} V500 H0Z`} className={k === 1 ? "fill-[var(--br)]" : "fill-[var(--ac)]"} opacity={0.5 + k * 0.2} />)}
//     </svg>
//   );
// }

// function Deck() {
//   const N = PORTFOLIO.length;
//   const tones = ["maroon", "dark", "light"] as const;
//   const [top, setTop] = useState(0);
//   const [dx, setDx] = useState(0);
//   const [fly, setFly] = useState<0 | 1 | -1>(0);
//   const start = useRef<number | null>(null);
//   const moved = useRef(0);

//   const next = (dir: 1 | -1 = 1) => {
//     if (fly) return;
//     setFly(dir);
//     setTimeout(() => { setTop((t) => (t + 1) % N); setFly(0); setDx(0); }, 420);
//   };
//   const prev = () => setTop((t) => (t - 1 + N) % N);
//   const cur = PORTFOLIO[top];

//   return (
//     <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]" onKeyDown={(e) => { if (e.key === "ArrowRight") next(); if (e.key === "ArrowLeft") prev(); }}>
//       <div className="relative mx-auto h-[470px] w-[min(78vw,340px)] touch-pan-y select-none sm:h-[500px]" tabIndex={0} aria-label="Portfolio cards. Swipe or use arrow keys.">
//         {[3, 2, 1, 0].map((k) => {
//           const idx = (top + k) % N;
//           const w = PORTFOLIO[idx];
//           const isTop = k === 0;
//           const rest = `translateY(${k * 18}px) scale(${1 - k * 0.055}) rotate(${(k % 2 ? 1 : -1) * k * 2.2}deg)`;
//           const style: React.CSSProperties = isTop
//             ? fly
//               ? { transform: `translateX(${fly * 130}%) rotate(${fly * 22}deg)`, opacity: 0, transition: "transform .42s ease-in, opacity .42s" }
//               : start.current !== null
//               ? { transform: `translateX(${dx}px) rotate(${dx / 14}deg)`, transition: "none" }
//               : { transform: rest, transition: "transform .5s cubic-bezier(.2,.8,.2,1)" }
//             : { transform: rest, transition: "transform .5s cubic-bezier(.2,.8,.2,1)" };
//           return (
//             <article
//               key={idx + "-" + k}
//               data-tone={tones[idx % 3]}
//               onPointerDown={isTop ? (e) => { start.current = e.clientX; moved.current = 0; (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId); } : undefined}
//               onPointerMove={isTop ? (e) => { if (start.current !== null) { const d = e.clientX - start.current; moved.current = Math.max(moved.current, Math.abs(d)); setDx(d); } } : undefined}
//               onPointerUp={isTop ? () => { const d = dx; start.current = null; if (Math.abs(d) > 90) next(d > 0 ? 1 : -1); else if (moved.current < 6) next(); else setDx(0); } : undefined}
//               className={`absolute inset-0 overflow-hidden rounded-[28px] border border-[color:var(--ln)] bg-[var(--bg)] text-[color:var(--tx)] shadow-[0_30px_60px_-28px_rgba(0,0,0,.65)] ${isTop ? "cursor-grab active:cursor-grabbing" : ""}`}
//               style={{ ...style, zIndex: 10 - k }}
//             >
//               <Photo src={w.img || COVERS[idx % COVERS.length]} alt={w.t} fallback={<Cover i={idx} />} />
//               <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/70 to-transparent p-5 text-[#f7f3ed]">
//                 <div><div className="text-xs opacity-80">{w.cat}</div><div className="text-lg font-bold tracking-tight">{w.t}</div></div>
//                 {!w.img && <span className="rounded-full bg-white/15 px-2.5 py-1 text-[10px] backdrop-blur">Sample</span>}
//               </div>
//             </article>
//           );
//         })}
//       </div>

//       <div>
//         <div key={top} className="[animation:fade_.5s_both]">
//           <p className={eyebrow}>{cur.cat.toUpperCase()} · {cur.year}</p>
//           <h3 className="m-0 text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">{cur.t}</h3>
//           <p className="mb-0 mt-3 max-w-[420px] text-sm leading-6 text-[color:var(--mu)]">Drag the card away, tap it, or use the arrows to browse the studio&apos;s work.</p>
//         </div>

//         <div className="my-7 flex items-center gap-3">
//           <button type="button" onClick={prev} aria-label="Previous project" className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--ln)] transition hover:bg-[var(--ac)] hover:text-[color:var(--ink)]"><ChevronLeft size={18} /></button>
//           <button type="button" onClick={() => next()} aria-label="Next project" className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--ln)] transition hover:bg-[var(--ac)] hover:text-[color:var(--ink)]"><ChevronRight size={18} /></button>
//           <span className="ml-2 text-sm tabular-nums text-[color:var(--mu)]">{String(top + 1).padStart(2, "0")} / {String(N).padStart(2, "0")}</span>
//         </div>

//         <div className="mb-8 flex gap-2">
//           {PORTFOLIO.map((w, i) => (
//             <button key={i} type="button" onClick={() => setTop(i)} aria-label={`Show project ${i + 1}`} aria-current={i === top} data-tone={tones[i % 3]} className={`h-16 w-12 overflow-hidden rounded-lg border-2 transition duration-300 ${i === top ? "-translate-y-1 border-[color:var(--br)]" : "border-transparent opacity-60 hover:opacity-100"}`}>
//               <span className="relative block h-full w-full"><Photo src={w.img || COVERS[i % COVERS.length]} alt="" overlay={false} fallback={<Cover i={i} />} /></span>
//             </button>
//           ))}
//         </div>

//         <div className="flex flex-wrap gap-3">
//           <a href={PORTFOLIO_PDF} target="_blank" rel="noopener noreferrer" className={ghost}>
//             View Portfolio (PDF)
//             <ArrowUpRight size={15} />
//           </a>
//           <a href={PORTFOLIO_PDF} download="motive-house-portfolio.pdf" className={btn}>
//             Download portfolio (PDF)
//             <i className={dot}><Download size={15} /></i>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ------------------------------------------------------------------
//    Page
// ------------------------------------------------------------------- */
// export default function GraphicDesignPage() {
//   const [theme, setTheme] = useState<"light" | "dark">("dark");
//   const [mounted, setMounted] = useState(false);
//   const [reduce, setReduce] = useState(false);
//   const [open, setOpen] = useState<number | null>(null);
//   const [ox, setOx] = useState(50);
//   const [readP, setReadP] = useState(0);
//   const panel = useRef<HTMLDivElement>(null);
//   const orb = useRef<HTMLDivElement>(null);
//   const heroRef = useRef<HTMLElement>(null);

//   const readTheme = useCallback(() => {
//     try { const s = localStorage.getItem("mh-theme"); if (s === "light" || s === "dark") setTheme(s); } catch {}
//   }, []);
//   useEffect(() => {
//     readTheme();
//     setMounted(true);
//     setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
//     window.addEventListener("mh-theme", readTheme);
//     window.addEventListener("storage", readTheme);
//     return () => { window.removeEventListener("mh-theme", readTheme); window.removeEventListener("storage", readTheme); };
//   }, [readTheme]);
//   const toggle = () => {
//     const n = theme === "dark" ? "light" : "dark";
//     setTheme(n);
//     try { localStorage.setItem("mh-theme", n); } catch {}
//     window.dispatchEvent(new Event("mh-theme"));
//   };
//   const T = (b: "dark" | "light") => (theme === "dark" ? b : b === "dark" ? "light" : "dark");
//   const band = "bg-[var(--bg)] text-[color:var(--tx)] transition-colors duration-500";
//   const sec = "scroll-mt-16 px-5 py-20 sm:px-8 sm:py-28";

//   /* reading progress */
//   useEffect(() => {
//     let raf = 0;
//     const on = () => {
//       if (raf) return;
//       raf = requestAnimationFrame(() => { raf = 0; const h = document.documentElement; const max = h.scrollHeight - h.clientHeight; setReadP(max > 0 ? h.scrollTop / max : 0); });
//     };
//     on();
//     window.addEventListener("scroll", on, { passive: true });
//     return () => window.removeEventListener("scroll", on);
//   }, []);

//   /* hero: smooth cursor orb + parallax */
//   const target = useRef({ x: 0, y: 0, cx: 0, cy: 0 });
//   useEffect(() => {
//     if (reduce) return;
//     let raf = 0;
//     const loop = () => {
//       const t = target.current;
//       t.cx += (t.x - t.cx) * 0.08;
//       t.cy += (t.y - t.cy) * 0.08;
//       if (orb.current) orb.current.style.transform = `translate(${t.cx - 260}px, ${t.cy - 260}px)`;
//       raf = requestAnimationFrame(loop);
//     };
//     raf = requestAnimationFrame(loop);
//     return () => cancelAnimationFrame(raf);
//   }, [reduce]);
//   const onHeroMove = (e: React.MouseEvent<HTMLElement>) => {
//     const r = e.currentTarget.getBoundingClientRect();
//     target.current.x = e.clientX - r.left;
//     target.current.y = e.clientY - r.top;
//     e.currentTarget.style.setProperty("--px", String(((e.clientX - r.left) / r.width - 0.5) * 2));
//     e.currentTarget.style.setProperty("--py", String(((e.clientY - r.top) / r.height - 0.5) * 2));
//   };

//   /* open a service */
//   const openSvc = (i: number, e?: React.MouseEvent) => {
//     if (e) { const r = (e.currentTarget as HTMLElement).getBoundingClientRect(); setOx(Math.round(((r.left + r.width / 2) / window.innerWidth) * 100)); } else setOx(50);
//     setOpen(open === i && e ? null : i);
//   };
//   useEffect(() => {
//     if (open === null) return;
//     const t = setTimeout(() => panel.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" }), 80);
//     return () => clearTimeout(t);
//   }, [open, reduce]);

//   /* tile tilt */
//   const tilt = (e: React.MouseEvent<HTMLElement>) => {
//     const el = e.currentTarget, r = el.getBoundingClientRect();
//     const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
//     el.style.setProperty("--rx", `${(0.5 - y) * 7}deg`);
//     el.style.setProperty("--ry", `${(x - 0.5) * 9}deg`);
//     el.style.setProperty("--mx", `${x * 100}%`);
//     el.style.setProperty("--my", `${y * 100}%`);
//   };
//   const untilt = (e: React.MouseEvent<HTMLElement>) => { e.currentTarget.style.setProperty("--rx", "0deg"); e.currentTarget.style.setProperty("--ry", "0deg"); };

//   /* magnetic CTA */
//   const mag = useRef<HTMLDivElement>(null);
//   const onMag = (e: React.MouseEvent) => {
//     const el = mag.current;
//     if (!el) return;
//     const r = el.getBoundingClientRect();
//     el.style.transform = `translate(${(e.clientX - (r.left + r.width / 2)) * 0.12}px,${(e.clientY - (r.top + r.height / 2)) * 0.12}px)`;
//   };

//   const line = `ln block translate-y-[112%] ${mounted ? "[animation:up_1.1s_cubic-bezier(.2,.8,.2,1)_forwards]" : ""}`;
//   const svc = open !== null ? SERVICES[open] : null;

//   return (
//     <main className="gd relative overflow-x-clip">
//       <style>{CSS}</style>

//       <div aria-hidden="true" className="fixed left-0 top-0 z-50 h-[3px] w-full">
//         <div className="h-full bg-gradient-to-r from-[#a8283f] to-[#d9a85b]" style={{ width: `${readP * 100}%` }} />
//       </div>

//       {/* ================= HERO ================= */}
//       <section ref={heroRef} data-tone={T("dark")} onMouseMove={onHeroMove} className={`${band} relative overflow-hidden`}>
//         <div ref={orb} aria-hidden="true" className="pointer-events-none absolute left-0 top-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,var(--gl),transparent_66%)] blur-[10px]" />
//         <button type="button" onClick={toggle} aria-label="Swap light and dark sections" className="absolute right-5 top-5 z-10 grid h-9 w-9 place-items-center rounded-full border border-[color:var(--ln)] bg-[var(--sf)] transition duration-500 hover:rotate-180 hover:bg-[var(--ac)] sm:right-8">
//           {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
//         </button>

//         <div className="relative mx-auto grid min-h-[88vh] max-w-[1280px] items-center gap-6 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
//           <div className="relative z-10">
//             <p className={`${eyebrow} o0 opacity-0 ${mounted ? "[animation:rise_.8s_.1s_forwards]" : ""}`}>GRAPHIC DESIGN STUDIO · SERVING THE USA</p>
//             <h1 className="m-0 text-[clamp(2.8rem,8.4vw,7rem)] font-extrabold leading-[1] tracking-[-0.05em]">
//               <span className="block overflow-hidden pb-[0.06em]"><span className={line} style={{ animationDelay: ".15s" }}>We design</span></span>
//               <span className="block overflow-hidden pb-[0.06em]"><span className={line} style={{ animationDelay: ".3s" }}><Swap reduce={reduce} /></span></span>
//               <span className="block overflow-hidden pb-[0.06em]"><span className={`${line} text-transparent [-webkit-text-stroke:1.5px_var(--tx)]`} style={{ animationDelay: ".45s" }}>people remember.</span></span>
//             </h1>
//             <p className={`mb-8 mt-7 max-w-[520px] text-base leading-7 text-[color:var(--mu)] sm:text-lg sm:leading-8 o0 opacity-0 ${mounted ? "[animation:rise_.9s_.9s_forwards]" : ""}`}>
//               Logos, brand identities, social media graphics, print, packaging and more, designed with care and delivered as print-ready and web-ready files.
//             </p>
//             <div className={`flex flex-wrap items-center gap-4 o0 opacity-0 ${mounted ? "[animation:rise_.9s_1.1s_forwards]" : ""}`}>
//               <a href="#services" className={btn}>Explore our services<i className={dot}><ArrowRight size={15} /></i></a>
//               <a href={PORTFOLIO_PDF} target="_blank" rel="noopener noreferrer" className={ghost}><ArrowUpRight size={15} />View Portfolio</a>
//             </div>
//             <ul className={`m-0 mt-9 flex list-none flex-wrap gap-2 p-0 o0 opacity-0 ${mounted ? "[animation:rise_.9s_1.3s_forwards]" : ""}`}>
//               {["Illustrator", "Photoshop", "InDesign", "Figma"].map((t) => <li key={t} className="rounded-full border border-[color:var(--ln)] px-3 py-1 text-xs text-[color:var(--mu)]">{t}</li>)}
//             </ul>
//           </div>

//           <div className="relative mx-auto aspect-square w-full max-w-[560px]">
//             <div className="absolute inset-0 transition-transform duration-300 [transform:translate(calc(var(--px,0)*-14px),calc(var(--py,0)*-10px))]"><Construct /></div>
//             <div className="absolute left-[2%] top-[14%] transition-transform duration-300 [transform:translate(calc(var(--px,0)*26px),calc(var(--py,0)*18px))]"><span className="block h-16 w-16 rounded-full bg-[var(--br)] [animation:float_6s_ease-in-out_infinite]" /></div>
//             <div className="absolute bottom-[10%] right-[4%] transition-transform duration-300 [transform:translate(calc(var(--px,0)*-30px),calc(var(--py,0)*-22px))]"><span className="block h-14 w-14 rotate-12 rounded-xl border-2 border-[color:var(--tx)] [animation:float_7s_ease-in-out_infinite]" /></div>
//             <div className="absolute bottom-[26%] left-[6%] transition-transform duration-300 [transform:translate(calc(var(--px,0)*18px),calc(var(--py,0)*-24px))]"><span className="block h-0 w-0 border-x-[22px] border-b-[38px] border-x-transparent border-b-[var(--ac)] [animation:float_5s_ease-in-out_infinite]" /></div>
//           </div>
//         </div>

//         <div aria-hidden="true" className="relative space-y-3 overflow-hidden border-t border-[color:var(--ln)] py-6">
//           <MarqueeRow />
//           <MarqueeRow rev outline />
//         </div>
//       </section>

//       {/* ================= SERVICES ================= */}
//       <section id="services" data-tone={T("light")} className={`${band} ${sec}`}>
//         <div className="mx-auto max-w-[1280px]">
//           <R className="mb-10 flex flex-wrap items-end justify-between gap-6">
//             <div className="max-w-[640px]">
//               <p className={eyebrow}>WHAT WE DESIGN</p>
//               <h2 className={h2}>Twelve disciplines. Click any to open it.</h2>
//             </div>
//             <p className="m-0 flex items-center gap-2 text-sm text-[color:var(--mu)]"><Plus size={16} className="[animation:spin_6s_linear_infinite]" />Tap a tile to open the full service</p>
//           </R>

//           <div className="grid auto-rows-[180px] grid-cols-2 gap-3 [perspective:1200px] sm:auto-rows-[215px] lg:grid-cols-4">
//             {SERVICES.map((s, i) => {
//               const on = open === i;
//               return (
//                 <button
//                   key={s.id}
//                   type="button"
//                   data-tone={s.tone}
//                   aria-expanded={on}
//                   onClick={(e) => openSvc(i, e)}
//                   onMouseMove={tilt}
//                   onMouseLeave={untilt}
//                   className={`group relative overflow-hidden rounded-[26px] border bg-[var(--bg)] text-left text-[color:var(--tx)] transition-[transform,box-shadow,border-color] duration-200 [transform:rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))] hover:shadow-[0_30px_60px_-26px_rgba(0,0,0,.55)] ${s.span} ${on ? "border-[color:var(--br)] shadow-[0_0_0_3px_var(--br)]" : "border-[color:var(--ln)]"}`}
//                 >
//                   <div className="absolute inset-0 overflow-hidden transition-transform duration-700 group-hover:scale-[1.06]"><Photo src={PHOTOS[s.id]} alt={s.t} fallback={<div className="h-full w-full p-3 pb-16"><Art id={s.art ?? s.id as Exclude<SvcId, "stationery" | "flyers" | "brochures" | "menus">} uid={`t-${s.id}`} /></div>} /></div>
//                   <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(240px_circle_at_var(--mx,50%)_var(--my,50%),rgba(255,255,255,.16),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
//                   <span className="absolute left-4 top-4 rounded-full bg-[var(--bg)] px-2.5 py-1 text-xs font-bold tabular-nums text-[color:var(--tx)] backdrop-blur">{String(i + 1).padStart(2, "0")}</span>
//                   <span className={`absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-[var(--ac)] text-[color:var(--ink)] transition-transform duration-500 ${on ? "rotate-45" : "group-hover:rotate-90"}`}><Plus size={16} /></span>
//                   <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)] to-transparent px-4 pb-4 pt-8">
//                     <h3 className="m-0 text-[15px] font-bold leading-tight tracking-tight sm:text-lg">{s.t}</h3>
//                   </div>
//                 </button>
//               );
//             })}
//           </div>

//           {/* the opened service */}
//           {svc && open !== null && (
//             <div ref={panel} className="scroll-mt-20 pt-4">
//               <div key={svc.id} data-tone={T("dark")} style={{ ["--ox" as string]: `${ox}%` }} className="relative overflow-hidden rounded-[34px] border border-[color:var(--ln)] bg-[var(--bg)] text-[color:var(--tx)] [animation:iris_1s_cubic-bezier(.6,0,.2,1)_both]">
//                 <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,var(--gl),transparent_65%)] [animation:breathe_6s_ease-in-out_infinite]" />
//                 <div className="relative flex items-center justify-between gap-4 border-b border-[color:var(--ln)] px-6 py-4 sm:px-9">
//                   <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Jump to a service">
//                     {SERVICES.map((s, i) => (
//                       <button key={s.id} role="tab" aria-selected={i === open} onClick={() => openSvc(i)} className={`rounded-full px-3 py-1 text-xs font-semibold transition ${i === open ? "bg-[var(--ac)] text-[color:var(--ink)]" : "text-[color:var(--mu)] hover:bg-[var(--sf)] hover:text-[color:var(--tx)]"}`}>{String(i + 1).padStart(2, "0")}</button>
//                     ))}
//                   </div>
//                   <button type="button" onClick={() => setOpen(null)} aria-label="Close service" className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--ln)] transition hover:rotate-90 hover:bg-[var(--ac)]"><X size={16} /></button>
//                 </div>

//                 <div className="relative grid gap-10 p-6 sm:p-9 lg:grid-cols-[0.95fr_1.05fr]">
//                   <div className="flex flex-col gap-5">
//                     <div data-tone={svc.tone} className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[color:var(--ln)] bg-[var(--bg)] p-4 text-[color:var(--tx)]">
//                       <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,var(--gl),transparent_65%)]" />
//                       <div className="absolute inset-0 overflow-hidden"><Photo src={PHOTOS[svc.id]} alt={svc.t} fallback={<div className="relative h-full w-full p-4"><Art id={svc.art ?? svc.id as Exclude<SvcId, "stationery" | "flyers" | "brochures" | "menus">} uid={`d-${svc.id}`} /></div>} /></div>
//                     </div>
//                     <div>
//                       <h4 className="mb-2.5 mt-0 text-xs font-semibold tracking-[0.12em] text-[color:var(--br)]">FORMATS AND TOOLS</h4>
//                       <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
//                         {svc.fmt.map((f, i) => <li key={f} className="rounded-full border border-[color:var(--ln)] bg-[var(--sf)] px-3 py-1 text-xs [animation:pop_.5s_both]" style={{ animationDelay: `${0.5 + i * 0.07}s` }}>{f}</li>)}
//                       </ul>
//                     </div>
//                   </div>

//                   <div>
//                     <p className={`${eyebrow} [animation:rise_.7s_.35s_both]`}>{String(open + 1).padStart(2, "0")} / {String(SERVICES.length).padStart(2, "0")}</p>
//                     <h3 className="m-0 text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-[1.04] tracking-[-0.04em] [animation:rise_.7s_.4s_both]">{svc.t}</h3>
//                     <p className="mb-0 mt-3 text-lg font-semibold leading-snug text-[color:var(--br)] [animation:rise_.7s_.5s_both]">{svc.tag}</p>
//                     <p className="mb-7 mt-4 text-[0.95rem] leading-7 text-[color:var(--mu)] [animation:rise_.7s_.6s_both]">{svc.d}</p>

//                     <h4 className="mb-3 mt-0 text-xs font-semibold tracking-[0.12em] text-[color:var(--br)]">WHAT IS INCLUDED</h4>
//                     <ul className="m-0 mb-7 grid list-none gap-2.5 p-0 sm:grid-cols-2">
//                       {svc.inc.map((x, i) => (
//                         <li key={x} className="flex items-start gap-2.5 text-sm leading-5 opacity-0 [animation:fade_.55s_forwards]" style={{ animationDelay: `${0.6 + i * 0.08}s` }}>
//                           <span className="mt-px grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--ac)] text-[color:var(--ink)]"><Check size={12} strokeWidth={3.5} /></span>{x}
//                         </li>
//                       ))}
//                     </ul>

//                     <div className="mb-7 rounded-2xl border border-[color:var(--br)] bg-[var(--sf)] p-5">
//                       <h4 className="mb-2.5 mt-0 text-sm font-bold">Built for US businesses</h4>
//                       <ul className="m-0 grid list-none gap-1.5 p-0">
//                         {svc.usa.map((u) => <li key={u} className="flex items-start gap-2 text-[13px] leading-5 text-[color:var(--mu)]"><span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--br)]" />{u}</li>)}
//                       </ul>
//                     </div>

//                     <div className="flex flex-wrap items-center gap-3">
//                       <a href={`mailto:${EMAIL}?subject=${encodeURIComponent(svc.t + " project")}`} className={btn}>Start a {svc.t.toLowerCase()} project<i className={dot}><ArrowUpRight size={15} /></i></a>
//                       <button type="button" onClick={() => openSvc((open + 1) % SERVICES.length)} className={ghost}>Next service<ChevronRight size={15} /></button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* ================= PROCESS ================= */}
//       <section id="process" data-tone={T("dark")} className={`${band} ${sec}`}>
//         <div className="mx-auto max-w-[1200px]">
//           <R className="mb-10 max-w-[640px]">
//             <p className={eyebrow}>HOW A DESIGN COMES TO LIFE</p>
//             <h2 className={h2}>Built layer by layer.</h2>
//             <p className="mb-0 mt-4 text-base leading-7 text-[color:var(--mu)]">Watch a project grow from first sketch to final files, or switch layers on and off yourself.</p>
//           </R>
//           <LayersDemo reduce={reduce} />
//         </div>
//       </section>

//       {/* ================= MOOD ================= */}
//       <section id="mood" data-tone={T("light")} className={`${band} ${sec}`}>
//         <div className="mx-auto max-w-[1200px]">
//           <R className="mb-10 max-w-[640px]">
//             <p className={eyebrow}>BRAND MOOD EXPLORER</p>
//             <h2 className={h2}>Same idea. A completely different feeling.</h2>
//           </R>
//           <R delay={0.1}><MoodExplorer /></R>
//         </div>
//       </section>

//       {/* ================= CRAFT ================= */}
//       <section id="craft" data-tone={T("dark")} className={`${band} ${sec}`}>
//         <div className="mx-auto max-w-[1200px]">
//           <R className="mb-10 max-w-[680px]">
//             <p className={eyebrow}>THE CRAFT BEHIND THE FILES</p>
//             <h2 className={h2}>From pencil to print-ready.</h2>
//           </R>
//           <div className="grid items-start gap-10 lg:grid-cols-2">
//             <R><CompareSlider /></R>
//             <R delay={0.15}><PrintGuide /></R>
//           </div>
//         </div>
//       </section>

//       {/* ================= PORTFOLIO ================= */}
//       <section id="portfolio" data-tone={T("light")} className={`${band} ${sec}`}>
//         <div className="mx-auto max-w-[1200px]">
//           <R className="mb-12 max-w-[640px]">
//             <p className={eyebrow}>MOTIVE HOUSE PORTFOLIO</p>
//             <h2 className={h2}>Selected work.</h2>
//           </R>
//           <R delay={0.1}><Deck /></R>
//         </div>
//       </section>

//       {/* ================= CTA ================= */}
//       <section id="contact" data-tone={T("dark")} onMouseMove={onMag} onMouseLeave={() => mag.current && (mag.current.style.transform = "")} className={`${band} relative overflow-hidden ${sec}`}>
//         <svg aria-hidden="true" viewBox="0 0 600 600" className="pointer-events-none absolute -right-40 top-1/2 h-[780px] w-[780px] -translate-y-1/2 opacity-60">
//           <g className="[transform-origin:300px_300px] [animation:spin_90s_linear_infinite]">
//             {[290, 220, 150].map((r, i) => <circle key={r} cx="300" cy="300" r={r} fill="none" strokeWidth="1.5" strokeDasharray={i === 1 ? "2 10" : undefined} className="stroke-[color:var(--ln)]" />)}
//             <circle cx="300" cy="10" r="9" className="fill-[var(--br)]" />
//           </g>
//         </svg>
//         <div className="relative mx-auto max-w-[1200px]">
//           <h2 className="m-0 max-w-[820px] text-[clamp(2.4rem,7vw,5.6rem)] font-extrabold leading-[0.98] tracking-[-0.05em]">Let&apos;s design something <span className="text-[color:var(--br)]">unforgettable.</span></h2>
//           <ul className="m-0 mb-9 mt-8 flex list-none flex-wrap gap-2 p-0">
//             {["Source files included", "Print-ready and web-ready exports", "US print sizes", "Clear scope before we start"].map((t) => <li key={t} className="flex items-center gap-2 rounded-full border border-[color:var(--ln)] px-3.5 py-1.5 text-xs text-[color:var(--mu)]"><Check size={13} className="text-[color:var(--br)]" />{t}</li>)}
//           </ul>
//           <div ref={mag} className="inline-flex flex-wrap items-center gap-4 transition-transform duration-200 ease-out">
//             <a href={`mailto:${EMAIL}?subject=Design%20project`} className={`${btn} !py-2 !pl-7 !pr-2 text-base`}>Start a project<i className={`${dot} !h-11 !w-11`}><ArrowUpRight size={20} /></i></a>
//             <a href={PORTFOLIO_PDF} download="motive-house-portfolio.pdf" className={ghost}><Download size={15} />Download portfolio (PDF)</a>
//           </div>
//           <a href={`mailto:${EMAIL}`} className="mb-0 mt-6 block text-sm text-[color:var(--mu)]">{EMAIL}</a>
//         </div>
//       </section>
//     </main>
//   );
// }







"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowRight, ArrowUpRight, Check, ChevronLeft, ChevronRight, Download, Moon, Plus, Sun, X,
} from "lucide-react";
  
const PORTFOLIO_PDF = "/portfolio/motive-house-portfolio.pdf";
const EMAIL = "support@motivehouse.co";

type Work = { t: string; cat: string; year: string; img: string; href?: string };
const PORTFOLIO: Work[] = [
  { t: "Project title", cat: "Brand identity", year: "2025", img: "" },
  { t: "Project title", cat: "Logo design", year: "2025", img: "" },
  { t: "Project title", cat: "Packaging", year: "2025", img: "" },
  { t: "Project title", cat: "Social media", year: "2025", img: "" },
  { t: "Project title", cat: "Print design", year: "2025", img: "" },
  { t: "Project title", cat: "Advertising", year: "2025", img: "" },
];

/* ------------------------------------------------------------------
   COLOURS: maroon + off-white + brass, three tones.
------------------------------------------------------------------- */
const CSS = `
.gd [data-tone="dark"]{--bg:#110c0c;--bg2:#1c1514;--tx:#f5efe6;--mu:rgba(245,239,230,.68);--ln:rgba(245,239,230,.15);--sf:rgba(245,239,230,.05);--ac:#a8283f;--ink:#fff8f0;--br:#d9a85b;--gl:rgba(255,184,104,.26)}
.gd [data-tone="light"]{--bg:#f7f3ed;--bg2:#efe8de;--tx:#1d1214;--mu:rgba(29,18,20,.68);--ln:rgba(107,26,43,.17);--sf:rgba(107,26,43,.05);--ac:#6b1a2b;--ink:#f7f3ed;--br:#a9772a;--gl:rgba(107,26,43,.14)}
.gd [data-tone="maroon"]{--bg:#6b1a2b;--bg2:#7d2236;--tx:#f7f3ed;--mu:rgba(247,243,237,.76);--ln:rgba(247,243,237,.22);--sf:rgba(247,243,237,.09);--ac:#f7f3ed;--ink:#6b1a2b;--br:#e3b76a;--gl:rgba(255,184,104,.28)}
@keyframes rise{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
@keyframes up{from{transform:translateY(112%)}to{transform:none}}
@keyframes marq{to{transform:translateX(-50%)}}
@keyframes marqr{from{transform:translateX(-50%)}to{transform:none}}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes float{50%{transform:translateY(-9px)}}
@keyframes breathe{0%,100%{opacity:.6;transform:scale(1)}50%{opacity:1;transform:scale(1.08)}}
@keyframes draw{from{stroke-dashoffset:1}60%,to{stroke-dashoffset:0}}
@keyframes pulse{0%,100%{transform:scale(.88)}50%{transform:scale(1.08)}}
@keyframes car{0%,24%{transform:translateX(0)}34%,58%{transform:translateX(-110px)}68%,92%{transform:translateX(-220px)}100%{transform:translateX(0)}}
@keyframes foldA{0%,100%{transform:scaleX(1)}50%{transform:scaleX(.18)}}
@keyframes fanL{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(-17deg)}}
@keyframes fanR{0%,100%{transform:rotate(3deg)}50%{transform:rotate(17deg)}}
@keyframes iris{from{clip-path:circle(0% at var(--ox,50%) 0%)}to{clip-path:circle(150% at var(--ox,50%) 0%)}}
@keyframes ping{0%{transform:scale(1);opacity:.7}100%{transform:scale(3);opacity:0}}
@keyframes pop{from{opacity:0;transform:scale(.6)}to{opacity:1;transform:none}}
@keyframes sweep{from{transform:translateX(-120%)}to{transform:translateX(220%)}}
@keyframes wob{0%,100%{transform:rotate(-1.2deg)}50%{transform:rotate(1.2deg)}}
@keyframes fade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
@keyframes barx{from{transform:scaleX(0)}to{transform:scaleX(1)}}
@media (prefers-reduced-motion:reduce){.gd *{animation:none!important;transition:none!important}.gd .o0{opacity:1!important}.gd .ln{transform:none!important}.gd .dr{stroke-dashoffset:0!important}}
.gd :focus-visible{outline:2px solid var(--br);outline-offset:3px}
.gd ::-webkit-scrollbar{display:none}
`;

/* ------------------------------------------------------------------
   SERVICES (edit freely so it matches what you offer)
------------------------------------------------------------------- */
type SvcId = "logo" | "brand" | "social" | "print" | "packaging" | "ads" | "decks" | "illustration" | "stationery" | "flyers" | "brochures" | "menus" | "events";
type Svc = { id: SvcId; art?: SvcId; t: string; tag: string; d: string; inc: string[]; fmt: string[]; usa: string[]; tone: "dark" | "maroon" | "light"; span: string };

const SERVICES: Svc[] = [
  {
    id: "logo", t: "Logo Design", tag: "A mark people recognise in one glance.", tone: "maroon", span: "col-span-2 row-span-2",
    d: "Logos built on your story and audience, drawn as clean vectors so they work at every size, from a favicon to a storefront sign.",
    inc: ["Discovery brief and reference research", "Multiple concept directions", "Refinement on your chosen direction", "Primary, secondary and icon versions", "Colour, black and reversed versions", "Clear-space and minimum-size rules"],
    fmt: ["AI", "SVG", "PDF", "PNG", "Illustrator", "Figma"],
    usa: ["Vector artwork that scales to signage and print", "CMYK and RGB versions of every logo", "Editable source files handed over"],
  },
  {
    id: "brand", t: "Brand Identity", tag: "Everything that makes you look like one company.", tone: "dark", span: "",
    d: "A complete visual system: colour, type, logo lockups and usage rules, so every touchpoint looks consistent and confident.",
    inc: ["Colour palette with HEX, RGB and CMYK values", "Typography system and pairings", "Logo lockups and usage rules", "Brand guidelines document", "Icons, patterns and graphic elements", "Stationery and template designs"],
    fmt: ["PDF guidelines", "AI", "SVG", "Figma", "InDesign"],
    usa: ["Print-ready colour values for US printers", "Templates your team can edit and reuse", "Guidelines written in plain language"],
  },
  {
    id: "social", t: "Social Media Graphics", tag: "Scroll-stopping, on-brand, every week.", tone: "light", span: "",
    d: "Consistent post, carousel and story designs that look like you across every platform, with templates your team can keep using.",
    inc: ["Post and carousel templates", "Story and Reel covers", "Profile and highlight icons", "Launch and seasonal campaign sets", "Ad creatives in platform sizes", "Editable templates for your team"],
    fmt: ["PNG", "JPG", "MP4 covers", "Figma", "Photoshop"],
    usa: ["Sizes for Instagram, Facebook, LinkedIn, TikTok and YouTube", "Seasonal US campaign visuals", "Exports optimised for fast loading"],
  },
  {
    id: "print", t: "Print Design", tag: "Ink, paper and details that feel premium.", tone: "dark", span: "col-span-2",
    d: "Business cards, brochures, flyers, menus and posters, prepared exactly the way a print shop needs them.",
    inc: ["Business cards and stationery", "Brochures and flyers", "Menus and rack cards", "Posters and banners", "Catalogues and booklets", "Print-ready PDFs with bleed and crop marks"],
    fmt: ["PDF/X", "InDesign", "Illustrator", "CMYK", "PNG proofs"],
    usa: ["US sizes: Letter, Tabloid, 3.5 × 2 in business cards", "CMYK with bleed for US print shops", "We follow your printer's exact specifications"],
  },
  {
    id: "packaging", t: "Packaging & Labels", tag: "The first thing a customer actually holds.", tone: "light", span: "",
    d: "Boxes, pouches, bottles and labels designed on your printer's dieline, so what you approve is what arrives.",
    inc: ["Box, bag and pouch design", "Product labels and stickers", "Dieline-based layouts", "Mockups for approval", "Print-ready artwork", "Variant systems for flavours and sizes"],
    fmt: ["PDF", "AI", "Dieline", "3D mockups", "CMYK + spot"],
    usa: ["Artwork prepared on your printer's dieline", "Material and finish notes for the printer", "CMYK and spot colours where needed"],
  },
  {
    id: "ads", t: "Advertising Creatives", tag: "Campaigns that earn the click.", tone: "maroon", span: "",
    d: "Banners, ads, flyers and email headers designed as a set, so your message looks the same wherever it appears.",
    inc: ["Digital banners and display ads", "Social ad sets", "Email headers and newsletters", "Flyers, posters and direct mail", "Landing page graphics", "Seasonal campaign visuals"],
    fmt: ["PNG", "JPG", "GIF", "PDF", "Figma"],
    usa: ["Standard ad sizes such as 300×250, 728×90 and 160×600", "Web-optimised exports", "Print versions for local campaigns"],
  },
  {
    id: "decks", t: "Presentations & Pitch Decks", tag: "Slides that make the room lean in.", tone: "dark", span: "",
    d: "Pitch decks, proposals and company profiles with clear layouts, charts that read at a glance and templates you can edit.",
    inc: ["Pitch and investor decks", "Sales and proposal decks", "Company profiles and one-pagers", "Reports and infographics", "Charts and data visuals", "Editable master templates"],
    fmt: ["PowerPoint", "Google Slides", "PDF", "Figma"],
    usa: ["Letter and 16:9 layouts", "Print-friendly PDF versions", "Master templates for your team"],
  },
  {
    id: "illustration", t: "Illustration & Icons", tag: "Visuals that belong only to you.", tone: "light", span: "",
    d: "Custom illustrations, icon sets and patterns that give your brand a voice no stock library can match.",
    inc: ["Custom illustrations", "Icon sets in one consistent style", "Spot illustrations for web and print", "Patterns and textures", "Infographic elements", "Vector delivery for any size"],
    fmt: ["SVG", "AI", "PNG", "PDF"],
    usa: ["Original artwork, not stock", "Editable vector source files", "Light and dark versions on request"],
  },
  {
    id: "stationery", art: "brand", t: "Business Cards & Stationery", tag: "A polished first impression, in every detail.", tone: "maroon", span: "",
    d: "Business cards, letterheads, envelopes and branded stationery designed as one coherent identity system.",
    inc: ["Business cards and contact cards", "Letterheads and envelopes", "Email signatures", "Compliment slips and folders", "Print-ready source files", "Coordinated brand details"],
    fmt: ["PDF", "AI", "InDesign", "CMYK", "SVG"],
    usa: ["Standard US business-card sizing", "Print-ready bleed and colour setup", "Digital and print versions"],
  },
  {
    id: "flyers", art: "ads", t: "Flyers & Posters", tag: "Promotional design that gets noticed.", tone: "dark", span: "",
    d: "Flyers, posters and banners for launches, events, promotions and campaigns, prepared for print or digital display.",
    inc: ["Promotional flyers", "Event and campaign posters", "Roll-up and display banners", "Digital and print layouts", "Multiple size adaptations", "Print-ready PDF delivery"],
    fmt: ["PDF", "AI", "PNG", "JPG", "CMYK"],
    usa: ["Common US print sizes", "Bleed and crop marks where needed", "Printer-ready export settings"],
  },
  {
    id: "brochures", art: "print", t: "Brochures & Company Profiles", tag: "Your story, clearly and beautifully told.", tone: "light", span: "",
    d: "Brochures, company profiles and capability statements that make your offer easy to understand and remember.",
    inc: ["Company profiles and capability sheets", "Bi-fold and tri-fold brochures", "Editorial layout and typography", "Infographics and data visuals", "Digital and print versions", "Editable source files"],
    fmt: ["PDF", "InDesign", "AI", "Print-ready CMYK"],
    usa: ["Letter and custom page sizes", "Print-ready pagination and bleed", "Accessible digital PDF exports"],
  },
  {
    id: "menus", art: "decks", t: "Menus, Certificates & Invitations", tag: "Designed for moments worth keeping.", tone: "maroon", span: "",
    d: "Menus, certificates and invitations tailored to your venue, event or occasion, with a consistent and considered finish.",
    inc: ["Restaurant and catering menus", "Certificates and awards", "Event and celebration invitations", "Matching table and event stationery", "Digital and print formats", "Revision-ready editable files"],
    fmt: ["PDF", "AI", "InDesign", "PNG", "JPG"],
    usa: ["Standard and custom print dimensions", "Digital invitation exports", "Production-ready artwork"],
  },
];

/* ------------------------------------------------------------------
   REAL PHOTOS (free-licence stock from Pexels and Unsplash).
   One photo per service, chosen to match what the service is.
   Swap any URL for your own file, e.g. "/portfolio/logo.jpg".
   If a photo cannot load, the animated artwork shows instead.
------------------------------------------------------------------- */
const PX = (path: string) => `https://images.pexels.com/photos/${path}?auto=compress&cs=tinysrgb&w=1400`;
const UN = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=85`;

const P_SKETCH = PX("6368907/pexels-photo-6368907.jpeg");                 // sketchbook, pencils, liners
const P_NOTEBOOKS = PX("7319185/pexels-photo-7319185.jpeg");              // branded notebooks + pen
const P_PLANNERS = PX("7319182/pexels-photo-7319182.jpeg");               // planners + pen (stationery)
const P_TABLET = PX("28182660/pexels-photo-28182660/free-photo-of-books-documents-graphic-tablet-on-top.jpeg"); // graphic tablet
const P_DOCS = PX("17065813/pexels-photo-17065813/free-photo-of-documents.jpeg");                              // printed documents
const P_DESK = PX("9316/notebook-office-writing-table.jpg");             // tablet + notebook on a desk
const P_BLANK = PX("158771/notebook-pen-table-blank-158771.jpeg");        // blank notebook + pen

const PHOTOS: Record<SvcId, string> = {
  logo: P_SKETCH,
  brand: P_NOTEBOOKS,
  social: UN("photo-1611162617213-7d7a39e9b1d7"),
  print: P_DOCS,
  packaging: UN("photo-1556228720-195a672e8a03"),
  ads: UN("photo-1557804506-669a67965ba0"),
  decks: UN("photo-1542744173-8e7e53415bb0"),
  illustration: P_TABLET,
  stationery: P_PLANNERS,
  flyers: UN("photo-1558655146-9f40138edfeb"),
  brochures: P_BLANK,
  menus: UN("photo-1414235077428-338989a2e8c0"),
  events: UN("photo-1519167758481-83f550bb49b3"),
};

/* Cover photos for the portfolio deck (used when a project has no `img` yet) */
const COVERS = [P_SKETCH, P_NOTEBOOKS, P_TABLET, P_PLANNERS, P_DOCS, P_DESK];

/* Stages of building a logo, each shown on a real photo with the Motive House mark */
const STAGES = [
  { t: "Brief", d: "We learn your business, audience and goals, and collect references.", img: P_BLANK },
  { t: "Concepts", d: "Rough directions are sketched and shared early, so you can steer.", img: P_SKETCH },
  { t: "Refine", d: "The chosen direction is redrawn: curves, spacing, colour and type.", img: P_TABLET },
  { t: "Final files", d: "Print-ready, web-ready and source files are delivered to you.", img: P_PLANNERS },
];
const STAGE_MS = 4400;

const ROTATE = ["brands", "logos", "packaging", "posters", "campaigns"];
const MARQUEE = ["Logo Design", "Brand Identity", "Social Media", "Print", "Packaging", "Advertising", "Presentations", "Illustration"];

/* ------------------------------------------------------------------
   Helpers
------------------------------------------------------------------- */
function Photo({ src, alt, fallback, overlay = true }: { src: string; alt: string; fallback: React.ReactNode; overlay?: boolean }) {
  const [bad, setBad] = useState(false);
  const [ok, setOk] = useState(false);
  if (!src || bad) return <>{fallback}</>;
  return (
    <>
      <img src={src} alt={alt} loading="lazy" draggable={false} onLoad={() => setOk(true)} onError={() => setBad(true)} className={`absolute inset-0 h-full w-full object-cover saturate-[.92] contrast-[1.04] transition-opacity duration-700 ${ok ? "opacity-100" : "opacity-0"}`} />
      {overlay && ok && <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-[#6b1a2b]/25" />}
    </>
  );
}

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
function R({ delay = 0, className = "", children }: { delay?: number; className?: string; children: React.ReactNode }) {
  const [ref, seen] = useInView<HTMLDivElement>(0.12);
  return (
    <div ref={ref} className={`o0 opacity-0 ${seen ? "[animation:rise_.8s_cubic-bezier(.2,.7,.2,1)_forwards]" : ""} ${className}`} style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  );
}

const h2 = "m-0 text-[clamp(2rem,4.6vw,3.4rem)] font-extrabold leading-[1.04] tracking-[-0.04em]";
const eyebrow = "mb-4 text-xs font-semibold tracking-[0.14em] text-[color:var(--br)]";
const btn = "group inline-flex items-center gap-2.5 rounded-full bg-[var(--ac)] py-1.5 pl-5 pr-1.5 text-sm font-semibold text-[color:var(--ink)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-12px_var(--ac)]";
const dot = "grid h-8 w-8 place-items-center rounded-full bg-[var(--ink)] text-[color:var(--ac)] transition-transform duration-500 group-hover:rotate-45";
const ghost = "inline-flex items-center gap-2 rounded-full border border-[color:var(--ln)] px-5 py-2.5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 hover:border-[color:var(--br)] hover:bg-[var(--sf)]";

/* ------------------------------------------------------------------
   Service artwork (animated). Now used only as a fallback when a photo
   cannot load.
------------------------------------------------------------------- */
function Art({ id, uid }: { id: SvcId; uid: string }) {
  const ln = "stroke-[color:var(--ln)]";
  const ac = "stroke-[color:var(--ac)]";
  const fa = "fill-[var(--ac)]";
  const fb = "fill-[var(--br)]";
  const ft = "fill-[var(--tx)]";
  const box = "[transform-box:fill-box]";
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" aria-hidden="true">
      {id === "logo" && (
        <>
          <g className="[transform-origin:200px_150px] [animation:spin_40s_linear_infinite]"><circle cx="200" cy="150" r="124" fill="none" strokeWidth="1.5" strokeDasharray="2 8" className="stroke-[color:var(--mu)]" /></g>
          <circle cx="200" cy="150" r="88" fill="none" strokeWidth="1" className={ln} />
          <path d="M200 14V286M64 150H336" strokeWidth="1" className={ln} />
          <g transform="translate(80 25) scale(5)">
            <path d="M13 34V16l11 9.5L35 16v18" pathLength={1} strokeDasharray={1} strokeDashoffset={1} fill="none" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className={`dr ${ac} [animation:draw_3s_ease-in-out_infinite_alternate]`} />
            {[[13, 34], [13, 16], [24, 25.5], [35, 16], [35, 34]].map(([x, y]) => <rect key={`${x}${y}`} x={x - 1} y={y - 1} width="2" height="2" strokeWidth=".4" className="fill-[var(--bg)] stroke-[color:var(--br)]" />)}
            <path d="M24 25.5V19M24 25.5V32" strokeWidth=".35" className="stroke-[color:var(--br)]" />
            <circle cx="24" cy="31" r="1.5" className={`${fb} origin-center ${box} [animation:pulse_2s_ease-in-out_infinite]`} />
          </g>
        </>
      )}

      {id === "brand" && (
        <>
          {[[84, "fa"], [146, "fb"], [208, "ft"], [270, "ln"]].map(([x, c], i) => (
            <circle key={String(x)} cx={Number(x)} cy="82" r="27" className={`${c === "fa" ? fa : c === "fb" ? fb : c === "ft" ? ft : "fill-[var(--ln)]"} origin-center ${box} [animation:pulse_3s_ease-in-out_infinite]`} style={{ animationDelay: `${i * 0.35}s` }} />
          ))}
          <text x="52" y="226" fontSize="104" fontWeight="800" className={ft} style={{ letterSpacing: "-4px" }}>Aa</text>
          {[176, 196, 216, 236].map((y, i) => <rect key={y} x="214" y={y} width={120 - i * 14} height="8" rx="4" className={`${ft} ${box} origin-left [animation:pulse_3s_ease-in-out_infinite]`} opacity=".35" style={{ animationDelay: `${i * 0.2}s` }} />)}
          <rect x="300" y="190" width="56" height="56" rx="14" className={fa} />
          <path d="M313 232V210l15 11 15-11v22" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="stroke-[color:var(--ink)]" />
        </>
      )}

      {id === "social" && (
        <>
          <defs><clipPath id={`ph-${uid}`}><rect x="146" y="64" width="108" height="168" rx="6" /></clipPath></defs>
          <rect x="136" y="14" width="128" height="272" rx="24" fill="none" strokeWidth="3" className={ac} />
          <rect x="178" y="22" width="44" height="8" rx="4" className={fa} opacity=".6" />
          <circle cx="160" cy="50" r="12" fill="none" strokeWidth="2" strokeDasharray="5 4" className={`${ac} origin-center ${box} [animation:spin_6s_linear_infinite]`} />
          <rect x="178" y="44" width="44" height="6" rx="3" className={ft} opacity=".4" />
          <g clipPath={`url(#ph-${uid})`}>
            <g className="[animation:car_7s_ease-in-out_infinite]">
              <rect x="146" y="64" width="108" height="108" className={fa} />
              <circle cx="200" cy="118" r="30" className={fb} />
              <rect x="256" y="64" width="108" height="108" className={fb} />
              <path d="M274 160l30-70 30 70z" className={fa} />
              <rect x="366" y="64" width="108" height="108" className="fill-[var(--tx)]" opacity=".9" />
              <rect x="384" y="100" width="70" height="10" rx="5" className={fa} />
              <rect x="384" y="122" width="48" height="10" rx="5" className={fb} />
            </g>
          </g>
          <path d="M168 196c-9-8-9-17 0-17 4 0 6 3 6 3s2-3 6-3c9 0 9 9 0 17l-6 5z" className={`${fa} origin-center ${box} [animation:pulse_1.6s_ease-in-out_infinite]`} />
          <rect x="196" y="186" width="44" height="6" rx="3" className={ft} opacity=".35" />
          <rect x="196" y="200" width="30" height="6" rx="3" className={ft} opacity=".22" />
          <rect x="154" y="226" width="92" height="8" rx="4" className={ft} opacity=".18" />
        </>
      )}

      {id === "print" && (
        <>
          {[[40, 40, 1], [360, 40, 2], [40, 260, 3], [360, 260, 4]].map(([x, y, n]) => (
            <path key={n} d={`M${Number(x) + (n % 2 ? -14 : 14)} ${y}H${Number(x) + (n % 2 ? -4 : 4)}M${x} ${Number(y) + (n > 2 ? 14 : -14)}V${Number(y) + (n > 2 ? 4 : -4)}`} strokeWidth="1.5" className="stroke-[color:var(--mu)]" />
          ))}
          {[0, 1, 2].map((i) => (
            <g key={i} className={`${box} origin-left [animation:foldA_4s_ease-in-out_infinite]`} style={{ animationDelay: `${i * 0.3}s`, transformOrigin: `${70 + i * 62}px 90px` }}>
              <rect x={70 + i * 62} y="56" width="58" height="128" rx="3" className={i === 1 ? fb : fa} opacity={1 - i * 0.12} />
              <rect x={80 + i * 62} y="72" width="38" height="6" rx="3" className="fill-[var(--ink)]" opacity=".8" />
              <rect x={80 + i * 62} y="86" width="26" height="5" rx="2.5" className="fill-[var(--ink)]" opacity=".5" />
            </g>
          ))}
          <g className={`${box} [animation:float_5s_ease-in-out_infinite]`}>
            <g transform="rotate(-8 280 200)"><rect x="230" y="166" width="120" height="70" rx="5" className={ft} opacity=".92" /><circle cx="252" cy="190" r="9" className={fa} /><rect x="268" y="184" width="60" height="6" rx="3" className={fa} opacity=".7" /><rect x="244" y="212" width="86" height="5" rx="2.5" className={fa} opacity=".35" /></g>
          </g>
        </>
      )}

      {id === "packaging" && (
        <g className={`${box} [animation:float_6s_ease-in-out_infinite]`}>
          <polygon points="200,60 276,98 200,136 124,98" className="fill-[var(--tx)]" opacity=".9" />
          <polygon points="124,98 200,136 200,236 124,198" className={fa} />
          <polygon points="200,136 276,98 276,198 200,236" className={fa} opacity=".62" />
          <polygon points="140,128 188,152 188,188 140,164" className="fill-[var(--ink)]" opacity=".92" />
          <circle cx="164" cy="152" r="8" className={fb} />
          <path d="M152 174l36 18" strokeWidth="3" strokeLinecap="round" className={ac} opacity=".7" />
          <rect x="190" y="100" width="40" height="150" className="fill-white opacity-0 [animation:sweep_3.6s_ease-in-out_infinite]" style={{ mixBlendMode: "overlay" }} transform="skewX(-18)" />
          <path d="M276 70l8 8M92 214l-8-8M300 120h12" strokeWidth="3" strokeLinecap="round" className={`${ac} opacity-60`} />
        </g>
      )}

      {id === "ads" && (
        <>
          {[
            { x: 44, y: 54, w: 140, h: 116, l: "300×250", d: 0 },
            { x: 44, y: 208, w: 240, h: 34, l: "728×90", d: 0.5 },
            { x: 312, y: 40, w: 50, h: 200, l: "160×600", d: 1 },
          ].map((b) => (
            <g key={b.l} className={`${box} origin-center [animation:pulse_3.4s_ease-in-out_infinite]`} style={{ animationDelay: `${b.d}s` }}>
              <rect x={b.x} y={b.y} width={b.w} height={b.h} rx="8" className={b.d === 0.5 ? fb : fa} />
              <rect x={b.x + 12} y={b.y + 12} width={Math.min(b.w - 24, 70)} height="7" rx="3.5" className="fill-[var(--ink)]" opacity=".9" />
              {b.h > 60 && <rect x={b.x + 12} y={b.y + 26} width={Math.min(b.w - 24, 46)} height="6" rx="3" className="fill-[var(--ink)]" opacity=".55" />}
              <rect x={b.x + b.w - 52} y={b.y + b.h - 26} width="40" height="16" rx="8" className="fill-[var(--ink)]" />
              <text x={b.x} y={b.y + b.h + 16} fontSize="10" className="fill-[var(--mu)]">{b.l}</text>
            </g>
          ))}
          <circle cx="250" cy="120" r="5" className={`${fb} origin-center ${box} [animation:ping_2s_ease-out_infinite]`} />
          <circle cx="250" cy="120" r="5" className={fb} />
        </>
      )}

      {id === "decks" && (
        <>
          <g className="[transform-origin:200px_250px] [animation:fanL_4.5s_ease-in-out_infinite]"><rect x="124" y="60" width="152" height="96" rx="8" className="fill-[var(--bg2)] stroke-[color:var(--ln)]" strokeWidth="1.5" /></g>
          <g className="[transform-origin:200px_250px] [animation:fanR_4.5s_ease-in-out_infinite]"><rect x="124" y="60" width="152" height="96" rx="8" className="fill-[var(--bg2)] stroke-[color:var(--ln)]" strokeWidth="1.5" /></g>
          <g className={`${box} [animation:float_5s_ease-in-out_infinite]`}>
            <rect x="124" y="60" width="152" height="96" rx="8" className={fa} />
            <rect x="140" y="76" width="70" height="9" rx="4.5" className="fill-[var(--ink)]" />
            <rect x="140" y="92" width="48" height="6" rx="3" className="fill-[var(--ink)]" opacity=".55" />
            {[0, 1, 2, 3].map((i) => <rect key={i} x={142 + i * 20} y={142 - (14 + i * 9)} width="12" height={14 + i * 9} rx="2" className={`${fb} origin-bottom ${box} [animation:pulse_2.4s_ease-in-out_infinite]`} style={{ animationDelay: `${i * 0.2}s` }} />)}
            <circle cx="244" cy="112" r="16" fill="none" strokeWidth="6" className="stroke-[color:var(--br)]" strokeDasharray="60 40" />
          </g>
          <rect x="130" y="206" width="140" height="8" rx="4" className={ft} opacity=".2" />
          <rect x="150" y="224" width="100" height="6" rx="3" className={ft} opacity=".12" />
        </>
      )}

      {id === "illustration" && (
        <>
          {[
            { x: 90, y: 86, d: "M0-20a20 20 0 1 0 .01 0z" },
            { x: 200, y: 86, d: "M0-22L21 16-21 16z" },
            { x: 310, y: 86, d: "M0-22L6-7 22-7 9 3 14 19 0 10-14 19-9 3-22-7-6-7Z" },
            { x: 90, y: 200, d: "M0-22L20 0 0 22-20 0Z" },
            { x: 200, y: 200, d: "M-19-11L0-22 19-11 19 11 0 22-19 11Z" },
            { x: 310, y: 200, d: "M0-20V20M-20 0H20" },
          ].map((ic, i) => (
            <g key={i} transform={`translate(${ic.x} ${ic.y})`}>
              <rect x="-44" y="-44" width="88" height="88" rx="22" className="fill-[var(--sf)] stroke-[color:var(--ln)]" strokeWidth="1.5" />
              <path d={ic.d} pathLength={1} strokeDasharray={1} strokeDashoffset={1} fill="none" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className={`dr ${i % 2 ? "stroke-[color:var(--br)]" : ac} [animation:draw_3s_ease-in-out_infinite_alternate]`} style={{ animationDelay: `${i * 0.25}s` }} />
            </g>
          ))}
        </>
      )}
    </svg>
  );
}

/* ------------------------------------------------------------------
   Hero pieces
------------------------------------------------------------------- */
function Swap({ reduce }: { reduce: boolean }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((v) => (v + 1) % ROTATE.length), 2300);
    return () => clearInterval(t);
  }, [reduce]);
  const longest = ROTATE.reduce((a, b) => (b.length > a.length ? b : a));
  return (
    <span className="relative inline-block h-[1.14em] overflow-hidden align-bottom text-[color:var(--br)]">
      <span className="invisible">{longest}</span>
      <span className="absolute left-0 top-0 flex flex-col transition-transform duration-[800ms] [transition-timing-function:cubic-bezier(.7,0,.2,1)]" style={{ transform: `translateY(-${(i * 100) / ROTATE.length}%)` }}>
        {ROTATE.map((w) => <span key={w} className="block h-[1.14em] leading-[1.14em]">{w}</span>)}
      </span>
    </span>
  );
}

function Construct() {
  const pts: [number, number][] = [[13, 34], [13, 16], [24, 25.5], [35, 16], [35, 34]];
  return (
    <svg viewBox="0 0 600 600" className="h-full w-full" aria-hidden="true">
      <g className="[transform-origin:300px_300px] [animation:spin_70s_linear_infinite]"><circle cx="300" cy="300" r="284" fill="none" strokeWidth="1.5" strokeDasharray="2 10" className="stroke-[color:var(--mu)]" /></g>
      {[240, 160, 90].map((r, i) => (
        <circle key={r} cx="300" cy="300" r={r} fill="none" strokeWidth="1.5" pathLength={1} strokeDasharray={1} strokeDashoffset={1} className={`dr ${i === 1 ? "stroke-[color:var(--br)]" : "stroke-[color:var(--ln)]"} [animation:draw_4s_ease-in-out_infinite_alternate]`} style={{ animationDelay: `${i * 0.5}s` }} />
      ))}
      <path d="M300 10V590M10 300H590M92 92L508 508M508 92L92 508" strokeWidth="1" className="stroke-[color:var(--ln)]" />
      <g transform="translate(96 88) scale(8.5)">
        <path d="M13 34V16l11 9.5L35 16v18" pathLength={1} strokeDasharray={1} strokeDashoffset={1} fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="dr stroke-[color:var(--tx)] [animation:draw_3.6s_.6s_ease-in-out_infinite_alternate]" />
        {pts.map(([x, y], i) => <rect key={i} x={x - 0.9} y={y - 0.9} width="1.8" height="1.8" strokeWidth=".3" className="fill-[var(--bg)] stroke-[color:var(--br)]" />)}
        <path d="M24 25.5V18.5M24 25.5V32.5" strokeWidth=".25" className="stroke-[color:var(--br)]" />
        <circle cx="24" cy="18.5" r=".55" className="fill-[var(--br)]" /><circle cx="24" cy="32.5" r=".55" className="fill-[var(--br)]" />
        <circle cx="24" cy="31" r="1.4" className="origin-center fill-[var(--br)] [animation:pulse_2s_ease-in-out_infinite] [transform-box:fill-box]" />
      </g>
    </svg>
  );
}

function MarqueeRow({ rev = false, outline = false }: { rev?: boolean; outline?: boolean }) {
  const row = (
    <div className="flex shrink-0 items-center">
      {MARQUEE.map((w) => (
        <span key={w} className="flex items-center gap-8 whitespace-nowrap pr-8 text-[clamp(2rem,5vw,3.6rem)] font-extrabold leading-none tracking-[-0.03em]">
          <span className={outline ? "text-transparent [-webkit-text-stroke:1.5px_var(--tx)]" : ""}>{w}</span>
          <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0 fill-[var(--br)] [animation:spin_9s_linear_infinite]" aria-hidden="true"><path d="M12 0c.7 6.6 4.8 10.7 12 12-7.2 1.3-11.3 5.4-12 12-.7-6.6-4.8-10.7-12-12C7.2 10.7 11.3 6.6 12 0z" /></svg>
        </span>
      ))}
    </div>
  );
  return <div className={`flex w-max hover:[animation-play-state:paused] ${rev ? "[animation:marqr_46s_linear_infinite]" : "[animation:marq_40s_linear_infinite]"}`}>{row}{row}</div>;
}

/* ------------------------------------------------------------------
   The Motive House mark at each stage of its construction
------------------------------------------------------------------- */
function Mark({ stage }: { stage: number }) {
  const P = "M13 34V16l11 9.5L35 16v18";
  const cream = "#f7f3ed";
  const pts: [number, number][] = [[13, 34], [13, 16], [24, 25.5], [35, 16], [35, 34]];
  return (
    <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden="true">
      {stage === 0 && (
        <>
          <circle cx="100" cy="100" r="82" fill="none" strokeWidth="1.2" strokeDasharray="3 6" stroke={cream} opacity=".7" />
          <circle cx="100" cy="100" r="48" fill="none" strokeWidth="1" stroke={cream} opacity=".45" />
          <path d="M100 8V192M8 100H192M34 34L166 166M166 34L34 166" strokeWidth=".8" stroke={cream} opacity=".35" />
          <g transform="translate(1.6 -2.5) scale(4.1)"><path d={P} fill="none" strokeWidth=".7" strokeDasharray="1.2 2" stroke={cream} opacity=".55" /></g>
        </>
      )}
      {stage === 1 && (
        <g className="[transform-origin:100px_100px] [animation:wob_3s_ease-in-out_infinite]">
          <g transform="translate(1.6 -2.5) scale(4.1)">
            <path d="M13.5 33.6L12.8 16.4 24.2 25.9 34.6 15.6 35.2 34.2" fill="none" strokeWidth="1.1" strokeLinecap="round" stroke={cream} opacity=".6" />
            <path d="M12.6 34.2L13.2 15.8 23.8 25.2 35.3 16.3 34.8 33.8" fill="none" strokeWidth=".8" strokeLinecap="round" strokeDasharray="2 1.4" stroke={cream} />
          </g>
          <text x="22" y="30" fontSize="11" fill={cream} opacity=".8">try 1...</text>
          <text x="124" y="182" fontSize="11" fill={cream} opacity=".8">too heavy?</text>
        </g>
      )}
      {stage === 2 && (
        <>
          <rect x="30" y="38" width="140" height="116" fill="none" strokeWidth=".9" strokeDasharray="3 4" stroke="#d9a85b" opacity=".8" />
          <g transform="translate(1.6 -2.5) scale(4.1)">
            <path d={P} pathLength={1} strokeDasharray={1} strokeDashoffset={1} fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" stroke={cream} className="dr [animation:draw_2.6s_ease-in-out_forwards]" />
            {pts.map(([x, y], i) => <rect key={i} x={x - 0.9} y={y - 0.9} width="1.8" height="1.8" strokeWidth=".3" fill="#120d0d" stroke="#d9a85b" />)}
            <path d="M24 25.5V18.5M24 25.5V32.5" strokeWidth=".25" stroke="#d9a85b" />
          </g>
          {["#6b1a2b", "#f7f3ed", "#d9a85b", "#1a0b0f"].map((c, i) => <circle key={c} cx={70 + i * 20} cy="180" r="7" fill={c} stroke={cream} strokeWidth=".8" className="[animation:pop_.5s_both]" style={{ animationDelay: `${0.4 + i * 0.1}s` }} />)}
        </>
      )}
      {stage === 3 && (
        <>
          <rect x="46" y="22" width="108" height="108" rx="28" fill="#6b1a2b" stroke="#d9a85b" strokeWidth="1.2" />
          <g transform="translate(25 -16) scale(3.1)"><path d={P} fill="none" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" stroke={cream} /><circle cx="24" cy="31" r="1.7" fill="#d9a85b" /></g>
          <text x="100" y="156" textAnchor="middle" fontSize="15" fontWeight="800" fill={cream} style={{ letterSpacing: "-0.3px" }}>Motive House</text>
          {["AI", "SVG", "PDF", "PNG"].map((f, i) => (
            <g key={f}><rect x={34 + i * 34} y="168" width="30" height="16" rx="8" fill="#d9a85b" /><text x={49 + i * 34} y="179.4" textAnchor="middle" fontSize="8.5" fontWeight="800" fill="#120d0d">{f}</text></g>
          ))}
        </>
      )}
    </svg>
  );
}

/* ------------------------------------------------------------------
   Built layer by layer: real photos + the Motive House mark taking shape
------------------------------------------------------------------- */
function LayersDemo({ reduce }: { reduce: boolean }) {
  const [act, setAct] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (reduce || paused) return;
    const t = setTimeout(() => setAct((v) => (v + 1) % STAGES.length), STAGE_MS);
    return () => clearTimeout(t);
  }, [act, paused, reduce]);
  const S = STAGES[act];
  return (
    <div className="grid items-stretch gap-5 lg:grid-cols-[1.25fr_0.75fr]" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[color:var(--ln)] bg-[var(--bg2)] shadow-[0_40px_80px_-34px_rgba(0,0,0,.8)]">
        {STAGES.map((s, i) => (
          <div key={s.t} className={`absolute inset-0 transition-opacity duration-[900ms] ${i === act ? "opacity-100" : "opacity-0"}`} aria-hidden={i !== act}>
            <Photo src={s.img} alt={s.t} fallback={<div className="h-full w-full bg-[radial-gradient(circle_at_70%_20%,#6b1a2b,#1b1413_70%)]" />} />
          </div>
        ))}
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        <div key={act} className="absolute inset-0 grid place-items-center">
          <div className="aspect-square w-[52%] max-w-[300px] rounded-[28px] bg-black/35 p-4 ring-1 ring-white/25 backdrop-blur-sm [animation:pop_.6s_both]"><Mark stage={act} /></div>
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-black/55 px-3.5 py-1.5 text-[11px] font-semibold tracking-wide text-[#f7f3ed] backdrop-blur">Layer {act + 1} of {STAGES.length} · {S.t}</span>
        <div className="absolute inset-x-4 bottom-4 flex gap-1.5" aria-hidden="true">
          {STAGES.map((s, i) => (
            <span key={s.t} className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/25">
              {i < act && <span className="block h-full w-full bg-[#d9a85b]" />}
              {i === act && <span key={act} className="block h-full origin-left bg-[#d9a85b]" style={{ animation: `barx ${STAGE_MS}ms linear forwards`, animationPlayState: paused ? "paused" : "running" }} />}
            </span>
          ))}
        </div>
      </div>

      <ol className="m-0 flex list-none flex-col gap-3 p-0" aria-label="Stages">
        {STAGES.map((s, i) => {
          const on = i === act;
          return (
            <li key={s.t} className="flex-1">
              <button type="button" aria-current={on} onClick={() => setAct(i)} className={`group flex h-full w-full items-center gap-4 rounded-2xl border p-3 text-left transition duration-500 ${on ? "border-[color:var(--br)] bg-[var(--sf)]" : "border-[color:var(--ln)] opacity-70 hover:opacity-100"}`}>
                <span className="relative block h-16 w-24 shrink-0 overflow-hidden rounded-xl">
                  <Photo src={s.img} alt="" overlay={false} fallback={<span className="block h-full w-full bg-[var(--sf)]" />} />
                  <span className={`absolute inset-0 grid place-items-center bg-black/40 text-sm font-bold text-[#f7f3ed] transition-opacity ${on ? "opacity-0" : "opacity-100"}`}>{i + 1}</span>
                </span>
                <span>
                  <b className="block text-sm">{i + 1}. {s.t}</b>
                  <span className="mt-1 block text-xs leading-5 text-[color:var(--mu)]">{s.d}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

/* ------------------------------------------------------------------
   Pencil to print-ready: one compact before / after
------------------------------------------------------------------- */
function CompareSlider() {
  const [pos, setPos] = useState(50);
  const touched = useRef(false);
  const [ref, seen] = useInView<HTMLDivElement>(0.3);
  useEffect(() => {
    if (!seen || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t0 = performance.now();
    let raf = 0;
    const step = (t: number) => {
      if (touched.current) return;
      const k = (t - t0) / 1000;
      if (k > 4.4) { setPos(50); return; }
      setPos(50 + 38 * Math.sin(k * 1.8) * (1 - k / 4.6));
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [seen]);
  const specs: [string, string][] = [["Bleed", "0.125 in"], ["Trim", "3.5 × 2 in"], ["Safe zone", "0.125 in inside"], ["Crop marks", "included"]];
  return (
    <div ref={ref} className="mx-auto max-w-[920px]">
      <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-[color:var(--ln)] bg-[var(--bg2)] shadow-[0_40px_80px_-34px_rgba(0,0,0,.8)]">
        {/* final, print-ready */}
        <div className="absolute inset-0">
          <Photo src={P_NOTEBOOKS} alt="Printed stationery" fallback={<div className="h-full w-full bg-[var(--ac)]" />} />
          <div aria-hidden="true" className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 grid place-items-center"><div className="aspect-square h-[78%]"><Mark stage={3} /></div></div>
        </div>
        {/* pencil sketch, clipped to the slider */}
        <div className="absolute inset-0 bg-[var(--bg2)]" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <div className="absolute inset-0 [filter:grayscale(1)_contrast(1.05)]"><Photo src={P_SKETCH} alt="Pencil sketch" fallback={<div className="h-full w-full bg-[var(--bg2)]" />} /></div>
          <div aria-hidden="true" className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 grid place-items-center"><div className="aspect-square h-[78%]"><Mark stage={1} /></div></div>
          <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-[11px] font-semibold text-[#f7f3ed] backdrop-blur">Pencil sketch</span>
        </div>
        <span className="absolute right-3 top-3 rounded-full bg-[#f7f3ed] px-3 py-1 text-[11px] font-semibold text-[#1d1214]">Print-ready</span>
        <div aria-hidden="true" className="pointer-events-none absolute bottom-0 top-0 w-px bg-[var(--br)]" style={{ left: `${pos}%` }}>
          <span className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[var(--br)] text-[color:var(--bg)] shadow-lg"><ChevronLeft size={13} className="-mr-1" /><ChevronRight size={13} className="-ml-1" /></span>
        </div>
        <input type="range" min={0} max={100} value={pos} aria-label="Compare the pencil sketch with the print-ready result" onChange={(e) => { touched.current = true; setPos(Number(e.target.value)); }} className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" />
      </div>
      <ul className="m-0 mt-5 flex list-none flex-wrap items-center justify-center gap-2 p-0">
        {specs.map(([k, v]) => (
          <li key={k} className="flex items-center gap-2 rounded-full border border-[color:var(--ln)] bg-[var(--sf)] px-4 py-2 text-xs"><Check size={13} className="text-[color:var(--br)]" /><b>{k}</b><span className="text-[color:var(--mu)]">{v}</span></li>
        ))}
      </ul>
      <p className="mb-0 mt-3 text-center text-xs text-[color:var(--mu)]">Drag to compare. Typical US specifications; we always follow your printer&apos;s exact requirements.</p>
    </div>
  );
}

/* ------------------------------------------------------------------
   Portfolio deck
------------------------------------------------------------------- */
function Cover({ i }: { i: number }) {
  const v = i % 6;
  return (
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="500" className="fill-[var(--bg)]" />
      {v === 0 && <g className="[transform-origin:200px_240px] [animation:spin_50s_linear_infinite]"><circle cx="200" cy="240" r="160" className="fill-[var(--ac)]" /><circle cx="200" cy="240" r="104" className="fill-[var(--br)]" /><circle cx="200" cy="240" r="52" className="fill-[var(--bg)]" /><circle cx="200" cy="130" r="22" className="fill-[var(--tx)]" /></g>}
      {v === 1 && Array.from({ length: 9 }).map((_, k) => <rect key={k} x={-40 + k * 54} y="-60" width="26" height="640" transform="rotate(24 200 250)" className={k % 3 === 0 ? "fill-[var(--br)]" : "fill-[var(--ac)]"} opacity={0.45 + (k % 3) * 0.22} />)}
      {v === 2 && <>{Array.from({ length: 42 }).map((_, k) => <circle key={k} cx={52 + (k % 6) * 59} cy={70 + Math.floor(k / 6) * 64} r={k === 15 ? 0 : 10} className="fill-[var(--ac)]" opacity={0.35 + (k % 4) * 0.15} />)}<circle cx="170" cy="230" r="70" className="fill-[var(--br)]" /></>}
      {v === 3 && [0, 1, 2, 3, 4].map((k) => <path key={k} d={`M${30 + k * 14} 430A${170 - k * 14} ${170 - k * 14} 0 0 1 ${370 - k * 14} 430`} fill="none" strokeWidth="16" className={k % 2 ? "stroke-[color:var(--br)]" : "stroke-[color:var(--ac)]"} opacity={1 - k * 0.12} />)}
      {v === 4 && <><rect x="40" y="70" width="210" height="210" rx="10" className="fill-[var(--ac)]" /><rect x="150" y="170" width="210" height="210" rx="10" className="fill-[var(--br)]" opacity=".92" /><rect x="90" y="300" width="130" height="130" rx="10" className="fill-[var(--tx)]" opacity=".85" /></>}
      {v === 5 && [0, 1, 2].map((k) => <path key={k} d={`M0 ${290 + k * 60} C100 ${230 + k * 60} 200 ${350 + k * 60} 400 ${270 + k * 60} V500 H0Z`} className={k === 1 ? "fill-[var(--br)]" : "fill-[var(--ac)]"} opacity={0.5 + k * 0.2} />)}
    </svg>
  );
}

function Deck() {
  const N = PORTFOLIO.length;
  const tones = ["maroon", "dark", "light"] as const;
  const [top, setTop] = useState(0);
  const [dx, setDx] = useState(0);
  const [fly, setFly] = useState<0 | 1 | -1>(0);
  const start = useRef<number | null>(null);
  const moved = useRef(0);

  const next = (dir: 1 | -1 = 1) => {
    if (fly) return;
    setFly(dir);
    setTimeout(() => { setTop((t) => (t + 1) % N); setFly(0); setDx(0); }, 420);
  };
  const prev = () => setTop((t) => (t - 1 + N) % N);
  const cur = PORTFOLIO[top];

  return (
    <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]" onKeyDown={(e) => { if (e.key === "ArrowRight") next(); if (e.key === "ArrowLeft") prev(); }}>
      <div className="relative mx-auto h-[470px] w-[min(78vw,340px)] touch-pan-y select-none sm:h-[500px]" tabIndex={0} aria-label="Portfolio cards. Swipe or use arrow keys.">
        {[3, 2, 1, 0].map((k) => {
          const idx = (top + k) % N;
          const w = PORTFOLIO[idx];
          const isTop = k === 0;
          const rest = `translateY(${k * 18}px) scale(${1 - k * 0.055}) rotate(${(k % 2 ? 1 : -1) * k * 2.2}deg)`;
          const style: React.CSSProperties = isTop
            ? fly
              ? { transform: `translateX(${fly * 130}%) rotate(${fly * 22}deg)`, opacity: 0, transition: "transform .42s ease-in, opacity .42s" }
              : start.current !== null
              ? { transform: `translateX(${dx}px) rotate(${dx / 14}deg)`, transition: "none" }
              : { transform: rest, transition: "transform .5s cubic-bezier(.2,.8,.2,1)" }
            : { transform: rest, transition: "transform .5s cubic-bezier(.2,.8,.2,1)" };
          return (
            <article
              key={idx + "-" + k}
              data-tone={tones[idx % 3]}
              onPointerDown={isTop ? (e) => { start.current = e.clientX; moved.current = 0; (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId); } : undefined}
              onPointerMove={isTop ? (e) => { if (start.current !== null) { const d = e.clientX - start.current; moved.current = Math.max(moved.current, Math.abs(d)); setDx(d); } } : undefined}
              onPointerUp={isTop ? () => { const d = dx; start.current = null; if (Math.abs(d) > 90) next(d > 0 ? 1 : -1); else if (moved.current < 6) next(); else setDx(0); } : undefined}
              className={`absolute inset-0 overflow-hidden rounded-[28px] border border-[color:var(--ln)] bg-[var(--bg)] text-[color:var(--tx)] shadow-[0_30px_60px_-28px_rgba(0,0,0,.65)] ${isTop ? "cursor-grab active:cursor-grabbing" : ""}`}
              style={{ ...style, zIndex: 10 - k }}
            >
              <Photo src={w.img || COVERS[idx % COVERS.length]} alt={w.t} fallback={<Cover i={idx} />} />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/70 to-transparent p-5 text-[#f7f3ed]">
                <div><div className="text-xs opacity-80">{w.cat}</div><div className="text-lg font-bold tracking-tight">{w.t}</div></div>
                {!w.img && <span className="rounded-full bg-white/15 px-2.5 py-1 text-[10px] backdrop-blur">Sample</span>}
              </div>
            </article>
          );
        })}
      </div>

      <div>
        <div key={top} className="[animation:fade_.5s_both]">
          <p className={eyebrow}>{cur.cat.toUpperCase()} · {cur.year}</p>
          <h3 className="m-0 text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">{cur.t}</h3>
          <p className="mb-0 mt-3 max-w-[420px] text-sm leading-6 text-[color:var(--mu)]">Drag the card away, tap it, or use the arrows to browse the studio&apos;s work.</p>
        </div>

        <div className="my-7 flex items-center gap-3">
          <button type="button" onClick={prev} aria-label="Previous project" className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--ln)] transition hover:bg-[var(--ac)] hover:text-[color:var(--ink)]"><ChevronLeft size={18} /></button>
          <button type="button" onClick={() => next()} aria-label="Next project" className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--ln)] transition hover:bg-[var(--ac)] hover:text-[color:var(--ink)]"><ChevronRight size={18} /></button>
          <span className="ml-2 text-sm tabular-nums text-[color:var(--mu)]">{String(top + 1).padStart(2, "0")} / {String(N).padStart(2, "0")}</span>
        </div>

        <div className="mb-8 flex gap-2">
          {PORTFOLIO.map((w, i) => (
            <button key={i} type="button" onClick={() => setTop(i)} aria-label={`Show project ${i + 1}`} aria-current={i === top} data-tone={tones[i % 3]} className={`h-16 w-12 overflow-hidden rounded-lg border-2 transition duration-300 ${i === top ? "-translate-y-1 border-[color:var(--br)]" : "border-transparent opacity-60 hover:opacity-100"}`}>
              <span className="relative block h-full w-full"><Photo src={w.img || COVERS[i % COVERS.length]} alt="" overlay={false} fallback={<Cover i={i} />} /></span>
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <a href={PORTFOLIO_PDF} target="_blank" rel="noopener noreferrer" className={ghost}>
            View Portfolio (PDF)
            <ArrowUpRight size={15} />
          </a>
          <a href={PORTFOLIO_PDF} download="motive-house-portfolio.pdf" className={btn}>
            Download portfolio (PDF)
            <i className={dot}><Download size={15} /></i>
          </a>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   Page
------------------------------------------------------------------- */
export default function GraphicDesignPage() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);
  const [reduce, setReduce] = useState(false);
  const [open, setOpen] = useState<number | null>(null);
  const [ox, setOx] = useState(50);
  const [readP, setReadP] = useState(0);
  const panel = useRef<HTMLDivElement>(null);
  const orb = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  const readTheme = useCallback(() => {
    try { const s = localStorage.getItem("mh-theme"); if (s === "light" || s === "dark") setTheme(s); } catch {}
  }, []);
  useEffect(() => {
    readTheme();
    setMounted(true);
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    window.addEventListener("mh-theme", readTheme);
    window.addEventListener("storage", readTheme);
    return () => { window.removeEventListener("mh-theme", readTheme); window.removeEventListener("storage", readTheme); };
  }, [readTheme]);
  const toggle = () => {
    const n = theme === "dark" ? "light" : "dark";
    setTheme(n);
    try { localStorage.setItem("mh-theme", n); } catch {}
    window.dispatchEvent(new Event("mh-theme"));
  };
  const T = (b: "dark" | "light") => (theme === "dark" ? b : b === "dark" ? "light" : "dark");
  const band = "bg-[var(--bg)] text-[color:var(--tx)] transition-colors duration-500";
  const sec = "scroll-mt-16 px-5 py-20 sm:px-8 sm:py-28";

  /* reading progress */
  useEffect(() => {
    let raf = 0;
    const on = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => { raf = 0; const h = document.documentElement; const max = h.scrollHeight - h.clientHeight; setReadP(max > 0 ? h.scrollTop / max : 0); });
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  /* hero: smooth cursor orb + parallax */
  const target = useRef({ x: 0, y: 0, cx: 0, cy: 0 });
  useEffect(() => {
    if (reduce) return;
    let raf = 0;
    const loop = () => {
      const t = target.current;
      t.cx += (t.x - t.cx) * 0.08;
      t.cy += (t.y - t.cy) * 0.08;
      if (orb.current) orb.current.style.transform = `translate(${t.cx - 260}px, ${t.cy - 260}px)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [reduce]);
  const onHeroMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    target.current.x = e.clientX - r.left;
    target.current.y = e.clientY - r.top;
    e.currentTarget.style.setProperty("--px", String(((e.clientX - r.left) / r.width - 0.5) * 2));
    e.currentTarget.style.setProperty("--py", String(((e.clientY - r.top) / r.height - 0.5) * 2));
  };

  /* open a service */
  const openSvc = (i: number, e?: React.MouseEvent) => {
    if (e) { const r = (e.currentTarget as HTMLElement).getBoundingClientRect(); setOx(Math.round(((r.left + r.width / 2) / window.innerWidth) * 100)); } else setOx(50);
    setOpen(open === i && e ? null : i);
  };
  useEffect(() => {
    if (open === null) return;
    const t = setTimeout(() => panel.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" }), 80);
    return () => clearTimeout(t);
  }, [open, reduce]);

  /* tile tilt */
  const tilt = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget, r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--rx", `${(0.5 - y) * 7}deg`);
    el.style.setProperty("--ry", `${(x - 0.5) * 9}deg`);
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
  };
  const untilt = (e: React.MouseEvent<HTMLElement>) => { e.currentTarget.style.setProperty("--rx", "0deg"); e.currentTarget.style.setProperty("--ry", "0deg"); };

  /* magnetic CTA */
  const mag = useRef<HTMLDivElement>(null);
  const onMag = (e: React.MouseEvent) => {
    const el = mag.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.transform = `translate(${(e.clientX - (r.left + r.width / 2)) * 0.12}px,${(e.clientY - (r.top + r.height / 2)) * 0.12}px)`;
  };

  const line = `ln block translate-y-[112%] ${mounted ? "[animation:up_1.1s_cubic-bezier(.2,.8,.2,1)_forwards]" : ""}`;
  const svc = open !== null ? SERVICES[open] : null;

  return (
    <main className="gd relative overflow-x-clip">
      <style>{CSS}</style>

      <div aria-hidden="true" className="fixed left-0 top-0 z-50 h-[3px] w-full">
        <div className="h-full bg-gradient-to-r from-[#a8283f] to-[#d9a85b]" style={{ width: `${readP * 100}%` }} />
      </div>

      {/* ================= HERO ================= */}
      <section ref={heroRef} data-tone={T("dark")} onMouseMove={onHeroMove} className={`${band} relative overflow-hidden`}>
        <div ref={orb} aria-hidden="true" className="pointer-events-none absolute left-0 top-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,var(--gl),transparent_66%)] blur-[10px]" />
        <button type="button" onClick={toggle} aria-label="Swap light and dark sections" className="absolute right-5 top-5 z-10 grid h-9 w-9 place-items-center rounded-full border border-[color:var(--ln)] bg-[var(--sf)] transition duration-500 hover:rotate-180 hover:bg-[var(--ac)] sm:right-8">
          {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
        </button>

        <div className="relative mx-auto grid min-h-[88vh] max-w-[1280px] items-center gap-6 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative z-10">
            <p className={`${eyebrow} o0 opacity-0 ${mounted ? "[animation:rise_.8s_.1s_forwards]" : ""}`}>GRAPHIC DESIGN STUDIO · SERVING THE USA</p>
            <h1 className="m-0 text-[clamp(2.8rem,8.4vw,7rem)] font-extrabold leading-[1] tracking-[-0.05em]">
              <span className="block overflow-hidden pb-[0.06em]"><span className={line} style={{ animationDelay: ".15s" }}>We design</span></span>
              <span className="block overflow-hidden pb-[0.06em]"><span className={line} style={{ animationDelay: ".3s" }}><Swap reduce={reduce} /></span></span>
              <span className="block overflow-hidden pb-[0.06em]"><span className={`${line} text-transparent [-webkit-text-stroke:1.5px_var(--tx)]`} style={{ animationDelay: ".45s" }}>people remember.</span></span>
            </h1>
            <p className={`mb-8 mt-7 max-w-[520px] text-base leading-7 text-[color:var(--mu)] sm:text-lg sm:leading-8 o0 opacity-0 ${mounted ? "[animation:rise_.9s_.9s_forwards]" : ""}`}>
              Logos, brand identities, social media graphics, print, packaging and more, designed with care and delivered as print-ready and web-ready files.
            </p>
            <div className={`flex flex-wrap items-center gap-4 o0 opacity-0 ${mounted ? "[animation:rise_.9s_1.1s_forwards]" : ""}`}>
              <a href="#services" className={btn}>Explore our services<i className={dot}><ArrowRight size={15} /></i></a>
              <a href={PORTFOLIO_PDF} target="_blank" rel="noopener noreferrer" className={ghost}><ArrowUpRight size={15} />View Portfolio</a>
            </div>
            <ul className={`m-0 mt-9 flex list-none flex-wrap gap-2 p-0 o0 opacity-0 ${mounted ? "[animation:rise_.9s_1.3s_forwards]" : ""}`}>
              {["Illustrator", "Photoshop", "InDesign", "Figma"].map((t) => <li key={t} className="rounded-full border border-[color:var(--ln)] px-3 py-1 text-xs text-[color:var(--mu)]">{t}</li>)}
            </ul>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[560px]">
            <div className="absolute inset-0 transition-transform duration-300 [transform:translate(calc(var(--px,0)*-14px),calc(var(--py,0)*-10px))]"><Construct /></div>
            <div className="absolute left-[2%] top-[14%] transition-transform duration-300 [transform:translate(calc(var(--px,0)*26px),calc(var(--py,0)*18px))]"><span className="block h-16 w-16 rounded-full bg-[var(--br)] [animation:float_6s_ease-in-out_infinite]" /></div>
            <div className="absolute bottom-[10%] right-[4%] transition-transform duration-300 [transform:translate(calc(var(--px,0)*-30px),calc(var(--py,0)*-22px))]"><span className="block h-14 w-14 rotate-12 rounded-xl border-2 border-[color:var(--tx)] [animation:float_7s_ease-in-out_infinite]" /></div>
            <div className="absolute bottom-[26%] left-[6%] transition-transform duration-300 [transform:translate(calc(var(--px,0)*18px),calc(var(--py,0)*-24px))]"><span className="block h-0 w-0 border-x-[22px] border-b-[38px] border-x-transparent border-b-[var(--ac)] [animation:float_5s_ease-in-out_infinite]" /></div>
          </div>
        </div>

        <div aria-hidden="true" className="relative space-y-3 overflow-hidden border-t border-[color:var(--ln)] py-6">
          <MarqueeRow />
          <MarqueeRow rev outline />
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" data-tone={T("light")} className={`${band} ${sec}`}>
        <div className="mx-auto max-w-[1280px]">
          <R className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-[640px]">
              <p className={eyebrow}>WHAT WE DESIGN</p>
              <h2 className={h2}>Twelve disciplines. Click any to open it.</h2>
            </div>
            <p className="m-0 flex items-center gap-2 text-sm text-[color:var(--mu)]"><Plus size={16} className="[animation:spin_6s_linear_infinite]" />Tap a tile to open the full service</p>
          </R>

          <div className="grid auto-rows-[180px] grid-cols-2 gap-3 [perspective:1200px] sm:auto-rows-[215px] lg:grid-cols-4">
            {SERVICES.map((s, i) => {
              const on = open === i;
              return (
                <button
                  key={s.id}
                  type="button"
                  data-tone={s.tone}
                  aria-expanded={on}
                  onClick={(e) => openSvc(i, e)}
                  onMouseMove={tilt}
                  onMouseLeave={untilt}
                  className={`group relative overflow-hidden rounded-[26px] border bg-[var(--bg)] text-left text-[color:var(--tx)] transition-[transform,box-shadow,border-color] duration-200 [transform:rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))] hover:shadow-[0_30px_60px_-26px_rgba(0,0,0,.55)] ${s.span} ${on ? "border-[color:var(--br)] shadow-[0_0_0_3px_var(--br)]" : "border-[color:var(--ln)]"}`}
                >
                  <div className="absolute inset-0 overflow-hidden transition-transform duration-700 group-hover:scale-[1.06]"><Photo src={PHOTOS[s.id]} alt={s.t} fallback={<div className="h-full w-full p-3 pb-16"><Art id={s.art ?? s.id as Exclude<SvcId, "stationery" | "flyers" | "brochures" | "menus">} uid={`t-${s.id}`} /></div>} /></div>
                  <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(240px_circle_at_var(--mx,50%)_var(--my,50%),rgba(255,255,255,.16),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute left-4 top-4 rounded-full bg-[var(--bg)] px-2.5 py-1 text-xs font-bold tabular-nums text-[color:var(--tx)] backdrop-blur">{String(i + 1).padStart(2, "0")}</span>
                  <span className={`absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-[var(--ac)] text-[color:var(--ink)] transition-transform duration-500 ${on ? "rotate-45" : "group-hover:rotate-90"}`}><Plus size={16} /></span>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)] to-transparent px-4 pb-4 pt-8">
                    <h3 className="m-0 text-[15px] font-bold leading-tight tracking-tight sm:text-lg">{s.t}</h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* the opened service */}
          {svc && open !== null && (
            <div ref={panel} className="scroll-mt-20 pt-4">
              <div key={svc.id} data-tone={T("dark")} style={{ ["--ox" as string]: `${ox}%` }} className="relative overflow-hidden rounded-[34px] border border-[color:var(--ln)] bg-[var(--bg)] text-[color:var(--tx)] [animation:iris_1s_cubic-bezier(.6,0,.2,1)_both]">
                <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,var(--gl),transparent_65%)] [animation:breathe_6s_ease-in-out_infinite]" />
                <div className="relative flex items-center justify-between gap-4 border-b border-[color:var(--ln)] px-6 py-4 sm:px-9">
                  <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Jump to a service">
                    {SERVICES.map((s, i) => (
                      <button key={s.id} role="tab" aria-selected={i === open} onClick={() => openSvc(i)} className={`rounded-full px-3 py-1 text-xs font-semibold transition ${i === open ? "bg-[var(--ac)] text-[color:var(--ink)]" : "text-[color:var(--mu)] hover:bg-[var(--sf)] hover:text-[color:var(--tx)]"}`}>{String(i + 1).padStart(2, "0")}</button>
                    ))}
                  </div>
                  <button type="button" onClick={() => setOpen(null)} aria-label="Close service" className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--ln)] transition hover:rotate-90 hover:bg-[var(--ac)]"><X size={16} /></button>
                </div>

                <div className="relative grid gap-10 p-6 sm:p-9 lg:grid-cols-[0.95fr_1.05fr]">
                  <div className="flex flex-col gap-5">
                    <div data-tone={svc.tone} className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[color:var(--ln)] bg-[var(--bg)] p-4 text-[color:var(--tx)]">
                      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,var(--gl),transparent_65%)]" />
                      <div className="absolute inset-0 overflow-hidden"><Photo src={PHOTOS[svc.id]} alt={svc.t} fallback={<div className="relative h-full w-full p-4"><Art id={svc.art ?? svc.id as Exclude<SvcId, "stationery" | "flyers" | "brochures" | "menus">} uid={`d-${svc.id}`} /></div>} /></div>
                    </div>
                    <div>
                      <h4 className="mb-2.5 mt-0 text-xs font-semibold tracking-[0.12em] text-[color:var(--br)]">FORMATS AND TOOLS</h4>
                      <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
                        {svc.fmt.map((f, i) => <li key={f} className="rounded-full border border-[color:var(--ln)] bg-[var(--sf)] px-3 py-1 text-xs [animation:pop_.5s_both]" style={{ animationDelay: `${0.5 + i * 0.07}s` }}>{f}</li>)}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <p className={`${eyebrow} [animation:rise_.7s_.35s_both]`}>{String(open + 1).padStart(2, "0")} / {String(SERVICES.length).padStart(2, "0")}</p>
                    <h3 className="m-0 text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-[1.04] tracking-[-0.04em] [animation:rise_.7s_.4s_both]">{svc.t}</h3>
                    <p className="mb-0 mt-3 text-lg font-semibold leading-snug text-[color:var(--br)] [animation:rise_.7s_.5s_both]">{svc.tag}</p>
                    <p className="mb-7 mt-4 text-[0.95rem] leading-7 text-[color:var(--mu)] [animation:rise_.7s_.6s_both]">{svc.d}</p>

                    <h4 className="mb-3 mt-0 text-xs font-semibold tracking-[0.12em] text-[color:var(--br)]">WHAT IS INCLUDED</h4>
                    <ul className="m-0 mb-7 grid list-none gap-2.5 p-0 sm:grid-cols-2">
                      {svc.inc.map((x, i) => (
                        <li key={x} className="flex items-start gap-2.5 text-sm leading-5 opacity-0 [animation:fade_.55s_forwards]" style={{ animationDelay: `${0.6 + i * 0.08}s` }}>
                          <span className="mt-px grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--ac)] text-[color:var(--ink)]"><Check size={12} strokeWidth={3.5} /></span>{x}
                        </li>
                      ))}
                    </ul>

                    <div className="mb-7 rounded-2xl border border-[color:var(--br)] bg-[var(--sf)] p-5">
                      <h4 className="mb-2.5 mt-0 text-sm font-bold">Built for US businesses</h4>
                      <ul className="m-0 grid list-none gap-1.5 p-0">
                        {svc.usa.map((u) => <li key={u} className="flex items-start gap-2 text-[13px] leading-5 text-[color:var(--mu)]"><span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--br)]" />{u}</li>)}
                      </ul>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <a href={`mailto:${EMAIL}?subject=${encodeURIComponent(svc.t + " project")}`} className={btn}>Start a {svc.t.toLowerCase()} project<i className={dot}><ArrowUpRight size={15} /></i></a>
                      <button type="button" onClick={() => openSvc((open + 1) % SERVICES.length)} className={ghost}>Next service<ChevronRight size={15} /></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section id="process" data-tone={T("dark")} className={`${band} ${sec}`}>
        <div className="mx-auto max-w-[1200px]">
          <R className="mb-10 max-w-[680px]">
            <p className={eyebrow}>HOW A DESIGN COMES TO LIFE</p>
            <h2 className={h2}>Built layer by layer.</h2>
            <p className="mb-0 mt-4 text-base leading-7 text-[color:var(--mu)]">See how a real Motive House mark takes shape: from a blank page, to pencil concepts, to a refined vector, to final files.</p>
          </R>
          <LayersDemo reduce={reduce} />
        </div>
      </section>

      {/* ================= CRAFT ================= */}
      <section id="craft" data-tone={T("light")} className={`${band} ${sec}`}>
        <div className="mx-auto max-w-[1200px]">
          <R className="mx-auto mb-10 max-w-[620px] text-center">
            <p className={eyebrow}>THE CRAFT BEHIND THE FILES</p>
            <h2 className={h2}>From pencil to print-ready.</h2>
          </R>
          <R delay={0.1}><CompareSlider /></R>
        </div>
      </section>

      {/* ================= PORTFOLIO ================= */}
      <section id="portfolio" data-tone={T("dark")} className={`${band} ${sec}`}>
        <div className="mx-auto max-w-[1200px]">
          <R className="mb-12 max-w-[640px]">
            <p className={eyebrow}>MOTIVE HOUSE PORTFOLIO</p>
            <h2 className={h2}>Selected work.</h2>
          </R>
          <R delay={0.1}><Deck /></R>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section id="contact" data-tone={T("light")} onMouseMove={onMag} onMouseLeave={() => mag.current && (mag.current.style.transform = "")} className={`${band} relative overflow-hidden ${sec}`}>
        <svg aria-hidden="true" viewBox="0 0 600 600" className="pointer-events-none absolute -right-40 top-1/2 h-[780px] w-[780px] -translate-y-1/2 opacity-60">
          <g className="[transform-origin:300px_300px] [animation:spin_90s_linear_infinite]">
            {[290, 220, 150].map((r, i) => <circle key={r} cx="300" cy="300" r={r} fill="none" strokeWidth="1.5" strokeDasharray={i === 1 ? "2 10" : undefined} className="stroke-[color:var(--ln)]" />)}
            <circle cx="300" cy="10" r="9" className="fill-[var(--br)]" />
          </g>
        </svg>
        <div className="relative mx-auto max-w-[1200px]">
          <h2 className="m-0 max-w-[820px] text-[clamp(2.4rem,7vw,5.6rem)] font-extrabold leading-[0.98] tracking-[-0.05em]">Let&apos;s design something <span className="text-[color:var(--br)]">unforgettable.</span></h2>
          <ul className="m-0 mb-9 mt-8 flex list-none flex-wrap gap-2 p-0">
            {["Source files included", "Print-ready and web-ready exports", "US print sizes", "Clear scope before we start"].map((t) => <li key={t} className="flex items-center gap-2 rounded-full border border-[color:var(--ln)] px-3.5 py-1.5 text-xs text-[color:var(--mu)]"><Check size={13} className="text-[color:var(--br)]" />{t}</li>)}
          </ul>
          <div ref={mag} className="inline-flex flex-wrap items-center gap-4 transition-transform duration-200 ease-out">
            <a href={`mailto:${EMAIL}?subject=Design%20project`} className={`${btn} !py-2 !pl-7 !pr-2 text-base`}>Start a project<i className={`${dot} !h-11 !w-11`}><ArrowUpRight size={20} /></i></a>
            <a href={PORTFOLIO_PDF} download="motive-house-portfolio.pdf" className={ghost}><Download size={15} />Download portfolio (PDF)</a>
          </div>
          <a href={`mailto:${EMAIL}`} className="mb-0 mt-6 block text-sm text-[color:var(--mu)]">{EMAIL}</a>
        </div>
      </section>
    </main>
  );
}













