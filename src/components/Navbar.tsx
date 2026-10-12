import React, { useState, useEffect } from 'react';
import { Phone, Mail, Clock, Menu, X, ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { CrestLogo } from './CrestLogo';
import { CONTACT_INFO } from '../data/schoolData';

interface NavbarProps {
  onOpenEnquiry: () => void;
  onOpenProspectus: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry, onOpenProspectus, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Educational Journey', href: '#journey' },
    { label: 'Learning & Growth', href: '#learning' },
    { label: 'Campus & Facilities', href: '#facilities' },
    { label: 'Admissions', href: '#admissions' },
    { label: 'Notices', href: '#notices' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Notification / Information Bar */}
      <div className="bg-[#1A382A] text-[#F8F6F0] text-xs py-2 px-4 border-b border-[#2D5D46]/60">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          {/* Left: Contact Info */}
          <div className="flex items-center flex-wrap gap-4 sm:gap-6">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-1.5 text-[#D7BBA8] hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{CONTACT_INFO.phoneNumbers[0]}</span>
            </a>
            <a
              href="mailto:admissions@sainipublicschool.edu.in"
              className="hidden md:flex items-center gap-1.5 hover:text-[#D7BBA8] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#D7BBA8]" />
              <span>{CONTACT_INFO.emailAddresses[0]}</span>
            </a>
            <div className="hidden lg:flex items-center gap-1.5 text-[#F8F6F0]/80">
              <Clock className="w-3.5 h-3.5 text-[#D7BBA8]" />
              <span>Office: Mon–Sat 8:00 AM – 3:00 PM</span>
            </div>
          </div>

          {/* Right: Admissions Announcement & Quick Action */}
          <div className="flex items-center gap-3 ml-auto">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#234B38] text-[#D7BBA8] text-[11px] font-medium border border-[#D7BBA8]/30">
              <Sparkles className="w-3 h-3 text-[#D7BBA8]" />
              Admissions Open: Foundation – Class 8
            </span>
            <button
              onClick={onOpenProspectus}
              className="hidden sm:inline-flex items-center gap-1 text-[11px] text-[#D7BBA8] hover:text-white underline underline-offset-2 transition-colors cursor-pointer"
            >
              <Calendar className="w-3 h-3" />
              Download Prospectus
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FFFFFF]/95 backdrop-blur-md shadow-md py-3 border-b border-[#234B38]/10'
            : 'bg-[#F8F6F0] py-4 border-b border-[#D7BBA8]/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & School Title */}
          <a
            href="#home"
            className="flex items-center focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#home');
            }}
          >
            <CrestLogo size="md" variant="dark" />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center space-x-1 lg:space-x-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`px-3 py-2 rounded-md text-[13px] font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-[#234B38] font-semibold bg-[#234B38]/10'
                      : 'text-[#29342D] hover:text-[#234B38] hover:bg-[#D7BBA8]/20'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenEnquiry}
              className="inline-flex items-center gap-2 bg-[#234B38] hover:bg-[#1A382A] text-[#F8F6F0] hover:text-white px-4 py-2.5 rounded-lg text-xs font-semibold tracking-wide uppercase shadow-sm transition-all duration-200 border border-[#D7BBA8]/40 hover:shadow-md cursor-pointer group"
            >
              <span>Admissions Enquiry</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D7BBA8] group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={onOpenEnquiry}
              className="sm:hidden px-3 py-1.5 bg-[#234B38] text-white text-xs font-semibold rounded-md border border-[#D7BBA8]/40"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#234B38] hover:bg-[#D7BBA8]/20 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown / Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#FFFFFF] border-b border-[#234B38]/20 px-4 pt-3 pb-6 space-y-1.5 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="py-2 mb-2 border-b border-[#D7BBA8]/30">
              <p className="text-xs text-[#56645B] italic font-serif text-center">
                “Every student has its own qualities like flowers.”
              </p>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="block px-3 py-2.5 rounded-md text-sm font-medium text-[#29342D] hover:bg-[#234B38]/10 hover:text-[#234B38]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-[#D7BBA8]/30 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full text-center bg-[#234B38] text-[#F8F6F0] py-2.5 rounded-lg text-sm font-semibold tracking-wide uppercase border border-[#D7BBA8]/40 shadow-sm"
              >
                Admissions Enquiry
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenProspectus();
                }}
                className="w-full text-center bg-[#F8F6F0] text-[#234B38] py-2 rounded-lg text-xs font-semibold border border-[#234B38]/20"
              >
                Download Prospectus
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
