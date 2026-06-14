"use client";

import { useState } from "react";
import { 
  BarChart3, DollarSign, Users, Award, Layers, 
  Trash2, Edit2, Plus
} from "lucide-react";
import { MOCK_PROJECTS } from "@/lib/data";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<"analytics" | "projects" | "orders" | "tickets">("analytics");
  const [projects, setProjects] = useState(MOCK_PROJECTS);
  
  // Support Tickets Mock List
  const [tickets, setTickets] = useState([
    { id: "TCK-481", user: "Sneha Reddy", subject: "Solidity Gas Cost Error", status: "OPEN", priority: "HIGH" },
    { id: "TCK-482", user: "Vikranth Roy", subject: "Dataset Download Link Bypassed", status: "IN_PROGRESS", priority: "MEDIUM" },
    { id: "TCK-483", user: "Aarav Shah", subject: "Scheduled Call Conflict with Mentor", status: "RESOLVED", priority: "LOW" }
  ]);

  // Order List Mock
  const [orders] = useState([
    { id: "ORD-9843", user: "Arjun Verma", item: "AI-Powered Visual Defect Detection", amount: 3499, date: "10 mins ago", status: "SUCCESS" },
    { id: "ORD-9844", user: "Sneha Reddy", item: "Decentralized Micro-Finance Platform", amount: 2999, date: "1 hour ago", status: "SUCCESS" },
    { id: "ORD-9845", user: "Karan Johar", item: "Smart Crop IoT sensor", amount: 5499, date: "4 hours ago", status: "PENDING" }
  ]);

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  const resolveTicket = (id: string) => {
    setTickets(prev =>
      prev.map(t => (t.id === id ? { ...t, status: "RESOLVED" } : t))
    );
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6 mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
              <BarChart3 className="h-8 w-8 text-blue-650" />
              Admin Portal
            </h1>
            <p className="text-sm text-slate-500 mt-1">Platform analytics, revenue monitoring, items CRUD database, and help desks.</p>
          </div>

          <div className="flex gap-2">
            {["analytics", "projects", "orders", "tickets"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as "analytics" | "projects" | "orders" | "tickets")}
                className={`text-xs font-bold rounded-xl px-4 py-2.5 border transition-all uppercase tracking-wider ${
                  activeTab === tab
                    ? "bg-blue-650 border-blue-650 text-white shadow-sm"
                    : "bg-white border-slate-200 text-slate-650 hover:bg-slate-50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>


        {/* Content Shell */}
        
        {/* 1. Analytics Dashboard */}
        {activeTab === "analytics" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Gross Revenue", value: "₹12,48,900", icon: DollarSign, change: "+14% this month", color: "text-blue-600 bg-blue-50" },
                { title: "Total Users", value: "54,208", icon: Users, change: "+240 new signups", color: "text-purple-600 bg-purple-50" },
                { title: "Total Projects", value: "1,245", icon: Layers, change: "+48 uploaded recently", color: "text-indigo-600 bg-indigo-50" },
                { title: "Approved Mentors", value: "258", icon: Award, change: "12 pending validation", color: "text-emerald-600 bg-emerald-50" }
              ].map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-2.5 rounded-xl ${stat.color}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{stat.change}</span>
                    </div>
                    <div className="text-2xl font-black text-slate-900">{stat.value}</div>
                    <div className="text-xs font-bold text-slate-500 mt-1 uppercase tracking-wider">{stat.title}</div>
                  </div>
                );
              })}
            </div>

            {/* Sales Chart Mockup */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-wider">Weekly Revenue Analytics</h3>
              <div className="h-60 w-full flex items-end justify-between gap-4 pt-10 px-4 border-b border-slate-100">
                {[
                  { day: "Mon", height: "45%", value: "₹45k" },
                  { day: "Tue", height: "70%", value: "₹70k" },
                  { day: "Wed", height: "60%", value: "₹60k" },
                  { day: "Thu", height: "85%", value: "₹85k" },
                  { day: "Fri", height: "55%", value: "₹55k" },
                  { day: "Sat", height: "95%", value: "₹95k" },
                  { day: "Sun", height: "100%", value: "₹108k" }
                ].map((bar, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                    <span className="text-[9px] font-bold text-slate-400">{bar.value}</span>
                    <div
                      style={{ height: bar.height }}
                      className="w-full bg-blue-600 rounded-t-lg hover:bg-blue-700 transition-all cursor-pointer relative group"
                    >
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white rounded p-1 text-[8px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Sales: {bar.value}
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 mt-2">{bar.day}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 2. Projects Database Management */}
        {activeTab === "projects" && (
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6 animate-in fade-in duration-200">
            <div className="flex justify-between items-center pb-4 border-b border-slate-100">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Product Catalog CRUD ({projects.length})</h3>
              <button
                onClick={() => alert("Launching Add Project Drawer...")}
                className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white hover:bg-blue-700 shadow-sm"
              >
                <Plus className="h-4 w-4" />
                Add Product
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-450 uppercase font-bold tracking-wider">
                    <th className="py-3 px-4">Title</th>
                    <th className="py-3 px-4">Category</th>
                    <th className="py-3 px-4">Price</th>
                    <th className="py-3 px-4">Difficulty</th>
                    <th className="py-3 px-4">Rating</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-semibold text-slate-650">
                  {projects.map((proj) => (
                    <tr key={proj.id} className="hover:bg-slate-50/50">
                      <td className="py-4 px-4 text-slate-900 font-bold max-w-[200px] truncate">{proj.title}</td>
                      <td className="py-4 px-4 text-slate-500">{proj.category}</td>
                      <td className="py-4 px-4 text-slate-900">₹{proj.price}</td>
                      <td className="py-4 px-4">
                        <span className="rounded bg-slate-100 px-2 py-0.5 text-[9px] text-slate-600">{proj.difficulty}</span>
                      </td>
                      <td className="py-4 px-4 text-amber-500">★ {proj.rating}</td>
                      <td className="py-4 px-4 text-right space-x-2">
                        <button
                          onClick={() => alert("Launching edit modal...")}
                          className="p-1.5 text-slate-400 hover:text-blue-600 transition-colors"
                          aria-label="Edit"
                        >
                          <Edit2 className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => deleteProject(proj.id)}
                          className="p-1.5 text-slate-400 hover:text-red-650 transition-colors"
                          aria-label="Delete"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 3. Order Pipelines */}
        {activeTab === "orders" && (
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6 animate-in fade-in duration-200">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider pb-4 border-b border-slate-100">Order Logs</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-450 uppercase font-bold tracking-wider">
                    <th className="py-3 px-4">Order ID</th>
                    <th className="py-3 px-4">User</th>
                    <th className="py-3 px-4">Item</th>
                    <th className="py-3 px-4">Amount</th>
                    <th className="py-3 px-4">Date</th>
                    <th className="py-3 px-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-semibold text-slate-650">
                  {orders.map((ord) => (
                    <tr key={ord.id} className="hover:bg-slate-50/50">
                      <td className="py-4 px-4 text-slate-900">{ord.id}</td>
                      <td className="py-4 px-4 text-slate-800">{ord.user}</td>
                      <td className="py-4 px-4 truncate max-w-[200px]">{ord.item}</td>
                      <td className="py-4 px-4 text-slate-900">₹{ord.amount}</td>
                      <td className="py-4 px-4 text-slate-400">{ord.date}</td>
                      <td className="py-4 px-4">
                        <span className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-[9px] ${
                          ord.status === "SUCCESS"
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-amber-50 text-amber-700"
                        }`}>
                          {ord.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 4. Support Ticket Queue */}
        {activeTab === "tickets" && (
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6 animate-in fade-in duration-200">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider pb-4 border-b border-slate-100">Support Desks Queue</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-450 uppercase font-bold tracking-wider">
                    <th className="py-3 px-4">Ticket ID</th>
                    <th className="py-3 px-4">User</th>
                    <th className="py-3 px-4">Subject</th>
                    <th className="py-3 px-4">Priority</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-semibold text-slate-650">
                  {tickets.map((tck) => (
                    <tr key={tck.id} className="hover:bg-slate-50/50">
                      <td className="py-4 px-4 text-slate-900">{tck.id}</td>
                      <td className="py-4 px-4 text-slate-800">{tck.user}</td>
                      <td className="py-4 px-4 truncate max-w-[200px]">{tck.subject}</td>
                      <td className="py-4 px-4">
                        <span className={`rounded px-2 py-0.5 text-[9px] ${
                          tck.priority === "HIGH"
                            ? "bg-red-50 text-red-750"
                            : tck.priority === "MEDIUM"
                            ? "bg-amber-50 text-amber-750"
                            : "bg-slate-100 text-slate-650"
                        }`}>{tck.priority}</span>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-[9px] ${
                          tck.status === "RESOLVED"
                            ? "bg-emerald-50 text-emerald-700"
                            : tck.status === "IN_PROGRESS"
                            ? "bg-blue-50 text-blue-700"
                            : "bg-rose-50 text-rose-700"
                        }`}>
                          {tck.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right">
                        {tck.status !== "RESOLVED" && (
                          <button
                            onClick={() => resolveTicket(tck.id)}
                            className="rounded-lg bg-emerald-55 border border-emerald-250 px-3 py-1.5 text-[10px] font-bold text-emerald-700 hover:bg-emerald-100 transition-colors"
                          >
                            Mark Resolved
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
