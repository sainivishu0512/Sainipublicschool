import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  HelpCircle,
  ChevronDown,
  Navigation,
} from 'lucide-react';
import { CONTACT_INFO } from '../data/schoolData';


export const ContactSection: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [tourForm, setTourForm] = useState({
    parentName: '',
    phone: '',
    preferredDate: '',
    studentClass: 'Foundation',
  });
  const [tourBooked, setTourBooked] = useState(false);

  const faqs = [
    {
      q: "What classes are offered at Saini Public School?",
      a: "Saini Public School provides education exclusively from the Foundation Stage (Nursery, LKG, UKG) through Class 8, focusing on strong foundational literacy, numeracy, and disciplined middle school development."
    },
    {
      q: "What is the student-to-teacher ratio?",
      a: "We maintain a strict 1:20 student-to-teacher ratio in all classrooms to ensure every child receives personal attention, consistent observation, and patient guidance."
    },
    {
      q: "How can parents schedule a campus visit?",
      a: "Parents are warmly welcome to visit our campus between 9:00 AM and 1:30 PM, Monday through Friday. You can schedule a visit using the form above or call our admissions desk directly."
    },
    {
      q: "What are the school hours for different classes?",
      a: "Foundation children (Nursery, LKG, UKG) attend from 8:30 AM to 12:30 PM. Students from Class 1 through Class 8 attend from 8:00 AM to 2:15 PM."
    },
    {
      q: "Is school transport available?",
      a: "Yes, verified, safe school bus routes operate across designated local areas with trained drivers and dedicated female attendants for younger learners."
    },
  ];

  const handleTourSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tourForm.parentName || !tourForm.phone) return;
    setTourBooked(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#FFFFFF] relative border-b border-[#D7BBA8]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#234B38]/10 text-[#234B38] text-xs font-semibold tracking-wider uppercase">
            <MapPin className="w-3.5 h-3.5 text-[#234B38]" />
            Location & Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#234B38] tracking-tight">
            Contact & Campus Visits
          </h2>
          <div className="w-24 h-0.5 bg-[#D7BBA8] mx-auto my-2" />
          <p className="text-[#56645B] text-base sm:text-lg font-normal leading-relaxed">
            Our admissions office is ready to assist you. Come experience our tranquil learning environment first-hand.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Campus Address */}
          <div className="bg-[#F8F6F0] p-6 rounded-xl border border-[#D7BBA8]/50 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#234B38] text-[#D7BBA8] flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-serif font-bold text-[#234B38]">
                Campus Location
              </h3>
              <p className="text-xs text-[#56645B] leading-relaxed">
                {CONTACT_INFO.address}
              </p>
            </div>
            <div className="pt-4 border-t border-[#D7BBA8]/30 mt-4">
              <span className="text-[11px] font-semibold text-[#A07F69]">
                Safe & Green Campus
              </span>
            </div>
          </div>

          {/* Card 2: Phone Numbers */}
          <div className="bg-[#F8F6F0] p-6 rounded-xl border border-[#D7BBA8]/50 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#234B38] text-[#D7BBA8] flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-serif font-bold text-[#234B38]">
                Contact Numbers
              </h3>
              <div className="space-y-1.5 text-xs">
                {CONTACT_INFO.phoneNumbers.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
                    className="block text-[#29342D] hover:text-[#234B38] font-medium"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>
            <div className="pt-4 border-t border-[#D7BBA8]/30 mt-4">
              <span className="text-[11px] font-semibold text-[#A07F69]">
                Admissions & Reception
              </span>
            </div>
          </div>

          {/* Card 3: Email */}
          <div className="bg-[#F8F6F0] p-6 rounded-xl border border-[#D7BBA8]/50 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#234B38] text-[#D7BBA8] flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-base font-serif font-bold text-[#234B38]">
                Official Email
              </h3>
              <div className="space-y-1.5 text-xs">
                {CONTACT_INFO.emailAddresses.map((email, idx) => (
                  <a
                    key={idx}
                    href={`mailto:${email}`}
                    className="block text-[#29342D] hover:text-[#234B38] truncate"
                  >
                    {email}
                  </a>
                ))}
              </div>
            </div>
            <div className="pt-4 border-t border-[#D7BBA8]/30 mt-4">
              <span className="text-[11px] font-semibold text-[#A07F69]">
                Fast Response Desk
              </span>
            </div>
          </div>

          {/* Card 4: Office Timings */}
          <div className="bg-[#F8F6F0] p-6 rounded-xl border border-[#D7BBA8]/50 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#234B38] text-[#D7BBA8] flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-serif font-bold text-[#234B38]">
                Administrative Hours
              </h3>
              <p className="text-xs text-[#56645B] leading-relaxed">
                {CONTACT_INFO.officeHours}
              </p>
            </div>
            <div className="pt-4 border-t border-[#D7BBA8]/30 mt-4">
              <span className="text-[11px] font-semibold text-[#A07F69]">
                Visiting: 9:00 AM – 1:30 PM
              </span>
            </div>
          </div>

        </div>

        {/* Two-Column Section: Schedule a Tour + Interactive Map Visualization */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Quick Schedule Tour Box */}
          <div className="lg:col-span-5 bg-[#234B38] text-[#F8F6F0] p-6 sm:p-8 rounded-2xl border border-[#D7BBA8]/40 shadow-lg space-y-5">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#D7BBA8] font-semibold">
                Personalized Visit
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#F8F6F0]">
                Schedule a Campus Walkthrough
              </h3>
              <p className="text-xs text-[#F8F6F0]/80 leading-relaxed">
                We believe parents should feel the warmth and culture of our school in person before making an admission decision.
              </p>
            </div>

            {tourBooked ? (
              <div className="bg-[#1A382A] p-6 rounded-xl border border-[#D7BBA8]/30 text-center space-y-3 animate-in fade-in duration-300">
                <CheckCircle className="w-10 h-10 text-[#D7BBA8] mx-auto" />
                <h4 className="text-lg font-serif font-bold text-white">Visit Request Confirmed!</h4>
                <p className="text-xs text-[#F8F6F0]/80">
                  Thank you, {tourForm.parentName}. Our administrative desk will call {tourForm.phone} to confirm your appointment time.
                </p>
                <button
                  onClick={() => setTourBooked(false)}
                  className="text-xs text-[#D7BBA8] underline"
                >
                  Schedule another time
                </button>
              </div>
            ) : (
              <form onSubmit={handleTourSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-[#D7BBA8] uppercase tracking-wide mb-1">
                    Parent's Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Meenakshi Sundaram"
                    value={tourForm.parentName}
                    onChange={(e) => setTourForm({ ...tourForm, parentName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#1A382A] border border-[#D7BBA8]/40 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#D7BBA8]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#D7BBA8] uppercase tracking-wide mb-1">
                    Contact Mobile Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={tourForm.phone}
                    onChange={(e) => setTourForm({ ...tourForm, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#1A382A] border border-[#D7BBA8]/40 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#D7BBA8]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#D7BBA8] uppercase tracking-wide mb-1">
                      Class Level
                    </label>
                    <select
                      value={tourForm.studentClass}
                      onChange={(e) => setTourForm({ ...tourForm, studentClass: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg bg-[#1A382A] border border-[#D7BBA8]/40 text-xs text-white focus:outline-none"
                    >
                      <option value="Foundation">Foundation</option>
                      <option value="Primary (1-5)">Primary (1-5)</option>
                      <option value="Middle (6-8)">Middle (6-8)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#D7BBA8] uppercase tracking-wide mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={tourForm.preferredDate}
                      onChange={(e) => setTourForm({ ...tourForm, preferredDate: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg bg-[#1A382A] border border-[#D7BBA8]/40 text-xs text-white focus:outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-3 bg-[#D7BBA8] hover:bg-[#c9aa95] text-[#234B38] font-semibold text-xs tracking-wider uppercase rounded-lg shadow-md transition-colors cursor-pointer"
                >
                  Book School Walkthrough
                </button>
              </form>
            )}
          </div>

          {/* Interactive Map & Campus Landmark Representation */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#D7BBA8]/50 shadow-md bg-[#234B38] h-[340px] flex flex-col justify-between p-6 text-white">
              {/* Background styled map schematic */}
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 800 500" fill="none" stroke="#D7BBA8">
                  <path d="M50 100 Q 200 150 400 100 T 750 120" strokeWidth="3" />
                  <path d="M100 400 Q 300 250 500 350 T 700 200" strokeWidth="2" strokeDasharray="6 4" />
                  <line x1="250" y1="0" x2="250" y2="500" strokeWidth="2" />
                  <line x1="550" y1="0" x2="550" y2="500" strokeWidth="2" />
                  <circle cx="400" cy="250" r="100" strokeWidth="1.5" />
                </svg>
              </div>

              {/* Top details */}
              <div className="relative z-10 flex justify-between items-start">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#D7BBA8] font-semibold">
                    Campus Geolocation & Directions
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white mt-0.5">
                    Saini Public School Campus
                  </h3>
                  <p className="text-xs text-[#F8F6F0]/80 mt-1 max-w-sm">
                    {CONTACT_INFO.address}
                  </p>
                </div>
                <div className="p-3 rounded-full bg-[#1A382A] text-[#D7BBA8] border border-[#D7BBA8]/40 shadow-inner">
                  <Navigation className="w-5 h-5" />
                </div>
              </div>

              {/* Center Campus Marker */}
              <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                <div className="w-12 h-12 rounded-full bg-[#D7BBA8] text-[#234B38] flex items-center justify-center shadow-2xl animate-bounce">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="bg-[#1A382A]/90 backdrop-blur-sm px-4 py-1.5 rounded-full border border-[#D7BBA8]/40 text-xs font-semibold text-white mt-2 shadow-lg">
                  Saini Public School Main Gate
                </div>
              </div>

              {/* Bottom directions helper */}
              <div className="relative z-10 flex flex-wrap justify-between items-center text-xs text-[#F8F6F0]/80 pt-2 border-t border-[#D7BBA8]/30">
                <span>Easily accessible from major arterial roads</span>
                <span className="text-[#D7BBA8] font-semibold">Dedicated visitor parking inside campus</span>
              </div>
            </div>

            {/* Parent FAQs Accordion */}
            <div className="bg-[#F8F6F0] rounded-2xl p-6 border border-[#D7BBA8]/50 space-y-3">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-4 h-4 text-[#234B38]" />
                <h4 className="text-base font-serif font-bold text-[#234B38]">
                  Frequently Asked Questions
                </h4>
              </div>

              <div className="space-y-2">
                {faqs.map((faq, index) => {
                  const isOpen = activeFaq === index;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl border border-[#D7BBA8]/40 overflow-hidden"
                    >
                      <button
                        onClick={() => setActiveFaq(isOpen ? null : index)}
                        className="w-full text-left px-4 py-3 text-xs font-bold text-[#234B38] flex justify-between items-center gap-2 cursor-pointer hover:bg-[#F8F6F0]/50"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#A07F69] shrink-0 transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-3 pt-1 text-xs text-[#56645B] leading-relaxed border-t border-[#D7BBA8]/20 animate-in fade-in duration-200">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
