/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, CheckSquare, Layers, Shield, Zap, ChevronLeft, ChevronRight, MessageSquare, Sliders, ExternalLink } from "lucide-react";
import { Button } from "../components/ui";
import { useSEO } from "../hooks/useSEO";
import { useGlobalActions } from "../layouts/SiteLayout";

const CLIENT_LOGOS = [
  { name: "Acme Corp", metric: "42% less churn" },
  { name: "Nova Global", metric: "3.5x faster releases" },
  { name: "SaaSify", metric: "3,000+ tickets merged" },
  { name: "Linearis", metric: "Zero lost insights" },
  { name: "Syncly", metric: "12 hours saved/mo" }
];

const INTEGRATIONS = [
  { name: "Jira Sync", desc: "Two-way mapping on comments & states", icon: "⚙️", color: "text-blue-500 bg-blue-50" },
  { name: "Slack Link", desc: "Broadcast logs on state changes", icon: "💬", color: "text-purple-600 bg-purple-50" },
  { name: "Salesforce ARR", desc: "Sort roadmap items by contract value", icon: "📊", color: "text-sky-500 bg-sky-50" },
  { name: "HubSpot Leads", desc: "Link ticket requests with growth metrics", icon: "💡", color: "text-orange-500 bg-orange-50" },
  { name: "GitHub Hooks", desc: "Reference code commits in releases", icon: "💻", color: "text-neutral-700 bg-neutral-100" },
  { name: "Zendesk Feed", desc: "Aggregate support requests automatically", icon: "🎫", color: "text-emerald-600 bg-emerald-50" }
];

const TESTIMONIALS = [
  {
    quote: "With Relayboard, our product and engineering teams are in perfect harmony. We eliminated our messy spreadsheets and started prioritizing roadmap cards linked to real CRM contract values. We've seen a 42% decrease in churn.",
    author: "Evelyn Sterling",
    role: "VP of Product, Acme Corp",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120"
  },
  {
    quote: "Our merchants feel completely co-prioritized in Nova's future plans. Using Relayboard to maintain our interactive roadmaps has skyrocketed our customer confidence. It is easily the best system in our SaaS stack.",
    author: "Julio Valenzuela",
    role: "Chief Technology Officer, Nova Global",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120"
  },
  {
    quote: "We used to lose 5 hours per week manually matching ticketing queries out of Jira. Relayboard solved this entirely with its native two-way sync engine. Highly recommended for growth scale SaaS teams.",
    author: "Marcus Vance",
    role: "Product Lead, Linearis Corp",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=120"
  }
];

