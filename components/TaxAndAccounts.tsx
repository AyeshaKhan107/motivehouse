


// "use client";
 
// import Link from "next/link";
// import { useCallback, useEffect, useRef, useState } from "react";
// import {
//   ArrowLeftRight, ArrowUpRight, BarChart3, BookOpenCheck, Briefcase, Building2, CalendarCheck,
//   Check, ChevronLeft, ChevronRight, ClipboardList, HardHat, ListChecks, Moon, Palette, Plus,
//   RefreshCw, Scale, ScrollText, Search, Settings, ShoppingCart, Sun, Users, Wrench,
// } from "lucide-react";
 
// /* ------------------------------------------------------------------
//    IMAGES: every picture below has a built-in illustration, so the page
//    looks finished today. To use real photos, put files in /public/images
//    and paste the path here, e.g. hero: "/images/hero.jpg".
// ------------------------------------------------------------------- */
// const IMAGES: Record<string, string> = { us: "", ca: "", faq: "", cta: "" };
// const EMAIL = "support@motivehouse.co";
// const FIRM = "Motive House"; // replace
 
// const CSS = `
// .tx [data-tone="dark"]{--bg:#110c0c;--bg2:#1c1514;--tx:#f5efe6;--mu:rgba(245,239,230,.68);--ln:rgba(245,239,230,.14);--sf:rgba(245,239,230,.05);--ac:#a8283f;--ink:#fff8f0;--br:#d9a85b;--gl:rgba(255,184,104,.24)}
// .tx [data-tone="light"]{--bg:#f7f3ed;--bg2:#efe8de;--tx:#1d1214;--mu:rgba(29,18,20,.68);--ln:rgba(107,26,43,.16);--sf:rgba(107,26,43,.05);--ac:#6b1a2b;--ink:#f7f3ed;--br:#a9772a;--gl:rgba(107,26,43,.12)}
// @keyframes rise{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
// @keyframes up{from{transform:translateY(110%)}to{transform:none}}
// @keyframes float{50%{transform:translateY(-7px)}}
// @keyframes breathe{0%,100%{opacity:.6;transform:scale(1)}50%{opacity:1;transform:scale(1.07)}}
// @keyframes stamp{0%{opacity:0;transform:scale(2.4) rotate(-20deg)}65%{opacity:1;transform:scale(.93) rotate(-9deg)}100%{opacity:1;transform:scale(1) rotate(-9deg)}}
// @keyframes fade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
// @keyframes flow{to{stroke-dashoffset:-20}}
// @keyframes pop{from{opacity:0;transform:scale(.4)}to{opacity:1;transform:none}}
// @keyframes ring{0%{transform:scale(1);opacity:.6}100%{transform:scale(1.5);opacity:0}}
// @keyframes sweep{from{transform:scaleX(0)}to{transform:scaleX(1)}}
// @keyframes glow{0%,100%{box-shadow:0 0 0 0 var(--gl)}50%{box-shadow:0 0 0 10px transparent}}
// @media (prefers-reduced-motion:reduce){.tx *{animation:none!important;transition:none!important}.tx .o0{opacity:1!important}.tx .ln{transform:none!important}.tx .bw{filter:none!important;opacity:1!important}.tx .sw{transform:none!important}}
// .tx :focus-visible{outline:2px solid var(--br);outline-offset:3px}
// .tx ::-webkit-scrollbar{display:none}
// `;
 
// /* ---------- Illustrated "photos" (SVG) ---------- */
// function Art({ k }: { k: string }) {
//   const paper = "#f3ead9", ink = "#3a2622", red = "#a8283f", gold = "#d9a85b";
//   const lines = (x: number, y: number, n: number, w = 120) =>
//     Array.from({ length: n }, (_, i) => <rect key={i} x={x} y={y + i * 12} width={i % 3 === 2 ? w * 0.6 : w} height="4" rx="2" fill={ink} opacity=".22" />);
//   return (
//     <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden="true">
//       <defs>
//         <radialGradient id={`g-${k}`} cx="78%" cy="8%" r="75%"><stop offset="0" stopColor="#ffb868" stopOpacity=".5" /><stop offset="1" stopColor="#ffb868" stopOpacity="0" /></radialGradient>
//         <linearGradient id={`d-${k}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#241a18" /><stop offset="1" stopColor="#120d0c" /></linearGradient>
//       </defs>
//       <rect width="400" height="260" fill={`url(#d-${k})`} />
//       <rect width="400" height="260" fill={`url(#g-${k})`} />
//       <rect y="190" width="400" height="70" fill="#1a1211" />
//       <g transform="translate(70 34) rotate(-4)">
//         <rect width="190" height="170" rx="6" fill={paper} />
//         <rect x="14" y="14" width="70" height="8" rx="2" fill={red} />
//         {lines(14, 34, 9, 160)}
//       </g>
//       {(k === "us" || k === "cta") && (<g transform="translate(250 96) rotate(-9)"><rect width="104" height="38" rx="6" fill="none" stroke={red} strokeWidth="4" /><text x="52" y="26" textAnchor="middle" fontSize="20" fontWeight="800" fill={red}>READY</text></g>)}
//       {k === "ca" && (<g transform="translate(262 70)"><path d="M40 0l9 22 20-8-6 24 22 6-22 12 8 22-21-8-10 20-10-20-21 8 8-22L-12 44l22-6-6-24 20 8z" fill={red} opacity=".9" transform="scale(.8)" /></g>)}
//       {k === "faq" && (<g><rect x="262" y="60" width="86" height="116" rx="8" fill="#2c211f" stroke={gold} /><rect x="272" y="72" width="66" height="22" rx="3" fill={gold} opacity=".85" />{[0, 1, 2].map((r) => [0, 1, 2].map((c) => <rect key={`${r}${c}`} x={272 + c * 23} y={104 + r * 22} width="18" height="16" rx="3" fill="#f3ead9" opacity=".8" />))}</g>)}
//       <rect x="40" y="188" width="320" height="6" rx="3" fill="#000" opacity=".35" />
//     </svg>
//   );
// }
// function Pic({ k, className = "" }: { k: string; className?: string }) {
//   const [bad, setBad] = useState(false);
//   const src = IMAGES[k];
//   return (
//     <div className={`overflow-hidden ${className}`}>
//       {src && !bad ? <img src={src} alt="" loading="lazy" onError={() => setBad(true)} className="h-full w-full object-cover" /> : <Art k={k} />}
//     </div>
//   );
// }
 
// /* ------------------------------------------------------------------
//    CONTENT (from your copy pack, word for word)
// ------------------------------------------------------------------- */
// const HERO = {
//   eyebrow: "BOOKKEEPING • ACCOUNTING SUPPORT • TAX-READY RECORDS",
//   lines: ["Clear books.", "Confident decisions.", "Fewer financial surprises."],
//   p: "Reliable bookkeeping and accounting support for small businesses across the United States and Canada. We help keep your records organised, your reports meaningful, and your tax-time preparation more manageable—with support that fits the way your business works.",
//   primary: "Book a Discovery Call",
//   secondary: "Explore Our Services",
// };
 
// const INTRO = {
//   h: "Spend less time sorting transactions—and more time running your business",
//   p: "When books fall behind, it becomes harder to understand cash flow, track profitability, prepare for taxes, or make confident decisions. Our outsourced bookkeeping and accounting support gives you a clearer view of your numbers and a consistent process for keeping financial records up to date.",
// };
 
// const SUPPORT = [
//   { t: "Monthly bookkeeping", d: "Categorisation and reconciliation of business transactions, organised records, and a dependable monthly routine.", I: BookOpenCheck },
//   { t: "Catch-up and clean-up bookkeeping", d: "A structured review of overdue, incomplete, duplicated, or misclassified transactions to help bring your books back into order.", I: ListChecks },
//   { t: "Management reports", d: "Profit and loss, balance sheet, cash-flow insights, and practical explanations of what changed and what deserves attention.", I: BarChart3 },
//   { t: "Tax-time bookkeeping support", d: "Year-end schedules and organised records that help your tax preparer work from clearer, more complete information. Tax return preparation and advisory services are provided only within the scope and qualifications agreed for your engagement.", I: ScrollText },
// ];
 
// const SOFTWARE = {
//   h: "Work with the accounting software that suits you",
//   p: "We support cloud and desktop accounting workflows across QuickBooks Online, Xero, Sage, Zoho Books, and other platforms where the engagement and access permissions allow. We can help maintain an existing setup or plan a more orderly transition.",
// };
// const PLATFORMS = ["QuickBooks Online", "Xero", "Sage", "Zoho Books"];
 
// const PROCESS_H = "A practical process, with clear expectations";
// const STEPS: [string, string][] = [
//   ["Discover", "we learn about your business, current records, software, reporting needs, and deadlines."],
//   ["Set up the workflow", "we agree on the scope, responsibilities, access, close calendar, and communication rhythm."],
//   ["Keep the books moving", "transactions are reviewed and reconciled according to the agreed schedule."],
//   ["Review and improve", "we share reports, flag open questions, and identify recordkeeping gaps to address."],
// ];
 
// const SERVICES_INTRO = {
//   h: "Bookkeeping and accounting services that keep business moving",
//   p: "Choose ongoing support, help with a backlog, or a focused project to improve your accounting setup. We will define the deliverables and responsibilities before work begins.",
//   foot: "Not sure what you need? Book a discovery call and we will help define the first practical step.",
// };
// const SERVICES = [
//   { t: "Ongoing bookkeeping", I: RefreshCw, d: "Regular transaction coding, bank and credit-card reconciliations, review of balance-sheet accounts, and organised supporting documentation. We work to an agreed monthly schedule so that unresolved items are identified rather than left to build up." },
//   { t: "Catch-up and clean-up bookkeeping", I: Wrench, d: "For businesses with overdue months, unreconciled accounts, inconsistent coding, duplicate transactions, or balances that do not make sense. We assess the backlog, agree on a priority order, investigate discrepancies where records are available, and document items requiring owner or tax-professional input." },
//   { t: "Month-end close and financial reporting", I: CalendarCheck, d: "Close support may include reconciliations, review of clearing and suspense accounts, accrual and prepayment schedules where applicable, fixed-asset records, and preparation of management reports. Reports can include profit and loss, balance sheet, cash-flow summaries, and budget-versus-actual comparisons when suitable data is available." },
//   { t: "Accounts payable and receivable support", I: ArrowLeftRight, d: "Help maintain supplier records, organise bills, monitor due dates, prepare payment lists for client approval, issue or track invoices, and review aged receivables. Payments and approvals remain with your authorised staff unless a separate, controlled workflow is agreed." },
//   { t: "Payroll bookkeeping and contractor records", I: Users, d: "Reconcile payroll journals and liabilities, organise payroll reports, and help maintain contractor-payment records. Payroll processing, employment-law advice, and required government filings are scoped separately and depend on the applicable jurisdiction and service arrangement." },
//   { t: "Accounting software setup and support", I: Settings, d: "Chart-of-accounts review, bank-feed workflows, tracking categories or classes, opening-balance checks, recurring transaction rules, reporting setup, and conversion planning for QuickBooks Online, Xero, Sage, Zoho Books, and other supported platforms." },
//   { t: "Tax-ready records and tax support", I: ClipboardList, d: "We help organise the books and supporting schedules commonly needed for year-end tax work. Depending on the engagement, this may include coordinating source documents, reconciling tax-related balance-sheet accounts, organising income and expense detail, and liaising with your appointed tax professional. Tax return preparation, tax advice, and representation are offered only where covered by the firm's actual qualifications and engagement terms." },
// ];
 
// const REGION = {
//   h: "Bookkeeping for US and Canadian businesses",
//   p: "The right process depends on your country, state or province, entity structure, sales channels, and obligations. We organise the accounting workflow around the records and reporting requirements relevant to your business, and coordinate tax-related work within the agreed professional scope.",
// };
// const MODES = {
//   US: {
//     t: "Bookkeeping and tax-time support for US small businesses",
//     intro: "Keep your books organised throughout the year—not just when a federal or state deadline is approaching. We support owners, operators, and professional advisers with consistent bookkeeping and reporting workflows for US businesses.",
//     listH: "US bookkeeping support can include",
//     items: ["Bank and credit-card reconciliations", "Transaction categorisation", "Income and expense review", "Balance-sheet reconciliations", "Accounts payable and receivable tracking", "Payroll journal and liability reconciliation", "Contractor-payment records", "Sales-tax transaction summaries where applicable", "Year-end workpapers"],
//     prepH: "Prepare better records for tax season",
//     prep: "A reconciled ledger and organised source documents can make it easier for a qualified tax preparer to assess business income, deductible expenses, asset purchases, contractor payments, and year-end balances. The right treatment depends on the entity, facts, federal requirements, and state or local rules. We will flag missing information rather than assume an answer.",
//     scope: "Available tax services may include document organisation, bookkeeping workpapers, coordination with a qualified US tax professional, and tax-return preparation when expressly included in the engagement and performed by appropriately qualified personnel. No particular filing outcome or tax savings is guaranteed.",
//     cta: "Get your US bookkeeping workflow under control", pic: "us",
//   },
//   Canada: {
//     t: "Bookkeeping and tax-time support for Canadian small businesses",
//     intro: "Build a consistent bookkeeping routine that supports better decisions and more organised year-end work. We help Canadian businesses maintain financial records and organise information relevant to federal and provincial obligations.",
//     listH: "Canadian bookkeeping support can include",
//     items: ["Bank and credit-card reconciliations", "Income and expense coding", "Accounts payable and receivable", "Payroll journal and liability reconciliation", "Fixed-asset schedules", "Management reports", "Organised records for GST/HST and applicable provincial sales-tax processes, based on your business activities and registration status"],
//     prepH: "Organised records for GST/HST and year-end",
//     prep: "Well-maintained books can help your tax or accounting professional review sales, purchases, tax collected, eligible input tax credits, payroll records, and year-end balances. Treatment can differ by province, transaction type, registration status, and the nature of the business, so unusual items should be reviewed rather than coded by assumption.",
//     scope: "Depending on the engagement and the qualifications of the personnel involved, services may include tax-document preparation, GST/HST recordkeeping support, coordination with a Canadian tax professional, and preparation of personal or corporate returns where offered by an appropriately qualified preparer. Provincial and federal requirements should be confirmed for each client.",
//     cta: "Talk with us about your Canadian bookkeeping needs", pic: "ca",
//   },
// } as const;
 
