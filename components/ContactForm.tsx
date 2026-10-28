// "use client";

// import { useState, type FormEvent } from "react";
// import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";

// const services = [
//   "Web Design & Development",
//   "SEO Services",
//   "Social Media Management",
//   "Graphic Design",
//   "Bookkeeping",
//   "Tax & Accounting",
//   "Other",
// ];

// type SubmissionState =
//   | { kind: "success"; message: string }
//   | { kind: "error"; message: string }
//   | null;

// type ContactFormProps = {
//   title?: string;
//   description?: string;
//   className?: string;
// };

// const inputClass =
//   "mt-2.5 min-h-12 w-full rounded-xl border border-[#6b1a2b]/15 bg-white px-4 py-3 text-sm font-normal text-[#1a0b0f] outline-none transition placeholder:text-[#1a0b0f]/35 hover:border-[#6b1a2b]/30 focus:border-[#8b2332] focus:ring-4 focus:ring-[#8b2332]/10 disabled:opacity-60";

// export function ContactForm({
//   title = "Tell us about your project",
//   description = "Share a few details and we'll get back to you.",
//   className = "",
// }: ContactFormProps) {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submission, setSubmission] = useState<SubmissionState>(null);

//   async function submit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     setSubmission(null);
//     setIsSubmitting(true);

//     const form = event.currentTarget;
//     const formData = new FormData(form);
//     const inquiry = Object.fromEntries(formData.entries());

//     try {
//       const response = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(inquiry),
//       });
//       const result: { message?: string } = await response.json();

//       if (!response.ok) {
//         throw new Error(
//           result.message || "We couldn’t submit your inquiry. Please try again.",
//         );
//       }

//       form.reset();
//       setSubmission({
//         kind: "success",
//         message:
//           "Thank you for contacting Motive House! We have received your message and will respond to you shortly.",
//       });
//     } catch {
//       setSubmission({
//         kind: "error",
//         message:
//           "Thank you for contacting Motive House! We have received your message and will respond to you shortly.",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   }

//   return (
//     <form
//       onSubmit={submit}
//       className={`min-w-0 rounded-3xl border border-[#6b1a2b]/10 bg-white p-5 shadow-[0_24px_70px_-42px_rgba(26,11,15,0.4)] sm:p-8 lg:p-9 ${className}`}
//     >
//       <div className="mb-7 border-b border-[#6b1a2b]/10 pb-5">
//         <h2 className="text-2xl font-semibold tracking-[-0.035em] text-[#6b1a2b]">
//           {title}
//         </h2>
//         <p className="mt-2 text-sm leading-6 text-[#1a0b0f]/60">
//           {description}
//         </p>
//       </div>

//       <div className="space-y-5">
//         <div className="grid gap-5 sm:grid-cols-2">
//           <label className="block min-w-0 text-sm font-semibold text-[#1a0b0f]">
//             First Name <span className="text-[#8b2332]">*</span>
//             <input
//               className={inputClass}
//               name="firstName"
//               autoComplete="given-name"
//               maxLength={50}
//               placeholder="Your first name"
//               required
//             />
//           </label>
//           <label className="block min-w-0 text-sm font-semibold text-[#1a0b0f]">
//             Last Name <span className="text-[#8b2332]">*</span>
//             <input
//               className={inputClass}
//               name="lastName"
//               autoComplete="family-name"
//               maxLength={50}
//               placeholder="Your last name"
//               required
//             />
//           </label>
//         </div>

//         <div>
//           <label className="block min-w-0 text-sm font-semibold text-[#1a0b0f]">
//             Email <span className="text-[#8b2332]">*</span>
//             <input
//               className={inputClass}
//               name="email"
//               type="email"
//               autoComplete="email"
//               maxLength={254}
//               placeholder="you@example.com"
//               required
//             />
//           </label>
//         </div>

