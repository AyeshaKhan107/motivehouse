







// "use client";

// import { useEffect, useRef, useState } from "react";
// import {
//   ArrowUpRight, BarChart3, Check, ChevronDown, ChevronLeft, ChevronRight, FileCheck,
//   Landmark, Layers, Moon, Plus, Receipt, Sun, Users, Wrench, ArrowLeftRight,
// } from "lucide-react";

// /* ---------- Brand: maroon + off-white, warm lamp glow ---------- */
// const MAROON = "#6b1a2b";
// const OFFWHITE = "#f6f2ec";
// const EMAIL = "support@motivehouse.co";
// const FIRM = "Motive House"; // replace

// const CSS = `
// .mh [data-tone="dark"]{--bg:#120d0d;--bg2:#1b1413;--tx:#f4eee6;--mu:rgba(244,238,230,.68);--ln:rgba(244,238,230,.14);--sf:rgba(244,238,230,.05);--ac:#a8283f;--ink:#fff8f0;--gl:rgba(255,186,110,.22)}
// .mh [data-tone="light"]{--bg:${OFFWHITE};--bg2:#efe8de;--tx:#1d1214;--mu:rgba(29,18,20,.68);--ln:rgba(107,26,43,.16);--sf:rgba(107,26,43,.05);--ac:${MAROON};--ink:${OFFWHITE};--gl:rgba(107,26,43,.12)}
// @keyframes up{from{transform:translateY(110%)}to{transform:none}}
// @keyframes rise{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
// @keyframes slide{from{opacity:0;transform:translateX(-14px)}to{opacity:1;transform:none}}
// @keyframes float{50%{transform:translateY(-8px)}}
// @keyframes breathe{0%,100%{opacity:.65;transform:scale(1)}50%{opacity:1;transform:scale(1.06)}}
// @keyframes grow{from{transform:scaleY(.25)}to{transform:scaleY(1)}}
// @keyframes ping{0%{transform:scale(1);opacity:.8}100%{transform:scale(3);opacity:0}}
// @media (prefers-reduced-motion:reduce){.mh *{animation:none!important;transition:none!important}.mh .op0{opacity:1!important}.mh .ln{transform:none!important}}
// .mh :focus-visible{outline:2px solid var(--ac);outline-offset:3px}
// `;

// /* ---------- Content (from your copy pack) ---------- */
// const services = [
//   { Icon: Receipt, t: "Ongoing bookkeeping", l: "A dependable monthly routine.", b: ["Regular transaction coding", "Bank and credit-card reconciliations", "Balance-sheet account review", "Organised supporting documents"] },
//   { Icon: Wrench, t: "Catch-up & clean-up", l: "Bring overdue books back in order.", b: ["Review of overdue or duplicated items", "Priority plan agreed with you", "Discrepancies investigated", "Open items documented for you"] },
//   { Icon: BarChart3, t: "Month-end & reporting", l: "Reports you can actually read.", b: ["Profit and loss, balance sheet", "Cash-flow summaries", "Budget vs actual where data allows", "Plain explanation of what changed"] },
//   { Icon: ArrowLeftRight, t: "Payables & receivables", l: "Know who owes whom.", b: ["Supplier records and bill organising", "Payment lists for your approval", "Invoice tracking", "Aged receivables review"] },
//   { Icon: Users, t: "Payroll & contractors", l: "Records kept in sync.", b: ["Payroll journal reconciliation", "Liability reconciliation", "Contractor-payment records", "Filings scoped separately"] },
//   { Icon: Layers, t: "Software setup", l: "Cleaner setup, calmer months.", b: ["Chart-of-accounts review", "Bank-feed workflows", "Recurring transaction rules", "Conversion planning"] },
//   { Icon: FileCheck, t: "Tax-ready records", l: "Clearer information for tax time.", b: ["Year-end schedules", "Income and expense detail", "Coordination with your tax professional", "Returns only where scoped and qualified"] },
// ];

// const steps = [
//   ["Discover", "We learn about your business, records, software, reporting needs and deadlines."],
//   ["Set up the workflow", "We agree scope, access, close calendar and how we communicate."],
//   ["Keep the books moving", "Transactions are reviewed and reconciled on the agreed schedule."],
//   ["Review and improve", "We share reports, flag open questions and close recordkeeping gaps."],
// ];

// const tools = ["QuickBooks Online", "Xero", "Sage", "Zoho Books"];

// const regions = [
//   { flag: "US", t: "US small businesses", d: "Reconciled ledgers and organised source documents so a qualified tax preparer can work from complete information.", b: ["Contractor-payment records", "Sales-tax transaction summaries where applicable", "Year-end workpapers"], cta: "Get your US workflow under control" },
//   { flag: "CA", t: "Canadian small businesses", d: "A steady routine that supports federal and provincial year-end work and your GST/HST review.", b: ["GST/HST and provincial sales-tax records", "Eligible input tax credit tracking", "Fixed-asset schedules"], cta: "Talk about your Canadian needs" },
// ];

// const industries = [
//   ["Professional services", "Client income, subcontractor costs, reimbursable expenses, project profitability."],
//   ["Construction & trades", "Supplier bills, subcontractor records, deposits, job-level reporting."],
//   ["E-commerce & retail", "Payment-processor and marketplace reconciliation, refunds, fees."],
//   ["Agencies & creative", "Retainers, project revenue, contractor costs, client billing."],
//   ["Property & real estate", "Property-level income and expenses, loan interest, repairs, capital purchases."],
// ];

// const faqs = [
//   ["Do you work with businesses in both the US and Canada?", "We are building workflows for both markets. Availability depends on your location, structure, accounting needs and the tax work requested. We confirm fit and responsibilities before onboarding."],
//   ["Which accounting software do you support?", "QuickBooks Online, Xero, Sage and Zoho Books, subject to your subscription, data access and engagement requirements."],
//   ["Can you fix books that are several months behind?", "Often, yes. We assess the period, transaction volume and source documents, then agree a cleanup plan and list items needing your approval or a tax professional's judgement."],
//   ["Do you prepare tax returns?", "That depends on country, return type, engagement terms and required qualifications. During onboarding we confirm whether we prepare the return, coordinate with a qualified professional, or provide tax-ready records only."],
//   ["How much do your services cost?", "Pricing depends on transaction volume, accounts and entities, software condition, reporting needs, payroll or sales-tax complexity and any catch-up work. We quote a defined scope after an initial review."],
// ];

// const messy = [["AMZN MKTP US*2K4", "−$84.20", "Uncategorized"], ["SQ *COFFEE HSE 0042", "−$12.75", "?"], ["TRANSFER ???", "−$1,200.00", "Uncategorized"], ["STRIPE PAYOUT", "+$3,480.00", "?"], ["ADOBE *CREATIVE", "−$54.99", "Uncategorized"], ["CHECK #1042", "−$650.00", "?"], ["UNKNOWN DEBIT", "−$39.00", "Uncategorized"], ["ACH PAYROLL", "−$4,215.30", "?"]];
// const clean = [["Amazon · Office supplies", "−$84.20", "Office expense"], ["Coffee House · Client meeting", "−$12.75", "Meals"], ["Owner draw", "−$1,200.00", "Equity"], ["Stripe payout", "+$3,480.00", "Sales revenue"], ["Adobe Creative Cloud", "−$54.99", "Software"], ["Check #1042 · Contractor", "−$650.00", "Contractor payments"], ["Monthly subscription", "−$39.00", "Subscriptions"], ["Payroll", "−$4,215.30", "Payroll"]];

// /* ---------- Helpers ---------- */
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

// const Rise = ({ show, delay = 0, className = "", children }: { show: boolean; delay?: number; className?: string; children: React.ReactNode }) => (
//   <div className={`op0 opacity-0 ${show ? "[animation:rise_.8s_cubic-bezier(.2,.7,.2,1)_forwards]" : ""} ${className}`} style={{ animationDelay: `${delay}s` }}>{children}</div>
// );

