// "use client";

// import { useState, type FormEvent } from "react";
// import {
//   ArrowLeft,
//   ArrowRight,
//   CalendarDays,
//   CheckCircle2,
//   ChevronLeft,
//   ChevronRight,
//   Clock3,
//   Globe2,
// } from "lucide-react";

// const services = [
//   "Web Design & Development",
//   "SEO Services",
//   "Social Media Management",
//   "Graphic Design",
//   "Bookkeeping",
//   "Tax & Accounting",
//   "Other",
// ];

// const timeSlots = ["9:00 AM", "10:30 AM", "12:00 PM", "1:30 PM", "3:00 PM"];
// const timezones = [
//   { value: "America/New_York", label: "Eastern Time" },
//   { value: "America/Chicago", label: "Central Time" },
//   { value: "America/Denver", label: "Mountain Time" },
//   { value: "America/Los_Angeles", label: "Pacific Time" },
//   { value: "America/Toronto", label: "Toronto Time" },
//   { value: "UTC", label: "UTC" },
// ];
// const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// const fieldClass =
//   "mt-2 min-h-12 w-full rounded-xl border border-[#6b1a2b]/15 bg-white px-4 py-3 text-sm text-[#1a0b0f] outline-none transition placeholder:text-[#1a0b0f]/40 focus:border-[#8b2332] focus:ring-4 focus:ring-[#8b2332]/10";

// function monthStart(date: Date) {
//   return new Date(date.getFullYear(), date.getMonth(), 1);
// }

// function dateKey(date: Date) {
//   return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
// }

// function formatSelectedDate(date: Date) {
//   return new Intl.DateTimeFormat(undefined, {
//     weekday: "long",
//     month: "long",
//     day: "numeric",
//     year: "numeric",
//     timeZone: "UTC",
//   }).format(new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 12)));
// }

// export function BookingDemo() {
//   const [month, setMonth] = useState(() => monthStart(new Date()));
//   const [selectedDate, setSelectedDate] = useState<Date | null>(null);
//   const [selectedTime, setSelectedTime] = useState("");
//   const [timezone, setTimezone] = useState("America/New_York");
//   const [calendarError, setCalendarError] = useState("");
//   const [confirmation, setConfirmation] = useState<{
//     date: Date;
//     time: string;
//     timezone: string;
//   } | null>(null);

//   const today = new Date();
//   today.setHours(0, 0, 0, 0);
//   const currentMonth = monthStart(today);
//   const lastMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 2, 1);
//   const firstDay = new Date(month.getFullYear(), month.getMonth(), 1).getDay();
//   const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
//   const cells = Array.from({ length: Math.ceil((firstDay + daysInMonth) / 7) * 7 });
//   const monthLabel = new Intl.DateTimeFormat(undefined, {
//     month: "long",
//     year: "numeric",
//   }).format(month);
//   const selectedTimezone =
//     timezones.find((item) => item.value === timezone)?.label ?? timezone;

//   function selectDate(day: number) {
//     const date = new Date(month.getFullYear(), month.getMonth(), day);
//     setSelectedDate(date);
//     setSelectedTime("");
//     setCalendarError("");
//     setConfirmation(null);
//   }

//   function submit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     if (!selectedDate || !selectedTime) {
//       setCalendarError("Choose an available date and time to continue.");
//       return;
//     }

//     setCalendarError("");
//     setConfirmation({
//       date: selectedDate,
//       time: selectedTime,
//       timezone: selectedTimezone,
//     });
//   }

//   return (
//     <main className="min-h-screen bg-[#fffdf9] px-5 py-12 text-[#1a0b0f] sm:px-8 sm:py-16 lg:px-12 lg:py-20">
//       <div className="mx-auto max-w-7xl">
//         <div className="mx-auto max-w-3xl text-center">
          
//           <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.045em] text-[#6b1a2b] sm:text-5xl">
//             Book a Consultation
//           </h1>
//           <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#1a0b0f]/70 sm:text-base">
//             Choose a time that works for you and share a few details so we can make the conversation useful.
//           </p>
//         </div>

//         <div className="mx-auto mt-10 grid max-w-6xl gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
//           <section className="min-w-0 rounded-3xl border border-[#6b1a2b]/10 bg-white p-5 shadow-[0_24px_70px_-42px_rgba(26,11,15,0.35)] sm:p-7">
//             <div className="flex items-start gap-3">
//               <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f5eee8] text-[#8b2332]">
//                 <CalendarDays size={20} aria-hidden="true" />
//               </span>
//               <div>
//                 <h2 className="text-xl font-semibold text-[#6b1a2b]">Select a date</h2>
//                 <p className="mt-1 text-sm leading-6 text-[#1a0b0f]/60">
//                   Weekdays are available for this demo.
//                 </p>
//               </div>
//             </div>

