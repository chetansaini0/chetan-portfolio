import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Chetan Saini · AI Web Developer & SaaS Freelancer",
    template: "%s · Chetan Saini",
  },
  description:
    "Production websites, booking systems, dashboards, and AI-assisted SaaS — built with Next.js for Indian and international clients.",
  openGraph: {
    title: "Chetan Saini · AI Web Developer",
    description:
      "Client work and shipped SaaS: hotels, jewellery lead-gen, ReviewFlow AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
