// "use client";

// import Link from "next/link";
// import {
//   Instagram,
//   Facebook,
//   Linkedin,
//   MessageCircle,
//   TrendingUp,
//   Target,
//   BarChart3,
//   Palette,
//   CalendarDays,
//   Users,
//   ArrowUpRight,
//   CheckCircle2,
//   Play,
//   Sparkles,
//   Heart,
//   Eye,
//   MousePointerClick,
// } from "lucide-react";

// const services = [
//   {
//     number: "01",
//     icon: Palette,
//     title: "Content Creation",
//     description:
//       "Eye-catching graphics, engaging posts, and branded visuals that make your business stand out.",
//     tags: ["Creative Designs", "Brand Consistency"],
//   },
//   {
//     number: "02",
//     icon: CalendarDays,
//     title: "Social Media Management",
//     description:
//       "Consistent posting, content calendars, and professional account management to keep your brand active.",
//     tags: ["Content Planning", "Scheduling"],
//   },
//   {
//     number: "03",
//     icon: TrendingUp,
//     title: "Social Media Growth",
//     description:
//       "Build your online presence with strategic content designed to attract the right audience.",
//     tags: ["Organic Growth", "Engagement"],
//   },
//   {
//     number: "04",
//     icon: Target,
//     title: "Paid Social Campaigns",
//     description:
//       "Reach the right people with carefully planned campaigns focused on your business goals.",
//     tags: ["Audience Targeting", "Campaign Strategy"],
//   },
//   {
//     number: "05",
//     icon: BarChart3,
//     title: "Analytics & Reporting",
//     description:
//       "Understand your performance through meaningful insights, engagement metrics, and regular reports.",
//     tags: ["Performance Tracking", "Insights"],
//   },
//   {
//     number: "06",
//     icon: Users,
//     title: "Community Management",
//     description:
//       "Build stronger customer relationships through thoughtful communication and audience engagement.",
//     tags: ["Audience Engagement", "Brand Trust"],
//   },
// ];

// const platforms = [
//   {
//     name: "Instagram",
//     icon: Instagram,
//     handle: "@yourbrand",
//     description: "Visual storytelling",
//     color: "from-pink-500 to-orange-400",
//   },
//   {
//     name: "Facebook",
//     icon: Facebook,
//     handle: "Your Business",
//     description: "Community building",
//     color: "from-blue-600 to-blue-400",
//   },
//   {
//     name: "LinkedIn",
//     icon: Linkedin,
//     handle: "Your Company",
//     description: "Professional growth",
//     color: "from-sky-700 to-blue-500",
//   },
// ];

// const benefits = [
//   "Consistent and professional brand identity",
//   "Content tailored to your target audience",
//   "Strategic content planning and scheduling",
//   "Performance monitoring and insights",
// ];

// export default function SocialMediaManagement() {
//   return (
//     <main className="overflow-hidden bg-[#fffdf9] text-[#211b1b]">
//       {/* HERO SECTION */}
//       <section className="relative isolate overflow-hidden bg-[#f5efe6]">
//         {/* Decorative background */}
//         <div className="pointer-events-none absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-[#6b1a2b]/10 blur-3xl" />
//         <div className="pointer-events-none absolute -bottom-40 left-0 -z-10 h-96 w-96 rounded-full bg-[#d7b8a5]/30 blur-3xl" />

//         <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:px-12 lg:py-28">
//           {/* Left content */}
//           <div className="hero-reveal">
//             <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#6b1a2b]/15 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#6b1a2b] shadow-sm">
//               <Sparkles size={15} />
//               Social Media Management
//             </div>

//             <h1 className="max-w-2xl text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
//               Your Brand.
//               <br />
//               Your Story.
//               <br />
//               <span className="relative inline-block text-[#6b1a2b]">
//                 More Impact.
//                 <span className="absolute -bottom-2 left-0 h-1 w-3/4 rounded-full bg-[#6b1a2b]/30" />
//               </span>
//             </h1>

//             <p className="mt-8 max-w-xl text-base leading-8 text-[#655b58] sm:text-lg">
//               We turn your social media presence into a powerful brand
//               experience with creative content, thoughtful strategy, and
//               consistent communication.
//             </p>

