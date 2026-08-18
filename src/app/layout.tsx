import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vistasolutions.in"),

  title: "Vista Solutions | Software Development Company",

  description:
    "Vista Solutions builds modern websites, web applications, software solutions, and AI-powered digital experiences for businesses.",

  keywords: [
    "Vista Solutions",
    "software development company",
    "web development",
    "website development",
    "AI solutions",
    "custom software development",
  ],

  openGraph: {
    title: "Vista Solutions | Software Development Company",
    description:
      "Modern websites, software and AI-powered solutions for businesses.",
    url: "https://vistasolutions.in",
    siteName: "Vista Solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}