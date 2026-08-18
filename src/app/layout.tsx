import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VISTA SOLUTIONS | Coming Soon",
  description:
    "Something extraordinary is coming. Stay tuned for the launch of YOURTECH.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}