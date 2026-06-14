"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, Share2 } from "lucide-react";
import { MOCK_BLOGS } from "@/lib/data";

interface BlogDetailsProps {
  params: Promise<{ slug: string }>;
}

export default function BlogDetails({ params }: BlogDetailsProps) {
  const resolvedParams = use(params);
  const post = MOCK_BLOGS.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return notFound();
  }

  // Schema structured JSON-LD data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.image,
    "datePublished": post.publishedAt,
    "author": {
      "@type": "Person",
      "name": post.authorName,
      "jobTitle": post.authorRole
    },
    "publisher": {
      "@type": "Organization",
      "name": "ProjectVerse",
      "logo": {
        "@type": "ImageObject",
        "url": "https://projectverse.in/assets/logo.png"
      }
    },
    "description": post.excerpt
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      {/* Insert JSON-LD Structured SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-500 hover:text-blue-600 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog List
        </Link>

        {/* Article Shell */}
        <article className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-sm p-6 sm:p-10">
          <header className="space-y-4 mb-8">
            <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-600 border border-blue-100">
              {post.category}
            </span>
            
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
              {post.title}
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.authorAvatar}
                  alt={post.authorName}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-bold text-slate-900">{post.authorName}</div>
                  <div className="text-xs text-slate-550">{post.authorRole}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-400 font-semibold">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {post.publishedAt}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="rounded-2xl overflow-hidden border border-slate-100 h-96 relative mb-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Main content body (simulated raw/prose formatting) */}
          <div className="prose max-w-none text-slate-650 space-y-6 leading-relaxed">
            <p className="text-lg font-medium text-slate-800 leading-normal">
              {post.excerpt}
            </p>
            
            {/* Simple Markdown Converter representation */}
            <div
              className="space-y-6"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .replace(/## (.*)/g, '<h2 class="text-xl font-bold text-slate-900 mt-8 mb-4">$1</h2>')
                  .replace(/### (.*)/g, '<h3 class="text-lg font-bold text-slate-900 mt-6 mb-3">$1</h3>')
                  .replace(/- \*\*(.*)\*\*: (.*)/g, '<li class="ml-4 list-disc text-sm"><strong class="text-slate-900">$1</strong>: $2</li>')
                  .replace(/```python([\s\S]*?)```/g, '<pre class="bg-slate-900 text-slate-350 p-4 rounded-xl font-mono text-xs overflow-x-auto">$1</pre>')
              }}
            />
          </div>

          {/* Footer tags */}
          <footer className="border-t border-slate-100 pt-6 mt-10 flex flex-wrap gap-2 items-center justify-between">
            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((tag, idx) => (
                <span key={idx} className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600 border border-slate-200/50">
                  #{tag}
                </span>
              ))}
            </div>
            <button
              onClick={() => alert("Article URL copied to clipboard!")}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-blue-600 transition-colors"
            >
              <Share2 className="h-4 w-4" />
              Share Guide
            </button>
          </footer>
        </article>
      </div>
    </div>
  );
}
