import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Chetan Saini · AI Web Developer & SaaS Freelancer",
    template: "%s · Chetan Saini",
  },
  description:
    "Production websites, booking systems, dashboards, and AI-assisted SaaS — built with Next.js for Indian and international clients.",
  metadataBase: new URL("https://chetansaini0.github.io"),
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
      <body className={`${manrope.variable} ${fraunces.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
