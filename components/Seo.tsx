
// "use client";

// import Link from "next/link";
// import {
//   Search,
//   TrendingUp,
//   BarChart3,
//   Target,
//   Globe,
//   FileText,
//   Link2,
//   CheckCircle2,
//   ArrowUpRight,
//   Sparkles,
//   MousePointerClick,
//   ChartNoAxesCombined,
//   Gauge,
//   SearchCheck,
//   Layers3,
//   MapPin,
//   ChevronRight,
// } from "lucide-react";

// const seoServices = [
//   {
//     number: "01",
//     icon: Search,
//     title: "SEO Audit",
//     description:
//       "Discover technical issues, content gaps, and opportunities that can improve your website's search visibility.",
//     tags: ["Website Analysis", "SEO Health"],
//   },
//   {
//     number: "02",
//     icon: FileText,
//     title: "On-Page SEO",
//     description:
//       "Optimize titles, meta descriptions, headings, internal links, and page content for search engines and users.",
//     tags: ["Meta Optimization", "Content Structure"],
//   },
//   {
//     number: "03",
//     icon: Target,
//     title: "Keyword Research",
//     description:
//       "Identify relevant search terms based on your audience, business goals, search intent, and competition.",
//     tags: ["Search Intent", "Keyword Strategy"],
//   },
//   {
//     number: "04",
//     icon: Gauge,
//     title: "Technical SEO",
//     description:
//       "Improve crawlability, indexing, mobile usability, site structure, and other technical SEO foundations.",
//     tags: ["Technical Health", "Site Performance"],
//   },
//   {
//     number: "05",
//     icon: Link2,
//     title: "Off-Page SEO",
//     description:
//       "Strengthen your website's authority through ethical link-building strategies and relevant online mentions.",
//     tags: ["Link Strategy", "Authority"],
//   },
//   {
//     number: "06",
//     icon: MapPin,
//     title: "Local SEO",
//     description:
//       "Help customers discover your business in relevant local searches with optimized business information and location pages.",
//     tags: ["Local Visibility", "Business Profile"],
//   },
// ];

// const processSteps = [
//   {
//     number: "01",
//     title: "Discover & Audit",
//     description:
//       "We assess your website, current visibility, technical health, and competitors.",
//   },
//   {
//     number: "02",
//     title: "Research & Strategy",
//     description:
//       "We identify search opportunities and build a strategy around your business goals.",
//   },
//   {
//     number: "03",
//     title: "Optimize & Improve",
//     description:
//       "We implement prioritized technical, on-page, and content improvements.",
//   },
//   {
//     number: "04",
//     title: "Monitor & Refine",
//     description:
//       "We review search performance and use the findings to refine your SEO strategy.",
//   },
// ];

// const benefits = [
//   "A clear strategy based on your business goals",
//   "Better website structure and search accessibility",
//   "Relevant content aligned with search intent",
//   "Performance monitoring and actionable insights",
// ];

// export default function SEO() {
//   return (
//     <main className="overflow-hidden bg-[#fffdf9] text-[#211b1b]">
//       {/* HERO */}
//       <section className="relative isolate overflow-hidden bg-[#f5efe6]">
//         <div className="pointer-events-none absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-[#6b1a2b]/10 blur-3xl" />
//         <div className="pointer-events-none absolute -bottom-40 left-0 -z-10 h-96 w-96 rounded-full bg-[#d7b8a5]/30 blur-3xl" />

//         <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:px-12 lg:py-28">
//           {/* Hero text */}
//           <div className="seo-hero-reveal">
//             <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#6b1a2b]/15 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#6b1a2b] shadow-sm">
//               <Sparkles size={15} />
//               Search Engine Optimization
//             </div>

//             <h1 className="max-w-2xl text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
//               Be Found.
//               <br />
//               Get Noticed.
//               <br />
//               <span className="relative inline-block text-[#6b1a2b]">
//                 Grow Organically.
//                 <span className="absolute -bottom-2 left-0 h-1 w-3/4 rounded-full bg-[#6b1a2b]/30" />
//               </span>
//             </h1>

//             <p className="mt-8 max-w-xl text-base leading-8 text-[#655b58] sm:text-lg">
//               Make it easier for the right people to find your business. We
//               combine technical optimization, keyword research, and useful
//               content to build a stronger foundation for organic search growth.
//             </p>

//             <div className="mt-9 flex flex-col gap-4 sm:flex-row">
//               <Link
//                 href="/contact"
//                 className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#6b1a2b] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#6b1a2b]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#511321] hover:shadow-xl"
//               >
//                 Improve My SEO
//                 <ArrowUpRight
//                   size={18}
//                   className="transition-transform duration-300 group-hover:rotate-45"
//                 />
//               </Link>

//               <a
//                 href="#seo-services"
//                 className="inline-flex items-center justify-center gap-3 rounded-full border border-[#6b1a2b]/20 bg-white/70 px-7 py-4 text-sm font-semibold text-[#6b1a2b] transition-all duration-300 hover:-translate-y-1 hover:border-[#6b1a2b] hover:bg-white"
//               >
//                 <Search size={17} />
//                 Explore SEO Services
//               </a>
//             </div>

//             <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-[#6b1a2b]/10 pt-7">
//               <div>
//                 <p className="text-sm font-bold text-[#6b1a2b]">
//                   Technical
//                 </p>
//                 <p className="mt-1 text-xs text-[#756967]">
//                   Strong Foundations
//                 </p>
//               </div>

//               <div className="h-9 w-px bg-[#6b1a2b]/15" />

//               <div>
//                 <p className="text-sm font-bold text-[#6b1a2b]">
//                   Strategic
//                 </p>
//                 <p className="mt-1 text-xs text-[#756967]">
//                   Search Intent
//                 </p>
//               </div>

//               <div className="h-9 w-px bg-[#6b1a2b]/15" />

//               <div>
//                 <p className="text-sm font-bold text-[#6b1a2b]">
//                   Measurable
//                 </p>
//                 <p className="mt-1 text-xs text-[#756967]">
//                   Data-Led Decisions
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* SEO dashboard visual */}
//           <div className="seo-dashboard-reveal relative mx-auto w-full max-w-[540px]">
//             <div className="relative rounded-[2rem] border border-white/80 bg-white/85 p-5 shadow-2xl shadow-[#6b1a2b]/10 backdrop-blur-xl sm:p-7">
//               <div className="flex items-center justify-between gap-4">
//                 <div>
//                   <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#8b7773]">
//                     SEO Strategy Dashboard
//                   </p>
//                   <h2 className="mt-2 text-xl font-semibold">
//                     Search performance
//                   </h2>
//                 </div>

