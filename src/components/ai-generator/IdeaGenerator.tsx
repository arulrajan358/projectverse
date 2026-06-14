"use client";

import { useState } from "react";
import { Sparkles, Cpu, Clock, DollarSign, ListChecks, Compass, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GeneratedIdea {
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  estimatedTime: string;
  costEstimate: string;
  futureScope: string[];
}

export default function IdeaGenerator() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GeneratedIdea | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    setResult(null);

    // Call simulated/actual AI API endpoint
    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt })
      });
      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      // Fallback data in case of fetch issues
      setResult({
        title: "AI-Powered Adaptive Learning Platform",
        description: "A student-centric learning hub that dynamically changes curriculum paths based on quick, interactive micro-assessments.",
        techStack: ["Next.js", "Python", "FastAPI", "Prisma", "PostgreSQL", "Gemini API"],
        difficulty: "Intermediate",
        estimatedTime: "40 Hours",
        costEstimate: "₹1,499 (Kit) / Free (Idea Only)",
        features: [
          "Real-time student diagnostic assessment modules",
          "AI content recommendation system using Gemini API",
          "Interactive dashboard with progress tracking charts",
          "Automatic flashcard generator based on uploaded PDFs"
        ],
        futureScope: [
          "Integration with classroom virtual learning systems (LMS)",
          "Voice conversational peer tutor avatars",
          "Blockchain-verifiable micro-credential certificates"
        ]
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSampleClick = (sampleText: string) => {
    setPrompt(sampleText);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="rounded-3xl glass-panel p-6 sm:p-10 shadow-premium border border-slate-200/50">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">Try the AI Idea Generator</h3>
            <p className="text-sm text-slate-500">Describe your parameters and let our models formulate a custom academic project synopsis.</p>
          </div>
        </div>

        {/* Input Form */}
        <form onSubmit={handleGenerate} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g. I need an AI final year project using OpenCV..."
              className="w-full rounded-2xl glass-input py-4 pl-5 pr-32 text-slate-800 placeholder:text-slate-400 font-medium"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !prompt.trim()}
              className="absolute right-2 top-2 bottom-2 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white transition-all hover:bg-blue-700 active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none flex items-center gap-1.5"
            >
              {loading ? (
                <span className="flex items-center gap-1">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Thinking...
                </span>
              ) : (
                <>
                  Generate
                  <Sparkles className="h-4 w-4" />
                </>
              )}
            </button>
          </div>

          {/* Quick Prompts */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-400 font-medium">Quick Prompts:</span>
            {[
              "I need an AI final year project.",
              "Cyber Security with Blockchain.",
              "Generative AI app for students.",
              "IoT Smart Farm sensor kit."
            ].map((p, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSampleClick(p)}
                className="rounded-full bg-slate-100 px-3 py-1.5 font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                {p}
              </button>
            ))}
          </div>
        </form>

        {/* Results output */}
        <AnimatePresence mode="wait">
          {loading && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-8 flex flex-col items-center justify-center py-12 text-center"
            >
              <div className="relative flex h-16 w-16 items-center justify-center">
                <div className="absolute inset-0 rounded-full border-4 border-blue-100" />
                <div className="absolute inset-0 rounded-full border-4 border-t-blue-600 animate-spin" />
                <Sparkles className="h-6 w-6 text-blue-600 animate-pulse" />
              </div>
              <h4 className="mt-4 text-base font-semibold text-slate-800">Compiling Project Synopsis...</h4>
              <p className="mt-2 text-sm text-slate-400 max-w-xs">Selecting frameworks, mapping hardware lists, and mapping future scopes.</p>
            </motion.div>
          )}

          {result && !loading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 border-t border-slate-200/80 pt-8"
            >
              <div className="rounded-2xl bg-white border border-slate-200/60 p-6 sm:p-8 shadow-sm">
                {/* Result Title */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-600 mb-2">
                      Generated Project Idea
                    </span>
                    <h4 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                      {result.title}
                    </h4>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 border border-amber-200/60 px-2.5 py-0.5 text-xs font-semibold text-amber-700">
                      <Cpu className="h-3 w-3" />
                      {result.difficulty}
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {result.description}
                </p>

                {/* Grid details */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-slate-100 py-4 mb-6">
                  <div className="flex items-center gap-2.5">
                    <Clock className="h-4.5 w-4.5 text-slate-400" />
                    <div>
                      <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Est. Duration</div>
                      <div className="text-sm font-semibold text-slate-800">{result.estimatedTime}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <DollarSign className="h-4.5 w-4.5 text-slate-400" />
                    <div>
                      <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Price Estimate</div>
                      <div className="text-sm font-semibold text-slate-800">{result.costEstimate}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <BookOpen className="h-4.5 w-4.5 text-slate-400" />
                    <div>
                      <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Tech Stack</div>
                      <div className="text-sm font-semibold text-slate-850 truncate max-w-[150px]">{result.techStack.slice(0, 3).join(", ")}</div>
                    </div>
                  </div>
                </div>

                {/* Features & Future scope */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="flex items-center gap-1.5 text-sm font-bold text-slate-900 mb-3">
                      <ListChecks className="h-4 w-4 text-blue-600" />
                      Key Features
                    </h5>
                    <ul className="space-y-2.5 text-sm text-slate-600">
                      {result.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 font-semibold text-[10px]">
                            {idx + 1}
                          </span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="flex items-center gap-1.5 text-sm font-bold text-slate-900 mb-3">
                      <Compass className="h-4 w-4 text-emerald-600" />
                      Future Research Scope
                    </h5>
                    <ul className="space-y-2.5 text-sm text-slate-600">
                      {result.futureScope.map((scope, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                          <span>{scope}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {result.techStack.map((tech, idx) => (
                      <span key={idx} className="rounded-md bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      onClick={() => alert("Synopsis Document Downloaded! (Sample)")}
                      className="w-full sm:w-auto text-center rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      Download Synopsis (Free)
                    </button>
                    <button
                      onClick={() => alert("Proceeding to project kits checkout...")}
                      className="w-full sm:w-auto text-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
                    >
                      Buy Complete Kit
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
