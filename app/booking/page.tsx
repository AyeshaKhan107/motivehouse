import type { Metadata } from "next";
import { BookingDemo } from "@/components/BookingDemo";

export const metadata: Metadata = {
  title: "Book a Consultation | Motive House",
  description:
    "Book a Consultation with Motive House."
};

export default function BookingPage() {
  return <BookingDemo />;
}