// const INDUSTRIES_INTRO = {
//   h: "Bookkeeping support shaped around how your business operates",
//   p: "Different business models create different accounting questions. We begin with how money moves through your business, what records are available, and which reports help you manage it.",
//   foot: "We will confirm fit before accepting work that requires specialist industry, inventory, trust-account, multi-entity, or regulated-sector expertise.",
// };
// const INDUSTRIES = [
//   { t: "Professional services and consultants", I: Briefcase, d: "Track client income, subcontractor costs, recurring software charges, reimbursable expenses, and project profitability." },
//   { t: "Construction, trades, and contractors", I: HardHat, d: "Organise supplier bills, subcontractor records, job-related expenses, equipment purchases, customer deposits, and job or project reporting where the available records support it." },
//   { t: "E-commerce and retail", I: ShoppingCart, d: "Reconcile payment processors and marketplaces, investigate settlement differences, organise refunds and fees, and make inventory-related questions visible for review." },
//   { t: "Agencies and creative businesses", I: Palette, d: "Keep retainers, project revenue, contractor costs, software subscriptions, and client billing easier to review." },
//   { t: "Property and real-estate businesses", I: Building2, d: "Organise property-level income and expenses, loan and interest records, repairs, capital purchases, and supporting schedules according to the agreed accounting scope." },
// ];
 
// const ABOUT = {
//   h: "An accounting support partner focused on clarity and consistency",
//   p1: `At ${FIRM}, we believe useful financial information starts with dependable records. Our role is to help business owners reduce bookkeeping backlogs, understand their reports, and maintain a process that supports better conversations with management, lenders, and tax professionals.`,
//   p2: "We work with the tools and workflows your business uses, then agree on a clear scope, review process, and communication rhythm. We value careful reconciliations, documented questions, sensible controls, and reports that are understandable—not just completed tasks.",
//   principlesH: "Our working principles",
// };
// const PRINCIPLES: [string, string][] = [
//   ["Consistency", "follow a repeatable close and reconciliation process."],
//   ["Transparency", "raise missing information and unresolved items early."],
//   ["Fit-for-purpose reporting", "focus on the information that supports your decisions."],
//   ["Responsible boundaries", "clarify what the engagement covers and involve appropriately qualified professionals when specialist advice or filings are needed."],
// ];
// /* TODO: Add a real team biography here, including relevant qualifications, software
//    certifications, languages, and experience. Avoid implying CPA, EA, or other regulated
//    status unless it is accurate and current. The "Team" block stays hidden while empty. */
// const TEAM: { name: string; role: string; bio: string }[] = [];
 
// const FAQS: [string, string][] = [
//   ["Do you work with businesses in both the US and Canada?", "We are building service workflows for businesses in both markets. Availability depends on your location, business structure, accounting needs, and the scope of tax work requested. We confirm the fit and responsibilities before onboarding."],
//   ["Which accounting software do you support?", "Our stated platforms include QuickBooks Online, Xero, Sage, and Zoho Books, subject to the specific product, subscription, data access, and requirements of the engagement. Tell us what you currently use during the discovery call."],
//   ["Can you fix books that are several months behind?", "Often, yes. We first assess the period, transaction volume, account condition, and source-document availability. We then agree on a cleanup plan and identify questions that require your approval or a tax professional's judgement."],
//   ["Will you communicate directly with my tax preparer?", "With your permission, we can coordinate relevant bookkeeping records and workpapers with your appointed tax professional when this is included in the engagement."],
//   ["Do you prepare tax returns?", "Tax services depend on the country, type of return, engagement terms, and the qualifications or authorisations required. During onboarding, we will confirm whether we prepare the return, coordinate with a qualified tax professional, or provide tax-ready accounting records only."],
//   ["How much do your services cost?", "Pricing depends on transaction volume, number of accounts and entities, software condition, reporting needs, payroll or sales-tax complexity, and whether catch-up work is required. We provide a defined scope and quote after an initial review."],
//   /* TODO: describe only controls you actually maintain. */
//   ["How do you protect financial information?", "We use role-based access, approved file-sharing methods, and agreed procedures for handling financial records. We ask clients not to send passwords by email and to use secure access invitations wherever possible."],
// ];
 
// type Article = { t: string; slug: string; region: string; kw: string; ex: string };
// const ARTICLES: Article[] = [
//   { t: "What Should Monthly Bookkeeping Include for a Small Business?", slug: "/blog/monthly-bookkeeping-checklist-small-business/", region: "US and Canada", kw: "monthly bookkeeping for small business", ex: "A reliable monthly bookkeeping routine does more than categorise transactions. It helps owners keep records current, spot gaps, and understand financial performance." },
//   { t: "Bookkeeping Cleanup: Signs Your Business Needs Catch-Up Work", slug: "/blog/bookkeeping-cleanup-catch-up-signs/", region: "US and Canada", kw: "bookkeeping cleanup services", ex: "If reconciliations are overdue or reports do not match what you see in the bank, a structured cleanup can help identify gaps and establish a workable routine." },
//   { t: "How to Keep US Small-Business Books Tax-Ready All Year", slug: "/blog/us-small-business-tax-ready-bookkeeping/", region: "United States", kw: "tax-ready bookkeeping US small business", ex: "Tax preparation is easier to organise when the books are current and key documents are easy to find. These habits help reduce last-minute record gathering." },
//   { t: "Canadian Small-Business Bookkeeping: GST/HST Records to Keep Organised", slug: "/blog/canadian-bookkeeping-gst-hst-records/", region: "Canada", kw: "Canadian bookkeeping GST HST records", ex: "Consistent records help businesses review tax collected, eligible credits, and supporting documents. The exact treatment depends on registration status and the transaction." },
//   { t: "QuickBooks Online vs Xero vs Sage vs Zoho Books: How to Choose", slug: "/blog/quickbooks-xero-sage-zoho-books-comparison/", region: "US and Canada", kw: "QuickBooks vs Xero vs Sage vs Zoho Books", ex: "The best accounting platform is the one that fits your transaction flow, reporting needs, integrations, and team's ability to maintain it consistently." },
//   { t: "Five Financial Reports Small-Business Owners Should Review", slug: "/blog/financial-reports-small-business-owners-should-review/", region: "US and Canada", kw: "financial reports for small business owners", ex: "Reports are most valuable when they are current, reconciled, and reviewed together. Here are five reports that can help owners ask better questions." },
//   { t: "US Contractor Payments: Bookkeeping Records to Organise Before Year-End", slug: "/blog/us-contractor-payments-bookkeeping-records/", region: "United States", kw: "US contractor payment records bookkeeping", ex: "Good contractor records begin when the vendor is added—not in the final weeks of the year. Keep payment detail complete and confirm reporting rules with a tax professional." },
//   { t: "Bookkeeping for Businesses With Customers in Both the US and Canada", slug: "/blog/cross-border-us-canada-bookkeeping-basics/", region: "US and Canada", kw: "US Canada cross-border bookkeeping", ex: "Cross-border activity increases the importance of clear entity records, currency handling, reconciliations, and coordinated professional advice." },
// ];
// const REGIONS = ["All", "United States", "Canada", "US and Canada"];
 
// const FINAL = { h: "Ready for clearer books?", p: `Schedule a discovery call with ${FIRM}.` };
 
// const NAV = [
//   ["home", "Overview"], ["support", "Support"], ["software", "Software"], ["process", "Process"], ["services", "Services"],
//   ["regions", "US & Canada"], ["industries", "Industries"], ["about", "About"], ["faq", "FAQ"], ["insights", "Insights"], ["contact", "Contact"],
// ] as const;
 
// /* ------------------------------------------------------------------
//    Helpers
// ------------------------------------------------------------------- */
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
// function useScrollProgress<T extends HTMLElement>() {
//   const ref = useRef<T>(null);
//   const [p, setP] = useState(0);
//   useEffect(() => {
//     let raf = 0;
//     const calc = () => {
//       raf = 0;
//       const el = ref.current;
//       if (!el) return;
//       const r = el.getBoundingClientRect();
//       const vh = window.innerHeight, s = vh * 0.85, e = vh * 0.35;
//       setP(Math.max(0, Math.min(1, (s - r.top) / (r.height + s - e))));
//     };
//     const on = () => { if (!raf) raf = requestAnimationFrame(calc); };
//     calc();
//     window.addEventListener("scroll", on, { passive: true });
//     window.addEventListener("resize", on);
//     return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); if (raf) cancelAnimationFrame(raf); };
//   }, []);
//   return [ref, p] as const;
// }
 
// /** Reveal on scroll (each block watches itself) */
// function R({ delay = 0, className = "", children }: { delay?: number; className?: string; children: React.ReactNode }) {
//   const [ref, seen] = useInView<HTMLDivElement>(0.12);
//   return (
//     <div ref={ref} className={`o0 opacity-0 ${seen ? "[animation:rise_.8s_cubic-bezier(.2,.7,.2,1)_forwards]" : ""} ${className}`} style={{ animationDelay: `${delay}s` }}>
//       {children}
//     </div>
//   );
// }
 
// const h2 = "m-0 text-[clamp(1.9rem,4.2vw,3rem)] font-bold leading-[1.06] tracking-[-0.035em]";
// const eyebrow = "mb-4 text-xs font-semibold tracking-[0.12em] text-[color:var(--br)]";
// const btn = "group inline-flex items-center gap-2.5 rounded-full bg-[var(--ac)] py-1.5 pl-5 pr-1.5 text-sm font-semibold text-[color:var(--ink)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-12px_var(--ac)]";
// const dot = "grid h-8 w-8 place-items-center rounded-full bg-[var(--ink)] text-[color:var(--ac)] transition-transform duration-500 group-hover:rotate-45";
// const Cta = ({ children, subject = "Discovery call" }: { children: React.ReactNode; subject?: string }) => (
//   <a href={`mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`} className={btn}>{children}<i className={dot}><ArrowUpRight size={15} /></i></a>
// );
 
// /* ---------- Hero: a general journal that posts itself and balances ---------- */
// const POSTS: [string, number, number][] = [
//   ["Cash", 3200, 0], ["Sales revenue", 0, 3200],
//   ["Software subscriptions", 129, 0], ["Cash", 0, 129],
//   ["Contractor payments", 850, 0], ["Cash", 0, 850],
//   ["Payroll expense", 2400, 0], ["Cash", 0, 2400],
// ];
// const TOTAL = 6579;
// const money = (n: number) => (n ? n.toLocaleString("en-US") : "");
 
// function LedgerHero({ reduce }: { reduce: boolean }) {
//   const [n, setN] = useState(0);
//   useEffect(() => {
//     if (reduce) { setN(POSTS.length); return; }
//     let t: ReturnType<typeof setTimeout>;
//     const step = (k: number) => {
//       setN(k);
//       t = setTimeout(() => step(k < POSTS.length ? k + 1 : 0), k === 0 ? 900 : k === POSTS.length ? 4600 : 640);
//     };
//     t = setTimeout(() => step(1), 1100);
//     return () => clearTimeout(t);
//   }, [reduce]);
 
//   const dr = POSTS.slice(0, n).reduce((a, r) => a + r[1], 0);
//   const cr = POSTS.slice(0, n).reduce((a, r) => a + r[2], 0);
//   const done = n === POSTS.length;
 
//   return (
//     <div className="relative">
//       <div aria-hidden="true" className="absolute -inset-8 bg-[radial-gradient(circle_at_70%_8%,var(--gl),transparent_60%)] [animation:breathe_6s_ease-in-out_infinite]" />
//       <div className="relative overflow-hidden rounded-3xl border border-[color:var(--ln)] bg-[var(--bg2)] shadow-[0_40px_80px_-30px_rgba(0,0,0,.9)]">
//         <div className="flex items-center justify-between border-b border-[color:var(--ln)] px-5 py-3.5">
//           <span className="text-sm font-semibold">General journal</span>
//           <span className="rounded-full bg-[var(--sf)] px-2.5 py-0.5 text-[11px] text-[color:var(--mu)]">Illustrative example</span>
//         </div>
//         <div className="grid grid-cols-[1fr_72px_72px] gap-2 border-b border-[color:var(--ln)] px-5 py-2 text-[11px] font-semibold tracking-[0.1em] text-[color:var(--mu)] sm:grid-cols-[1fr_90px_90px]">
//           <span>ACCOUNT</span><span className="text-right">DEBIT</span><span className="text-right">CREDIT</span>
//         </div>
 
//         <ul className="m-0 list-none p-0">
//           {POSTS.map(([a, d, c], i) => {
//             const on = i < n;
//             return (
//               <li key={i} className={`grid grid-cols-[1fr_72px_72px] gap-2 border-b border-[color:var(--ln)] px-5 py-[9px] font-mono text-[12.5px] transition-all duration-500 sm:grid-cols-[1fr_90px_90px] ${on ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}`}>
//                 <span className={c ? "pl-5 text-[color:var(--mu)]" : ""}>{a}</span>
//                 <span className="text-right tabular-nums">{money(d)}</span>
//                 <span className="text-right tabular-nums">{money(c)}</span>
//               </li>
//             );
//           })}
//         </ul>
 
//         <div className="relative grid grid-cols-[1fr_72px_72px] gap-2 px-5 py-4 font-mono text-[13px] font-bold sm:grid-cols-[1fr_90px_90px]">
//           <span className="font-sans text-xs font-semibold tracking-[0.1em] text-[color:var(--mu)]">TOTALS</span>
//           <span className="border-b-[3px] border-double border-[color:var(--br)] text-right tabular-nums">{money(dr)}</span>
//           <span className="border-b-[3px] border-double border-[color:var(--br)] text-right tabular-nums">{money(cr)}</span>
//         </div>
 
//         <div className="space-y-1.5 px-5 pb-5">
//           {[dr, cr].map((v, i) => (
//             <span key={i} className="block h-1.5 overflow-hidden rounded-full bg-[var(--sf)]">
//               <span className="block h-full rounded-full bg-[var(--br)] transition-[width] duration-500" style={{ width: `${(v / TOTAL) * 100}%`, opacity: i ? 0.65 : 1 }} />
//             </span>
//           ))}
//           <p className={`m-0 pt-2 text-xs transition-opacity duration-500 ${done ? "opacity-100" : "opacity-0"}`}>
//             <b className="text-[color:var(--br)]">Trial balance:</b> <span className="text-[color:var(--mu)]">debits equal credits</span>
//           </p>
//         </div>
 
//         {done && (
//           <div aria-hidden="true" className="pointer-events-none absolute bottom-16 right-5 [animation:stamp_.8s_cubic-bezier(.2,.8,.2,1)_both]">
//             <span className="block rounded-md border-[3px] border-[color:var(--ac)] px-3 py-1 text-lg font-extrabold tracking-wider text-[color:var(--ac)]">BALANCED</span>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
 
