/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Bookmark, Share2 } from "lucide-react";
import { Badge, Avatar, Button } from "../components/ui";
import { blogPosts } from "../data/posts";
import { useSEO } from "../hooks/useSEO";

export default function BlogPostDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Spot matching post
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    if (!post) {
      navigate("/not-found-fallback", { replace: true });
    }
  }, [post, navigate]);

  useSEO({
    title: post ? post.title : "Product Prioritization Blog",
    description: post?.summary || "Read strategic articles on B2B product engineering roadmap lines."
  });

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <p className="text-sm font-semibold text-gray-500 animate-pulse">Navigating to article details...</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* HEADER HERO AREA */}
      <div className="border-b border-gray-100 py-12 lg:py-20 bg-gray-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 text-xs font-semibold text-gray-500 hover:text-gray-900 transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Blog Index</span>
          </Link>

          <div className="flex items-center space-x-2">
            <Badge variant="brand" className="font-mono text-[10px] uppercase font-bold tracking-wider rounded">
              {post.category}
            </Badge>
            <span className="text-gray-400 font-bold text-xs font-mono">•</span>
            <span className="text-xs text-gray-450 font-semibold font-mono">{post.publishedAt}</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 leading-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-gray-650 font-medium leading-relaxed font-sans mt-2">
            {post.summary}
          </p>

          <div className="flex items-center space-x-4 pt-4">
            <Avatar src={post.author.avatar} name={post.author.name} className="h-10 w-10 ring-1 ring-gray-200" />
            <div>
              <p className="text-sm font-bold text-gray-900">{post.author.name}</p>
              <p className="text-xs text-gray-455 font-semibold leading-none mt-0.5">{post.author.role}</p>
            </div>
          </div>
        </div>
      </div>

      {/* CORE WRAPPER LAYOUT (Side Anchors + Scrollable text body) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* TABLE OF CONTENTS STICKY SIDEBAR (Edge Case 12) */}
          <aside className="col-span-1 lg:col-span-3 lg:sticky lg:top-28 space-y-6 lg:border-r border-gray-100 pr-4 py-2 shrink-0 hidden lg:block">
            <p className="text-xs font-bold uppercase text-gray-400 tracking-wider">On this page</p>
            <div className="space-y-4 text-xs font-semibold">
              <a href="#toc-heading-1" className="block text-gray-500 hover:text-neutral-950 transition-colors">
                1. Core Objectives
              </a>
              <a href="#toc-heading-2" className="block text-gray-500 hover:text-neutral-950 transition-colors">
                2. Key Pitfalls
              </a>
              <a href="#toc-heading-3" className="block text-gray-500 hover:text-neutral-950 transition-colors">
                3. The Strategy Loop
              </a>
            </div>

            <div className="pt-6 border-t border-gray-100 space-y-3">
              <p className="text-xs font-bold uppercase text-gray-450 tracking-wider">Share Article</p>
              <div className="flex space-x-2">
                <button
                  onClick={() => alert("Copied slug link to your clipboard!")}
                  className="p-1.5 rounded bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-500 hover:text-neutral-900 cursor-pointer"
                  aria-label="Copy short link"
                >
                  <Share2 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => alert("Post added to reading benchmarks.")}
                  className="p-1.5 rounded bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-500 hover:text-neutral-900 cursor-pointer"
                  aria-label="Bookmark post"
                >
                  <Bookmark className="h-4 w-4" />
                </button>
              </div>
            </div>
          </aside>

          {/* MAIN ARTICLES MARKDOWN RENDERING WINDOW (Rich Typography) */}
          <article className="col-span-1 lg:col-span-9 space-y-8 leading-relaxed font-sans">
            <div className="rounded-2xl overflow-hidden aspect-video border border-gray-200 shadow-sm relative select-none">
              <img
                src={post.coverImage}
                alt={post.title}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>

            {/* Simulated Heading anchors inside long scroll blocks */}
            <div id="toc-heading-1" className="scroll-mt-28">
              <span className="text-[10px] font-mono font-bold text-brand-600 uppercase">SECTION 1</span>
            </div>

            {/* Rendering the HTML formatted copy */}
            <div
              className="markdown-body text-gray-700 space-y-6"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            <div id="toc-heading-2" className="scroll-mt-28 border-t border-gray-100 pt-6">
              <span className="text-[10px] font-mono font-bold text-brand-600 uppercase">SECTION 2</span>
              <h2 className="font-display text-2xl font-bold tracking-tight text-neutral-900 mt-2">Pragmatic application inside sprint teams</h2>
              <p className="text-sm sm:text-base text-gray-650 mt-3 leading-relaxed">
                When structuring these prioritizing templates, make sure to include direct visual representations of current roadmaps. If custom elements are introduced without verification, engineers have to duplicate workflow logs, which increases technical debt and slows development velocity.
              </p>
            </div>

            {/* Blockquote with pull quote highlights */}
            <blockquote className="border-l-4 border-brand-500 bg-brand-50/40 p-6 rounded-r-2xl font-sans italic text-gray-800 font-medium">
              “Building a software product requires continuous compromise. Our metric weighting is the ultimate tool PMs use to negotiate requests with enterprise commercial divisions.”
            </blockquote>

            <div id="toc-heading-3" className="scroll-mt-28 border-t border-gray-100 pt-6">
              <span className="text-[10px] font-mono font-bold text-brand-600 uppercase">SECTION 3</span>
              <h2 className="font-display text-2xl font-bold tracking-tight text-neutral-900 mt-2">Next Steps</h2>
              <p className="text-sm sm:text-base text-gray-650 mt-3 leading-relaxed">
                To start establishing professional B2B roadmap practices, sign up for a free sandboxed Relayboard account and configure Jira bidirectional integrations. Gaining alignment takes less than ten minutes.
              </p>
            </div>

            {/* Back Button footer action links */}
            <div className="pt-12 border-t border-gray-150 flex justify-between items-center shrink-0">
              <Link to="/blog" className="inline-flex items-center space-x-1.5 text-sm font-semibold text-gray-500 hover:text-gray-900">
                <ArrowLeft className="h-4 w-4" />
                <span>Return to Blog Index</span>
              </Link>
              <Link to="/demo" className="inline-flex items-center space-x-1 text-sm font-semibold text-brand-605">
                <span>Play with interactive roadmap</span>
                <ArrowLeft className="h-4 w-4 transform rotate-180" />
              </Link>
            </div>

          </article>
        </div>
      </div>
    </div>
  );
}
