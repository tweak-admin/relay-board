/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { SiteLayout } from "./layouts/SiteLayout";
import ScrollToTop from "./components/ScrollToTop";

// Marketing & Platform Pages
import Home from "./pages/Home";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Customers from "./pages/Customers";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Blog from "./pages/Blog";
import BlogPostDetail from "./pages/BlogPostDetail";
import Changelog from "./pages/Changelog";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Demo from "./pages/Demo";
import { Button } from "./components/ui";

// Simple descriptive 404 Fallback component
function NotFoundFallback() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 space-y-6">
      <span className="text-sm font-mono font-bold text-gray-400 select-none bg-gray-100 border border-gray-200 px-3 py-1 rounded-full uppercase leading-none">
        404 ERROR
      </span>
      <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight leading-none">
        This roadmap is undefined.
      </h2>
      <p className="text-sm sm:text-base text-gray-500 max-w-sm mx-auto leading-relaxed">
        The coordinates you requested do not correlate with an active feature index. Return to standard navigation boards.
      </p>
      <div className="pt-2 flex items-center justify-center gap-3">
        <Link to="/" className="text-xs font-bold uppercase tracking-wider text-white bg-neutral-950 hover:bg-neutral-850 px-5 h-10 inline-flex items-center rounded-xl shadow-xs">
          Return Home
        </Link>
        <Link to="/contact" className="text-xs font-bold uppercase tracking-wider text-gray-700 bg-white border border-gray-200 shadow-xs hover:bg-gray-50 px-5 h-10 inline-flex items-center rounded-xl">
          Contact Integrators
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* All routes grouped underneath standard SiteLayout wrapper */}
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="customers" element={<Customers />} />
          <Route path="customers/:slug" element={<CaseStudyDetail />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPostDetail />} />
          <Route path="changelog" element={<Changelog />} />
          <Route path="about" element={<About />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="demo" element={<Demo />} />
          <Route path="*" element={<NotFoundFallback />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
