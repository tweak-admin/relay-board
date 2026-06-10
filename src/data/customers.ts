import { CaseStudy } from "../types";

export const customersData: CaseStudy[] = [
  {
    slug: "acme",
    companyName: "Acme Corp",
    logo: "Acme Enterprise",
    industry: "Enterprise Security & IAM",
    size: "5,000+ Employees",
    metric: "42%",
    metricLabel: "Reduction in Feature Gaps Churn",
    summary: "How Acme Corp consolidated feedback channels across 15 enterprise accounts to align development sprints precisely with contract renewals.",
    challenge: "With hundreds of enterprise clients logging conflicting feature requests across Salesforce, Zendesk, and shared Slack channels, the product team was blind to the collective revenue impact of feature requests. Technical debt soared, and key clients churned silently over unaddressed workflow blockers.",
    solution: "Relayboard aggregated all requests into a unified repository, dynamically matched them against active Salesforce contract value, and automatically categorized items with advanced filtering. Product teams could weight backlogs based on account health and renewal boundaries.",
    results: "Within 6 months, Acme Corp eliminated duplicate requests, prioritized exactly what the top 20 accounts needed to renew, and reduced feature-gap-related churn by 42%.",
    quote: {
      text: "Relayboard changed everything for us. We stopped guessing what features our enterprise customers wanted and started prioritizing exactly what affected our bottom-line revenue. The alignment between commercial and engineering blocks is perfect now.",
      author: "Evelyn Sterling",
      role: "VP of Product Management, Acme Corp",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120"
    },
    details: {
      narrative: `
<h3>The Chaos of Scattered Priorities</h3>
<p>Before Relayboard, Acme's roadmapping process was driven by whoever could sound the loudest alarm. Sales personnel would claim an enterprise prospect required an isolated custom firewall module to close, while Customer Success argued that API modifications were blocking renewals. Because nothing was centralized, decisions were highly political and lacked objective analytical baking.</p>

<h3>Building the Single Analytics Backbone</h3>
<p>By connecting Relayboard directly with Salesforce and Jira, Acme's Product Managers created an automated feedback tracking engine. When a customer success lead logged client feedback in Zendesk, Relayboard synced the request, tied it to the customer account, pulled the contract's annual recurring revenue (ARR), and checked if the customer was up for renewal in the current half.</p>

<blockquote>“For the first time in five years, we saw an objective, prioritized dashboard containing the raw financial value of every single request in our queue.”</blockquote>

<h3>Perfect Execution and Closing the Loop</h3>
<p>Once Acme prioritized the core features, they utilized Relayboard's automated changelog capabilities to let clients track active progress. Instead of sending bulky, manual newsletters, Acme triggered custom in-app notifications to clients who originally upvoted or requested the specific improvements once they transitioned to 'Shipped'. Customer satisfaction scores instantly surged, and support tickets plummeted as public transparency solved duplicate questions.</p>
      `,
      stats: [
        { value: "42%", label: "Churn Reduction" },
        { value: "$1.4M", label: "Locked ARR Saved" },
        { value: "12,000+", label: "Voters Merged" },
        { value: "5 hrs/wk", label: "Saved per Product Manager" }
      ],
      galleryImages: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600"
      ]
    }
  },
  {
    slug: "nova",
    companyName: "Nova Global",
    logo: "Nova E-Commerce",
    industry: "E-Commerce Infrastructure",
    size: "1,200 Employees",
    metric: "3.5x",
    metricLabel: "Faster Dev Velocity on Client Requests",
    summary: "Nova Global automated their customer advisory board operations using Relayboard, skyrocketing feature adoption with public roadmap layouts.",
    challenge: "Nova’s product managers spent hours compile-mapping spreadsheets to plan roadmap cycles, which slowed down customer replies. This caused a bottleneck, delaying crucial product releases and eroding buyer confidence.",
    solution: "Nova implemented Relayboard’s interactive roadmap and public boards, giving active e-commerce merchants a direct way to view, filter, vote, and submit feedback items without logging into a secondary support hub.",
    results: "Product development cycles scaled drastically. Dev teams achieved 3.5x faster velocity by acting on unified, pre-filtered requests with precise product templates.",
    quote: {
      text: "Our merchants feel like they are co-designing Nova's future alongside us. Utilizing Relayboard to publish our changelog has proven that we ship high-quality features faster than any other competitor in the market.",
      author: "Julio Valenzuela",
      role: "Chief Technology Officer, Nova Global",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120"
    },
    details: {
      narrative: `
<h3>Engaging the Developer & Merchant Base</h3>
<p>Nova E-Commerce supports thousands of demanding merchants worldwide. These merchants are highly vocal about API extensions, custom cart modifiers, and localized payment gateway supports. Hiding Nova's development backlog was generating severe anxiety among customers who didn't know if critical extensions were a week or a year away.</p>

<h3>Establishing Radical Transparency</h3>
<p>By using Relayboard's custom branding, Nova created an interactive, customer-facing roadmap at <em>roadmap.nova.com</em>. They allowed active merchants to vote directly on pending items. An automated clustering backend grouped similar requests from multiple merchants, avoiding fragmenting the core roadmap.</p>

<blockquote>“Relayboard acted as our developer relations shield. Instead of handling endless 'when is this coming?' tickets, our team simply points to the public board.”</blockquote>

<h3>Velocity Multiplied</h3>
<p>Because engineers could directly check comment chains, merchant metrics, and concrete UX ideas attached to each feedback card, they avoided building wrong features. Eliminating re-work allowed Nova to scale development cycles 3.5x, proving that focused customer-backed design beats blind speculation every single time.</p>
      `,
      stats: [
        { value: "3.5x", label: "Sprint Velocity Speedup" },
        { value: "85%", label: "Reduction in Feature Spec Work" },
        { value: "94%", label: "Merchant Delight Rating" },
        { value: "24,000", label: "Active Upvotes Managed" }
      ],
      videoEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Standard educational placeholder
    }
  }
];

// List of secondary client logos & short benefits for the customer list page:
export interface CustomerLogoItem {
  id: string;
  name: string;
  industry: string;
  metric: string;
  benefit: string;
  slug?: string;
  logoUrl?: string;
}

export const secondaryCustomers: CustomerLogoItem[] = [
  {
    id: "l1",
    name: "Linearis",
    industry: "Issue Tracking",
    metric: "+50% NPS",
    benefit: "Connected product feedback directly to bug tracking engines.",
    slug: "acme" // Redirect to acme for detail representation
  },
  {
    id: "l2",
    name: "Vercelify",
    industry: "Hosting Platform",
    metric: "8k Upvotes",
    benefit: "Managed high-density crowdsourced requests without server lag.",
    slug: "nova" // Redirect to nova for detail representation
  },
  {
    id: "l3",
    name: "FinFlow",
    industry: "Fintech API",
    metric: "99.9% Security",
    benefit: "Kept sensitive feedback isolated under strict multi-tenant policies.",
    slug: "acme"
  },
  {
    id: "l4",
    name: "StripeX",
    industry: "Payment Solutions",
    metric: "$2.3M Saved",
    benefit: "Routed premium user votes to key account expansion pipelines.",
    slug: "nova"
  },
  {
    id: "l5",
    name: "Designio",
    industry: "Collaborative Canvas",
    metric: "4.8/5 Star Rating",
    benefit: "Enabled visual feedback pins, reducing design specifications by half.",
    slug: "acme"
  },
  {
    id: "l6",
    name: "Syncly",
    industry: "Integration Cloud",
    metric: "12 Days Saved / Mo",
    benefit: "Automated standard changelog releases across four global hubs.",
    slug: "nova"
  }
];
