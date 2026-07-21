export type Project = {
  slug: string;
  name: string;
  kind: "Client" | "Product";
  blurb: string;
  stack: string[];
  liveUrl: string;
  githubUrl: string;
  status: string;
};

export const projects: Project[] = [
  {
    slug: "krishan-shudhama-palace",
    name: "Krishan Shudhama Palace",
    kind: "Client",
    blurb:
      "Hotel marketing site with direct Razorpay booking, MongoDB inventory, banquet leads, and an admin panel — live on a custom domain near Khatu Shyam Ji.",
    stack: ["Next.js", "MongoDB", "Razorpay", "TypeScript"],
    liveUrl: "https://www.krishanshudhamapalace.com",
    githubUrl: "https://github.com/chetansaini0/krishan-shudhama-palace-site",
    status: "Live · custom domain",
  },
  {
    slug: "mb-jewellers",
    name: "MB Jewellers",
    kind: "Client",
    blurb:
      "Luxury jewellery showcase with appointment lead capture and a Postgres-backed admin — production on Vercel, custom domain pending. Intentionally not fake e‑commerce.",
    stack: ["Next.js", "Prisma", "PostgreSQL", "TypeScript"],
    liveUrl: "https://mb-jewellers-beta.vercel.app",
    githubUrl: "https://github.com/chetansaini0/mb_jewellers",
    status: "Live beta · domain pending",
  },
  {
    slug: "reviewflow-ai",
    name: "ReviewFlow AI",
    kind: "Product",
    blurb:
      "SaaS for QR-based Google review collection — Clerk auth, MongoDB, OpenAI drafts, analytics, and Razorpay billing for local businesses.",
    stack: ["Next.js", "Clerk", "MongoDB", "OpenAI", "Razorpay"],
    liveUrl: "https://reviewflow-ai-lime.vercel.app",
    githubUrl: "https://github.com/chetansaini0/reviewflow-ai",
    status: "Live product",
  },
  {
    slug: "docuextract",
    name: "DocuExtract",
    kind: "Product",
    blurb:
      "AI document extraction SaaS — upload invoices, receipts, and contracts, extract structured data with OpenAI, and export to Excel/CSV/JSON or via REST API. Supabase auth + Razorpay billing.",
    stack: ["Next.js", "Supabase", "OpenAI", "Razorpay", "TypeScript"],
    liveUrl: "https://docuextract-sandy.vercel.app",
    githubUrl: "https://github.com/chetansaini0/docuextract",
    status: "Live product",
  },
];

export const services = [
  "Business & hotel websites",
  "Landing pages",
  "SaaS MVPs & dashboards",
  "Booking systems",
  "Admin panels & CRMs",
  "AI chatbots & automation",
  "Razorpay / auth / API integrations",
  "SEO, redesign & maintenance",
];

export const profile = {
  name: "Chetan Saini",
  role: "AI Web Developer · SaaS Freelancer",
  email: "chetansaini0702@gmail.com",
  github: "https://github.com/chetansaini0",
  location: "India · Remote worldwide",
  oneLiner:
    "I build production websites and AI-assisted SaaS for businesses that need speed without sacrificing quality.",
};