// const h2 = "m-0 text-[clamp(1.9rem,4.2vw,3rem)] font-bold leading-[1.06] tracking-[-0.035em]";
// const eyebrow = "mb-4 text-xs font-semibold tracking-[0.12em] text-[color:var(--ac)]";
// const btn = "group inline-flex items-center gap-2.5 rounded-full bg-[var(--ac)] py-1.5 pl-5 pr-1.5 text-sm font-semibold text-[color:var(--ink)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-12px_var(--ac)]";
// const dot = "grid h-8 w-8 place-items-center rounded-full bg-[var(--ink)] text-[color:var(--ac)] transition-transform duration-500 group-hover:rotate-45";

// function Cta({ children, big = false }: { children: React.ReactNode; big?: boolean }) {
//   return (
//     <a href={`mailto:${EMAIL}?subject=Discovery%20call`} className={`${btn} ${big ? "!py-2 !pl-7 !pr-2 text-base" : ""}`}>
//       {children}
//       <i className={`${dot} ${big ? "!h-11 !w-11" : ""}`}><ArrowUpRight size={big ? 20 : 15} /></i>
//     </a>
//   );
// }

// /* ---------- Hero scene: dashboard + ledger spines under lamp glow ---------- */
// function HeroScene() {
//   const bars = [38, 56, 44, 70, 52, 84, 66];
//   const spines = ["RECONCILIATIONS", "MANAGEMENT REPORTS", "TAX-READY RECORDS", "OPEN ITEMS LOG", "MONTH-END CLOSE"];
//   return (
//     <div className="relative mx-auto h-[440px] w-full max-w-[560px] sm:h-[500px]" aria-hidden="true">
//       <div className="absolute -inset-6 bg-[radial-gradient(circle_at_26%_14%,var(--gl),transparent_55%)] [animation:breathe_6s_ease-in-out_infinite]" />
//       <div className="absolute bottom-2 right-0 flex w-[66%] flex-col gap-2">
//         {spines.map((s, i) => (
//           <div key={s} style={{ marginLeft: [0, 18, 6, 26, 10][i], width: ["100%", "92%", "96%", "84%", "90%"][i], animationDelay: `${i * 0.5}s` }} className="[animation:float_6s_ease-in-out_infinite]">
//             <div className="flex h-9 items-center rounded-md border border-white/10 border-l-[5px] border-l-[#a8283f] bg-gradient-to-r from-[#2a1c1a] to-[#3a2622] px-3 text-[10px] font-semibold tracking-[0.14em] text-[#ead9c2]/85 shadow-[0_8px_20px_-10px_rgba(0,0,0,.9)]">{s}</div>
//           </div>
//         ))}
//       </div>
//       <div className="absolute left-0 top-6 w-[80%] rounded-2xl border border-white/10 bg-[#1d1514]/85 p-4 shadow-[0_30px_60px_-25px_rgba(0,0,0,.9)] backdrop-blur">
//         <div className="mb-4 flex items-center justify-between">
//           <span className="text-xs font-semibold text-[#f4eee6]">Monthly overview</span>
//           <span className="rounded-full bg-[#a8283f]/25 px-2 py-0.5 text-[10px] text-[#f4c9d0]">Sample view</span>
//         </div>
//         <div className="flex h-24 items-end gap-2">
//           {bars.map((h, i) => (
//             <span key={i} className="w-full origin-bottom rounded-t-md bg-gradient-to-t from-[#a8283f] to-[#e4a0ae] [animation:grow_2.4s_ease-in-out_infinite_alternate]" style={{ height: `${h}%`, animationDelay: `${i * 0.18}s` }} />
//           ))}
//         </div>
//         <div className="mt-4 grid gap-2">
//           {[72, 54, 38].map((w) => (<span key={w} className="h-1.5 rounded-full bg-white/10"><span className="block h-full rounded-full bg-[#e4a0ae]/70" style={{ width: `${w}%` }} /></span>))}
//         </div>
//       </div>
//       <span className="absolute right-2 top-2 flex items-center gap-2 rounded-full border border-white/10 bg-[#1d1514]/90 px-3 py-1.5 text-xs text-[#f4eee6] [animation:float_5s_ease-in-out_infinite]">
//         <span className="grid h-4 w-4 place-items-center rounded-full bg-[#a8283f]"><Check size={10} strokeWidth={3.5} /></span>Books reconciled
//       </span>
//       <span className="absolute bottom-24 left-2 flex items-center gap-2 rounded-full border border-white/10 bg-[#1d1514]/90 px-3 py-1.5 text-xs text-[#f4eee6] [animation:float_6s_ease-in-out_1.2s_infinite]">
//         <span className="relative flex h-2 w-2"><span className="absolute inset-0 rounded-full bg-[#e4a0ae] [animation:ping_2s_ease-out_infinite]" /><span className="relative h-2 w-2 rounded-full bg-[#e4a0ae]" /></span>Report ready
//       </span>
//     </div>
//   );
// }