//             <div className="mt-6 flex items-center justify-between gap-3">
//               <h3 className="text-base font-semibold text-[#1a0b0f]">{monthLabel}</h3>
//               <div className="flex gap-2">
//                 <button
//                   type="button"
//                   aria-label="Previous month"
//                   onClick={() =>
//                     setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1))
//                   }
//                   disabled={month <= currentMonth}
//                   className="grid h-9 w-9 place-items-center rounded-full border border-[#6b1a2b]/15 text-[#6b1a2b] transition hover:bg-[#f5eee8] disabled:cursor-not-allowed disabled:opacity-35"
//                 >
//                   <ChevronLeft size={17} aria-hidden="true" />
//                 </button>
//                 <button
//                   type="button"
//                   aria-label="Next month"
//                   onClick={() =>
//                     setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1))
//                   }
//                   disabled={month >= lastMonth}
//                   className="grid h-9 w-9 place-items-center rounded-full border border-[#6b1a2b]/15 text-[#6b1a2b] transition hover:bg-[#f5eee8] disabled:cursor-not-allowed disabled:opacity-35"
//                 >
//                   <ChevronRight size={17} aria-hidden="true" />
//                 </button>
//               </div>
//             </div>

//             <div className="mt-4 grid grid-cols-7 gap-1 text-center">
//               {weekdays.map((day) => (
//                 <span
//                   key={day}
//                   className="py-2 text-xs font-semibold text-[#1a0b0f]/50"
//                 >
//                   {day}
//                 </span>
//               ))}
//               {cells.map((_, index) => {
//                 const day = index - firstDay + 1;
//                 if (day < 1 || day > daysInMonth) {
//                   return <span key={`empty-${index}`} aria-hidden="true" />;
//                 }

//                 const date = new Date(month.getFullYear(), month.getMonth(), day);
//                 const isWeekday = date.getDay() !== 0 && date.getDay() !== 6;
//                 const isAvailable = date >= today && isWeekday;
//                 const isSelected =
//                   selectedDate !== null && dateKey(selectedDate) === dateKey(date);

//                 return (
//                   <button
//                     key={dateKey(date)}
//                     type="button"
//                     disabled={!isAvailable}
//                     aria-pressed={isSelected}
//                     aria-label={`${formatSelectedDate(date)}${isAvailable ? ", available" : ", unavailable"}`}
//                     onClick={() => selectDate(day)}
//                     className={`mx-auto grid h-10 w-10 place-items-center rounded-full text-sm transition ${
//                       isSelected
//                         ? "bg-[#8b2332] font-semibold text-white"
//                         : isAvailable
//                           ? "text-[#1a0b0f] hover:bg-[#f5eee8] hover:text-[#6b1a2b]"
//                           : "cursor-not-allowed text-[#1a0b0f]/25"
//                     }`}
//                   >
//                     {day}
//                   </button>
//                 );
//               })}
//             </div>

//             <div className="mt-6 border-t border-[#6b1a2b]/10 pt-5">
//               <div className="flex items-center justify-between gap-3">
//                 <h3 className="flex items-center gap-2 text-sm font-semibold text-[#6b1a2b]">
//                   <Clock3 size={16} aria-hidden="true" />
//                   Available times
//                 </h3>
//                 <label className="flex items-center gap-1.5 text-xs text-[#1a0b0f]/60">
//                   <Globe2 size={14} aria-hidden="true" />
//                   <span className="sr-only">Timezone</span>
//                   <select
//                     value={timezone}
//                     onChange={(event) => {
//                       setTimezone(event.target.value);
//                       setConfirmation(null);
//                     }}
//                     className="max-w-[155px] rounded-lg border border-[#6b1a2b]/15 bg-white px-2 py-1.5 text-xs text-[#1a0b0f] outline-none focus:border-[#8b2332] focus:ring-2 focus:ring-[#8b2332]/10"
//                   >
//                     {timezones.map((item) => (
//                       <option key={item.value} value={item.value}>
//                         {item.label}
//                       </option>
//                     ))}
//                   </select>
//                 </label>
//               </div>
//               <p className="mt-1 text-xs text-[#1a0b0f]/55">
//                 Times shown in {selectedTimezone}.
//               </p>
//               {!selectedDate ? (
//                 <p className="mt-4 rounded-xl bg-[#f5eee8]/70 p-4 text-sm text-[#1a0b0f]/60">
//                   Select a date to view available times.
//                 </p>
//               ) : (
//                 <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
//                   {timeSlots.map((time) => (
//                     <button
//                       key={time}
//                       type="button"
//                       aria-pressed={selectedTime === time}
//                       onClick={() => {
//                         setSelectedTime(time);
//                         setCalendarError("");
//                         setConfirmation(null);
//                       }}
//                       className={`min-h-10 rounded-xl border px-3 py-2 text-sm font-medium transition ${
//                         selectedTime === time
//                           ? "border-[#8b2332] bg-[#8b2332] text-white"
//                           : "border-[#6b1a2b]/15 text-[#6b1a2b] hover:border-[#8b2332]/40 hover:bg-[#f5eee8]"
//                       }`}
//                     >
//                       {time}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </section>

