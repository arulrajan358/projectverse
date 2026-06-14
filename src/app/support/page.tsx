"use client";

import { useState } from "react";
import { Mail, MessageSquare, Shield, Send, ChevronRight } from "lucide-react";

export default function SupportCenter() {
  const [ticketData, setTicketData] = useState({ name: "", email: "", subject: "", message: "" });
  const [ticketSubmitted, setTicketSubmitted] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { sender: "bot", text: "Hello! Welcome to ProjectVerse Support. How can I help you today?" }
  ]);

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setTicketSubmitted(true);
    }, 800);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    const userMsg = chatMessage;
    setChatHistory(prev => [...prev, { sender: "user", text: userMsg }]);
    setChatMessage("");

    // Simulate Bot typing reply
    setTimeout(() => {
      let reply = "Thanks for asking! A support specialist has been notified. We will resolve your query soon.";
      if (userMsg.toLowerCase().includes("code") || userMsg.toLowerCase().includes("run")) {
        reply = "All code bundles include step-by-step setup guides. If you are having trouble training a model, please check the 'Downloads' folder for the requirements.txt file.";
      } else if (userMsg.toLowerCase().includes("viva") || userMsg.toLowerCase().includes("ppt")) {
        reply = "Yes! Every project includes a Viva Q&A document and a customizable slide deck template.";
      }
      setChatHistory(prev => [...prev, { sender: "bot", text: reply }]);
    }, 1000);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">Support & Help Desk</h1>
          <p className="mt-4 text-base text-slate-650 leading-relaxed">
            Search our knowledge libraries, write a support ticket, or chat live with our support specialists.
          </p>
        </div>

        {/* Knowledge Base Categories */}
        <h2 className="text-base font-bold text-slate-900 mb-6 uppercase tracking-wider">Knowledge Base</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { title: "Academic & Synopses", desc: "Understanding guidelines, layouts, and IEEE formats.", count: "12 articles" },
            { title: "Payments & Invoicing", desc: "GST receipts, Stripe transactions, and refund rules.", count: "8 articles" },
            { title: "Codebase & Deployment", desc: "Installing PyTorch, setting up ESP32, node server configs.", count: "18 articles" }
          ].map((cat, idx) => (
            <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm hover:border-slate-350 hover:shadow-md transition-all flex flex-col justify-between min-h-[140px]">
              <div>
                <h3 className="text-sm font-bold text-slate-900">{cat.title}</h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{cat.desc}</p>
              </div>
              <div className="flex items-center justify-between mt-4 border-t border-slate-50 pt-3 text-[10px] font-bold text-blue-600">
                <span>{cat.count}</span>
                <ChevronRight className="h-3 w-3" />
              </div>
            </div>
          ))}
        </div>

        {/* Ticket form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-8 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm">
            {!ticketSubmitted ? (
              <form onSubmit={handleTicketSubmit} className="space-y-4">
                <h3 className="text-sm font-bold text-slate-950 uppercase tracking-wider mb-2">Submit Support Ticket</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Your Name</label>
                    <input
                      type="text"
                      required
                      value={ticketData.name}
                      onChange={(e) => setTicketData({ ...ticketData, name: e.target.value })}
                      placeholder="Arjun Verma"
                      className="w-full rounded-xl border border-slate-200 bg-white p-3 text-xs text-slate-800 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      value={ticketData.email}
                      onChange={(e) => setTicketData({ ...ticketData, email: e.target.value })}
                      placeholder="arjun@vit.edu"
                      className="w-full rounded-xl border border-slate-200 bg-white p-3 text-xs text-slate-800 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Subject</label>
                  <input
                    type="text"
                    required
                    value={ticketData.subject}
                    onChange={(e) => setTicketData({ ...ticketData, subject: e.target.value })}
                    placeholder="e.g. YOLOv8 conda installation error"
                    className="w-full rounded-xl border border-slate-200 bg-white p-3 text-xs text-slate-800 focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Message Description</label>
                  <textarea
                    required
                    rows={4}
                    value={ticketData.message}
                    onChange={(e) => setTicketData({ ...ticketData, message: e.target.value })}
                    placeholder="Provide details about errors or queries..."
                    className="w-full rounded-xl border border-slate-200 bg-white p-3 text-xs text-slate-800 focus:border-blue-500 focus:outline-none leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-xl bg-blue-600 px-6 py-3 text-xs font-bold text-white shadow-sm hover:bg-blue-700 transition-colors"
                >
                  Submit Ticket
                </button>
              </form>
            ) : (
              <div className="text-center py-12 space-y-4">
                <div className="h-12 w-12 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
                  ✓
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Ticket Submitted Successfully!</h3>
                  <p className="text-xs text-slate-500 mt-2 max-w-sm mx-auto">
                    We&apos;ve registered your ticket. A support agent will contact you at <span className="font-semibold text-slate-850">{ticketData.email}</span>.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-4 bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm space-y-6">
            <h3 className="text-sm font-bold text-slate-950 uppercase tracking-wider">Direct Channels</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                  <Mail className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Email Support</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">support@projectverse.in</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="p-2.5 rounded-xl bg-purple-50 text-purple-650 shrink-0">
                  <Shield className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Quality Desk</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">compliance@projectverse.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Live Chat Widget */}
        <div className="fixed bottom-6 right-6 z-50">
          {!chatOpen ? (
            <button
              onClick={() => setChatOpen(true)}
              className="rounded-full bg-blue-600 p-4 text-white shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all scale-100 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <MessageSquare className="h-6 w-6" />
              <span className="text-xs font-bold pr-1">Chat Live</span>
            </button>
          ) : (
            <div className="w-[340px] bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden animate-in slide-in-from-bottom duration-200">
              {/* Header */}
              <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
                <div className="flex items-center gap-2.5">
                  <div className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-bold">ProjectVerse Support Bot</span>
                </div>
                <button
                  onClick={() => setChatOpen(false)}
                  className="text-white/80 hover:text-white font-bold text-sm"
                >
                  ✕
                </button>
              </div>

              {/* Message History */}
              <div className="h-60 p-4 overflow-y-auto space-y-3 bg-slate-50 text-xs">
                {chatHistory.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`rounded-2xl p-3 max-w-[80%] leading-relaxed ${
                        msg.sender === "user"
                          ? "bg-blue-600 text-white"
                          : "bg-white border border-slate-200 text-slate-800"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-100 flex gap-2">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="Type message..."
                  className="flex-grow rounded-xl border border-slate-200 bg-white p-2.5 text-xs text-slate-800 focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-blue-600 p-2.5 text-white hover:bg-blue-700 transition-colors"
                  aria-label="Send Message"
                >
                  <Send className="h-4.5 w-4.5" />
                </button>
              </form>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
