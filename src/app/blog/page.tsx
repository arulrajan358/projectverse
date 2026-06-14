"use client";

import { useState } from "react";
import Link from "next/link";
import { BookOpen, Search, Clock, ArrowRight, Tag } from "lucide-react";
import { MOCK_BLOGS } from "@/lib/data";

const CATEGORIES = ["All", "AI", "Data Science", "Career", "Interview Preparation", "Technology"];

export default function BlogIndex() {
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState("All");

  const filteredBlogs = MOCK_BLOGS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesCat = selectedCat === "All" || post.category === selectedCat;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-200 pb-8 mb-10">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              ProjectVerse Blog
            </h1>
            <p className="text-sm text-slate-500 mt-1 font-medium">Insights from industry experts on building project architecture, final year defense, and landing technical placements.</p>
          </div>

          <div className="flex items-center gap-4 w-full md:max-w-xs">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search articles..."
                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-xs text-slate-800 focus:border-blue-500 focus:outline-none shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`text-xs font-bold rounded-full px-4.5 py-2 border transition-all ${
                selectedCat === cat
                  ? "bg-slate-900 border-slate-900 text-white"
                  : "bg-white border-slate-200 text-slate-650 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredBlogs.map((post) => (
              <article
                key={post.id}
                className="group bg-white border border-slate-200/85 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 w-full bg-slate-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-103"
                    />
                    <div className="absolute top-4 left-4 rounded-full bg-white/95 px-3.5 py-1 text-xs font-bold text-slate-900 shadow-sm flex items-center gap-1">
                      <Tag className="h-3 w-3 text-blue-500" />
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-3 text-xs text-slate-400 font-semibold mb-3">
                      <span>{post.publishedAt}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug mb-3">
                      {post.title}
                    </h2>
                    <p className="text-sm text-slate-500 line-clamp-3 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 sm:px-8 sm:pb-8 border-t border-slate-50 pt-5 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.authorAvatar}
                      alt=""
                      className="h-9 w-9 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-xs font-bold text-slate-900">{post.authorName}</div>
                      <div className="text-[10px] text-slate-400">{post.authorRole}</div>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 transition-all group-hover:translate-x-0.5"
                  >
                    Read Article
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
            <BookOpen className="h-10 w-10 text-slate-350 mx-auto mb-4" />
            <h3 className="text-base font-bold text-slate-800">No articles found</h3>
            <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">Try checking other categories or clearing keywords.</p>
          </div>
        )}
      </div>
    </div>
  );
}
