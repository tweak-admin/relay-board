/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, Calendar, Clock, MessageSquare, ArrowRight, Sparkles } from "lucide-react";
import { Badge, Input, Card, CardBody, CardFooter, Button } from "../components/ui";
import { blogPosts } from "../data/posts";
import { useSEO } from "../hooks/useSEO";

const CATEGORIES = ["All", "Product Management", "Release Management", "Product Strategy", "Analytics", "Engineering Tech"];

export default function Blog() {
  useSEO({
    title: "Company Blog & Strategic Priorities",
    description: "Read our comprehensive guides regarding product roadmap management, active Jira sync, Salesforce ARR indices, and customer-led prioritization models."
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Lazy Loading / Infinite Chunk Simulation (Edge Case 18)
  const [visibleCount, setVisibleCount] = useState(6);

  // Filter posts dynamically
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, filteredPosts.length));
  };

  // Extract featured post
  const featuredPost = useMemo(() => {
    return blogPosts.find((p) => p.featured) || blogPosts[0];
  }, []);

  return (
    <div className="bg-gray-50/50 min-h-screen pb-20">
      {/* 1. JUMBO INTRODUCTION HEADER */}
      <section className="bg-gray-50 border-b border-gray-150 py-16 lg:py-20" aria-label="Blog introduction bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
          <Badge variant="brand" className="font-mono tracking-widest text-[10px] font-extrabold uppercase">
            RESOURCES & IDEAS
          </Badge>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 max-w-4xl mx-auto">
            Our writing on B2B SaaS prioritizations.
          </h1>
          <p className="text-base sm:text-lg text-gray-650 max-w-2xl mx-auto">
            Operational frameworks, sprint guides, case reviews, and release notes templates curated by the Relayboard product squad.
          </p>

          {/* SEARCH & FILTER MODULE */}
          <div className="max-w-md mx-auto pt-4 relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
              <Search className="h-4.5 w-4.5" />
            </div>
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search posts, summaries..."
              className="pl-10 h-11 bg-white border border-gray-200 shadow-xs rounded-xl focus:ring-brand-500"
            />
          </div>
        </div>
      </section>

      {/* 2. CHOOSE CATEGORY TABS bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10" aria-label="Category Navigation">
        <div className="flex items-center space-x-3 overflow-x-auto pb-3 scrollbar-none border-b border-gray-200">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setVisibleCount(6); // Reset visible count on swap
              }}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg shrink-0 whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-neutral-900 text-white"
                  : "bg-white border border-gray-150 text-gray-500 hover:text-gray-900 hover:border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. FEATURED POST CARD (Only if filters allow) */}
      {activeCategory === "All" && !searchQuery && featuredPost && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12" aria-label="Featured Blog Post">
          <Link to={`/blog/${featuredPost.slug}`} className="group focus:outline-none">
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:border-gray-300 hover:shadow-md transition-all grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-6 aspect-video lg:aspect-auto relative min-h-[260px]">
                <img
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  className="object-cover w-full h-full group-hover:scale-102 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 inline-flex items-center space-x-1 px-2.5 py-1 rounded bg-neutral-950/85 text-xs font-mono font-bold text-brand-300 tracking-wider">
                  <Sparkles className="h-3 w-3 text-brand-300" />
                  <span>FEATURED STATEMENT</span>
                </span>
              </div>

              <div className="lg:col-span-6 p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-xs font-mono text-gray-400 font-semibold uppercase">
                    <span>{featuredPost.category}</span>
                    <span>•</span>
                    <span>{featuredPost.publishedAt}</span>
                  </div>

                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight leading-snug group-hover:text-brand-650 transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="text-sm text-gray-600 leading-relaxed font-sans font-medium">
                    {featuredPost.summary}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-3">
                    <img
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      referrerPolicy="no-referrer"
                      className="h-9 w-9 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <p className="text-xs font-bold text-gray-900">{featuredPost.author.name}</p>
                      <p className="text-[10px] text-gray-405 leading-none">{featuredPost.author.role}</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center text-xs font-mono font-bold text-brand-600">
                    <span>Read Article</span>
                    <ArrowRight className="ml-1.5 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* 4. CHRONOLOGICAL GRID FOR OTHERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12" aria-label="Regular Blog Grid">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(0, visibleCount).map((post) => (
            <Card key={post.slug} className="group border border-gray-150 shadow-xs hover:border-gray-350 hover:shadow-sm transition-all flex flex-col justify-between">
              <div>
                <Link to={`/blog/${post.slug}`} className="block relative aspect-video overflow-hidden bg-neutral-100 focus:outline-none">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="object-cover w-full h-full group-hover:scale-103 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold bg-white/90 text-gray-900 shadow-xs">
                    {post.category}
                  </span>
                </Link>

                <CardBody className="space-y-3">
                  <div className="flex items-center text-[10px] font-mono text-gray-400 font-semibold">
                    <span>{post.publishedAt}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <Link to={`/blog/${post.slug}`} className="block focus:outline-none group">
                    <h3 className="font-display text-base sm:text-lg font-extrabold text-neutral-950 leading-snug group-hover:text-brand-650 transition-colors">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed truncate-2-lines">
                    {post.summary}
                  </p>
                </CardBody>
              </div>

              <CardFooter className="bg-gray-55/30 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    referrerPolicy="no-referrer"
                    className="h-7 w-7 rounded-full object-cover"
                    loading="lazy"
                  />
                  <span className="text-[10px] font-bold text-gray-700">{post.author.name}</span>
                </div>
                <Link
                  to={`/blog/${post.slug}`}
                  className="font-mono text-[10px] font-bold text-brand-650 flex items-center space-x-1"
                >
                  <span>Read Post</span>
                  <ArrowRight className="h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Empty state conditional */}
        {filteredPosts.length === 0 && (
          <div className="text-center p-12 bg-white rounded-2xl border border-dashed border-gray-200 mt-6 space-y-3">
            <p className="text-sm font-semibold text-gray-500 font-sans">No matching articles found.</p>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
            >
              Reset filters
            </Button>
          </div>
        )}

        {/* LAZY LOAD CHUNKS ACTIVATE TRIGGER (Edge Case 18) */}
        {visibleCount < filteredPosts.length && (
          <div className="text-center pt-16">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white hover:bg-gray-50 font-bold border-gray-250 rounded-xl max-w-sm px-12"
              onClick={loadMore}
            >
              Load More Posts...
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}