// /* ---------- Software hub with travelling pulses ---------- */
// function Hub({ reduce }: { reduce: boolean }) {
//   const nodes = [
//     { n: "QuickBooks Online", x: 80, y: 40 }, { n: "Xero", x: 340, y: 40 },
//     { n: "Sage", x: 80, y: 260 }, { n: "Zoho Books", x: 340, y: 260 },
//     { n: "Other platforms", x: 210, y: 316, dashed: true },
//   ];
//   return (
//     <svg viewBox="0 0 420 350" className="mx-auto w-full max-w-[460px]" role="img" aria-label="Your books connected to QuickBooks Online, Xero, Sage, Zoho Books and other platforms">
//       {nodes.map((p, i) => (
//         <g key={p.n}>
//           <path d={`M${p.x} ${p.y}L210 150`} strokeWidth="1.6" strokeDasharray={p.dashed ? "4 5" : undefined} className="stroke-[color:var(--ln)]" fill="none" />
//           {!reduce && (
//             <circle r="4.5" className="fill-[var(--br)]">
//               <animateMotion dur="2.8s" begin={`${i * 0.55}s`} repeatCount="indefinite" path={`M${p.x} ${p.y}L210 150`} />
//             </circle>
//           )}
//         </g>
//       ))}
//       {nodes.map((p) => (
//         <g key={p.n + "n"}>
//           <rect x={p.x - 66} y={p.y - 20} width="132" height="40" rx="12" strokeDasharray={p.dashed ? "4 4" : undefined} className="fill-[var(--bg2)] stroke-[color:var(--ln)]" strokeWidth="1.5" />
//           <text x={p.x} y={p.y + 4.5} textAnchor="middle" fontSize="12.5" fontWeight="600" className="fill-[var(--tx)]">{p.n}</text>
//         </g>
//       ))}
//       <circle cx="210" cy="150" r="46" className="origin-center fill-[var(--ac)] opacity-30 [animation:ring_2.6s_ease-out_infinite] [transform-box:fill-box]" />
//       <circle cx="210" cy="150" r="46" className="fill-[var(--ac)]" />
//       <text x="210" y="146" textAnchor="middle" fontSize="14" fontWeight="800" className="fill-[var(--ink)]">Your</text>
//       <text x="210" y="164" textAnchor="middle" fontSize="14" fontWeight="800" className="fill-[var(--ink)]">books</text>
//     </svg>
//   );
// }
 
// /* ---------- Blur-to-sharp paragraph (clearer view of your numbers) ---------- */
// function BlurText({ text, p }: { text: string; p: number }) {
//   const w = text.split(" ");
//   return (
//     <p className="m-0 text-[clamp(1.2rem,2.4vw,1.75rem)] font-medium leading-[1.5] tracking-[-0.01em]">
//       {w.map((x, i) => {
//         const k = Math.max(0, Math.min(1, (p * (w.length + 5) - i) / 5));
//         return (
//           <span key={i}>
//             <span className="bw inline-block transition-[filter,opacity] duration-300" style={{ filter: `blur(${(1 - k) * 7}px)`, opacity: 0.28 + 0.72 * k }}>{x}</span>{" "}
//           </span>
//         );
//       })}
//     </p>
//   );
// }
 
// /* ------------------------------------------------------------------
//    Page
// ------------------------------------------------------------------- */
// export default function TaxAccountingPage() {
//   const [theme, setTheme] = useState<"light" | "dark">("dark");
//   const [mounted, setMounted] = useState(false);
//   const [reduce, setReduce] = useState(false);
//   const [mode, setMode] = useState<"US" | "Canada">("US");
//   const [faqOpen, setFaqOpen] = useState<string | null>(FAQS[0][0]);
//   const [faqQ, setFaqQ] = useState("");
//   const [region, setRegion] = useState("All");
//   const [active, setActive] = useState("home");
//   const [readP, setReadP] = useState(0);
//   const [indP, setIndP] = useState(0);
//   const track = useRef<HTMLDivElement>(null);
 
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
//       raf = requestAnimationFrame(() => {
//         raf = 0;
//         const h = document.documentElement;
//         const max = h.scrollHeight - h.clientHeight;
//         setReadP(max > 0 ? h.scrollTop / max : 0);
//       });
//     };
//     on();
//     window.addEventListener("scroll", on, { passive: true });
//     return () => window.removeEventListener("scroll", on);
//   }, []);
 
//   /* scroll-spy */
//   useEffect(() => {
//     const els = NAV.map(([id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
//     const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
//     els.forEach((e) => io.observe(e));
//     return () => io.disconnect();
//   }, []);
//   const goTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
 
//   /* scroll-driven blocks */
//   const [introRef, introP] = useScrollProgress<HTMLDivElement>();
//   const [procRef, procP] = useScrollProgress<HTMLDivElement>();
 
//   /* industries carousel */
//   const slide = (d: number) => track.current?.scrollBy({ left: d * 360, behavior: "smooth" });
//   const onTrack = () => {
//     const el = track.current;
//     if (el) setIndP(el.scrollWidth > el.clientWidth ? el.scrollLeft / (el.scrollWidth - el.clientWidth) : 0);
//   };
 
//   const m = MODES[mode];
//   const faqList = FAQS.filter(([q, a]) => (q + " " + a).toLowerCase().includes(faqQ.trim().toLowerCase()));
//   const arts = ARTICLES.filter((a) => region === "All" || a.region === region);
//   const line = `ln block translate-y-[110%] ${mounted ? "[animation:up_1s_cubic-bezier(.2,.8,.2,1)_forwards]" : ""}`;
 
//   /* magnetic CTA */
//   const mag = useRef<HTMLDivElement>(null);
//   const onMag = (e: React.MouseEvent) => {
//     const el = mag.current;
//     if (!el) return;
//     const r = el.getBoundingClientRect();
//     el.style.transform = `translate(${(e.clientX - (r.left + r.width / 2)) * 0.12}px,${(e.clientY - (r.top + r.height / 2)) * 0.12}px)`;
//   };
 
//   return (
//     <main className="tx relative overflow-x-clip">
//       <style>{CSS}</style>
 
//       {/* reading progress */}
//       <div aria-hidden="true" className="fixed left-0 top-0 z-50 h-[3px] w-full">
//         <div className="h-full bg-gradient-to-r from-[#a8283f] to-[#d9a85b]" style={{ width: `${readP * 100}%` }} />
//       </div>
 
//       {/* chapter rail */}
//       <nav aria-label="Page sections" className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 xl:block">
//         <ul className="m-0 flex list-none flex-col gap-1 rounded-full border border-white/10 bg-[#110c0c]/80 p-2 backdrop-blur">
//           {NAV.map(([id, label]) => (
//             <li key={id} className="group relative">
//               <button type="button" onClick={() => goTo(id)} aria-label={label} aria-current={active === id} className="grid h-5 w-5 place-items-center">
//                 <span className={`block rounded-full transition-all duration-300 ${active === id ? "h-3 w-3 bg-[#d9a85b] shadow-[0_0_0_4px_rgba(217,168,91,.2)]" : "h-1.5 w-1.5 bg-white/40 group-hover:bg-white"}`} />
//               </button>
//               <span className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-[#110c0c] px-2 py-1 text-xs text-[#f5efe6] opacity-0 transition-opacity group-hover:opacity-100">{label}</span>
//             </li>
//           ))}
//         </ul>
//       </nav>
 
//       {/* HERO */}
//       <section id="home" data-tone={T("dark")} className={`${band} relative overflow-hidden px-5 pb-20 pt-24 sm:px-8 sm:pb-24 sm:pt-28`}>
//         <button type="button" onClick={toggle} aria-label="Switch light and dark sections" className="absolute right-5 top-5 z-10 grid h-9 w-9 place-items-center rounded-full border border-[color:var(--ln)] bg-[var(--sf)] transition duration-500 hover:rotate-180 hover:bg-[var(--ac)] sm:right-8">
//           {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
//         </button>
//         <div className="mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
//           <div>
//             <p className={`${eyebrow} o0 opacity-0 ${mounted ? "[animation:rise_.8s_.1s_forwards]" : ""}`}>{HERO.eyebrow}</p>
//             <h1 className="m-0 text-[clamp(2.3rem,5.6vw,4.6rem)] font-extrabold leading-[1.02] tracking-[-0.045em]">
//               {HERO.lines.map((l, i) => (
//                 <span key={l} className="block overflow-hidden pb-[0.1em]">
//                   <span className={`${line} ${i === 2 ? "text-[color:var(--br)]" : ""}`} style={{ animationDelay: `${0.15 + i * 0.15}s` }}>{l}</span>
//                 </span>
//               ))}
//             </h1>
//             <p className={`mb-8 mt-6 max-w-[540px] text-base leading-7 text-[color:var(--mu)] sm:text-lg sm:leading-8 o0 opacity-0 ${mounted ? "[animation:rise_.9s_.8s_forwards]" : ""}`}>{HERO.p}</p>
//             <div className={`flex flex-wrap items-center gap-5 o0 opacity-0 ${mounted ? "[animation:rise_.9s_1s_forwards]" : ""}`}>
//               <Cta>{HERO.primary}</Cta>
//               <a href="#services" onClick={(e) => { e.preventDefault(); goTo("services"); }} className="text-sm font-semibold text-[color:var(--mu)] underline-offset-4 hover:text-[color:var(--tx)] hover:underline">{HERO.secondary}</a>
//             </div>
//           </div>
//           <LedgerHero reduce={reduce} />
//         </div>
//       </section>
 
//       {/* INTRO + SUPPORT */}
//       <section id="support" data-tone={T("light")} className={`${band} ${sec}`}>
//         <div className="mx-auto max-w-[1200px]">
//           <R className="mb-6 max-w-[760px]"><h2 className={h2}>{INTRO.h}</h2></R>
//           <div ref={introRef} className="mb-20 max-w-[820px]"><BlurText text={INTRO.p} p={introP} /></div>
 
//           <R><p className={eyebrow}>Support built around your business</p></R>
//           <div className="grid gap-5 md:grid-cols-2">
//             {SUPPORT.map(({ t, d, I }, i) => (
//               <R key={t} delay={0.08 * i}>
//                 <article className="group relative h-full overflow-hidden rounded-3xl border border-[color:var(--ln)] bg-[var(--bg2)] bg-[linear-gradient(transparent_31px,var(--ln)_32px)] bg-[length:100%_32px] p-8 pl-16 transition duration-500 before:absolute before:bottom-0 before:left-10 before:top-0 before:w-px before:bg-[var(--ac)] before:opacity-40 hover:-translate-y-1.5 hover:border-[color:var(--br)]">
//                   <span className="absolute right-5 top-5 grid h-9 w-9 scale-50 place-items-center rounded-full bg-[var(--ac)] text-[color:var(--ink)] opacity-0 transition duration-500 group-hover:scale-100 group-hover:opacity-100"><Check size={16} strokeWidth={3} /></span>
//                   <span className="absolute left-3 top-8 grid h-8 w-8 place-items-center text-[color:var(--ac)]"><I size={18} /></span>
//                   <h3 className="m-0 text-lg font-bold leading-8 tracking-tight">{t}</h3>
//                   <p className="m-0 text-sm leading-8 text-[color:var(--mu)]">{d}</p>
//                 </article>
//               </R>
//             ))}
//           </div>
//         </div>
//       </section>
 
//       {/* SOFTWARE */}
//       <section id="software" data-tone={T("dark")} className={`${band} ${sec}`}>
//         <div className="mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-[1fr_1fr]">
//           <R>
//             <h2 className={`${h2} mb-5`}>{SOFTWARE.h}</h2>
//             <p className="m-0 mb-6 max-w-[520px] text-base leading-7 text-[color:var(--mu)]">{SOFTWARE.p}</p>
//             <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
//               {PLATFORMS.map((p) => <li key={p} className="rounded-full border border-[color:var(--ln)] bg-[var(--sf)] px-3.5 py-1.5 text-sm font-medium">{p}</li>)}
//             </ul>
//           </R>
//           <R delay={0.15}><Hub reduce={reduce} /></R>
//         </div>
//       </section>
 
//       {/* PROCESS */}
//       <section id="process" data-tone={T("light")} className={`${band} ${sec}`}>
//         <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.8fr_1.2fr]">
//           <R className="lg:sticky lg:top-28 lg:self-start"><h2 className={h2}>{PROCESS_H}</h2></R>
//           <div ref={procRef} className="relative pl-14">
//             <div aria-hidden="true" className="absolute bottom-0 left-[15px] top-0 w-px bg-[var(--ln)]" />
//             <div aria-hidden="true" className="absolute left-[15px] top-0 w-px bg-[var(--br)]" style={{ height: `${procP * 100}%` }} />
//             <span aria-hidden="true" className="absolute left-[7px] h-4 w-4 rounded-full bg-[var(--br)] [animation:glow_2s_infinite]" style={{ top: `calc(${procP * 100}% - 8px)` }} />
//             <ol className="m-0 grid list-none gap-12 p-0">
//               {STEPS.map(([t, d], i) => {
//                 const on = procP * 1.15 >= (i + 0.2) / STEPS.length;
//                 return (
//                   <li key={t} className={`relative transition duration-700 ${on ? "translate-x-0 opacity-100" : "translate-x-3 opacity-40"}`}>
//                     <span className={`absolute -left-14 grid h-8 w-8 place-items-center rounded-full border text-sm font-bold transition-colors duration-500 ${on ? "border-[color:var(--ac)] bg-[var(--ac)] text-[color:var(--ink)]" : "border-[color:var(--ln)] bg-[var(--bg)] text-[color:var(--mu)]"}`}>{i + 1}</span>
//                     <h3 className="m-0 text-xl font-bold tracking-tight">{t}</h3>
//                     <p className="mb-0 mt-2 max-w-[460px] text-sm leading-6 text-[color:var(--mu)]">{d.charAt(0).toUpperCase() + d.slice(1)}</p>
//                   </li>
//                 );
//               })}
//             </ol>
//           </div>
//         </div>
//       </section>
 
//       {/* SERVICES: cards stack as you scroll */}
//       <section id="services" data-tone={T("dark")} className={`${band} ${sec}`}>
//         <div className="mx-auto max-w-[1100px]">
//           <R className="mb-12 max-w-[720px]">
//             <h2 className={h2}>{SERVICES_INTRO.h}</h2>
//             <p className="mb-0 mt-4 text-base leading-7 text-[color:var(--mu)]">{SERVICES_INTRO.p}</p>
//           </R>
 
//           <div className="flex flex-col gap-5">
//             {SERVICES.map(({ t, d, I }, i) => (
//               <article
//                 key={t}
//                 className="relative overflow-hidden rounded-3xl border border-[color:var(--ln)] bg-[var(--bg2)] p-7 shadow-[0_-24px_50px_-24px_rgba(0,0,0,.7)] sm:p-10 md:sticky"
//                 style={{ top: `${92 + i * 16}px` }}
//               >
//                 <span aria-hidden="true" className="pointer-events-none absolute -right-2 -top-6 select-none text-[9rem] font-extrabold leading-none text-transparent [-webkit-text-stroke:1.5px_var(--ln)]">{i + 1}</span>
//                 <div className="relative grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
//                   <div>
//                     <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-[var(--ac)] text-[color:var(--ink)]"><I size={22} /></span>
//                     <h3 className="m-0 text-2xl font-bold leading-tight tracking-tight">{t}</h3>
//                     <span aria-hidden="true" className="sw mt-4 block h-[3px] w-14 origin-left bg-[var(--br)]" />
//                   </div>
//                   <p className="m-0 text-[0.95rem] leading-7 text-[color:var(--mu)]">{d}</p>
//                 </div>
//               </article>
//             ))}
//           </div>
 
