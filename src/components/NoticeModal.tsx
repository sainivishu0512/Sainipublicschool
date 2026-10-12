import React from 'react';
import { X, Calendar, Tag, Printer, AlertCircle } from 'lucide-react';
import { OFFICIAL_TAGLINE } from '../data/schoolData';
import type { Notice } from '../data/schoolData';
import { CrestLogo } from './CrestLogo';


interface NoticeModalProps {
  notice: Notice | null;
  onClose: () => void;
}

export const NoticeModal: React.FC<NoticeModalProps> = ({ notice, onClose }) => {
  if (!notice) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FFFFFF] w-full max-w-2xl rounded-2xl shadow-2xl border-2 border-[#D7BBA8] overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="bg-[#234B38] text-[#F8F6F0] p-5 flex items-center justify-between border-b border-[#D7BBA8]/40">
          <div className="flex items-center gap-3">
            <CrestLogo size="sm" variant="light" showText={false} />
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#D7BBA8] font-semibold block">
                Official School Circular
              </span>
              <h3 className="text-base font-serif font-bold text-white">
                Saini Public School Administrative Notice
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

        {/* Modal Content / Official Memo Format */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D7BBA8]/40 pb-4 text-xs">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#234B38] bg-[#F8F6F0] px-2.5 py-1 rounded-md border border-[#D7BBA8]/30">
                <Tag className="w-3 h-3 text-[#A07F69]" />
                {notice.category}
              </span>
              {notice.isImportant && (
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-red-700 bg-red-50 px-2.5 py-1 rounded-md border border-red-200">
                  <AlertCircle className="w-3 h-3" />
                  Urgent Notice
                </span>
              )}
            </div>
            <div className="text-[#56645B] flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#A07F69]" />
              <span>Published: {notice.date}</span>
            </div>
          </div>

          {/* Title */}
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#234B38] leading-snug">
              {notice.title}
            </h2>
            <p className="text-xs text-[#A07F69] font-medium">
              Reference: SPS/CIR/2026/{notice.id.toUpperCase()}
            </p>
          </div>

          {/* Full Text Body */}
          <div className="bg-[#F8F6F0] p-5 rounded-xl border border-[#D7BBA8]/40 text-xs sm:text-sm text-[#29342D] leading-relaxed space-y-3">
            <p className="font-semibold text-[#234B38]">
              Dear Parents & Guardians,
            </p>
            <p className="whitespace-pre-line">
              {notice.fullText}
            </p>
            <p className="pt-2 text-xs text-[#56645B]">
              For any clarifications, please reach out to the school administrative desk between 8:00 AM and 3:00 PM.
            </p>
          </div>

          {/* Signatory */}
          <div className="flex items-center justify-between pt-2 border-t border-[#D7BBA8]/30 text-xs">
            <div>
              <div className="font-serif font-bold text-[#234B38]">
                Office of the Principal
              </div>
              <div className="text-[11px] text-[#56645B]">
                Saini Public School (Foundation through Class 8)
              </div>
              <div className="text-[10px] text-[#A07F69] italic mt-0.5">
                {OFFICIAL_TAGLINE}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FFFFFF] hover:bg-[#F8F6F0] text-[#234B38] border border-[#D7BBA8] text-xs font-medium cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
