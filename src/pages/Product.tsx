/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, Layers, Sliders, Zap, MessageSquare, Shield, Check, Minus } from "lucide-react";
import { Button } from "../components/ui";
import { useSEO } from "../hooks/useSEO";
import { useGlobalActions } from "../layouts/SiteLayout";

const COMPARISON_ROWS = [
  {
    feature: "Aggregate Multi-Channel Feedbacks",
    relayboard: { status: "full", text: "Zendesk, Slack, Salesforce feed in real-time" },
    spreadsheets: { status: "none", text: "Manual copy-pasting required" },
    emails: { status: "none", text: "Fragmented in individual mailboxes" }
  },
  {
    feature: "CRM Contract Value Gewichtung",
    relayboard: { status: "full", text: "Automated ARR synchronization & sorting" },
    spreadsheets: { status: "none", text: "Must manual map contract numbers monthly" },
    emails: { status: "none", text: "No connection with contract statistics" }
  },
  {
    feature: "2-Way Jira & Linear Syncing",
    relayboard: { status: "full", text: "Change status inside Jira; updates board natively" },
    spreadsheets: { status: "none", text: "Completely manual status updates" },
    emails: { status: "none", text: "Must reply individually to customers" }
  },
  {
    feature: "Automated Duplicate Grouping",
    relayboard: { status: "full", text: "AI clusters similar feedback automatically" },
    spreadsheets: { status: "none", text: "Zero deduplication checks" },
    emails: { status: "none", text: "Support queue floods with duplicate entries" }
  },
  {
    feature: "Public Release Logs (Changelog)",
    relayboard: { status: "full", text: "Interactive releases connected to jira tasks" },
    spreadsheets: { status: "none", text: "Requires separate website content editors" },
    emails: { status: "none", text: "No permanent public record published" }
  }
];

