
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: "Motive House | Independent Creative & Digital Agency",
  description:
    "Motive House helps ambitious businesses build meaningful brands, digital experiences, and stronger operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}

