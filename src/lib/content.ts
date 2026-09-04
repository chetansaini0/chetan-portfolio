export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  number: string;
  title: string;
  description: string;
  tags: string[];
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  stack: string[];
  overview: string;
  problem: string;
  approach: string;
  features: string[];
  challenges: string[];
  result: string;
  liveUrl?: string;
  githubUrl?: string;
  status: string;
  accent: string;
  featured?: boolean;
  placeholder?: boolean;
};

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Thought = {
  date: string;
  category: string;
  title: string;
  description: string;
  href?: string;
  placeholder?: boolean;
};

export type SocialLink = {
  label: string;
  href?: string;
  placeholder?: boolean;
};

export const site = {
  name: "Chetan Saini",
  role: "Software Developer | QA Engineer | Automation Tester | Web Developer",
  email: "chetansaini0702@gmail.com",
  github: "https://github.com/chetansaini0",
  location: "Jaipur, India",
  availability: "Open to software, web, and QA-focused opportunities",
  yearStarted: "2024",
  intro:
    "Hi, I'm Chetan — a software developer and QA automation enthusiast focused on building fast, reliable and conversion-focused digital experiences.",
  heroHeading: ["BUILDING DIGITAL", "EXPERIENCES THAT", "WORK."],
  finalCta: "Have a website, software project or testing challenge in mind? Let's talk.",
  about:
    "I'm Chetan Saini, a software-focused developer who enjoys building modern websites, solving technical problems, testing software, and automating repetitive processes.",
  aboutSecondary:
    "I want the product to look polished, behave reliably, and be maintainable after launch. That mix of build and test thinking is what shapes the way I work.",
} as const;

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Thoughts", href: "#thoughts" },
  { label: "Contact", href: "#contact" },
];

export const heroMeta = ["/SOFTWARE DEVELOPER", "/QA & AUTOMATION", "/CREATING SINCE 2024"] as const;

export const marqueeItems = ["BUILD", "TEST", "AUTOMATE", "DEPLOY", "OPTIMIZE", "IMPROVE"] as const;

export const strengths = [
  "Web development",
  "Software testing",
  "QA automation",
  "Selenium",
  "Python",
  "Java",
  "JavaScript",
  "C++",
  "API testing",
  "Git/GitHub",
  "Postman",
  "Jira",
  "SQL/DB concepts",
  "Responsive UI development",
] as const;

export const currentlyLearning = [
  "DSA",
  "Advanced automation",
  "Modern frontend development",
  "AI-assisted development",
] as const;

export const services: Service[] = [
  {
    number: "SERVICE 01",
    title: "Web Development",
    description:
      "Modern, responsive and performance-focused websites for businesses, brands and personal projects.",
    tags: ["Frontend", "Responsive UI", "JavaScript", "React", "SEO"],
  },
  {
    number: "SERVICE 02",
    title: "QA & Software Testing",
    description:
      "Structured testing focused on finding bugs, improving reliability and delivering better software experiences.",
    tags: ["Functional Testing", "Regression Testing", "Usability Testing", "API Testing", "Test Planning"],
  },
  {
    number: "SERVICE 03",
    title: "Test Automation",
    description:
      "Automating repetitive testing workflows to make software delivery faster and more reliable.",
    tags: ["Selenium", "Python", "Java", "Automation", "Regression"],
  },
  {
    number: "SERVICE 04",
    title: "Website Optimization",
    description:
      "Improving website performance, usability, SEO foundations and conversion-focused experiences.",
    tags: ["SEO", "Performance", "Core Web Vitals", "Responsive Design", "Optimization"],
  },
];