export default function Product() {
  useSEO({
    title: "Product Features & Priority Boards",
    description: "Explore Relayboard's core capabilities: Two-way Jira sync, automated duplicate grouping, Salesforce contract value weighting, and polished changelog templates."
  });

  const { openDemoModal } = useGlobalActions();

  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER SECTION HEADER banner */}
      <section className="bg-gray-50 border-b border-gray-150 py-16 lg:py-24" aria-label="Feature Introduction">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <BadgeComponent>THE PLATFORM</BadgeComponent>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 max-w-4xl mx-auto leading-none">
            Built for squads that prioritize on metrics—not guesswork.
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Relayboard brings professional discipline to your product roadmap. Consolidate every client suggestion into one secure, clean development ledger.
          </p>
          <div className="pt-2 flex justify-center items-center gap-4">
            <Button variant="primary" size="lg" onClick={openDemoModal} className="rounded-xl">
              Start Free Trial
            </Button>
            <Link to="/demo" className="text-sm font-semibold text-brand-600 hover:text-brand-700 flex items-center space-x-1">
              <span>Try Interactive Sandbox</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. ALTERNATING FEATURE BLOCKS */}
      <section className="py-20 lg:py-32 bg-white" aria-label="Core Features Details">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28 lg:space-y-40">
          
          {/* Feature 1: Multi-Channel Consolidation with NESTED LAYOUT DEPTH */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <BadgeComponent>01 / AGGREGATION</BadgeComponent>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight leading-tight">
                Consolidate and group requests without fragmentation
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Stop jumping between Slack, Salesforce notes, Zendesk tickets, and shared developer logs. Relayboard groups overlapping suggestions and matches incoming feedback files in standard formats automatically.
              </p>
              
              <ul className="space-y-3">
                {[
                  "Fuzzy matching identifies duplicate reports instantly",
                  "Merge identical support cases under single primary tickets",
                  "Preserve raw individual customer messages inside aggregated cards"
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-2.5 text-xs sm:text-sm text-gray-700 font-medium">
                    <Check className="h-4.5 w-4.5 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* NESTED LAYOUT DEPTH COMPONENT VIEW: Grouping items (Edge Case 1) */}
            <div className="lg:col-span-7 bg-gray-50 border border-gray-150 rounded-2xl p-6 lg:p-8">
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-xs space-y-5">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <span className="text-xs font-mono font-bold text-gray-400">AI CLUSTERING ACTION</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-100 text-indigo-800">Merge complete</span>
                </div>

                <div className="space-y-3">
                  <p className="text-xs font-bold text-gray-750">Unified Feature Request:</p>
                  <p className="text-sm font-semibold text-gray-900 leading-snug">Two-way synchronization for custom Salesforce ticket parameters</p>
                </div>

                {/* Nested Grid (Grid inside deep card inside section) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="bg-gray-50 border border-gray-150 p-3 rounded-lg space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-gray-500">Acme Enterprise</span>
                      <span className="text-[10px] font-mono font-bold bg-green-50 text-green-700 px-1 py-0.2">$64k ARR</span>
                    </div>
                    <p className="text-xs text-gray-600 leading-tight">“We need standard mapped sales fields connected with roadmap tags...”</p>
                  </div>

                  <div className="bg-gray-50 border border-gray-150 p-3 rounded-lg space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-gray-500">Nova Global Ltd</span>
                      <span className="text-[10px] font-mono font-bold bg-green-50 text-green-700 px-1 py-0.2">$120k ARR</span>
                    </div>
                    <p className="text-xs text-gray-600 leading-tight">“Merging active accounts with priority parameters is key for renewals...”</p>
                  </div>
                </div>

                <div className="text-xs text-gray-400 font-medium font-mono text-center pt-2">
                  Total rolling metrics score: 18 Voters • $184k Target Contract Value
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2: Weighting with Salesforce CRM */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Frame First */}
            <div className="lg:col-span-7 lg:order-2 space-y-6">
              <BadgeComponent>02 / PRIORITIZATION</BadgeComponent>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight leading-tight">
                Prioritize by ARR and customer renewal dates
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Avoid prioritizing a client request simply because it has fifty votes from non-paying trial accounts. Connect Salesforce, map total account values to tickets, and sort your product lines based on real business impact.
              </p>
              
              <ul className="space-y-3">
                {[
                  "Calculate total impacted ARR across active feedback lines",
                  "Identify blocker tags registered by customers with upcoming renewals",
                  "Audit priority lists before planning strategic development sprints"
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-2.5 text-xs sm:text-sm text-gray-700 font-medium">
                    <Check className="h-4.5 w-4.5 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Box Second */}
            <div className="lg:col-span-5 lg:order-1 bg-gray-50 border border-gray-150 rounded-2xl p-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold text-gray-400">FINANCIAL SCORE ENGINE</span>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-semibold text-gray-500">
                    <span>Rank by total votes</span>
                    <span>Rank by contract value</span>
                  </div>
                  {/* Slider simulation */}
                  <div className="relative h-2 w-full bg-gray-200 rounded-full">
                    <div className="absolute top-0 left-0 w-2/3 h-full bg-neutral-900 rounded-full" />
                    <div className="absolute top-1/2 left-2/3 h-4.5 w-4.5 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full border border-gray-400 shadow-sm" />
                  </div>
                </div>

                <div className="space-y-2.5 pt-4">
                  <div className="p-3 bg-white border border-gray-200 rounded-xl flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-700 leading-none">ARR Roadmap Weighted Sort</span>
                    <span className="text-xs font-mono font-extrabold text-brand-650">+$1.42M ARR Block</span>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-700 leading-none">Average Client Churn Protection</span>
                    <span className="text-xs font-mono font-extrabold text-teal-650">v94.8% Shield</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Two-Way Sync / Jira Integration */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <BadgeComponent>03 / EXECUTION</BadgeComponent>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight leading-tight">
                Engineering-aligned: Two-Way Jira synchronization
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Product Managers shouldn't spend half their weekends copy-pasting customer updates into Jira Epics. With Relayboard, issues and votes stay connected; updating statuses inside Jira automatically notifies client circles.
              </p>
              
              <ul className="space-y-3">
                {[
                  "Jira status changes propagate to voting cards in seconds",
                  "Automated webhook syncing prevents state misalignment",
                  "Engineers focus fully on code without leaving Jira environments"
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-2.5 text-xs sm:text-sm text-gray-700 font-medium">
                    <Check className="h-4.5 w-4.5 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-7 bg-gray-50 border border-gray-150 rounded-2xl p-6 lg:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-3">
                  <span className="text-[10px] font-bold font-mono text-gray-400">RELAYBOARD CONTROL</span>
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-gray-700 leading-none">Item #fb-101</p>
                    <p className="text-sm font-semibold text-gray-900">Jira Sync Engine</p>
                  </div>
                  <span className="inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">Planned</span>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-3 relative overflow-hidden">
                  <div className="absolute top-0 right-0 h-10 w-10 bg-indigo-50 flex items-center justify-center rounded-bl-xl text-lg select-none">⚡</div>
                  <span className="text-[10px] font-bold font-mono text-gray-400">JIRA ISSUE CONVERSIONS</span>
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-gray-700 leading-none">JIRA-7448</p>
                    <p className="text-sm font-semibold text-gray-900">Enable Auth Webhooks</p>
                  </div>
                  <span className="inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">In Progress</span>
                </div>
              </div>
              <p className="text-xs text-gray-450 font-medium font-mono text-center mt-5 leading-relaxed">
                Active bidirectional webhooks bridging Relayboard structures natively with Jira core services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMPARISON SECTION MATRIX TABLE */}
      <section className="bg-gray-50 py-20 lg:py-32 border-t border-b border-gray-150" aria-labelledby="comparison-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 id="comparison-heading" className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950">
              How Relayboard compares
            </h2>
            <p className="text-base sm:text-lg text-gray-650">
              Why using Google Sheets or standard support ticketing channels is leaking high-value enterprise accounts.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-neutral-950 text-white font-mono">
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider">Features</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-brand-300">Relayboard B2B SaaS</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider">Spreadsheets</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider">Email Channels</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-150 text-sm">
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.feature} className="hover:bg-gray-55/40 transition-colors">
                    <td className="px-6 py-4.5 font-bold text-gray-950">{row.feature}</td>
                    
                    {/* Relayboard value props */}
                    <td className="px-6 py-4.5 bg-brand-50/20 text-brand-950 font-medium">
                      <div className="flex items-center space-x-2">
                        <Check className="h-5 w-5 text-brand-600 shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold">{row.relayboard.text}</span>
                      </div>
                    </td>

                    {/* Spreadsheets values */}
                    <td className="px-6 py-4.5 text-gray-500">
                      <div className="flex items-center space-x-2">
                        <Minus className="h-4.5 w-4.5 text-gray-300 shrink-0" />
                        <span className="text-xs">{row.spreadsheets.text}</span>
                      </div>
                    </td>

                    {/* Email values */}
                    <td className="px-6 py-4.5 text-gray-500">
                      <div className="flex items-center space-x-2">
                        <Minus className="h-4.5 w-4.5 text-gray-300 shrink-0" />
                        <span className="text-xs">{row.emails.text}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FOOTER CTA BAR */}
      <section className="bg-white py-16 lg:py-24 text-center space-y-6" aria-label="Product CTA">
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight leading-none">
          Ready to consolidate your roadmap?
        </h2>
        <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
          Unlock standard prioritization, interactive dashboards, and automatic release logs in minutes.
        </p>
        <div className="flex justify-center items-center gap-4">
          <Button variant="primary" size="lg" onClick={openDemoModal} className="rounded-xl">
            Book Live Setup
          </Button>
          <Link to="/pricing" className="text-sm font-semibold text-gray-700 hover:text-neutral-900 border border-gray-200 bg-white shadow-xs px-5 py-2.5 rounded-xl transition-all h-11 inline-flex items-center">
            SaaS pricing models
          </Link>
        </div>
      </section>
    </div>
  );
}

// Internal reusable helper components
const BadgeComponent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold font-mono tracking-widest text-brand-600 bg-brand-50 border border-brand-100 uppercase">
    {children}
  </span>
);