//           <R className="mt-10 flex flex-wrap items-center justify-between gap-5 rounded-3xl border border-[color:var(--ln)] bg-[var(--sf)] p-6">
//             <p className="m-0 max-w-[520px] text-sm leading-6">{SERVICES_INTRO.foot}</p>
//             <Cta>{HERO.primary}</Cta>
//           </R>
//         </div>
//       </section>
 
//       {/* US / CANADA */}
//       <section id="regions" data-tone={T("light")} className={`${band} ${sec}`}>
//         <div className="mx-auto max-w-[1200px]">
//           <R className="mb-10 flex flex-wrap items-end justify-between gap-6">
//             <div className="max-w-[640px]">
//               <h2 className={h2}>{REGION.h}</h2>
//               <p className="mb-0 mt-4 text-base leading-7 text-[color:var(--mu)]">{REGION.p}</p>
//             </div>
//             <div role="tablist" aria-label="Country" className="relative flex rounded-full border border-[color:var(--ln)] bg-[var(--sf)] p-1">
//               <span aria-hidden="true" className="absolute bottom-1 top-1 w-[calc(50%-4px)] rounded-full bg-[var(--ac)] transition-transform duration-500 [transition-timing-function:cubic-bezier(.3,1.2,.5,1)]" style={{ transform: mode === "US" ? "translateX(0)" : "translateX(100%)" }} />
//               {(["US", "Canada"] as const).map((c) => (
//                 <button key={c} role="tab" aria-selected={mode === c} onClick={() => setMode(c)} className={`relative z-10 w-28 rounded-full py-2 text-sm font-semibold transition-colors ${mode === c ? "text-[color:var(--ink)]" : "text-[color:var(--mu)]"}`}>{c}</button>
//               ))}
//             </div>
//           </R>
 
//           <div key={mode} className="grid items-start gap-6 [animation:fade_.6s_both] lg:grid-cols-[1.15fr_0.85fr]">
//             <div className="rounded-3xl border border-[color:var(--ln)] bg-[var(--sf)] p-7 sm:p-9">
//               <h3 className="m-0 text-2xl font-bold leading-tight tracking-tight">{m.t}</h3>
//               <p className="mb-7 mt-3 text-sm leading-6 text-[color:var(--mu)]">{m.intro}</p>
 
//               <h4 className="mb-3 mt-0 text-sm font-semibold">{m.listH}</h4>
//               <ul className="m-0 mb-7 grid list-none gap-2 p-0 sm:grid-cols-2">
//                 {m.items.map((x, i) => (
//                   <li key={x} className={`flex items-start gap-3 rounded-xl border border-[color:var(--ln)] bg-[var(--bg)] p-3 text-[13px] leading-5 ${i === m.items.length - 1 && m.items.length % 2 ? "sm:col-span-2" : ""}`}>
//                     <span className="mt-px grid h-5 w-5 shrink-0 place-items-center rounded-md bg-[var(--ac)] text-[color:var(--ink)] [animation:pop_.45s_both]" style={{ animationDelay: `${0.25 + i * 0.12}s` }}><Check size={12} strokeWidth={3.5} /></span>
//                     {x}
//                   </li>
//                 ))}
//               </ul>
 
//               <h4 className="mb-2 mt-0 text-sm font-semibold">{m.prepH}</h4>
//               <p className="mb-7 mt-0 text-sm leading-6 text-[color:var(--mu)]">{m.prep}</p>
//               <Cta subject={m.cta}>{m.cta}</Cta>
//             </div>
 
//             <div className="grid gap-5">
//               <Pic k={m.pic} className="h-[240px] rounded-3xl border border-[color:var(--ln)]" />
//               <aside className="rounded-3xl border border-[color:var(--br)] bg-[var(--bg2)] p-6">
//                 <h4 className="mb-3 mt-0 flex items-center gap-2.5 text-sm font-bold"><Scale size={18} className="text-[color:var(--br)]" />Tax services and scope</h4>
//                 <p className="m-0 text-[13px] leading-6 text-[color:var(--mu)]">{m.scope}</p>
//               </aside>
//             </div>
//           </div>
//         </div>
//       </section>
 
//       {/* INDUSTRIES */}
//       <section id="industries" data-tone={T("dark")} className={`${band} ${sec}`}>
//         <div className="mx-auto max-w-[1200px]">
//           <R className="mb-10 flex flex-wrap items-end justify-between gap-6">
//             <div className="max-w-[680px]">
//               <h2 className={h2}>{INDUSTRIES_INTRO.h}</h2>
//               <p className="mb-0 mt-4 text-base leading-7 text-[color:var(--mu)]">{INDUSTRIES_INTRO.p}</p>
//             </div>
//             <div className="flex gap-2">
//               {[-1, 1].map((d) => (
//                 <button key={d} type="button" onClick={() => slide(d)} aria-label={d < 0 ? "Previous industry" : "Next industry"} className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--ln)] transition hover:bg-[var(--ac)]">
//                   {d < 0 ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
//                 </button>
//               ))}
//             </div>
//           </R>
 
//           <div ref={track} onScroll={onTrack} className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:mx-0 sm:px-0" tabIndex={0} aria-label="Industries">
//             {INDUSTRIES.map(({ t, d, I }) => (
//               <article key={t} className="group w-[min(84vw,340px)] shrink-0 snap-start rounded-3xl border border-[color:var(--ln)] bg-[var(--bg2)] p-6 transition duration-500 hover:-translate-y-1.5 hover:border-[color:var(--br)]">
//                 <svg viewBox="0 0 200 44" className="mb-5 h-11 w-full" aria-hidden="true">
//                   {[10, 22, 34].map((y) => <circle key={y} cx="8" cy={y} r="3.5" className="fill-[var(--mu)] opacity-50" />)}
//                   <path d="M14 22H150" fill="none" strokeWidth="2" strokeDasharray="4 6" className="stroke-[color:var(--br)] [animation:flow_1.2s_linear_infinite]" />
//                   <rect x="156" y="6" width="40" height="32" rx="8" className="fill-[var(--ac)]" />
//                   <path d="M168 22l6 6 10-12" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="stroke-[color:var(--ink)]" />
//                 </svg>
//                 <span className="mb-4 grid h-11 w-11 place-items-center rounded-full bg-[var(--ac)] text-[color:var(--ink)] transition-transform duration-500 group-hover:rotate-[360deg]"><I size={20} /></span>
//                 <h3 className="m-0 text-lg font-bold leading-snug tracking-tight">{t}</h3>
//                 <p className="mb-0 mt-3 text-sm leading-6 text-[color:var(--mu)]">{d}</p>
//               </article>
//             ))}
//           </div>
 
//           <span aria-hidden="true" className="mt-4 block h-[3px] overflow-hidden rounded-full bg-[var(--ln)]">
//             <span className="block h-full w-1/3 rounded-full bg-[var(--br)] transition-transform duration-200" style={{ transform: `translateX(${indP * 200}%)` }} />
//           </span>
//           <p className="mb-0 mt-8 max-w-[640px] border-l-2 border-[color:var(--br)] pl-4 text-sm leading-6 text-[color:var(--mu)]">{INDUSTRIES_INTRO.foot}</p>
//         </div>
//       </section>
 
//       {/* ABOUT */}
//       <section id="about" data-tone={T("light")} className={`${band} ${sec}`}>
//         <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[1fr_1fr]">
//           <R>
//             <h2 className={`${h2} mb-6`}>{ABOUT.h}</h2>
//             <p className="m-0 mb-4 text-base leading-7 text-[color:var(--mu)]">{ABOUT.p1}</p>
//             <p className="m-0 text-base leading-7 text-[color:var(--mu)]">{ABOUT.p2}</p>
//           </R>
//           <div>
//             <R><h3 className="mb-2 mt-0 text-sm font-semibold tracking-[0.1em] text-[color:var(--br)]">{ABOUT.principlesH.toUpperCase()}</h3></R>
//             {PRINCIPLES.map(([t, d], i) => (
//               <R key={t} delay={0.08 * i}>
//                 <div className="group border-b border-[color:var(--ln)] py-5">
//                   <h4 className="m-0 flex items-center gap-3 text-lg font-bold tracking-tight">
//                     <span className="grid h-7 w-7 place-items-center rounded-full bg-[var(--ac)] text-xs text-[color:var(--ink)]">{i + 1}</span>{t}
//                   </h4>
//                   <p className="mb-0 ml-10 mt-2 text-sm leading-6 text-[color:var(--mu)]">{d.charAt(0).toUpperCase() + d.slice(1)}</p>
//                   <span aria-hidden="true" className="ml-10 mt-3 block h-[5px] w-24 origin-left scale-x-0 border-y border-[color:var(--br)] transition-transform duration-700 group-hover:scale-x-100" />
//                 </div>
//               </R>
//             ))}
//           </div>
//         </div>
 
//         {TEAM.length > 0 && (
//           <div className="mx-auto mt-16 grid max-w-[1200px] gap-4 md:grid-cols-3">
//             {TEAM.map((p) => (
//               <article key={p.name} className="rounded-3xl border border-[color:var(--ln)] bg-[var(--sf)] p-6">
//                 <h4 className="m-0 text-lg font-bold">{p.name}</h4>
//                 <p className="mb-3 mt-1 text-xs text-[color:var(--br)]">{p.role}</p>
//                 <p className="m-0 text-sm leading-6 text-[color:var(--mu)]">{p.bio}</p>
//               </article>
//             ))}
//           </div>
//         )}
//       </section>
 
//       {/* FAQ */}
//       <section id="faq" data-tone={T("dark")} className={`${band} ${sec}`}>
//         <div className="mx-auto grid max-w-[1200px] items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
//           <R className="lg:sticky lg:top-28">
//             <h2 className={`${h2} mb-6`}>Frequently asked questions</h2>
//             <label className="relative mb-6 block">
//               <span className="sr-only">Search the questions</span>
//               <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[color:var(--mu)]" />
//               <input value={faqQ} onChange={(e) => setFaqQ(e.target.value)} placeholder="Search the questions" className="w-full rounded-full border border-[color:var(--ln)] bg-[var(--sf)] py-3 pl-11 pr-4 text-sm text-[color:var(--tx)] placeholder:text-[color:var(--mu)] focus:border-[color:var(--br)] focus:outline-none" />
//             </label>
//             <Pic k="faq" className="hidden h-[250px] rounded-3xl border border-[color:var(--ln)] lg:block" />
//           </R>
 
//           <div className="border-t border-[color:var(--ln)]">
//             {faqList.length === 0 && <p className="py-6 text-sm text-[color:var(--mu)]">No question matches that search. Ask us on a discovery call.</p>}
//             {faqList.map(([q, a]) => {
//               const on = faqOpen === q;
//               return (
//                 <div key={q} className="border-b border-[color:var(--ln)]">
//                   <button type="button" aria-expanded={on} onClick={() => setFaqOpen(on ? null : q)} className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold">
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
 
//       {/* INSIGHTS */}
//       <section id="insights" data-tone={T("light")} className={`${band} ${sec}`}>
//         <div className="mx-auto max-w-[1200px]">
//           <R className="mb-8 flex flex-wrap items-end justify-between gap-6">
//             <h2 className={`${h2} max-w-[560px]`}>Guides for small-business owners</h2>
//             <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by region">
//               {REGIONS.map((r) => (
//                 <button key={r} type="button" aria-pressed={region === r} onClick={() => setRegion(r)} className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${region === r ? "border-[color:var(--ac)] bg-[var(--ac)] text-[color:var(--ink)]" : "border-[color:var(--ln)] text-[color:var(--mu)] hover:border-[color:var(--ac)]"}`}>{r}</button>
//               ))}
//             </div>
//           </R>
 
//           <div key={region} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//             {arts.map((a, i) => (
//               <Link key={a.slug} href={a.slug} className="o0 group flex flex-col rounded-3xl border border-[color:var(--ln)] bg-[var(--sf)] p-6 opacity-0 transition duration-500 [animation:rise_.6s_forwards] hover:-translate-y-1.5 hover:border-[color:var(--br)]" style={{ animationDelay: `${i * 0.06}s` }}>
//                 <span className="mb-4 w-fit rounded-full bg-[var(--ac)] px-3 py-1 text-[11px] font-semibold text-[color:var(--ink)]">{a.region}</span>
//                 <h3 className="m-0 text-base font-bold leading-snug tracking-tight">{a.t}</h3>
//                 <p className="mb-5 mt-3 text-[13px] leading-6 text-[color:var(--mu)]">{a.ex}</p>
//                 <span className="mt-auto flex items-center justify-between text-xs font-semibold">
//                   Read article
//                   <span className="grid h-8 w-8 place-items-center rounded-full border border-[color:var(--ln)] transition duration-300 group-hover:rotate-45 group-hover:bg-[var(--ac)] group-hover:text-[color:var(--ink)]"><ArrowUpRight size={14} /></span>
//                 </span>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>
 
//       {/* CTA */}
//       <section id="contact" data-tone={T("dark")} onMouseMove={onMag} onMouseLeave={() => mag.current && (mag.current.style.transform = "")} className={`${band} relative overflow-hidden ${sec}`}>
//         <div aria-hidden="true" className="absolute -right-24 top-0 h-full w-[60%] bg-[radial-gradient(circle_at_70%_30%,var(--gl),transparent_60%)] [animation:breathe_7s_ease-in-out_infinite]" />
//         <div className="relative mx-auto grid max-w-[1200px] items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
//           <div>
//             <h2 className="m-0 text-[clamp(2rem,5vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-0.04em]">{FINAL.h}</h2>
//             <p className="mb-2 mt-4 max-w-[460px] text-base leading-7 text-[color:var(--mu)]">{FINAL.p}</p>
//             <p className="mb-8 mt-0 max-w-[460px] text-sm leading-6 text-[color:var(--mu)]">{SERVICES_INTRO.foot}</p>
//             <div ref={mag} className="inline-flex items-center gap-5 transition-transform duration-200 ease-out">
//               <Cta>{HERO.primary}</Cta>
//               <span className="text-sm text-[color:var(--mu)]">{EMAIL}</span>
//             </div>
//           </div>
//           <Pic k="cta" className="h-[260px] rounded-3xl border border-[color:var(--ln)]" />
//         </div>
//       </section>
//     </main>
//   );
// }













"use client";
 
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowLeftRight, ArrowUpRight, BarChart3, BookOpenCheck, Briefcase, Building2, CalendarCheck,
  Check, ChevronLeft, ChevronRight, ClipboardList, HardHat, ListChecks, Moon, Palette, Plus,
  RefreshCw, RotateCcw, Scale, ScrollText, Search, Settings, ShoppingCart, Sun, Users, Wrench,
} from "lucide-react";
 