//           <form
//             onSubmit={submit}
//             className="min-w-0 rounded-3xl border border-[#6b1a2b]/10 bg-white p-5 shadow-[0_24px_70px_-42px_rgba(26,11,15,0.35)] sm:p-7"
//           >
//             <div>
//               <h2 className="text-xl font-semibold text-[#6b1a2b]">Your details</h2>
//               <p className="mt-1 text-sm leading-6 text-[#1a0b0f]/60">
//                 Tell us who we&apos;ll be speaking with.
//               </p>
//             </div>

//             <div className="mt-6 grid gap-4 sm:grid-cols-2">
//               <label className="text-sm font-semibold text-[#1a0b0f]">
//                 First Name <span className="text-[#8b2332]">*</span>
//                 <input className={fieldClass} name="firstName" autoComplete="given-name" maxLength={50} required />
//               </label>
//               <label className="text-sm font-semibold text-[#1a0b0f]">
//                 Last Name <span className="text-[#8b2332]">*</span>
//                 <input className={fieldClass} name="lastName" autoComplete="family-name" maxLength={50} required />
//               </label>
//             </div>

//             <label className="mt-4 block text-sm font-semibold text-[#1a0b0f]">
//               Email <span className="text-[#8b2332]">*</span>
//               <input className={fieldClass} type="email" name="email" autoComplete="email" maxLength={254} required />
//             </label>

//             <label className="mt-4 block text-sm font-semibold text-[#1a0b0f]">
//               Phone Number <span className="text-[#8b2332]">*</span>
//               <input className={fieldClass} type="tel" name="phone" autoComplete="tel" maxLength={40} required />
//             </label>

//             <label className="mt-4 block text-sm font-semibold text-[#1a0b0f]">
//               Service Required <span className="text-[#8b2332]">*</span>
//               <select className={fieldClass} name="service" defaultValue="" required>
//                 <option value="" disabled>Select a service</option>
//                 {services.map((service) => (
//                   <option key={service} value={service}>{service}</option>
//                 ))}
//               </select>
//             </label>

//             <label className="mt-4 block text-sm font-semibold text-[#1a0b0f]">
//               Additional Notes
//               <textarea
//                 className={`${fieldClass} min-h-24 resize-y`}
//                 name="notes"
//                 rows={3}
//                 maxLength={2000}
//                 placeholder="Anything you would like us to know before we talk?"
//               />
//             </label>

//             {calendarError && (
//               <p role="alert" className="mt-4 text-sm text-[#8b2332]">
//                 {calendarError}
//               </p>
//             )}

//             <button
//               type="submit"
//               className="group mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#8b2332] px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#6b1a2b] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#8b2332]/20"
//             >
//               Confirm Booking
//               <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
//             </button>

//             {confirmation && (
//               <div
//                 role="status"
//                 className="mt-5 rounded-2xl border border-[#6b1a2b]/15 bg-[#f5eee8]/70 p-4"
//               >
//                 <p className="flex items-center gap-2 font-semibold text-[#6b1a2b]">
//                   <CheckCircle2 size={18} aria-hidden="true" />
//                   Demo confirmation
//                 </p>
//                 <p className="mt-2 text-sm leading-6 text-[#1a0b0f]/75">
//                   Selected: {formatSelectedDate(confirmation.date)} at {confirmation.time} ({confirmation.timezone}).
//                 </p>
//                 <p className="mt-2 text-xs leading-5 text-[#8b2332]">
//               Thank You for Choosing Motive House!
// Your consultation request has been received. We look forward to connecting with you.
//                 </p>
//               </div>
//             )}
//           </form>
//         </div>

    
//       </div>
//     </main>
//   );
// }