//         <div>
//           <label className="block min-w-0 text-sm font-semibold text-[#1a0b0f]">
//             Phone <span className="text-[#8b2332]">*</span>
//             <input
//               className={inputClass}
//               name="phone"
//               type="tel"
//               autoComplete="tel"
//               maxLength={40}
//               placeholder="+1 (555) 000-0000"
//               required
//             />
//           </label>
//         </div>

//         <div>
//           <label className="block min-w-0 text-sm font-semibold text-[#1a0b0f]">
//             Service required <span className="text-[#8b2332]">*</span>
//             <select
//               className={inputClass}
//               name="service"
//               defaultValue=""
//               required
//             >
//               <option value="" disabled>
//                 Select a service
//               </option>
//               {services.map((service) => (
//                 <option key={service} value={service}>
//                   {service}
//                 </option>
//               ))}
//             </select>
//           </label>
//         </div>

//         <label className="block text-sm font-semibold text-[#1a0b0f]">
//           Message <span className="text-[#8b2332]">*</span>
//           <textarea
//             className={`${inputClass} min-h-36 resize-y`}
//             name="details"
//             rows={5}
//             maxLength={5000}
//             placeholder="Tell us a little about your project, goals, or questions."
//             required
//           />
//         </label>

//         <label
//           aria-hidden="true"
//           className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
//           tabIndex={-1}
//         >
//           Leave this field empty
//           <input
//             name="website"
//             tabIndex={-1}
//             autoComplete="off"
//           />
//         </label>

//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className="group inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-xl bg-[#8b2332] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_24px_-14px_rgba(139,35,50,0.7)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#6b1a2b] hover:shadow-[0_16px_28px_-14px_rgba(107,26,43,0.65)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#8b2332]/20 disabled:cursor-wait disabled:opacity-70"
//         >
//           {isSubmitting ? (
//             <>
//               <LoaderCircle size={17} className="animate-spin" aria-hidden="true" />
//               Sending inquiry…
//             </>
//           ) : (
//             <>
//               Submit inquiry
//               <ArrowRight
//                 size={17}
//                 aria-hidden="true"
//                 className="transition-transform group-hover:translate-x-1"
//               />
//             </>
//           )}
//         </button>

//         <div
//           aria-live="polite"
//           aria-atomic="true"
//           className="min-h-5"
//         >
//           {submission && (
//             <p
//               role={submission.kind === "error" ? "alert" : "status"}
//               className={`flex items-start gap-2 text-sm leading-6 ${
//                 submission.kind === "success"
//                   ? "text-[#6b1a2b]"
//                   : "text-[#8b2332]"
//               }`}
//             >
//               {submission.kind === "success" && (
//                 <CheckCircle2
//                   size={17}
//                   aria-hidden="true"
//                   className="mt-0.5 shrink-0"
//                 />
//               )}
//               <span>{submission.message}</span>
//             </p>
//           )}
//         </div>
//       </div>
//     </form>
//   );
// }



"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";

const services = [
  "Web Design & Development",
  "SEO Services",
  "Social Media Management",
  "Graphic Design",
  "Bookkeeping",
  "Tax & Accounting",
  "Other",
];

type SubmissionState =
  | { kind: "success"; message: string }
  | { kind: "error"; message: string }
  | null;

type ContactFormProps = {
  title?: string;
  description?: string;
  className?: string;
};

const inputClass =
  "mt-2.5 min-h-12 w-full rounded-xl border border-[#6b1a2b]/15 bg-white px-4 py-3 text-sm font-normal text-[#1a0b0f] outline-none transition placeholder:text-[#1a0b0f]/35 hover:border-[#6b1a2b]/30 focus:border-[#8b2332] focus:ring-4 focus:ring-[#8b2332]/10 disabled:opacity-60";

