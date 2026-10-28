import { model, models, Schema } from "mongoose";

export const INQUIRY_STATUSES = [
  "New",
  "Contacted",
  "In Progress",
  "Completed",
] as const;

export type InquiryStatus = (typeof INQUIRY_STATUSES)[number];

export const INQUIRY_SERVICES = [
  "Web Design & Development",
  "SEO Services",
  "Social Media Management",
  "Graphic Design",
  "Bookkeeping",
  "Tax & Accounting",
  "Other",
] as const;

export const INQUIRY_BUDGETS = [
  "Under $1,000",
  "$1,000–$5,000",
  "$5,000–$10,000",
  "$10,000–$25,000",
  "$25,000+",
  "Not sure yet",
] as const;

const inquirySchema = new Schema(
  {
    firstName: { type: String, required: true, trim: true, maxlength: 50 },
    lastName: { type: String, required: true, trim: true, maxlength: 50 },
    name: { type: String, trim: true, maxlength: 100, default: "" },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 254 },
    phone: { type: String, required: true, trim: true, maxlength: 40 },
    company: { type: String, trim: true, maxlength: 120, default: "" },
    service: { type: String, required: true, enum: INQUIRY_SERVICES },
    budget: { type: String, enum: [...INQUIRY_BUDGETS, ""], default: "" },
    details: { type: String, required: true, trim: true, maxlength: 5000 },
    status: { type: String, enum: INQUIRY_STATUSES, default: "New", index: true },
  },
  { timestamps: true },
);

inquirySchema.index({ createdAt: -1 });
inquirySchema.index({ email: 1, createdAt: -1 });

export const Inquiry =
  models.ContactInquiry ||
  model("ContactInquiry", inquirySchema, "Contact");