//             <div className="mt-9 flex flex-col gap-4 sm:flex-row">
//               <Link
//                 href="/contact"
//                 className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#6b1a2b] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#6b1a2b]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#511321] hover:shadow-xl"
//               >
//                 Let's Grow Your Brand
//                 <ArrowUpRight
//                   size={18}
//                   className="transition-transform duration-300 group-hover:rotate-45"
//                 />
//               </Link>

//               <a
//                 href="#services"
//                 className="inline-flex items-center justify-center gap-3 rounded-full border border-[#6b1a2b]/20 bg-white/70 px-7 py-4 text-sm font-semibold text-[#6b1a2b] transition-all duration-300 hover:-translate-y-1 hover:border-[#6b1a2b] hover:bg-white"
//               >
//                 <Play size={16} />
//                 Explore Services
//               </a>
//             </div>

//             <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-[#6b1a2b]/10 pt-7">
//               <div>
//                 <p className="text-sm font-bold text-[#6b1a2b]">
//                   Creative
//                 </p>
//                 <p className="mt-1 text-xs text-[#756967]">
//                   Content Strategy
//                 </p>
//               </div>

//               <div className="h-9 w-px bg-[#6b1a2b]/15" />

//               <div>
//                 <p className="text-sm font-bold text-[#6b1a2b]">
//                   Consistent
//                 </p>
//                 <p className="mt-1 text-xs text-[#756967]">
//                   Brand Presence
//                 </p>
//               </div>

//               <div className="h-9 w-px bg-[#6b1a2b]/15" />

//               <div>
//                 <p className="text-sm font-bold text-[#6b1a2b]">
//                   Data-Driven
//                 </p>
//                 <p className="mt-1 text-xs text-[#756967]">
//                   Smarter Decisions
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Right visual composition */}
//           <div className="hero-visual relative mx-auto w-full max-w-[540px]">
//             {/* Main card */}
//             <div className="relative rounded-[2rem] border border-white/80 bg-white/80 p-5 shadow-2xl shadow-[#6b1a2b]/10 backdrop-blur-xl sm:p-7">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#8b7773]">
//                     Your social presence
//                   </p>
//                   <h2 className="mt-2 text-xl font-semibold">
//                     Content that connects.
//                   </h2>
//                 </div>

//                 <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6b1a2b] text-white shadow-lg shadow-[#6b1a2b]/20">
//                   <Sparkles size={22} />
//                 </div>
//               </div>

//               {/* Social cards */}
//               <div className="mt-7 grid grid-cols-2 gap-4">
//                 <div className="social-card rounded-2xl bg-[#f7eee8] p-5 transition-all duration-300 hover:-translate-y-2">
//                   <div className="flex items-center justify-between">
//                     <Instagram className="text-[#6b1a2b]" size={23} />
//                     <ArrowUpRight size={17} className="text-[#8b7773]" />
//                   </div>

//                   <p className="mt-7 text-2xl font-semibold">Creative</p>
//                   <p className="mt-1 text-xs text-[#8b7773]">
//                     Visual storytelling
//                   </p>

//                   <div className="mt-5 flex gap-1.5">
//                     <span className="h-1.5 w-10 rounded-full bg-[#6b1a2b]" />
//                     <span className="h-1.5 w-5 rounded-full bg-[#cda99a]" />
//                     <span className="h-1.5 w-5 rounded-full bg-[#eadbd0]" />
//                   </div>
//                 </div>

//                 <div className="social-card rounded-2xl bg-[#6b1a2b] p-5 text-white transition-all duration-300 hover:-translate-y-2">
//                   <div className="flex items-center justify-between">
//                     <TrendingUp size={23} />
//                     <ArrowUpRight size={17} />
//                   </div>

//                   <p className="mt-7 text-2xl font-semibold">Strategic</p>
//                   <p className="mt-1 text-xs text-white/65">
//                     Purposeful planning
//                   </p>

