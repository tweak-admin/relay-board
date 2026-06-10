/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Types for Blog Posts
export interface BlogPost {
  title: string;
  slug: string;
  summary: string;
  contentHtml: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  category: string;
  coverImage: string;
  featured?: boolean;
}

// Types for Changelog Entries
export interface ChangelogItem {
  id: string;
  version: string;
  title: string;
  publishedAt: string; // ISO String (e.g. 2026-05-15)
  category: "Feature" | "Improvement" | "Fix";
  description: string;
  changes: string[]; // List of detailed bullet points
  author: {
    name: string;
    avatar: string;
  };
}

// Types for Case Studies
export interface CaseStudy {
  slug: string;
  companyName: string;
  logo: string;
  industry: string;
  size: string;
  metric: string;
  metricLabel: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string;
  quote: {
    text: string;
    author: string;
    role: string;
    avatar: string;
  };
  details: {
    narrative: string;
    stats: { value: string; label: string }[];
    galleryImages?: string[];
    videoEmbedUrl?: string; // For Nova's layout, standard YouTube/Vimeo embed placeholder
  };
}

// Types for Careers / Job Listings
export interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string; // Full-time, etc.
  salaryRange: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
}

// Types for Feedback items in Demo Dashboard
export interface FeedbackItem {
  id: string;
  title: string;
  description: string;
  status: "New" | "Planned" | "In progress" | "Shipped";
  priority: "Low" | "Medium" | "High";
  votes: number;
  userVoted?: boolean;
  category: "Feature Request" | "Bug Report" | "Integration" | "UX Choice";
  createdAt: string;
  user: {
    name: string;
    email: string;
    avatar: string;
  };
  comments: FeedbackComment[];
  tags: string[];
  assignee?: {
    name: string;
    avatar: string;
  };
}

export interface FeedbackComment {
  id: string;
  author: {
    name: string;
    avatar: string;
    isStaff: boolean;
  };
  content: string;
  createdAt: string;
}
