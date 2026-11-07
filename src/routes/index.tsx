import { createFileRoute } from "@tanstack/react-router";

import GrantlyApp from "@/components/grantly-app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GRANTLY — Scholarship Discovery and Student Planning" },
      { name: "description", content: "Discover scholarship opportunities, review eligibility, organise application documents, and track your student scholarship journey with GRANTLY." },
      { property: "og:title", content: "GRANTLY — Scholarship Discovery and Student Planning" },
      { property: "og:description", content: "Discover scholarships, plan applications, and keep your student opportunities organised in one place." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap" },
    ],
  }),
  component: GrantlyApp,
});