/* ------------------------------------------------------------------
   IMAGES: every picture below has a built-in illustration, so the page
   looks finished today. To use real photos, put files in /public/images
   and paste the path here, e.g. hero: "/images/hero.jpg".
------------------------------------------------------------------- */
const IMAGES: Record<string, string> = { us: "", ca: "", faq: "", cta: "" };
const EMAIL = "support@motivehouse.co";
const FIRM = "Motive House"; // replace
 
const CSS = `
.tx [data-tone="dark"]{--bg:#110c0c;--bg2:#1c1514;--tx:#f5efe6;--mu:rgba(245,239,230,.68);--ln:rgba(245,239,230,.14);--sf:rgba(245,239,230,.05);--ac:#a8283f;--ink:#fff8f0;--br:#d9a85b;--gl:rgba(255,184,104,.24)}
.tx [data-tone="light"]{--bg:#f7f3ed;--bg2:#efe8de;--tx:#1d1214;--mu:rgba(29,18,20,.68);--ln:rgba(107,26,43,.16);--sf:rgba(107,26,43,.05);--ac:#6b1a2b;--ink:#f7f3ed;--br:#a9772a;--gl:rgba(107,26,43,.12)}
@keyframes rise{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
@keyframes up{from{transform:translateY(110%)}to{transform:none}}
@keyframes float{50%{transform:translateY(-7px)}}
@keyframes breathe{0%,100%{opacity:.6;transform:scale(1)}50%{opacity:1;transform:scale(1.07)}}
@keyframes stamp{0%{opacity:0;transform:scale(2.4) rotate(-20deg)}65%{opacity:1;transform:scale(.93) rotate(-9deg)}100%{opacity:1;transform:scale(1) rotate(-9deg)}}
@keyframes fade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
@keyframes flow{to{stroke-dashoffset:-20}}
@keyframes pop{from{opacity:0;transform:scale(.4)}to{opacity:1;transform:none}}
@keyframes ring{0%{transform:scale(1);opacity:.6}100%{transform:scale(1.5);opacity:0}}
@keyframes sweep{from{transform:scaleX(0)}to{transform:scaleX(1)}}
@keyframes glow{0%,100%{box-shadow:0 0 0 0 var(--gl)}50%{box-shadow:0 0 0 10px transparent}}
@media (prefers-reduced-motion:reduce){.tx *{animation:none!important;transition:none!important}.tx .o0{opacity:1!important}.tx .ln{transform:none!important}.tx .bw{filter:none!important;opacity:1!important}.tx .sw{transform:none!important}}
.tx :focus-visible{outline:2px solid var(--br);outline-offset:3px}
.tx ::-webkit-scrollbar{display:none}
`;
 
/* ---------- Illustrated "photos" (SVG) ---------- */
function Art({ k }: { k: string }) {
  const paper = "#f3ead9", ink = "#3a2622", red = "#a8283f", gold = "#d9a85b";
  const lines = (x: number, y: number, n: number, w = 120) =>
    Array.from({ length: n }, (_, i) => <rect key={i} x={x} y={y + i * 12} width={i % 3 === 2 ? w * 0.6 : w} height="4" rx="2" fill={ink} opacity=".22" />);
  return (
    <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden="true">
      <defs>
        <radialGradient id={`g-${k}`} cx="78%" cy="8%" r="75%"><stop offset="0" stopColor="#ffb868" stopOpacity=".5" /><stop offset="1" stopColor="#ffb868" stopOpacity="0" /></radialGradient>
        <linearGradient id={`d-${k}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#241a18" /><stop offset="1" stopColor="#120d0c" /></linearGradient>
      </defs>
      <rect width="400" height="260" fill={`url(#d-${k})`} />
      <rect width="400" height="260" fill={`url(#g-${k})`} />
      <rect y="190" width="400" height="70" fill="#1a1211" />
      <g transform="translate(70 34) rotate(-4)">
        <rect width="190" height="170" rx="6" fill={paper} />
        <rect x="14" y="14" width="70" height="8" rx="2" fill={red} />
        {lines(14, 34, 9, 160)}
      </g>
      {(k === "us" || k === "cta") && (<g transform="translate(250 96) rotate(-9)"><rect width="104" height="38" rx="6" fill="none" stroke={red} strokeWidth="4" /><text x="52" y="26" textAnchor="middle" fontSize="20" fontWeight="800" fill={red}>READY</text></g>)}
      {k === "ca" && (<g transform="translate(262 70)"><path d="M40 0l9 22 20-8-6 24 22 6-22 12 8 22-21-8-10 20-10-20-21 8 8-22L-12 44l22-6-6-24 20 8z" fill={red} opacity=".9" transform="scale(.8)" /></g>)}
      {k === "faq" && (<g><rect x="262" y="60" width="86" height="116" rx="8" fill="#2c211f" stroke={gold} /><rect x="272" y="72" width="66" height="22" rx="3" fill={gold} opacity=".85" />{[0, 1, 2].map((r) => [0, 1, 2].map((c) => <rect key={`${r}${c}`} x={272 + c * 23} y={104 + r * 22} width="18" height="16" rx="3" fill="#f3ead9" opacity=".8" />))}</g>)}
      <rect x="40" y="188" width="320" height="6" rx="3" fill="#000" opacity=".35" />
    </svg>
  );
}
function Pic({ k, className = "" }: { k: string; className?: string }) {
  const [bad, setBad] = useState(false);
  const src = IMAGES[k];
  return (
    <div className={`overflow-hidden ${className}`}>
      {src && !bad ? <img src={src} alt="" loading="lazy" onError={() => setBad(true)} className="h-full w-full object-cover" /> : <Art k={k} />}
    </div>
  );
}
 
/* ------------------------------------------------------------------
   CONTENT (from your copy pack, word for word)
------------------------------------------------------------------- */
const HERO = {
  eyebrow: "ACCOUNTING SUPPORT • TAX-READY RECORDS",
  lines: ["Clear accounts.", "Confident decisions.", "Fewer tax surprises."],
  p: "Reliable accounting and tax support for small businesses across the United States and Canada. We help keep your accounts organised, your reports meaningful, and your tax-time preparation more manageable—with support that fits the way your business works.",
  primary: "Book a Discovery Call",
  secondary: "Explore Our Services",
};
 
const INTRO = {
  h: "Spend less time chasing numbers—and more time running your business",
  p: "When accounts fall behind, it becomes harder to understand cash flow, track profitability, prepare for taxes, or make confident decisions. Our outsourced accounting and tax support gives you a clearer view of your numbers and a consistent process for keeping financial records up to date.",
};
 
const SUPPORT = [
  { t: "Account reconciliations and review", d: "Bank and credit-card reconciliations, review of balance-sheet accounts, organised supporting documentation, and a dependable monthly routine.", I: BookOpenCheck },
  { t: "Account clean-up and catch-up", d: "A structured review of overdue, incomplete, duplicated, or misclassified items to help bring your accounts back into order.", I: ListChecks },
  { t: "Management reports", d: "Profit and loss, balance sheet, cash-flow insights, and practical explanations of what changed and what deserves attention.", I: BarChart3 },
  { t: "Tax-time support", d: "Year-end schedules and organised records that help your tax preparer work from clearer, more complete information. Tax return preparation and advisory services are provided only within the scope and qualifications agreed for your engagement.", I: ScrollText },
];
 
const SOFTWARE = {
  h: "Work with the accounting software that suits you",
  p: "We support cloud and desktop accounting workflows across QuickBooks Online, Xero, Sage, Zoho Books, and other platforms where the engagement and access permissions allow. We can help maintain an existing setup or plan a more orderly transition.",
};
const PLATFORMS = ["QuickBooks Online", "Xero", "Sage", "Zoho Books"];
 
const PROCESS_H = "A practical process, with clear expectations";
const STEPS: [string, string][] = [
  ["Discover", "we learn about your business, current records, software, reporting needs, and deadlines."],
  ["Set up the workflow", "we agree on the scope, responsibilities, access, close calendar, and communication rhythm."],
  ["Keep the accounts moving", "transactions are reviewed and reconciled according to the agreed schedule."],
  ["Review and improve", "we share reports, flag open questions, and identify recordkeeping gaps to address."],
];
 
const SERVICES_INTRO = {
  h: "Accounting and tax services that keep business moving",
  p: "Choose ongoing support, help with a backlog, or a focused project to improve your accounting setup. We will define the deliverables and responsibilities before work begins.",
  foot: "Not sure what you need? Book a discovery call and we will help define the first practical step.",
};
const SERVICES: { t: string; k: "Accounting" | "Tax"; I: typeof RefreshCw; d: string }[] = [
  { t: "Account reconciliations and review", k: "Accounting", I: RefreshCw, d: "Bank and credit-card reconciliations, review of balance-sheet accounts, and organised supporting documentation. We work to an agreed monthly schedule so that unresolved items are identified rather than left to build up." },
  { t: "Account clean-up and catch-up", k: "Accounting", I: Wrench, d: "For businesses with overdue months, unreconciled accounts, inconsistent coding, duplicate transactions, or balances that do not make sense. We assess the backlog, agree on a priority order, investigate discrepancies where records are available, and document items requiring owner or tax-professional input." },
  { t: "Month-end close and financial reporting", k: "Accounting", I: CalendarCheck, d: "Close support may include reconciliations, review of clearing and suspense accounts, accrual and prepayment schedules where applicable, fixed-asset records, and preparation of management reports. Reports can include profit and loss, balance sheet, cash-flow summaries, and budget-versus-actual comparisons when suitable data is available." },
  { t: "Accounts payable and receivable support", k: "Accounting", I: ArrowLeftRight, d: "Help maintain supplier records, organise bills, monitor due dates, prepare payment lists for client approval, issue or track invoices, and review aged receivables. Payments and approvals remain with your authorised staff unless a separate, controlled workflow is agreed." },
  { t: "Payroll accounting and contractor records", k: "Accounting", I: Users, d: "Reconcile payroll journals and liabilities, organise payroll reports, and help maintain contractor-payment records. Payroll processing, employment-law advice, and required government filings are scoped separately and depend on the applicable jurisdiction and service arrangement." },
  { t: "Accounting software setup and support", k: "Accounting", I: Settings, d: "Chart-of-accounts review, bank-feed workflows, tracking categories or classes, opening-balance checks, recurring transaction rules, reporting setup, and conversion planning for QuickBooks Online, Xero, Sage, Zoho Books, and other supported platforms." },
  { t: "Tax-ready records and year-end schedules", k: "Tax", I: ClipboardList, d: "We help organise the accounts and supporting schedules commonly needed for year-end tax work. Depending on the engagement, this may include coordinating source documents, reconciling tax-related balance-sheet accounts, organising income and expense detail, and liaising with your appointed tax professional." },
  { t: "Tax return preparation and support", k: "Tax", I: Scale, d: "Tax return preparation, tax advice, and representation are offered only where covered by the firm's actual qualifications and engagement terms. With your permission, we can coordinate relevant records and workpapers with your appointed tax professional when this is included in the engagement. No particular filing outcome or tax savings is guaranteed." },
];
 
const REGION = {
  h: "Accounting and tax support for US and Canadian businesses",
  p: "The right process depends on your country, state or province, entity structure, sales channels, and obligations. We organise the accounting workflow around the records and reporting requirements relevant to your business, and coordinate tax-related work within the agreed professional scope.",
};
const MODES = {
  US: {
    t: "Accounting and tax-time support for US small businesses",
    intro: "Keep your accounts organised throughout the year—not just when a federal or state deadline is approaching. We support owners, operators, and professional advisers with consistent accounting and reporting workflows for US businesses.",
    listH: "US accounting support can include",
    items: ["Bank and credit-card reconciliations", "Income and expense review", "Balance-sheet reconciliations", "Accounts payable and receivable tracking", "Payroll journal and liability reconciliation", "Contractor-payment records", "Sales-tax transaction summaries where applicable", "Year-end workpapers"],
    prepH: "Prepare better records for tax season",
    prep: "A reconciled ledger and organised source documents can make it easier for a qualified tax preparer to assess business income, deductible expenses, asset purchases, contractor payments, and year-end balances. The right treatment depends on the entity, facts, federal requirements, and state or local rules. We will flag missing information rather than assume an answer.",
    scope: "Available tax services may include document organisation, accounting workpapers, coordination with a qualified US tax professional, and tax-return preparation when expressly included in the engagement and performed by appropriately qualified personnel. No particular filing outcome or tax savings is guaranteed.",
    cta: "Get your US accounting and tax workflow under control", pic: "us",
  },
  Canada: {
    t: "Accounting and tax-time support for Canadian small businesses",
    intro: "Build a consistent accounting routine that supports better decisions and more organised year-end work. We help Canadian businesses maintain financial records and organise information relevant to federal and provincial obligations.",
    listH: "Canadian accounting support can include",
    items: ["Bank and credit-card reconciliations", "Income and expense review", "Accounts payable and receivable", "Payroll journal and liability reconciliation", "Fixed-asset schedules", "Management reports", "Organised records for GST/HST and applicable provincial sales-tax processes, based on your business activities and registration status"],
    prepH: "Organised records for GST/HST and year-end",
    prep: "Well-maintained records can help your tax or accounting professional review sales, purchases, tax collected, eligible input tax credits, payroll records, and year-end balances. Treatment can differ by province, transaction type, registration status, and the nature of the business, so unusual items should be reviewed rather than coded by assumption.",
    scope: "Depending on the engagement and the qualifications of the personnel involved, services may include tax-document preparation, GST/HST recordkeeping support, coordination with a Canadian tax professional, and preparation of personal or corporate returns where offered by an appropriately qualified preparer. Provincial and federal requirements should be confirmed for each client.",
    cta: "Talk with us about your Canadian accounting and tax needs", pic: "ca",
  },
} as const;
 
const TAXCHECK = {
  h: "How tax-ready are your records?",
  p: "A reconciled ledger and organised source documents make it easier for a qualified tax preparer to do their work. Tick what you already have in place.",
  items: [
    "Bank and credit-card accounts reconciled",
    "Source documents organised and easy to find",
    "Business income and expenses reviewed",
    "Asset purchases recorded",
    "Contractor payments recorded in full",
    "Payroll records and liabilities reconciled",
    "Sales tax or GST/HST records organised",
    "Year-end balances reviewed",
  ],
  note: "A quick self-check for orientation, not tax advice.",
};
 
const INDUSTRIES_INTRO = {
  h: "Accounting and tax support shaped around how your business operates",
  p: "Different business models create different accounting questions. We begin with how money moves through your business, what records are available, and which reports help you manage it.",
  foot: "We will confirm fit before accepting work that requires specialist industry, inventory, trust-account, multi-entity, or regulated-sector expertise.",
};
const INDUSTRIES = [
  { t: "Professional services and consultants", I: Briefcase, d: "Track client income, subcontractor costs, recurring software charges, reimbursable expenses, and project profitability." },
  { t: "Construction, trades, and contractors", I: HardHat, d: "Organise supplier bills, subcontractor records, job-related expenses, equipment purchases, customer deposits, and job or project reporting where the available records support it." },
  { t: "E-commerce and retail", I: ShoppingCart, d: "Reconcile payment processors and marketplaces, investigate settlement differences, organise refunds and fees, and make inventory-related questions visible for review." },
  { t: "Agencies and creative businesses", I: Palette, d: "Keep retainers, project revenue, contractor costs, software subscriptions, and client billing easier to review." },
  { t: "Property and real-estate businesses", I: Building2, d: "Organise property-level income and expenses, loan and interest records, repairs, capital purchases, and supporting schedules according to the agreed accounting scope." },
];
 
const ABOUT = {
  h: "An accounting support partner focused on clarity and consistency",
  p1: `At ${FIRM}, we believe useful financial information starts with dependable records. Our role is to help business owners reduce accounting backlogs, understand their reports, and maintain a process that supports better conversations with management, lenders, and tax professionals.`,
  p2: "We work with the tools and workflows your business uses, then agree on a clear scope, review process, and communication rhythm. We value careful reconciliations, documented questions, sensible controls, and reports that are understandable—not just completed tasks.",
  principlesH: "Our working principles",
};
const PRINCIPLES: [string, string][] = [
  ["Consistency", "follow a repeatable close and reconciliation process."],
  ["Transparency", "raise missing information and unresolved items early."],
  ["Fit-for-purpose reporting", "focus on the information that supports your decisions."],
  ["Responsible boundaries", "clarify what the engagement covers and involve appropriately qualified professionals when specialist advice or filings are needed."],
];
/* TODO: Add a real team biography here, including relevant qualifications, software
   certifications, languages, and experience. Avoid implying CPA, EA, or other regulated
   status unless it is accurate and current. The "Team" block stays hidden while empty. */
const TEAM: { name: string; role: string; bio: string }[] = [];
 
const FAQS: [string, string][] = [
  ["Do you work with businesses in both the US and Canada?", "We are building service workflows for businesses in both markets. Availability depends on your location, business structure, accounting needs, and the scope of tax work requested. We confirm the fit and responsibilities before onboarding."],
  ["Do you prepare tax returns?", "Tax services depend on the country, type of return, engagement terms, and the qualifications or authorisations required. During onboarding, we will confirm whether we prepare the return, coordinate with a qualified tax professional, or provide tax-ready accounting records only."],
  ["Will you communicate directly with my tax preparer?", "With your permission, we can coordinate relevant accounting records and workpapers with your appointed tax professional when this is included in the engagement."],
  ["Which accounting software do you support?", "Our stated platforms include QuickBooks Online, Xero, Sage, and Zoho Books, subject to the specific product, subscription, data access, and requirements of the engagement. Tell us what you currently use during the discovery call."],
  ["Can you fix accounts that are several months behind?", "Often, yes. We first assess the period, transaction volume, account condition, and source-document availability. We then agree on a cleanup plan and identify questions that require your approval or a tax professional's judgement."],
  ["How much do your services cost?", "Pricing depends on transaction volume, number of accounts and entities, software condition, reporting needs, payroll or sales-tax complexity, and whether catch-up work is required. We provide a defined scope and quote after an initial review."],
  /* TODO: describe only controls you actually maintain. */
  ["How do you protect financial information?", "We use role-based access, approved file-sharing methods, and agreed procedures for handling financial records. We ask clients not to send passwords by email and to use secure access invitations wherever possible."],
];
 
type Article = { t: string; slug: string; region: string; kw: string; ex: string };
const ARTICLES: Article[] = [
  { t: "How to Keep US Small-Business Accounts Tax-Ready All Year", slug: "/blog/us-small-business-tax-ready-accounting/", region: "United States", kw: "tax-ready US small business", ex: "Tax preparation is easier to organise when the accounts are current and key documents are easy to find. These habits help reduce last-minute record gathering." },
  { t: "Canadian Small-Business Accounting: GST/HST Records to Keep Organised", slug: "/blog/canadian-accounting-gst-hst-records/", region: "Canada", kw: "Canadian accounting GST HST records", ex: "Consistent records help businesses review tax collected, eligible credits, and supporting documents. The exact treatment depends on registration status and the transaction." },
  { t: "US Contractor Payments: Records to Organise Before Year-End", slug: "/blog/us-contractor-payments-accounting-records/", region: "United States", kw: "US contractor payment records", ex: "Good contractor records begin when the vendor is added—not in the final weeks of the year. Keep payment detail complete and confirm reporting rules with a tax professional." },
  { t: "Five Financial Reports Small-Business Owners Should Review", slug: "/blog/financial-reports-small-business-owners-should-review/", region: "US and Canada", kw: "financial reports for small business owners", ex: "Reports are most valuable when they are current, reconciled, and reviewed together. Here are five reports that can help owners ask better questions." },
  { t: "QuickBooks Online vs Xero vs Sage vs Zoho Books: How to Choose", slug: "/blog/quickbooks-xero-sage-zoho-books-comparison/", region: "US and Canada", kw: "QuickBooks vs Xero vs Sage vs Zoho Books", ex: "The best accounting platform is the one that fits your transaction flow, reporting needs, integrations, and team's ability to maintain it consistently." },
  { t: "Accounting for Businesses With Customers in Both the US and Canada", slug: "/blog/cross-border-us-canada-accounting-basics/", region: "US and Canada", kw: "US Canada cross-border accounting", ex: "Cross-border activity increases the importance of clear entity records, currency handling, reconciliations, and coordinated professional advice." },
];
const REGIONS = ["All", "United States", "Canada", "US and Canada"];
 
const FINAL = { h: "Ready for clearer accounts?", p: `Schedule a discovery call with ${FIRM}.` };
 
const NAV = [
  ["home", "Overview"], ["support", "Support"], ["software", "Software"], ["process", "Process"], ["services", "Services"], ["taxcheck", "Tax check"],
  ["regions", "US & Canada"], ["industries", "Industries"], ["about", "About"], ["faq", "FAQ"], ["insights", "Insights"], ["contact", "Contact"],
] as const;
 
/* ------------------------------------------------------------------
   Helpers
------------------------------------------------------------------- */
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
      const vh = window.innerHeight, s = vh * 0.85, e = vh * 0.35;
      setP(Math.max(0, Math.min(1, (s - r.top) / (r.height + s - e))));
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(calc); };
    calc();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); if (raf) cancelAnimationFrame(raf); };
  }, []);
  return [ref, p] as const;
}
 
