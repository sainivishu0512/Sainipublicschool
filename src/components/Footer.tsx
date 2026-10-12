import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUp,
  Flower2,
  CheckCircle,
} from 'lucide-react';

import { CrestLogo } from './CrestLogo';
import { CONTACT_INFO, OFFICIAL_TAGLINE } from '../data/schoolData';

const CURRENT_YEAR = new Date().getFullYear();

interface FooterProps {

  onOpenProspectus: () => void;
  onOpenEnquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenProspectus, onOpenEnquiry }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Educational Journey', href: '#journey' },
    { label: 'Learning & Growth', href: '#learning' },
    { label: 'Campus & Facilities', href: '#facilities' },
    { label: 'Admissions', href: '#admissions' },
    { label: 'Notices & Circulars', href: '#notices' },
    { label: 'Photo Gallery', href: '#gallery' },
    { label: 'Contact & Location', href: '#contact' },
  ];

  const classLevels = [
    'Foundation Stage (Nursery, LKG, UKG)',
    'Primary Classes (Class 1 to 5)',
    'Middle School (Class 6 to 8)',
    'Foundational Literacy & Phonics',
    'Interactive Mathematics Lab',
    'Sports & Character Formation',
  ];

  return (
    <footer className="bg-[#1A382A] text-[#F8F6F0] relative overflow-hidden pt-16 pb-12 border-t-4 border-[#D7BBA8]">
      {/* Background Subtle Watermark */}
      <div className="absolute right-0 bottom-0 pointer-events-none opacity-5">
        <Flower2 className="w-96 h-96 text-[#D7BBA8]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Feature Ribbon: Official Tagline Card */}
        <div className="bg-[#234B38] rounded-2xl p-6 sm:p-8 border border-[#D7BBA8]/40 shadow-xl mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-[#D7BBA8] font-semibold">
              School Motto & Guiding Philosophy
            </span>
            <p className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-white font-medium">
              {OFFICIAL_TAGLINE}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenEnquiry}
              className="px-5 py-2.5 rounded-lg bg-[#D7BBA8] hover:bg-[#c5a793] text-[#234B38] font-semibold text-xs tracking-wider uppercase transition-colors shadow-md cursor-pointer"
            >
              Admissions Enquiry
            </button>
            <button
              onClick={onOpenProspectus}
              className="px-4 py-2.5 rounded-lg bg-transparent hover:bg-white/10 text-white border border-[#D7BBA8]/60 font-semibold text-xs tracking-wider uppercase transition-colors cursor-pointer"
            >
              Prospectus
            </button>
          </div>
        </div>

        {/* 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[#2D5D46]">
          
          {/* Col 1: School Identity & Overview */}
          <div className="lg:col-span-4 space-y-4">
            <CrestLogo size="md" variant="beige" />
            <p className="text-xs text-[#F8F6F0]/80 leading-relaxed pt-1">
              A premier educational institution offering dedicated schooling from Foundation through Class 8. We cultivate genuine curiosity, disciplined study habits, and grounded moral values in a caring environment.
            </p>
            <div className="pt-2 text-xs text-[#D7BBA8] font-serif italic">
              “Every student has its own qualities like flowers.”
            </div>
            <div className="pt-1 flex items-center gap-2 text-[11px] text-[#F8F6F0]/60">
              <CheckCircle className="w-3.5 h-3.5 text-[#D7BBA8]" />
              <span>Academic Session 2025–26 Enrollments Open</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-serif font-bold text-[#D7BBA8] uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#F8F6F0]/80 hover:text-[#D7BBA8] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Academic Programs */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-serif font-bold text-[#D7BBA8] uppercase tracking-wider">
              Education Levels
            </h4>
            <ul className="space-y-2 text-xs text-[#F8F6F0]/80">
              {classLevels.map((lvl, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D7BBA8]" />
                  <span>{lvl}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <span className="text-[11px] text-[#D7BBA8] italic block">
                Strict adherence to 1:20 student-teacher ratio.
              </span>
            </div>
          </div>

          {/* Col 4: Verified Contact & Office Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-serif font-bold text-[#D7BBA8] uppercase tracking-wider">
              Campus Office
            </h4>
            <div className="space-y-2.5 text-xs text-[#F8F6F0]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D7BBA8] shrink-0 mt-0.5" />
                <span className="leading-snug">{CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D7BBA8] shrink-0" />
                <span>{CONTACT_INFO.phoneNumbers[0]}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D7BBA8] shrink-0" />
                <span className="truncate">{CONTACT_INFO.emailAddresses[0]}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D7BBA8] shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.officeHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F8F6F0]/70">
          <div>
            <p>
              © {CURRENT_YEAR} <strong>SAINI PUBLIC SCHOOL</strong>. All rights reserved.
            </p>
            <p className="text-[11px] text-[#F8F6F0]/50 mt-0.5">

              Serving Foundation through Class 8 with individual attention and moral distinction.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#D7BBA8]">
              Official Tagline: {OFFICIAL_TAGLINE}
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#234B38] hover:bg-[#2D5D46] text-[#D7BBA8] hover:text-white border border-[#D7BBA8]/30 transition-colors cursor-pointer"
              title="Return to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
