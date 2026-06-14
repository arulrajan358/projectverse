"use client";

import { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  Star, Clock, BookOpen, Layers, Award, Milestone, HelpCircle, 
  ArrowLeft, FileText, Check, ShieldAlert, ShoppingCart, MessageSquare 
} from "lucide-react";
import { MOCK_PROJECTS } from "@/lib/data";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProjectDetails({ params }: PageProps) {
  const resolvedParams = use(params);
  const project = MOCK_PROJECTS.find((p) => p.id === resolvedParams.id);
  const [activeTab, setActiveTab] = useState<"overview" | "docs" | "reviews" | "faq">("overview");
  const [selectedImg, setSelectedImg] = useState(0);

  if (!project) {
    return notFound();
  }

  // Define dynamic FAQ list
  const faqs = [
    { q: "Is the source code fully functional?", a: "Yes. All our project kits are pre-tested by our engineering team. We guarantee the code builds and runs in compliance with our detailed step-by-step setup guides." },
    { q: "Can I customize the features for my syllabus?", a: "Absolutely. The source code is clean, modular, and fully commented, allowing you to easily add or modify features. If you need extensive customizations, you can use our Custom Projects page." },
    { q: "Do you offer Viva support?", a: "Yes. Every download bundle includes a comprehensive Viva Q&A document covering 100+ standard examiner queries. You can also book 1:1 sessions with industry mentors on the platform." }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/marketplace"
          className="inline-flex items-center gap-1 text-sm font-bold text-slate-500 hover:text-blue-600 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Marketplace
        </Link>

        {/* Top Section: Title & Purchase Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          {/* Left Side: Images & Summary */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white h-96 relative shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.images[selectedImg] || project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Carousel Thumbs */}
            {project.images.length > 1 && (
              <div className="flex gap-4">
                {project.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImg(idx)}
                    className={`h-20 w-28 rounded-xl overflow-hidden border-2 relative transition-all ${
                      selectedImg === idx ? "border-blue-600 scale-[1.03]" : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Side: Buy Card */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-premium sticky top-24 space-y-6">
              <div>
                <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-600 mb-2">
                  {project.category}
                </span>
                <h1 className="text-2xl font-black text-slate-900 tracking-tight leading-tight">
                  {project.title}
                </h1>
                <div className="flex items-center gap-4 mt-3 text-sm">
                  <div className="flex items-center text-amber-500 font-bold">
                    <Star className="h-4 w-4 fill-current mr-1" />
                    {project.rating}
                  </div>
                  <span className="text-slate-400">({project.reviewsCount} verified reviews)</span>
                </div>
              </div>

              <p className="text-sm text-slate-500 leading-relaxed">
                {project.description}
              </p>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-4 border-y border-slate-100 py-4 text-xs font-semibold text-slate-600">
                <div className="flex items-center gap-2">
                  <Clock className="h-4.5 w-4.5 text-slate-400" />
                  <span>~{project.estimatedHours} Hours Completion</span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers className="h-4.5 w-4.5 text-slate-400" />
                  <span>{project.difficulty} Level</span>
                </div>
              </div>

              {/* Price & Action */}
              <div className="space-y-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-semibold text-slate-400">Price tag:</span>
                  <div className="text-3xl font-black text-slate-900">₹{project.price}</div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => alert("Added to your wishlist! You can checkout in the dashboard.")}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50 transition-colors"
                    aria-label="Wishlist"
                  >
                    <ShoppingCart className="h-5 w-5" />
                  </button>
                  <Link
                    href={`/dashboard?purchase=${project.id}`}
                    className="flex-grow flex h-12 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white shadow-md shadow-blue-500/10 hover:bg-blue-700 transition-colors"
                  >
                    Buy Project Kit Now
                  </Link>
                </div>
                <p className="text-[10px] text-slate-400 text-center flex items-center justify-center gap-1">
                  <ShieldAlert className="h-3 w-3" />
                  Secure transactions powered by Razorpay & Stripe. Academic refund policy applies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Tabs Panel */}
        <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
          {/* Tab Headers */}
          <div className="border-b border-slate-200 flex overflow-x-auto">
            {[
              { id: "overview", label: "Overview", icon: Layers },
              { id: "docs", label: "Documentation", icon: FileText },
              { id: "reviews", label: "Reviews", icon: MessageSquare },
              { id: "faq", label: "FAQ", icon: HelpCircle }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as "overview" | "docs" | "reviews" | "faq")}
                  className={`flex items-center gap-2 px-6 py-4 text-sm font-bold whitespace-nowrap border-b-2 transition-colors focus:outline-none ${
                    activeTab === tab.id
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-slate-500 hover:text-slate-900"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Contents */}
          <div className="p-6 sm:p-8">
            {activeTab === "overview" && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">Project Narrative</h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{project.longDesc}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-bold text-slate-950 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <Award className="h-4.5 w-4.5 text-blue-600" />
                      Key Features
                    </h3>
                    <ul className="space-y-2.5 text-sm text-slate-650">
                      {project.features.map((f, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-950 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <BookOpen className="h-4.5 w-4.5 text-indigo-600" />
                      Learning Outcomes
                    </h3>
                    <ul className="space-y-2.5 text-sm text-slate-650">
                      {project.outcomes.map((o, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-6">
                  <h3 className="text-sm font-bold text-slate-950 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Milestone className="h-4.5 w-4.5 text-emerald-600" />
                    Future Scope
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {project.scope.map((s, idx) => (
                      <div key={idx} className="bg-slate-50 border border-slate-200/50 rounded-xl p-4 text-xs font-semibold text-slate-600">
                        {s}
                      </div>
                    ))}
                  </div>
                </div>

                {project.architecture && (
                  <div className="border-t border-slate-100 pt-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-3">System Architecture</h3>
                    <div className="bg-slate-900 text-slate-350 p-5 rounded-2xl font-mono text-xs leading-relaxed border border-slate-800">
                      {project.architecture}
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === "docs" && (
              <div className="space-y-6 max-w-3xl">
                <h3 className="text-lg font-bold text-slate-900">Deliverables & Documentation Outlines</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Upon purchase, the complete documentation kit becomes accessible inside the **Download Center** of your dashboard.
                </p>

                <div className="space-y-3">
                  {[
                    { title: "Academic Synopsis Document", desc: "Format approved for IEEE and AICTE guidelines. Explains objectives, methodologies, and models." },
                    { title: "PowerPoint Presentation Slide Deck", desc: "25+ professional slides including block graphs, outputs, and future scope highlights." },
                    { title: "Technical Project Report", desc: "90+ pages outlining testing criteria, data collection scripts, and literature review outlines." },
                    { title: "System Architecture & UML Diagrams", desc: "High-res PNG & editable XML schemas (DFD, Class, Sequence graphs)." }
                  ].map((doc, idx) => (
                    <div key={idx} className="flex gap-4 p-4 border border-slate-150 rounded-2xl hover:bg-slate-50 transition-colors">
                      <FileText className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{doc.title}</h4>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">{doc.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-6 max-w-3xl">
                <h3 className="text-lg font-bold text-slate-900">Student Reviews</h3>
                <div className="space-y-4">
                  {[
                    { name: "Rahul Sharma", rating: 5, date: "2 weeks ago", comment: "The YOLOv8 visual defect project is awesome! Clean code structure and runs out of the box. The video tutorial helped me set up PyTorch inside Anaconda in 10 minutes." },
                    { name: "Divya Nair", rating: 4, date: "1 month ago", comment: "Well-documented slides. The viva document was exactly what I needed to answer the external evaluator's queries about dice coefficients." }
                  ].map((rev, idx) => (
                    <div key={idx} className="p-5 border border-slate-100 rounded-2xl bg-slate-50/50">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-bold text-sm text-slate-900">{rev.name}</div>
                        <span className="text-xs text-slate-400">{rev.date}</span>
                      </div>
                      <div className="flex items-center text-amber-500 mb-2.5">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-current" />
                        ))}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        &quot;{rev.comment}&quot;
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "faq" && (
              <div className="space-y-6 max-w-3xl">
                <h3 className="text-lg font-bold text-slate-900">Frequently Asked Queries</h3>
                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="border-b border-slate-100 pb-4 last:border-0">
                      <h4 className="font-bold text-slate-900 text-sm flex items-start gap-2">
                        <HelpCircle className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                        {faq.q}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 mt-2 pl-6 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
