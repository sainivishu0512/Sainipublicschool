import React, { useState } from 'react';
import { X, Download, Check, CheckCircle2 } from 'lucide-react';
import { CrestLogo } from './CrestLogo';
import { OFFICIAL_TAGLINE } from '../data/schoolData';


interface ProspectusModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEnquiry: () => void;
}

export const ProspectusModal: React.FC<ProspectusModalProps> = ({
  isOpen,
  onClose,
  onOpenEnquiry,
}) => {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloaded(true);
      // Trigger native print or text file blob download for parents
      const element = document.createElement('a');
      const file = new Blob([
        `SAINI PUBLIC SCHOOL\n` +
        `"Every student has its own qualities like flowers."\n\n` +
        `OFFICIAL PROSPECTUS & ADMISSION GUIDE (SESSION 2025-26)\n` +
        `Education Levels: Foundation (Nursery, LKG, UKG) through Class 8\n\n` +
        `1. CORE ACADEMIC CONTINUUM:\n` +
        `- Foundation Stage (Ages 3-6): Phonics, play-based numeracy, emotional security.\n` +
        `- Primary Education (Classes 1-5): Reading fluency, mathematics, environmental studies, arts.\n` +
        `- Middle School (Classes 6-8): Mathematics, science laboratory practicals, social sciences, computer education.\n\n` +
        `2. STUDENT-TEACHER RATIO: 1:20 strict cap.\n\n` +
        `3. ADMISSION PROCEDURES:\n` +
        `Step 1: Preliminary Registration\n` +
        `Step 2: Campus Interaction\n` +
        `Step 3: Verification of Documents (Birth Certificate, Photographs, TC)\n` +
        `Step 4: Admission Confirmation & Orientation\n\n` +
        `Contact Admissions Desk: +91 98765 43210 | admissions@sainipublicschool.edu.in\n`
      ], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = 'Saini_Public_School_Prospectus_2025-26.txt';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FFFFFF] w-full max-w-2xl rounded-2xl shadow-2xl border-2 border-[#D7BBA8] overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-[#234B38] text-[#F8F6F0] p-6 flex items-center justify-between border-b border-[#D7BBA8]/40">
          <div className="flex items-center gap-3">
            <CrestLogo size="sm" variant="light" showText={false} />
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#D7BBA8] font-semibold block">
                Official Publication
              </span>
              <h3 className="text-xl font-serif font-bold text-white">
                School Prospectus 2025–26
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#F8F6F0]/80 hover:text-white hover:bg-[#1A382A] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Tagline callout */}
          <div className="bg-[#F8F6F0] p-4 rounded-xl border border-[#D7BBA8]/50 text-center">
            <p className="text-base font-serif italic text-[#234B38] font-semibold">
              {OFFICIAL_TAGLINE}
            </p>
            <p className="text-xs text-[#56645B] mt-1">
              Serving Foundation Stage through Class 8
            </p>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-[#29342D]/90 leading-relaxed">
            <h4 className="text-base font-serif font-bold text-[#234B38]">
              What You Will Find Inside the Prospectus
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-[#FFFFFF] p-3 rounded-lg border border-[#D7BBA8]/40 flex items-start gap-2">
                <Check className="w-4 h-4 text-[#234B38] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#234B38] block text-xs">Curriculum Roadmap</strong>
                  <span className="text-[11px] text-[#56645B]">Year-by-year learning milestones from Foundation to Class 8.</span>
                </div>
              </div>

              <div className="bg-[#FFFFFF] p-3 rounded-lg border border-[#D7BBA8]/40 flex items-start gap-2">
                <Check className="w-4 h-4 text-[#234B38] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#234B38] block text-xs">Individual Attention Policy</strong>
                  <span className="text-[11px] text-[#56645B]">Details on our 1:20 teacher-student ratio and remedial focus.</span>
                </div>
              </div>

              <div className="bg-[#FFFFFF] p-3 rounded-lg border border-[#D7BBA8]/40 flex items-start gap-2">
                <Check className="w-4 h-4 text-[#234B38] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#234B38] block text-xs">Campus & Safety Standards</strong>
                  <span className="text-[11px] text-[#56645B]">Overview of labs, library, playground, and transport routes.</span>
                </div>
              </div>

              <div className="bg-[#FFFFFF] p-3 rounded-lg border border-[#D7BBA8]/40 flex items-start gap-2">
                <Check className="w-4 h-4 text-[#234B38] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#234B38] block text-xs">Admission Guidelines</strong>
                  <span className="text-[11px] text-[#56645B]">Age parameters, required certificates, and fee schedule details.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Download Simulator */}
          <div className="pt-2 border-t border-[#D7BBA8]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#56645B]">
              Format: Digital Document (PDF) • 2.4 MB
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={handleDownload}
                disabled={downloading}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#234B38] hover:bg-[#1A382A] text-white rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer disabled:opacity-60"
              >
                {downloading ? (
                  <span>Generating Document...</span>
                ) : downloaded ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-[#D7BBA8]" />
                    <span>Downloaded!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-[#D7BBA8]" />
                    <span>Download Prospectus</span>
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenEnquiry();
                }}
                className="flex-1 sm:flex-initial px-4 py-2.5 bg-[#F8F6F0] hover:bg-[#D7BBA8]/20 text-[#234B38] border border-[#234B38]/30 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Apply Online
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
