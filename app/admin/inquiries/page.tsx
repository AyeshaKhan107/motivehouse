import type { Metadata } from "next";
import { AdminInquiries } from "@/components/AdminInquiries";

export const metadata: Metadata = {
  title: "Admin Inquiries | Motive House",
  robots: { index: false, follow: false },
};

export default function AdminInquiriesPage() {
  return <AdminInquiries />;
}
