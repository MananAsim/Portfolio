import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manan Asim | Customer Success & Technical Support",
  description: "Final-year CS student focused on Customer Success, Technical Support, and user-focused problem solving.",
  openGraph: {
    title: "Manan Asim | Customer Success & Technical Support",
    description: "Final-year CS student focused on Customer Success, Technical Support, and user-focused problem solving.",
    url: "https://mananasim.vercel.app", // standard placeholder
    siteName: "Manan Asim Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manan Asim | Customer Success & Technical Support",
    description: "Final-year CS student focused on Customer Success, Technical Support, and user-focused problem solving.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} min-h-full flex flex-col font-sans`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
