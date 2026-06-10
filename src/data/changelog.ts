import { ChangelogItem } from "../types";

export const changelogData: ChangelogItem[] = [
  {
    id: "v24",
    version: "v2.4.0",
    title: "AI Feedback Deduplication & Advanced Jira Sync Integration",
    publishedAt: "May 15, 2026",
    category: "Feature",
    description: "Our headline update for Q2 introduces powerful machine-learning deduplication alongside an overhauled two-way Jira sync engine.",
    changes: [
      "AI Deduplication Engine: Groups highly similar or duplicate bug reports and feature requests automatically, merging votes and impacted revenue calculations seamlessly.",
      "Two-Way Jira Sync: Update priorities in Relayboard, and watch the corresponding Jira EPIC or Story update instantly. Resolving in Jira resolves in Relayboard.",
      "Custom Dashboard Filters: Core search and filter state can now be shared via deep-linked URLs.",
      "Responsive Slide-Over UI: Completely rebuilt the comments and detail drawer for 5x faster load speed on sluggish networks."
    ],
    author: {
      name: "Marcus Vance",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120"
    }
  },
  {
    id: "v23",
    version: "v2.3.2",
    title: "Speed Booster: Grid Rendering Engine & Interactive Client Sliders",
    publishedAt: "April 22, 2026",
    category: "Improvement",
    description: "Under-the-hood upgrades targeting high-traffic dashboards. View thousands of customer feedback tags without single-frame drops.",
    changes: [
      "Optimized Virtualized List rendering for customers managing greater than 10,000 active tickets.",
      "Upgraded UI: Refined toggle sliders for Pricing recalculations and Client views with buttery-smooth 60fps animations.",
      "Accessibility audit: Fully vetted and implemented keyboard tab-trapping inside Modal panels.",
      "Secure API proxy: Client-side secrets are now fully hidden via server proxy interfaces."
    ],
    author: {
      name: "Sarah Jenkins",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120"
    }
  },
  {
    id: "v231",
    version: "v2.3.1",
    title: "Instant Slack Notifications & Global Search Accents",
    publishedAt: "April 02, 2026",
    category: "Feature",
    description: "Keep your design, sales, and engineering circles in instant alignment with native event broadcasts directly in Slack channels.",
    changes: [
      "Slack Integration: Broadcast an instant styled message whenever a piece of client feedback transitions to 'Planned' or 'Shipped'.",
      "Dynamic Search Bar: Fuzzy match tags, contact labels, or text inside any customer feedback item natively.",
      "Performance: Reduced bundle size by 45kb through lazy-loading secondary SVG sheets.",
      "Fixed Safari background overlapping glitch on sticky navigation headers."
    ],
    author: {
      name: "Marcus Vance",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120"
    }
  },
  {
    id: "v220",
    version: "v2.2.0",
    title: "Salesforce CRM Link: Pin Feedback to Contract Revenue & Renewals",
    publishedAt: "March 18, 2026",
    category: "Feature",
    description: "The ultimate weapon for B2B product managers. Prioritize your roadmap backed by direct financial volume automatically pulled from CRM leads.",
    changes: [
      "Salesforce Connector: Automatically associate individual user feedback votes with their specific account contract value.",
      "Financial Roadmap Weighting: Sort items by Total ARR alongside voting frequency in one single click.",
      "Multi-currency conversion: Normalizes feedback value automatically to standard USD metrics.",
      "Implemented auto-scroll anchor navigation elements in public-facing markdown documentation."
    ],
    author: {
      name: "Carla Diaz",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120"
    }
  },
  {
    id: "v215",
    version: "v2.1.5",
    title: "Detailed Excel/CSV Downloader & Custom Tag Mapping",
    publishedAt: "February 24, 2026",
    category: "Improvement",
    description: "Export clean spreadsheets of compiled voter lists, categories, and priority metrics in raw formats with custom schema overrides.",
    changes: [
      "Enhanced Data Exporting: One-click generation of fully compiled CSV files without truncating long user text.",
      "Custom Multi-Tag Editor: Choose custom hex colors and custom labels to match design categories.",
      "Corrected critical timezone issue that shifted analytics counts on the first day of the month.",
      "Resolved dialog scroll lock rendering bug on mobile screens."
    ],
    author: {
      name: "Sarah Jenkins",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120"
    }
  },
  {
    id: "v210",
    version: "v2.1.0",
    title: "Brand New Release Notes Publisher & Interactive Templates",
    publishedAt: "January 10, 2026",
    category: "Feature",
    description: "Introducing our visually polished, markdown-supported release notes editor with pre-loaded layout templates.",
    changes: [
      "Beautiful WYSIWYG Editor: Edit release notes, insert image assets, format code snippets, and preview in real-time.",
      "Interactive Release Templates: Formatted structures for Feature Highlights, Technical Releases, and general Patch Notes.",
      "Subscription Opt-Ins: Users can easily sign up via email to receive automated publications.",
      "Integrated beautiful animations and micro-transitions into general pricing structures."
    ],
    author: {
      name: "Marcus Vance",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120"
    }
  }
];