"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const services = [
  "Web Design & Development",
  "SEO Services",
  "Social Media Management",
  "Graphic Design",
  "Bookkeeping",
  "Tax & Accounting",
  "Other",
];

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const fieldClass =
  "mt-2 min-h-12 w-full rounded-xl border border-[#6b1a2b]/15 bg-white px-4 py-3 text-sm text-[#1a0b0f] outline-none transition placeholder:text-[#1a0b0f]/40 focus:border-[#8b2332] focus:ring-4 focus:ring-[#8b2332]/10";

function monthStart(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function dateKey(date: Date) {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

function formatSelectedDate(date: Date) {
  return new Intl.DateTimeFormat(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(
    new Date(
      Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 12),
    ),
  );
}

export function BookingDemo() {
  const [month, setMonth] = useState(() => monthStart(new Date()));
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [calendarError, setCalendarError] = useState("");
  const [confirmation, setConfirmation] = useState<Date | null>(null);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const currentMonth = monthStart(today);
  const lastMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 2,
    1,
  );

  const firstDay = new Date(
    month.getFullYear(),
    month.getMonth(),
    1,
  ).getDay();

  const daysInMonth = new Date(
    month.getFullYear(),
    month.getMonth() + 1,
    0,
  ).getDate();

  const cells = Array.from({
    length: Math.ceil((firstDay + daysInMonth) / 7) * 7,
  });

  const monthLabel = new Intl.DateTimeFormat(undefined, {
    month: "long",
    year: "numeric",
  }).format(month);

  function selectDate(day: number) {
    const date = new Date(month.getFullYear(), month.getMonth(), day);

    setSelectedDate(date);
    setCalendarError("");
    setConfirmation(null);
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!selectedDate) {
      setCalendarError("Please choose a date to continue.");
      return;
    }

    setCalendarError("");
    setConfirmation(selectedDate);
  }

  return (
    <main className="min-h-screen bg-[#fffdf9] px-5 py-12 text-[#1a0b0f] sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.045em] text-[#6b1a2b] sm:text-5xl">
            Book a Consultation
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#1a0b0f]/70 sm:text-base">
            Select your preferred date and share a few details so we can make
            the conversation useful.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <section className="min-w-0 rounded-3xl border border-[#6b1a2b]/10 bg-white p-5 shadow-[0_24px_70px_-42px_rgba(26,11,15,0.35)] sm:p-7">
            <div className="flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f5eee8] text-[#8b2332]">
                <CalendarDays size={20} aria-hidden="true" />
              </span>

              <div>
                <h2 className="text-xl font-semibold text-[#6b1a2b]">
                  Select a date
                </h2>

                <p className="mt-1 text-sm leading-6 text-[#1a0b0f]/60">
                  Choose your preferred consultation date.
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between gap-3">
              <h3 className="text-base font-semibold text-[#1a0b0f]">
                {monthLabel}
              </h3>

              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous month"
                  onClick={() =>
                    setMonth(
                      new Date(
                        month.getFullYear(),
                        month.getMonth() - 1,
                        1,
                      ),
                    )
                  }
                  disabled={month <= currentMonth}
                  className="grid h-9 w-9 place-items-center rounded-full border border-[#6b1a2b]/15 text-[#6b1a2b] transition hover:bg-[#f5eee8] disabled:cursor-not-allowed disabled:opacity-35"
                >
                  <ChevronLeft size={17} aria-hidden="true" />
                </button>

                <button
                  type="button"
                  aria-label="Next month"
                  onClick={() =>
                    setMonth(
                      new Date(
                        month.getFullYear(),
                        month.getMonth() + 1,
                        1,
                      ),
                    )
                  }
                  disabled={month >= lastMonth}
                  className="grid h-9 w-9 place-items-center rounded-full border border-[#6b1a2b]/15 text-[#6b1a2b] transition hover:bg-[#f5eee8] disabled:cursor-not-allowed disabled:opacity-35"
                >
                  <ChevronRight size={17} aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-7 gap-1 text-center">
              {weekdays.map((day) => (
                <span
                  key={day}
                  className="py-2 text-xs font-semibold text-[#1a0b0f]/50"
                >
                  {day}
                </span>
              ))}

              {cells.map((_, index) => {
                const day = index - firstDay + 1;

                if (day < 1 || day > daysInMonth) {
                  return (
                    <span key={`empty-${index}`} aria-hidden="true" />
                  );
                }

                const date = new Date(
                  month.getFullYear(),
                  month.getMonth(),
                  day,
                );

                const isWeekday =
                  date.getDay() !== 0 && date.getDay() !== 6;

                const isAvailable = date >= today && isWeekday;

                const isSelected =
                  selectedDate !== null &&
                  dateKey(selectedDate) === dateKey(date);

                return (
                  <button
                    key={dateKey(date)}
                    type="button"
                    disabled={!isAvailable}
                    aria-pressed={isSelected}
                    aria-label={`${formatSelectedDate(date)}${isAvailable ? ", available" : ", unavailable"}`}
                    onClick={() => selectDate(day)}
                    className={`mx-auto grid h-10 w-10 place-items-center rounded-full text-sm transition ${
                      isSelected
                        ? "bg-[#8b2332] font-semibold text-white"
                        : isAvailable
                          ? "text-[#1a0b0f] hover:bg-[#f5eee8] hover:text-[#6b1a2b]"
                          : "cursor-not-allowed text-[#1a0b0f]/25"
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>

            {selectedDate && (
              <div className="mt-6 rounded-xl bg-[#f5eee8]/70 p-4">
                <p className="text-sm font-semibold text-[#6b1a2b]">
                  Selected date
                </p>

                <p className="mt-1 text-sm text-[#1a0b0f]/75">
                  {formatSelectedDate(selectedDate)}
                </p>
              </div>
            )}
          </section>

          <form
            onSubmit={submit}
            className="min-w-0 rounded-3xl border border-[#6b1a2b]/10 bg-white p-5 shadow-[0_24px_70px_-42px_rgba(26,11,15,0.35)] sm:p-7"
          >
            <div>
              <h2 className="text-xl font-semibold text-[#6b1a2b]">
                Your details
              </h2>

              <p className="mt-1 text-sm leading-6 text-[#1a0b0f]/60">
                Tell us who we&apos;ll be speaking with.
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-semibold text-[#1a0b0f]">
                First Name <span className="text-[#8b2332]">*</span>
                <input
                  className={fieldClass}
                  name="firstName"
                  autoComplete="given-name"
                  maxLength={50}
                  required
                />
              </label>

              <label className="text-sm font-semibold text-[#1a0b0f]">
                Last Name <span className="text-[#8b2332]">*</span>
                <input
                  className={fieldClass}
                  name="lastName"
                  autoComplete="family-name"
                  maxLength={50}
                  required
                />
              </label>
            </div>

            <label className="mt-4 block text-sm font-semibold text-[#1a0b0f]">
              Email <span className="text-[#8b2332]">*</span>
              <input
                className={fieldClass}
                type="email"
                name="email"
                autoComplete="email"
                maxLength={254}
                required
              />
            </label>

            <label className="mt-4 block text-sm font-semibold text-[#1a0b0f]">
              Phone Number <span className="text-[#8b2332]">*</span>
              <input
                className={fieldClass}
                type="tel"
                name="phone"
                autoComplete="tel"
                maxLength={40}
                required
              />
            </label>

            <label className="mt-4 block text-sm font-semibold text-[#1a0b0f]">
              Service Required <span className="text-[#8b2332]">*</span>
              <select
                className={fieldClass}
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

            <label className="mt-4 block text-sm font-semibold text-[#1a0b0f]">
              Additional Notes
              <textarea
                className={`${fieldClass} min-h-24 resize-y`}
                name="notes"
                rows={3}
                maxLength={2000}
                placeholder="Anything you would like us to know before we talk?"
              />
            </label>

            {calendarError && (
              <p role="alert" className="mt-4 text-sm text-[#8b2332]">
                {calendarError}
              </p>
            )}

            <button
              type="submit"
              className="group mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#8b2332] px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#6b1a2b] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#8b2332]/20"
            >
              Confirm Booking
              <ArrowRight
                size={16}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            {confirmation && (
              <div
                role="status"
                className="mt-5 rounded-2xl border border-[#6b1a2b]/15 bg-[#f5eee8]/70 p-4"
              >
                <p className="flex items-center gap-2 font-semibold text-[#6b1a2b]">
                  <CheckCircle2 size={18} aria-hidden="true" />
                  Thank You for Choosing Motive House!
                </p>

                <p className="mt-2 text-sm leading-6 text-[#1a0b0f]/75">
                  Thank you for sharing your details. We look forward to
                  connecting with you.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}
