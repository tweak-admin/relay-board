import { JobListing } from "../types";

export const jobListings: JobListing[] = [
  {
    id: "job-01",
    title: "Senior Product Manager",
    department: "Product",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    salaryRange: "$165,000 - $195,000",
    summary: "Deliver the future of customer feedback. You'll run the core Relayboard prioritization board, working directly with our CTO and VP of Product to scale our CRM integration workflows.",
    responsibilities: [
      "Own the vision, strategy, and execution of our CRM and issue management integrations (Jira, Salesforce, HubSpot).",
      "Draft concise, clear product specifications, coordinating with engineering and design leads during sprints.",
      "Engage with high-priority enterprise customers to map and understand their administrative feedback bottlenecks.",
      "Establish and analyze key product adoption metrics to guide continuous iteration loops."
    ],
    requirements: [
      "5+ years of PM experience at a high-growth B2B SaaS platform.",
      "Deep, functional understanding of Jira and Salesforce API structures and data schemas.",
      "Exceptional technical copywriting skills—you can translate complex database structures into clear user benefit copy.",
      "Demonstrated ability to negotiate features and say 'no' gracefully to key enterprise stakeholders."
    ]
  },
  {
    id: "job-02",
    title: "Lead Frontend Engineer",
    department: "Engineering",
    location: "San Francisco, CA / Hybrid",
    type: "Full-time",
    salaryRange: "$180,000 - $210,000",
    summary: "Help us build a buttery-smooth 60fps data interface. You will be championing the performance optimization of our core virtualized feedback charts, Kanban boards, and markdown engines.",
    responsibilities: [
      "Direct technical architecture of our client application built with React 19, TypeScript, and TailwindCSS.",
      "Design accessible, responsive, and performance-dense interactive components in our shared design system.",
      "Partner with our designer to implement rich micro-interactions and transitions using motion/react with high z-index layers.",
      "Proactively optimize page bundles, file caching mechanisms, and lazy-loading boundaries."
    ],
    requirements: [
      "7+ years of experience engineering complex React applications.",
      "Expert knowledge of Tailwind CSS, CSS Grid/Flexbox, and motion libraries.",
      "Strong appreciation for visual metrics, design details, type layouts, and user interactions.",
      "Experience setting up client-side unit testing and automated browser validation pipelines."
    ]
  },
  {
    id: "job-03",
    title: "Senior Full-Stack Developer (Integrations Specialist)",
    department: "Engineering",
    location: "Remote (Global)",
    type: "Full-time",
    salaryRange: "$150,000 - $185,000",
    summary: "Architect the pipeline linking Relayboard with the SaaS tool ecosystem. This role focuses on maintaining our heavy, secure Salesforce, Okta, and Linear connectors.",
    responsibilities: [
      "Build secure two-way syncing microservices capable of processing millions of webhook updates every hour.",
      "Ensure robust security separation between workspace layers under strict multi-tenant constraints.",
      "Optimize complex relational SQL schemas for fast analytics aggregation.",
      "Implement developer-facing SDKs, providing clean endpoints and clear error messages."
    ],
    requirements: [
      "5+ years of full-stack engineering experience, preferably with Node.js and TypeScript.",
      "Proven history of implementing enterprise-grade OAuth architectures and webhooks namespaces.",
      "Expert with PostgreSQL, query tuning, and schema normalization.",
      "Strong defensive security practices (OWASP standards, RLS verification, cryptographic keys)."
    ]
  },
  {
    id: "job-04",
    title: "Product Designer",
    department: "Design",
    location: "Brooklyn, NY / Hybrid",
    type: "Full-time",
    salaryRange: "$130,000 - $160,000",
    summary: "Design interfaces that make complex feedback loops intuitive and highly actionable. You'll lead UI/UX design from first user maps to polished high-fidelity interactive mocks.",
    responsibilities: [
      "Create clean, modern design boards for our feedback table interfaces, dashboards, and client-facing roadmaps.",
      "Conduct customer discovery sessions to validate feature flows and pinpoint interaction friction.",
      "Maintain, optimize, and document our corporate Figma design system alongside frontend engineering circles.",
      "Implement precise typography pairing, grid layout rules, and semantic color models."
    ],
    requirements: [
      "3+ years of experience designing complex, content-dense B2B SaaS web applications.",
      "Extensive portfolio showing exceptional typography, spacing efficiency, and native visual craft.",
      "Experience with animation prototyping (Framer, Principle, or CSS/SVG code animations).",
      "Basic HTML/CSS familiarity is a strong plus."
    ]
  },
  {
    id: "job-05",
    title: "Customer Success Lead & PM Liaison",
    department: "Success",
    location: "Chicago, IL / Remote",
    type: "Full-time",
    salaryRange: "$110,000 - $135,000",
    summary: "Nurture our growing mid-market accounts, acting as the primary advisory bridge between our power customers and our engineering roadmap boards.",
    responsibilities: [
      "Manage onboarding configurations for up to 50 premium B2B software accounts.",
      "Train customer admins on feedback consolidation practices, CRM integrations, and changelog strategies.",
      "Identify high-risk customer accounts containing critical feature gaps, proactively organizing defensive PM sync sessions.",
      "Lead our monthly customer feedback webinars and advisory meetings."
    ],
    requirements: [
      "4+ years of CSM or Account Management experience in the enterprise software ecosystem.",
      "High comfort level with technical tools (Jira, Salesforce, dev debugging tools).",
      "Empathetic, clear, and highly organized communication style—both verbal and written.",
      "Demonstrated ability to turn customer tension into actionable product roadmap suggestions."
    ]
  }
];