//                 <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6b1a2b] text-white shadow-lg shadow-[#6b1a2b]/20">
//                   <ChartNoAxesCombined size={23} />
//                 </div>
//               </div>

//               {/* Search box */}
//               <div className="mt-7 flex items-center gap-3 rounded-2xl border border-[#6b1a2b]/10 bg-[#fffdf9] p-4">
//                 <Search size={19} className="shrink-0 text-[#6b1a2b]" />
//                 <div className="min-w-0 flex-1">
//                   <p className="truncate text-sm text-[#514744]">
//                     Find your next opportunity
//                   </p>
//                 </div>
//                 <span className="rounded-lg bg-[#f5efe6] px-3 py-2 text-[10px] font-semibold text-[#6b1a2b]">
//                   SEO
//                 </span>
//               </div>

//               {/* Metric cards */}
//               <div className="mt-4 grid grid-cols-2 gap-4">
//                 <div className="seo-metric-card rounded-2xl bg-[#f7eee8] p-5 transition-transform duration-300 hover:-translate-y-1">
//                   <div className="flex items-center justify-between">
//                     <SearchCheck size={21} className="text-[#6b1a2b]" />
//                     <span className="text-[10px] font-semibold uppercase tracking-wider text-[#8b7773]">
//                       Visibility
//                     </span>
//                   </div>
//                   <p className="mt-5 text-lg font-semibold">Be Discoverable</p>
//                   <p className="mt-1 text-xs text-[#8b7773]">
//                     Reach relevant searches
//                   </p>
//                 </div>

//                 <div className="seo-metric-card rounded-2xl bg-[#6b1a2b] p-5 text-white transition-transform duration-300 hover:-translate-y-1">
//                   <div className="flex items-center justify-between">
//                     <TrendingUp size={21} />
//                     <ArrowUpRight size={17} />
//                   </div>
//                   <p className="mt-5 text-lg font-semibold">Grow Organically</p>
//                   <p className="mt-1 text-xs text-white/65">
//                     Build lasting visibility
//                   </p>
//                 </div>
//               </div>

//               {/* Search trend illustration */}
//               <div className="mt-4 rounded-2xl border border-[#6b1a2b]/10 bg-[#fffdf9] p-5">
//                 <div className="flex items-start justify-between gap-4">
//                   <div>
//                     <p className="text-sm font-semibold">Your growth journey</p>
//                     <p className="mt-1 text-xs text-[#8b7773]">
//                       Progress through consistent optimization
//                     </p>
//                   </div>
//                   <BarChart3 size={21} className="text-[#6b1a2b]" />
//                 </div>

//                 <div className="relative mt-5 h-24 overflow-hidden">
//                   <div className="absolute inset-x-0 top-3 border-t border-dashed border-[#6b1a2b]/10" />
//                   <div className="absolute inset-x-0 top-10 border-t border-dashed border-[#6b1a2b]/10" />
//                   <div className="absolute inset-x-0 top-[4.25rem] border-t border-dashed border-[#6b1a2b]/10" />

//                   <svg
//                     viewBox="0 0 400 100"
//                     className="absolute inset-0 h-full w-full overflow-visible"
//                     fill="none"
//                     preserveAspectRatio="none"
//                     aria-label="Illustrative upward SEO progress line"
//                     role="img"
//                   >
//                     <defs>
//                       <linearGradient
//                         id="seoAreaGradient"
//                         x1="200"
//                         y1="0"
//                         x2="200"
//                         y2="100"
//                         gradientUnits="userSpaceOnUse"
//                       >
//                         <stop stopColor="#6b1a2b" stopOpacity="0.2" />
//                         <stop
//                           offset="1"
//                           stopColor="#6b1a2b"
//                           stopOpacity="0"
//                         />
//                       </linearGradient>
//                     </defs>

//                     <path
//                       d="M0 82 C35 78 45 63 75 68 S120 76 150 49 S200 58 225 37 S270 48 300 25 S355 30 400 5 L400 100 L0 100 Z"
//                       fill="url(#seoAreaGradient)"
//                     />

//                     <path
//                       className="seo-chart-line"
//                       d="M0 82 C35 78 45 63 75 68 S120 76 150 49 S200 58 225 37 S270 48 300 25 S355 30 400 5"
//                       stroke="#6b1a2b"
//                       strokeWidth="3"
//                       strokeLinecap="round"
//                     />

//                     <circle cx="400" cy="5" r="5" fill="#6b1a2b" />
//                   </svg>
//                 </div>

//                 <div className="mt-2 flex justify-between text-[10px] text-[#8b7773]">
//                   <span>Foundation</span>
//                   <span>Optimization</span>
//                   <span>Growth</span>
//                 </div>
//               </div>

//               <div className="mt-4 flex items-center gap-3 rounded-xl bg-[#e9eee4] p-4">
//                 <CheckCircle2
//                   size={21}
//                   className="shrink-0 text-[#425b39]"
//                 />
//                 <p className="text-xs leading-5 text-[#425b39]">
//                   A smarter SEO strategy starts with understanding your
//                   website and audience.
//                 </p>
//               </div>
//             </div>

//             {/* Floating badge */}
//             <div className="seo-float-one absolute -left-5 top-16 hidden items-center gap-3 rounded-2xl border border-white bg-white p-4 shadow-xl sm:flex">
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f5efe6] text-[#6b1a2b]">
//                 <Globe size={22} />
//               </div>
//               <div>
//                 <p className="text-xs font-semibold">Search Ready</p>
//                 <p className="mt-1 text-[11px] text-[#8b7773]">
//                   Built for discoverability
//                 </p>
//               </div>
//             </div>

//             <div className="seo-float-two absolute -bottom-5 -right-2 flex items-center gap-3 rounded-2xl border border-white bg-white p-4 shadow-xl sm:-right-5">
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e9eee4] text-[#425b39]">
//                 <Layers3 size={22} />
//               </div>
//               <div>
//                 <p className="text-xs font-semibold">Built on Strategy</p>
//                 <p className="mt-1 text-[11px] text-[#8b7773]">
//                   Every improvement matters
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SEO SERVICES */}
//       <section
//         id="seo-services"
//         className="bg-[#fffdf9] px-6 py-24 sm:px-10 lg:px-12 lg:py-28"
//       >
//         <div className="mx-auto max-w-7xl">
//           <div className="mb-14 grid gap-7 md:grid-cols-2 md:items-end">
//             <div>
//               <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#6b1a2b]">
//                 <span className="h-px w-8 bg-[#6b1a2b]" />
//                 Our SEO Services
//               </span>

//               <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
//                 Get your website ready for{" "}
//                 <span className="text-[#6b1a2b]">better visibility.</span>
//               </h2>
//             </div>