//                   <div className="mt-5 flex items-end gap-1.5">
//                     <span className="h-3 w-3 rounded-t bg-white/40" />
//                     <span className="h-5 w-3 rounded-t bg-white/55" />
//                     <span className="h-7 w-3 rounded-t bg-white/70" />
//                     <span className="h-10 w-3 rounded-t bg-white" />
//                     <span className="h-12 w-3 rounded-t bg-[#d9b7a4]" />
//                   </div>
//                 </div>
//               </div>

//               {/* Engagement panel */}
//               <div className="mt-4 rounded-2xl border border-[#6b1a2b]/10 bg-[#fffdf9] p-5">
//                 <div className="flex items-center justify-between gap-3">
//                   <div>
//                     <p className="text-sm font-semibold">
//                       The details matter
//                     </p>
//                     <p className="mt-1 text-xs text-[#8b7773]">
//                       Every post has a purpose.
//                     </p>
//                   </div>

//                   <div className="flex -space-x-2">
//                     <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#eadbd0] text-[#6b1a2b]">
//                       <Heart size={15} />
//                     </span>
//                     <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#6b1a2b] text-white">
//                       <Eye size={15} />
//                     </span>
//                     <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#d6b59e] text-[#6b1a2b]">
//                       <MousePointerClick size={15} />
//                     </span>
//                   </div>
//                 </div>

//                 <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#f0e7df]">
//                   <div className="progress-fill h-full w-[82%] rounded-full bg-[#6b1a2b]" />
//                 </div>

//                 <p className="mt-2 text-right text-[11px] text-[#8b7773]">
//                   Creativity meets strategy
//                 </p>
//               </div>
//             </div>

//             {/* Floating notification */}
//             <div className="float-one absolute -left-5 top-16 hidden items-center gap-3 rounded-2xl border border-white bg-white p-4 shadow-xl sm:flex">
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fce7ee] text-[#b32d59]">
//                 <Instagram size={22} />
//               </div>
//               <div>
//                 <p className="text-xs font-semibold">Your brand</p>
//                 <p className="mt-1 text-[11px] text-[#8b7773]">
//                   Ready to connect
//                 </p>
//               </div>
//             </div>

//             {/* Floating badge */}
//             <div className="float-two absolute -bottom-5 -right-2 flex items-center gap-3 rounded-2xl border border-white bg-white p-4 shadow-xl sm:-right-5">
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e9eee4] text-[#425b39]">
//                 <CheckCircle2 size={23} />
//               </div>
//               <div>
//                 <p className="text-xs font-semibold">Strategy first</p>
//                 <p className="mt-1 text-[11px] text-[#8b7773]">
//                   Every detail counts
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* PLATFORMS */}
//       <section className="border-y border-[#6b1a2b]/10 bg-white py-12">
//         <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
//           <div className="mb-8 text-center">
//             <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8b7773]">
//               Your brand, where it matters
//             </p>
//             <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
//               Meet your audience where they are.
//             </h2>
//           </div>

//           <div className="grid gap-4 md:grid-cols-3">
//             {platforms.map((platform, index) => {
//               const Icon = platform.icon;

//               return (
//                 <div
//                   key={platform.name}
//                   className="platform-card group flex items-center gap-4 rounded-2xl border border-[#6b1a2b]/10 bg-[#fffdf9] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#6b1a2b]/25 hover:shadow-xl hover:shadow-[#6b1a2b]/5"
//                   style={{ animationDelay: `${index * 120}ms` }}
//                 >
//                   <div
//                     className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${platform.color} text-white shadow-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105`}
//                   >
//                     <Icon size={26} />
//                   </div>

//                   <div className="min-w-0 flex-1">
//                     <h3 className="font-semibold">{platform.name}</h3>
//                     <p className="mt-1 text-sm text-[#6b1a2b]">
//                       {platform.handle}
//                     </p>
//                     <p className="mt-1 text-xs text-[#8b7773]">
//                       {platform.description}
//                     </p>
//                   </div>

//                   <ArrowUpRight
//                     size={19}
//                     className="shrink-0 text-[#b9a7a0] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#6b1a2b]"
//                   />
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* SERVICES */}
//       <section
//         id="services"
//         className="relative bg-[#fffdf9] px-6 py-24 sm:px-10 lg:px-12 lg:py-28"
//       >
//         <div className="mx-auto max-w-7xl">
//           <div className="mb-14 grid gap-7 md:grid-cols-2 md:items-end">
//             <div>
//               <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#6b1a2b]">
//                 <span className="h-px w-8 bg-[#6b1a2b]" />
//                 What We Do
//               </span>

