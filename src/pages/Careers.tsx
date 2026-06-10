/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Terminal, MapPin, Briefcase, DollarSign, ChevronDown, ChevronUp, Check, Award } from "lucide-react";
import { Badge, Card, CardBody, Button, Dialog, Input } from "../components/ui";
import { jobListings } from "../data/careers-team";
import { useSEO } from "../hooks/useSEO";
import { useGlobalActions } from "../layouts/SiteLayout";

export default function Careers() {
  useSEO({
    title: "Careers — Join our Product Studio",
    description: "Browse 5 open roles at Relayboard including Senior Product Manager, Lead Frontend Engineer, and Full-Stack Integrations specialists."
  });

  const { showToast } = useGlobalActions();
  const [expandedJobId, setExpandedJobId] = useState<string | null>("job-01");
  const [applyJobTitle, setApplyJobTitle] = useState<string | null>(null);

  // Apply Form presentational state
  const [candidateName, setCandidateName] = useState("");
  const [candidateEmail, setCandidateEmail] = useState("");
  const [candidateResumeUrl, setCandidateResumeUrl] = useState("");
  const [candidateSuccess, setCandidateSuccess] = useState(false);

  const toggleExpand = (jobId: string) => {
    setExpandedJobId((prev) => (prev === jobId ? null : jobId));
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!candidateName || !candidateEmail) {
      showToast("Please enter a valid name and email address.", "error");
      return;
    }
    setCandidateSuccess(true);
    showToast("Application submitted successfully!", "success");
    setTimeout(() => {
      setApplyJobTitle(null);
      setCandidateSuccess(false);
      setCandidateName("");
      setCandidateEmail("");
      setCandidateResumeUrl("");
    }, 1500);
  };

  return (
    <div className="bg-gray-50/50 min-h-screen pb-20">
      {/* 1. HEADER HERO */}
      <section className="bg-gray-50 border-b border-gray-150 py-16 lg:py-24" aria-label="Careers Index Header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Badge variant="success" className="font-mono tracking-widest text-[10px] font-bold uppercase py-1 px-3">
            WE ARE HIRING
          </Badge>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 max-w-4xl mx-auto">
            Build developer-grade SaaS tools alongside us.
          </h1>
          <p className="text-base sm:text-lg text-gray-650 max-w-2xl mx-auto leading-relaxed">
            Relayboard is a small, focused, highly coordinated studio crew. We value shipping velocity, clear logic, radical transparency, and asynchronous autonomy.
          </p>
        </div>
      </section>

      {/* 2. OPEN ROLES ACCORDION (Edge Case 3) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 lg:mt-20" aria-label="Job Openings Feed">
        <div className="border-b border-gray-150 pb-4 flex justify-between items-center">
          <h2 className="font-display text-xl sm:text-2xl font-extrabold tracking-tight text-neutral-900">
            Active Openings (5 roles)
          </h2>
          <span className="text-xs font-mono font-bold text-gray-400">Remote / Hybrid options</span>
        </div>

        <div className="space-y-6 mt-8">
          {jobListings.map((job) => {
            const isExpanded = expandedJobId === job.id;
            return (
              <Card
                key={job.id}
                className={`border border-gray-150 hover:border-gray-300 transition-all shadow-xs ${
                  isExpanded ? "ring-1 ring-brand-500 border-brand-300 bg-white" : "bg-white"
                }`}
              >
                <div
                  onClick={() => toggleExpand(job.id)}
                  className="px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between cursor-pointer select-none gap-4"
                  role="button"
                  aria-expanded={isExpanded}
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <span className="text-xs font-mono font-bold text-brand-600 uppercase">{job.department}</span>
                      <span className="text-gray-300 font-bold text-xs font-mono">•</span>
                      <span className="text-xs font-semibold text-gray-500">{job.type}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-gray-900">{job.title}</h3>
                    
                    {/* Location & Salary pills */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500 font-medium">
                      <span className="flex items-center space-x-1">
                        <MapPin className="h-3.5 w-3.5 text-gray-400" />
                        <span>{job.location}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <DollarSign className="h-3.5 w-3.5 text-gray-400" />
                        <span>{job.salaryRange}</span>
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 self-end sm:self-auto shrink-0">
                    <span className="text-xs font-extrabold text-brand-650 hidden sm:inline">
                      {isExpanded ? "Collapse Specs" : "Review Role"}
                    </span>
                    <div className="p-1.5 rounded-lg bg-gray-50 text-gray-400">
                      {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Sections (Accordion Content panels) */}
                {isExpanded && (
                  <div className="px-6 pb-6 border-t border-gray-100 pt-6 space-y-6 bg-gray-50/20">
                    <p className="text-sm text-gray-600 leading-relaxed font-sans font-medium">
                      {job.summary}
                    </p>

                    {/* Responsibilities list */}
                    <div className="space-y-2.5">
                      <h4 className="text-xs font-extrabold text-gray-400 uppercase tracking-widest leading-none">CORE RESPONSIBILITIES</h4>
                      <ul className="space-y-2">
                        {job.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start space-x-2.5 text-xs text-gray-650">
                            <Check className="h-4 w-4 text-brand-600 shrink-0 mt-0.5" />
                            <span className="font-medium leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Requirements list */}
                    <div className="space-y-2.5">
                      <h4 className="text-xs font-extrabold text-gray-400 uppercase tracking-widest leading-none">CANDIDATE REQUIREMENTS</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, i) => (
                          <li key={i} className="flex items-start space-x-2.5 text-xs text-gray-650">
                            <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="font-medium leading-relaxed">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex justify-end shrink-0">
                      <Button
                        variant="primary"
                        onClick={() => setApplyJobTitle(job.title)}
                        className="rounded-xl px-6 h-10 shadow-xs"
                      >
                        Apply for this Role
                      </Button>
                    </div>
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </section>

      {/* CORE TIMELINE BENEFITS */}
      <section className="py-20 bg-white border-t border-b border-gray-150 mt-20" aria-label="Timeline Perks">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-neutral-950">Relayboard Studio Perks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 border border-gray-150 rounded-2xl space-y-3">
              <span className="text-2xl select-none">🌐</span>
              <h3 className="font-bold text-gray-900 font-display">Asynchronous Autonomy</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-sans font-medium">Work from where you make things best, under clean strategic parameters with zero micromanagement.</p>
            </div>
            <div className="p-6 bg-gray-50 border border-gray-150 rounded-2xl space-y-3">
              <span className="text-2xl select-none">💻</span>
              <h3 className="font-bold text-gray-900 font-display">Workspace Stipends</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-sans font-medium">We fund your home-office setups, co-working memberships, monitor upgrades, and computing engines.</p>
            </div>
            <div className="p-6 bg-gray-50 border border-gray-150 rounded-2xl space-y-3">
              <span className="text-2xl select-none">📈</span>
              <h3 className="font-bold text-gray-900 font-display">Equity Grants</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-sans font-medium">Every builder gains direct stakes inside Relayboard growth metrics from our seed funding pools.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED DYNAMIC APPLICATION MODAL */}
      <Dialog isOpen={applyJobTitle !== null} onClose={() => setApplyJobTitle(null)}>
        <div className="space-y-4">
          <div className="text-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 mb-2">
              <Briefcase className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-display font-bold text-gray-900 leading-tight">Apply for open position</h3>
            <p className="text-xs text-gray-400 font-mono font-bold uppercase mt-1">Role: {applyJobTitle}</p>
          </div>

          {candidateSuccess ? (
            <div className="p-8 text-center text-emerald-600 space-y-2">
              <div className="inline-flex items-center justify-center p-2 bg-emerald-50 text-emerald-600 rounded-full">
                <Check className="h-8 w-8" />
              </div>
              <p className="text-base font-bold">Application Received!</p>
              <p className="text-xs text-gray-500">We will evaluate your coordinates and reach out within 48 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleApplySubmit} className="space-y-4 mt-2">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Your Full Name *</label>
                <Input
                  required
                  placeholder="Julio Valenzuela"
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Corporate Email Address *</label>
                <Input
                  required
                  type="email"
                  placeholder="julio@vetted Saas.io"
                  value={candidateEmail}
                  onChange={(e) => setCandidateEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Portfolio or CV URL *</label>
                <Input
                  required
                  type="url"
                  placeholder="https://github.com/coder-pro"
                  value={candidateResumeUrl}
                  onChange={(e) => setCandidateResumeUrl(e.target.value)}
                />
              </div>

              <div className="pt-2">
                <Button type="submit" variant="primary" className="w-full h-11 justify-center rounded-xl text-white font-semibold">
                  Submit Candidate File
                </Button>
                <p className="text-[10px] text-gray-400 text-center mt-2">
                  Our talent directors evaluate files defensively. We protect candidate privacy.
                </p>
              </div>
            </form>
          )}
        </div>
      </Dialog>
    </div>
  );
}