//             <p className="max-w-lg text-base leading-8 text-[#756967] md:justify-self-end">
//               From technical improvements to relevant content, we focus on
//               the essentials that help search engines understand your website
//               and help customers find what they need.
//             </p>
//           </div>

//           <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//             {seoServices.map((service) => {
//               const Icon = service.icon;

//               return (
//                 <article
//                   key={service.number}
//                   className="seo-service-card group relative overflow-hidden rounded-[1.7rem] border border-[#6b1a2b]/10 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#6b1a2b]/25 hover:shadow-2xl hover:shadow-[#6b1a2b]/10 sm:p-8"
//                 >
//                   <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#f5efe6] transition-transform duration-500 group-hover:scale-150" />

//                   <div className="relative">
//                     <div className="flex items-start justify-between">
//                       <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f5efe6] text-[#6b1a2b] transition-all duration-300 group-hover:bg-[#6b1a2b] group-hover:text-white">
//                         <Icon size={25} />
//                       </div>

//                       <span className="text-sm font-medium tracking-widest text-[#bba8a0]">
//                         {service.number}
//                       </span>
//                     </div>

//                     <h3 className="mt-7 text-xl font-semibold tracking-tight">
//                       {service.title}
//                     </h3>

//                     <p className="mt-4 min-h-[84px] text-sm leading-7 text-[#756967]">
//                       {service.description}
//                     </p>

//                     <div className="mt-6 flex flex-wrap gap-2">
//                       {service.tags.map((tag) => (
//                         <span
//                           key={tag}
//                           className="rounded-full border border-[#6b1a2b]/10 bg-[#fffdf9] px-3 py-1.5 text-[10px] font-medium text-[#6b1a2b]"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>

//                     <div className="mt-7 flex items-center justify-between border-t border-[#6b1a2b]/10 pt-5">
//                       <span className="text-xs font-semibold text-[#6b1a2b]">
//                         Build a stronger foundation
//                       </span>

//                       <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f5efe6] text-[#6b1a2b] transition-all duration-300 group-hover:bg-[#6b1a2b] group-hover:text-white">
//                         <ArrowUpRight size={17} />
//                       </span>
//                     </div>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* WHY SEO */}
//       <section className="relative overflow-hidden bg-[#211b1b] px-6 py-24 text-white sm:px-10 lg:px-12 lg:py-28">
//         <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#6b1a2b]/30 blur-3xl" />
//         <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#6b1a2b]/20 blur-3xl" />

//         <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
//           <div>
//             <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d9b7a4]">
//               Why SEO Matters
//             </span>

//             <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
//               Visibility is valuable.
//               <br />
//               <span className="text-[#d9b7a4]">
//                 Make yours count.
//               </span>
//             </h2>

//             <p className="mt-6 max-w-xl text-base leading-8 text-white/65">
//               Search engine optimization helps align your website with what
//               your potential customers are searching for. A strong foundation
//               can support long-term discoverability without relying entirely
//               on paid advertising.
//             </p>

//             <div className="mt-8 space-y-4">
//               {benefits.map((benefit) => (
//                 <div key={benefit} className="flex items-start gap-3">
//                   <CheckCircle2
//                     size={20}
//                     className="mt-0.5 shrink-0 text-[#d9b7a4]"
//                   />
//                   <p className="text-sm leading-6 text-white/80">{benefit}</p>
//                 </div>
//               ))}
//             </div>

//             <Link
//               href="/contact"
//               className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#fffdf9] px-7 py-4 text-sm font-semibold text-[#6b1a2b] transition-all duration-300 hover:-translate-y-1 hover:bg-[#f5efe6]"
//             >
//               Talk About Your SEO
//               <ArrowUpRight
//                 size={18}
//                 className="transition-transform duration-300 group-hover:rotate-45"
//               />
//             </Link>
//           </div>

//           {/* SEO feature cards */}
//           <div className="grid gap-4 sm:grid-cols-2">
//             {[
//               {
//                 icon: SearchCheck,
//                 title: "Search Intent",
//                 text: "Create content that answers the questions your audience is asking.",
//               },
//               {
//                 icon: Gauge,
//                 title: "Technical Health",
//                 text: "Make your site easier for search engines to crawl and understand.",
//               },
//               {
//                 icon: FileText,
//                 title: "Useful Content",
//                 text: "Give visitors relevant, well-structured information.",
//               },
//               {
//                 icon: BarChart3,
//                 title: "Performance Insights",
//                 text: "Use meaningful data to identify opportunities for improvement.",
//               },
//             ].map((item, index) => {
//               const Icon = item.icon;

//               return (
//                 <div
//                   key={item.title}
//                   className="seo-feature-card group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.08]"
//                   style={{ animationDelay: `${index * 100}ms` }}
//                 >
//                   <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6b1a2b] text-[#fffdf9] transition-transform duration-300 group-hover:rotate-6">
//                     <Icon size={23} />
//                   </div>

//                   <h3 className="mt-6 text-lg font-semibold">{item.title}</h3>

//                   <p className="mt-3 text-sm leading-7 text-white/60">
//                     {item.text}
//                   </p>

//                   <div className="mt-5 flex items-center gap-2 text-xs font-medium text-[#d9b7a4]">
//                     <span className="h-px w-5 bg-[#d9b7a4]" />
//                     Strategic optimization
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* PROCESS */}
//       <section className="bg-[#f5efe6] px-6 py-24 sm:px-10 lg:px-12 lg:py-28">
//         <div className="mx-auto max-w-7xl">
//           <div className="mx-auto mb-14 max-w-2xl text-center">
//             <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6b1a2b]">
//               How We Work
//             </span>

//             <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
//               A clear path to{" "}
//               <span className="text-[#6b1a2b]">better SEO.</span>
//             </h2>

//             <p className="mt-5 text-base leading-8 text-[#756967]">
//               A structured process keeps your SEO work focused, measurable,
//               and aligned with your business priorities.
//             </p>
//           </div>

//           <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
//             {processSteps.map((step, index) => (
//               <div
//                 key={step.number}
//                 className="seo-process-card group relative rounded-3xl border border-[#6b1a2b]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#6b1a2b]/5"
//                 style={{ animationDelay: `${index * 120}ms` }}
//               >
//                 <div className="flex items-center justify-between">
//                   <span className="text-3xl font-semibold tracking-tight text-[#6b1a2b]/25 transition-colors duration-300 group-hover:text-[#6b1a2b]">
//                     {step.number}
//                   </span>

//                   {index !== processSteps.length - 1 && (
//                     <ChevronRight
//                       size={18}
//                       className="hidden text-[#bba8a0] transition-transform duration-300 group-hover:translate-x-1 lg:block"
//                     />
//                   )}
//                 </div>