//               <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
//                 Everything your brand needs to{" "}
//                 <span className="text-[#6b1a2b]">show up.</span>
//               </h2>
//             </div>

//             <p className="max-w-lg text-base leading-8 text-[#756967] md:justify-self-end">
//               A thoughtful mix of creative content, consistent management, and
//               strategic planning to help your business build a stronger digital
//               presence.
//             </p>
//           </div>

//           <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//             {services.map((service) => {
//               const Icon = service.icon;

//               return (
//                 <article
//                   key={service.number}
//                   className="service-card group relative overflow-hidden rounded-[1.7rem] border border-[#6b1a2b]/10 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#6b1a2b]/25 hover:shadow-2xl hover:shadow-[#6b1a2b]/10 sm:p-8"
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
//                         Explore the possibilities
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

//       {/* OUR APPROACH */}
//       <section className="bg-[#f5efe6] px-6 py-24 sm:px-10 lg:px-12 lg:py-28">
//         <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
//           <div>
//             <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6b1a2b]">
//               The Motive House Approach
//             </span>

//             <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
//               More than posting.
//               <br />
//               <span className="text-[#6b1a2b]">
//                 It's about connection.
//               </span>
//             </h2>

//             <p className="mt-6 max-w-xl text-base leading-8 text-[#756967]">
//               Your social media should reflect the quality of your business.
//               We combine creative thinking with a clear strategy to help you
//               communicate consistently, connect meaningfully, and build trust
//               with your audience.
//             </p>

//             <div className="mt-8 space-y-4">
//               {benefits.map((benefit) => (
//                 <div key={benefit} className="flex items-start gap-3">
//                   <CheckCircle2
//                     size={20}
//                     className="mt-0.5 shrink-0 text-[#6b1a2b]"
//                   />
//                   <p className="text-sm leading-6 text-[#514744]">
//                     {benefit}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             <Link
//               href="/contact"
//               className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#6b1a2b] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#511321]"
//             >
//               Discuss Your Project
//               <ArrowUpRight
//                 size={18}
//                 className="transition-transform duration-300 group-hover:rotate-45"
//               />
//             </Link>
//           </div>

//           {/* Process cards */}
//           <div className="relative">
//             <div className="absolute left-7 top-8 h-[75%] w-px border-l border-dashed border-[#6b1a2b]/30 sm:left-9" />

//             <div className="space-y-5">
//               {[
//                 {
//                   number: "01",
//                   title: "Discover",
//                   text: "We learn about your business, audience, and objectives.",
//                 },
//                 {
//                   number: "02",
//                   title: "Strategize",
//                   text: "We create a clear direction for your content and communication.",
//                 },
//                 {
//                   number: "03",
//                   title: "Create & Manage",
//                   text: "We bring your strategy to life with consistent, engaging content.",
//                 },
//                 {
//                   number: "04",
//                   title: "Review & Improve",
//                   text: "We review performance and identify opportunities to improve.",
//                 },
//               ].map((step) => (
//                 <div
//                   key={step.number}
//                   className="process-card group relative flex gap-5 rounded-2xl border border-[#6b1a2b]/10 bg-white p-5 transition-all duration-300 hover:translate-x-2 hover:shadow-xl hover:shadow-[#6b1a2b]/5 sm:gap-6 sm:p-6"
//                 >
//                   <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#6b1a2b]/15 bg-[#f5efe6] text-sm font-bold text-[#6b1a2b] transition-colors duration-300 group-hover:bg-[#6b1a2b] group-hover:text-white">
//                     {step.number}
//                   </div>

//                   <div className="pt-1">
//                     <h3 className="text-lg font-semibold">{step.title}</h3>
//                     <p className="mt-2 text-sm leading-7 text-[#756967]">
//                       {step.text}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
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
//               <MessageCircle size={15} />
//               Let's Build Something Meaningful
//             </div>

