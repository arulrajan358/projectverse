"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, SlidersHorizontal, Star, ArrowUpDown, Tag } from "lucide-react";
import { MOCK_PROJECTS, CATEGORIES } from "@/lib/data";

export default function Marketplace() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("All");
  const [selectedPrice, setSelectedPrice] = useState<string>("All"); // All, Free, Under 3000, Over 3000
  const [sortBy, setSortBy] = useState<string>("trending"); // trending, price-asc, price-desc, rating

  // Extract all unique tech stack tags across mock projects
  const availableTags = useMemo(() => {
    const tags = new Set<string>();
    MOCK_PROJECTS.forEach((p) => p.techStack.forEach((t) => tags.add(t)));
    return Array.from(tags);
  }, []);

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return MOCK_PROJECTS.filter((proj) => {
      // Search matches
      const matchesSearch =
        proj.title.toLowerCase().includes(search.toLowerCase()) ||
        proj.description.toLowerCase().includes(search.toLowerCase());

      // Category matches
      const matchesCategory = selectedCategory === "All" || proj.category === selectedCategory;

      // Difficulty matches
      const matchesDifficulty = selectedDifficulty === "All" || proj.difficulty === selectedDifficulty;

      // Price matches
      let matchesPrice = true;
      if (selectedPrice === "Free") {
        matchesPrice = proj.price === 0;
      } else if (selectedPrice === "Under 3000") {
        matchesPrice = proj.price > 0 && proj.price < 3000;
      } else if (selectedPrice === "Over 3000") {
        matchesPrice = proj.price >= 3000;
      }

      // Tech tags matches
      const matchesTags =
        selectedTags.length === 0 || selectedTags.every((t) => proj.techStack.includes(t));

      return matchesSearch && matchesCategory && matchesDifficulty && matchesPrice && matchesTags;
    }).sort((a, b) => {
      if (sortBy === "trending") return b.isTrending === a.isTrending ? 0 : b.isTrending ? 1 : -1;
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });
  }, [search, selectedCategory, selectedDifficulty, selectedPrice, selectedTags, sortBy]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const resetFilters = () => {
    setSearch("");
    setSelectedCategory("All");
    setSelectedDifficulty("All");
    setSelectedPrice("All");
    setSelectedTags([]);
    setSortBy("trending");
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-200 pb-8 mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Project Marketplace</h1>
            <p className="text-sm text-slate-500 mt-1">Acquire pre-verified final year project templates, hardware kits, and codebundles.</p>
          </div>
          {/* Search Bar */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search code, kits, topics..."
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-800 focus:border-blue-500 focus:outline-none shadow-sm"
            />
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Filters Sidebar */}
          <div className="lg:col-span-3 space-y-6 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm sticky top-24">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <span className="flex items-center gap-1.5 font-bold text-slate-900 text-sm">
                <SlidersHorizontal className="h-4 w-4 text-slate-500" />
                Advanced Filters
              </span>
              <button
                onClick={resetFilters}
                className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                Clear All
              </button>
            </div>

            {/* Domains Category List */}
            <div>
              <label className="block text-xs font-bold text-slate-450 uppercase tracking-wider mb-2.5">Domain</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-slate-55 p-2 text-sm text-slate-700 focus:outline-none focus:border-blue-500"
              >
                <option value="All">All Categories</option>
                {CATEGORIES.map((cat, idx) => (
                  <option key={idx} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Difficulty Level */}
            <div>
              <label className="block text-xs font-bold text-slate-450 uppercase tracking-wider mb-2.5">Difficulty</label>
              <div className="space-y-2">
                {["All", "BEGINNER", "INTERMEDIATE", "ADVANCED"].map((level) => (
                  <label key={level} className="flex items-center gap-2.5 text-sm font-medium text-slate-650 cursor-pointer">
                    <input
                      type="radio"
                      name="difficulty"
                      checked={selectedDifficulty === level}
                      onChange={() => setSelectedDifficulty(level)}
                      className="h-4 w-4 text-blue-600 border-slate-300 focus:ring-blue-500"
                    />
                    <span>{level === "All" ? "All Levels" : level}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Tier */}
            <div>
              <label className="block text-xs font-bold text-slate-450 uppercase tracking-wider mb-2.5">Price Range</label>
              <div className="space-y-2">
                {[
                  { value: "All", label: "All Prices" },
                  { value: "Free", label: "Free Synopsis" },
                  { value: "Under 3000", label: "Under ₹3,000" },
                  { value: "Over 3000", label: "₹3,000 & Above" }
                ].map((tier) => (
                  <label key={tier.value} className="flex items-center gap-2.5 text-sm font-medium text-slate-650 cursor-pointer">
                    <input
                      type="radio"
                      name="priceRange"
                      checked={selectedPrice === tier.value}
                      onChange={() => setSelectedPrice(tier.value)}
                      className="h-4 w-4 text-blue-600 border-slate-300 focus:ring-blue-500"
                    />
                    <span>{tier.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Tech Stack Tags */}
            <div>
              <label className="block text-xs font-bold text-slate-450 uppercase tracking-wider mb-2.5">Technologies</label>
              <div className="flex flex-wrap gap-1.5 max-h-40 overflow-y-auto pr-1">
                {availableTags.map((tag) => {
                  const isSelected = selectedTags.includes(tag);
                  return (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`text-[10px] font-bold rounded px-2.5 py-1 flex items-center gap-1 border transition-all ${
                        isSelected
                          ? "bg-blue-600 border-blue-600 text-white"
                          : "bg-slate-50 border-slate-200 text-slate-650 hover:bg-slate-100"
                      }`}
                    >
                      <Tag className="h-2.5 w-2.5" />
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Listing & Sorting */}
          <div className="lg:col-span-9 space-y-6">
            {/* Control Bar: Stats & Sorting */}
            <div className="flex items-center justify-between bg-white px-5 py-4 rounded-xl border border-slate-200/80 shadow-sm text-sm">
              <span className="font-semibold text-slate-600">
                Showing <span className="text-slate-900">{filteredProjects.length}</span> Project{filteredProjects.length === 1 ? "" : "s"}
              </span>

              <div className="flex items-center gap-2">
                <ArrowUpDown className="h-4 w-4 text-slate-400" />
                <span className="text-xs text-slate-400 font-bold uppercase">Sort By:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent border-0 text-slate-750 font-bold focus:outline-none cursor-pointer"
                >
                  <option value="trending">Trending First</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>

            {/* Projects Grid */}
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((proj) => (
                  <div
                    key={proj.id}
                    className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <div className="relative h-44 w-full bg-slate-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={proj.images[0]}
                        alt={proj.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-3.5 left-3.5 rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-bold text-blue-600 shadow-sm">
                        {proj.category}
                      </div>
                    </div>

                    <div className="p-5 flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="inline-flex items-center rounded bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-500">
                            {proj.difficulty}
                          </span>
                          <div className="flex items-center text-xs font-bold text-amber-500">
                            <Star className="h-3 w-3 fill-current mr-0.5" />
                            {proj.rating}
                          </div>
                        </div>
                        <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1 mb-1">
                          {proj.title}
                        </h3>
                        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
                          {proj.description}
                        </p>
                      </div>

                      <div>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {proj.techStack.slice(0, 3).map((tech, idx) => (
                            <span key={idx} className="rounded bg-slate-50 px-2 py-0.5 text-[9px] font-bold text-slate-450 border border-slate-100">
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                          <div>
                            <div className="text-[9px] text-slate-400 font-bold uppercase">Price</div>
                            <div className="text-base font-black text-slate-900">₹{proj.price}</div>
                          </div>
                          <Link
                            href={`/marketplace/${proj.id}`}
                            className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-bold text-white hover:bg-blue-700 transition-colors"
                          >
                            Get Kit
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-2xl border border-slate-200/80 shadow-sm">
                <SlidersHorizontal className="h-10 w-10 text-slate-350 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-800">No projects found</h3>
                <p className="text-sm text-slate-400 mt-1.5 max-w-sm mx-auto">Try broadening your keywords or resetting filters to show matches.</p>
                <button
                  onClick={resetFilters}
                  className="mt-6 rounded-lg bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-600 hover:bg-blue-100 transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
