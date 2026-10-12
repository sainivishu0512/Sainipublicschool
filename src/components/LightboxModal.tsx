import React from 'react';
import { X } from 'lucide-react';
import type { GalleryItem } from '../data/schoolData';


interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FFFFFF] w-full max-w-4xl rounded-2xl shadow-2xl border border-[#D7BBA8] overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Top bar */}
        <div className="bg-[#234B38] text-white px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-[#D7BBA8] font-semibold bg-[#1A382A] px-2 py-0.5 rounded border border-[#D7BBA8]/30">
              {item.category}
            </span>
            <span className="text-sm font-serif font-bold text-white truncate max-w-md">
              {item.title}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image */}
        <div className="bg-black flex items-center justify-center overflow-hidden max-h-[70vh]">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="max-h-[68vh] w-auto max-w-full object-contain"
          />
        </div>

        {/* Caption */}
        <div className="p-4 bg-[#F8F6F0] border-t border-[#D7BBA8]/40">
          <h4 className="text-base font-serif font-bold text-[#234B38]">
            {item.title}
          </h4>
          <p className="text-xs text-[#56645B] mt-1">
            {item.caption}
          </p>
        </div>

      </div>
    </div>
  );
};