//             <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
//               Ready to make your
//               <br />
//               brand unforgettable?
//             </h2>

//             <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
//               Let's discuss your goals and create a social media presence that
//               feels authentic to your business.
//             </p>
//           </div>

//           <Link
//             href="/contact"
//             className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-[#fffdf9] px-7 py-4 text-sm font-semibold text-[#6b1a2b] transition-all duration-300 hover:-translate-y-1 hover:bg-[#f5efe6] hover:shadow-xl"
//           >
//             Start a Conversation
//             <ArrowUpRight
//               size={18}
//               className="transition-transform duration-300 group-hover:rotate-45"
//             />
//           </Link>
//         </div>
//       </section>

//       {/* ANIMATIONS */}
//       <style jsx>{`
//         .hero-reveal {
//           animation: heroReveal 0.9s ease-out both;
//         }

//         .hero-visual {
//           animation: visualReveal 1s ease-out 0.15s both;
//         }

//         .float-one {
//           animation: floatOne 5s ease-in-out infinite;
//         }

//         .float-two {
//           animation: floatTwo 4.5s ease-in-out infinite;
//         }

//         .progress-fill {
//           animation: progressFill 1.6s ease-out 0.5s both;
//         }

//         .service-card {
//           animation: cardReveal 0.65s ease-out both;
//         }

//         .service-card:nth-child(2) {
//           animation-delay: 0.1s;
//         }

//         .service-card:nth-child(3) {
//           animation-delay: 0.2s;
//         }

//         .service-card:nth-child(4) {
//           animation-delay: 0.1s;
//         }

//         .service-card:nth-child(5) {
//           animation-delay: 0.2s;
//         }

//         .service-card:nth-child(6) {
//           animation-delay: 0.3s;
//         }

//         @keyframes heroReveal {
//           from {
//             opacity: 0;
//             transform: translateY(25px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes visualReveal {
//           from {
//             opacity: 0;
//             transform: translateX(25px) scale(0.97);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0) scale(1);
//           }
//         }

//         @keyframes floatOne {
//           0%,
//           100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-10px);
//           }
//         }

//         @keyframes floatTwo {
//           0%,
//           100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(9px);
//           }
//         }

//         @keyframes progressFill {
//           from {
//             width: 0;
//           }
//           to {
//             width: 82%;
//           }
//         }

//         @keyframes cardReveal {
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
//           .hero-reveal,
//           .hero-visual,
//           .float-one,
//           .float-two,
//           .progress-fill,
//           .service-card {
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
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight, ArrowUpRight, BarChart3, CalendarDays, Check, Eye, Facebook, Heart, Instagram,
  Linkedin, MessageCircle, Moon, MousePointerClick, Palette, Play, Sun, Target, TrendingUp, Users,
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
  w1: U("photo-1611162617213-7d7a39e9b1d7", 1100),
  w2: U("photo-1523275335684-37898b6baf30", 800),
  w3: U("photo-1495474472287-4d71bcdd2085", 800),
  w4: U("photo-1534438327276-14e5300c3a48", 800),
  w5: U("photo-1555041469-a586c61ea9bc", 800),
  cta: U("photo-1497215728101-856f4ea42174", 1400),
};

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
const work = [
  { t: "Beauty Brand", c: "Content Strategy & Management", img: IMG.w1, big: true },
  { t: "Lifestyle Brand", c: "Social Media Content", img: IMG.w2 },
  { t: "Food Brand", c: "Content & Ad Campaigns", img: IMG.w3 },
  { t: "Fitness Brand", c: "Social Media Management", img: IMG.w4 },
  { t: "Service Brand", c: "Content Creation & Growth", img: IMG.w5 },
];

