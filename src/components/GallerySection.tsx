import React, { useState } from 'react';
import { Camera, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/schoolData';
import type { GalleryItem } from '../data/schoolData';


interface GallerySectionProps {
  onSelectImage: (item: GalleryItem) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onSelectImage }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Graduation & Honors', 'Celebrations', 'Creative Arts', 'Classrooms', 'Foundation & Play', 'Sports & Activities'];


  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  return (
    <section id="gallery" className="py-20 bg-[#F8F6F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#234B38]/10 text-[#234B38] text-xs font-semibold tracking-wider uppercase">
            <Camera className="w-3.5 h-3.5 text-[#234B38]" />
            Visual Glimpses
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#234B38] tracking-tight">
            Life at Saini Public School
          </h2>
          <div className="w-24 h-0.5 bg-[#D7BBA8] mx-auto my-2" />
          <p className="text-[#56645B] text-base sm:text-lg font-normal leading-relaxed">
            Authentic moments of joyful inquiry, athletic spirit, artistic expression, and classroom collaboration across Foundation through Class 8.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#234B38] text-[#F8F6F0] shadow-sm'
                    : 'bg-[#FFFFFF] text-[#29342D] hover:bg-[#D7BBA8]/30 border border-[#D7BBA8]/40'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectImage(item)}
              className="group relative bg-[#FFFFFF] rounded-xl overflow-hidden border border-[#D7BBA8]/50 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Photo */}
              <div className="relative h-64 overflow-hidden bg-[#234B38]/10">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className={`w-full h-full object-cover ${item.objectPosition || 'object-[center_20%]'} group-hover:scale-105 transition-transform duration-500`}
                />
                <div className="absolute inset-0 bg-[#234B38]/0 group-hover:bg-[#234B38]/30 transition-colors flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#FFFFFF]/90 text-[#234B38] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="absolute top-3 left-3 bg-[#234B38]/90 text-[#D7BBA8] text-[11px] font-semibold px-2.5 py-1 rounded-md border border-[#D7BBA8]/30">
                  {item.category}
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-1">
                <h4 className="text-sm font-serif font-bold text-[#234B38] group-hover:text-[#1A382A]">
                  {item.title}
                </h4>
                <p className="text-xs text-[#56645B] line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Photography note */}
        <div className="mt-12 text-center text-xs text-[#56645B] max-w-xl mx-auto">
          <p>
            Photography highlights genuine daily moments in the school environment, reflecting our commitment to natural, unhurried, and authentic childhood development.
          </p>
        </div>

      </div>
    </section>
  );
};
