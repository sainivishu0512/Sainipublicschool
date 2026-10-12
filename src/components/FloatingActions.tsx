import React, { useState } from 'react';
import { Phone, FileDown, Sparkles, X } from 'lucide-react';
import { CONTACT_INFO } from '../data/schoolData';


interface FloatingActionsProps {
  onOpenEnquiry: () => void;
  onOpenProspectus: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  onOpenEnquiry,
  onOpenProspectus,
}) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside aria-label="Quick Admissions Actions" className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* If expanded */}
      {!collapsed ? (
        <div className="bg-[#FFFFFF]/95 backdrop-blur-md rounded-2xl shadow-2xl border-2 border-[#D7BBA8] p-3 space-y-2 animate-in slide-in-from-bottom duration-300 w-64">
          <div className="flex items-center justify-between border-b border-[#D7BBA8]/40 pb-2 px-1">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#234B38] animate-ping" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#234B38]">
                Admissions Desk
              </span>
            </div>
            <button
              onClick={() => setCollapsed(true)}
              className="p-1 rounded text-[#56645B] hover:text-[#234B38] transition-colors"
              title="Minimize quick tools"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Quick Enquiry button */}
          <button
            onClick={onOpenEnquiry}
            className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-[#234B38] hover:bg-[#1A382A] text-white text-xs font-semibold tracking-wide transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#D7BBA8]" />
              <span>Admissions Enquiry</span>
            </div>
            <span className="text-[10px] text-[#D7BBA8] font-normal">Fdn–8</span>
          </button>

          {/* Prospectus button */}
          <button
            onClick={onOpenProspectus}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F8F6F0] hover:bg-[#D7BBA8]/20 text-[#234B38] border border-[#D7BBA8]/50 text-xs font-medium transition-colors cursor-pointer"
          >
            <FileDown className="w-3.5 h-3.5 text-[#A07F69]" />
            <span>Download Prospectus</span>
          </button>

          {/* Call button */}
          <a
            href={`tel:${CONTACT_INFO.phoneNumbers[0].replace(/[^0-9+]/g, '')}`}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F8F6F0] hover:bg-[#D7BBA8]/20 text-[#29342D] border border-[#D7BBA8]/50 text-xs font-medium transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#234B38]" />
            <span className="truncate">{CONTACT_INFO.phoneNumbers[0]}</span>
          </a>
        </div>
      ) : (
        <button
          onClick={() => setCollapsed(false)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#234B38] hover:bg-[#1A382A] text-[#F8F6F0] shadow-xl border-2 border-[#D7BBA8] text-xs font-semibold tracking-wide cursor-pointer transition-transform hover:scale-105"
        >
          <Sparkles className="w-4 h-4 text-[#D7BBA8]" />
          <span>Admissions 2025–26</span>
        </button>
      )}
    </aside>
  );
};