/** Reveal on scroll (each block watches itself) */
function R({ delay = 0, className = "", children }: { delay?: number; className?: string; children: React.ReactNode }) {
  const [ref, seen] = useInView<HTMLDivElement>(0.12);
  return (
    <div ref={ref} className={`o0 opacity-0 ${seen ? "[animation:rise_.8s_cubic-bezier(.2,.7,.2,1)_forwards]" : ""} ${className}`} style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  );
}
 
const h2 = "m-0 text-[clamp(1.9rem,4.2vw,3rem)] font-bold leading-[1.06] tracking-[-0.035em]";
const eyebrow = "mb-4 text-xs font-semibold tracking-[0.12em] text-[color:var(--br)]";
const btn = "group inline-flex items-center gap-2.5 rounded-full bg-[var(--ac)] py-1.5 pl-5 pr-1.5 text-sm font-semibold text-[color:var(--ink)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-12px_var(--ac)]";
const dot = "grid h-8 w-8 place-items-center rounded-full bg-[var(--ink)] text-[color:var(--ac)] transition-transform duration-500 group-hover:rotate-45";
const Cta = ({ children, subject = "Discovery call" }: { children: React.ReactNode; subject?: string }) => (
  <a href={`mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`} className={btn}>{children}<i className={dot}><ArrowUpRight size={15} /></i></a>
);
 
/* ---------- Hero: a general journal that posts itself and balances ---------- */
const POSTS: [string, number, number][] = [
  ["Cash", 3200, 0], ["Sales revenue", 0, 3200],
  ["Software subscriptions", 129, 0], ["Cash", 0, 129],
  ["Contractor payments", 850, 0], ["Cash", 0, 850],
  ["Payroll expense", 2400, 0], ["Cash", 0, 2400],
];
const TOTAL = 6579;
const money = (n: number) => (n ? n.toLocaleString("en-US") : "");
 
function LedgerHero({ reduce }: { reduce: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (reduce) { setN(POSTS.length); return; }
    let t: ReturnType<typeof setTimeout>;
    const step = (k: number) => {
      setN(k);
      t = setTimeout(() => step(k < POSTS.length ? k + 1 : 0), k === 0 ? 900 : k === POSTS.length ? 4600 : 640);
    };
    t = setTimeout(() => step(1), 1100);
    return () => clearTimeout(t);
  }, [reduce]);
 
  const dr = POSTS.slice(0, n).reduce((a, r) => a + r[1], 0);
  const cr = POSTS.slice(0, n).reduce((a, r) => a + r[2], 0);
  const done = n === POSTS.length;
 
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute -inset-8 bg-[radial-gradient(circle_at_70%_8%,var(--gl),transparent_60%)] [animation:breathe_6s_ease-in-out_infinite]" />
      <div className="relative overflow-hidden rounded-3xl border border-[color:var(--ln)] bg-[var(--bg2)] shadow-[0_40px_80px_-30px_rgba(0,0,0,.9)]">
        <div className="flex items-center justify-between border-b border-[color:var(--ln)] px-5 py-3.5">
          <span className="text-sm font-semibold">General journal</span>
          <span className="rounded-full bg-[var(--sf)] px-2.5 py-0.5 text-[11px] text-[color:var(--mu)]">Illustrative example</span>
        </div>
        <div className="grid grid-cols-[1fr_72px_72px] gap-2 border-b border-[color:var(--ln)] px-5 py-2 text-[11px] font-semibold tracking-[0.1em] text-[color:var(--mu)] sm:grid-cols-[1fr_90px_90px]">
          <span>ACCOUNT</span><span className="text-right">DEBIT</span><span className="text-right">CREDIT</span>
        </div>
 
        <ul className="m-0 list-none p-0">
          {POSTS.map(([a, d, c], i) => {
            const on = i < n;
            return (
              <li key={i} className={`grid grid-cols-[1fr_72px_72px] gap-2 border-b border-[color:var(--ln)] px-5 py-[9px] font-mono text-[12.5px] transition-all duration-500 sm:grid-cols-[1fr_90px_90px] ${on ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}`}>
                <span className={c ? "pl-5 text-[color:var(--mu)]" : ""}>{a}</span>
                <span className="text-right tabular-nums">{money(d)}</span>
                <span className="text-right tabular-nums">{money(c)}</span>
              </li>
            );
          })}
        </ul>
 
        <div className="relative grid grid-cols-[1fr_72px_72px] gap-2 px-5 py-4 font-mono text-[13px] font-bold sm:grid-cols-[1fr_90px_90px]">
          <span className="font-sans text-xs font-semibold tracking-[0.1em] text-[color:var(--mu)]">TOTALS</span>
          <span className="border-b-[3px] border-double border-[color:var(--br)] text-right tabular-nums">{money(dr)}</span>
          <span className="border-b-[3px] border-double border-[color:var(--br)] text-right tabular-nums">{money(cr)}</span>
        </div>
 
        <div className="space-y-1.5 px-5 pb-5">
          {[dr, cr].map((v, i) => (
            <span key={i} className="block h-1.5 overflow-hidden rounded-full bg-[var(--sf)]">
              <span className="block h-full rounded-full bg-[var(--br)] transition-[width] duration-500" style={{ width: `${(v / TOTAL) * 100}%`, opacity: i ? 0.65 : 1 }} />
            </span>
          ))}
          <p className={`m-0 pt-2 text-xs transition-opacity duration-500 ${done ? "opacity-100" : "opacity-0"}`}>
            <b className="text-[color:var(--br)]">Trial balance:</b> <span className="text-[color:var(--mu)]">debits equal credits</span>
          </p>
        </div>
 
        {done && (
          <div aria-hidden="true" className="pointer-events-none absolute bottom-16 right-5 [animation:stamp_.8s_cubic-bezier(.2,.8,.2,1)_both]">
            <span className="block rounded-md border-[3px] border-[color:var(--ac)] px-3 py-1 text-lg font-extrabold tracking-wider text-[color:var(--ac)]">BALANCED</span>
          </div>
        )}
      </div>
    </div>
  );
}
 
/* ---------- Software hub with travelling pulses ---------- */
function Hub({ reduce }: { reduce: boolean }) {
  const nodes = [
    { n: "QuickBooks Online", x: 80, y: 40 }, { n: "Xero", x: 340, y: 40 },
    { n: "Sage", x: 80, y: 260 }, { n: "Zoho Books", x: 340, y: 260 },
    { n: "Other platforms", x: 210, y: 316, dashed: true },
  ];
  return (
    <svg viewBox="0 0 420 350" className="mx-auto w-full max-w-[460px]" role="img" aria-label="Your accounts connected to QuickBooks Online, Xero, Sage, Zoho Books and other platforms">
      {nodes.map((p, i) => (
        <g key={p.n}>
          <path d={`M${p.x} ${p.y}L210 150`} strokeWidth="1.6" strokeDasharray={p.dashed ? "4 5" : undefined} className="stroke-[color:var(--ln)]" fill="none" />
          {!reduce && (
            <circle r="4.5" className="fill-[var(--br)]">
              <animateMotion dur="2.8s" begin={`${i * 0.55}s`} repeatCount="indefinite" path={`M${p.x} ${p.y}L210 150`} />
            </circle>
          )}
        </g>
      ))}
      {nodes.map((p) => (
        <g key={p.n + "n"}>
          <rect x={p.x - 66} y={p.y - 20} width="132" height="40" rx="12" strokeDasharray={p.dashed ? "4 4" : undefined} className="fill-[var(--bg2)] stroke-[color:var(--ln)]" strokeWidth="1.5" />
          <text x={p.x} y={p.y + 4.5} textAnchor="middle" fontSize="12.5" fontWeight="600" className="fill-[var(--tx)]">{p.n}</text>
        </g>
      ))}
      <circle cx="210" cy="150" r="46" className="origin-center fill-[var(--ac)] opacity-30 [animation:ring_2.6s_ease-out_infinite] [transform-box:fill-box]" />
      <circle cx="210" cy="150" r="46" className="fill-[var(--ac)]" />
      <text x="210" y="146" textAnchor="middle" fontSize="14" fontWeight="800" className="fill-[var(--ink)]">Your</text>
      <text x="210" y="164" textAnchor="middle" fontSize="14" fontWeight="800" className="fill-[var(--ink)]">accounts</text>
    </svg>
  );
}
 