// /* ---------- Page ---------- */
// export default function BookkeepingPage() {
//   const [theme, setTheme] = useState<"light" | "dark">("dark");
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     try {
//       const s = localStorage.getItem("mh-theme");
//       if (s === "light" || s === "dark") setTheme(s);
//     } catch {}
//     setMounted(true);
//   }, []);

//   const toggle = () => {
//     const n = theme === "dark" ? "light" : "dark";
//     setTheme(n);
//     try { localStorage.setItem("mh-theme", n); } catch {}
//   };
//   const T = (b: "dark" | "light") => (theme === "dark" ? b : b === "dark" ? "light" : "dark");
//   const band = "bg-[var(--bg)] text-[color:var(--tx)] transition-colors duration-500";

//   const [svcRef, svcSeen] = useInView<HTMLElement>(0.1);
//   const [baRef, baSeen] = useInView<HTMLElement>(0.25);
//   const [rgRef, rgSeen] = useInView<HTMLElement>(0.15);
//   const [open, setOpen] = useState(0);
//   const [faq, setFaq] = useState<number | null>(0);
//   const [pos, setPos] = useState(50);
//   const touched = useRef(false);

//   useEffect(() => {
//     if (!baSeen || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
//     const t0 = performance.now();
//     let raf = 0;
//     const step = (t: number) => {
//       if (touched.current) return;
//       const k = (t - t0) / 1000;
//       if (k > 4.2) return setPos(50);
//       setPos(50 + 38 * Math.sin(k * 1.9) * (1 - k / 4.4));
//       raf = requestAnimationFrame(step);
//     };
//     raf = requestAnimationFrame(step);
//     return () => cancelAnimationFrame(raf);
//   }, [baSeen]);

//   const line = `ln block translate-y-[110%] ${mounted ? "[animation:up_1s_cubic-bezier(.2,.8,.2,1)_forwards]" : ""}`;

//   return (
//     <main className="mh relative overflow-x-clip">
//       <style>{CSS}</style>

//       {/* HERO */}
//       <section data-tone={T("dark")} className={`${band} relative overflow-hidden px-5 pb-20 pt-24 sm:px-8 sm:pb-24 sm:pt-28`}>
//         <button type="button" onClick={toggle} aria-label="Swap light and dark sections" className="absolute right-5 top-5 z-10 grid h-9 w-9 place-items-center rounded-full border border-[color:var(--ln)] bg-[var(--sf)] transition duration-500 hover:rotate-180 hover:bg-[var(--ac)] hover:text-[color:var(--ink)] sm:right-8">
//           {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
//         </button>
//         <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
//           <div>
//             <p className={`${eyebrow} op0 opacity-0 ${mounted ? "[animation:rise_.8s_.1s_forwards]" : ""}`}>Bookkeeping · Accounting support · Tax-ready records</p>
//             <h1 className="m-0 text-[clamp(2.4rem,6vw,4.8rem)] font-extrabold leading-[1] tracking-[-0.045em]">
//               <span className="block overflow-hidden pb-[0.1em]"><span className={line} style={{ animationDelay: ".15s" }}>Clear books.</span></span>
//               <span className="block overflow-hidden pb-[0.1em]"><span className={line} style={{ animationDelay: ".3s" }}>Confident decisions.</span></span>
//               <span className="block overflow-hidden pb-[0.1em]"><span className={`${line} text-[color:var(--ac)]`} style={{ animationDelay: ".45s" }}>Fewer surprises.</span></span>
//             </h1>
//             <p className={`mb-8 mt-6 max-w-[480px] text-base leading-7 text-[color:var(--mu)] sm:text-lg sm:leading-8 op0 opacity-0 ${mounted ? "[animation:rise_.9s_.7s_forwards]" : ""}`}>
//               Reliable bookkeeping and accounting support for small businesses across the United States and Canada. Organised records, meaningful reports, and a more manageable tax time.
//             </p>
//             <div className={`flex flex-wrap items-center gap-5 op0 opacity-0 ${mounted ? "[animation:rise_.9s_.9s_forwards]" : ""}`}>
//               <Cta>Book a discovery call</Cta>
//               <a href="#services" className="group inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--mu)] transition-colors hover:text-[color:var(--tx)]">
//                 <span className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--ln)] group-hover:border-[color:var(--ac)]"><ChevronDown size={16} /></span>
//                 Explore our services
//               </a>
//             </div>
//           </div>
//           <HeroScene />
//         </div>
//       </section>

//       {/* TRUST STRIP */}
//       <section data-tone={T("light")} className={`${band} border-b border-[color:var(--ln)] px-5 py-8 sm:px-8`}>
//         <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-x-10 gap-y-4 text-sm">
//           <span className="font-semibold">United States &amp; Canada</span>
//           <span className="text-[color:var(--mu)]">Works inside your own accounts</span>
//           <span className="flex flex-wrap gap-x-6 gap-y-1 text-[color:var(--mu)]">{tools.map((t) => <b key={t} className="font-semibold">{t}</b>)}</span>
//         </div>
//       </section>

//       {/* SERVICES */}
//       <section id="services" ref={svcRef} data-tone={T("light")} className={`${band} px-5 pb-24 pt-16 sm:px-8 sm:pt-20`}>
//         <div className="mx-auto max-w-[1200px]">
//           <Rise show={svcSeen} className="mb-10 grid gap-5 lg:grid-cols-[1.2fr_1fr] lg:items-end">
//             <div>
//               <p className={eyebrow}>Services</p>
//               <h2 className={h2}>Support built around your business.</h2>
//             </div>
//             <p className="m-0 max-w-[420px] text-base leading-7 text-[color:var(--mu)]">Choose ongoing support, help with a backlog, or a focused project. Deliverables and responsibilities are defined before work begins.</p>
//           </Rise>
//           <Rise show={svcSeen} delay={0.15} className="flex flex-col gap-3 lg:h-[450px] lg:flex-row">
//             {services.map((s, i) => {
//               const on = i === open;
//               return (
//                 <div key={s.t} onMouseEnter={() => setOpen(i)} className={`relative flex min-w-0 flex-col overflow-hidden rounded-3xl border transition-[flex-grow,background-color,border-color] duration-700 [transition-timing-function:cubic-bezier(.2,.8,.2,1)] ${on ? "border-[color:var(--ac)] bg-[var(--ac)] text-[color:var(--ink)] lg:flex-[4.5]" : "border-[color:var(--ln)] bg-[var(--sf)] lg:flex-1"}`}>
//                   <button type="button" onClick={() => setOpen(i)} aria-expanded={on} className={`flex w-full items-center gap-3 p-5 text-left ${on ? "" : "lg:h-full lg:flex-col lg:items-start lg:justify-between"}`}>
//                     <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full ${on ? "bg-[var(--ink)] text-[color:var(--ac)]" : "bg-[var(--ac)] text-[color:var(--ink)]"}`}><s.Icon size={20} /></span>
//                     <span className={`text-base font-bold leading-tight tracking-tight ${on ? "" : "lg:whitespace-nowrap lg:[writing-mode:vertical-rl] lg:rotate-180"}`}>{s.t}</span>
//                   </button>
//                   {on && (
//                     <div className="px-5 pb-6 lg:min-w-[400px]">
//                       <p className="mb-5 mt-0 max-w-[400px] text-lg font-semibold leading-snug [animation:slide_.6s_both]">{s.l}</p>
//                       <ul className="m-0 grid list-none gap-2.5 p-0">
//                         {s.b.map((b, bi) => (
//                           <li key={b} className="op0 flex items-start gap-2.5 text-sm leading-6 opacity-0 [animation:slide_.5s_forwards]" style={{ animationDelay: `${0.15 + bi * 0.09}s` }}>
//                             <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--ink)] text-[color:var(--ac)]"><Check size={12} strokeWidth={3} /></span>{b}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </Rise>
//           <p className="mt-6 max-w-[640px] text-xs leading-5 text-[color:var(--mu)]">Tax return preparation and advisory services are provided only within the scope and qualifications agreed for your engagement.</p>
//         </div>
//       </section>

//       {/* BEFORE / AFTER */}
//       <section ref={baRef} data-tone={T("dark")} className={`${band} px-5 py-20 sm:px-8 sm:py-28`}>
//         <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
//           <Rise show={baSeen}>
//             <p className={eyebrow}>Catch-up and clean-up</p>
//             <h2 className={h2}>From a pile of transactions to books you can trust.</h2>
//             <p className="mb-8 mt-4 max-w-[440px] text-base leading-7 text-[color:var(--mu)]">When books fall behind, cash flow, profitability and tax prep all get harder to see. We review overdue, duplicated or misclassified items and document anything that needs your input.</p>
//             <Cta>Book a discovery call</Cta>
//           </Rise>
//           <Rise show={baSeen} delay={0.2}>
//             <div className="relative h-[430px] overflow-hidden rounded-3xl border border-[color:var(--ln)] bg-[var(--bg2)]">
//               <ul className="absolute inset-0 m-0 list-none p-4 pt-12">
//                 {clean.map(([a, b, c]) => (
//                   <li key={a} className="flex items-center gap-3 border-b border-[color:var(--ln)] py-[9px] text-[12px]">
//                     <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-[var(--ac)] text-[color:var(--ink)]"><Check size={10} strokeWidth={3.5} /></span>
//                     <span className="min-w-0 flex-1 truncate">{a}</span>
//                     <span className="hidden rounded-md bg-[var(--sf)] px-2 py-0.5 text-[11px] text-[color:var(--mu)] sm:block">{c}</span>
//                     <span className="w-20 text-right font-semibold tabular-nums">{b}</span>
//                   </li>
//                 ))}
//               </ul>
//               <span className="absolute right-4 top-4 rounded-full bg-[var(--ac)] px-3 py-1 text-[11px] font-semibold text-[color:var(--ink)]">After: reconciled</span>
//               <div className="absolute inset-0 bg-[var(--bg2)]" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
//                 <ul className="m-0 list-none p-4 pt-12 [filter:saturate(.4)]">
//                   {messy.map(([a, b, c], i) => (
//                     <li key={a} className="flex items-center gap-3 border-b border-dashed border-[color:var(--ln)] py-[9px] font-mono text-[12px] text-[color:var(--mu)]" style={{ transform: `translateX(${(i % 3) * 3 - 3}px) rotate(${i % 2 ? 0.25 : -0.25}deg)` }}>
//                       <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full border border-[color:var(--mu)] text-[9px]">?</span>
//                       <span className="min-w-0 flex-1 truncate">{a}</span>
//                       <span className="hidden italic opacity-70 sm:block">{c}</span>
//                       <span className="w-20 text-right tabular-nums">{b}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <span className="absolute left-4 top-4 rounded-full border border-[color:var(--ln)] bg-[var(--bg2)] px-3 py-1 text-[11px] font-semibold text-[color:var(--mu)]">Before: messy</span>
//               </div>
//               <div aria-hidden="true" className="pointer-events-none absolute bottom-0 top-0 w-px bg-[var(--ac)]" style={{ left: `${pos}%` }}>
//                 <span className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[var(--ac)] text-[color:var(--ink)] shadow-lg"><ChevronLeft size={13} className="-mr-1" /><ChevronRight size={13} className="-ml-1" /></span>
//               </div>
//               <input type="range" min={0} max={100} value={pos} aria-label="Slide to compare messy books with reconciled books" onChange={(e) => { touched.current = true; setPos(Number(e.target.value)); }} className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" />
//             </div>
//             <p className="mt-3 text-center text-xs text-[color:var(--mu)]">Drag to compare. Sample transactions for illustration only.</p>
//           </Rise>
//         </div>
//       </section>

//       {/* PROCESS */}
//       <section data-tone={T("light")} className={`${band} px-5 py-20 sm:px-8 sm:py-24`}>
//         <div className="mx-auto max-w-[1200px]">
//           <p className={eyebrow}>Our process</p>
//           <h2 className={`${h2} max-w-[560px]`}>A practical process, with clear expectations.</h2>
//           <ol className="relative m-0 mt-12 grid list-none gap-10 p-0 md:grid-cols-4 md:gap-6">
//             <span aria-hidden="true" className="absolute left-0 right-0 top-[18px] hidden h-px bg-[color:var(--ln)] md:block" />
//             {steps.map(([t, d], i) => (
//               <li key={t} className="relative">
//                 <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--ac)] text-sm font-bold text-[color:var(--ink)]">{i + 1}</span>
//                 <h3 className="mb-2 mt-5 text-xl font-bold tracking-tight">{t}</h3>
//                 <p className="m-0 max-w-[260px] text-sm leading-6 text-[color:var(--mu)]">{d}</p>
//               </li>
//             ))}
//           </ol>
//         </div>
//       </section>

//       {/* US + CANADA */}
//       <section ref={rgRef} data-tone={T("dark")} className={`${band} px-5 py-20 sm:px-8 sm:py-28`}>
//         <div className="mx-auto max-w-[1200px]">
//           <Rise show={rgSeen} className="mb-10 max-w-[640px]">
//             <p className={eyebrow}>Bookkeeping for US and Canadian businesses</p>
//             <h2 className={h2}>Workflows shaped around where you operate.</h2>
//             <p className="mt-4 text-sm leading-6 text-[color:var(--mu)]">The right process depends on your country, state or province, entity structure and obligations. Unusual items are reviewed, not coded by assumption.</p>
//           </Rise>
//           <div className="grid gap-4 md:grid-cols-2">
//             {regions.map((r, i) => (
//               <Rise key={r.flag} show={rgSeen} delay={0.1 + i * 0.12}>
//                 <article className="flex h-full flex-col rounded-3xl border border-[color:var(--ln)] bg-[var(--bg2)] p-7 transition duration-500 hover:border-[color:var(--ac)]">
//                   <span className="mb-5 grid h-11 w-11 place-items-center rounded-full bg-[var(--ac)] text-sm font-extrabold text-[color:var(--ink)]">{r.flag}</span>
//                   <h3 className="m-0 text-2xl font-bold tracking-tight">{r.t}</h3>
//                   <p className="mb-5 mt-3 text-sm leading-6 text-[color:var(--mu)]">{r.d}</p>
//                   <ul className="m-0 mb-7 grid list-none gap-2 p-0">
//                     {r.b.map((b) => (<li key={b} className="flex items-start gap-2.5 text-sm"><Check size={16} className="mt-0.5 shrink-0 text-[color:var(--ac)]" />{b}</li>))}
//                   </ul>
//                   <div className="mt-auto"><Cta>{r.cta}</Cta></div>
//                 </article>
//               </Rise>
//             ))}
//           </div>
//           <p className="mt-6 max-w-[680px] text-xs leading-5 text-[color:var(--mu)]">No particular filing outcome or tax savings is guaranteed. Tax services are offered only where covered by the firm&apos;s actual qualifications and engagement terms.</p>
//         </div>
//       </section>

//       {/* SOFTWARE + INDUSTRIES */}
//       <section data-tone={T("light")} className={`${band} px-5 py-20 sm:px-8 sm:py-24`}>
//         <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-2">
//           <div>
//             <p className={eyebrow}>Accounting software</p>
//             <h2 className={h2}>Work with the platform that suits you.</h2>
//             <p className="mb-6 mt-4 max-w-[420px] text-sm leading-6 text-[color:var(--mu)]">We maintain an existing setup or plan a more orderly transition, where engagement and access permissions allow.</p>
//             <ul className="m-0 grid list-none grid-cols-2 gap-3 p-0">
//               {tools.map((t) => (
//                 <li key={t} className="group flex items-center gap-3 rounded-2xl border border-[color:var(--ln)] bg-[var(--sf)] p-4 transition duration-300 hover:-translate-y-1 hover:border-[color:var(--ac)]">
//                   <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[var(--ac)] text-sm font-extrabold text-[color:var(--ink)] transition-transform duration-500 group-hover:rotate-[360deg]">{t[0]}</span>
//                   <span className="text-sm font-semibold leading-tight">{t}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <p className={eyebrow}>Industries</p>
//             <h2 className={h2}>Shaped around how your money moves.</h2>
//             <ul className="m-0 mt-6 list-none divide-y divide-[color:var(--ln)] border-y border-[color:var(--ln)] p-0">
//               {industries.map(([t, d]) => (
//                 <li key={t} className="grid gap-1 py-4 sm:grid-cols-[180px_1fr] sm:gap-6">
//                   <b className="text-sm">{t}</b>
//                   <span className="text-sm leading-6 text-[color:var(--mu)]">{d}</span>
//                 </li>
//               ))}
//             </ul>
//             <p className="mt-4 text-xs leading-5 text-[color:var(--mu)]">We confirm fit before accepting work that needs specialist industry, inventory, trust-account, multi-entity or regulated-sector expertise.</p>
//           </div>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section data-tone={T("dark")} className={`${band} px-5 py-20 sm:px-8 sm:py-24`}>
//         <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.8fr_1.2fr]">
//           <div>
//             <p className={eyebrow}>FAQ</p>
//             <h2 className={h2}>Questions, answered plainly.</h2>
//           </div>
//           <div className="border-t border-[color:var(--ln)]">
//             {faqs.map(([q, a], i) => {
//               const on = faq === i;
//               return (
//                 <div key={q} className="border-b border-[color:var(--ln)]">
//                   <button type="button" aria-expanded={on} onClick={() => setFaq(on ? null : i)} className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold">
//                     {q}
//                     <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[color:var(--ln)] transition-transform duration-300 ${on ? "rotate-45 bg-[var(--ac)] text-[color:var(--ink)]" : ""}`}><Plus size={15} /></span>
//                   </button>
//                   <div className={`grid transition-[grid-template-rows] duration-500 ${on ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
//                     <p className="m-0 overflow-hidden text-sm leading-6 text-[color:var(--mu)]"><span className="block pb-5">{a}</span></p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section data-tone={T("light")} className={`${band} relative overflow-hidden px-5 py-24 sm:px-8 sm:py-28`}>
//         <div aria-hidden="true" className="absolute -right-20 top-0 h-[120%] w-[60%] bg-[radial-gradient(circle_at_70%_30%,var(--gl),transparent_60%)] [animation:breathe_7s_ease-in-out_infinite]" />
//         <div className="relative mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
//           <div>
//             <h2 className="m-0 text-[clamp(2rem,5vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-0.04em]">Ready for clearer books?</h2>
//             <p className="mb-0 mt-4 max-w-[420px] text-base leading-7 text-[color:var(--mu)]">Schedule a discovery call with {FIRM}. Not sure what you need? We will help define the first practical step.</p>
//           </div>
//           <div className="flex flex-col items-start gap-3">
//             <Cta big>Book a discovery call</Cta>
//             <span className="text-sm text-[color:var(--mu)]">{EMAIL}</span>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }








// "use client";

// import { useEffect, useRef, useState } from "react";
// import type { ReactNode } from "react";
// import Link from "next/link";
// import {
//   ArrowLeft, ArrowRight, ArrowUpRight, BarChart3, Clock, Eye, FileCheck, Play, Plus,
//   Receipt, RefreshCw, Scale, ShieldCheck, Target, Wrench,
// } from "lucide-react";

// /* ------------------------------------------------------------------
//    IMAGES: same photo set and dark treatment as the reference. Replace
//    any URL with your own file (e.g. "/images/hero.jpg"). If a link
//    fails, a dark maroon fallback shows so the layout never breaks.
// ------------------------------------------------------------------- */
// const U = (id: string, w = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;
// const IMG = {
//   hero: U("photo-1497366754035-f200968a6e72", 1800),
//   focus: U("photo-1554224155-6726b3ff858f", 1100),
//   workBg: U("photo-1497215728101-856f4ea42174", 1200),
//   faq: U("photo-1497215728101-856f4ea42174", 900),
//   cta: U("photo-1486406146926-c627a92ad1ab", 1400),
// };
// const EMAIL_PAGE = "/contact";

// const stats = [
//   { n: 7, s: "", l: "Core services" },
//   { n: 4, s: "", l: "Accounting platforms" },
//   { n: 2, s: "", l: "Countries served" },
//   { n: 4, s: "", l: "Simple steps" },
// ];
// const platforms = ["QuickBooks Online", "Xero", "Sage", "Zoho Books"];

// const services = [
//   { t: "Monthly Bookkeeping", d: "Categorisation and reconciliation with a dependable monthly routine.", Icon: Receipt },
//   { t: "Catch-up & Clean-up", d: "Bring overdue, duplicated or misclassified books back in order.", Icon: Wrench },
//   { t: "Management Reports", d: "Profit and loss, balance sheet and cash-flow insights.", Icon: BarChart3 },
//   { t: "Tax-Time Support", d: "Year-end schedules and organised records for your tax preparer.", Icon: FileCheck },
// ];
// const benefits = [
//   { t: "Clear Cash Flow", d: "See where your money goes.", Icon: Eye },
//   { t: "Tax-Ready Records", d: "Organised for your tax preparer.", Icon: FileCheck },
//   { t: "Save Time", d: "Spend less time sorting transactions.", Icon: Clock },
//   { t: "Fewer Surprises", d: "Open items flagged early.", Icon: ShieldCheck },
// ];
// const steps = [
//   ["Discover", "We learn about your business, records and deadlines."],
//   ["Set Up", "We agree scope, access and the close calendar."],
//   ["Keep Books Moving", "We review and reconcile on the agreed schedule."],
//   ["Review & Improve", "We share reports and flag open questions."],
// ];
// const tools = [
//   { t: "QuickBooks Online", c: "#2CA01C", l: "Q" },
//   { t: "Xero", c: "#13B5EA", l: "X" },
//   { t: "Sage", c: "#1B9A4B", l: "S" },
//   { t: "Zoho Books", c: "#D4202A", l: "Z" },
// ];
// const tiles = [
//   { t: "Monthly Financial Report", c: "P&L, balance sheet, cash flow", img: U("photo-1543286386-713bdd548da4") },
//   { t: "Invoicing & A/R Aging", c: "Who has paid, who is late", img: U("photo-1450101499163-c8848c66ca85") },
//   { t: "Bookkeeping Setup", c: "Chart of accounts, organised", img: U("photo-1554224154-26032ffc0d07") },
//   { t: "Expense Tracking", c: "Where the money goes", img: U("photo-1554224155-6726b3ff858f") },
//   { t: "Monthly Overview", c: "Trends at a glance", img: U("photo-1551288049-bebda4e38f71") },
//   { t: "Bank Reconciliation", c: "Statements matched, line by line", img: U("photo-1568992687947-868a62a9f521") },
// ];
// const why = [
//   { t: "Consistency", d: "A repeatable close and reconciliation process.", Icon: RefreshCw },
//   { t: "Transparency", d: "Missing items and open questions raised early.", Icon: Eye },
//   { t: "Fit-for-Purpose Reporting", d: "Information that supports your decisions.", Icon: Target },
//   { t: "Responsible Boundaries", d: "Clear scope; qualified professionals for filings.", Icon: Scale },
// ];
// /* Working principles from your About copy, not client quotes. Swap in verified reviews when you have them. */
// const voices = [
//   { q: "Useful financial information starts with dependable records. We value careful reconciliations, documented questions and sensible controls.", n: "Our approach", r: "How we work" },
//   { q: "We focus on reports that are understandable, not just completed tasks, so you can have better conversations with lenders and tax professionals.", n: "Our reporting", r: "What you get" },
//   { q: "We flag missing information rather than assume an answer, and involve appropriately qualified professionals when specialist advice is needed.", n: "Our boundaries", r: "How we stay accurate" },
// ];
// const faqs = [
//   ["Do you work with businesses in both the US and Canada?", "We are building workflows for both markets. Availability depends on your location, structure, accounting needs and the tax work requested. We confirm fit before onboarding."],
//   ["Which accounting software do you support?", "QuickBooks Online, Xero, Sage and Zoho Books, subject to your subscription, data access and engagement requirements."],
//   ["Can you fix books that are several months behind?", "Often, yes. We assess the period, transaction volume and source documents, then agree a cleanup plan and list items needing your approval."],
//   ["Do you prepare tax returns?", "That depends on country, return type, engagement terms and required qualifications. We confirm during onboarding whether we prepare, coordinate, or provide tax-ready records only."],
//   ["How much do your services cost?", "Pricing depends on transaction volume, accounts and entities, software condition, reporting needs and any catch-up work. We quote a defined scope after an initial review."],
// ];
// const words = ["Bookkeeping", "Reconciliation", "Reporting", "Tax-Ready"];

// const CSS = `
// @keyframes bkUp{from{transform:translateY(110%)}to{transform:none}}
// @keyframes bkRise{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}
// @keyframes bkZoom{from{transform:scale(1.02)}to{transform:scale(1.14)}}
// @keyframes bkGlow{0%,100%{opacity:.45}50%{opacity:.95}}
// @keyframes bkBar{from{transform:scaleX(0)}to{transform:scaleX(1)}}
// @keyframes bkSwap{from{opacity:0;transform:translateX(24px)}to{opacity:1;transform:none}}
// @media (prefers-reduced-motion:reduce){.bk *{animation:none!important;transition:none!important}.bk .rv{opacity:1!important;transform:none!important}.bk .ln{transform:none!important}}
// .bk :focus-visible{outline:2px solid #c9566d;outline-offset:3px}
// `;

// /* ---------- helpers ---------- */
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
// function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
//   const [ref, seen] = useInView<HTMLDivElement>(0.12);
//   return (
//     <div ref={ref} className={`rv opacity-0 ${seen ? "[animation:bkRise_.9s_cubic-bezier(.2,.7,.2,1)_forwards]" : ""} ${className}`} style={{ animationDelay: `${delay}s` }}>{children}</div>
//   );
// }
// function Photo({ src, alt, className = "", imgClass = "", dark = true }: { src: string; alt: string; className?: string; imgClass?: string; dark?: boolean }) {
//   const [bad, setBad] = useState(false);
//   return (
//     <div className={`relative overflow-hidden bg-[#140d0e] ${className}`}>
//       {!bad ? (
//         <img src={src} alt={alt} loading="lazy" onError={() => setBad(true)} className={`h-full w-full object-cover ${dark ? "brightness-[.62] contrast-110 saturate-[.8] sepia-[.2]" : ""} ${imgClass}`} />
//       ) : (
//         <div className="h-full w-full bg-[radial-gradient(circle_at_70%_20%,#6b1a2b,#140d0e_70%)]" />
//       )}
//       {dark && <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0e0b0b]/55 via-transparent to-[#871D34]/10" />}
//     </div>
//   );
// }
// function Count({ n, s, play }: { n: number; s: string; play: boolean }) {
//   const [v, setV] = useState(0);
//   useEffect(() => {
//     if (!play) return;
//     let raf = 0;
//     const t0 = performance.now();
//     const tick = (t: number) => {
//       const k = Math.min(1, (t - t0) / 1400);
//       setV(Math.round(n * (1 - Math.pow(1 - k, 3))));
//       if (k < 1) raf = requestAnimationFrame(tick);
//     };
//     raf = requestAnimationFrame(tick);
//     return () => cancelAnimationFrame(raf);
//   }, [play, n]);
//   return <>{v}{s}</>;
// }

// const eyebrow = "text-[10px] font-bold uppercase tracking-[3px] text-[#871D34]";
// const wrap = "mx-auto max-w-[1280px] px-5 md:px-10";
// const solid = "group inline-flex items-center gap-4 bg-[#871D34] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#a02340] hover:shadow-[0_14px_30px_-12px_#871D34]";
// const arrowCls = "transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5";
// const iconBox = "grid place-items-center bg-[#F3E8E8] text-[#871D34] transition duration-500 group-hover:bg-[#871D34] group-hover:text-white";

// /* ---------- page ---------- */
// export default function BookkeepingPage() {
//   const [mounted, setMounted] = useState(false);
//   const [prog, setProg] = useState(0);
//   const [sRef, sSeen] = useInView<HTMLElement>(0.3);
//   const [pRef, pSeen] = useInView<HTMLDivElement>(0.3);
//   const [faq, setFaq] = useState<number | null>(0);
//   const [vi, setVi] = useState(0);

//   useEffect(() => {
//     setMounted(true);
//     const on = () => setProg(window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight));
//     window.addEventListener("scroll", on, { passive: true });
//     return () => window.removeEventListener("scroll", on);
//   }, []);
//   useEffect(() => {
//     if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
//     const id = setTimeout(() => setVi((v) => (v + 1) % voices.length), 7000);
//     return () => clearTimeout(id);
//   }, [vi]);

//   const onHero = (e: React.MouseEvent<HTMLElement>) => {
//     const r = e.currentTarget.getBoundingClientRect();
//     e.currentTarget.style.setProperty("--px", String(((e.clientX - r.left) / r.width - 0.5) * 2));
//     e.currentTarget.style.setProperty("--py", String(((e.clientY - r.top) / r.height - 0.5) * 2));
//   };
//   const line = `ln block translate-y-[110%] ${mounted ? "[animation:bkUp_1s_cubic-bezier(.2,.8,.2,1)_forwards]" : ""}`;

//   return (
//     <main className="bk min-h-screen overflow-x-clip bg-[#F8F6F2] text-[#171615] selection:bg-[#871D34] selection:text-white">
//       <style>{CSS}</style>
//       <div aria-hidden="true" className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-gradient-to-r from-[#871D34] to-[#e4607a]" style={{ transform: `scaleX(${prog})` }} />

//       {/* ================= HERO ================= */}
//       <section onMouseMove={onHero} className="relative isolate overflow-hidden bg-[#0e0b0b] text-white">
//         <div className="absolute inset-y-0 right-0 -z-10 w-full transition-transform duration-300 ease-out [transform:translate(calc(var(--px,0)*-14px),calc(var(--py,0)*-8px))] lg:w-[74%]">
//           <Photo src={IMG.hero} alt="Modern office at dusk" dark={false} className="h-full w-full scale-110" imgClass="brightness-[.5] contrast-110 saturate-75 sepia-[.3] [animation:bkZoom_22s_ease-in-out_infinite_alternate]" />
//           <div className="absolute inset-0 bg-gradient-to-r from-[#0e0b0b] via-[#0e0b0b]/55 to-transparent" />
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(255,170,90,.28),transparent_55%)] [animation:bkGlow_6s_ease-in-out_infinite]" />
//         </div>
//         <div className={`${wrap} relative z-10 pb-28 pt-24 md:pb-40 md:pt-36`}>
//           <p className={`mb-6 text-[10px] font-semibold uppercase tracking-[4px] text-white/70 opacity-0 ${mounted ? "[animation:bkRise_.8s_.1s_forwards]" : ""}`}>Bookkeeping &amp; Accounting</p>
//           <h1 className="m-0 text-[clamp(3rem,7.5vw,6.2rem)] font-medium leading-[0.98] tracking-[-0.05em]">
//             <span className="block overflow-hidden pb-[0.08em]"><span className={line} style={{ animationDelay: ".15s" }}>Clear Books.</span></span>
//             <span className="block overflow-hidden pb-[0.08em]"><span className={line} style={{ animationDelay: ".3s" }}>Stay Confident<span className="text-[#c9314f]">.</span></span></span>
//           </h1>
//           <p className={`mb-9 mt-7 max-w-[440px] text-base leading-7 text-white/75 opacity-0 md:text-lg ${mounted ? "[animation:bkRise_.9s_.7s_forwards]" : ""}`}>
//             Reliable bookkeeping and accounting support for small businesses across the United States and Canada, so records stay organised and tax time gets easier.
//           </p>
//           <div className={`flex flex-wrap items-center gap-6 opacity-0 ${mounted ? "[animation:bkRise_.9s_.9s_forwards]" : ""}`}>
//             <Link href={EMAIL_PAGE} className={solid}>Let&apos;s Talk <ArrowRight size={16} className={arrowCls} /></Link>
//             <Link href="#process" className="group inline-flex items-center gap-3 text-sm font-medium text-white/85 hover:text-white">
//               <span className="relative grid h-10 w-10 place-items-center rounded-full border border-white/40 transition group-hover:border-[#c9566d] group-hover:bg-[#871D34]">
//                 <span className="absolute inset-0 rounded-full border border-white/40 [animation:bkGlow_2.4s_ease-in-out_infinite]" /><Play size={13} fill="currentColor" />
//               </span>
//               How It Works
//             </Link>
//           </div>
//         </div>
//         <ul className="absolute bottom-10 right-8 z-10 m-0 hidden list-none flex-col gap-1.5 p-0 text-[9px] font-semibold uppercase tracking-[0.35em] text-white/70 lg:flex">
//           <li className="mb-2 h-px w-8 bg-white/50" />
//           {words.map((w) => (<li key={w}>{w}</li>))}
//         </ul>
//       </section>