//                 <div className="mt-8 h-1 w-12 rounded-full bg-[#6b1a2b]/20 transition-all duration-300 group-hover:w-20 group-hover:bg-[#6b1a2b]" />

//                 <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>

//                 <p className="mt-3 text-sm leading-7 text-[#756967]">
//                   {step.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FINAL CTA */}
//       <section className="relative overflow-hidden bg-[#6b1a2b] px-6 py-20 text-white sm:px-10 lg:px-12 lg:py-24">
//         <div className="pointer-events-none absolute -right-20 -top-36 h-96 w-96 rounded-full border border-white/10" />
//         <div className="pointer-events-none absolute -right-8 -top-24 h-72 w-72 rounded-full border border-white/10" />
//         <div className="pointer-events-none absolute -bottom-36 -left-20 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

//         <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-9 md:flex-row md:items-center">
//           <div className="max-w-2xl">
//             <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium tracking-wide text-white/90">
//               <MousePointerClick size={15} />
//               Your Next Step Starts Here
//             </div>

//             <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
//               Ready to be found
//               <br />
//               by the right people?
//             </h2>

//             <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
//               Let's discuss your website, understand your goals, and identify
//               the SEO opportunities that make sense for your business.
//             </p>
//           </div>

//           <Link
//             href="/contact"
//             className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-[#fffdf9] px-7 py-4 text-sm font-semibold text-[#6b1a2b] transition-all duration-300 hover:-translate-y-1 hover:bg-[#f5efe6] hover:shadow-xl"
//           >
//             Get in Touch
//             <ArrowUpRight
//               size={18}
//               className="transition-transform duration-300 group-hover:rotate-45"
//             />
//           </Link>
//         </div>
//       </section>

//       {/* ANIMATIONS */}
//       <style jsx>{`
//         .seo-hero-reveal {
//           animation: seoHeroReveal 0.9s ease-out both;
//         }

//         .seo-dashboard-reveal {
//           animation: seoDashboardReveal 1s ease-out 0.15s both;
//         }

//         .seo-float-one {
//           animation: seoFloatOne 5s ease-in-out infinite;
//         }

//         .seo-float-two {
//           animation: seoFloatTwo 4.5s ease-in-out infinite;
//         }

//         .seo-chart-line {
//           stroke-dasharray: 520;
//           stroke-dashoffset: 520;
//           animation: seoChartDraw 2s ease-out 0.5s forwards;
//         }

//         .seo-service-card {
//           animation: seoCardReveal 0.65s ease-out both;
//         }

//         .seo-service-card:nth-child(2),
//         .seo-service-card:nth-child(5) {
//           animation-delay: 0.1s;
//         }

//         .seo-service-card:nth-child(3),
//         .seo-service-card:nth-child(6) {
//           animation-delay: 0.2s;
//         }

//         .seo-feature-card,
//         .seo-process-card {
//           animation: seoCardReveal 0.65s ease-out both;
//         }

//         @keyframes seoHeroReveal {
//           from {
//             opacity: 0;
//             transform: translateY(25px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes seoDashboardReveal {
//           from {
//             opacity: 0;
//             transform: translateX(25px) scale(0.97);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0) scale(1);
//           }
//         }

//         @keyframes seoFloatOne {
//           0%,
//           100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-10px);
//           }
//         }

//         @keyframes seoFloatTwo {
//           0%,
//           100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(9px);
//           }
//         }

//         @keyframes seoChartDraw {
//           to {
//             stroke-dashoffset: 0;
//           }
//         }

//         @keyframes seoCardReveal {
//           from {
//             opacity: 0;
//             transform: translateY(18px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .seo-hero-reveal,
//           .seo-dashboard-reveal,
//           .seo-float-one,
//           .seo-float-two,
//           .seo-chart-line,
//           .seo-service-card,
//           .seo-feature-card,
//           .seo-process-card {
//             animation: none;
//           }

//           *,
//           *::before,
//           *::after {
//             scroll-behavior: auto !important;
//             transition-duration: 0.01ms !important;
//           }
//         }
//       `}</style>
//     </main>
//   );
// }




"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowUpRight, BarChart3, Check, FileText, Gauge, Globe, Link2, Layers3, MapPin,
  MousePointerClick, Moon, Search, SearchCheck, Sparkles, Sun, Target, TrendingUp,
} from "lucide-react";

/* ------------------------------------------------------------------
   IMAGES: replace with your own files (e.g. "/images/seo-hero.jpg").
   If a link fails, a dark maroon fallback shows, so nothing breaks.
------------------------------------------------------------------- */
const IMG = {
  why: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1100&q=85",
  cta: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85",
};

const seoServices = [
  { number: "01", icon: Search, title: "SEO Audit", description: "Discover technical issues, content gaps, and opportunities that can improve your website's search visibility.", tags: ["Website Analysis", "SEO Health"] },
  { number: "02", icon: FileText, title: "On-Page SEO", description: "Optimize titles, meta descriptions, headings, internal links, and page content for search engines and users.", tags: ["Meta Optimization", "Content Structure"] },
  { number: "03", icon: Target, title: "Keyword Research", description: "Identify relevant search terms based on your audience, business goals, search intent, and competition.", tags: ["Search Intent", "Keyword Strategy"] },
  { number: "04", icon: Gauge, title: "Technical SEO", description: "Improve crawlability, indexing, mobile usability, site structure, and other technical SEO foundations.", tags: ["Technical Health", "Site Performance"] },
  { number: "05", icon: Link2, title: "Off-Page SEO", description: "Strengthen your website's authority through ethical link-building strategies and relevant online mentions.", tags: ["Link Strategy", "Authority"] },
  { number: "06", icon: MapPin, title: "Local SEO", description: "Help customers discover your business in relevant local searches with optimized business information and location pages.", tags: ["Local Visibility", "Business Profile"] },
];
const processSteps = [
  { number: "01", title: "Discover & Audit", description: "We assess your website, current visibility, technical health, and competitors." },
  { number: "02", title: "Research & Strategy", description: "We identify search opportunities and build a strategy around your business goals." },
  { number: "03", title: "Optimize & Improve", description: "We implement prioritized technical, on-page, and content improvements." },
  { number: "04", title: "Monitor & Refine", description: "We review search performance and use the findings to refine your SEO strategy." },
];
const benefits = [
  "A clear strategy based on your business goals",
  "Better website structure and search accessibility",
  "Relevant content aligned with search intent",
  "Performance monitoring and actionable insights",
];
const features = [
  { icon: SearchCheck, title: "Search Intent", text: "Create content that answers the questions your audience is asking." },
  { icon: Gauge, title: "Technical Health", text: "Make your site easier for search engines to crawl and understand." },
  { icon: FileText, title: "Useful Content", text: "Give visitors relevant, well-structured information." },
  { icon: BarChart3, title: "Performance Insights", text: "Use meaningful data to identify opportunities for improvement." },
];
const checks = [
  "Titles, meta descriptions and headings are optimised",
  "Target keywords are mapped to search intent",
  "Site is crawlable, indexable and mobile-friendly",
  "Internal links and content structure are clear",
  "Business information and location pages are consistent",
  "Search performance is monitored against goals",
];
const ticker = ["SEO Audit", "On-Page SEO", "Keyword Research", "Technical SEO", "Off-Page SEO", "Local SEO"];

