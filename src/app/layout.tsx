import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vista Solutions | Coming Soon",
  description:
    "Vista Solutions — Building modern digital experiences and software solutions.",
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