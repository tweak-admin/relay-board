/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Check, Play, BookOpen, Layers, Sparkles } from "lucide-react";
import { Badge, Button } from "../components/ui";
import { customersData } from "../data/customers";
import { useSEO } from "../hooks/useSEO";

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Find relevant study
  const study = customersData.find((s) => s.slug === slug);

  // Redirect to 404 if slug is unrecognized
  useEffect(() => {
    if (!study) {
      navigate("/not-found-fallback", { replace: true });
    }
  }, [study, navigate]);

  useSEO({
    title: study ? `${study.companyName} Case Study` : "Acme & Nova Case Studies",
    description: study?.summary || "Read how our customers leverage Relayboard prioritizations."
  });

  const [activeSection, setActiveSection] = useState("overview");

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <p className="text-sm font-semibold text-gray-500 animate-pulse">Navigating to case reports...</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* 1. HERO HEADER AREA with deep visual accent */}
      <div className="bg-neutral-950 text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/40 to-neutral-950 opacity-90 z-0" />
        {/* Subtle grid layout backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Link
            to="/customers"
            className="inline-flex items-center space-x-2 text-xs font-semibold text-gray-400 hover:text-white transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Success Registry</span>
          </Link>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <Badge variant="brand" className="font-mono bg-neutral-900 border-neutral-800 text-brand-300">
              {study.industry}
            </Badge>
            <span className="text-gray-500 font-semibold text-sm">•</span>
            <span className="text-gray-300 font-mono text-xs">{study.size}</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-white max-w-4xl">
            How {study.companyName} achieved {study.metric} {study.metricLabel}
          </h1>

          <p className="text-base sm:text-lg text-gray-400 max-w-3xl leading-relaxed">
            {study.summary}
          </p>
        </div>
      </div>

      {/* 2. MAIN LAYOUT GRID (Sticky Side Menu + Long Scroll Content) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 lg:mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* STICKY SIDEBAR SUBNAV (Edge Case 6) */}
          <nav className="col-span-1 lg:col-span-3 lg:sticky lg:top-28 space-y-6 border-l-2 border-gray-100 pl-4 py-2 shrink-0">
            <p className="text-xs font-bold uppercase text-gray-400 tracking-widest leading-none mb-3 font-semibold">Report Sections</p>
            <div className="space-y-4">
              {[
                { id: "overview", label: "Executive Summary" },
                { id: "challenge", label: "The Challenge" },
                { id: "solution", label: "The Solution" },
                { id: "results", label: "Core Outcomes" },
                { id: "quote", label: "Stakeholder Quote" }
              ].map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={() => setActiveSection(sec.id)}
                  className={`block text-sm font-semibold transition-all focus:outline-none ${
                    activeSection === sec.id
                      ? "text-brand-600 border-l-2 border-brand-600 -ml-4.5 pl-4"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {sec.label}
                </a>
              ))}
            </div>

            {/* Quick Metrics Cards inside Sidebar */}
            <div className="bg-gray-50 border border-gray-150 rounded-xl p-4 space-y-4 pt-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 font-semibold font-mono">KEY REPORT RATIOS</p>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 text-left">
                {study.details.stats.slice(0, 3).map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-bold text-gray-900 font-display leading-none">{stat.value}</p>
                    <p className="text-[10px] text-gray-500 font-semibold mt-1 leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </nav>

          {/* MAIN NARRATIVE CONTENT */}
          <article className="col-span-1 lg:col-span-9 space-y-12">
            
            {/* Overview Detail Sec */}
            <section id="overview" className="scroll-mt-32 space-y-4 border-b border-gray-100 pb-8">
              <h2 className="font-display text-2xl font-bold tracking-tight text-neutral-900">Executive Overview</h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Our collaborative review with {study.companyName} maps the process of centralized roadmapping. Through strict validation, CRM feedback syncing, and direct integration audits, the platform resolved key pipeline bottlenecks.
              </p>
              
              {/* Conditional Video Embed Block (Nova's layout emphasis) */}
              {study.details.videoEmbedUrl && (
                <div className="my-6">
                  <p className="text-xs font-mono font-bold text-gray-400 uppercase mb-2">PROJECT VIDEO BRIEF</p>
                  <div className="relative aspect-video w-full rounded-2xl bg-neutral-950 border border-neutral-850 overflow-hidden shadow-md flex items-center justify-center">
                    {/* Standard YouTube/Vimeo aesthetic iframe container */}
                    <iframe
                      width="100%"
                      height="100%"
                      src={study.details.videoEmbedUrl}
                      title="Success Story Overview Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </div>
              )}
            </section>

            {/* Challenge Sec */}
            <section id="challenge" className="scroll-mt-32 space-y-4 border-b border-gray-100 pb-8">
              <h2 className="font-display text-2xl font-bold tracking-tight text-neutral-900">The Core Challenge</h2>
              <p className="text-sm sm:text-base text-gray-650 leading-relaxed font-sans">
                {study.challenge}
              </p>
            </section>

            {/* Solution Sec */}
            <section id="solution" className="scroll-mt-32 space-y-4 border-b border-gray-100 pb-8">
              <h2 className="font-display text-2xl font-bold tracking-tight text-neutral-900">The Solution Model</h2>
              <p className="text-sm sm:text-base text-gray-650 leading-relaxed">
                {study.solution}
              </p>
              
              <div className="p-6 bg-brand-50/30 border border-brand-100 rounded-2xl space-y-4 mt-6">
                <div className="flex items-center space-x-2.5">
                  <Sparkles className="h-5 w-5 text-brand-600" />
                  <h4 className="text-sm font-semibold text-brand-950 uppercase font-mono tracking-wider">PRIMARY INTEGRATION DEPLOYED</h4>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  With bidirectionals active, Jira epics update roadmap voters dynamically. Customer Success Leads can filter priority items by remaining renewal boundaries via direct Salesforce parameters in sandbox dashboards.
                </p>
              </div>
            </section>

            {/* Results Narrative & Case Study layout differences */}
            <section id="results" className="scroll-mt-32 space-y-6 border-b border-gray-100 pb-8">
              <h2 className="font-display text-2xl font-bold tracking-tight text-neutral-900">Outcomes & Metrics</h2>
              <p className="text-sm sm:text-base text-gray-650 leading-relaxed">
                {study.results}
              </p>

              {/* Big Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-gray-50 border border-gray-150 p-6 rounded-2xl text-center">
                {study.details.stats.map((stat) => (
                  <div key={stat.label} className="space-y-1">
                    <p className="text-3xl font-extrabold text-neutral-950 font-display tracking-tight leading-none">{stat.value}</p>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Conditional Narrative HTML */}
              <div
                className="markdown-body pt-4"
                dangerouslySetInnerHTML={{ __html: study.details.narrative }}
              />

              {/* Conditional Gallery Images (Acme's layout emphasis) */}
              {study.details.galleryImages && (
                <div className="space-y-3 pt-6">
                  <p className="text-xs font-mono font-bold text-gray-400 uppercase">OFFICE GALLERY ENGAGEMENT</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {study.details.galleryImages.map((img, i) => (
                      <div key={i} className="relative rounded-xl overflow-hidden aspect-video border border-gray-200 shadow-sm">
                        <img
                          src={img}
                          alt="Acme Team Collaboration"
                          className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* Stakeholder Quote Block */}
            <section id="quote" className="scroll-mt-32 pt-4">
              <blockquote className="border-l-4 border-brand-500 bg-brand-50/40 p-6 rounded-r-2xl space-y-6">
                <p className="text-base lg:text-lg text-gray-950 italic leading-relaxed font-medium">
                  “{study.quote.text}”
                </p>

                <div className="flex items-center space-x-4">
                  <img
                    src={study.quote.avatar}
                    alt={study.quote.author}
                    referrerPolicy="no-referrer"
                    className="h-12 w-12 rounded-full object-cover border border-gray-200"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">{study.quote.author}</h4>
                    <p className="text-xs text-brand-700 font-medium">{study.quote.role}</p>
                  </div>
                </div>
              </blockquote>
            </section>

          </article>
        </div>
      </div>
    </div>
  );
}