/* Sample week for the content calendar */
type Plat = "Instagram" | "Facebook" | "LinkedIn";
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const PI: Record<Plat, LucideIcon> = { Instagram, Facebook, LinkedIn: Linkedin } as Record<Plat, LucideIcon>;
const posts: { d: number; p: Plat; type: string; t: string; time: string }[] = [
  { d: 0, p: "Instagram", type: "Reel", t: "Behind the scenes", time: "09:00" },
  { d: 0, p: "LinkedIn", type: "Post", t: "Industry insight", time: "12:30" },
  { d: 1, p: "Facebook", type: "Post", t: "Customer spotlight", time: "10:00" },
  { d: 2, p: "Instagram", type: "Carousel", t: "Tips and how-to", time: "11:00" },
  { d: 2, p: "Facebook", type: "Story", t: "Quick poll", time: "16:00" },
  { d: 3, p: "LinkedIn", type: "Article", t: "Thought leadership", time: "09:30" },
  { d: 4, p: "Instagram", type: "Story", t: "Team moment", time: "15:00" },
  { d: 4, p: "Facebook", type: "Post", t: "Offer or announcement", time: "11:30" },
  { d: 5, p: "Instagram", type: "Post", t: "Weekend feature", time: "10:30" },
  { d: 6, p: "LinkedIn", type: "Review", t: "Weekly performance review", time: "17:00" },
];

