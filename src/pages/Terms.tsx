/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { useSEO } from "../hooks/useSEO";

export default function Terms() {
  useSEO({
    title: "Terms of Service Charter",
    description: "Review standard Relayboard SaaS subscription terms, API connection clauses, billing cycles, and legal liability limits."
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-8 font-sans">
      <div className="space-y-2 border-b border-gray-150 pb-6 text-center lg:text-left">
        <span className="text-xs font-bold font-mono tracking-widest text-brand-650 uppercase">LEGAL WORKSPACE</span>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950">
          SaaS Terms of Service
        </h1>
        <p className="text-xs text-gray-400 font-mono">Last modified: May 24, 2026</p>
      </div>

      <div className="markdown-body text-gray-700 space-y-6">
        <h2>1. Agreement to terms</h2>
        <p>By registering for a standard trial, exploring our live interactive demo, or purchasing a subscription plan for Relayboard, you agree to be bound by these Terms of Service. If you do not agree, you are forbidden from creating sandboxed workspaces or using our SDK connectors.</p>

        <h2>2. License grants & subscription scopes</h2>
        <p>Subject to timely payments of standard monthly or annual billing options, Relayboard grants a non-exclusive, non-transferable, revocable license to access our online priority boards, roadmap components, and automated changelog generators. Starter, Growth, and Enterprise plans define seat and upvote limits.</p>

        <h2>3. Authorized SDK use & API connection limits</h2>
        <p>You may authorize Okta single sign-on, Jira webhook pools, Linear integrations, and Salesforce CRM fields solely to synchronize feedback priorities inside your active company domains. Using automatic scripts or scrapers to flood voting boards is a strict breach of this charter.</p>

        <h2>4. User content & database representations</h2>
        <p>Our customers retain full ownership of copyrights and datasets submitted into their prioritized registers. By uploading logs, comments, or company avatars, you grant Relayboard a worldwide, royalty-free license to store, parse, index, and render those items solely on your behalf.</p>

        <h2>5. Limitation of liability</h2>
        <p>Relayboard provides services on an 'as is' and 'as available' basis. To the maximum extent permitted by law, Relayboard shall not be liable for any direct, indirect, incidental, or consequential damages resulting from connection failures or data migrations.</p>
      </div>
    </div>
  );
}
