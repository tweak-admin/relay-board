/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, Layers, Sliders, Calendar, ChevronDown, Check } from "lucide-react";
import { Badge, Card, CardBody, Button } from "../components/ui";
import { changelogData } from "../data/changelog";
import { useSEO } from "../hooks/useSEO";
import { useGlobalActions } from "../layouts/SiteLayout";

export default function Changelog() {
  useSEO({
    title: "Changelog & Platform Releases",
    description: "Browse detailed release notes and feature logs covering Relayboard updates. Track two-way Jira integrations and AI duplication engines."
  });

  const { openDemoModal } = useGlobalActions();
  const [filterCategory, setFilterCategory] = useState<"All" | "Feature" | "Improvement" | "Fix">("All");

  const filteredLogs = changelogData.filter((log) => {
    return filterCategory === "All" || log.category === filterCategory;
  });

  return (
    <div className="bg-gray-50/50 min-h-screen pb-20">
      {/* 1. HEADER HERO */}
      <section className="bg-gray-50 border-b border-gray-150 py-16 lg:py-20" aria-label="Changelog Header Intro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold font-mono tracking-widest text-brand-600 bg-brand-50 border border-brand-100 uppercase">
            RELEASES LOG
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 max-w-4xl mx-auto">
            What's new in Relayboard.
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Track our persistent shipping rhythm. We open-publish release notes, feature updates, database migrations, and security fixes every two weeks.
          </p>

          {/* FILTER PILLS */}
          <div className="pt-6 flex justify-center items-center space-x-2.5">
            {(["All", "Feature", "Improvement", "Fix"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                  filterCategory === cat
                    ? "bg-neutral-950 text-white border-neutral-950"
                    : "bg-white border-gray-150 text-gray-500 hover:text-gray-900"
                }`}
              >
                {cat === "All" ? "All Updates" : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. CHRONOLOGICAL LOGS FEED */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 lg:mt-20" aria-label="Timeline Releases">
        <div className="space-y-12 relative before:absolute before:inset-y-0 before:left-4 sm:before:left-1/2 before:w-0.5 before:bg-gray-200">
          
          {filteredLogs.map((log) => {
            const isFeature = log.category === "Feature";
            const isImprovement = log.category === "Improvement";
            
            const categoryBadgeVariant = isFeature
              ? "brand"
              : isImprovement
              ? "success"
              : "warning";

            return (
              <div key={log.id} className="relative grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
                
                {/* Node Dot */}
                <div className="absolute left-4 sm:left-1/2 h-4.5 w-4.5 rounded-full bg-white border-4 border-neutral-950 -translate-x-2 z-10" />

                {/* Left Column: Version details */}
                <div className="pl-12 sm:pl-0 sm:text-right space-y-2">
                  <span className="text-3xl font-extrabold text-neutral-950 font-display sm:block">{log.version}</span>
                  <p className="text-xs text-gray-400 font-mono font-bold uppercase">{log.publishedAt}</p>
                  
                  <div className="flex sm:justify-end">
                    <Badge variant={categoryBadgeVariant} className="font-mono text-[9px] uppercase font-bold tracking-wider">
                      {log.category}
                    </Badge>
                  </div>

                  {/* Profile author bio */}
                  <div className="flex sm:justify-end items-center space-x-2.5 pt-4 text-xs">
                    <img
                      src={log.author.avatar}
                      alt={log.author.name}
                      referrerPolicy="no-referrer"
                      className="h-6 w-6 rounded-full object-cover ring-1 ring-gray-200"
                      loading="lazy"
                    />
                    <span className="text-gray-500 font-semibold">{log.author.name}</span>
                  </div>
                </div>

                {/* Right Column: Descriptions log */}
                <Card className="pl-12 sm:pl-0 border border-gray-150 hover:border-gray-300 shadow-xs">
                  <CardBody className="space-y-4">
                    <h3 className="font-display text-base sm:text-lg font-bold text-gray-900 leading-tight">
                      {log.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans font-medium">
                      {log.description}
                    </p>

                    {/* Detailed code changes */}
                    <ul className="space-y-3 pt-4 border-t border-gray-100">
                      {log.changes.map((change, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-xs">
                          <Check className="h-4 w-4 text-brand-600 shrink-0 mt-0.5" />
                          <span className="text-gray-600 leading-normal font-sans font-medium">{change}</span>
                        </li>
                      ))}
                    </ul>
                  </CardBody>
                </Card>

              </div>
            );
          })}

          {filteredLogs.length === 0 && (
            <div className="text-center p-12 bg-white rounded-2xl border border-dashed border-gray-200 space-y-2">
              <p className="text-sm font-semibold text-gray-500">No releases match this category.</p>
              <Button variant="secondary" size="sm" onClick={() => setFilterCategory("All")}>
                Reset Category Filter
              </Button>
            </div>
          )}

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-white py-16 lg:py-24 text-center mt-20" aria-label="Subscribe release banner">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight leading-none">
          Want automated release summaries?
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto mt-2 leading-relaxed">
          Subscribe to our newsletter list to receive email logs and markdown summaries directly on release nights.
        </p>
        <div className="pt-6">
          <Button variant="primary" className="rounded-xl px-8" onClick={openDemoModal}>
            Register subscription
          </Button>
        </div>
      </section>
    </div>
  );
}
