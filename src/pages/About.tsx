/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layers, Sparkles, Award, Shield, Heart, HelpCircle, Terminal } from "lucide-react";
import { Badge, Card, CardBody, Avatar } from "../components/ui";
import { teamMembers, corporateTimeline } from "../data/careers-team";
import { useSEO } from "../hooks/useSEO";

const VALUES = [
  {
    title: "Continuous Shipping Rhythm",
    desc: "We prioritize momentum over perfection. Shipping code early and continuously closes customer feedback loops natively, allowing us to align roadmaps with real user metrics.",
    icon: <Terminal className="h-6 w-6 text-brand-650" />
  },
  {
    title: "Radical Public Transparency",
    desc: "Hiding your project pipeline breeds doubts. We share roadmaps openly, write human benefit-oriented release notes, and let customers weight strategic developments with ARR indices.",
    icon: <Sparkles className="h-6 w-6 text-amber-500" />
  },
  {
    title: "Commercial & Engineering Union",
    desc: "We stand against politics in sprints. By linking CRM accounts with ticketing states, sales and development divisions coordinate resources with structured analytic parameters.",
    icon: <Layers className="h-6 w-6 text-blue-500" />
  },
  {
    title: "Defensive Data Governance",
    desc: "Customer roadmaps are highly confidential. We implement strict Okta SSO limits, cryptographic tenant decryptions, and full SOC2 credentials to protect user workspaces.",
    icon: <Shield className="h-6 w-6 text-emerald-650" />
  }
];

export default function About() {
  useSEO({
    title: "About Us — Corporate Mission & Team",
    description: "Read on our corporate roots, mission values, development timeline, and inspect active bios of our 12 team developers and growth PMs."
  });

  const [activeCategory, setActiveCategory] = useState<"All" | "Leadership" | "Product" | "Engineering" | "Growth">("All");

  const filteredTeam = teamMembers.filter((guy) => {
    return activeCategory === "All" || guy.category === activeCategory;
  });

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* 1. HERO INTRODUCTION HEADER */}
      <section className="bg-gray-50 border-b border-gray-150 py-16 lg:py-24" aria-label="About Relayboard Introduction">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Badge variant="brand" className="font-mono tracking-widest text-[10px] font-bold uppercase py-1 px-3">
            MEMBERS & MISSIONS
          </Badge>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 max-w-4xl mx-auto">
            Eliminating politics from product sprint pipelines.
          </h1>
          <p className="text-base sm:text-lg text-gray-650 max-w-2xl mx-auto leading-relaxed">
            Relayboard was bootstrapped in San Francisco by developers, PMs, and customer leads who got tired of manually mapping client requests inside fragile spreadsheets.
          </p>
        </div>
      </section>

      {/* 2. CORPORATE CORE VALUES */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 id="values-heading" className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-950">
              Values that anchor our products
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xl mx-auto">
              Our designs guide collaborative SaaS environments towards objective, metric-backed prioritize models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((val) => (
              <div key={val.title} className="p-6 bg-gray-50 rounded-2xl border border-gray-150 space-y-4">
                <div className="h-11 w-11 rounded-lg bg-white border border-gray-200 flex items-center justify-center p-2 shadow-xs shrink-0">
                  {val.icon}
                </div>
                <h3 className="font-display text-base font-bold text-gray-950 tracking-tight leading-tight">
                  {val.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-sans font-medium">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORPORATE TIMELINE HISTORY */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-150" aria-labelledby="timeline-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 id="timeline-heading" className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-950">
              The Journey of Relayboard
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              From a single hackathon repository prototype to a synchronized feedback matrix powering roadmap design globally.
            </p>
          </div>

          <div className="relative border-l-2 border-gray-200 pl-8 ml-4 sm:ml-8 space-y-10">
            {corporateTimeline.map((item) => (
              <div key={item.year} className="relative">
                {/* Node marker */}
                <div className="absolute h-4 w-4 bg-white border-2 border-brand-650 rounded-full -left-[41px] top-1" />
                
                <div className="space-y-1.5">
                  <span className="inline-flex px-2 py-0.5 rounded bg-brand-100 text-brand-800 text-[10px] font-bold font-mono tracking-wider">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 font-display">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-3xl">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TEAM GRID COMPONENT - 12 people */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="team-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 id="team-heading" className="font-display text-3xl font-extrabold text-neutral-950">
              Meet our team builders
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              We are a remote-first collective of developers, designers, and CS architects. No layers of administrative blockers.
            </p>

            {/* TEAM CATEGORY SWITCHER GROUP */}
            <div className="flex flex-wrap justify-center gap-2 pt-4">
              {(["All", "Leadership", "Product", "Engineering", "Growth"] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all border ${
                    activeCategory === cat
                      ? "bg-neutral-950 text-white border-neutral-950 shadow-xs"
                      : "bg-gray-50 border-gray-150 text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* 12 Person Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredTeam.map((member) => (
              <div
                key={member.name}
                className="bg-white border border-gray-150 p-6 rounded-2xl shadow-xs space-y-4 text-center hover:border-gray-300 transition-all"
              >
                <div className="relative inline-block select-none">
                  <Avatar src={member.avatar} name={member.name} className="h-20 w-20 mx-auto" />
                  <span className="absolute bottom-0 right-1 border border-white bg-green-500 h-3 w-3 rounded-full shadow-xs" />
                </div>

                <div className="space-y-1 leading-none">
                  <h3 className="font-display text-base font-bold text-gray-950">{member.name}</h3>
                  <p className="text-xs text-brand-700 font-semibold">{member.role}</p>
                </div>

                <p className="text-[11px] sm:text-xs text-gray-550 leading-relaxed font-sans font-medium line-clamp-3">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
