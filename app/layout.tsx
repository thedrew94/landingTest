import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Landing Page Code Test",
    template: "%s | Landing Page Code Test",
  },
  description: "Landing Page Code Test built with nextjs typescript and tailwind",
  keywords: ["landing page", "Next.js", "code test", "SEO", "web development"],
  authors: [
    { name: "Tornyai Laurentiu Andrei", url: "https://www.linkedin.com/in/laurentiu-andrei-tornyai-502655310/" },
  ],
  publisher: "SPOT",
  // icons: {
  //   icon: "/favicon.icon",
  // },
  category: "Technology",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  // Open Graph metadata (for social media sharing)
  // ...
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
