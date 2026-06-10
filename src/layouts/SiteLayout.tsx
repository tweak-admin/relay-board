/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect } from "react";
import { Link, useLocation, useNavigate, Outlet } from "react-router-dom";
import { Menu, X, ChevronDown, Bell, CheckSquare, Layers, Award, Terminal, Shield, Sparkles, MessageSquare, ExternalLink, Check } from "lucide-react";
import { Button, Dialog, Input, Textarea, Select, Avatar } from "../components/ui";

// Toast Context Types
interface Toast {
  id: string;
  message: string;
  type?: "success" | "error" | "info";
}

interface ToastContextType {
  showToast: (message: string, type?: "success" | "error" | "info") => void;
  openDemoModal: () => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export function useGlobalActions() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useGlobalActions must be used within a SiteLayout provider");
  }
  return context;
}

interface SiteLayoutProps {
  children?: React.ReactNode;
}

export const SiteLayout: React.FC<SiteLayoutProps> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  // Demo Form State
  const [demoName, setDemoName] = useState("");
  const [demoEmail, setDemoEmail] = useState("");
  const [demoCompany, setDemoCompany] = useState("");
  const [demoSize, setDemoSize] = useState("10-50");
  const [demoNotes, setDemoNotes] = useState("");
  const [demoSuccess, setDemoSuccess] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const isDemoRoute = location.pathname.startsWith("/demo");

  // Track scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsResourcesOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Toast notifier trigger
  const showToast = (message: string, type: "success" | "error" | "info" = "success") => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!demoName || !demoEmail || !demoCompany) {
      showToast("Please complete all required fields.", "error");
      return;
    }
    setDemoSuccess(true);
    showToast("Demo request submitted successfully!", "success");
    setTimeout(() => {
      setIsDemoOpen(false);
      setDemoSuccess(false);
      setDemoName("");
      setDemoEmail("");
      setDemoCompany("");
      setDemoNotes("");
    }, 1500);
  };

  const activeLinkClass = "text-neutral-900 font-semibold";
  const inactiveLinkClass = "text-gray-600 hover:text-neutral-900 font-medium transition-colors";

  // Check if link is active
  const isLinkActive = (path: string) => location.pathname === path;

  return (
    <ToastContext.Provider value={{ showToast, openDemoModal: () => setIsDemoOpen(true) }}>
      {/* Skip to Content */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      {isDemoRoute ? (
        // ----------------- DEMO DASHBOARD FULLSCREEN RUN -----------------
        <main id="main-content" className="min-h-screen bg-gray-50 flex flex-col">
          {children || <Outlet />}
        </main>
      ) : (
        // ----------------- STANDARD MARKETING PAGES LAYOUT -----------------
        <div className="min-h-screen flex flex-col bg-white">
          {/* STICKY HEADER */}
          <header
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
              scrolled
                ? "bg-white/80 backdrop-blur-md py-3 shadow-xs border-gray-100"
                : "bg-white py-4 border-transparent"
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-2.5 focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-lg p-1">
                  <div className="h-9 w-9 rounded-xl bg-brand-600 flex items-center justify-center text-white shadow-md">
                    <Layers className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-display text-xl font-bold tracking-tight text-neutral-950">
                    Relayboard
                  </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                  <Link
                    to="/product"
                    className={isLinkActive("/product") ? activeLinkClass : inactiveLinkClass}
                  >
                    Product
                  </Link>
                  <Link
                    to="/pricing"
                    className={isLinkActive("/pricing") ? activeLinkClass : inactiveLinkClass}
                  >
                    Pricing
                  </Link>
                  <Link
                    to="/customers"
                    className={isLinkActive("/customers") ? activeLinkClass : inactiveLinkClass}
                  >
                    Customers
                  </Link>

                  {/* Resources Dropdown */}
                  <div className="relative">
                    <button
                      onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                      className={`flex items-center space-x-1 focus:outline-none cursor-pointer ${
                        location.pathname.startsWith("/blog") ||
                        location.pathname.startsWith("/changelog") ||
                        location.pathname.startsWith("/about") ||
                        location.pathname.startsWith("/careers")
                          ? "text-neutral-900 font-semibold"
                          : "text-gray-600 hover:text-neutral-900 font-medium transition-colors"
                      }`}
                      aria-expanded={isResourcesOpen}
                    >
                      <span>Resources</span>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isResourcesOpen ? "rotate-180" : ""}`} />
                    </button>

                    {isResourcesOpen && (
                      <>
                        <div className="fixed inset-0 z-30" onClick={() => setIsResourcesOpen(false)} />
                        <div className="absolute right-0 mt-3 w-64 rounded-2xl bg-white border border-gray-150 shadow-xl p-2 z-40 divide-y divide-gray-100 animate-in fade-in slide-in-from-top-2 duration-150">
                          <div className="py-1">
                            <Link
                              to="/blog"
                              className="group flex items-start p-2.5 rounded-xl hover:bg-gray-50 transition-colors"
                              onClick={() => setIsResourcesOpen(false)}
                            >
                              <div className="mt-0.5 mr-3 p-1.5 rounded-lg bg-indigo-50 text-indigo-600">
                                <MessageSquare className="h-4 w-4" />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-gray-900">Articles & Blog</p>
                                <p className="text-xs text-gray-500">Guides, tips and strategy sheets.</p>
                              </div>
                            </Link>

                            <Link
                              to="/changelog"
                              className="group flex items-start p-2.5 rounded-xl hover:bg-gray-50 transition-colors"
                              onClick={() => setIsResourcesOpen(false)}
                            >
                              <div className="mt-0.5 mr-3 p-1.5 rounded-lg bg-violet-50 text-brand-600">
                                <Sparkles className="h-4 w-4" />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-gray-900">What's New</p>
                                <p className="text-xs text-gray-500">Detailed logs of platform features.</p>
                              </div>
                            </Link>
                          </div>

                          <div className="py-1 pt-2">
                            <Link
                              to="/about"
                              className="group flex items-start p-2.5 rounded-xl hover:bg-gray-50 transition-colors"
                              onClick={() => setIsResourcesOpen(false)}
                            >
                              <div className="mt-0.5 mr-3 p-1.5 rounded-lg bg-teal-50 text-teal-600">
                                <Award className="h-4 w-4" />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-gray-900 font-sans">Our Mission</p>
                                <p className="text-xs text-gray-500">Meet the product builders.</p>
                              </div>
                            </Link>

                            <Link
                              to="/careers"
                              className="group flex items-start p-2.5 rounded-xl hover:bg-gray-50 transition-colors"
                              onClick={() => setIsResourcesOpen(false)}
                            >
                              <div className="mt-0.5 mr-3 p-1.5 rounded-lg bg-blue-50 text-blue-600">
                                <Terminal className="h-4 w-4" />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-gray-900">Careers</p>
                                <p className="text-xs text-gray-500">Join our growing studio crew.</p>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  <Link
                    to="/contact"
                    className={isLinkActive("/contact") ? activeLinkClass : inactiveLinkClass}
                  >
                    Contact
                  </Link>
                </nav>

                {/* Right side CTA Button Block */}
                <div className="hidden md:flex items-center space-x-4">
                  <Link
                    to="/demo"
                    className="text-sm font-semibold text-gray-700 hover:text-neutral-900 px-3 py-2 transition-colors"
                  >
                    Interactive Demo
                  </Link>
                  <Button variant="primary" size="sm" onClick={() => setIsDemoOpen(true)}>
                    Book a Demo
                  </Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center space-x-3">
                  <Link to="/demo" className="text-xs font-semibold bg-gray-50 text-gray-700 hover:bg-gray-150 px-3 py-1.5 rounded-lg border border-gray-200 transition-colors">
                    Demo
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2 rounded-lg text-gray-600 hover:text-neutral-900 hover:bg-gray-50 focus:outline-none"
                    aria-label="Toggle navigation menu"
                  >
                    {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Nav Panel */}
            {isMobileMenuOpen && (
              <div className="md:hidden border-t border-gray-100 bg-white shadow-inner animate-in slide-in-from-top duration-200 p-4 space-y-3 z-50">
                <Link
                  to="/product"
                  className="block px-4 py-2.5 rounded-xl text-base font-semibold text-gray-700 hover:bg-gray-50"
                >
                  Product
                </Link>
                <Link
                  to="/pricing"
                  className="block px-4 py-2.5 rounded-xl text-base font-semibold text-gray-700 hover:bg-gray-50"
                >
                  Pricing
                </Link>
                <Link
                  to="/customers"
                  className="block px-4 py-2.5 rounded-xl text-base font-semibold text-gray-700 hover:bg-gray-50"
                >
                  Customers
                </Link>
                <div className="my-2 border-t border-gray-100 pt-2 space-y-1">
                  <p className="px-4 text-xs font-bold text-gray-400 uppercase tracking-widest leading-none my-2">Resources</p>
                  <Link
                    to="/blog"
                    className="block px-4 py-2 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-100"
                  >
                    Blog & Guides
                  </Link>
                  <Link
                    to="/changelog"
                    className="block px-4 py-2 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-100"
                  >
                    What's New (Changelog)
                  </Link>
                  <Link
                    to="/about"
                    className="block px-4 py-2 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-100"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/careers"
                    className="block px-4 py-2 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-100"
                  >
                    Careers Listings
                  </Link>
                </div>
                <Link
                  to="/contact"
                  className="block px-4 py-2.5 rounded-xl text-base font-semibold text-gray-700 hover:bg-gray-50"
                >
                  Contact
                </Link>
                <div className="pt-4 px-4">
                  <Button variant="primary" className="w-full justify-center" onClick={() => setIsDemoOpen(true)}>
                    Book a Demo
                  </Button>
                </div>
              </div>
            )}
          </header>

          {/* MAIN CONTAINER */}
          <main id="main-content" className="flex-grow pt-20">
            {children || <Outlet />}
          </main>

          {/* FOOTER */}
          <footer className="bg-white text-gray-650 border-t border-gray-150 shrink-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
                {/* Brand overview info */}
                <div className="col-span-2 space-y-4">
                  <Link to="/" className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-lg bg-brand-600 flex items-center justify-center text-white">
                      <Layers className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-display text-lg font-bold tracking-tight text-gray-900">
                      Relayboard
                    </span>
                  </Link>
                  <p className="text-sm text-gray-500 max-w-sm">
                    Connect customer feedback natively with your Jira sprint lines and Salesforce ARR values. Ship what customers actually asked for.
                  </p>
                  <div className="text-xs text-gray-400 pt-2 space-y-1">
                    <p>© 2026 Relayboard Inc. All rights reserved.</p>
                    <p>Designed and built for high-performance SaaS environments.</p>
                  </div>
                </div>

                {/* Footer Core link structures */}
                <div>
                  <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Product</h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link to="/product" className="hover:text-brand-600 text-gray-500 transition-colors">Features</Link>
                    </li>
                    <li>
                      <Link to="/pricing" className="hover:text-brand-600 text-gray-500 transition-colors">Pricing</Link>
                    </li>
                    <li>
                      <Link to="/demo" className="hover:text-brand-600 text-gray-500 transition-colors flex items-center gap-1.5">
                        Interactive Setup
                        <SpanPill>Interactive</SpanPill>
                      </Link>
                    </li>
                    <li>
                      <Link to="/customers" className="hover:text-brand-600 text-gray-500 transition-colors">Case Studies</Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Resources</h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link to="/blog" className="hover:text-brand-600 text-gray-500 transition-colors">Company Blog</Link>
                    </li>
                    <li>
                      <Link to="/changelog" className="hover:text-brand-600 text-gray-500 transition-colors">Changelog Updates</Link>
                    </li>
                    <li>
                      <Link to="/about" className="hover:text-brand-600 text-gray-500 transition-colors">About Us</Link>
                    </li>
                    <li>
                      <Link to="/careers" className="hover:text-brand-600 text-gray-500 transition-colors flex items-center gap-1.5">
                        Careers
                        <SpanPill>Hiring</SpanPill>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Security & Legal</h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link to="/legal/privacy" className="hover:text-brand-600 text-gray-500 transition-colors">Privacy Charter</Link>
                    </li>
                    <li>
                      <Link to="/legal/terms" className="hover:text-brand-600 text-gray-500 transition-colors">Terms of Service</Link>
                    </li>
                    <li>
                      <Link to="/contact" className="hover:text-brand-600 text-gray-500 transition-colors">Help Center & Support</Link>
                    </li>
                    <li className="flex items-center space-x-1.5 text-gray-400 text-xs">
                      <Shield className="h-3.5 w-3.5 text-teal-600" />
                      <span>SOC2 Certified</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>

          {/* COOKIE CONSENT BANNER */}
          {showCookieBanner && (
            <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 z-40 max-w-sm bg-neutral-900 border border-neutral-800 text-white rounded-2xl shadow-2xl p-5 md:p-6 animate-in slide-in-from-bottom duration-300">
              <h4 className="text-sm font-semibold tracking-tight">Cookie Preferences</h4>
              <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                We use cookies to analyze site traffic, optimize pricing calculation animations, and record interactive dashboard clicks.
              </p>
              <div className="mt-4 flex items-center space-x-3 justify-end shrink-0">
                <button
                  onClick={() => setShowCookieBanner(false)}
                  className="text-xs text-gray-300 hover:text-white font-semibold cursor-pointer"
                >
                  Decline
                </button>
                <Button
                  size="sm"
                  className="bg-white hover:bg-gray-100 text-neutral-950 text-xs py-1"
                  onClick={() => {
                    setShowCookieBanner(false);
                    showToast("Cookie preferences accepted.", "info");
                  }}
                >
                  Accept All
                </Button>
              </div>
            </div>
          )}

          {/* DYNAMIC GLOBAL MOBILE CTA CONDITIONAL ACCENT */}
          <div className="md:hidden fixed bottom-18 right-4 z-35 bg-neutral-900 text-white rounded-full p-3.5 shadow-xl border border-neutral-800 flex items-center justify-center cursor-pointer" onClick={() => setIsDemoOpen(true)}>
            <Sparkles className="h-5 w-5 text-brand-300" />
          </div>
        </div>
      )}

      {/* GLOBAL DEMO MODAL */}
      <Dialog isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)}>
        <div className="space-y-4">
          <div className="text-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-brand-600 mb-2">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-display font-bold text-gray-900">Book our live system presentation</h3>
            <p className="text-sm text-gray-500 mt-1">
              See how modern product organizations consolidate feedback, map priorities, and write release notes.
            </p>
          </div>

          {demoSuccess ? (
            <div className="p-8 text-center text-emerald-600 space-y-2">
              <div className="inline-flex items-center justify-center p-2 bg-emerald-50 text-emerald-600 rounded-full">
                <Check className="h-10 w-10" />
              </div>
              <p className="text-base font-bold">Successfully Scheduled!</p>
              <p className="text-xs text-gray-500">We've dispatched direct confirmation codes to your address.</p>
            </div>
          ) : (
            <form onSubmit={handleDemoSubmit} className="space-y-4 mt-2">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Full Name *</label>
                <Input
                  required
                  placeholder="Evelyn Sterling"
                  value={demoName}
                  onChange={(e) => setDemoName(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Corporate Email Address *</label>
                <Input
                  required
                  type="email"
                  placeholder="evelyn@acme-saas.com"
                  value={demoEmail}
                  onChange={(e) => setDemoEmail(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Company Name *</label>
                  <Input
                    required
                    placeholder="Acme Corp"
                    value={demoCompany}
                    onChange={(e) => setDemoCompany(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Company size</label>
                  <Select value={demoSize} onChange={(e) => setDemoSize(e.target.value)}>
                    <option value="1-10">1 - 10 Employees</option>
                    <option value="10-50">10 - 50 Employees</option>
                    <option value="50-250">50 - 250 Employees</option>
                    <option value="250+">250+ Employees</option>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">What challenges can we help resolve?</label>
                <Textarea
                  placeholder="e.g. consolidate 20,000 scattered Zendesk requests"
                  value={demoNotes}
                  onChange={(e) => setDemoNotes(e.target.value)}
                />
              </div>

              <div className="pt-2">
                <Button type="submit" variant="primary" className="w-full h-11 justify-center rounded-xl font-semibold">
                  Confirm Booking Slot
                </Button>
                <p className="text-[10px] text-gray-400 text-center mt-2.5">
                  By confirming, you agree to receive automated reminders. We protect your privacy strictly.
                </p>
              </div>
            </form>
          )}
        </div>
      </Dialog>

      {/* TOAST SYSTEM CONTAINER */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col space-y-2 pointer-events-none max-w-sm w-full">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-center justify-between p-4 rounded-xl shadow-xl border text-sm font-medium animate-in slide-in-from-right-4 duration-300 ${
              toast.type === "error"
                ? "bg-red-50 text-red-800 border-red-200"
                : toast.type === "info"
                ? "bg-blue-50 text-blue-800 border-blue-200"
                : "bg-emerald-50 text-emerald-800 border-emerald-200"
            }`}
          >
            <span>{toast.message}</span>
            <button
              onClick={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
              className="ml-4 text-gray-400 hover:text-gray-900"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

// Internal pill indicator
const SpanPill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center px-1.5 py-0.2 text-[9px] font-bold text-brand-300 bg-neutral-900 border border-neutral-800 rounded-full leading-none">
    {children}
  </span>
);