/* ---------- Blur-to-sharp paragraph (clearer view of your numbers) ---------- */
function BlurText({ text, p }: { text: string; p: number }) {
  const w = text.split(" ");
  return (
    <p className="m-0 text-[clamp(1.2rem,2.4vw,1.75rem)] font-medium leading-[1.5] tracking-[-0.01em]">
      {w.map((x, i) => {
        const k = Math.max(0, Math.min(1, (p * (w.length + 5) - i) / 5));
        return (
          <span key={i}>
            <span className="bw inline-block transition-[filter,opacity] duration-300" style={{ filter: `blur(${(1 - k) * 7}px)`, opacity: 0.28 + 0.72 * k }}>{x}</span>{" "}
          </span>
        );
      })}
    </p>
  );
}
 
/* ------------------------------------------------------------------
   Page
------------------------------------------------------------------- */
export default function TaxAccountingPage() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);
  const [reduce, setReduce] = useState(false);
  const [mode, setMode] = useState<"US" | "Canada">("US");
  const [faqOpen, setFaqOpen] = useState<string | null>(FAQS[0][0]);
  const [faqQ, setFaqQ] = useState("");
  const [region, setRegion] = useState("All");
  const [active, setActive] = useState("home");
  const [readP, setReadP] = useState(0);
  const [indP, setIndP] = useState(0);
  const [chk, setChk] = useState<boolean[]>(TAXCHECK.items.map(() => false));
  const track = useRef<HTMLDivElement>(null);
 
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
      raf = requestAnimationFrame(() => {
        raf = 0;
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        setReadP(max > 0 ? h.scrollTop / max : 0);
      });
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
 
  /* scroll-spy */
  useEffect(() => {
    const els = NAV.map(([id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
  const goTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
 
  /* scroll-driven blocks */
  const [introRef, introP] = useScrollProgress<HTMLDivElement>();
  const [procRef, procP] = useScrollProgress<HTMLDivElement>();
 
  /* industries carousel */
  const slide = (d: number) => track.current?.scrollBy({ left: d * 360, behavior: "smooth" });
  const onTrack = () => {
    const el = track.current;
    if (el) setIndP(el.scrollWidth > el.clientWidth ? el.scrollLeft / (el.scrollWidth - el.clientWidth) : 0);
  };
 
  const m = MODES[mode];
  const taxN = chk.filter(Boolean).length;
  const taxMsg =
    taxN === 0 ? "Tick what you already have in place and watch your score build."
    : taxN < 5 ? "A good start. We will flag missing information rather than assume an answer."
    : taxN < TAXCHECK.items.length ? "Nearly there. A few items to organise before year-end."
    : "Your records look ready to share with your tax professional.";
  const faqList = FAQS.filter(([q, a]) => (q + " " + a).toLowerCase().includes(faqQ.trim().toLowerCase()));
  const arts = ARTICLES.filter((a) => region === "All" || a.region === region);
  const line = `ln block translate-y-[110%] ${mounted ? "[animation:up_1s_cubic-bezier(.2,.8,.2,1)_forwards]" : ""}`;
 
  /* magnetic CTA */
  const mag = useRef<HTMLDivElement>(null);
  const onMag = (e: React.MouseEvent) => {
    const el = mag.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.transform = `translate(${(e.clientX - (r.left + r.width / 2)) * 0.12}px,${(e.clientY - (r.top + r.height / 2)) * 0.12}px)`;
  };
 
  return (
    <main className="tx relative overflow-x-clip">
      <style>{CSS}</style>
 
      {/* reading progress */}
      <div aria-hidden="true" className="fixed left-0 top-0 z-50 h-[3px] w-full">
        <div className="h-full bg-gradient-to-r from-[#a8283f] to-[#d9a85b]" style={{ width: `${readP * 100}%` }} />
      </div>
 
      {/* chapter rail */}
      <nav aria-label="Page sections" className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 xl:block">
        <ul className="m-0 flex list-none flex-col gap-1 rounded-full border border-white/10 bg-[#110c0c]/80 p-2 backdrop-blur">
          {NAV.map(([id, label]) => (
            <li key={id} className="group relative">
              <button type="button" onClick={() => goTo(id)} aria-label={label} aria-current={active === id} className="grid h-5 w-5 place-items-center">
                <span className={`block rounded-full transition-all duration-300 ${active === id ? "h-3 w-3 bg-[#d9a85b] shadow-[0_0_0_4px_rgba(217,168,91,.2)]" : "h-1.5 w-1.5 bg-white/40 group-hover:bg-white"}`} />
              </button>
              <span className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-[#110c0c] px-2 py-1 text-xs text-[#f5efe6] opacity-0 transition-opacity group-hover:opacity-100">{label}</span>
            </li>
          ))}
        </ul>
      </nav>
 
      {/* HERO */}
      <section id="home" data-tone={T("dark")} className={`${band} relative overflow-hidden px-5 pb-20 pt-24 sm:px-8 sm:pb-24 sm:pt-28`}>
        <button type="button" onClick={toggle} aria-label="Switch light and dark sections" className="absolute right-5 top-5 z-10 grid h-9 w-9 place-items-center rounded-full border border-[color:var(--ln)] bg-[var(--sf)] transition duration-500 hover:rotate-180 hover:bg-[var(--ac)] sm:right-8">
          {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
        </button>
        <div className="mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className={`${eyebrow} o0 opacity-0 ${mounted ? "[animation:rise_.8s_.1s_forwards]" : ""}`}>{HERO.eyebrow}</p>
            <h1 className="m-0 text-[clamp(2.3rem,5.6vw,4.6rem)] font-extrabold leading-[1.02] tracking-[-0.045em]">
              {HERO.lines.map((l, i) => (
                <span key={l} className="block overflow-hidden pb-[0.1em]">
                  <span className={`${line} ${i === 2 ? "text-[color:var(--br)]" : ""}`} style={{ animationDelay: `${0.15 + i * 0.15}s` }}>{l}</span>
                </span>
              ))}
            </h1>
            <p className={`mb-8 mt-6 max-w-[540px] text-base leading-7 text-[color:var(--mu)] sm:text-lg sm:leading-8 o0 opacity-0 ${mounted ? "[animation:rise_.9s_.8s_forwards]" : ""}`}>{HERO.p}</p>
            <div className={`flex flex-wrap items-center gap-5 o0 opacity-0 ${mounted ? "[animation:rise_.9s_1s_forwards]" : ""}`}>
              <Cta>{HERO.primary}</Cta>
              <a href="#services" onClick={(e) => { e.preventDefault(); goTo("services"); }} className="text-sm font-semibold text-[color:var(--mu)] underline-offset-4 hover:text-[color:var(--tx)] hover:underline">{HERO.secondary}</a>
            </div>
          </div>
          <LedgerHero reduce={reduce} />
        </div>
      </section>
 
      {/* INTRO + SUPPORT */}
      <section id="support" data-tone={T("light")} className={`${band} ${sec}`}>
        <div className="mx-auto max-w-[1200px]">
          <R className="mb-6 max-w-[760px]"><h2 className={h2}>{INTRO.h}</h2></R>
          <div ref={introRef} className="mb-20 max-w-[820px]"><BlurText text={INTRO.p} p={introP} /></div>
 
          <R><p className={eyebrow}>Support built around your business</p></R>
          <div className="grid gap-5 md:grid-cols-2">
            {SUPPORT.map(({ t, d, I }, i) => (
              <R key={t} delay={0.08 * i}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-[color:var(--ln)] bg-[var(--bg2)] bg-[linear-gradient(transparent_31px,var(--ln)_32px)] bg-[length:100%_32px] p-8 pl-16 transition duration-500 before:absolute before:bottom-0 before:left-10 before:top-0 before:w-px before:bg-[var(--ac)] before:opacity-40 hover:-translate-y-1.5 hover:border-[color:var(--br)]">
                  <span className="absolute right-5 top-5 grid h-9 w-9 scale-50 place-items-center rounded-full bg-[var(--ac)] text-[color:var(--ink)] opacity-0 transition duration-500 group-hover:scale-100 group-hover:opacity-100"><Check size={16} strokeWidth={3} /></span>
                  <span className="absolute left-3 top-8 grid h-8 w-8 place-items-center text-[color:var(--ac)]"><I size={18} /></span>
                  <h3 className="m-0 text-lg font-bold leading-8 tracking-tight">{t}</h3>
                  <p className="m-0 text-sm leading-8 text-[color:var(--mu)]">{d}</p>
                </article>
              </R>
            ))}
          </div>
        </div>
      </section>
 
      {/* SOFTWARE */}
      <section id="software" data-tone={T("dark")} className={`${band} ${sec}`}>
        <div className="mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-[1fr_1fr]">
          <R>
            <h2 className={`${h2} mb-5`}>{SOFTWARE.h}</h2>
            <p className="m-0 mb-6 max-w-[520px] text-base leading-7 text-[color:var(--mu)]">{SOFTWARE.p}</p>
            <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
              {PLATFORMS.map((p) => <li key={p} className="rounded-full border border-[color:var(--ln)] bg-[var(--sf)] px-3.5 py-1.5 text-sm font-medium">{p}</li>)}
            </ul>
          </R>
          <R delay={0.15}><Hub reduce={reduce} /></R>
        </div>
      </section>
 
      {/* PROCESS */}
      <section id="process" data-tone={T("light")} className={`${band} ${sec}`}>
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <R className="lg:sticky lg:top-28 lg:self-start"><h2 className={h2}>{PROCESS_H}</h2></R>
          <div ref={procRef} className="relative pl-14">
            <div aria-hidden="true" className="absolute bottom-0 left-[15px] top-0 w-px bg-[var(--ln)]" />
            <div aria-hidden="true" className="absolute left-[15px] top-0 w-px bg-[var(--br)]" style={{ height: `${procP * 100}%` }} />
            <span aria-hidden="true" className="absolute left-[7px] h-4 w-4 rounded-full bg-[var(--br)] [animation:glow_2s_infinite]" style={{ top: `calc(${procP * 100}% - 8px)` }} />
            <ol className="m-0 grid list-none gap-12 p-0">
              {STEPS.map(([t, d], i) => {
                const on = procP * 1.15 >= (i + 0.2) / STEPS.length;
                return (
                  <li key={t} className={`relative transition duration-700 ${on ? "translate-x-0 opacity-100" : "translate-x-3 opacity-40"}`}>
                    <span className={`absolute -left-14 grid h-8 w-8 place-items-center rounded-full border text-sm font-bold transition-colors duration-500 ${on ? "border-[color:var(--ac)] bg-[var(--ac)] text-[color:var(--ink)]" : "border-[color:var(--ln)] bg-[var(--bg)] text-[color:var(--mu)]"}`}>{i + 1}</span>
                    <h3 className="m-0 text-xl font-bold tracking-tight">{t}</h3>
                    <p className="mb-0 mt-2 max-w-[460px] text-sm leading-6 text-[color:var(--mu)]">{d.charAt(0).toUpperCase() + d.slice(1)}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>
 
      {/* SERVICES: cards stack as you scroll */}
      <section id="services" data-tone={T("dark")} className={`${band} ${sec}`}>
        <div className="mx-auto max-w-[1100px]">
          <R className="mb-12 max-w-[720px]">
            <h2 className={h2}>{SERVICES_INTRO.h}</h2>
            <p className="mb-0 mt-4 text-base leading-7 text-[color:var(--mu)]">{SERVICES_INTRO.p}</p>
          </R>
 
          <div className="flex flex-col gap-5">
            {SERVICES.map(({ t, d, I, k }, i) => (
              <article
                key={t}
                className="relative overflow-hidden rounded-3xl border border-[color:var(--ln)] bg-[var(--bg2)] p-7 shadow-[0_-24px_50px_-24px_rgba(0,0,0,.7)] sm:p-10 md:sticky"
                style={{ top: `${92 + i * 16}px` }}
              >
                <span aria-hidden="true" className="pointer-events-none absolute -right-2 -top-6 select-none text-[9rem] font-extrabold leading-none text-transparent [-webkit-text-stroke:1.5px_var(--ln)]">{i + 1}</span>
                <div className="relative grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
                  <div>
                    <span className={`mb-4 inline-block rounded-full px-3 py-1 text-[11px] font-semibold ${k === "Tax" ? "bg-[var(--br)] text-[color:var(--bg)]" : "border border-[color:var(--br)] text-[color:var(--br)]"}`}>{k}</span>
                    <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-[var(--ac)] text-[color:var(--ink)]"><I size={22} /></span>
                    <h3 className="m-0 text-2xl font-bold leading-tight tracking-tight">{t}</h3>
                    <span aria-hidden="true" className="sw mt-4 block h-[3px] w-14 origin-left bg-[var(--br)]" />
                  </div>
                  <p className="m-0 text-[0.95rem] leading-7 text-[color:var(--mu)]">{d}</p>
                </div>
              </article>
            ))}
          </div>
 
          <R className="mt-10 flex flex-wrap items-center justify-between gap-5 rounded-3xl border border-[color:var(--ln)] bg-[var(--sf)] p-6">
            <p className="m-0 max-w-[520px] text-sm leading-6">{SERVICES_INTRO.foot}</p>
            <Cta>{HERO.primary}</Cta>
          </R>
        </div>
      </section>
 
      {/* TAX-READY CHECK */}
      <section id="taxcheck" data-tone={T("light")} className={`${band} ${sec}`}>
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <R>
              <p className={eyebrow}>Tax-ready check</p>
              <h2 className={`${h2} mb-3`}>{TAXCHECK.h}</h2>
              <p className="mb-7 mt-0 max-w-[540px] text-base leading-7 text-[color:var(--mu)]">{TAXCHECK.p}</p>
            </R>
            <ul className="m-0 grid list-none gap-2.5 p-0 sm:grid-cols-2">
              {TAXCHECK.items.map((x, i) => (
                <li key={x}>
                  <button
                    type="button"
                    role="checkbox"
                    aria-checked={chk[i]}
                    onClick={() => setChk((c) => c.map((v, j) => (j === i ? !v : v)))}
                    className={`flex h-full w-full items-start gap-3 rounded-2xl border p-4 text-left text-[13.5px] leading-5 transition duration-300 hover:-translate-y-0.5 ${chk[i] ? "border-[color:var(--ac)] bg-[var(--ac)] text-[color:var(--ink)]" : "border-[color:var(--ln)] bg-[var(--sf)] hover:border-[color:var(--ac)]"}`}
                  >
                    <span className={`mt-px grid h-5 w-5 shrink-0 place-items-center rounded-md border transition-colors ${chk[i] ? "border-transparent bg-[var(--ink)] text-[color:var(--ac)]" : "border-[color:var(--ln)]"}`}>
                      {chk[i] && <Check size={13} strokeWidth={3.5} className="[animation:pop_.35s_both]" />}
                    </span>
                    {x}
                  </button>
                </li>
              ))}
            </ul>
          </div>
 
          <R delay={0.15}>
            <div className="rounded-3xl border border-[color:var(--ln)] bg-[var(--bg2)] p-7 text-center sm:p-9">
              <div className="relative mx-auto h-44 w-44">
                <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90" aria-hidden="true">
                  <circle cx="60" cy="60" r="52" fill="none" strokeWidth="9" className="stroke-[color:var(--ln)]" />
                  <circle cx="60" cy="60" r="52" fill="none" strokeWidth="9" strokeLinecap="round" strokeDasharray={2 * Math.PI * 52} strokeDashoffset={2 * Math.PI * 52 * (1 - taxN / TAXCHECK.items.length)} className="stroke-[color:var(--br)] transition-[stroke-dashoffset] duration-700 ease-out" />
                </svg>
                <div className="absolute inset-0 grid place-items-center">
                  <div>
                    <div className="text-4xl font-extrabold tabular-nums tracking-[-0.04em]">{taxN}<span className="text-xl text-[color:var(--mu)]">/{TAXCHECK.items.length}</span></div>
                    <div className="text-[11px] tracking-[0.1em] text-[color:var(--mu)]">IN PLACE</div>
                  </div>
                </div>
                {taxN === TAXCHECK.items.length && <span aria-hidden="true" className="absolute inset-0 rounded-full [animation:ring_1.6s_ease-out_infinite] border-2 border-[color:var(--br)]" />}
              </div>
 
              <p key={taxMsg} className="mx-auto mb-5 mt-6 min-h-[72px] max-w-[320px] text-sm leading-6 [animation:fade_.5s_both]">{taxMsg}</p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Cta subject="Tax-ready records">{HERO.primary}</Cta>
                <button type="button" onClick={() => setChk(TAXCHECK.items.map(() => false))} className="inline-flex items-center gap-1.5 text-xs font-semibold text-[color:var(--mu)] hover:text-[color:var(--tx)]"><RotateCcw size={13} />Reset</button>
              </div>
              <p className="mb-0 mt-5 text-[11px] text-[color:var(--mu)]">{TAXCHECK.note}</p>
            </div>
          </R>
        </div>
      </section>
 
      {/* US / CANADA */}
      <section id="regions" data-tone={T("dark")} className={`${band} ${sec}`}>
        <div className="mx-auto max-w-[1200px]">
          <R className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-[640px]">
              <h2 className={h2}>{REGION.h}</h2>
              <p className="mb-0 mt-4 text-base leading-7 text-[color:var(--mu)]">{REGION.p}</p>
            </div>
            <div role="tablist" aria-label="Country" className="relative flex rounded-full border border-[color:var(--ln)] bg-[var(--sf)] p-1">
              <span aria-hidden="true" className="absolute bottom-1 top-1 w-[calc(50%-4px)] rounded-full bg-[var(--ac)] transition-transform duration-500 [transition-timing-function:cubic-bezier(.3,1.2,.5,1)]" style={{ transform: mode === "US" ? "translateX(0)" : "translateX(100%)" }} />
              {(["US", "Canada"] as const).map((c) => (
                <button key={c} role="tab" aria-selected={mode === c} onClick={() => setMode(c)} className={`relative z-10 w-28 rounded-full py-2 text-sm font-semibold transition-colors ${mode === c ? "text-[color:var(--ink)]" : "text-[color:var(--mu)]"}`}>{c}</button>
              ))}
            </div>
          </R>
 
          <div key={mode} className="grid items-start gap-6 [animation:fade_.6s_both] lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-3xl border border-[color:var(--ln)] bg-[var(--sf)] p-7 sm:p-9">
              <h3 className="m-0 text-2xl font-bold leading-tight tracking-tight">{m.t}</h3>
              <p className="mb-7 mt-3 text-sm leading-6 text-[color:var(--mu)]">{m.intro}</p>
 
              <h4 className="mb-3 mt-0 text-sm font-semibold">{m.listH}</h4>
              <ul className="m-0 mb-7 grid list-none gap-2 p-0 sm:grid-cols-2">
                {m.items.map((x, i) => (
                  <li key={x} className={`flex items-start gap-3 rounded-xl border border-[color:var(--ln)] bg-[var(--bg)] p-3 text-[13px] leading-5 ${i === m.items.length - 1 && m.items.length % 2 ? "sm:col-span-2" : ""}`}>
                    <span className="mt-px grid h-5 w-5 shrink-0 place-items-center rounded-md bg-[var(--ac)] text-[color:var(--ink)] [animation:pop_.45s_both]" style={{ animationDelay: `${0.25 + i * 0.12}s` }}><Check size={12} strokeWidth={3.5} /></span>
                    {x}
                  </li>
                ))}
              </ul>
 
              <h4 className="mb-2 mt-0 text-sm font-semibold">{m.prepH}</h4>
              <p className="mb-7 mt-0 text-sm leading-6 text-[color:var(--mu)]">{m.prep}</p>
              <Cta subject={m.cta}>{m.cta}</Cta>
            </div>
 
            <div className="grid gap-5">
              <aside className="rounded-3xl border border-[color:var(--br)] bg-[var(--bg2)] p-6">
                <h4 className="mb-3 mt-0 flex items-center gap-2.5 text-sm font-bold"><Scale size={18} className="text-[color:var(--br)]" />Tax services and scope</h4>
                <p className="m-0 text-[13px] leading-6 text-[color:var(--mu)]">{m.scope}</p>
              </aside>
            </div>
          </div>
        </div>
      </section>
 
      {/* INDUSTRIES */}
      <section id="industries" data-tone={T("light")} className={`${band} ${sec}`}>
        <div className="mx-auto max-w-[1200px]">
          <R className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-[680px]">
              <h2 className={h2}>{INDUSTRIES_INTRO.h}</h2>
              <p className="mb-0 mt-4 text-base leading-7 text-[color:var(--mu)]">{INDUSTRIES_INTRO.p}</p>
            </div>
            <div className="flex gap-2">
              {[-1, 1].map((d) => (
                <button key={d} type="button" onClick={() => slide(d)} aria-label={d < 0 ? "Previous industry" : "Next industry"} className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--ln)] transition hover:bg-[var(--ac)]">
                  {d < 0 ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
                </button>
              ))}
            </div>
          </R>
 
          <div ref={track} onScroll={onTrack} className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:mx-0 sm:px-0" tabIndex={0} aria-label="Industries">
            {INDUSTRIES.map(({ t, d, I }) => (
              <article key={t} className="group w-[min(84vw,340px)] shrink-0 snap-start rounded-3xl border border-[color:var(--ln)] bg-[var(--bg2)] p-6 transition duration-500 hover:-translate-y-1.5 hover:border-[color:var(--br)]">
                <svg viewBox="0 0 200 44" className="mb-5 h-11 w-full" aria-hidden="true">
                  {[10, 22, 34].map((y) => <circle key={y} cx="8" cy={y} r="3.5" className="fill-[var(--mu)] opacity-50" />)}
                  <path d="M14 22H150" fill="none" strokeWidth="2" strokeDasharray="4 6" className="stroke-[color:var(--br)] [animation:flow_1.2s_linear_infinite]" />
                  <rect x="156" y="6" width="40" height="32" rx="8" className="fill-[var(--ac)]" />
                  <path d="M168 22l6 6 10-12" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="stroke-[color:var(--ink)]" />
                </svg>
                <span className="mb-4 grid h-11 w-11 place-items-center rounded-full bg-[var(--ac)] text-[color:var(--ink)] transition-transform duration-500 group-hover:rotate-[360deg]"><I size={20} /></span>
                <h3 className="m-0 text-lg font-bold leading-snug tracking-tight">{t}</h3>
                <p className="mb-0 mt-3 text-sm leading-6 text-[color:var(--mu)]">{d}</p>
              </article>
            ))}
          </div>
 
          <span aria-hidden="true" className="mt-4 block h-[3px] overflow-hidden rounded-full bg-[var(--ln)]">
            <span className="block h-full w-1/3 rounded-full bg-[var(--br)] transition-transform duration-200" style={{ transform: `translateX(${indP * 200}%)` }} />
          </span>
          <p className="mb-0 mt-8 max-w-[640px] border-l-2 border-[color:var(--br)] pl-4 text-sm leading-6 text-[color:var(--mu)]">{INDUSTRIES_INTRO.foot}</p>
        </div>
      </section>
 
      {/* ABOUT */}
      <section id="about" data-tone={T("dark")} className={`${band} ${sec}`}>
        <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[1fr_1fr]">
          <R>
            <h2 className={`${h2} mb-6`}>{ABOUT.h}</h2>
            <p className="m-0 mb-4 text-base leading-7 text-[color:var(--mu)]">{ABOUT.p1}</p>
            <p className="m-0 text-base leading-7 text-[color:var(--mu)]">{ABOUT.p2}</p>
          </R>
          <div>
            <R><h3 className="mb-2 mt-0 text-sm font-semibold tracking-[0.1em] text-[color:var(--br)]">{ABOUT.principlesH.toUpperCase()}</h3></R>
            {PRINCIPLES.map(([t, d], i) => (
              <R key={t} delay={0.08 * i}>
                <div className="group border-b border-[color:var(--ln)] py-5">
                  <h4 className="m-0 flex items-center gap-3 text-lg font-bold tracking-tight">
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-[var(--ac)] text-xs text-[color:var(--ink)]">{i + 1}</span>{t}
                  </h4>
                  <p className="mb-0 ml-10 mt-2 text-sm leading-6 text-[color:var(--mu)]">{d.charAt(0).toUpperCase() + d.slice(1)}</p>
                  <span aria-hidden="true" className="ml-10 mt-3 block h-[5px] w-24 origin-left scale-x-0 border-y border-[color:var(--br)] transition-transform duration-700 group-hover:scale-x-100" />
                </div>
              </R>
            ))}
          </div>
        </div>
 
        {TEAM.length > 0 && (
          <div className="mx-auto mt-16 grid max-w-[1200px] gap-4 md:grid-cols-3">
            {TEAM.map((p) => (
              <article key={p.name} className="rounded-3xl border border-[color:var(--ln)] bg-[var(--sf)] p-6">
                <h4 className="m-0 text-lg font-bold">{p.name}</h4>
                <p className="mb-3 mt-1 text-xs text-[color:var(--br)]">{p.role}</p>
                <p className="m-0 text-sm leading-6 text-[color:var(--mu)]">{p.bio}</p>
              </article>
            ))}
          </div>
        )}
      </section>
 
      {/* FAQ */}
      <section id="faq" data-tone={T("light")} className={`${band} ${sec}`}>
        <div className="mx-auto grid max-w-[1200px] items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <R className="lg:sticky lg:top-28">
            <h2 className={`${h2} mb-6`}>Frequently asked questions</h2>
            <label className="relative mb-6 block">
              <span className="sr-only">Search the questions</span>
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[color:var(--mu)]" />
              <input value={faqQ} onChange={(e) => setFaqQ(e.target.value)} placeholder="Search the questions" className="w-full rounded-full border border-[color:var(--ln)] bg-[var(--sf)] py-3 pl-11 pr-4 text-sm text-[color:var(--tx)] placeholder:text-[color:var(--mu)] focus:border-[color:var(--br)] focus:outline-none" />
            </label>
          </R>
 
          <div className="border-t border-[color:var(--ln)]">
            {faqList.length === 0 && <p className="py-6 text-sm text-[color:var(--mu)]">No question matches that search. Ask us on a discovery call.</p>}
            {faqList.map(([q, a]) => {
              const on = faqOpen === q;
              return (
                <div key={q} className="border-b border-[color:var(--ln)]">
                  <button type="button" aria-expanded={on} onClick={() => setFaqOpen(on ? null : q)} className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold">
                    {q}
                    <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[color:var(--ln)] transition-transform duration-300 ${on ? "rotate-45 bg-[var(--ac)] text-[color:var(--ink)]" : ""}`}><Plus size={15} /></span>
                  </button>
                  <div className={`grid transition-[grid-template-rows] duration-500 ${on ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <p className="m-0 overflow-hidden text-sm leading-6 text-[color:var(--mu)]"><span className="block pb-5">{a}</span></p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
 
      {/* INSIGHTS */}
      <section id="insights" data-tone={T("dark")} className={`${band} ${sec}`}>
        <div className="mx-auto max-w-[1200px]">
          <R className="mb-8 flex flex-wrap items-end justify-between gap-6">
            <h2 className={`${h2} max-w-[560px]`}>Guides for small-business owners</h2>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by region">
              {REGIONS.map((r) => (
                <button key={r} type="button" aria-pressed={region === r} onClick={() => setRegion(r)} className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${region === r ? "border-[color:var(--ac)] bg-[var(--ac)] text-[color:var(--ink)]" : "border-[color:var(--ln)] text-[color:var(--mu)] hover:border-[color:var(--ac)]"}`}>{r}</button>
              ))}
            </div>
          </R>
 
          <div key={region} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {arts.map((a, i) => (
              <Link key={a.slug} href={a.slug} className="o0 group flex flex-col rounded-3xl border border-[color:var(--ln)] bg-[var(--sf)] p-6 opacity-0 transition duration-500 [animation:rise_.6s_forwards] hover:-translate-y-1.5 hover:border-[color:var(--br)]" style={{ animationDelay: `${i * 0.06}s` }}>
                <span className="mb-4 w-fit rounded-full bg-[var(--ac)] px-3 py-1 text-[11px] font-semibold text-[color:var(--ink)]">{a.region}</span>
                <h3 className="m-0 text-base font-bold leading-snug tracking-tight">{a.t}</h3>
                <p className="mb-5 mt-3 text-[13px] leading-6 text-[color:var(--mu)]">{a.ex}</p>
                <span className="mt-auto flex items-center justify-between text-xs font-semibold">
                  Read article
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-[color:var(--ln)] transition duration-300 group-hover:rotate-45 group-hover:bg-[var(--ac)] group-hover:text-[color:var(--ink)]"><ArrowUpRight size={14} /></span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
 
      {/* CTA */}
      <section id="contact" data-tone={T("dark")} onMouseMove={onMag} onMouseLeave={() => mag.current && (mag.current.style.transform = "")} className={`${band} relative overflow-hidden border-t border-[color:var(--ln)] ${sec}`}>
        <div aria-hidden="true" className="absolute -right-24 top-0 h-full w-[60%] bg-[radial-gradient(circle_at_70%_30%,var(--gl),transparent_60%)] [animation:breathe_7s_ease-in-out_infinite]" />
        <div className="relative mx-auto grid max-w-[800px] items-center gap-10">
          <div>
            <h2 className="m-0 text-[clamp(2rem,5vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-0.04em]">{FINAL.h}</h2>
            <p className="mb-2 mt-4 max-w-[460px] text-base leading-7 text-[color:var(--mu)]">{FINAL.p}</p>
            <p className="mb-8 mt-0 max-w-[460px] text-sm leading-6 text-[color:var(--mu)]">{SERVICES_INTRO.foot}</p>
            <div ref={mag} className="inline-flex items-center gap-5 transition-transform duration-200 ease-out">
              <Cta>{HERO.primary}</Cta>
              <span className="text-sm text-[color:var(--mu)]">{EMAIL}</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
 