export default function Home() {
  useSEO({
    title: "Customer Feedback & Roadmaps B2B SaaS",
    description: "Connect customer feedback natively with your Jira sprint lines and Salesforce ARR values. Ship what customers actually asked for."
  });

  const { openDemoModal } = useGlobalActions();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. DARK HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-32 border-b border-gray-150 minimalist-grid-bg" aria-label="Hero Section">
        {/* Decorative blobs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-500/5 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          {/* Badge marker */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-brand-100 border border-brand-200 rounded-full mb-6 font-semibold animate-fade-in text-brand-700">
            <span className="flex h-2 w-2 rounded-full bg-brand-600"></span>
            <span className="text-[11px] font-bold uppercase tracking-wider">RELAYBOARD v2.4.0: NEW SLACK INTEGRATION</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-7.5xl font-extrabold tracking-tight max-w-5xl mx-auto leading-[1.05] text-gray-900">
            Ship what customers <br /> <span className="text-brand-600">actually asked for.</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-normal">
            Relayboard aggregates feedback channels, automatically scores requests by active CRM contract metrics, and updates Jira issues natively. Close the loop without human lag.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto bg-gray-950 text-white hover:bg-gray-850 font-semibold text-sm h-12 shadow-md rounded-full px-8 transition-all"
              onClick={openDemoModal}
            >
              Start Free Trial
            </Button>
            <Link
              to="/demo"
              className="w-full sm:w-auto inline-flex items-center justify-center font-semibold text-sm border border-gray-200 bg-white hover:bg-gray-50 px-8 py-3 rounded-full text-gray-700 transition-colors duration-150 group h-12 shadow-sm"
            >
              <span>Explore Interactive Demo</span>
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform text-gray-400" />
            </Link>
          </div>

          {/* Social Proof Logos */}
          <div className="pt-12 border-t border-gray-150 mt-16 max-w-5xl mx-auto">
            <p className="text-xs font-bold font-mono tracking-widest text-gray-400 uppercase">
              TRUSTED BY HIGH-PERFORMANCE PM TEAMS WORLDWIDE
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 mt-6 opacity-60">
              {CLIENT_LOGOS.map((logo) => (
                <div key={logo.name} className="text-center group cursor-pointer hover:opacity-100 transition-opacity">
                  <p className="text-base font-bold font-display tracking-tight text-gray-900">{logo.name}</p>
                  <p className="text-[10px] font-mono text-brand-600 font-semibold">{logo.metric}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT PREVIEW BANNER (CSS BROWSER FRAME) */}
      <section className="bg-white py-12 lg:py-20 -mt-10 lg:-mt-16 relative z-10" aria-label="Interactive Product Preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl bg-white border border-gray-150 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden p-1.5 ring-1 ring-black/5 animate-in slide-in-from-bottom duration-500">
            {/* Browser Header Bar */}
            <div className="bg-gray-50 border-b border-gray-150 px-4 py-3 flex items-center justify-between shrink-0">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-405 bg-emerald-400" />
                <span className="text-xs bg-white border border-gray-150 text-gray-500 rounded-md px-3 py-1 ml-4 select-none font-mono tracking-tight">
                  dashboard.relayboard.com/acme-corp
                </span>
              </div>
              <div className="text-xs font-mono text-gray-400 hidden sm:block">
                Secure SSL • 256-bit
              </div>
            </div>

            {/* Simulated Desktop Preview Frame */}
            <div className="bg-white p-4 lg:p-6 text-gray-800 min-h-[300px] lg:min-h-[480px] flex flex-col justify-between rounded-b-xl select-none">
              <div className="flex justify-between items-center pb-4 border-b border-gray-150">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded-full bg-gray-950 text-white flex items-center justify-center text-xs font-bold leading-none">A</div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Acme Corporation</h4>
                    <p className="text-[10px] text-gray-400 font-mono">15 high-value enterprise accounts</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <span className="px-2.5 py-1 text-xs font-semibold bg-brand-100 text-brand-700 rounded-lg border border-brand-200">$1.4M ARR Tracked</span>
                  <span className="px-2.5 py-1 text-xs font-semibold bg-emerald-50 text-emerald-700 rounded-lg border border-emerald-100">Vetted</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 py-6">
                <div className="lg:col-span-2 space-y-3">
                  <h5 className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-none">ACTIVE PRIORITY BOARD</h5>
                  
                  {/* Feedback Item 1 */}
                  <div className="bg-gray-50 border border-gray-150 p-4 rounded-xl shadow-xs hover:border-gray-255 transition-all">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-brand-50 text-brand-700 border border-brand-200">Jira Syncing</span>
                        <h6 className="text-sm font-bold text-gray-900 mt-1.5">Two-way ticket state alignment</h6>
                      </div>
                      <span className="text-xs font-bold font-mono text-gray-400">Votes: 384</span>
                    </div>
                  </div>

                  {/* Feedback Item 2 */}
                  <div className="bg-gray-50 border border-gray-150 p-4 rounded-xl shadow-xs hover:border-gray-255 transition-all">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">Salesforce</span>
                        <h6 className="text-sm font-bold text-gray-900 mt-1.5">Consolidated ARR financial indexation</h6>
                      </div>
                      <span className="text-xs font-bold font-mono text-gray-400">Votes: 512</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-950 text-white p-5 rounded-2xl flex flex-col justify-between shadow-lg">
                  <div>
                    <h5 className="text-xs font-bold font-mono text-indigo-300 tracking-wider uppercase mb-3 text-brand-300">ROADMAP METRICS</h5>
                    <p className="text-3xl font-extrabold tracking-tight">42%</p>
                    <p className="text-xs text-gray-400 mt-1">Reduction in feature-gapsRelated client cancellations</p>
                  </div>
                  <div className="pt-4 border-t border-gray-800 mt-4">
                    <div className="flex items-center space-x-2 text-xs">
                      <Zap className="h-4 w-4 text-amber-400" />
                      <span className="text-gray-300">Updated 4 mins ago — Automated</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center pt-2">
                <Link to="/demo" className="inline-flex items-center space-x-1 text-sm font-semibold text-brand-600 hover:text-brand-700">
                  <span>Enter live interactive sandbox to play with dashboard controls</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THREE BENEFIT PILLARS */}
      <section className="bg-gray-50 py-20 lg:py-32" aria-labelledby="benefits-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 id="benefits-heading" className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950">
              Why leading product squads configure Relayboard
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Stop guessing what key accounts want. Connect feedback natively with Jira and Salesforce to prioritize by dollar value, not loud conversations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-white border border-gray-150 rounded-2xl p-8 shadow-xs space-y-4 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-violet-100 text-brand-600 flex items-center justify-center">
                <CheckSquare className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold tracking-tight text-neutral-950">
                1. Single Feedback Source
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Connect Zendesk, Intercom, Salesforce and internal Slack channels in minutes. Reconcile matching ideas automatically into unified, pre-filtered prioritization lists without losing transaction threads.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white border border-gray-150 rounded-2xl p-8 shadow-xs space-y-4 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center">
                <Sliders className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold tracking-tight text-neutral-950">
                2. Prioritize by Revenue Impact
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Weight your roadmap backlog automatically based on the Salesforce ARR value and NPS health scores of the vocal customers. Filter lists by renewal dates to guarantee high-value account alignment.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white border border-gray-150 rounded-2xl p-8 shadow-xs space-y-4 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold tracking-tight text-neutral-950">
                3. Automated Release Loop
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Trigger customized Slack alerts and emails directly to clients when upvoted items graduate to 'Shipped'. Instantly populate public, beautiful changelogs linked directly to Jira ticket closures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DRAG-FRIENDLY & ACCESSIBLE CAROUSEL */}
      <section className="bg-white py-20 lg:py-32" aria-labelledby="testimonial-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2">
            <h2 id="testimonial-heading" className="text-xs font-bold font-mono tracking-widest text-gray-400 uppercase">
              CLIENT TESTIMONIAL CAROUSEL
            </h2>
            <p className="font-display text-2xl sm:text-3xl font-extrabold text-neutral-950">
              Hear from our co-builders
            </p>
          </div>

          <div className="relative bg-gray-50 border border-gray-150 rounded-2xl p-8 lg:p-12 shadow-sm">
            {/* Nav Arrows */}
            <div className="absolute right-6 top-6 flex space-x-2">
              <button
                onClick={prevTestimonial}
                className="p-1.5 rounded-lg bg-white border border-gray-200 text-gray-600 hover:text-neutral-900 shadow-xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-500"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-1.5 rounded-lg bg-white border border-gray-200 text-gray-600 hover:text-neutral-900 shadow-xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-500"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Testimonial Active Display Card with Fade */}
            <div className="space-y-6 pt-4 animate-in fade-in duration-300">
              <p className="text-lg lg:text-xl text-neutral-900 italic leading-relaxed font-sans">
                “{TESTIMONIALS[currentTestimonial].quote}”
              </p>

              <div className="flex items-center space-x-4">
                <img
                  src={TESTIMONIALS[currentTestimonial].avatar}
                  alt={TESTIMONIALS[currentTestimonial].author}
                  referrerPolicy="no-referrer"
                  className="h-12 w-12 rounded-full object-cover border border-gray-200"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-base font-bold text-gray-900">
                    {TESTIMONIALS[currentTestimonial].author}
                  </h4>
                  <p className="text-xs text-gray-500 font-medium">
                    {TESTIMONIALS[currentTestimonial].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Carousel Navigation dots */}
            <div className="flex justify-center items-center space-x-2.5 mt-8">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2.5 rounded-full transition-all focus:outline-none cursor-pointer ${
                    index === currentTestimonial ? "w-6 bg-neutral-900" : "w-2.5 bg-gray-350 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTEGRATIONS SECTION GRID */}
      <section className="bg-gray-50 py-20 lg:py-32" aria-labelledby="integrations-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 id="integrations-heading" className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950">
              Integrates directly
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              No complex setup processes. Authorize OAuth connections in seconds and let our system automatically fetch profiles, tags, and contract numbers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INTEGRATIONS.map((integration) => (
              <div
                key={integration.name}
                className="bg-white border border-gray-150 p-6 rounded-2xl shadow-xs flex items-start space-x-4 hover:border-gray-300 hover:shadow-xs transition-all"
              >
                <div className={`h-11 w-11 rounded-lg flex items-center justify-center shrink-0 text-2xl ${integration.color}`}>
                  {integration.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="font-display text-base font-bold text-gray-900 flex items-center gap-1.5 leading-tight">
                    {integration.name}
                    <ExternalLink className="h-3 w-3 text-gray-400 leading-none" />
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {integration.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL-TO-ACTION BAND */}
      <section className="bg-slate-50 text-gray-900 py-20 lg:py-28 relative overflow-hidden border-t border-gray-150 minimalist-grid-bg" aria-labelledby="cta-heading">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-500/5 blur-3xl pointer-events-none" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 id="cta-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
            Ready to ship what customers <span className="text-brand-605">actually asked for?</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Configure your company prioritization board in less than five minutes. Start making objective, revenue-backed roadmap choices today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto bg-gray-950 text-white hover:bg-gray-850 font-semibold text-sm rounded-full h-12 px-8 shadow-md transition-all"
              onClick={openDemoModal}
            >
              Start Free Trial Now
            </Button>
            <Link
              to="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center font-semibold text-sm border border-gray-200 bg-white hover:bg-gray-50 px-8 py-3 rounded-full text-gray-700 hover:text-gray-900 transition-colors duration-150 h-12 shadow-xs"
            >
              View SaaS Pricing
            </Link>
          </div>
          <p className="text-xs text-gray-400 font-medium font-mono pt-2 tracking-wider">
            NO CREDIT CARD REQUIRED • CANCEL ANYTIME • 14-DAY FULL SANDBOX TRIAL
          </p>
        </div>
      </section>
    </div>
  );
}