const CSS = `
.sm [data-tone="dark"]{--bg:#120d0d;--bg2:#1b1413;--tx:#f4eee6;--mu:rgba(244,238,230,.68);--ln:rgba(244,238,230,.14);--sf:rgba(244,238,230,.05);--ac:#a8283f;--ink:#fff8f0;--br:#d9a85b;--gl:rgba(255,186,110,.24)}
.sm [data-tone="light"]{--bg:#f6f2ec;--bg2:#efe8de;--tx:#1d1214;--mu:rgba(29,18,20,.68);--ln:rgba(107,26,43,.16);--sf:rgba(107,26,43,.05);--ac:#6b1a2b;--ink:#f6f2ec;--br:#a9772a;--gl:rgba(107,26,43,.12)}
.sm [data-tone="light2"]{--bg:#efe8de;--bg2:#f6f2ec;--tx:#1d1214;--mu:rgba(29,18,20,.68);--ln:rgba(107,26,43,.16);--sf:rgba(107,26,43,.05);--ac:#6b1a2b;--ink:#f6f2ec;--br:#a9772a;--gl:rgba(107,26,43,.12)}
@keyframes smUp{from{transform:translateY(110%)}to{transform:none}}
@keyframes smRise{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}
@keyframes smFloat{50%{transform:translateY(-9px)}}
@keyframes smGlow{0%,100%{opacity:.45}50%{opacity:.95}}
@keyframes smZoom{from{transform:scale(1.02)}to{transform:scale(1.12)}}
@keyframes smFade{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
@keyframes smPop{from{opacity:0;transform:scale(.85) translateY(10px)}to{opacity:1;transform:none}}
@keyframes smTile{0%,100%{filter:brightness(1)}50%{filter:brightness(1.25)}}
@keyframes smBar{from{transform:scaleX(0)}to{transform:scaleX(1)}}
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
const Cta = ({ children, href = "/contact", outline = false }: { children: ReactNode; href?: string; outline?: boolean }) => (
  <Link href={href} className={outline ? "group inline-flex items-center gap-3 border border-[color:var(--ac)] px-6 py-3.5 text-sm font-semibold text-[color:var(--ac)] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--ac)] hover:text-[color:var(--ink)]" : btn}>
    {children}<ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
  </Link>
);

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
  const [filter, setFilter] = useState<"All" | Plat>("All");
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);
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

  const toggle = () => {
    const n = theme === "dark" ? "light" : "dark";
    setTheme(n);
    try { localStorage.setItem("mh-theme", n); } catch {}
  };
  const T = (b: "dark" | "light" | "light2") => (theme === "dark" ? b : b === "dark" ? "light" : "dark");
  const band = "bg-[var(--bg)] text-[color:var(--tx)] transition-colors duration-500";
  const wrap = "mx-auto max-w-[1200px]";
  const shown = posts.filter((p) => filter === "All" || p.p === filter);
  const line = `ln block translate-y-[110%] ${mounted ? "[animation:smUp_1s_cubic-bezier(.2,.8,.2,1)_forwards]" : ""}`;

  return (
    <main className="sm relative overflow-x-clip">
      <style>{CSS}</style>
      <div aria-hidden="true" className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-gradient-to-r from-[#6b1a2b] to-[#e4a0ae]" style={{ transform: `scaleX(${prog})` }} />

      {/* ============ HERO (dark) ============ */}
      <section data-tone={T("dark")} className={`${band} relative isolate overflow-hidden px-5 pb-24 pt-24 sm:px-8 sm:pt-28`}>
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
            <p className={`mb-9 mt-7 max-w-[440px] text-base leading-7 text-[color:var(--mu)] opacity-0 sm:text-lg ${mounted ? "[animation:smRise_.9s_.7s_forwards]" : ""}`}>Strategic content, engaging communities and data-driven campaigns to grow your brand online.</p>
            <div className={`flex flex-wrap items-center gap-6 opacity-0 ${mounted ? "[animation:smRise_.9s_.9s_forwards]" : ""}`}>
              <Cta>Let&apos;s Discuss Your Goals</Cta>
              <a href="#work" className="group inline-flex items-center gap-3 text-sm font-medium text-[color:var(--mu)] hover:text-[color:var(--tx)]">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--ln)] transition group-hover:border-[color:var(--ac)] group-hover:bg-[var(--ac)]"><Play size={13} fill="currentColor" /></span>Watch Our Work
              </a>
            </div>
          </div>
          <Phone />
        </div>
        <ul className="absolute bottom-10 right-8 z-10 m-0 hidden list-none flex-col gap-1.5 p-0 text-[9px] font-semibold uppercase tracking-[0.35em] text-[color:var(--mu)] xl:flex">
          <li className="mb-2 h-px w-8 bg-[var(--mu)]" />{words.map((w) => (<li key={w}>{w}</li>))}
        </ul>
      </section>

      {/* ============ OVERVIEW (light) ============ */}
      <section data-tone={T("light")} className={`${band} px-5 py-20 sm:px-8 sm:py-24`}>
        <div className={`${wrap} grid items-center gap-12 lg:grid-cols-[0.9fr_1fr_0.45fr]`}>
          <Reveal>
            <p className={eyebrow}>Overview</p>
            <h2 className={`${h2} mt-4`}>More Than Posting. A Complete Strategy.</h2>
            <p className="mb-7 mt-5 max-w-[380px] text-sm leading-7 text-[color:var(--mu)]">We create and manage social media strategies that build brand awareness, increase engagement and drive measurable results.</p>
            <Cta outline>Get a Free Consultation</Cta>
          </Reveal>
          <Reveal delay={0.12}>
            <Photo src={IMG.overview} alt="Social media on a phone" className="aspect-[1.05/1] shadow-2xl shadow-black/25" imgClass="brightness-[.8] [animation:smZoom_26s_ease-in-out_infinite_alternate]" />
          </Reveal>
          <ul className="m-0 grid list-none gap-5 p-0">
            {overviewStats.map(([n, l], i) => (<Reveal key={l} delay={0.1 + i * 0.08}><li><b className="block text-3xl font-medium tracking-[-0.04em]">{n}</b><span className="text-xs text-[color:var(--mu)]">{l}</span></li></Reveal>))}
          </ul>
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
                  <div className="relative">
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-[var(--ac)] text-[color:var(--ink)] transition duration-500 group-hover:scale-110 group-hover:rotate-[8deg]"><Icon size={24} /></span>
                    <h3 className="mb-3 mt-7 text-xl font-semibold tracking-tight">{t}</h3>
                    <p className="m-0 min-h-[96px] text-sm leading-7 text-[color:var(--mu)]">{d}</p>
                    <div className="mt-5 flex flex-wrap gap-2">{tags.map((g) => (<span key={g} className="border border-[color:var(--ln)] px-3 py-1.5 text-[10px] font-semibold text-[color:var(--ac)]">{g}</span>))}</div>
                    <div className="mt-6 flex items-center justify-between border-t border-[color:var(--ln)] pt-5">
                      <span className="text-xs font-semibold text-[color:var(--ac)]">Explore the possibilities</span>
                      <span className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--ln)] transition duration-500 group-hover:rotate-45 group-hover:border-[color:var(--ac)] group-hover:bg-[var(--ac)] group-hover:text-[color:var(--ink)]"><ArrowUpRight size={16} /></span>
                    </div>
                  </div>
                </Tilt>
              </Reveal>
            ))}
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

      {/* ============ FEATURED WORK (dark) ============ */}
      <section id="work" data-tone={T("dark")} className={`${band} px-5 py-24 sm:px-8`}>
        <div className={wrap}>
          <Reveal className="mb-10">
            <p className={eyebrow}>Content styles</p>
            <h2 className={`${h2} mt-4`}>Social Media That Stands Out.</h2>
            <p className="mb-0 mt-3 text-xs text-[color:var(--mu)]">Illustrative content concepts across different kinds of brands.</p>
          </Reveal>
          <div className="grid auto-rows-[210px] gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {work.map((w, i) => (
              <Reveal key={w.t} delay={i * 0.08} className={w.big ? "sm:col-span-2 sm:row-span-2" : ""}>
                <div className="group relative h-full overflow-hidden bg-[#171010]">
                  <Photo src={w.img} alt={w.t} className="absolute inset-0" imgClass="transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-colors duration-500 group-hover:from-[#6b1a2b]/85" />
                  <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3 text-white">
                    <div><h3 className="m-0 text-base font-semibold">{w.t}</h3><p className="mb-0 mt-1 text-xs text-white/70">{w.c}</p></div>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/50 transition duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#6b1a2b]"><ArrowUpRight size={15} /></span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ RESULTS + PLATFORMS (light) ============ */}
      <section ref={rRef} data-tone={T("light")} className={`${band} px-5 py-24 sm:px-8`}>
        <div className={wrap}>
          <Reveal className="mb-10 max-w-[560px]">
            <p className={eyebrow}>Our results</p>
            <h2 className={`${h2} mt-4`}>Real Growth. Real Impact.</h2>
          </Reveal>
          <div className="mb-20 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {results.map((r, i) => (
              <div key={r.l} className="group">
                <div className="flex items-center gap-2 text-4xl font-medium tracking-[-0.05em] md:text-5xl"><TrendingUp size={16} className="text-[color:var(--ac)]" /><Count n={r.n} s={r.s} play={rSeen} /></div>
                <p className="mb-4 mt-2 text-xs text-[color:var(--mu)]">{r.l}</p>
                <span className="block h-px w-full bg-[var(--ln)]"><span className="block h-full origin-left bg-[var(--ac)]" style={{ width: `${r.w}%`, transform: rSeen ? "scaleX(1)" : "scaleX(0)", transition: `transform 1.6s ${0.2 + i * 0.15}s cubic-bezier(.2,.8,.2,1)` }} /></span>
              </div>
            ))}
          </div>
          <Reveal className="mb-8 text-center">
            <p className={eyebrow}>Your brand, where it matters</p>
            <h3 className="m-0 text-2xl font-semibold tracking-tight sm:text-3xl">Meet your audience where they are.</h3>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {platforms.map(([name, desc, I], i) => (
              <Reveal key={name} delay={i * 0.1}>
                <Tilt className="group flex items-center gap-4 border border-[color:var(--ln)] bg-[var(--sf)] p-5 hover:border-[color:var(--ac)]">
                  <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[var(--ac)] text-[color:var(--ink)] transition duration-500 group-hover:rotate-[10deg] group-hover:scale-105"><I size={24} /></span>
                  <span className="relative flex-1"><b className="block">{name}</b><span className="text-xs text-[color:var(--mu)]">{desc}</span></span>
                  <ArrowUpRight size={18} className="relative text-[color:var(--mu)] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[color:var(--ac)]" />
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE (dark) ============ */}
      <section data-tone={T("dark")} className={`${band} px-5 py-24 sm:px-8`}>
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
            <Cta>Let&apos;s Talk</Cta>
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
          <Link href="/contact" className="group inline-flex items-center gap-3 bg-[#f6f2ec] px-7 py-4 text-sm font-semibold text-[#6b1a2b] transition duration-300 hover:-translate-y-1 hover:shadow-xl">Let&apos;s Talk<ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></Link>
        </Reveal>
      </section>
    </main>
  );
}