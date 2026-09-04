import { site, socialLinks } from "@/lib/content";
import { getSiteUrl } from "@/lib/site";

export function JsonLd() {
  const url = getSiteUrl();
  const sameAs = socialLinks.map((item) => item.href).filter((value): value is string => Boolean(value));

  const payload = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${url}/#person`,
        name: site.name,
        jobTitle: "Software Developer and QA Automation Engineer",
        email: site.email,
        url,
        sameAs,
      },
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url,
        name: `${site.name} Portfolio`,
        description: site.role,
        publisher: {
          "@id": `${url}/#person`,
        },
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }} />;
}
