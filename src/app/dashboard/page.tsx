"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { 
  Download, FileCode, Presentation, FileText, Database, Layers, 
  Share2, CreditCard, Calendar, User, CheckCircle, Copy
} from "lucide-react";
import { MOCK_PROJECTS } from "@/lib/data";

function DashboardContent() {
  const searchParams = useSearchParams();
  const purchaseId = searchParams.get("purchase");
  
  const [activeTab, setActiveTab] = useState<"overview" | "downloads" | "orders" | "sessions" | "referral" | "profile">("overview");
  const [copied, setCopied] = useState(false);
  const [referralCredits] = useState(300);

  // Seed default purchased list
  const [purchasedIds, setPurchasedIds] = useState<string[]>(["proj-1", "proj-5"]);
  const [orders, setOrders] = useState([
    { id: "ORD-9843", title: "AI-Powered Visual Defect Detection System", date: "June 10, 2026", amount: 3499, status: "SUCCESS" },
    { id: "ORD-9844", title: "AI Project Proposal & Idea Blueprint", date: "June 11, 2026", amount: 499, status: "SUCCESS" }
  ]);

  // Handle immediate checkout from other pages
  useEffect(() => {
    if (purchaseId && !purchasedIds.includes(purchaseId)) {
      const projectObj = MOCK_PROJECTS.find(p => p.id === purchaseId);
      if (projectObj) {
        setPurchasedIds(prev => [...prev, purchaseId]);
        setOrders(prev => [
          {
            id: `ORD-${Math.floor(Math.random() * 9000) + 1000}`,
            title: projectObj.title,
            date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
            amount: projectObj.price,
            status: "SUCCESS"
          },
          ...prev
        ]);
        setActiveTab("downloads");
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [purchaseId]);

  const purchasedProjects = MOCK_PROJECTS.filter(p => purchasedIds.includes(p.id));

  const copyReferralLink = () => {
    navigator.clipboard.writeText("https://studentshub.in/ref?code=ARJUN500");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sidebar Nav */}
          <div className="lg:col-span-3 bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                AV
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Arjun Verma</h3>
                <p className="text-[10px] text-slate-400 font-semibold uppercase">Student Member</p>
              </div>
            </div>

            <nav className="flex flex-col gap-1.5">
              {[
                { id: "overview", label: "Dashboard Overview", icon: Layers },
                { id: "downloads", label: "Download Center", icon: Download },
                { id: "orders", label: "Purchase History", icon: CreditCard },
                { id: "sessions", label: "Mentor Sessions", icon: Calendar },
                { id: "referral", label: "Refer & Earn", icon: Share2 },
                { id: "profile", label: "Profile Settings", icon: User }
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as "overview" | "downloads" | "orders" | "sessions" | "referral" | "profile")}
                    className={`flex items-center gap-3 px-4 py-3 text-xs font-bold rounded-xl transition-all text-left ${
                      activeTab === tab.id
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-9 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm min-h-[500px]">
            
            {/* Overview Panel */}
            {activeTab === "overview" && (
              <div className="space-y-8 animate-in fade-in duration-200">
                <div>
                  <h2 className="text-xl font-extrabold text-slate-900">Welcome Back, Arjun!</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Track your downloads, orders, and referrals in one dashboard.</p>
                </div>

                {/* Stats Widgets */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="border border-slate-200/60 rounded-2xl p-5 bg-slate-50/50">
                    <Download className="h-5 w-5 text-blue-600 mb-2" />
                    <div className="text-2xl font-black text-slate-900">{purchasedProjects.length}</div>
                    <div className="text-xs text-slate-400 font-semibold uppercase mt-0.5">Purchased Blueprints</div>
                  </div>
                  <div className="border border-slate-200/60 rounded-2xl p-5 bg-slate-50/50">
                    <Calendar className="h-5 w-5 text-purple-650 mb-2" />
                    <div className="text-2xl font-black text-slate-900">1</div>
                    <div className="text-xs text-slate-400 font-semibold uppercase mt-0.5">Upcoming Sessions</div>
                  </div>
                  <div className="border border-slate-200/60 rounded-2xl p-5 bg-slate-50/50">
                    <Share2 className="h-5 w-5 text-emerald-600 mb-2" />
                    <div className="text-2xl font-black text-slate-900">₹{referralCredits}</div>
                    <div className="text-xs text-slate-400 font-semibold uppercase mt-0.5">Referral Credits</div>
                  </div>
                </div>

                {/* Purchased Projects List */}
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">Your Active Projects</h3>
                  {purchasedProjects.length > 0 ? (
                    <div className="space-y-4">
                      {purchasedProjects.map((proj) => (
                        <div key={proj.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 border border-slate-150 rounded-2xl hover:border-slate-350 transition-all gap-4">
                          <div>
                            <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded font-bold">{proj.category}</span>
                            <h4 className="text-sm font-bold text-slate-900 mt-2">{proj.title}</h4>
                            <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">{proj.description}</p>
                          </div>
                          <button
                            onClick={() => setActiveTab("downloads")}
                            className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-bold text-white hover:bg-blue-700 shrink-0"
                          >
                            Open Files
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-slate-400">You haven&apos;t purchased any project kits or Blueprints yet.</p>
                  )}
                </div>
              </div>
            )}

            {/* Download Center Panel */}
            {activeTab === "downloads" && (
              <div className="space-y-8 animate-in fade-in duration-200">
                <div>
                  <h2 className="text-xl font-extrabold text-slate-900">Download Center</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Download source codes, presentations, academic report templates, and dataset repositories.</p>
                </div>

                {purchasedProjects.length > 0 ? (
                  <div className="space-y-8">
                    {purchasedProjects.map((proj) => (
                      <div key={proj.id} className="border border-slate-200 rounded-3xl p-5 sm:p-6 space-y-5">
                        <div className="border-b border-slate-100 pb-3 flex justify-between items-start">
                          <div>
                            <span className="text-[9px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded font-bold">{proj.category}</span>
                            <h3 className="text-base font-extrabold text-slate-950 mt-1">{proj.title}</h3>
                          </div>
                        </div>

                        {/* Deliverables Download Links Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {[
                            { label: "Source Code Bundle", type: "zip", size: "14.2 MB", icon: FileCode, key: "sourceCode" },
                            { label: "Viva Presentation Deck", type: "pptx", size: "4.8 MB", icon: Presentation, key: "ppt" },
                            { label: "Academic Thesis Draft", type: "pdf", size: "8.1 MB", icon: FileText, key: "documentation" },
                            { label: "Sample Dataset Files", type: "csv", size: "22.0 MB", icon: Database, key: "datasets" },
                            { label: "System Testing Reports", type: "pdf", size: "2.5 MB", icon: FileText, key: "reports" },
                            { label: "High-Res Architecture SVG", type: "svg", size: "1.1 MB", icon: Layers, key: "architectureFiles" }
                          ].map((file, idx) => (
                            <button
                              key={idx}
                              onClick={() => alert(`Starting download of ${file.label} (${file.size})...`)}
                              className="flex items-center gap-3 p-3.5 border border-slate-150 rounded-xl hover:bg-slate-50 text-left transition-colors"
                            >
                              <div className="h-9 w-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                                <file.icon className="h-4.5 w-4.5" />
                              </div>
                              <div>
                                <div className="text-xs font-bold text-slate-900 truncate max-w-[140px]">{file.label}</div>
                                <div className="text-[9px] text-slate-400 mt-0.5 font-bold uppercase">{file.type} • {file.size}</div>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <Download className="h-10 w-10 text-slate-300 mx-auto mb-4" />
                    <h3 className="text-sm font-bold text-slate-800">No downloads available</h3>
                    <p className="text-xs text-slate-400 mt-1">Acquire blueprints or project kits to open the file center.</p>
                  </div>
                )}
              </div>
            )}

            {/* Purchase History Panel */}
            {activeTab === "orders" && (
              <div className="space-y-8 animate-in fade-in duration-200">
                <div>
                  <h2 className="text-xl font-extrabold text-slate-900">Purchase History</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Logs of all digital kits, synopsis packages, and blueprints acquired.</p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-200 text-slate-450 uppercase font-bold tracking-wider">
                        <th className="py-3.5 px-4">Order ID</th>
                        <th className="py-3.5 px-4">Item Title</th>
                        <th className="py-3.5 px-4">Date</th>
                        <th className="py-3.5 px-4">Amount</th>
                        <th className="py-3.5 px-4">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-semibold text-slate-650">
                      {orders.map((ord) => (
                        <tr key={ord.id} className="hover:bg-slate-50/50">
                          <td className="py-4 px-4 text-slate-900">{ord.id}</td>
                          <td className="py-4 px-4 truncate max-w-[200px]">{ord.title}</td>
                          <td className="py-4 px-4 text-slate-400">{ord.date}</td>
                          <td className="py-4 px-4 text-slate-900">₹{ord.amount}</td>
                          <td className="py-4 px-4">
                            <span className="inline-flex items-center gap-1 rounded bg-emerald-50 px-2 py-0.5 text-[10px] text-emerald-700">
                              <CheckCircle className="h-3 w-3" />
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

            {/* Mentor Sessions Panel */}
            {activeTab === "sessions" && (
              <div className="space-y-8 animate-in fade-in duration-200">
                <div>
                  <h2 className="text-xl font-extrabold text-slate-900">Mentor Sessions</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Scheduled video consultations for viva preps and code debug reviews.</p>
                </div>

                <div className="space-y-4">
                  <div className="border border-slate-200 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80"
                        alt=""
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-bold text-sm text-slate-900">Dr. Ananya Iyer</div>
                        <div className="text-xs text-slate-400">Google DeepMind • AI Scientist</div>
                        <div className="text-[10px] text-blue-600 font-bold mt-1.5 flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>June 18, 2026 at 6:00 PM</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => alert("Launching meeting client (Google Meet)...")}
                        className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-bold text-white hover:bg-blue-700"
                      >
                        Join Room
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Referral Panel */}
            {activeTab === "referral" && (
              <div className="space-y-8 animate-in fade-in duration-200">
                <div>
                  <h2 className="text-xl font-extrabold text-slate-900">Referral Credits System</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Invite your engineering colleagues. You both get ₹100 credits when they purchase templates.</p>
                </div>

                <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="space-y-2 text-center sm:text-left">
                    <h3 className="font-bold text-slate-900">Your Reward Balance</h3>
                    <div className="text-3xl font-black text-blue-600">₹{referralCredits}</div>
                    <p className="text-[10px] text-slate-400">Credits will auto-apply to your next checkout.</p>
                  </div>

                  <div className="w-full sm:w-auto max-w-sm space-y-2">
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Your Invite URL</label>
                    <div className="relative">
                      <input
                        type="text"
                        readOnly
                        value="https://studentshub.in/ref?code=ARJUN500"
                        className="w-full rounded-xl border border-slate-200 bg-white p-3 pr-24 text-xs font-mono text-slate-650"
                      />
                      <button
                        onClick={copyReferralLink}
                        className="absolute right-1.5 top-1.5 bottom-1.5 rounded-lg bg-slate-900 px-4 text-xs font-bold text-white hover:bg-slate-850 flex items-center gap-1"
                      >
                        {copied ? "Copied" : (
                          <>
                            <Copy className="h-3 w-3" />
                            Copy
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Profile Settings Panel */}
            {activeTab === "profile" && (
              <form onSubmit={(e) => { e.preventDefault(); alert("Profile updated!"); }} className="space-y-6 animate-in fade-in duration-200">
                <div>
                  <h2 className="text-xl font-extrabold text-slate-900">Profile Settings</h2>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">Update academic details and notifications settings.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">College Name</label>
                    <input
                      type="text"
                      defaultValue="Vellore Institute of Technology"
                      className="w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-800 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Degree & Department</label>
                    <input
                      type="text"
                      defaultValue="B.Tech Computer Science"
                      className="w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-800 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="rounded-xl bg-slate-900 px-6 py-2.5 text-xs font-bold text-white hover:bg-slate-850"
                >
                  Save Profile Changes
                </button>
              </form>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <Suspense fallback={<div className="flex h-screen items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>}>
      <DashboardContent />
    </Suspense>
  );
}
