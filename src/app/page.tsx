"use client";

import Link from "next/link";
import { 
  Sparkles, ArrowRight, CheckCircle2, Star, Cpu, Users, GraduationCap, Building2, 
  ChevronRight, PhoneCall, Award, FileCode2
} from "lucide-react";
import IdeaGenerator from "@/components/ai-generator/IdeaGenerator";
import { CATEGORIES, MOCK_PROJECTS, MOCK_MENTORS, MOCK_TESTIMONIALS } from "@/lib/data";

const TRUST_STATS = [
  { value: "50,000+", label: "Students Served", icon: Users, color: "text-blue-600 bg-blue-50" },
  { value: "1,200+", label: "Projects Available", icon: FileCode2, color: "text-indigo-600 bg-indigo-50" },
  { value: "250+", label: "Industry Mentors", icon: GraduationCap, color: "text-purple-600 bg-purple-50" },
  { value: "180+", label: "Partner Universities", icon: Building2, color: "text-emerald-600 bg-emerald-50" }
];

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-slate-50 w-full min-h-screen">
      {/* Decorative Glow Orbs */}
      <div className="glow-orb animated-glow bg-blue-400 w-[500px] h-[500px] -top-40 -left-40" />
      <div className="glow-orb animated-glow bg-indigo-300 w-[600px] h-[600px] top-[20%] right-[-20%]" />
      <div className="glow-orb animated-glow bg-purple-200 w-[400px] h-[400px] bottom-[10%] left-[-10%]" />

      <div className="grid-bg min-h-screen">
        {/* ================= SECTION 1: HERO ================= */}
        <section className="relative mx-auto max-w-7xl px-4 pt-20 pb-16 sm:px-6 lg:px-8 lg:pt-32 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headline & Action */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200/50 px-3.5 py-1.5 text-xs font-semibold text-blue-600 mb-6 shadow-sm">
                <Sparkles className="h-3.5 w-3.5" />
                India&apos;s First AI-Powered Student Ecosystem
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-6">
                Build Projects That Get You{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Hired</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed font-medium">
                Discover curated project ideas, purchase plug-and-play project kits, order customized software/hardware setups, and learn 1:1 from top industry mentors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link
                  href="/marketplace"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
                >
                  Explore Projects
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href="#ai-generator"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-700 hover:bg-slate-50 transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
                >
                  Generate AI Ideas
                  <Sparkles className="h-5 w-5 text-blue-500" />
                </a>
              </div>
            </div>

            {/* Right Column: Hero Illustration (Premium Interactive Mockup) */}
            <div className="lg:col-span-5 relative w-full flex justify-center">
              <div className="relative w-full max-w-[450px] rounded-3xl border border-slate-200/80 bg-white/80 p-5 shadow-premium backdrop-blur-md">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-amber-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs font-semibold text-slate-400">AI PROJECT BUILDER v1.0</span>
                </div>

                <div className="rounded-2xl bg-slate-900 p-4 font-mono text-xs text-slate-300 mb-4 shadow-inner">
                  <div className="text-slate-500">{"// AI-Generated Final Year Project"}</div>
                  <div className="text-blue-400">const</div>{" "}
                  <div className="inline text-emerald-400">project</div> = {"{"}
                  <div className="pl-4">
                    title: <span className="text-amber-300">&quot;Defect Detection&quot;</span>,
                    accuracy: <span className="text-amber-300">&quot;98.4% mAP&quot;</span>,
                    frameworks: [<span className="text-amber-300">&quot;PyTorch&quot;</span>, <span className="text-amber-300">&quot;YOLO&quot;</span>],
                    deploy: <span className="text-blue-400">true</span>
                  </div>
                  {"};"}
                  <div className="mt-2 text-slate-500">{"// Click below to inspect architecture"}</div>
                  <div className="mt-1 rounded bg-slate-800 p-2 text-indigo-300 flex items-center justify-between">
                    <span>architecture_diagram.png</span>
                    <span className="text-[10px] bg-indigo-500/20 px-1.5 py-0.5 rounded text-indigo-400 font-bold">READY</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-3.5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">AI</div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">Custom Code Gen</div>
                        <div className="text-[10px] text-slate-500">Includes React & API boilerplate</div>
                      </div>
                    </div>
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="rounded-xl border border-indigo-100 bg-indigo-50/50 p-3.5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">HW</div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">Project Kits Hub</div>
                        <div className="text-[10px] text-slate-500">Shipped with microcontrollers</div>
                      </div>
                    </div>
                    <CheckCircle2 className="h-5 w-5 text-indigo-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: TRUST SECTION ================= */}
        <section className="bg-white border-y border-slate-200 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {TRUST_STATS.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <div key={idx} className="flex flex-col items-center justify-center text-center">
                    <div className={`p-3 rounded-2xl ${stat.color} mb-3.5`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">{stat.value}</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: PROJECT CATEGORIES ================= */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Explore Popular Fields & Domains
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              Pick your target domain and discover pre-built source codes, reports, PPT decks, and components conforming to academic standard outlines.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {CATEGORIES.map((cat, idx) => (
              <Link
                key={idx}
                href={`/marketplace?category=${encodeURIComponent(cat)}`}
                className="group rounded-2xl bg-white border border-slate-200/80 p-5 shadow-sm hover:shadow-md hover:border-blue-300 hover:scale-[1.02] transition-all duration-200 flex flex-col justify-between min-h-[120px]"
              >
                <div>
                  <div className="h-8 w-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Cpu className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {cat}
                  </h3>
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-400 group-hover:text-blue-600 transition-colors mt-2 font-semibold">
                  Browse Projects
                  <ChevronRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ================= SECTION 4: AI IDEA GENERATOR ================= */}
        <section id="ai-generator" className="bg-slate-100/50 border-y border-slate-200 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Stuck on Project Concepts?
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600">
                Let our AI assist you. Define your desired domain, and our models will map out standard deliverables in under a minute.
              </p>
            </div>
            <IdeaGenerator />
          </div>
        </section>

        {/* ================= SECTION 5: TRENDING PROJECTS ================= */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Trending Academic Kits
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Fully functional source codes, presentations, synopses, and hardware setups reviewed by university professors.
              </p>
            </div>
            <Link
              href="/marketplace"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors group"
            >
              View All Marketplace
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_PROJECTS.slice(0, 3).map((proj) => (
              <div
                key={proj.id}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200"
              >
                <div className="relative h-48 w-full bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={proj.images[0]}
                    alt={proj.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-blue-600 shadow-sm">
                    {proj.category}
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center rounded bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-600">
                        {proj.difficulty}
                      </span>
                      <div className="flex items-center text-xs font-bold text-amber-500">
                        <Star className="h-3.5 w-3.5 fill-current mr-0.5" />
                        {proj.rating}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-650 transition-colors line-clamp-1 mb-2">
                      {proj.title}
                    </h3>
                    <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed mb-4">
                      {proj.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {proj.techStack.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="rounded bg-slate-50 px-2 py-0.5 text-[10px] font-semibold text-slate-500 border border-slate-100">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div>
                        <div className="text-[10px] text-slate-400 font-semibold uppercase">Pricing Starts</div>
                        <div className="text-lg font-extrabold text-slate-900">₹{proj.price}</div>
                      </div>
                      <Link
                        href={`/marketplace/${proj.id}`}
                        className="rounded-lg bg-blue-50 px-4 py-2 text-xs font-bold text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                      >
                        Inspect Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 6: HOW IT WORKS ================= */}
        <section className="bg-slate-900 text-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Simplifying Innovation</span>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mt-2">
                Four Steps to Success
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Choose Idea", desc: "Select concepts from our curated catalog or generate custom synopses using the AI Engine.", step: "01" },
                { title: "Purchase Idea or Project", desc: "Acquire the complete project bundle or starting blueprint with secure payment options.", step: "02" },
                { title: "Download Resources", desc: "Obtain clean source codes, presentation decks, academic reports, and flow diagrams.", step: "03" },
                { title: "Build and Learn", desc: "Customize layouts, run codebases using step guides, and review concepts with mentors.", step: "04" }
              ].map((item, idx) => (
                <div key={idx} className="relative bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 flex flex-col justify-between min-h-[220px]">
                  <div>
                    <div className="text-3xl font-black text-blue-500/20 mb-4">{item.step}</div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="h-1.5 w-12 bg-blue-600 rounded-full mt-4" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 7: MENTOR NETWORK ================= */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              1:1 Project Mentorship Directory
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              Don&apos;t code in isolation. Book video call consultations with engineering scientists working at Google, Polygon, and Stripe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MOCK_MENTORS.map((mentor) => (
              <div
                key={mentor.id}
                className="rounded-2xl bg-white border border-slate-200/80 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={mentor.avatar}
                      alt={mentor.name}
                      className="h-14 w-14 rounded-full object-cover border-2 border-blue-500/10"
                    />
                    <div>
                      <h3 className="text-base font-bold text-slate-900">{mentor.name}</h3>
                      <div className="text-xs text-slate-500 font-semibold">{mentor.role} @ {mentor.company}</div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {mentor.bio}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {mentor.specialties.map((spec, idx) => (
                      <span key={idx} className="rounded bg-blue-50 px-2 py-0.5 text-[9px] font-bold text-blue-600">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-4">
                  <div>
                    <div className="text-[10px] text-slate-400 font-semibold uppercase">Pricing / Hr</div>
                    <div className="text-base font-extrabold text-slate-955">₹{mentor.pricingPerHr}</div>
                  </div>
                  <Link
                    href="/mentorship"
                    className="inline-flex items-center gap-1 rounded-lg bg-blue-600 px-4 py-2 text-xs font-bold text-white hover:bg-blue-700 transition-colors"
                  >
                    <PhoneCall className="h-3 w-3" />
                    Book Call
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Mentorship Core Features List */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 border-t border-slate-200 pt-10">
            {[
              { label: "1:1 Calls", desc: "Detailed screen sharing debug sessions" },
              { label: "Project Guidance", desc: "System architecture and optimization review" },
              { label: "Resume Review", desc: "Optimize projects mapping to fetch placements" },
              { label: "Viva Preparation", desc: "Mock questions and defense techniques" }
            ].map((f, idx) => (
              <div key={idx} className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{f.label}</h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 8: SUCCESS STORIES ================= */}
        <section className="bg-slate-100/70 border-y border-slate-200 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Impact Stories</span>
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mt-2">
                Trusted by 50,000+ Students
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {MOCK_TESTIMONIALS.map((test) => (
                <div key={test.id} className="rounded-3xl bg-white border border-slate-200/50 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
                  <div className="flex items-center text-amber-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4.5 w-4.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed mb-6">
                    &quot;{test.text}&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={test.avatar}
                      alt={test.name}
                      className="h-11 w-11 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{test.name}</h4>
                      <p className="text-xs text-slate-500 font-semibold">{test.college}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 9: CTA ================= */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-blue-700 to-indigo-800 text-white p-8 sm:p-16 text-center relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 grid-bg opacity-10" />
            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              <Award className="h-12 w-12 text-blue-300 mb-6" />
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Start Your Project Journey Today
              </h2>
              <p className="mt-4 text-base sm:text-lg text-blue-100 max-w-xl leading-relaxed">
                Empower your technical resume, complete college submission guidelines, and master building production-ready apps.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link
                  href="/marketplace"
                  className="rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-blue-700 shadow-md hover:bg-slate-50 transition-colors w-full sm:w-auto"
                >
                  Explore Project Kits
                </Link>
                <Link
                  href="/custom-project"
                  className="rounded-xl border border-blue-400 bg-blue-600/30 px-8 py-3.5 text-sm font-bold text-white hover:bg-blue-600/50 transition-colors w-full sm:w-auto"
                >
                  Request Custom Build
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

