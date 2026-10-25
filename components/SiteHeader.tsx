// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import {
// ArrowRight,
// Menu,
// X,
// ChevronDown,
// Palette,
// Sparkles,
// Monitor,
// PenTool,
// Megaphone,
// Globe,
// } from "lucide-react";

// const links = [
// { label: "Home", href: "/" },
// { label: "About Us", href: "/about" },
// { label: "Our Work", href: "/work" },
// { label: "Process", href: "/process" },
// { label: "Pricing", href: "/pricing" },
// { label: "Blog", href: "/blog" },
// ];

// const serviceLinks = [
// {
// title: "Graphic Design",
// description: "Visuals that make your brand stand out.",
// href: "/services/graphic-design",
// icon: Palette,
// },
// {
// title: "Web Design & Development",
// description: "Modern, responsive websites.",
// href: "/services/web-design",
// icon: Monitor,
// },
// {
// title: "Bookkeeping",
// description: "Manage your finances with confidence.",
// href: "/services/book-keeping",
// icon: PenTool,
// },
// {
// title: "Social Media Management",
// description: "Reach the right audience online.",
// href: "/services/social-media-management",
// icon: Megaphone,
// },
// {
// title: "SEO Services",
// description: "Improve visibility on search engines.",
// href: "/services/seo",
// icon: Globe,
// },
// {
// title: "Tax & Accounting",
// description: "Support for your business finances.",
// href: "/services/tax-accounting",
// icon: Sparkles,
// },
// ];

// const graphicLinks = [
// { label: "Flyer Design", href: "/services/graphic-design/flyer-design" },
// { label: "Logo Design", href: "/services/graphic-design/logo-design" },
// {
// label: "Business Cards",
// href: "/services/graphic-design/business-cards",
// },
// {
// label: "Social Media Graphics",
// href: "/services/graphic-design/social-media-graphics",
// },
// {
// label: "Brochure Design",
// href: "/services/graphic-design/brochure-design",
// },
// {
// label: "Poster Design",
// href: "/services/graphic-design/poster-design",
// },
// {
// label: "Packaging Design",
// href: "/services/graphic-design/packaging-design",
// },
// {
// label: "Brand Identity",
// href: "/services/graphic-design/brand-identity",
// },
// ];

// export function SiteHeader() {
// const [open, setOpen] = useState(false);
// const [servicesOpen, setServicesOpen] = useState(false);
// const [graphicsOpen, setGraphicsOpen] = useState(false);

// const closeMenu = () => {
// setOpen(false);
// setServicesOpen(false);
// setGraphicsOpen(false);
// };

// return ( <header
//    id="top"
//    className="site-header relative z-50 border-b border-black/[0.07] bg-[#fffdf9]"
//  > <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-8">
// {/* Brand */} <Link
//        className="brand shrink-0"
//        href="/"
//        onClick={closeMenu}
//        aria-label="Motive House home"
//      > <span>MOTIVE</span> <small>H O U S E</small> </Link>

//     {/* Desktop Navigation */}
//     <nav className="hidden items-center gap-5 xl:gap-6 lg:flex">
//       {links.slice(0, 2).map((link) => (
//         <Link
//           key={link.label}
//           href={link.href}
//           className="whitespace-nowrap text-sm font-medium transition-colors duration-200 hover:text-[#8b2332]"
//         >
//           {link.label}
//         </Link>
//       ))}

//       {/* Services Dropdown */}
//       <div className="group relative">
//         <button
//           type="button"
//           className="flex items-center gap-1.5 whitespace-nowrap text-sm font-medium transition-colors hover:text-[#8b2332]"
//           aria-haspopup="true"
//         >
//           Services
//           <ChevronDown
//             size={15}
//             className="transition-transform duration-200 group-hover:rotate-180"
//           />
//         </button>

//         <div className="invisible absolute left-1/2 top-full z-50 w-[min(620px,90vw)] -translate-x-1/2 translate-y-3 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
//           <div className="rounded-2xl border border-black/10 bg-[#fffdf9] p-5 shadow-2xl">
//             <div className="mb-4 flex items-center justify-between gap-4 border-b border-black/10 pb-3">
//               <div>
//                 <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8b2332]">
//                   What We Do
//                 </p>
//                 <h3 className="mt-1 text-lg font-semibold">
//                   Creative services for your brand
//                 </h3>
//               </div>

//               <Link
//                 href="/services"
//                 className="flex shrink-0 items-center gap-1 text-sm font-semibold text-[#8b2332] hover:text-[#6f1926]"
//               >
//                 All Services <ArrowRight size={14} />
//               </Link>
//             </div>

//             <div className="grid grid-cols-2 gap-2">
//               {serviceLinks.map((service) => {
//                 const Icon = service.icon;

//                 return (
//                   <Link
//                     key={service.title}
//                     href={service.href}
//                     className="group/item flex gap-3 rounded-xl p-3 transition-colors hover:bg-[#f5eee8]"
//                   >
//                     <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#8b2332]/10 text-[#8b2332]">
//                       <Icon size={19} />
//                     </span>

