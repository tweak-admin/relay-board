/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { useSEO } from "../hooks/useSEO";

export default function Privacy() {
  useSEO({
    title: "Privacy Charter & Data Commitments",
    description: "Read our privacy commitments. Learn how Relayboard isolates customer feedback data and limits exposure to analytical metrics."
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-8 font-sans">
      <div className="space-y-2 border-b border-gray-150 pb-6 text-center lg:text-left">
        <span className="text-xs font-bold font-mono tracking-widest text-brand-650 uppercase">LEGAL WORKSPACE</span>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950">
          Relayboard Privacy Charter
        </h1>
        <p className="text-xs text-gray-400 font-mono">Last modified: May 24, 2026</p>
      </div>

      <div className="markdown-body text-gray-700 space-y-6">
        <h2>1. Transparent data principles</h2>
        <p>At Relayboard, we believe that B2B SaaS data must be isolated, protected, and fully accounted for. This Privacy Charter describes our patterns for collecting, storing, separating, and auditing coordinates and contact entries mapped inside our prioritizing tables.</p>

        <h2>2. Information we aggregate</h2>
        <p>When you register for a sandboxed trial or authorize OAuth plugins (including Jira Software, Salesforce CRM, HubSpot, and Slack integrations), our system maps standard coordinates:</p>
        <ul>
          <li><strong>Workspace Profiles:</strong> Name, Email, billing indices, SLA models, and team sizes.</li>
          <li><strong>Integrated Metadata:</strong> opportunity values, company domain extensions, issue priorities, commenter names, and contract recurring ARR metrics.</li>
          <li><strong>Telemetry logs:</strong> IP addresses, interactive dashboard click metrics, page scrolling anchors, and dropdown action references.</li>
        </ul>

        <h2>3. Separation of tenant vaults</h2>
        <p>We leverage strict Row-Level Security database rules and tenant namespaces of our Firestore or Cloud databases to fully isolate customer entries. Your logs, comments, voter lists, and private priorities are never combined with other corporate workspaces.</p>

        <h2>4. Data retention and deletion charters</h2>
        <p>We preserve workspace structures for the operational lifetime of your active subscription. Upon cancellation, customers can issue a direct 'purge-tenant' hotkey inside the Settings board. We fully scrub database volumes, storage vaults, and backup registries in less than 30 calendar days.</p>

        <h2>5. Compliance and SOC2 credentials</h2>
        <p>Relayboard undergoes annual security compliance reviews. We protect API connection tokens, SSO sessions, and custom domain names under cryptographically rotated keys aligned with SOC2 standards.</p>
      </div>
    </div>
  );
}