//       {/* ================= STATS ================= */}
//       <section ref={sRef} className="border-b border-[#E7E1DA] bg-[#FFFDFA]">
//         <div className={`${wrap} grid items-center gap-8 py-9 lg:grid-cols-[1.3fr_1fr]`}>
//           <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
//             {stats.map((s) => (
//               <div key={s.l} className="border-l border-[#E7E1DA] pl-5 first:border-0 first:pl-0">
//                 <div className="text-3xl font-medium tracking-[-0.04em] md:text-4xl"><Count n={s.n} s={s.s} play={sSeen} /></div>
//                 <div className="mt-1 text-[11px] text-[#77716C]">{s.l}</div>
//               </div>
//             ))}
//           </div>
//           <div>
//             <p className="m-0 mb-3 text-[8px] font-semibold uppercase tracking-[3px] text-[#A59A8F]">Works with</p>
//             <div className="flex flex-wrap gap-x-7 gap-y-2 text-sm font-medium tracking-[0.04em] text-[#5F5954]">{platforms.map((p) => (<span key={p} className="transition-colors hover:text-[#871D34]">{p}</span>))}</div>
//           </div>
//         </div>
//       </section>

//       {/* ================= SERVICES ================= */}
//       <section id="services" className={`${wrap} py-20 md:py-24`}>
//         <Reveal className="grid items-end gap-6 lg:grid-cols-[1.2fr_1fr]">
//           <div>
//             <p className={eyebrow}>Our bookkeeping services</p>
//             <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">Reliable Bookkeeping for Small Businesses.</h2>
//           </div>
//           <div className="flex flex-wrap items-end justify-between gap-4">
//             <p className="m-0 max-w-[400px] text-sm leading-6 text-[#77716C]">Ongoing support, help with a backlog, or a focused project. We define the deliverables and responsibilities before work begins.</p>
//             <Link href="/services" className="group inline-flex items-center gap-2 text-xs font-bold text-[#871D34]">View all services <ArrowRight size={14} className={arrowCls} /></Link>
//           </div>
//         </Reveal>
//         <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
//           {services.map(({ t, d, Icon }, i) => (
//             <Reveal key={t} delay={i * 0.1}>
//               <div className="group relative h-full lg:border-l lg:border-[#E7E1DA] lg:px-7 lg:first:border-0 lg:first:pl-0">
//                 <span className={`${iconBox} h-12 w-12 border border-[#E7E1DA] group-hover:scale-110`}><Icon size={20} strokeWidth={1.5} /></span>
//                 <h3 className="mb-2 mt-5 text-base font-semibold">{t}</h3>
//                 <p className="m-0 max-w-[220px] text-xs leading-5 text-[#77716C]">{d}</p>
//                 <span className="mt-5 grid h-8 w-8 place-items-center rounded-full border border-[#D9D0C6] transition duration-500 group-hover:rotate-45 group-hover:border-[#871D34] group-hover:bg-[#871D34] group-hover:text-white"><ArrowUpRight size={14} /></span>
//               </div>
//             </Reveal>
//           ))}
//         </div>
//       </section>

