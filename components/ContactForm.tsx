"use client";
import { useState, FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Project enquiry: ${data.get("service")}`);
    const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\nService: ${data.get("service")}\nBudget: ${data.get("budget")}\n\nMessage:\n${data.get("message")}`);
    window.location.href = `mailto:support@motivehouse.co?subject=${subject}&body=${body}`;
    setSent(true);
  }
  return <form className="contact-form" onSubmit={submit}>
    <div className="form-row"><label>Your name<input name="name" required placeholder="Full name"/></label><label>Email address<input name="email" type="email" required placeholder="you@company.com"/></label></div>
    <div className="form-row"><label>What do you need?<select name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Graphic Design</option><option>Social Media Management</option><option>Web Design & Development</option><option>Bookkeeping & Accounting</option><option>Tax Preparation & Filing</option><option>Something else</option></select></label><label>Estimated budget<select name="budget" defaultValue="Not sure yet"><option>Not sure yet</option><option>Under $1,000</option><option>$1,000–$5,000</option><option>$5,000–$10,000</option><option>$10,000+</option></select></label></div>
    <label>Tell us about your project<textarea name="message" rows={4} required placeholder="A little about your goals, timeline and ideas..."/></label>
    <button className="button button-red" type="submit">Send Project Enquiry <ArrowRight size={15}/></button>
    {sent && <p className="form-note"><CheckCircle2 size={15}/> Your email app should open with your enquiry ready to send.</p>}
  </form>;
}