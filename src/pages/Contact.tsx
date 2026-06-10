/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Send, MapPin, Mail, Phone, Clock, Compass, Sparkles, Building2, Check } from "lucide-react";
import { Badge, Card, CardBody, Button, Input, Textarea, Select } from "../components/ui";
import { useSEO } from "../hooks/useSEO";
import { useGlobalActions } from "../layouts/SiteLayout";

const OFFICES = [
  {
    city: "San Francisco",
    role: "Global Headquarters",
    address: "548 Market St, Suite 4478, San Francisco, CA 94104",
    phone: "+1 (415) 384-9011",
    email: "sf@relayboard.com",
    hours: "9:00 AM - 6:00 PM PST",
    shades: "from-brand-900 to-indigo-950"
  },
  {
    city: "Brooklyn Studio",
    role: "Design & UX Workspace",
    address: "248 Flushing Ave, Tower B, Brooklyn, NY 11205",
    phone: "+1 (718) 744-8392",
    email: "ny@relayboard.com",
    hours: "9:00 AM - 6:30 PM EST",
    shades: "from-violet-950 to-neutral-950"
  }
];

export default function Contact() {
  useSEO({
    title: "Contact Support & Sales",
    description: "Connect with the Relayboard team. Send a message to our SF or Brooklyn offices for integrations support or enterprise SLA demonstrations."
  });

  const { showToast } = useGlobalActions();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Integrations Support",
    company: "",
    msg: ""
  });
  const [isSending, setIsSending] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.msg) {
      showToast("Please complete all required fields.", "error");
      return;
    }
    
    setIsSending(true);
    showToast("Dispatching support ticket...", "info");
    
    setTimeout(() => {
      setIsSending(false);
      showToast("Message successfully dispatched! Ticket #RB-7281", "success");
      setFormData({
        name: "",
        email: "",
        subject: "Integrations Support",
        company: "",
        msg: ""
      });
    }, 1500);
  };

  return (
    <div className="bg-gray-50/50 min-h-screen pb-20">
      {/* 1. HEADER SECTION HEADER */}
      <section className="bg-gray-50 border-b border-gray-150 py-16 lg:py-24" aria-label="Contact Introduction Header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Badge variant="brand" className="font-mono tracking-widest text-[10px] font-bold uppercase py-1 px-3">
            TALK WITH INTEGRATORS
          </Badge>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 max-w-4xl mx-auto leading-none">
            We're here to help align your roadmap sprints.
          </h1>
          <p className="text-base sm:text-lg text-gray-650 max-w-2xl mx-auto">
            Connect with our success architects, enquire about security separating keys, or book a custom enterprise presentation.
          </p>
        </div>
      </section>

      {/* 2. CORE LAYOUT GRID (Contact Form + Offices / Maps) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 lg:mt-20" aria-label="Contact Workspace Board">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: CONTACT FORM */}
          <div className="col-span-1 lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl border border-gray-150 shadow-xs space-y-6">
            <div className="space-y-1 pb-4 border-b border-gray-100">
              <h2 className="font-display text-xl font-bold tracking-tight text-neutral-900">Send a priority message</h2>
              <p className="text-xs text-gray-400">Our integrations engineers evaluate and answer messages in less than 4 hours.</p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">Your Name *</label>
                  <Input
                    required
                    placeholder="Marcus Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">Email *</label>
                  <Input
                    required
                    type="email"
                    placeholder="marcus@team.io"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">Company Name</label>
                  <Input
                    placeholder="SaaS Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">Focus Subject</label>
                  <Select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  >
                    <option value="Integrations Support">Integrations (Jira / Salesforce) Sync</option>
                    <option value="Enterprise SLA Query">Enterprise SLA & SOC2 Compliance</option>
                    <option value="SaaS Pricing Billing">Billing & Subscriptions Account</option>
                    <option value="Partnership Platform">Creative Partnerships</option>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">Message Content *</label>
                <Textarea
                  required
                  placeholder="Tell us about your customer base, active feedback channels, and integration challenges..."
                  value={formData.msg}
                  onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full h-11 justify-center rounded-xl text-white font-semibold flex items-center space-x-2"
                  disabled={isSending}
                >
                  {isSending ? (
                    <span>Dispatching ticket...</span>
                  ) : (
                    <>
                      <span>Submit Message File</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>

          {/* RIGHT COLUMN: OFFICE INFOS & SIMULATED MAP */}
          <div className="col-span-1 lg:col-span-5 space-y-8">
            
            {OFFICES.map((office) => (
              <Card key={office.city} className="border border-gray-150 shadow-xs">
                {/* Office simulated backdrop image/gradient representation */}
                <div className={`h-24 w-full bg-gradient-to-r ${office.shades} flex items-center justify-between px-6 select-none`}>
                  <div className="text-white">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-300">{office.role}</span>
                    <h3 className="font-display font-bold text-lg leading-tight">{office.city} Office</h3>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-xs flex items-center justify-center text-white text-lg">🏢</div>
                </div>

                <CardBody className="space-y-4">
                  <div className="flex items-start space-x-3 text-xs text-gray-600">
                    <MapPin className="h-4 w-4 text-brand-500 shrink-0 mt-0.5" />
                    <span className="font-medium leading-relaxed">{office.address}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2 border-t border-gray-100">
                    <div className="space-y-1 item flex flex-row items-center space-x-1">
                      <Phone className="h-3.5 w-3.5 text-gray-400" />
                      <span className="font-semibold text-gray-700">{office.phone}</span>
                    </div>
                    <div className="space-y-1 item flex flex-row items-center space-x-1">
                      <Mail className="h-3.5 w-3.5 text-gray-400" />
                      <span className="font-semibold text-gray-700">{office.email}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2.5 text-[10px] font-mono text-gray-400 font-bold uppercase border-t border-gray-100 pt-3">
                    <Clock className="h-3.5 w-3.5" />
                    <span>OPERATIONAL HOURS: {office.hours}</span>
                  </div>
                </CardBody>
              </Card>
            ))}

            {/* SIMULATED MAP CANVAS DESIGN (Edge Case 19: Image alternative purely CSS/SVG) */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 text-white space-y-4 relative overflow-hidden select-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-brand-500/15 blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-brand-300">HQ POSITION MAPPING</span>
                <Compass className="h-4.5 w-4.5 text-brand-400" />
              </div>

              {/* Grid abstract shape map */}
              <div className="h-32 border border-neutral-800 rounded-xl bg-neutral-950 flex flex-col justify-center items-center relative p-4 group">
                <div className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
                
                {/* Coordinate Markers */}
                <span className="absolute top-8 left-12 h-2.5 w-2.5 rounded-full bg-brand-500 animate-ping" />
                <span className="absolute top-8 left-12 h-2.5 w-2.5 rounded-full bg-brand-500 hover:scale-125 transition-transform" />
                <span className="absolute top-8 left-16 text-[9px] font-mono text-gray-400 font-semibold bg-neutral-900 border border-neutral-800 rounded px-1.5 py-0.5 leading-none">HQ (SF)</span>

                <span className="absolute bottom-12 right-20 h-2.5 w-2.5 rounded-full bg-teal-500 animate-ping" />
                <span className="absolute bottom-12 right-20 h-2.5 w-2.5 rounded-full bg-teal-500 hover:scale-125 transition-transform" />
                <span className="absolute bottom-12 right-24 text-[9px] font-mono text-gray-400 font-semibold bg-neutral-900 border border-neutral-800 rounded px-1.5 py-0.5 leading-none">NY Suite</span>

                <span className="text-gray-500 font-mono text-[9px] uppercase z-10 font-bold bg-neutral-950 px-3 py-1 border border-neutral-800 rounded-lg">SF: 548 Market St Suite 115</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