//                     <span>
//                       <span className="block text-sm font-semibold">
//                         {service.title}
//                       </span>
//                       <span className="mt-1 block text-xs leading-5 text-black/60">
//                         {service.description}
//                       </span>
//                     </span>
//                   </Link>
//                 );
//               })}
//             </div>

//             {/* Graphic Design Categories */}
//             <div className="mt-4 rounded-xl bg-[#f5eee8] p-4">
//               <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#8b2332]">
//                 Graphic Design Categories
//               </p>

//               <div className="grid grid-cols-2 gap-x-5 gap-y-2">
//                 {graphicLinks.map((item) => (
//                   <Link
//                     key={item.href}
//                     href={item.href}
//                     className="flex items-center justify-between gap-2 text-sm transition-colors hover:text-[#8b2332]"
//                   >
//                     {item.label}
//                     <ArrowRight size={13} />
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {links.slice(2).map((link) => (
//         <Link
//           key={link.label}
//           href={link.href}
//           className="whitespace-nowrap text-sm font-medium transition-colors duration-200 hover:text-[#8b2332]"
//         >
//           {link.label}
//         </Link>
//       ))}
//     </nav>

//     {/* Desktop CTA */}
//     <Link
//       className="button button-red hidden shrink-0 items-center gap-2 lg:inline-flex"
//       href="/contact"
//     >
//       Let&apos;s Talk <ArrowRight size={15} />
//     </Link>

//     {/* Mobile Menu Button */}
//     <button
//       type="button"
//       onClick={() => setOpen(!open)}
//       className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/10 transition-colors hover:bg-[#8b2332] hover:text-white lg:hidden"
//       aria-label={open ? "Close navigation" : "Open navigation"}
//       aria-expanded={open}
//     >
//       {open ? <X size={22} /> : <Menu size={22} />}
//     </button>
//   </div>

//   {/* Mobile Navigation */}
//   <div
//     className={`absolute left-0 right-0 top-full overflow-y-auto border-t border-black/10 bg-[#fffdf9] shadow-xl transition-all duration-300 lg:hidden ${
//       open
//         ? "visible max-h-[85vh] opacity-100"
//         : "invisible max-h-0 opacity-0"
//     }`}
//   >
//     <nav className="mx-auto max-w-7xl px-5 py-5">
//       {links.slice(0, 2).map((link) => (
//         <Link
//           key={link.label}
//           href={link.href}
//           onClick={closeMenu}
//           className="block border-b border-black/5 py-3.5 text-sm font-medium"
//         >
//           {link.label}
//         </Link>
//       ))}

//       {/* Mobile Services Accordion */}
//       <button
//         type="button"
//         onClick={() => setServicesOpen(!servicesOpen)}
//         className="flex w-full items-center justify-between border-b border-black/5 py-3.5 text-sm font-medium"
//         aria-expanded={servicesOpen}
//       >
//         Services
//         <ChevronDown
//           size={17}
//           className={`transition-transform duration-200 ${
//             servicesOpen ? "rotate-180" : ""
//           }`}
//         />
//       </button>

//       {servicesOpen && (
//         <div className="space-y-1 bg-[#f5eee8] p-3">
//           <Link
//             href="/services"
//             onClick={closeMenu}
//             className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-[#8b2332]"
//           >
//             All Services →
//           </Link>

//           {serviceLinks.map((service) => (
//             <Link
//               key={service.title}
//               href={service.href}
//               onClick={closeMenu}
//               className="block rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-white"
//             >
//               {service.title}
//             </Link>
//           ))}

//           <button
//             type="button"
//             onClick={() => setGraphicsOpen(!graphicsOpen)}
//             className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm font-semibold"
//             aria-expanded={graphicsOpen}
//           >
//             Graphic Design Categories
//             <ChevronDown
//               size={15}
//               className={`transition-transform duration-200 ${
//                 graphicsOpen ? "rotate-180" : ""
//               }`}
//             />
//           </button>

//           {graphicsOpen && (
//             <div className="ml-3 border-l-2 border-[#8b2332]/20 pl-3">
//               {graphicLinks.map((item) => (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   onClick={closeMenu}
//                   className="block py-2 text-sm text-black/70 transition-colors hover:text-[#8b2332]"
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//             </div>
//           )}
//         </div>
//       )}

//       {links.slice(2).map((link) => (
//         <Link
//           key={link.label}
//           href={link.href}
//           onClick={closeMenu}
//           className="block border-b border-black/5 py-3.5 text-sm font-medium"
//         >
//           {link.label}
//         </Link>
//       ))}

//       <Link
//         href="/contact"
//         onClick={closeMenu}
//         className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#8b2332] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#6f1926]"
//       >
//         Let&apos;s Talk <ArrowRight size={16} />
//       </Link>
//     </nav>
//   </div>
// </header>


// );
// }








"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  Palette,
  Sparkles,
  Monitor,
  PenTool,
  Megaphone,
  Globe,
} from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
];

const serviceLinks = [
  {
    title: "Graphic Design",
    description: "Visuals that make your brand stand out.",
    href: "/services/graphic-design",
    icon: Palette,
  },
  {
    title: "Web Design & Development",
    description: "Modern, responsive websites.",
    href: "/services/web-design",
    icon: Monitor,
  },
  {
    title: "Bookkeeping",
    description: "Manage your finances with confidence.",
    href: "/services/book-keeping",
    icon: PenTool,
  },
  {
    title: "Social Media Management",
    description: "Reach the right audience online.",
    href: "/services/social-media-management",
    icon: Megaphone,
  },
  {
    title: "SEO Services",
    description: "Improve visibility on search engines.",
    href: "/services/seo",
    icon: Globe,
  },
  {
    title: "Tax & Accounting",
    description: "Support for your business finances.",
    href: "/services/tax-accounting",
    icon: Sparkles,
  },
];

function LogoMark() {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className="h-10 w-10 shrink-0 overflow-visible transition-transform duration-500 [transition-timing-function:cubic-bezier(0.3,1.4,0.5,1)] group-hover:-rotate-[8deg] group-hover:scale-110"
    >
      <rect
        x="2"
        y="2"
        width="44"
        height="44"
        rx="13"
        fill="#6b1a2b"
      />

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

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <header
      id="site-header"
      className="site-header relative z-50 border-b border-black/[0.07] bg-[#fffdf9]"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-8">
        {/* Footer-style Motive House Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          aria-label="Motive House home"
          className="group inline-flex shrink-0 items-center gap-2.5"
        >
          <LogoMark />

          <span className="flex flex-col leading-none">
            <span className="text-xl font-extrabold tracking-[-0.04em] text-[#6b1a2b]">
              Motive
            </span>

            <span className="mt-1 text-xs font-medium tracking-[0.28em] text-[#6b1a2b]/70">
              HOUSE
            </span>
          </span>
        </Link>

        {/* Desktop Navigation: Home, About Us, Services */}
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="whitespace-nowrap text-sm font-medium transition-colors duration-200 hover:text-[#8b2332]"
            >
              {link.label}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1.5 whitespace-nowrap text-sm font-medium transition-colors hover:text-[#8b2332]"
              aria-haspopup="true"
            >
              Services

              <ChevronDown
                size={15}
                className="transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
              />
            </button>

            <div className="invisible absolute left-1/2 top-full z-50 w-[min(620px,90vw)] -translate-x-1/2 translate-y-3 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="rounded-2xl border border-black/10 bg-[#fffdf9] p-5 shadow-2xl">
                <div className="mb-4 flex items-center justify-between gap-4 border-b border-black/10 pb-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8b2332]">
                      What We Do
                    </p>

                    <h3 className="mt-1 text-lg font-semibold text-[#1a0b0f]">
                      Creative services for your brand
                    </h3>
                  </div>

                  <Link
                    href="/services"
                    className="flex shrink-0 items-center gap-1 text-sm font-semibold text-[#8b2332] hover:text-[#6f1926]"
                  >
                    All Services <ArrowRight size={14} />
                  </Link>
                </div>

                {/* Main services only — no graphic design subcategories */}
                <div className="grid grid-cols-2 gap-2">
                  {serviceLinks.map((service) => {
                    const Icon = service.icon;

                    return (
                      <Link
                        key={service.title}
                        href={service.href}
                        className="group/item flex gap-3 rounded-xl p-3 transition-colors hover:bg-[#f5eee8]"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#8b2332]/10 text-[#8b2332]">
                          <Icon size={19} />
                        </span>

                        <span>
                          <span className="block text-sm font-semibold text-[#1a0b0f]">
                            {service.title}
                          </span>

                          <span className="mt-1 block text-xs leading-5 text-black/60">
                            {service.description}
                          </span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Desktop Contact Button */}
        <Link
          className="button button-red hidden shrink-0 items-center gap-2 lg:inline-flex"
          href="/contact"
        >
          Let&apos;s Talk <ArrowRight size={15} />
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/10 transition-colors hover:bg-[#8b2332] hover:text-white lg:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`absolute left-0 right-0 top-full overflow-y-auto border-t border-black/10 bg-[#fffdf9] shadow-xl transition-all duration-300 lg:hidden ${
          open
            ? "visible max-h-[85vh] opacity-100"
            : "invisible max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-5 py-5">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className="block border-b border-black/5 py-3.5 text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Services Accordion */}
          <button
            type="button"
            onClick={() => setServicesOpen(!servicesOpen)}
            className="flex w-full items-center justify-between border-b border-black/5 py-3.5 text-sm font-medium"
            aria-expanded={servicesOpen}
          >
            Services

            <ChevronDown
              size={17}
              className={`transition-transform duration-200 ${
                servicesOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {servicesOpen && (
            <div className="space-y-1 bg-[#f5eee8] p-3">
              <Link
                href="/services"
                onClick={closeMenu}
                className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-[#8b2332]"
              >
                All Services →
              </Link>

              {serviceLinks.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-white"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          )}

          {/* Mobile Contact Button */}
          <Link
            href="/contact"
            onClick={closeMenu}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#8b2332] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#6f1926]"
          >
            Let&apos;s Talk <ArrowRight size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}

