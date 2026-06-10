/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  MessageSquare, Layers, Sparkles, Search, Sliders, CheckSquare, Plus,
  Share2, ChevronUp, Clock, Filter, AlertCircle, RefreshCw, LogOut, Settings, User, Bell, ThumbsUp
} from "lucide-react";
import { Badge, Card, CardBody, Button, Sheet, Input, Select, Checkbox, Avatar, Tabs, Tooltip, DropdownMenu, DropdownItem } from "../components/ui";
import { initialFeedbackData } from "../data/demo-feedback";
import { useSEO } from "../hooks/useSEO";
import { useGlobalActions } from "../layouts/SiteLayout";

export default function Demo() {
  useSEO({
    title: "Interactive Sandbox Dashboard",
    description: "Experience Relayboard's fully operational user board. Test filters, trigger detailed commenting slide-overs, and upvote customer feedback in real-time."
  });

  const { showToast } = useGlobalActions();
  const navigate = useNavigate();

  // Core loading state (Edge Case 23: Skeleton Loader)
  const [isLoading, setIsLoading] = useState(true);
  
  // Dashboard states
  const [feedbackList, setFeedbackList] = useState(initialFeedbackData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [priorityFilter, setPriorityFilter] = useState<string>("All");
  const [categoryFilter, setCategoryFilter] = useState<string>("All");
  const [showShipped, setShowShipped] = useState(true); // Toggle (Edge Case 10: Conditional render)
  const [sortBy, setSortBy] = useState<"votes" | "date">("votes");

  // Secondary interactive structures
  const [activeTab, setActiveTab] = useState("feedback"); // Tabs (Edge Case 5)
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<typeof initialFeedbackData[0] | null>(null);
  const [newCommentText, setNewCommentText] = useState("");

  // Simulated project state
  const [activeProject, setActiveProject] = useState("Acme SaaS Engine");

  // Trigger skeleton loader on entry
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  // Recalculate upvote action
  const handleVoteToggle = (id: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Avoid opening drawer
    setFeedbackList((prevList) =>
      prevList.map((item) => {
        if (item.id === id) {
          const hasVoted = item.userVoted;
          const updatedVotes = hasVoted ? item.votes - 1 : item.votes + 1;
          showToast(hasVoted ? "Vote withdrawn." : "Upvote recorded successfully!", "success");
          return {
            ...item,
            votes: updatedVotes,
            userVoted: !hasVoted
          };
        }
        return item;
      })
    );
  };

  // Select row card to open sliding details drawer
  const handleRowClick = (item: typeof initialFeedbackData[0]) => {
    setSelectedItem(item);
    setDrawerOpen(true);
  };

  // Submit comment inside thread drawer
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim() || !selectedItem) return;

    const newComment = {
      id: Math.random().toString(36).substring(2, 9),
      author: {
        name: "Evelyn Sterling (You)",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120",
        isStaff: true
      },
      content: newCommentText,
      createdAt: new Date().toISOString()
    };

    // Update global state and nested selectedItem
    setFeedbackList((prevList) =>
      prevList.map((item) => {
        if (item.id === selectedItem.id) {
          return {
            ...item,
            comments: [...item.comments, newComment]
          };
        }
        return item;
      })
    );

    setSelectedItem((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        comments: [...prev.comments, newComment]
      };
    });

    setNewCommentText("");
    showToast("Comment recorded inside transaction thread.", "success");
  };

  // Filter & sort calculations
  const filteredData = useMemo(() => {
    return feedbackList
      .filter((item) => {
        // Search query
        const textToSearch = `${item.title} ${item.description} ${item.tags.join(" ")}`.toLowerCase();
        const matchesSearch = textToSearch.includes(searchQuery.toLowerCase());

        // Status filter dropdown
        const matchesStatus = statusFilter === "All" || item.status === statusFilter;

        // Priority filter dropdown
        const matchesPriority = priorityFilter === "All" || item.priority === priorityFilter;

        // Category filter dropdown
        const matchesCategory = categoryFilter === "All" || item.category === categoryFilter;

        // Conditional display of Shipped items
        const passesShippedToggle = showShipped ? true : item.status !== "Shipped";

        return matchesSearch && matchesStatus && matchesPriority && matchesCategory && passesShippedToggle;
      })
      .sort((a, b) => {
        if (sortBy === "votes") {
          return b.votes - a.votes;
        } else {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        }
      });
  }, [feedbackList, searchQuery, statusFilter, priorityFilter, categoryFilter, showShipped, sortBy]);

  const clearAllFilters = () => {
    setSearchQuery("");
    setStatusFilter("All");
    setPriorityFilter("All");
    setCategoryFilter("All");
    setShowShipped(true);
    setSortBy("votes");
    showToast("All filters successfully reset.", "info");
  };

  return (
    <div className="flex flex-1 h-screen overflow-hidden text-gray-800 font-sans">
      {/* 1. LEFT SIDEBAR */}
      <aside className="hidden md:flex flex-col w-64 bg-neutral-900 border-r border-neutral-800 text-white shrink-0 z-10">
        {/* Workspace select block */}
        <div className="p-4 border-b border-neutral-800">
          <DropdownMenu
            align="left"
            trigger={
              <button className="flex items-center justify-between w-full px-3 py-2 bg-neutral-950 border border-neutral-850 rounded-xl hover:border-neutral-700 transition-colors text-left cursor-pointer">
                <div className="flex items-center space-x-2.5">
                  <div className="h-6.5 w-6.5 rounded-lg bg-brand-600 flex items-center justify-center text-white font-bold text-xs select-none shadow-sm">
                    A
                  </div>
                  <div>
                    <h4 className="text-xs font-bold leading-none text-white">{activeProject}</h4>
                    <p className="text-[9px] text-gray-500 font-bold uppercase tracking-wider mt-0.5">Admin Desk</p>
                  </div>
                </div>
                <Sliders className="h-3.5 w-3.5 text-gray-500 shrink-0" />
              </button>
            }
          >
            <p className="px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-gray-400">Project Workspace</p>
            <DropdownItem onClick={() => { setActiveProject("Acme SaaS Engine"); showToast("Swapped to Acme workspace", "info"); }}>Acme SaaS Engine</DropdownItem>
            <DropdownItem onClick={() => { setActiveProject("Nova Commerce Hub"); showToast("Swapped to Nova workspace", "info"); }}>Nova Commerce Hub</DropdownItem>
            <DropdownItem onClick={() => { setActiveProject("Linearis Tracking"); showToast("Swapped to Linearis workspace & Jira logs", "info"); }}>Linearis Tracking</DropdownItem>
          </DropdownMenu>
        </div>

        {/* Sidebar Nav Links */}
        <nav className="flex-grow p-4 space-y-1.5 font-sans">
          {[
            { id: "feedback", label: "User Feedback", count: feedbackList.length, icon: <MessageSquare className="h-4.5 w-4.5" /> },
            { id: "roadmap", label: "Interactive Roadmaps", count: 4, icon: <Layers className="h-4.5 w-4.5" /> },
            { id: "integrations", label: "Integration Logs", count: 2, icon: <Sliders className="h-4.5 w-4.5" /> },
            { id: "settings", label: "Workspace Settings", count: undefined, icon: <Settings className="h-4.5 w-4.5" /> }
          ].map((nav) => {
            const isActive = activeTab === nav.id;
            return (
              <button
                key={nav.id}
                onClick={() => {
                  setActiveTab(nav.id);
                  showToast(`Selected menu tab: ${nav.label}`, "info");
                }}
                className={`flex items-center justify-between w-full px-3 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                  isActive
                    ? "bg-neutral-800 text-white shadow-xs"
                    : "text-gray-400 hover:text-white hover:bg-neutral-850"
                }`}
              >
                <div className="flex items-center space-x-3">
                  {nav.icon}
                  <span>{nav.label}</span>
                </div>
                {nav.count !== undefined && (
                  <span className="text-[10px] font-bold bg-neutral-950 border border-neutral-850 px-2 py-0.5 rounded-full text-brand-300">
                    {nav.count}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Sidebar Footer Profiles */}
        <div className="p-4 border-t border-neutral-800 bg-neutral-950">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2.5 select-none">
              <Avatar src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120" name="Evelyn Sterling" className="h-9 w-9 border border-neutral-800" />
              <div>
                <p className="text-xs font-bold leading-none text-white">Evelyn Sterling</p>
                <p className="text-[9px] text-gray-500 font-bold uppercase mt-0.5">Product VP</p>
              </div>
            </div>
            <Link to="/" className="p-1.5 rounded-lg hover:bg-neutral-850 text-gray-400 hover:text-white transition-colors" title="Logout to marketing page">
              <LogOut className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </aside>

      {/* 2. MAIN WORKSPACE VIEWPORT */}
      <main className="flex-1 flex flex-col bg-gray-50 overflow-hidden">
        {/* Top bar header */}
        <header className="h-16 border-b border-gray-150 bg-white px-6 flex items-center justify-between shrink-0 z-20">
          <div className="flex items-center space-x-4">
            <Link to="/" className="md:hidden flex items-center space-x-2">
              <div className="h-7 w-7 rounded bg-neutral-950 flex items-center justify-center text-white">
                <Layers className="h-4.5 w-4.5 text-brand-300" />
              </div>
            </Link>
            <h1 className="text-base font-bold text-gray-900 flex items-center gap-1.5">
              <span>Rep Prioritization Board</span>
              <Badge variant="neutral" className="font-mono text-[9px] uppercase font-bold py-0 sticky z-40 bg-gray-50 text-gray-600 border-gray-200">
                SANDBOX SANDBOX
              </Badge>
            </h1>
          </div>

          <div className="flex items-center space-x-4 shrink-0">
            {/* Top share / export buttons */}
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                showToast("Sandbox shareable link copied to clipboard!", "success");
              }}
              className="text-xs h-9 rounded-xl hidden sm:inline-flex"
            >
              <Share2 className="mr-2 h-3.5 w-3.5" />
              <span>Share Board</span>
            </Button>
            
            <DropdownMenu
              trigger={
                <button className="h-9 w-9 rounded-full overflow-hidden bg-gray-100 ring-1 ring-gray-200 shadow-xs cursor-pointer focus:outline-none">
                  <Avatar src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120" name="Evelyn Sterling" className="h-full w-full" />
                </button>
              }
            >
              <p className="px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-gray-400">Account</p>
              <DropdownItem onClick={() => showToast("Account setup opened.", "info")}><User className="h-4 w-4 mr-2" />Profile Setup</DropdownItem>
              <DropdownItem onClick={() => showToast("Security audits stable.", "info")}><CheckSquare className="h-4 w-4 mr-2 font-bold" />Compliance logs</DropdownItem>
              <DropdownItem onClick={() => navigate("/")}><LogOut className="h-4 w-4 mr-2" />Marketing pages</DropdownItem>
            </DropdownMenu>
          </div>
        </header>

        {/* Dynamic Loading Handler (SKELETON ANIMATIONS - Edge Case 23) */}
        {isLoading ? (
          <div className="flex-grow p-6 space-y-6 overflow-y-auto" role="status" aria-label="Loading workspace statistics">
            {/* Top Bar Skeleton */}
            <div className="h-10 bg-gray-200 rounded-xl w-1/3 animate-pulse" />
            
            {/* Multi cards skeletons */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-20 bg-gray-200 rounded-xl animate-pulse" />
              ))}
            </div>

            {/* Table layout skeleton */}
            <div className="space-y-3 pt-6">
              <div className="h-8 bg-gray-200 rounded-lg w-full animate-pulse" />
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-14 bg-gray-150 rounded-lg w-full animate-pulse" />
              ))}
            </div>
          </div>
        ) : (
          // ----------------- LOADED COMPLETED WORKSPACE -----------------
          <div className="flex-grow overflow-y-auto p-4 sm:p-6 space-y-6">
            
            {/* Tab selection representations */}
            {activeTab !== "feedback" ? (
              <div className="bg-white border border-gray-150 p-12 text-center rounded-2xl space-y-3">
                <AlertCircle className="h-10 w-10 text-brand-600 mx-auto" />
                <h3 className="font-display text-lg font-bold">This is an interactive feature teaser</h3>
                <p className="text-xs text-gray-500 max-w-sm mx-auto">
                  To view and configure our live drag-friendly Kanban Roadmaps or Jira Integration Logs, connect your database systems by starting a trial.
                </p>
                <div className="pt-2">
                  <Button variant="primary" size="sm" className="rounded-xl" onClick={() => setActiveTab("feedback")}>
                    Return to Feedback Table
                  </Button>
                </div>
              </div>
            ) : (
              <>
                {/* 1. STATUS SUMMARY COUNTERS */}
                <section className="grid grid-cols-2 lg:grid-cols-4 gap-4" aria-label="Feedback Metrics Summaries">
                  {[
                    { label: "Aggregate Active Cards", count: feedbackList.length, color: "border-brand-500", text: "text-brand-700" },
                    { label: "Target Sprints Sorted", count: feedbackList.filter(f => f.status === "Planned").length, color: "border-yellow-500", text: "text-yellow-700" },
                    { label: "Active Developments", count: feedbackList.filter(f => f.status === "In progress").length, color: "border-blue-500", text: "text-blue-700" },
                    { label: "Released Upgrades", count: feedbackList.filter(f => f.status === "Shipped").length, color: "border-emerald-500", text: "text-emerald-700" }
                  ].map((stat) => (
                    <div key={stat.label} className={`bg-white border-l-4 ${stat.color} p-4 rounded-xl shadow-xs border-y border-r border-gray-150`}>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-450 leading-none">{stat.label}</p>
                      <p className="text-2xl font-bold font-display mt-2 leading-none text-gray-900">{stat.count}</p>
                    </div>
                  ))}
                </section>

                {/* 2. DUMP OF CONTROLS & FILTERS (Edge Case 9) */}
                <section className="bg-white border border-gray-200 rounded-2xl p-4 shadow-xs space-y-4" aria-label="Filters and Sort tools">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    
                    {/* Search Field */}
                    <div className="relative flex-1 max-w-sm">
                      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
                        <Search className="h-4 w-4" />
                      </div>
                      <Input
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search tags, ticket bodies..."
                        className="pl-9 h-10 bg-white border border-gray-255 rounded-xl text-xs"
                      />
                    </div>

                    {/* Filter Dropdowns */}
                    <div className="flex flex-wrap items-center gap-3">
                      <div>
                        <Select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="h-10 text-xs py-1.5 min-w-32">
                          <option value="All">All Statuses</option>
                          <option value="New">New</option>
                          <option value="Planned">Planned</option>
                          <option value="In progress">In progress</option>
                          <option value="Shipped">Shipped</option>
                        </Select>
                      </div>

                      <div>
                        <Select value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value)} className="h-10 text-xs py-1.5 min-w-32">
                          <option value="All">All Priorities</option>
                          <option value="High">High Priority</option>
                          <option value="Medium">Medium Priority</option>
                          <option value="Low">Low Priority</option>
                        </Select>
                      </div>

                      <div>
                        <Select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className="h-10 text-xs py-1.5 min-w-36">
                          <option value="All">All Categories</option>
                          <option value="Feature Request">Feature Requests</option>
                          <option value="Bug Report">Bug Reports</option>
                          <option value="Integration">Integrations</option>
                          <option value="UX Choice">UX choices</option>
                        </Select>
                      </div>

                      {/* Sort switcher */}
                      <div>
                        <Select value={sortBy} onChange={(e) => setSortBy(e.target.value as "votes" | "date")} className="h-10 text-xs py-1.5 min-w-32 font-bold bg-neutral-900 border-neutral-900 text-white cursor-pointer" title="Switch priority sorting index">
                          <option value="votes">Sort by Votes (Default)</option>
                          <option value="date">Sort by Age Created</option>
                        </Select>
                      </div>
                    </div>

                  </div>

                  {/* Toggle controls & Clear button row */}
                  <div className="border-t border-gray-100 pt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex items-center space-x-6">
                      {/* Checkbox conditional render toggler (Edge Case 10) */}
                      <Checkbox
                        id="shipped-toggle"
                        checked={showShipped}
                        onChange={(e) => {
                          setShowShipped(e.target.checked);
                          showToast(e.target.checked ? "Displaying Shipped updates" : "Hiding Shipped updates.", "info");
                        }}
                        label="Display Shipped items in rows"
                      />
                    </div>

                    <button
                      onClick={clearAllFilters}
                      className="text-xs font-bold text-brand-650 hover:text-brand-850 flex items-center space-x-1 cursor-pointer font-mono"
                    >
                      <RefreshCw className="h-3 w-3" />
                      <span>Clear Core Filters</span>
                    </button>
                  </div>
                </section>

                {/* 3. CORE INTERACTIVE DATA TABLE */}
                <div className="overflow-x-auto border border-gray-150 rounded-2xl bg-white shadow-xs">
                  <table className="w-full text-left border-collapse min-w-[700px]">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-150 text-xs font-bold text-gray-500 uppercase">
                        <th className="px-6 py-4.5 font-semibold text-center w-18">Votes</th>
                        <th className="px-6 py-4.5 font-semibold">Title & Category</th>
                        <th className="px-6 py-4.5 font-semibold w-32">Status</th>
                        <th className="px-6 py-4.5 font-semibold w-28">Priority</th>
                        <th className="px-6 py-4.5 font-semibold hidden md:table-cell">Reporter</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-150 text-sm">
                      {filteredData.map((item) => {
                        const statusColorMap = {
                          New: "bg-gray-100 text-gray-700 border-gray-200",
                          Planned: "bg-yellow-50 text-yellow-700 border-yellow-250",
                          "In progress": "bg-blue-50 text-blue-700 border-blue-250",
                          Shipped: "bg-emerald-50 text-emerald-700 border-emerald-250"
                        };

                        const priorityColorMap = {
                          Low: "neutral",
                          Medium: "warning",
                          High: "error"
                        } as const;

                        return (
                          <tr
                            key={item.id}
                            onClick={() => handleRowClick(item)}
                            className="hover:bg-gray-55/75 transition-colors cursor-pointer"
                          >
                            {/* Vote Recalculate component */}
                            <td className="px-6 py-4 text-center shrink-0">
                              <button
                                onClick={(e) => handleVoteToggle(item.id, e)}
                                className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all border shrink-0 w-12 hover:scale-102 cursor-pointer ${
                                  item.userVoted
                                    ? "bg-brand-600 border-brand-700 text-white shadow-xs"
                                    : "bg-gray-50 border-gray-200 hover:border-gray-300 text-gray-700"
                                }`}
                              >
                                <ChevronUp className="h-4.5 w-4.5" />
                                <span className="text-xs font-extrabold font-mono mt-0.5">{item.votes}</span>
                              </button>
                            </td>

                            {/* Title & tags */}
                            <td className="px-6 py-4 space-y-1.5">
                              <div className="flex flex-wrap items-center gap-2">
                                <Badge variant="neutral" className="font-mono text-[9px] uppercase font-bold tracking-wider leading-none">
                                  {item.category}
                                </Badge>
                                <span className="text-xs font-bold text-gray-400 font-mono">#{item.id}</span>
                              </div>
                              <h3 className="text-sm font-semibold text-gray-900 leading-tight">
                                {item.title}
                              </h3>
                              <p className="text-xs text-gray-500 leading-tight truncate max-w-md">
                                {item.description}
                              </p>
                              
                              <div className="flex flex-wrap gap-1 pt-1.5">
                                {item.tags.map((tag) => (
                                  <span key={tag} className="inline-flex items-center px-1.5 py-0.2 rounded bg-gray-100 text-gray-600 text-[9px] font-medium leading-none">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </td>

                            {/* Status label */}
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${statusColorMap[item.status]}`}>
                                {item.status}
                              </span>
                            </td>

                            {/* Priority level */}
                            <td className="px-6 py-4 whitespace-nowrap">
                              <Badge variant={priorityColorMap[item.priority]}>
                                {item.priority}
                              </Badge>
                            </td>

                            {/* Reporter User */}
                            <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                              <div className="flex items-center space-x-2.5 select-none focus:outline-none">
                                <Avatar src={item.user.avatar} name={item.user.name} className="h-7 w-7" />
                                <div>
                                  <p className="text-xs font-bold leading-none text-gray-900">{item.user.name}</p>
                                  <p className="text-[10px] text-gray-400 font-medium font-mono leading-none mt-0.5">{item.user.email}</p>
                                </div>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  
                  {/* Empty state representation toggle */}
                  {filteredData.length === 0 && (
                    <div className="text-center p-16 bg-white space-y-3">
                      <AlertCircle className="h-10 w-10 text-brand-605 mx-auto" />
                      <h3 className="font-display text-base font-bold text-gray-900">No matching tickets found</h3>
                      <p className="text-xs text-gray-400 max-w-md mx-auto">
                        Your filters hid every active database row. Try resetting your tags or clearing searches to inspect feedback metrics.
                      </p>
                      <div className="pt-2">
                        <Button variant="secondary" size="sm" onClick={clearAllFilters} className="rounded-xl">
                          Reset Grid Filters
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}

          </div>
        )}
      </main>

      {/* 3. CONVERSATION SIDE DRAWER SLIDE-OVER (Edge Case 2) */}
      <Sheet
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        title={selectedItem ? `Item Info - #${selectedItem.id}` : "Detail Panel"}
      >
        {selectedItem && (
          <div className="space-y-6">
            <div className="space-y-2 pb-6 border-b border-gray-100">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold font-mono tracking-widest text-brand-700 bg-brand-50 border border-brand-200 uppercase leading-none">
                {selectedItem.category}
              </span>
              <h3 className="font-display text-lg font-bold text-gray-900 mt-1 leading-tight">{selectedItem.title}</h3>
              <p className="text-sm text-gray-650 leading-relaxed font-sans mt-3">
                {selectedItem.description}
              </p>
            </div>

            {/* Panel details metrics group */}
            <div className="grid grid-cols-2 gap-4 pb-6 border-b border-gray-150 text-xs">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-gray-400 uppercase leading-none">Current Status</span>
                <p className="text-sm font-semibold text-gray-900">{selectedItem.status}</p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-gray-400 uppercase leading-none">Total Votes</span>
                <p className="text-sm font-semibold text-gray-900">{selectedItem.votes}</p>
              </div>
            </div>

            {/* Conversation Threads (Thread list of comments) */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold font-mono tracking-widest text-gray-400 uppercase">
                COMMENTS THREAD ({selectedItem.comments.length})
              </h4>
              
              <div className="space-y-4 max-h-72 overflow-y-auto pr-1">
                {selectedItem.comments.map((comm) => (
                  <div key={comm.id} className="p-3 bg-gray-50 border border-gray-150 rounded-xl space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Avatar src={comm.author.avatar} name={comm.author.name} className="h-6 w-6" />
                        <span className="text-xs font-bold text-gray-700">{comm.author.name}</span>
                      </div>
                      
                      {comm.author.isStaff && (
                        <span className="px-1.5 py-0.2 rounded bg-neutral-900 text-white text-[8px] font-bold uppercase font-mono leading-none">
                          Staff
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 leading-normal leading-relaxed pl-1">
                      {comm.content}
                    </p>
                  </div>
                ))}

                {selectedItem.comments.length === 0 && (
                  <p className="text-center py-6 text-xs text-gray-400 italic">No comments in thread yet. Be the first to advise.</p>
                )}
              </div>

              {/* Thread inputs form */}
              <form onSubmit={handleCommentSubmit} className="space-y-2 pt-2 border-t border-gray-100">
                <Input
                  required
                  placeholder="Post brief reply in advice comments..."
                  value={newCommentText}
                  onChange={(e) => setNewCommentText(e.target.value)}
                  className="h-10 text-xs rounded-xl bg-white border border-gray-230 font-medium"
                />
                <div className="text-right">
                  <Button type="submit" size="sm" className="rounded-lg h-8 text-[10px] bg-neutral-900 text-white hover:bg-neutral-800">
                    Submit Response
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </Sheet>
    </div>
  );
}
