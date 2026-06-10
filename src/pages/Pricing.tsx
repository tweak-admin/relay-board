/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Check, HelpCircle, Sparkles, Sliders, Shield, Zap } from "lucide-react";
import { Button, Switch, AccordionItem } from "../components/ui";
import { useSEO } from "../hooks/useSEO";
import { useGlobalActions } from "../layouts/SiteLayout";

const FAQS = [
  {
    title: "How does the Salesforce direct ARR synchronization compute scores?",
    content: "Once you authorize our Salesforce OAuth connector in team settings, Relayboard securely reads metadata from active account opportunities. It clusters upvotes from different users under their specific corporate domain, and sums up the total annual recurring revenues directly associated with their subscription contracts, updating your feedback priority metrics in real-time."
  },
  {
    title: "Is customer data separate and isolated? Do you support SSO?",
    content: "Yes, Relayboard uses strict Row-Level Security database separations and tenant identifiers to keep feedback databases fully isolated. Enterprise tiers can easily map their single sign-on parameters via Okta, Google Workspace, Azure AD, or custom SAML providers in less than five minutes."
  },
  {
    title: "What happens if our clients upvote identical features across multiple lines?",
    content: "Our AI duplication engine automatically flags matching keywords, semantic descriptions, and client messages. Product Managers can review these recommended matches inside their dashboard with a single click—permitting you to merge duplications without losing original comments or individual voter references."
  },
  {
    title: "Can we style the public roadmap board to match our exact brand guidelines?",
    content: "Absolutely! The Growth and Enterprise tiers include full color personalization. You can upload custom icons, map matching brand color hex-codes, host the board under your own custom domain (e.g., roadmap.yourcompany.com), and inject custom stylesheets."
  },
  {
    title: "What is your refund policy? Can we cancel at any time?",
    content: "Yes! There are no long-term locks or cancellation charges on our standard Starter and Growth tiers. If you decides to cancel, you have full access to export your consolidated data in standard CSV and JSON schemas. We provide prorated balances for annual subscribers."
  }
];

