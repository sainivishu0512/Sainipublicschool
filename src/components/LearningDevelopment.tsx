import React, { useState } from 'react';
import { BookOpen, Activity, Palette, Trophy, MessageSquare, Heart, ArrowUpRight } from 'lucide-react';
import { LEARNING_PILLARS } from '../data/schoolData';

export const LearningDevelopment: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0: return <BookOpen className="w-5 h-5" />;
      case 1: return <Activity className="w-5 h-5" />;
      case 2: return <Palette className="w-5 h-5" />;
      case 3: return <Trophy className="w-5 h-5" />;
      case 4: return <MessageSquare className="w-5 h-5" />;
      case 5: return <Heart className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <section id="learning" className="py-20 bg-[#F8F6F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#234B38]/10 text-[#234B38] text-xs font-semibold tracking-wider uppercase">
            <BookOpen className="w-3.5 h-3.5 text-[#234B38]" />
            Holistic Student Growth
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#234B38] tracking-tight">
            Learning & Student Development
          </h2>
          <div className="w-24 h-0.5 bg-[#D7BBA8] mx-auto my-2" />
          <p className="text-[#56645B] text-base sm:text-lg font-normal leading-relaxed">
            Education extends beyond textbooks. We nurture intellect, physical vigor, emotional balance, and creative flair across Foundation, Primary, and Middle School.
          </p>
        </div>

        {/* 6 Key Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LEARNING_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.title}
              onClick={() => setSelectedPillar(idx)}
              className={`bg-[#FFFFFF] rounded-2xl overflow-hidden border transition-all duration-300 shadow-sm hover:shadow-lg cursor-pointer flex flex-col group ${
                selectedPillar === idx
                  ? 'border-[#234B38] ring-2 ring-[#234B38]/20'
                  : 'border-[#D7BBA8]/40 hover:border-[#234B38]/40'
              }`}
            >
              {/* Pillar Image */}
              <div className="relative h-48 overflow-hidden bg-[#234B38]">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className={`w-full h-full object-cover ${pillar.objectPosition || 'object-[center_20%]'} group-hover:scale-105 transition-transform duration-500`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#234B38]/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-[#234B38]/90 rounded-md text-[#D7BBA8] border border-[#D7BBA8]/30">
                      {getPillarIcon(idx)}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#D7BBA8]">
                      Pillar 0{idx + 1}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#D7BBA8] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Pillar Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <span className="text-xs font-serif italic text-[#A07F69] font-medium block">
                    {pillar.tagline}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-[#234B38] group-hover:text-[#1A382A]">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#56645B] leading-relaxed pt-1">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#D7BBA8]/30 flex items-center justify-between text-xs text-[#234B38] font-semibold">
                  <span>Foundation to Class 8 Focus</span>
                  <span className="text-[#A07F69] font-serif">Nurturing Excellence</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Daily Learning Rhythm Highlight Banner */}
        <div className="mt-16 bg-[#FFFFFF] rounded-2xl p-6 sm:p-8 border border-[#D7BBA8]/50 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#D7BBA8]/40">
            <div className="pt-4 md:pt-0">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-[#234B38] block">
                100%
              </span>
              <span className="text-xs uppercase tracking-wider text-[#56645B] font-semibold mt-1 block">
                Activity-Based Learning
              </span>
              <span className="text-[11px] text-[#A07F69] mt-0.5 block">
                Foundations through play & experiments
              </span>
            </div>

            <div className="pt-4 md:pt-0">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-[#234B38] block">
                1:20
              </span>
              <span className="text-xs uppercase tracking-wider text-[#56645B] font-semibold mt-1 block">
                Teacher-Student Ratio
              </span>
              <span className="text-[11px] text-[#A07F69] mt-0.5 block">
                Individual observation & feedback
              </span>
            </div>

            <div className="pt-4 md:pt-0">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-[#234B38] block">
                Daily
              </span>
              <span className="text-xs uppercase tracking-wider text-[#56645B] font-semibold mt-1 block">
                Reading & Library Time
              </span>
              <span className="text-[11px] text-[#A07F69] mt-0.5 block">
                Cultivating spontaneous literacy
              </span>
            </div>

            <div className="pt-4 md:pt-0">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-[#234B38] block">
                Values
              </span>
              <span className="text-xs uppercase tracking-wider text-[#56645B] font-semibold mt-1 block">
                Integrated in Assembly
              </span>
              <span className="text-[11px] text-[#A07F69] mt-0.5 block">
                Moral talks, prayer & quiet reflection
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
