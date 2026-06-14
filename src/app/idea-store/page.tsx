"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, HelpCircle, Map, Code, Layers, CheckCircle2 } from "lucide-react";
import { MOCK_PROJECTS } from "@/lib/data";

export default function IdeaStore() {
  const ideasOnly = MOCK_PROJECTS.filter((p) => p.type === "IDEA_ONLY" || p.price < 1000);
  const [selectedIdea, setSelectedIdea] = useState<typeof MOCK_PROJECTS[0] | null>(null);

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header banner */}
        <div className="rounded-3xl bg-gradient-to-br from-indigo-900 to-slate-900 text-white p-8 sm:p-12 mb-10 relative overflow-hidden shadow-lg">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/20 px-3 py-1 text-xs font-bold text-blue-300 mb-4 border border-blue-500/30">
              <Sparkles className="h-3.5 w-3.5" />
              Synopsis & Blueprints Hub
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">AI Idea Store</h1>
            <p className="mt-3 text-sm sm:text-base text-slate-350 leading-relaxed">
              Don&apos;t need hardware or complete source codes? Buy university-approved project blueprints containing detailed architecture schemas, synopses, Gantt roadmaps, and tech stacks.
            </p>
          </div>
        </div>

        {/* Deliverables Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { title: "Problem Statement", desc: "Detailed academic objectives and validations.", icon: HelpCircle, color: "text-red-500 bg-red-50" },
            { title: "Gantt Roadmap", desc: "Step-by-step 16-week execution plan.", icon: Map, color: "text-blue-500 bg-blue-50" },
            { title: "System Architecture", desc: "UML diagrams & data pipeline schemas.", icon: Layers, color: "text-purple-500 bg-purple-50" },
            { title: "Technology Stack", desc: "Curated package selections & boilerplates.", icon: Code, color: "text-emerald-500 bg-emerald-50" }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm flex items-start gap-4">
                <div className={`p-2.5 rounded-xl ${item.color} shrink-0`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ideas Grid */}
        <h2 className="text-xl font-bold text-slate-900 mb-6">Available Blueprints</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ideasOnly.map((idea) => (
            <div
              key={idea.id}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] font-bold text-blue-600 mb-3.5">
                  {idea.category}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2 hover:text-blue-600 transition-colors line-clamp-1">
                  {idea.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 mb-5">
                  {idea.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1 mb-6">
                  {idea.techStack.map((tech, idx) => (
                    <span key={idx} className="rounded bg-slate-50 px-2 py-0.5 text-[9px] font-bold text-slate-500 border border-slate-100">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-[9px] text-slate-450 font-bold uppercase">Blueprint Price</div>
                  <div className="text-base font-black text-slate-900">₹{idea.price}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedIdea(idea)}
                    className="rounded-lg bg-slate-55 border border-slate-200 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-all"
                  >
                    Inspect
                  </button>
                  <Link
                    href={`/dashboard?purchase=${idea.id}&type=blueprint`}
                    className="rounded-lg bg-blue-600 px-3.5 py-2 text-xs font-semibold text-white hover:bg-blue-700 transition-all"
                  >
                    Buy Synopsis
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Modal Drawer */}
        {selectedIdea && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm">
            <div className="w-full max-w-2xl bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden animate-in zoom-in-95 duration-200">
              <div className="p-6 sm:p-8 border-b border-slate-100 flex justify-between items-start">
                <div>
                  <span className="text-[10px] bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded-full font-bold">
                    {selectedIdea.category}
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 mt-2">{selectedIdea.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedIdea(null)}
                  className="rounded-lg p-2 text-slate-400 hover:bg-slate-50 hover:text-slate-900 focus:outline-none"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Problem Statement</h4>
                  <p className="text-sm text-slate-650 leading-relaxed">
                    Students struggle to construct enterprise-grade pipelines. This blueprint provides structural frameworks, metrics definitions, and detailed research guidelines mapping to standard academic outlines.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Technical Deliverables</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {[
                      "Approved university format synopsis",
                      "Sequenced Gantt charts & roadmaps",
                      "Database design & schema scripts",
                      "UML charts & sequence flow graphs"
                    ].map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-650">
                        <CheckCircle2 className="h-4.5 w-4.5 text-blue-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Standard Implementation Timeline</h4>
                  <div className="space-y-2 text-xs font-semibold text-slate-600">
                    <div className="flex justify-between p-2.5 bg-slate-50 rounded-lg">
                      <span>Weeks 1-4</span>
                      <span className="text-slate-500">Literature review & architecture design</span>
                    </div>
                    <div className="flex justify-between p-2.5 bg-slate-50 rounded-lg">
                      <span>Weeks 5-10</span>
                      <span className="text-slate-500">Core logic compilation & database bindings</span>
                    </div>
                    <div className="flex justify-between p-2.5 bg-slate-50 rounded-lg">
                      <span>Weeks 11-16</span>
                      <span className="text-slate-500">UI wrapping, testing, and thesis compilation</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase">Price</div>
                  <div className="text-lg font-black text-slate-900">₹{selectedIdea.price}</div>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedIdea(null)}
                    className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                  >
                    Close
                  </button>
                  <Link
                    href={`/dashboard?purchase=${selectedIdea.id}&type=blueprint`}
                    className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
                  >
                    Buy Blueprint
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