//       {/* ================= MORE THAN JUST BOOKKEEPING ================= */}
//       <section className="bg-[#EEE9E1]">
//         <div className={`${wrap} grid items-center gap-10 py-16 lg:grid-cols-[0.8fr_0.85fr_0.7fr] lg:gap-12`}>
//           <Reveal>
//             <p className={eyebrow}>More than just bookkeeping</p>
//             <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.04em] md:text-4xl">Clear Records. Better Decisions.</h2>
//             <p className="mb-6 mt-4 text-sm leading-7 text-[#77716C]">When books fall behind, cash flow, profitability and tax prep all get harder to see. Our outsourced bookkeeping gives you a clearer view of your numbers and a consistent process for keeping records up to date.</p>
//             <Link href={EMAIL_PAGE} className={solid}>Let&apos;s Talk <ArrowRight size={15} className={arrowCls} /></Link>
//           </Reveal>
//           <Reveal delay={0.12}>
//             <Photo src={IMG.focus} alt="Calculator and financial documents" className="aspect-[1.2/1] shadow-2xl shadow-black/20" imgClass="brightness-[.78] [animation:bkZoom_24s_ease-in-out_infinite_alternate]" />
//           </Reveal>
//           <ul className="m-0 grid list-none gap-5 p-0">
//             {benefits.map(({ t, d, Icon }, i) => (
//               <Reveal key={t} delay={0.1 + i * 0.08}>
//                 <li className="group flex items-start gap-4">
//                   <span className={`${iconBox} h-10 w-10 shrink-0 border border-[#E7D5D8]`}><Icon size={17} strokeWidth={1.6} /></span>
//                   <span><b className="block text-sm">{t}</b><span className="text-xs text-[#77716C]">{d}</span></span>
//                 </li>
//               </Reveal>
//             ))}
//           </ul>
//         </div>
//       </section>

