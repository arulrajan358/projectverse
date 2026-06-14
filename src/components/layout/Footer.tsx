import Link from "next/link";
import { Sparkles, Mail, Shield, BookOpen, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-600">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm">
                <Sparkles className="h-4.5 w-4.5" />
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900">
                Project<span className="text-blue-600">Verse</span>
              </span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed">
              India&apos;s largest AI-powered Student Innovation Ecosystem. Helping students build projects that get them hired.
            </p>
            <div className="flex items-center gap-1 text-xs text-slate-400">
              Made with <Heart className="h-3 w-3 text-red-500 fill-current" /> for Indian Students.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Ecosystem</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/marketplace" className="hover:text-blue-600 transition-colors">Project Marketplace</Link>
              </li>
              <li>
                <Link href="/idea-store" className="hover:text-blue-600 transition-colors">AI Idea Store</Link>
              </li>
              <li>
                <Link href="/custom-project" className="hover:text-blue-600 transition-colors">Custom Kits</Link>
              </li>
              <li>
                <Link href="/mentorship" className="hover:text-blue-600 transition-colors">Find a Mentor</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/blog" className="hover:text-blue-600 transition-colors">Our Blog</Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-blue-600 transition-colors">Knowledge Base</Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-blue-600 transition-colors">Help Center</Link>
              </li>
              <li>
                <a href="#faq" className="hover:text-blue-600 transition-colors">Frequently Asked Questions</a>
              </li>
            </ul>
          </div>

          {/* Trust & Badges */}
          <div>
            <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Security & Support</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-slate-500">
                <Shield className="h-4 w-4 text-emerald-500" />
                <span>100% Verified Code</span>
              </li>
              <li className="flex items-center gap-2 text-slate-500">
                <BookOpen className="h-4 w-4 text-blue-500" />
                <span>Academic Guidelines Met</span>
              </li>
              <li className="flex items-center gap-2 text-slate-500">
                <Mail className="h-4 w-4 text-indigo-500" />
                <span>support@projectverse.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} ProjectVerse. All rights reserved. Built in compliance with OWASP & academic standard protocols.
          </p>
          <div className="flex gap-6 text-xs text-slate-400">
            <Link href="/support" className="hover:underline">Terms of Service</Link>
            <Link href="/support" className="hover:underline">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
