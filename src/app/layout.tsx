import type { Metadata } from "next";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Chetan Saini | Software Developer & QA Automation Engineer",
    template: "%s · Chetan Saini",
  },
  description:
    "Chetan Saini is a Software Developer and QA Automation Engineer from India focused on web development, software testing, automation testing, Selenium, Python, and modern digital experiences.",
  keywords: [
    "Chetan Saini",
    "Software Developer",
    "QA Engineer",
    "Automation Testing",
    "Web Development",
    "Selenium",
    "Python",
    "India",
    "portfolio",
  ],
  metadataBase: new URL(getSiteUrl()),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Chetan Saini | Software Developer & QA Automation Engineer",
    description:
      "Premium portfolio for Chetan Saini featuring software development, QA automation, web development, and real project work.",
    type: "website",
    siteName: "Chetan Saini Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chetan Saini | Software Developer & QA Automation Engineer",
    description:
      "Software Developer, QA Engineer, Automation Tester, and Web Developer portfolio.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <CustomCursor />
          <JsonLd />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
