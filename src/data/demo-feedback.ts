import { FeedbackItem } from "../types";

export const initialFeedbackData: FeedbackItem[] = [
  {
    id: "fb-101",
    title: "Two-way Jira alignment for custom issue fields",
    description: "Our current Jira integration only maps standard Title and Description. We need core support for mapping custom dropdown and epic fields in Jira back to Relayboard tags dynamically.",
    status: "In progress",
    priority: "High",
    votes: 384,
    category: "Integration",
    createdAt: "2026-05-18T10:30:00Z",
    user: {
      name: "Darnell Watson",
      email: "darnell@enterprise-cloud.io",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120"
    },
    tags: ["Jira Sync", "Enterprise", "Field Mapping"],
    assignee: {
      name: "Marcus Vance",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120"
    },
    comments: [
      {
        id: "c1",
        author: {
          name: "Darnell Watson",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120",
          isStaff: false
        },
        content: "We have over 40 active Jira epics. If custom fields don't sync, our development teams have to duplicate their updates manually. Super critical for our upcoming renewal.",
        createdAt: "2026-05-18T10:32:00Z"
      },
      {
        id: "c2",
        author: {
          name: "Marcus Vance",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120",
          isStaff: true
        },
        content: "Hey Darnell! We are currently working on v2.4.0 which contains general mapped parameters. We would love to have you test our beta branch next week.",
        createdAt: "2026-05-19T14:15:00Z"
      }
    ]
  },
  {
    id: "fb-102",
    title: "Interactive voting board using embeddable CSS frame",
    description: "Allow us to embed a localized version of the feedback board inside our React app via a secure SDK/iFrame, matching our internal brand CSS variables directly.",
    status: "Planned",
    priority: "Medium",
    votes: 219,
    category: "Feature Request",
    createdAt: "2026-05-15T08:12:00Z",
    user: {
      name: "Elena Rostova",
      email: "elena@design-cloud.co",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120"
    },
    tags: ["SDK Emulator", "CSS Theming", "Embed Widget"],
    assignee: {
      name: "Sarah Jenkins",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120"
    },
    comments: [
      {
        id: "c3",
        author: {
          name: "Elena Rostova",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120",
          isStaff: false
        },
        content: "If we can style this with our exact color theme, we can deprecate our custom feedback system entirely.",
        createdAt: "2026-05-15T09:00:00Z"
      }
    ]
  },
  {
    id: "fb-103",
    title: "Aggregate feedback values indexed by ARR metric",
    description: "We want our feedback list to show a secondary revenue index. If a major user requests a bug fix, we need to sort our roadmap cards by their annual recurring revenue contribution pulled from Salesforce.",
    status: "Shipped",
    priority: "High",
    votes: 512,
    category: "Feature Request",
    createdAt: "2026-05-10T11:45:00Z",
    user: {
      name: "Jonathan Riggs",
      email: "jriggs@fintech-flows.com",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120"
    },
    tags: ["Salesforce Integration", "Revenue Priority", "Metrics"],
    assignee: {
      name: "Carla Diaz",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120"
    },
    comments: [
      {
        id: "c4",
        author: {
          name: "Carla Diaz",
          avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120",
          isStaff: true
        },
        content: "This is now fully integrated with our Salesforce CRM Connector! Go to Settings -> Salesforce and activate the 'ARR Roadmap Sort' metric.",
        createdAt: "2026-05-12T16:20:00Z"
      }
    ]
  },
  {
    id: "fb-104",
    title: "Markdown table editor inside changelog creator",
    description: "Writing complex changelogs requires clean tables to lay out technical schema updates. Let us insert custom markdown tables directly into the WYSIWYG editor.",
    status: "Shipped",
    priority: "Low",
    votes: 94,
    category: "UX Choice",
    createdAt: "2026-05-04T14:22:00Z",
    user: {
      name: "Sanjay Patel",
      email: "sanjay@devops-cloud.io",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=120"
    },
    tags: ["Changelog Maker", "WYSIWYG", "Markdown formatting"],
    assignee: {
      name: "Sarah Jenkins",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120"
    },
    comments: [
      {
        id: "c5",
        author: {
          name: "Sarah Jenkins",
          avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120",
          isStaff: true
        },
        content: "Released this in v2.1.0! You can now use standard GFM table structures directly inside your content cells.",
        createdAt: "2026-05-05T09:30:00Z"
      }
    ]
  },
  {
    id: "fb-105",
    title: "Slack notification broadcasts on priority changes",
    description: "Trigger customizable Slack channel alerts whenever an engineering manager raises an item priority to 'High' or transitions an item to 'In progress' so internal sales circles can notify key accounts.",
    status: "Planned",
    priority: "Medium",
    votes: 167,
    category: "Integration",
    createdAt: "2026-05-01T09:15:00Z",
    user: {
      name: "Chloe Dupont",
      email: "chloe@success-saas.fr",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=120"
    },
    tags: ["Slack SDK", "Event Notification", "Automation"],
    assignee: {
      name: "Marcus Vance",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120"
    },
    comments: []
  },
  {
    id: "fb-106",
    title: "Infinite horizontal scroll inside interactive roadmaps",
    description: "When dragging cards across Kanban roadmap boards, high-density views currently break viewport boundaries. Need horizontal auto-scrolling on side collisions.",
    status: "In progress",
    priority: "Low",
    votes: 43,
    category: "UX Choice",
    createdAt: "2026-04-28T16:00:00Z",
    user: {
      name: "Aisha Mwangi",
      email: "aisha@novacom.co.ke",
      avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=120"
    },
    tags: ["Roadmaps Page", "Kanban dragging", "UX Repair"],
    assignee: {
      name: "Marcus Vance",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120"
    },
    comments: []
  },
  {
    id: "fb-107",
    title: "Critical permission leak: SSO groups skipping workspace layers",
    description: "Enterprise OKTA groups occasionally bypass isolated sub-project boundaries under complex multi-tier nesting rules. Re-route SSO token verification logic.",
    status: "New",
    priority: "High",
    votes: 112,
    category: "Bug Report",
    createdAt: "2026-05-22T08:00:00Z",
    user: {
      name: "Robert Miller",
      email: "miller.r@secops-hub.net",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=120"
    },
    tags: ["Security", "SSO Okta", "Leaked Boundary"],
    assignee: {
      name: "Sarah Jenkins",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120"
    },
    comments: [
      {
        id: "c6",
        author: {
          name: "Sarah Jenkins",
          avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120",
          isStaff: true
        },
        content: "Confirming we have triaged this security ticket. We are investigating our OAuth groups resolver logic. A patch will go live tonight.",
        createdAt: "2026-05-22T10:15:00Z"
      }
    ]
  },
  {
    id: "fb-108",
    title: "Bulk update status for nested tag selections",
    description: "Provide select-rows checkboxes in the dashboard so managers can transition 50 items from 'Planned' to 'In progress' with a single hotkey or dropdown click.",
    status: "New",
    priority: "Low",
    votes: 28,
    category: "Feature Request",
    createdAt: "2026-05-20T12:00:00Z",
    user: {
      name: "Tina Vance",
      email: "tina@saas-builder.com",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=120"
    },
    tags: ["Bulk Actions", "Multi-Select", "Productivity"],
    comments: []
  },
  {
    id: "fb-109",
    title: "Support for multi-tenant localization and translation sheets",
    description: "Allow translating the front-facing customer boards into French, German, Spanish, and Japanese based on merchant browser preferences automatically.",
    status: "Planned",
    priority: "Low",
    votes: 185,
    category: "Feature Request",
    createdAt: "2026-04-15T11:20:00Z",
    user: {
      name: "Dieter Schmidt",
      email: "dieter@shoppy-infra.de",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=120"
    },
    tags: ["Localization", "Multilingual", "UX Translation"],
    assignee: {
      name: "Carla Diaz",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120"
    },
    comments: []
  },
  {
    id: "fb-110",
    title: "Console crash on duplicating release logs in Safari 15",
    description: "When editors double-click 'Publish' in Safari 15, the draft session creates two adjacent entries, crashing the browser renderer frame state.",
    status: "Shipped",
    priority: "Medium",
    votes: 56,
    category: "Bug Report",
    createdAt: "2026-03-12T15:30:00Z",
    user: {
      name: "Naoki Tanaka",
      email: "tanaka@infra-ecom.jp",
      avatar: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&q=80&w=120"
    },
    tags: ["Safari Glitch", "State Collision", "Crash Fix"],
    assignee: {
      name: "Sarah Jenkins",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120"
    },
    comments: []
  }
];