export function ContactForm({
  title = "Tell us about your project",
  description = "Share a few details and we'll get back to you.",
  className = "",
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submission, setSubmission] = useState<SubmissionState>(null);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmission(null);
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const inquiry = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inquiry),
      });
      const result: { message?: string } = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "We couldn’t submit your inquiry. Please try again.",
        );
      }

      form.reset();
      setSubmission({
        kind: "success",
        message:
          "Thank you for contacting Motive House! We have received your message and will respond to you shortly.",
      });
    } catch {
      setSubmission({
        kind: "error",
        message:
          "Thank you for contacting Motive House! We have received your message and will respond to you shortly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={submit}
      className={`min-w-0 rounded-3xl border border-[#6b1a2b]/10 bg-white p-5 shadow-[0_24px_70px_-42px_rgba(26,11,15,0.4)] sm:p-8 lg:p-9 ${className}`}
    >
      <div className="mb-7 border-b border-[#6b1a2b]/10 pb-5">
        <h2 className="text-2xl font-semibold tracking-[-0.035em] text-[#6b1a2b]">
          {title}
        </h2>
        <p className="mt-2 text-sm leading-6 text-[#1a0b0f]/60">
          {description}
        </p>
      </div>

      <div className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block min-w-0 text-sm font-semibold text-[#1a0b0f]">
            First Name <span className="text-[#8b2332]">*</span>
            <input
              className={inputClass}
              name="firstName"
              autoComplete="given-name"
              maxLength={50}
              placeholder="Your first name"
              required
            />
          </label>

          <label className="block min-w-0 text-sm font-semibold text-[#1a0b0f]">
            Last Name <span className="text-[#8b2332]">*</span>
            <input
              className={inputClass}
              name="lastName"
              autoComplete="family-name"
              maxLength={50}
              placeholder="Your last name"
              required
            />
          </label>
        </div>

        <div>
          <label className="block min-w-0 text-sm font-semibold text-[#1a0b0f]">
            Email <span className="text-[#8b2332]">*</span>
            <input
              className={inputClass}
              name="email"
              type="email"
              autoComplete="email"
              maxLength={254}
              placeholder="you@example.com"
              required
            />
          </label>
        </div>

        <div>
          <label className="block min-w-0 text-sm font-semibold text-[#1a0b0f]">
            Phone <span className="text-[#8b2332]">*</span>
            <input
              className={inputClass}
              name="phone"
              type="tel"
              autoComplete="tel"
              maxLength={40}
              placeholder="+1 (555) 000-0000"
              required
            />
          </label>
        </div>

        <div>
          <label className="block min-w-0 text-sm font-semibold text-[#1a0b0f]">
            Service required <span className="text-[#8b2332]">*</span>
            <select
              className={inputClass}
              name="service"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select a service
              </option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="block text-sm font-semibold text-[#1a0b0f]">
          Message <span className="text-[#8b2332]">*</span>
          <textarea
            className={`${inputClass} min-h-36 resize-y`}
            name="details"
            rows={5}
            maxLength={5000}
            placeholder="Tell us a little about your project, goals, or questions."
            required
          />
        </label>

        <label
          aria-hidden="true"
          className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
          tabIndex={-1}
        >
          Leave this field empty
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="group inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-xl bg-[#8b2332] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_24px_-14px_rgba(139,35,50,0.7)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#6b1a2b] hover:shadow-[0_16px_28px_-14px_rgba(107,26,43,0.65)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#8b2332]/20 disabled:cursor-wait disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <LoaderCircle
                size={17}
                className="animate-spin"
                aria-hidden="true"
              />
              Sending inquiry…
            </>
          ) : (
            <>
              Submit inquiry
              <ArrowRight
                size={17}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              />
            </>
          )}
        </button>

        <div aria-live="polite" aria-atomic="true" className="min-h-5">
          {submission && (
            <p
              role={submission.kind === "error" ? "alert" : "status"}
              className={`flex items-start gap-2 text-sm leading-6 ${
                submission.kind === "success"
                  ? "text-[#6b1a2b]"
                  : "text-[#8b2332]"
              }`}
            >
              {submission.kind === "success" && (
                <CheckCircle2
                  size={17}
                  aria-hidden="true"
                  className="mt-0.5 shrink-0"
                />
              )}
              <span>{submission.message}</span>
            </p>
          )}
        </div>
      </div>
    </form>
  );
}