export default function Pricing() {
  useSEO({
    title: "SaaS Pricing models & FAQ Accordion",
    description: "Review simple, transparent pricing brackets for Relayboard starting at $39/mo. Explore Starter, Growth, and high-security Enterprise SaaS editions."
  });

  const [isAnnual, setIsAnnual] = useState(true);
  const { openDemoModal } = useGlobalActions();

  // Price calculations based on annual switch
  const starterPrice = isAnnual ? 39 : 49;
  const growthPrice = isAnnual ? 99 : 129;

  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER BAND */}
      <section className="bg-gray-50 border-b border-gray-150 py-16 lg:py-24" aria-label="Pricing Introduction">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold font-mono tracking-widest text-brand-600 bg-brand-50 border border-brand-100 uppercase">
            SaaS SUBSCRIPTIONS
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 max-w-4xl mx-auto leading-none">
            Simple, honest pricing for scale product teams.
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Choose a plan that fits your sprint volume. Start testing features today inside our interactive 14-day full sandbox.
          </p>

          {/* MONTHLY / ANNUAL SWITCH */}
          <div className="pt-6 flex items-center justify-center space-x-4">
            <span className={`text-xs font-semibold ${!isAnnual ? "text-gray-900" : "text-gray-400"}`}>Billed Monthly</span>
            <Switch
              checked={isAnnual}
              onChange={(checked) => setIsAnnual(checked)}
              label=""
            />
            <div className="flex items-center space-x-2">
              <span className={`text-xs font-semibold ${isAnnual ? "text-gray-900" : "text-gray-400"}`}>Billed Annually</span>
              <span className="inline-flex px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-100 text-emerald-800 leading-none">
                SAVE OVER 20%
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3 TIERS BRACKETS */}
      <section className="py-20 lg:py-32 bg-white" aria-label="SaaS Tiers Grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
            {/* Starter Plan */}
            <div className="bg-white border border-gray-150 rounded-2xl p-8 flex flex-col justify-between shadow-xs hover:border-gray-300 transition-all">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-bold font-mono tracking-widest text-gray-400 uppercase leading-none">Starter Pack</h3>
                  <p className="font-display text-lg font-bold text-gray-900 mt-2.5">For early-stage SaaS squads</p>
                </div>

                <div className="flex items-baseline text-neutral-900">
                  <span className="text-5xl font-extrabold tracking-tight">${starterPrice}</span>
                  <span className="ml-1 text-sm text-gray-400 font-semibold">/ month</span>
                </div>
                <p className="text-xs text-gray-450 leading-tight">
                  {isAnnual ? "Billed annually ($468 total)" : "Billed monthly, cancel anytime"}
                </p>

                <div className="border-t border-gray-100 pt-6 space-y-4">
                  <p className="text-xs font-bold uppercase text-gray-400 tracking-wider">Plan includes:</p>
                  <ul className="space-y-3">
                    {[
                      "Up to 250 active customer upvotes",
                      "Standard Jira and Linear sync connector",
                      "Clean interactive roadmap board",
                      "Automated Email notification updates"
                    ].map((feature) => (
                      <li key={feature} className="flex items-start space-x-2 text-xs">
                        <Check className="h-4.5 w-4.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-gray-600 font-medium leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <Button variant="secondary" className="w-full h-11 justify-center rounded-xl" onClick={openDemoModal}>
                  Start Starter Sandbox
                </Button>
              </div>
            </div>

            {/* Growth Plan (Popular Option) */}
            <div className="bg-white border-2 border-brand-600 rounded-2xl p-8 flex flex-col justify-between shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-brand-650 text-white text-[10px] font-bold font-mono tracking-wider px-4 py-1.5 rounded-bl-xl uppercase leading-none">
                ⭐️ Most popular
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-bold font-mono tracking-widest text-brand-600 uppercase leading-none">Growth Suite</h3>
                  <p className="font-display text-lg font-bold text-gray-900 mt-2.5">For scaling mid-market products</p>
                </div>

                <div className="flex items-baseline text-neutral-900">
                  <span className="text-5xl font-extrabold tracking-tight text-brand-700">${growthPrice}</span>
                  <span className="ml-1 text-sm text-gray-400 font-semibold">/ month</span>
                </div>
                <p className="text-xs text-brand-900/60 font-semibold leading-tight">
                  {isAnnual ? "Billed annually ($996 total)" : "Billed monthly, cancel anytime"}
                </p>

                <div className="border-t border-gray-100 pt-6 space-y-4">
                  <p className="text-xs font-bold uppercase text-brand-700/60 tracking-wider">Plan includes:</p>
                  <ul className="space-y-3">
                    {[
                      "Unlimited customer votes & comments",
                      "All Starter features included",
                      "Salesforce ARR integration weighted priorities",
                      "AI auto-clustering feedback duplicates",
                      "Custom CSS brand domain hostings"
                    ].map((feature) => (
                      <li key={feature} className="flex items-start space-x-2 text-xs">
                        <Check className="h-4.5 w-4.5 text-brand-600 shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-medium leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <Button variant="primary" className="w-full bg-neutral-950 hover:bg-neutral-850 h-11 justify-center rounded-xl shadow-md text-white font-semibold" onClick={openDemoModal}>
                  Start 14-Day Free Growth Trial
                </Button>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-neutral-950 border border-neutral-900 text-white rounded-2xl p-8 flex flex-col justify-between shadow-xl hover:border-neutral-800 transition-all">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-bold font-mono tracking-widest text-brand-400 uppercase leading-none">Enterprise</h3>
                  <p className="font-display text-lg font-bold text-gray-200 mt-2.5">For high-security operations</p>
                </div>

                <div className="flex items-baseline text-white">
                  <span className="text-5xl font-extrabold tracking-tight">Custom</span>
                </div>
                <p className="text-xs text-gray-450 leading-tight font-medium">
                  Tailored SLA models & SOC2 compliance
                </p>

                <div className="border-t border-neutral-900 pt-6 space-y-4">
                  <p className="text-xs font-bold uppercase text-brand-300 tracking-wider">Plan includes:</p>
                  <ul className="space-y-3">
                    {[
                      "Dedicated database clusters (isolated tenant schema)",
                      "Single sign-on alignments (Okta, Azure AD)",
                      "SOC2 compliance and dedicated account CSA",
                      "Custom enterprise legal & data policies",
                      "Unlimited seats for all team PMs"
                    ].map((feature) => (
                      <li key={feature} className="flex items-start space-x-2 text-xs">
                        <Check className="h-4.5 w-4.5 text-teal-400 shrink-0 mt-0.5" />
                        <span className="text-gray-300 font-medium leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <Button variant="primary" className="w-full bg-white hover:bg-gray-100 text-neutral-950 h-11 justify-center rounded-xl font-bold" onClick={openDemoModal}>
                  Request Enterprise Architecture Presentation
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ ACCORDION SECTION (Edge Case 3) */}
      <section className="bg-gray-50 py-20 lg:py-32 border-t border-gray-150" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4">
            <h2 id="faq-heading" className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-950">
              Pricing & Platform FAQs
            </h2>
            <p className="text-sm text-gray-500">
              Everything you need to understand regarding Salesforce links, custom CSS variables, SLA structures, and database separations.
            </p>
          </div>

          <div className="bg-white border border-gray-150 rounded-2xl p-6 md:p-8 shadow-xs divide-y divide-gray-100">
            {FAQS.map((faq, index) => (
              <AccordionItem key={faq.title} title={faq.title} isOpenDefault={index === 0}>
                <p className="text-gray-600 leading-relaxed text-sm">{faq.content}</p>
              </AccordionItem>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
