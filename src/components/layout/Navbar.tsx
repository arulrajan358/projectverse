"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Menu, X, ArrowRight, User } from "lucide-react";

const NAV_LINKS = [
  { label: "Marketplace", href: "/marketplace" },
  { label: "Idea Store", href: "/idea-store" },
  { label: "Custom Projects", href: "/custom-project" },
  { label: "Mentorship", href: "/mentorship" },
  { label: "Blog", href: "/blog" },
  { label: "Support", href: "/support" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 transition-transform hover:scale-[1.02]">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-md shadow-blue-500/20">
            <Sparkles className="h-5.5 w-5.5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            Project<span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Verse</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                  isActive ? "text-blue-600 font-semibold" : "text-slate-600"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            <User className="h-4 w-4" />
            Dashboard
          </Link>
          <Link
            href="/marketplace"
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm shadow-blue-600/10 transition-all hover:bg-blue-700 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            Explore Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-lg p-2 text-slate-600 hover:bg-slate-50 md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur-md px-4 py-6 shadow-inner animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium transition-colors py-2 px-3 rounded-lg ${
                    isActive ? "bg-blue-50 text-blue-600 font-semibold" : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="h-px bg-slate-100 my-2" />
            <Link
              href="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 py-2 px-3 text-base font-medium text-slate-600 hover:bg-slate-50 rounded-lg"
            >
              <User className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              href="/marketplace"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-base font-semibold text-white shadow-md hover:bg-blue-700 transition-colors"
            >
              Explore Projects
              <ArrowRight className="h-5 w-5" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
