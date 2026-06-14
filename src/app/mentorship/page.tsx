"use client";

import { useState } from "react";
import { Star, GraduationCap, Video } from "lucide-react";
import { MOCK_MENTORS } from "@/lib/data";

export default function Mentorship() {
  const [selectedSpec, setSelectedSpec] = useState("All");
  const [selectedMentor, setSelectedMentor] = useState<typeof MOCK_MENTORS[0] | null>(null);
  
  // Booking Form State
  const [bookingDate, setBookingDate] = useState("");
  const [bookingSlot, setBookingSlot] = useState("");
  const [bookingTopic, setBookingTopic] = useState("Project Review");
  const [bookedSuccess, setBookedSuccess] = useState(false);

  const specialties = ["All", "Generative AI", "Computer Vision", "Blockchain", "Solidity", "Web Development", "System Design"];

  const filteredMentors = MOCK_MENTORS.filter((mentor) => {
    return selectedSpec === "All" || mentor.specialties.includes(selectedSpec);
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingDate || !bookingSlot) return;

    // Simulate database booking write
    setTimeout(() => {
      setBookedSuccess(true);
    }, 800);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-200 pb-8 mb-10">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              1:1 Project Mentorship
            </h1>
            <p className="text-sm text-slate-500 mt-1">Book diagnostic video calls, code reviews, and mock viva preparation with top scientists.</p>
          </div>

          {/* Specialty Filter tags */}
          <div className="flex flex-wrap gap-2">
            {specialties.map((spec) => (
              <button
                key={spec}
                onClick={() => setSelectedSpec(spec)}
                className={`text-xs font-bold rounded-full px-4 py-2 border transition-all ${
                  selectedSpec === spec
                    ? "bg-blue-600 border-blue-600 text-white shadow-sm"
                    : "bg-white border-slate-200 text-slate-650 hover:bg-slate-50"
                }`}
              >
                {spec}
              </button>
            ))}
          </div>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMentors.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={mentor.avatar}
                    alt={mentor.name}
                    className="h-16 w-16 rounded-full object-cover border-2 border-blue-650/10"
                  />
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{mentor.name}</h3>
                    <div className="text-xs text-slate-500 font-semibold">{mentor.role} @ {mentor.company}</div>
                    <div className="flex items-center gap-1.5 text-xs text-amber-500 font-bold mt-1">
                      <Star className="h-3.5 w-3.5 fill-current" />
                      <span>{mentor.rating}</span>
                      <span className="text-slate-400 font-normal">({mentor.reviewsCount} reviews)</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {mentor.bio}
                </p>

                {/* Specialties tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {mentor.specialties.map((spec, idx) => (
                    <span key={idx} className="rounded-md bg-blue-50 px-2.5 py-0.5 text-[10px] font-bold text-blue-600 border border-blue-100/20">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action area */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-[9px] text-slate-400 font-bold uppercase">Pricing / hour</div>
                  <div className="text-lg font-black text-slate-900">₹{mentor.pricingPerHr}</div>
                </div>
                <button
                  onClick={() => {
                    setSelectedMentor(mentor);
                    setBookedSuccess(false);
                    setBookingDate("");
                    setBookingSlot("");
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-4.5 py-2.5 text-xs font-bold text-white hover:bg-blue-700 transition-all shadow-sm"
                >
                  <Video className="h-3.5 w-3.5" />
                  Schedule Video Call
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Dialog/Modal */}
        {selectedMentor && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm">
            <div className="w-full max-w-md bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden animate-in zoom-in-95 duration-200">
              <div className="p-6 border-b border-slate-100 flex justify-between items-start">
                <div className="flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={selectedMentor.avatar}
                    alt=""
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Book {selectedMentor.name}</h3>
                    <p className="text-[10px] text-slate-400">1:1 Mentorship Consultation</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedMentor(null)}
                  className="rounded-lg p-2 text-slate-400 hover:bg-slate-50 hover:text-slate-900 focus:outline-none"
                >
                  ✕
                </button>
              </div>

              {!bookedSuccess ? (
                <form onSubmit={handleBookingSubmit} className="p-6 space-y-4">
                  {/* Topic Select */}
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Consultation Topic</label>
                    <select
                      value={bookingTopic}
                      onChange={(e) => setBookingTopic(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-700 focus:border-blue-500 focus:outline-none"
                    >
                      <option value="Project Review">Project Code Review & Debugging</option>
                      <option value="Resume Review">Resume & Project Placement Audit</option>
                      <option value="Viva Preparation">External Examiner Viva Prep</option>
                      <option value="Architecture Consultation">System Design & Diagrams Sizing</option>
                    </select>
                  </div>

                  {/* Date Input */}
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Select Date</label>
                    <input
                      type="date"
                      required
                      value={bookingDate}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-800 focus:border-blue-500 focus:outline-none"
                    />
                  </div>

                  {/* Slot Selector */}
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Available Slots</label>
                    <div className="grid grid-cols-2 gap-2">
                      {["10:00 AM - 10:45 AM", "2:00 PM - 2:45 PM", "6:00 PM - 6:45 PM", "8:00 PM - 8:45 PM"].map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setBookingSlot(slot)}
                          className={`rounded-xl border p-2 text-center text-xs font-bold transition-all ${
                            bookingSlot === slot
                              ? "bg-blue-600 border-blue-600 text-white"
                              : "border-slate-200 text-slate-650 hover:bg-slate-50"
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-400">Total consultation fee:</span>
                    <span className="text-base font-black text-slate-900">₹{selectedMentor.pricingPerHr}</span>
                  </div>

                  <button
                    type="submit"
                    disabled={!bookingDate || !bookingSlot}
                    className="w-full flex h-12 items-center justify-center gap-1.5 rounded-xl bg-blue-600 text-sm font-bold text-white shadow-md hover:bg-blue-700 transition-colors disabled:opacity-50"
                  >
                    Confirm Booking
                  </button>
                </form>
              ) : (
                <div className="p-6 text-center space-y-4">
                  <div className="h-12 w-12 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Booking Confirmed!</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      We&apos;ve scheduled your session on <span className="font-semibold text-slate-800">{bookingDate}</span> at <span className="font-semibold text-slate-800">{bookingSlot}</span>. The meeting invite has been sent.
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedMentor(null)}
                    className="w-full rounded-xl bg-slate-100 py-3 text-xs font-bold text-slate-700 hover:bg-slate-200 transition-colors"
                  >
                    Done
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