//       {/* ================= PROCESS ================= */}
//       <section id="process" className={`${wrap} py-16`}>
//         <div ref={pRef} className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:items-center">
//           <div>
//             <p className={eyebrow}>Our process</p>
//             <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.04em] md:text-4xl">A Simple Process. From Start to Books.</h2>
//           </div>
//           <ol className="relative m-0 grid list-none gap-8 p-0 sm:grid-cols-4">
//             <span aria-hidden="true" className={`absolute left-0 top-[11px] hidden h-px w-full origin-left bg-[#871D34]/35 sm:block ${pSeen ? "[animation:bkBar_1.6s_ease-out_forwards]" : "scale-x-0"}`} />
//             {steps.map(([t, d], i) => (
//               <li key={t} className="group relative sm:border-l sm:border-[#E7E1DA] sm:pl-5 sm:first:border-0 sm:first:pl-0">
//                 <span className="relative inline-block bg-[#F8F6F2] pr-2 text-xs font-bold text-[#871D34]">0{i + 1}</span>
//                 <h3 className="mb-1.5 mt-3 text-sm font-semibold transition-colors group-hover:text-[#871D34]">{t}</h3>
//                 <p className="m-0 max-w-[170px] text-[11px] leading-5 text-[#77716C]">{d}</p>
//               </li>
//             ))}
//           </ol>
//         </div>
//       </section>

