/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Link } from "react-router-dom";
import { Award, ArrowRight, MessageSquare, Shield, Sliders, Zap } from "lucide-react";
import { Badge, Card, CardHeader, CardBody, CardFooter, Button } from "../components/ui";
import { customersData, secondaryCustomers } from "../data/customers";
import { useSEO } from "../hooks/useSEO";
import { useGlobalActions } from "../layouts/SiteLayout";

export default function Customers() {
  useSEO({
    title: "Client Case Studies & Customer Success Stories",
    description: "Browse detailed case studies detailing how teams at Acme Corp, Nova Global, and others reduced silent churn using Relayboard's custom roadmap prioritized indices."
  });

  const { openDemoModal } = useGlobalActions();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50/50">
      {/* 1. HEADER HERO */}
      <section className="bg-gray-50 border-b border-gray-150 py-16 lg:py-24" aria-label="Success Stories introduction">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Badge variant="brand" className="font-mono px-3.5 py-1 text-[10px] font-bold tracking-widest uppercase">
            REAL OUTCOMES
          </Badge>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 max-w-4xl mx-auto leading-none">
            How modern product teams build with confidence.
          </h1>
          <p className="text-base sm:text-lg text-gray-650 max-w-2xl mx-auto leading-relaxed">
            Read how SaaS teams at every scale align commercial priorities, eradicate developer specs duplication, and lower cancellation rates.
          </p>
        </div>
      </section>

      {/* 2. MAIN DETAILED STORIES */}
      <section className="py-20 bg-white" aria-label="Featured Stories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="border-b border-gray-150 pb-4">
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-neutral-900">Featured Customer Reports</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {customersData.map((study) => (
              <Card key={study.slug} className="group border border-gray-150 shadow-sm hover:border-gray-300 hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="relative h-48 w-full bg-neutral-950 overflow-hidden flex items-center justify-center p-6 text-center select-none">
                    {/* Visual pattern representation */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-900/40 to-neutral-950 opacity-90 z-0" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#374151_1px,transparent_1px),linear-gradient(to_bottom,#374151_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-25 z-0" />
                    
                    <div className="relative z-10 text-white space-y-2">
                      <span className="text-xs font-mono font-bold tracking-widest text-brand-300 uppercase">{study.industry}</span>
                      <h3 className="font-display text-3xl font-extrabold tracking-tight">{study.companyName}</h3>
                    </div>
                  </div>

                  <CardBody className="space-y-4">
                    {/* Big metric banner */}
                    <div className="p-4 bg-gray-50 border border-gray-150 rounded-xl flex items-center justify-between">
                      <span className="text-xs font-bold uppercase text-gray-500 tracking-wider font-mono">{study.metricLabel}</span>
                      <span className="text-3xl font-extrabold text-neutral-950 tracking-tight font-display">{study.metric}</span>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed font-medium">
                      {study.summary}
                    </p>
                  </CardBody>
                </div>

                <CardFooter className="bg-gray-50/50 flex justify-between items-center z-10 border-t border-gray-100">
                  <span className="text-xs text-gray-450 font-semibold">{study.size}</span>
                  <Link
                    to={`/customers/${study.slug}`}
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-600 hover:text-brand-700 font-mono"
                  >
                    <span>Read Complete Story</span>
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SECONDARY LOGO GRID & BENEFITS */}
      <section className="py-20 lg:py-28 bg-gray-50" aria-label="Secondary client grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="border-b border-gray-150 pb-4 text-center">
            <h2 className="font-display text-xl sm:text-2xl font-extrabold tracking-tight text-neutral-900">
              Trusted by operators in diverse ecosystems
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              From collaborative canvasses to hosting utilities, Relayboard drives roadmap alignment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {secondaryCustomers.map((cust) => (
              <div
                key={cust.id}
                className="bg-white border border-gray-150 p-6 rounded-2xl shadow-xs space-y-3 hover:border-gray-300 transition-all"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-display text-base font-bold text-gray-900">{cust.name}</h3>
                  <Badge variant="brand" className="font-mono leading-none">{cust.metric}</Badge>
                </div>
                <p className="text-xs text-gray-450 font-semibold uppercase font-mono tracking-wider">{cust.industry}</p>
                <p className="text-xs sm:text-sm text-gray-650 leading-relaxed">
                  {cust.benefit}
                </p>
                <div className="pt-2 text-right">
                  {/* Redirects to equivalent detailed case study representation */}
                  <Link
                    to={`/customers/${cust.slug}`}
                    className="text-xs font-bold text-gray-600 hover:text-gray-900 flex items-center justify-end space-x-1 font-mono"
                  >
                    <span>View baseline metrics</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-neutral-950 text-white py-16 text-center space-y-6" aria-label="Customer success CTA">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight">Stop building the wrong features.</h2>
        <p className="text-xs sm:text-sm text-gray-400 max-w-lg mx-auto leading-relaxed">
          Align your product prioritization models automatically by connecting Salesforce, Zendesk, and Jira today.
        </p>
        <div className="pt-2">
          <Button variant="primary" className="bg-white hover:bg-gray-100 text-neutral-950 rounded-xl" onClick={openDemoModal}>
            Schedule Architectural Demo
          </Button>
        </div>
      </section>
    </div>
  );
}