export interface TeamMember {
  name: string;
  role: string;
  category: "Leadership" | "Product" | "Engineering" | "Growth";
  avatar: string;
  bio: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Marcus Vance",
    role: "Co-Founder & VP of Product",
    category: "Leadership",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150",
    bio: "Ex-Product VP at Stripe-backed fintech startup. Marcus spends nights auditing prioritizations and mornings drinking pour-overs."
  },
  {
    name: "Evelyn Sterling",
    role: "Co-Founder & CEO",
    category: "Leadership",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150",
    bio: "Former enterprise strategy lead at Salesforce. Evelyn focuses on market expansion, customer relationships, and secure enterprise governance."
  },
  {
    name: "Julio Valenzuela",
    role: "Lead Engineer",
    category: "Engineering",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    bio: "Passionate about web performance, low bundle sizes, and compiling databases. Rebuilt our grid rendering engine to deliver 60fps."
  },
  {
    name: "Sarah Jenkins",
    role: "Head of Developer Experience",
    category: "Product",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
    bio: "Tech writer, standardizations geek, and design lover. Sarah creates our open SDK structures and authors our weekly release logs."
  },
  {
    name: "Carla Diaz",
    role: "VP of Customer Success",
    category: "Growth",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150",
    bio: "Spent eight years guiding customer alignment blocks for mid-market cloud networks. Carla blocks silent churn before it begins."
  },
  {
    name: "Naoki Tanaka",
    role: "Senior Integrations Engineer",
    category: "Engineering",
    avatar: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&q=80&w=150",
    bio: "A master of asynchronous webhooks and Salesforce APIs. Naoki previously engineered data migration connectors at Slack."
  },
  {
    name: "Elena Rostova",
    role: "Lead UI Designer",
    category: "Product",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    bio: "Enjoys modern sans typography, stark grids, and custom CSS colors. Created the Relayboard component catalog."
  },
  {
    name: "Robert Miller",
    role: "Security Architect",
    category: "Engineering",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150",
    bio: "Ex-IAM leader at Okta. Keeps our multi-tenant namespaces secure and structures deep-level row access controls."
  },
  {
    name: "Aisha Mwangi",
    role: "Senior Growth Marketer",
    category: "Growth",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=150",
    bio: "Drives our content publishing calendar and analyses organic outreach cycles. Aisha believes in showing concrete product value."
  },
  {
    name: "Dieter Schmidt",
    role: "Solutions Developer",
    category: "Engineering",
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=150",
    bio: "Deploys custom webhook mappings and identity pools for partners. Dieter loves writing automated API checks."
  },
  {
    name: "Sanjay Patel",
    role: "Systems Administrator",
    category: "Engineering",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&o=none&w=150",
    bio: "Architects our server cluster topologies and optimizes our CI/CD pipelines to guarantee 99.99% system uptime."
  },
  {
    name: "Christina Young",
    role: "Growth Coordinator",
    category: "Growth",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
    bio: "Manages our social outreach, organizes roundtables, and schedules system webinars. Energetic product advocate."
  }
];

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export const corporateTimeline: TimelineEvent[] = [
  {
    year: "Oct 2024",
    title: "The Scattered Feedback Hackathon",
    description: "Founders Evelyn and Marcus got frustrated trying to track customer votes inside a messy spreadsheet at their previous B2B startup, prompting them to build the first raw prototype of Relayboard."
  },
  {
    year: "Jan 2025",
    title: "Acclimation of Seed Funding",
    description: "Secured a $2.6M seed funding round led by premium SaaS enterprise funds, enabling the team to move into a collective studio space in San Francisco and hire the first three core developers."
  },
  {
    year: "Jun 2025",
    title: "Version 1.0 General Release",
    description: "Rolled out our core product containing real-time boards, simple voting cards, and slack push integrations. Gained our first 25 mid-market active product teams."
  },
  {
    year: "Dec 2025",
    title: "The Salesforce & Jira Overhaul",
    description: "Created our trademark two-way syncing integration engines, allowing enterprise customer managers to weight feedback boards directly by Salesforce ARR metric scores."
  },
  {
    year: "May 2026",
    title: "Moving Beyond: Reaching 200+ Teams",
    description: "Today, Relayboard facilitates roadmap planning for over 200 high-growth software teams worldwide. We remain dedicated to our single core tagline: Ship what customers actually asked for."
  }
];