//       {/* ================= TOOLS ================= */}
//       <section className={`${wrap} pb-20`}>
//         <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">
//           <Reveal>
//             <p className={eyebrow}>Tools we work with</p>
//             <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.04em] md:text-4xl">Accounting Software We Support.</h2>
//             <p className="mt-3 max-w-[340px] text-sm leading-6 text-[#77716C]">We maintain an existing setup or plan a more orderly transition, where engagement and access permissions allow.</p>
//           </Reveal>
//           <ul className="m-0 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-4">
//             {tools.map((t, i) => (
//               <Reveal key={t.t} delay={0.08 + i * 0.08}>
//                 <li className="group flex h-full flex-col items-center gap-3 border border-[#E7E1DA] bg-[#FFFDFA] px-3 py-6 text-center transition duration-500 hover:-translate-y-1.5 hover:border-[#871D34] hover:shadow-xl hover:shadow-black/10">
//                   <span className="grid h-12 w-12 place-items-center rounded-full text-lg font-extrabold text-white transition-transform duration-700 group-hover:rotate-[360deg]" style={{ background: t.c }}>{t.l}</span>
//                   <span className="text-[11px] font-medium text-[#5F5954]">{t.t}</span>
//                 </li>
//               </Reveal>
//             ))}
//           </ul>
//         </div>
//       </section>

//       {/* ================= WHAT YOU RECEIVE (dark) ================= */}
//       <section className="relative isolate overflow-hidden bg-[#0e0b0b] text-white">
//         <div className="absolute inset-y-0 left-0 -z-10 w-full lg:w-[45%]">
//           <Photo src={IMG.workBg} alt="" className="h-full w-full" imgClass="brightness-[.55] [animation:bkZoom_26s_ease-in-out_infinite_alternate]" />
//           <div className="absolute inset-0 bg-gradient-to-r from-[#0e0b0b]/70 to-[#0e0b0b]" />
//         </div>
//         <div className={`${wrap} grid gap-10 py-20 lg:grid-cols-[0.55fr_1.45fr] lg:py-24`}>
//           <Reveal>
//             <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#d98a9a]">What you receive</p>
//             <h2 className="mb-4 mt-4 text-3xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">Clear Reports. Organised Records.</h2>
//             <p className="mb-7 max-w-[300px] text-xs leading-6 text-white/60">Illustrative samples of the deliverables you can expect each month, not client data.</p>
//             <Link href="#services" className={solid}>Explore Services <ArrowRight size={15} className={arrowCls} /></Link>
//           </Reveal>
//           <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
//             {tiles.map((p, i) => (
//               <Reveal key={p.t} delay={i * 0.08}>
//                 <div className="group relative block aspect-[1.1/1] overflow-hidden bg-[#171615]">
//                   <Photo src={p.img} alt={p.t} className="absolute inset-0" imgClass="transition-transform duration-700 group-hover:scale-110" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-colors duration-500 group-hover:from-[#871D34]/85" />
//                   <div className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-2">
//                     <div><h3 className="m-0 text-[12px] font-semibold leading-tight">{p.t}</h3><p className="mb-0 mt-0.5 text-[10px] text-white/70">{p.c}</p></div>
//                     <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/50 transition duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#871D34]"><ArrowUpRight size={12} /></span>
//                   </div>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= WHY CHOOSE ================= */}
//       <section className={`${wrap} py-16`}>
//         <div className="grid items-center gap-8 lg:grid-cols-[0.5fr_1.5fr]">
//           <Reveal>
//             <p className={eyebrow}>Why choose Motive House</p>
//             <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.04em] md:text-4xl">Your Partner in Clear Books.</h2>
//           </Reveal>
//           <ul className="m-0 grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
//             {why.map(({ t, d, Icon }, i) => (
//               <Reveal key={t} delay={i * 0.09}>
//                 <li className="group text-center lg:border-l lg:border-[#E7E1DA] lg:px-5 lg:first:border-0">
//                   <span className="mx-auto grid h-12 w-12 place-items-center text-[#871D34] transition duration-500 group-hover:-translate-y-1 group-hover:scale-110"><Icon size={28} strokeWidth={1.3} /></span>
//                   <b className="mt-3 block text-sm">{t}</b>
//                   <span className="mx-auto mt-1 block max-w-[170px] text-[11px] leading-5 text-[#77716C]">{d}</span>
//                 </li>
//               </Reveal>
//             ))}
//           </ul>
//         </div>
//       </section>

