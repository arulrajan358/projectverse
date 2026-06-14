"use client";

import { useState } from "react";
import { Send, CheckCircle2, ShieldCheck, Clock, FileCode, Users } from "lucide-react";
import { CATEGORIES } from "@/lib/data";

const STEPS = [
  { label: "Requirements", desc: "Submit project parameters", status: "active" },
  { label: "Technical Review", desc: "Feasibility and architecture sizing", status: "upcoming" },
  { label: "Quotation & Specs", desc: "Review milestones and approve budget", status: "upcoming" },
  { label: "Development", desc: "Milestone-driven code compilation", status: "upcoming" },
  { label: "Quality Testing", desc: "Verify academic rules & outputs", status: "upcoming" },
  { label: "Complete Handoff", desc: "Receive codes, PPT, reports", status: "upcoming" }
];

export default function CustomProject() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    domain: "Artificial Intelligence",
    description: "",
    budget: "",
    deadline: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate database write & API review pipeline
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">Order Custom Projects</h1>
          <p className="mt-4 text-base text-slate-650 leading-relaxed">
            Need a unique software pipeline, customized dataset annotations, or specialized hardware microcontrollers? Explain your goals, and our engineering team will build it.
          </p>
        </div>

        {/* Dynamic Workflow Timeline */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm mb-12 overflow-x-auto">
          <h2 className="text-base font-bold text-slate-900 mb-6 uppercase tracking-wider">Project Lifecycle Roadmap</h2>
          <div className="flex items-start justify-between min-w-[800px] relative">
            {/* Timeline Line */}
            <div className="absolute top-[22px] left-[5%] right-[5%] h-0.5 bg-slate-100 -z-0" />
            
            {STEPS.map((step, idx) => {
              const isActive = step.status === "active" || (submitted && idx === 1);
              const isFinished = submitted && idx === 0;
              return (
                <div key={idx} className="flex flex-col items-center text-center relative z-10 w-[15%]">
                  {/* Node Circle */}
                  <div
                    className={`h-11 w-11 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all ${
                      isFinished
                        ? "bg-emerald-500 border-emerald-500 text-white shadow-md shadow-emerald-500/10"
                        : isActive
                        ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-600/10 scale-105"
                        : "bg-white border-slate-200 text-slate-400"
                    }`}
                  >
                    {isFinished ? "✓" : idx + 1}
                  </div>
                  <h3 className="text-xs font-bold text-slate-900 mt-3.5 leading-tight">{step.label}</h3>
                  <p className="text-[10px] text-slate-400 mt-1 max-w-[120px] leading-normal">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Card */}
          <div className="lg:col-span-7 bg-white border border-slate-200/85 rounded-3xl p-6 sm:p-10 shadow-premium">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">Project Requirements Form</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-450 uppercase tracking-wider mb-2">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Arjun Verma"
                      className="w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-800 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-450 uppercase tracking-wider mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="arjun@vit.edu"
                      className="w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-800 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-450 uppercase tracking-wider mb-2">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-800 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-450 uppercase tracking-wider mb-2">Target Domain</label>
                    <select
                      value={formData.domain}
                      onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-700 focus:border-blue-500 focus:outline-none"
                    >
                      {CATEGORIES.map((cat, idx) => (
                        <option key={idx} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-450 uppercase tracking-wider mb-2">Project Brief & Guidelines</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="List desired inputs, sensors (if IoT), data models, frontend UI structure, or any examiner constraints..."
                    className="w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-800 focus:border-blue-500 focus:outline-none leading-relaxed"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-450 uppercase tracking-wider mb-2">Target Budget Range (INR)</label>
                    <input
                      type="text"
                      required
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      placeholder="e.g. ₹5,000 - ₹10,000"
                      className="w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-800 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-450 uppercase tracking-wider mb-2">Submission Deadline</label>
                    <input
                      type="date"
                      required
                      value={formData.deadline}
                      onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-800 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 text-sm font-bold text-white shadow-md hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  {loading ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      Submit Request Details
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-8 space-y-5">
                <div className="h-16 w-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-slate-900">Request Received Successfully!</h2>
                  <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto">
                    We&apos;ve saved your custom configuration. Our technical review team has been notified and will reach out to you within 24 hours at <span className="font-semibold text-slate-800">{formData.email}</span>.
                  </p>
                </div>
                <div className="p-4 border border-slate-100 bg-slate-50 rounded-2xl max-w-sm mx-auto text-xs font-medium text-slate-500 flex items-center gap-3">
                  <Clock className="h-4.5 w-4.5 text-blue-600 shrink-0" />
                  <span>Your Request ID is #PV-CUST-{Math.floor(Math.random() * 90000) + 10000}</span>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="rounded-xl border border-slate-200 px-6 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Support / Standards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm space-y-6">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Why order custom?</h3>
              <div className="space-y-4">
                {[
                  { title: "Plagiarism-Free Code", desc: "Custom compiled scripts starting from blank documents.", icon: FileCode, color: "text-blue-600 bg-blue-50" },
                  { title: "Academic Standards Met", desc: "Compiled to meet IEEE, ACM, or specific college directives.", icon: ShieldCheck, color: "text-emerald-600 bg-emerald-50" },
                  { title: "Dedicated Support Specialist", desc: "1:1 Slack / WhatsApp support loops with engineering team.", icon: Users, color: "text-purple-600 bg-purple-50" }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex gap-4">
                      <div className={`p-2 rounded-xl ${item.color} shrink-0 h-9 w-9 flex items-center justify-center`}>
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