const CSS = `
.sx [data-tone="dark"]{--bg:#120d0d;--bg2:#1b1413;--tx:#f4eee6;--mu:rgba(244,238,230,.68);--ln:rgba(244,238,230,.14);--sf:rgba(244,238,230,.05);--ac:#a8283f;--ink:#fff8f0;--br:#d9a85b;--gl:rgba(255,186,110,.24)}
.sx [data-tone="light"]{--bg:#f6f2ec;--bg2:#efe8de;--tx:#1d1214;--mu:rgba(29,18,20,.68);--ln:rgba(107,26,43,.16);--sf:rgba(107,26,43,.05);--ac:#6b1a2b;--ink:#f6f2ec;--br:#a9772a;--gl:rgba(107,26,43,.12)}
@keyframes sxUp{from{transform:translateY(110%)}to{transform:none}}
@keyframes sxRise{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}
@keyframes sxFloat{50%{transform:translateY(-9px)}}
@keyframes sxGlow{0%,100%{opacity:.45}50%{opacity:.95}}
@keyframes sxMarq{to{transform:translateX(-50%)}}
@keyframes sxBlink{50%{opacity:0}}
@keyframes sxLine{to{stroke-dashoffset:0}}
@keyframes sxZoom{from{transform:scale(1.02)}to{transform:scale(1.12)}}
@keyframes sxFade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
.sx .sp{position:relative}
.sx .sp .spl{position:absolute;inset:0;pointer-events:none;opacity:0;transition:opacity .3s;background:radial-gradient(320px circle at var(--mx,50%) var(--my,50%),rgba(217,168,91,.2),transparent 65%)}
.sx .sp:hover .spl{opacity:1}
@media (prefers-reduced-motion:reduce){.sx *{animation:none!important;transition:none!important}.sx .rv{opacity:1!important;transform:none!important}.sx .ln{transform:none!important}}
.sx :focus-visible{outline:2px solid var(--br);outline-offset:3px}
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
    <div ref={ref} className={`rv opacity-0 ${seen ? "[animation:sxRise_.9s_cubic-bezier(.2,.7,.2,1)_forwards]" : ""} ${className}`} style={{ animationDelay: `${delay}s` }}>{children}</div>
  );
}
function Spot({ children, className = "" }: { children: ReactNode; className?: string }) {
  const move = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (<div onMouseMove={move} className={`sp ${className}`}><span className="spl" />{children}</div>);
}
function Photo({ src, alt, className = "", imgClass = "" }: { src: string; alt: string; className?: string; imgClass?: string }) {
  const [bad, setBad] = useState(false);
  return (
    <div className={`relative overflow-hidden bg-[#1b1413] ${className}`}>
      {!bad ? <img src={src} alt={alt} loading="lazy" onError={() => setBad(true)} className={`h-full w-full object-cover brightness-[.6] contrast-110 saturate-[.8] sepia-[.2] ${imgClass}`} /> : <div className="h-full w-full bg-[radial-gradient(circle_at_70%_20%,#6b1a2b,#1b1413_70%)]" />}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#120d0d]/60 via-transparent to-[#6b1a2b]/15" />
    </div>
  );
}

const eyebrow = "text-[10px] font-bold uppercase tracking-[3px] text-[color:var(--br)]";
const h2 = "m-0 text-[clamp(1.9rem,4.2vw,3.1rem)] font-semibold leading-[1.06] tracking-[-0.035em]";
const btn = "group inline-flex items-center gap-3 rounded-full bg-[var(--ac)] py-1.5 pl-6 pr-1.5 text-sm font-semibold text-[color:var(--ink)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-12px_var(--ac)]";
const dot = "grid h-9 w-9 place-items-center rounded-full bg-[var(--ink)] text-[color:var(--ac)] transition-transform duration-500 group-hover:rotate-45";
const Cta = ({ children, href = "/contact" }: { children: ReactNode; href?: string }) => (
  <Link href={href} className={btn}>{children}<i className={dot}><ArrowUpRight size={16} /></i></Link>
);