export const projects: Project[] = [
  {
    slug: "mb-jewellers",
    name: "MB Jewellers",
    category: "Business Website / E-commerce Experience",
    description:
      "A premium jewellery website designed to establish trust, showcase collections and create a modern digital presence for MB Jewellers.",
    stack: ["HTML", "CSS", "JavaScript", "Responsive Design", "SEO"],
    overview:
      "MB Jewellers needed a digital presence that felt premium and credible rather than another template storefront. The focus was on visual trust, presentation, and a cleaner path for customer interest.",
    problem:
      "The challenge was to present a jewellery brand online without turning it into fake ecommerce or overcomplicating the browsing flow.",
    approach:
      "I designed the experience around strong typography, product-led browsing, responsive layouts, and a cleaner brand-first UI that supports appointments and inquiries.",
    features: [
      "Premium collection showcase",
      "Responsive layouts across devices",
      "Trust-focused brand presentation",
      "SEO-conscious structure",
    ],
    challenges: [
      "Balancing luxury presentation with usability",
      "Keeping the UI premium without making it heavy",
    ],
    result:
      "The final site gives MB Jewellers a modern and more trustworthy web presence with a better foundation for customer discovery.",
    liveUrl: "https://mb-jewellers-beta.vercel.app",
    githubUrl: "https://github.com/chetansaini0/mb_jewellers",
    status: "Live beta",
    accent: "amber",
    featured: true,
  },
  {
    slug: "krishan-shudhama-palace",
    name: "Krishna Shudhama Palace",
    category: "Hotel / Hospitality Website",
    description:
      "A modern hospitality website designed to present rooms, facilities, location information and booking/contact opportunities for guests visiting the Khatoo region.",
    stack: ["Web Development", "Responsive UI", "SEO", "Backend Integration", "Deployment"],
    overview:
      "This project moved beyond a static brochure and into a real booking-focused hospitality platform with a more serious operational setup.",
    problem:
      "The hotel needed a premium web presence that could support trust, local search visibility, booking flows, and owner-side management.",
    approach:
      "I built a polished frontend, added booking and inquiry flows, integrated payments and backend logic, and improved SEO foundations for search visibility.",
    features: [
      "Room and facility presentation",
      "Direct booking and inquiry flows",
      "Responsive location and contact experience",
      "Operational improvements for real usage",
    ],
    challenges: [
      "Balancing design polish with real booking functionality",
      "Improving search readiness for a local hospitality business",
    ],
    result:
      "The website now acts as a real business asset rather than just an informational page, with stronger usability and conversion opportunities.",
    liveUrl: "https://www.krishanshudhamapalace.com",
    githubUrl: "https://github.com/chetansaini0/krishan-shudhama-palace-site",
    status: "Live on custom domain",
    accent: "stone",
    featured: true,
  },
  {
    slug: "qa-automation-project",
    name: "QA Automation Project",
    category: "Software Testing / Automation",
    description:
      "Placeholder prepared for a real automation/testing project from your repository once a public Selenium or test automation project is available.",
    stack: ["Python", "Selenium", "Test Automation", "Pytest/JUnit"],
    overview:
      "No public QA automation repository was found in the current portfolio project, so this slot is intentionally structured as a replaceable placeholder.",
    problem:
      "The portfolio should represent your testing and automation direction, but the current repository does not contain a real linked QA project yet.",
    approach:
      "I created this entry so the UI and case-study architecture are ready. Once you provide a real repository, this content can be swapped cleanly.",
    features: [
      "Ready-to-replace structure",
      "Testing-focused positioning",
      "Supports future live repo or case study content",
    ],
    challenges: ["Avoiding invented work while still preserving the intended portfolio structure"],
    result:
      "The portfolio stays honest while still making room for your QA automation specialization.",
    status: "Placeholder until real repo is added",
    accent: "zinc",
    placeholder: true,
  },
  {
    slug: "docuextract",
    name: "DocuExtract",
    category: "Software Product / AI Workflow",
    description:
      "A genuine AI-driven project for extracting structured information from uploaded business documents.",
    stack: ["Next.js", "Supabase", "OpenAI", "Razorpay", "TypeScript"],
    overview:
      "DocuExtract explores AI-assisted document workflows for invoices, receipts, and contracts with practical export-ready outputs.",
    problem:
      "Manual handling of business documents is repetitive, slow, and difficult to scale when teams need structured information quickly.",
    approach:
      "I built the product around upload, extraction, formatting, and export flows so the AI layer supports a real operational use case.",
    features: [
      "Document upload workflow",
      "Structured data extraction",
      "Export-ready result formats",
      "Billing-ready SaaS foundations",
    ],
    challenges: [
      "Designing a trustworthy workflow around AI output",
      "Making the experience useful instead of gimmicky",
    ],
    result:
      "The project demonstrates my ability to design and build AI-assisted software with a practical business focus.",
    liveUrl: "https://docuextract-sandy.vercel.app",
    githubUrl: "https://github.com/chetansaini0/docuextract",
    status: "Live product",
    accent: "emerald",
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Process Associate",
    company: "Knack Global RCM",
    location: "Jaipur",
    period: "January 2026 – Present",
    description:
      "Working in a structured process environment while continuing to grow in software development, QA thinking, and automation-oriented problem solving.",
  },
  {
    role: "Independent Project Work",
    company: "Personal & Client Builds",
    location: "Remote",
    period: "2024 – Present",
    description:
      "Built websites, business pages, and software projects focused on real deployment, responsive UI, testing awareness, and production readiness.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["C++", "Python", "Java", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Testing",
    items: ["Functional Testing", "Regression Testing", "Performance Testing", "Usability Testing", "Security Testing", "API Testing"],
  },
  {
    title: "Automation",
    items: ["Selenium", "Python Automation"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Jira", "Postman", "VS Code", "Eclipse"],
  },
];

export const thoughts: Thought[] = [
  {
    date: "2026",
    category: "Web Development",
    title: "What I learned building my first production website",
    description: "A future article slot for lessons from shipping a real client website from design through deployment.",
    placeholder: true,
  },
  {
    date: "2026",
    category: "Software Testing",
    title: "Why software testing matters before launch",
    description: "A placeholder article structure for sharing how reliability and product quality affect user trust.",
    placeholder: true,
  },
  {
    date: "2026",
    category: "Automation",
    title: "Getting started with Selenium automation",
    description: "Reserved for a future write-up around learning automation and building repeatable test workflows.",
    placeholder: true,
  },
  {
    date: "2026",
    category: "AI + Development",
    title: "How I use AI tools while developing",
    description: "A future article slot about using AI as a practical build assistant without compromising judgment.",
    placeholder: true,
  },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/chetansaini0" },
  { label: "LinkedIn", placeholder: true },
  { label: "Instagram", placeholder: true },
];

export const testimonials = {
  enabled: false,
  note: "Testimonials are intentionally left as a placeholder until real client or colleague feedback is available.",
} as const;