//       {/* ================= VOICES (replace with real reviews later) ================= */}
//       <section className="border-y border-[#E7E1DA] bg-[#FFFDFA]">
//         <div className={`${wrap} py-14`}>
//           <div className="mb-8 flex items-end justify-between gap-4">
//             <div>
//               <p className={eyebrow}>Our commitment</p>
//               <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.04em] md:text-4xl">A Partner You Can Rely On.</h2>
//             </div>
//             <div className="flex gap-2">
//               {[-1, 1].map((d) => (
//                 <button key={d} type="button" aria-label={d < 0 ? "Previous" : "Next"} onClick={() => setVi((v) => (v + d + voices.length) % voices.length)} className="grid h-10 w-10 place-items-center rounded-full border border-[#D9D0C6] transition hover:border-[#871D34] hover:bg-[#871D34] hover:text-white">
//                   {d < 0 ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
//                 </button>
//               ))}
//             </div>
//           </div>
//           <div className="grid gap-4 md:grid-cols-2">
//             {[0, 1].map((k) => {
//               const t = voices[(vi + k) % voices.length];
//               return (
//                 <figure key={`${vi}-${k}`} className={`m-0 border border-[#E7E1DA] bg-[#F8F6F2] p-6 [animation:bkSwap_.6s_both] ${k === 1 ? "hidden md:block" : ""}`}>
//                   <span className="font-serif text-4xl leading-none text-[#871D34]">“</span>
//                   <blockquote className="m-0 min-h-[90px] text-sm leading-6 text-[#5F5954]">{t.q}</blockquote>
//                   <figcaption className="mt-4 flex items-center gap-3 border-t border-[#E7E1DA] pt-4">
//                     <span className="grid h-10 w-10 place-items-center rounded-full bg-[#871D34] text-xs font-bold text-white">{t.n.split(" ")[1][0].toUpperCase()}</span>
//                     <span className="text-xs"><b className="block text-sm">{t.n}</b><span className="text-[#77716C]">{t.r}</span></span>
//                   </figcaption>
//                 </figure>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* ================= FAQ ================= */}
//       <section className={`${wrap} py-16 md:py-20`}>
//         <div className="grid items-center gap-10 lg:grid-cols-[0.5fr_0.55fr_1fr]">
//           <Reveal>
//             <p className={eyebrow}>Frequently asked questions</p>
//             <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.04em] md:text-4xl">Common Questions.</h2>
//           </Reveal>
//           <Reveal delay={0.1}><Photo src={IMG.faq} alt="Desk with plant and books" className="aspect-[1.1/1]" imgClass="brightness-[.7] [animation:bkZoom_24s_ease-in-out_infinite_alternate]" /></Reveal>
//           <div className="border-t border-[#E7E1DA]">
//             {faqs.map(([q, a], i) => {
//               const on = faq === i;
//               return (
//                 <div key={q} className="border-b border-[#E7E1DA]">
//                   <button type="button" aria-expanded={on} onClick={() => setFaq(on ? null : i)} className="flex w-full items-center justify-between gap-4 py-4 text-left text-[13px] font-medium transition-colors hover:text-[#871D34]">
//                     {q}
//                     <span className={`grid h-6 w-6 shrink-0 place-items-center transition-transform duration-300 ${on ? "rotate-45 text-[#871D34]" : ""}`}><Plus size={14} /></span>
//                   </button>
//                   <div className={`grid transition-[grid-template-rows] duration-500 ${on ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
//                     <p className="m-0 overflow-hidden text-xs leading-6 text-[#77716C]"><span className="block pb-4 pr-8">{a}</span></p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* ================= CTA ================= */}
//       <section className="relative isolate overflow-hidden bg-[#0e0b0b] text-white">
//         <div className="absolute inset-y-0 right-0 -z-10 w-full lg:w-1/2">
//           <Photo src={IMG.cta} alt="" className="h-full w-full" imgClass="brightness-[.7] [animation:bkZoom_24s_ease-in-out_infinite_alternate]" />
//           <div className="absolute inset-0 bg-gradient-to-r from-[#0e0b0b] via-[#0e0b0b]/80 to-[#0e0b0b]/30" />
//         </div>
//         <div className={`${wrap} py-20 md:py-24`}>
//           <Reveal>
//             <p className="text-[10px] font-semibold uppercase tracking-[4px] text-white/60">Let&apos;s work together</p>
//             <h2 className="mb-4 mt-5 max-w-[560px] text-4xl font-medium leading-[1.05] tracking-[-0.045em] md:text-6xl">Ready for Clearer Books<span className="text-[#c9314f]">?</span></h2>
//             <p className="mb-8 max-w-[400px] text-sm leading-7 text-white/70">Schedule a discovery call. Not sure what you need? We&apos;ll help define the first practical step.</p>
//             <Link href={EMAIL_PAGE} className={solid}>Let&apos;s Talk <ArrowRight size={16} className={arrowCls} /></Link>
//           </Reveal>
//         </div>
//       </section>
//     </main>
//   );
// }





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
const EMAIL_PAGE = "/contact";

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
            <Link href={EMAIL_PAGE} className={solidD}>Let&apos;s Talk <ArrowRight size={16} className={arrowCls} /></Link>
            <Link href="#process" className="group inline-flex items-center gap-3 text-sm font-medium text-white/85 hover:text-white">
              <span className="relative grid h-10 w-10 place-items-center rounded-full border border-white/40 transition group-hover:border-[#c4506a] group-hover:bg-[#6b1a2b]">
                <span className="absolute inset-0 rounded-full border border-white/40 [animation:bkGlow_2.4s_ease-in-out_infinite]" /><Play size={13} fill="currentColor" />
              </span>
              How It Works
            </Link>
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
            <Link href="/services" className="group inline-flex items-center gap-2 text-xs font-bold text-[#6b1a2b]">View all services <ArrowRight size={14} className={arrowCls} /></Link>
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
            <Link href={EMAIL_PAGE} className={solid}>Let&apos;s Talk <ArrowRight size={15} className={arrowCls} /></Link>
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
              <Link href={EMAIL_PAGE} className={solidD}>{m.cta} <ArrowRight size={15} className={arrowCls} /></Link>
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
          <Reveal delay={0.1}><Photo src={IMG.faq} alt="Desk with plant and books" className="aspect-[1.1/1]" imgClass="brightness-[.7] [animation:bkZoom_24s_ease-in-out_infinite_alternate]" /></Reveal>
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
            <Link href={EMAIL_PAGE} className={solidD}>Let&apos;s Talk <ArrowRight size={16} className={arrowCls} /></Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}