/* ---------- Hero visual: SERP where "your business" climbs to #1 ---------- */
const rivals = [
  ["Competitor One", "competitor-one.com"],
  ["Competitor Two", "competitor-two.com"],
  ["Competitor Three", "competitor-three.com"],
  ["Competitor Four", "competitor-four.com"],
];
function Serp() {
  const [rank, setRank] = useState(4);
  const [reduce, setReduce] = useState(false);
  useEffect(() => { if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setReduce(true); setRank(0); } }, []);
  useEffect(() => {
    if (reduce) return;
    const id = setTimeout(() => setRank((r) => (r > 0 ? r - 1 : 4)), rank === 0 ? 3400 : rank === 4 ? 1400 : 850);
    return () => clearTimeout(id);
  }, [rank, reduce]);

  const H = 66;
  const slotOf = (i: number) => { // i: -1 = you, 0..3 rivals
    if (i === -1) return rank;
    const free = [0, 1, 2, 3, 4].filter((s) => s !== rank);
    return free[i];
  };
  const rows = [{ id: -1, t: "Your Business", u: "yourbusiness.com" }, ...rivals.map(([t, u], i) => ({ id: i, t, u }))];

  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div aria-hidden="true" className="absolute -inset-8 bg-[radial-gradient(circle_at_70%_15%,var(--gl),transparent_60%)] [animation:sxGlow_6s_ease-in-out_infinite]" />
      <div className="relative border border-[color:var(--ln)] bg-[var(--bg2)]/90 p-5 shadow-[0_40px_80px_-30px_rgba(0,0,0,.9)] backdrop-blur sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-[3px] text-[color:var(--br)]">Search results · illustrative</span>
          <span className="flex gap-1.5" aria-hidden="true">{[0, 1, 2].map((d) => <i key={d} className="h-2 w-2 rounded-full bg-[var(--ln)]" />)}</span>
        </div>
        <div className="mb-4 flex items-center gap-3 rounded-full border border-[color:var(--ln)] bg-[var(--sf)] px-4 py-3">
          <Search size={16} className="shrink-0 text-[color:var(--ac)]" />
          <span className="flex-1 truncate text-sm text-[color:var(--mu)]">services near me<i className="ml-0.5 inline-block h-4 w-px translate-y-0.5 bg-[var(--tx)] [animation:sxBlink_1s_steps(1)_infinite]" /></span>
          <span className="bg-[var(--ac)] px-3 py-1 text-[10px] font-bold text-[color:var(--ink)]">SEO</span>
        </div>
        <div className="relative" style={{ height: H * 5 }} role="img" aria-label="Illustration of a business climbing to the top search result">
          {rows.map((r) => {
            const you = r.id === -1;
            return (
              <div key={r.id} className={`absolute inset-x-0 flex items-center gap-3 border px-4 transition-all duration-700 [transition-timing-function:cubic-bezier(.3,1.1,.4,1)] ${you ? "z-10 border-[color:var(--ac)] bg-[var(--ac)]/20 shadow-[0_12px_30px_-14px_var(--ac)]" : "border-[color:var(--ln)] bg-[var(--sf)]"}`} style={{ height: H - 8, transform: `translateY(${slotOf(r.id) * H}px)` }}>
                <span className={`grid h-8 w-8 shrink-0 place-items-center text-xs font-bold ${you ? "bg-[var(--ac)] text-[color:var(--ink)]" : "bg-[var(--sf)] text-[color:var(--mu)]"}`}>{slotOf(r.id) + 1}</span>
                <span className="min-w-0 flex-1">
                  <b className={`block truncate text-sm ${you ? "" : "text-[color:var(--mu)]"}`}>{r.t}</b>
                  <span className="block truncate text-[11px] text-[color:var(--mu)]">{r.u}</span>
                  <span className={`mt-1 block h-1 rounded-full ${you ? "w-3/4 bg-[var(--ac)]" : "w-1/2 bg-[var(--ln)]"}`} />
                </span>
                {you && <TrendingUp size={18} className="shrink-0 text-[color:var(--br)]" />}
              </div>
            );
          })}
        </div>
      </div>
      <span className="absolute -left-4 top-20 hidden items-center gap-3 border border-[color:var(--ln)] bg-[var(--bg2)] px-4 py-3 text-xs [animation:sxFloat_5s_ease-in-out_infinite] sm:flex"><Globe size={16} className="text-[color:var(--br)]" />Search ready</span>
      <span className="absolute -bottom-4 -right-3 flex items-center gap-3 border border-[color:var(--ln)] bg-[var(--bg2)] px-4 py-3 text-xs [animation:sxFloat_6s_ease-in-out_1s_infinite]"><Layers3 size={16} className="text-[color:var(--br)]" />Built on strategy</span>
    </div>
  );
}

/* ---------- page ---------- */
export default function SEO() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);
  const [prog, setProg] = useState(0);
  const [on, setOn] = useState<boolean[]>(checks.map(() => false));
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    try { const s = localStorage.getItem("mh-theme"); if (s === "light" || s === "dark") setTheme(s); } catch {}
    setMounted(true);
    const sc = () => setProg(window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight));
    window.addEventListener("scroll", sc, { passive: true });
    return () => window.removeEventListener("scroll", sc);
  }, []);
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => setStep((s) => (s + 1) % processSteps.length), 3200);
    return () => clearTimeout(id);
  }, [step, paused]);

  const toggle = () => {
    const n = theme === "dark" ? "light" : "dark";
    setTheme(n);
    try { localStorage.setItem("mh-theme", n); } catch {}
  };
  const T = (b: "dark" | "light") => (theme === "dark" ? b : b === "dark" ? "light" : "dark");
  const band = "bg-[var(--bg)] text-[color:var(--tx)] transition-colors duration-500";
  const done = on.filter(Boolean).length;
  const pct = done / checks.length;
  const msg = done === 0 ? "Tick what is already in place on your website." : done === checks.length ? "A strong foundation. Ongoing monitoring helps keep it that way." : `${done} of ${checks.length} in place. We can help prioritise the rest.`;
  const line = `ln block translate-y-[110%] ${mounted ? "[animation:sxUp_1s_cubic-bezier(.2,.8,.2,1)_forwards]" : ""}`;

  return (
    <main className="sx relative overflow-x-clip">
      <style>{CSS}</style>
      <div aria-hidden="true" className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-gradient-to-r from-[#6b1a2b] to-[#e4a0ae]" style={{ transform: `scaleX(${prog})` }} />

      {/* ============ HERO (dark) ============ */}
      <section data-tone={T("dark")} className={`${band} relative isolate overflow-hidden px-5 pb-24 pt-24 sm:px-8 sm:pt-28`}>
        <div aria-hidden="true" className="absolute -left-24 top-0 -z-10 h-full w-[45%] bg-[radial-gradient(circle,rgba(168,40,63,.28),transparent_65%)] [animation:sxGlow_7s_ease-in-out_infinite]" />
        <button type="button" onClick={toggle} aria-label="Swap light and dark sections" className="absolute right-5 top-5 z-10 grid h-9 w-9 place-items-center rounded-full border border-[color:var(--ln)] bg-[var(--sf)] transition duration-500 hover:rotate-180 hover:bg-[var(--ac)] sm:right-8">
          {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
        </button>
        <div className="mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <p className={`mb-7 inline-flex items-center gap-2 rounded-full border border-[color:var(--ln)] bg-[var(--sf)] px-4 py-2 text-[10px] font-bold uppercase tracking-[3px] text-[color:var(--br)] opacity-0 ${mounted ? "[animation:sxRise_.8s_.1s_forwards]" : ""}`}><Sparkles size={13} />Search Engine Optimization</p>
            <h1 className="m-0 text-[clamp(2.8rem,6.6vw,5.4rem)] font-semibold leading-[1.02] tracking-[-0.05em]">
              <span className="block overflow-hidden pb-[0.08em]"><span className={line} style={{ animationDelay: ".15s" }}>Be Found.</span></span>
              <span className="block overflow-hidden pb-[0.08em]"><span className={line} style={{ animationDelay: ".3s" }}>Get Noticed.</span></span>
              <span className="block overflow-hidden pb-[0.08em]"><span className={`${line} text-[color:var(--br)]`} style={{ animationDelay: ".45s" }}>Grow Organically.</span></span>
            </h1>
            <p className={`mb-9 mt-7 max-w-[480px] text-base leading-8 text-[color:var(--mu)] opacity-0 sm:text-lg ${mounted ? "[animation:sxRise_.9s_.7s_forwards]" : ""}`}>
              Make it easier for the right people to find your business. We combine technical optimization, keyword research, and useful content to build a stronger foundation for organic search growth.
            </p>
            <div className={`flex flex-wrap items-center gap-5 opacity-0 ${mounted ? "[animation:sxRise_.9s_.9s_forwards]" : ""}`}>
              <Cta>Improve My SEO</Cta>
              <a href="#seo-services" className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--mu)] underline-offset-4 hover:text-[color:var(--tx)] hover:underline"><Search size={16} />Explore SEO Services</a>
            </div>
            <ul className="m-0 mt-12 flex list-none flex-wrap gap-x-8 gap-y-4 border-t border-[color:var(--ln)] p-0 pt-7">
              {[["Technical", "Strong Foundations"], ["Strategic", "Search Intent"], ["Measurable", "Data-Led Decisions"]].map(([a, b]) => (
                <li key={a}><b className="block text-sm text-[color:var(--br)]">{a}</b><span className="text-xs text-[color:var(--mu)]">{b}</span></li>
              ))}
            </ul>
          </div>
          <Serp />
        </div>
      </section>

      {/* ticker */}
      <section data-tone={T("light")} className={`${band} overflow-hidden border-y border-[color:var(--ln)] py-5`} aria-hidden="true">
        <div className="flex w-max gap-14 text-xs font-bold uppercase tracking-[0.3em] text-[color:var(--mu)] [animation:sxMarq_28s_linear_infinite]">
          {[...ticker, ...ticker, ...ticker, ...ticker].map((w, i) => (<span key={i} className="flex items-center gap-14">{w}<span className="h-1.5 w-1.5 rounded-full bg-[var(--ac)]" /></span>))}
        </div>
      </section>

      {/* ============ SERVICES (light) ============ */}
      <section id="seo-services" data-tone={T("light")} className={`${band} px-5 py-24 sm:px-8 lg:py-28`}>
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="mb-14 grid gap-7 md:grid-cols-2 md:items-end">
            <div>
              <p className={`${eyebrow} mb-5 flex items-center gap-3`}><span className="h-px w-8 bg-[var(--ac)]" />Our SEO Services</p>
              <h2 className={`${h2} max-w-[520px]`}>Get your website ready for <span className="text-[color:var(--ac)]">better visibility.</span></h2>
            </div>
            <p className="m-0 max-w-[480px] text-base leading-8 text-[color:var(--mu)] md:justify-self-end">From technical improvements to relevant content, we focus on the essentials that help search engines understand your website and help customers find what they need.</p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {seoServices.map(({ number, icon: Icon, title, description, tags }, i) => (
              <Reveal key={number} delay={(i % 3) * 0.1}>
                <Spot className="group h-full overflow-hidden border border-[color:var(--ln)] bg-[var(--sf)] p-7 transition duration-500 hover:-translate-y-2 hover:border-[color:var(--ac)] hover:shadow-2xl hover:shadow-[#6b1a2b]/15 sm:p-8">
                  <span aria-hidden="true" className="pointer-events-none absolute -right-2 -top-6 text-[110px] font-bold leading-none tracking-tighter text-[color:var(--ac)] opacity-[0.07]">{number}</span>
                  <div className="relative">
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-[var(--ac)] text-[color:var(--ink)] transition duration-500 group-hover:scale-110 group-hover:rotate-[8deg]"><Icon size={24} /></span>
                    <h3 className="mb-3 mt-7 text-xl font-semibold tracking-tight">{title}</h3>
                    <p className="m-0 min-h-[96px] text-sm leading-7 text-[color:var(--mu)]">{description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">{tags.map((t) => (<span key={t} className="border border-[color:var(--ln)] px-3 py-1.5 text-[10px] font-semibold text-[color:var(--ac)]">{t}</span>))}</div>
                    <div className="mt-6 flex items-center justify-between border-t border-[color:var(--ln)] pt-5">
                      <span className="text-xs font-semibold text-[color:var(--ac)]">Build a stronger foundation</span>
                      <span className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--ln)] transition duration-500 group-hover:rotate-45 group-hover:border-[color:var(--ac)] group-hover:bg-[var(--ac)] group-hover:text-[color:var(--ink)]"><ArrowUpRight size={16} /></span>
                    </div>
                  </div>
                </Spot>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY SEO (dark) ============ */}
      <section data-tone={T("dark")} className={`${band} relative isolate overflow-hidden px-5 py-24 sm:px-8 lg:py-28`}>
        <div aria-hidden="true" className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-[#a8283f] opacity-30 blur-[90px] [animation:sxGlow_7s_ease-in-out_infinite]" />
        <div className="mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className={eyebrow}>Why SEO Matters</p>
            <h2 className={`${h2} mt-5`}>Visibility is valuable.<br /><span className="text-[color:var(--br)]">Make yours count.</span></h2>
            <p className="mb-8 mt-6 max-w-[500px] text-base leading-8 text-[color:var(--mu)]">Search engine optimization helps align your website with what your potential customers are searching for. A strong foundation can support long-term discoverability without relying entirely on paid advertising.</p>
            <ul className="m-0 mb-9 grid list-none gap-4 p-0">
              {benefits.map((b, i) => (
                <li key={b} className="flex items-start gap-3 text-sm leading-6 opacity-0 [animation:sxRise_.7s_forwards]" style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[var(--ac)] text-[color:var(--ink)]"><Check size={13} strokeWidth={3} /></span>{b}
                </li>
              ))}
            </ul>
            <Cta>Talk About Your SEO</Cta>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            <Reveal className="sm:col-span-2" delay={0.1}>
              <div className="relative h-[200px] overflow-hidden border border-[color:var(--ln)]">
                <Photo src={IMG.why} alt="Analytics dashboard" className="absolute inset-0" imgClass="[animation:sxZoom_24s_ease-in-out_infinite_alternate]" />
                <span className="absolute bottom-4 left-4 flex items-center gap-2 bg-[#120d0d]/85 px-4 py-2 text-xs backdrop-blur"><BarChart3 size={15} className="text-[color:var(--br)]" />Meaningful data, clear next steps</span>
              </div>
            </Reveal>
            {features.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={0.15 + i * 0.08}>
                <Spot className="group h-full border border-[color:var(--ln)] bg-[var(--sf)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[color:var(--ac)]">
                  <span className="relative grid h-12 w-12 place-items-center bg-[var(--ac)] text-[color:var(--ink)] transition-transform duration-500 group-hover:rotate-6"><Icon size={22} /></span>
                  <h3 className="relative mb-2 mt-5 text-lg font-semibold">{title}</h3>
                  <p className="relative m-0 text-sm leading-7 text-[color:var(--mu)]">{text}</p>
                  <p className="relative m-0 mt-4 flex items-center gap-2 text-xs font-medium text-[color:var(--br)]"><span className="h-px w-5 bg-[var(--br)]" />Strategic optimization</p>
                </Spot>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SELF-CHECK (light) ============ */}
      <section data-tone={T("light")} className={`${band} px-5 py-24 sm:px-8`}>
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className={eyebrow}>Quick SEO self-check</p>
            <h2 className={`${h2} mt-5`}>How solid is your <span className="text-[color:var(--ac)]">SEO foundation?</span></h2>
            <p className="mb-8 mt-4 max-w-[400px] text-sm leading-7 text-[color:var(--mu)]">Tick what your website already has. It is a simple self-check, not an audit, and a good starting point for a conversation.</p>
            <div className="flex items-center gap-6">
              <svg viewBox="0 0 100 100" className="h-32 w-32 shrink-0 -rotate-90" role="img" aria-label={`${done} of ${checks.length} items in place`}>
                <circle cx="50" cy="50" r="42" fill="none" strokeWidth="8" stroke="var(--ln)" />
                <circle cx="50" cy="50" r="42" fill="none" strokeWidth="8" strokeLinecap="round" stroke="var(--ac)" strokeDasharray="264" strokeDashoffset={264 * (1 - pct)} style={{ transition: "stroke-dashoffset .8s cubic-bezier(.2,.8,.2,1)" }} />
                <text x="50" y="50" textAnchor="middle" dominantBaseline="central" transform="rotate(90 50 50)" fontSize="22" fontWeight="700" fill="var(--tx)">{done}/{checks.length}</text>
              </svg>
              <p className="m-0 max-w-[220px] text-sm font-medium leading-6" aria-live="polite">{msg}</p>
            </div>
          </Reveal>
          <ul className="m-0 grid list-none gap-3 p-0">
            {checks.map((c, i) => (
              <Reveal key={c} delay={i * 0.07}>
                <li>
                  <button type="button" role="checkbox" aria-checked={on[i]} onClick={() => setOn((a) => a.map((v, k) => (k === i ? !v : v)))} className={`group flex w-full items-center gap-4 border p-4 text-left text-sm font-medium transition duration-300 hover:-translate-y-0.5 ${on[i] ? "border-[color:var(--ac)] bg-[var(--ac)] text-[color:var(--ink)]" : "border-[color:var(--ln)] bg-[var(--sf)] hover:border-[color:var(--ac)]"}`}>
                    <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border transition ${on[i] ? "border-[color:var(--ink)] bg-[var(--ink)] text-[color:var(--ac)]" : "border-[color:var(--ln)]"}`}>{on[i] && <Check size={14} strokeWidth={3} />}</span>
                    {c}
                  </button>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ PROCESS (dark) ============ */}
      <section data-tone={T("dark")} className={`${band} px-5 py-24 sm:px-8 lg:py-28`} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="mx-auto mb-14 max-w-[640px] text-center">
            <p className={eyebrow}>How We Work</p>
            <h2 className={`${h2} mt-5`}>A clear path to <span className="text-[color:var(--br)]">better SEO.</span></h2>
            <p className="mb-0 mt-5 text-base leading-8 text-[color:var(--mu)]">A structured process keeps your SEO work focused, measurable, and aligned with your business priorities.</p>
          </Reveal>
          <div className="relative">
            <span aria-hidden="true" className="absolute left-0 right-0 top-[27px] hidden h-px bg-[var(--ln)] lg:block" />
            <span aria-hidden="true" className="absolute left-0 top-[27px] hidden h-px bg-[var(--ac)] transition-[width] duration-700 lg:block" style={{ width: `${((step + 0.5) / processSteps.length) * 100}%` }} />
            <ol className="relative m-0 grid list-none gap-5 p-0 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((s, i) => {
                const a = i === step;
                return (
                  <li key={s.number}>
                    <button type="button" onClick={() => setStep(i)} aria-current={a} className={`group h-full w-full border p-7 text-left transition duration-500 hover:-translate-y-1 ${a ? "border-[color:var(--ac)] bg-[var(--ac)]/15 shadow-[0_20px_50px_-24px_var(--ac)]" : "border-[color:var(--ln)] bg-[var(--sf)]"}`}>
                      <span className={`relative grid h-14 w-14 place-items-center rounded-full text-lg font-semibold transition duration-500 ${a ? "scale-110 bg-[var(--ac)] text-[color:var(--ink)]" : "border border-[color:var(--ln)] bg-[var(--bg)] text-[color:var(--mu)]"}`}>{s.number}</span>
                      <h3 className="mb-3 mt-6 text-lg font-semibold">{s.title}</h3>
                      <p className="m-0 text-sm leading-7 text-[color:var(--mu)]">{s.description}</p>
                      <span className={`mt-6 block h-1 rounded-full bg-[var(--br)] transition-all duration-500 ${a ? "w-20" : "w-10 opacity-40"}`} />
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* ============ CTA (maroon) ============ */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#6b1a2b] via-[#521321] to-[#2a0c14] px-5 py-20 text-white sm:px-8 lg:py-24">
        <div className="absolute inset-y-0 right-0 -z-10 hidden w-1/2 lg:block">
          <Photo src={IMG.cta} alt="" className="h-full w-full" imgClass="opacity-50 [animation:sxZoom_24s_ease-in-out_infinite_alternate]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#521321] via-[#521321]/70 to-transparent" />
        </div>
        <span aria-hidden="true" className="pointer-events-none absolute -right-20 -top-36 h-96 w-96 rounded-full border border-white/10" />
        <span aria-hidden="true" className="pointer-events-none absolute -right-8 -top-24 h-72 w-72 rounded-full border border-white/10" />
        <Reveal className="relative mx-auto max-w-[1200px]">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium tracking-wide"><MousePointerClick size={15} />Your Next Step Starts Here</p>
          <h2 className="m-0 max-w-[620px] text-[clamp(2.2rem,5.4vw,4.2rem)] font-semibold leading-[1.04] tracking-[-0.04em]">Ready to be found<br />by the right people?</h2>
          <p className="mb-9 mt-5 max-w-[480px] text-sm leading-7 text-white/75 sm:text-base">Let&apos;s discuss your website, understand your goals, and identify the SEO opportunities that make sense for your business.</p>
          <Link href="/contact" className="group inline-flex items-center gap-3 rounded-full bg-[#f6f2ec] py-1.5 pl-7 pr-1.5 text-sm font-semibold text-[#6b1a2b] transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            Get in Touch<i className="grid h-10 w-10 place-items-center rounded-full bg-[#6b1a2b] text-[#f6f2ec] transition-transform duration-500 group-hover:rotate-45"><ArrowUpRight size={17} /></i>
          </Link>
        </Reveal>
      </section>
    </main>
  );
}