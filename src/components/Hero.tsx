import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Heart, Sparkles, Award } from 'lucide-react';
import { OFFICIAL_TAGLINE, HERO_SUPPORTING_TEXT } from '../data/schoolData';

interface HeroProps {
  onOpenEnquiry: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry, onExploreClick }) => {
  const heroPhotos = [
    {
      src: "/images/school/hero-science-earth-day-globes.jpeg",
      label: "Science Inquiry & Earth Day",
      caption: "Students in uniform proudly presenting 3D globe models and environmental projects",
      objectPosition: "object-[center_25%]",
    },
    {
      src: "/images/school/hero-graduation-student.jpeg",
      label: "Graduation Milestones",
      caption: "Celebrating student accomplishments at Saini Public School Annual Graduation",
      objectPosition: "object-[center_20%]",
    },
    {
      src: "/images/school/hero-janamashtami-krishna-sunflower.jpeg",
      label: "Cultural Celebrations",
      caption: "Joyful cultural expression and festive assemblies at Saini Public School",
      objectPosition: "object-[center_25%]",
    },
    {
      src: "/images/school/teacher-student-blessing-mehndi.jpg",
      label: "Teacher Mentorship",
      caption: "Affectionate teacher mentorship nurturing values, warmth, and respect",
      objectPosition: "object-[center_18%]",
    },
    {
      src: "/images/school/hero-students-sports-uniform-red.jpeg",
      label: "Sports & Physical Spirit",
      caption: "Students in school sports track uniforms showing teamwork and athletic spirit",
      objectPosition: "object-[center_25%]",
    },
  ];

  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  return (
    <section id="home" className="relative bg-[#234B38] text-[#F8F6F0] overflow-hidden pt-8 pb-16 lg:py-20">
      {/* Background Subtle Botanical Watermark Motif */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M500 150 C500 150 560 280 560 380 C560 450 520 500 500 520 C480 500 440 450 440 380 C440 280 500 150 500 150 Z"
            fill="#D7BBA8"
          />
          <path
            d="M480 510 C390 480 300 380 350 290 C400 210 490 340 500 420 Z"
            fill="#D7BBA8"
          />
          <path
            d="M520 510 C610 480 700 380 650 290 C600 210 510 340 500 420 Z"
            fill="#D7BBA8"
          />
          <circle cx="500" cy="500" r="380" stroke="#D7BBA8" strokeWidth="1" strokeDasharray="6 4" />
        </svg>
      </div>

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#D7BBA8_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: School Identity, Exact Tagline, Supporting Text, CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-center lg:text-left">
            {/* Accreditation / Level Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1A382A]/80 border border-[#D7BBA8]/30 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-[#D7BBA8] animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-[#D7BBA8] font-semibold">
                Foundation Through Class 8 • Sonepat
              </span>
            </div>

            {/* School Name */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#F8F6F0] tracking-tight leading-tight">
                SAINI PUBLIC SCHOOL
              </h1>

              {/* Exact Tagline: Do Not Change */}
              <div className="pt-2 pb-1">
                <p className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-[#D7BBA8] leading-relaxed">
                  {OFFICIAL_TAGLINE}
                </p>
              </div>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#F8F6F0]/90 max-w-2xl font-light leading-relaxed">
              {HERO_SUPPORTING_TEXT}
            </p>

            {/* Two Required Hero Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#D7BBA8] hover:bg-[#c9aa95] text-[#234B38] font-semibold text-sm tracking-wide transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer group"
              >
                <span>Explore Our School</span>
                <ArrowRight className="w-4 h-4 text-[#234B38] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenEnquiry}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-transparent hover:bg-[#F8F6F0]/10 text-[#F8F6F0] border-2 border-[#D7BBA8] font-semibold text-sm tracking-wide transition-all duration-200 cursor-pointer"
              >
                <span>Admissions Enquiry</span>
              </button>
            </div>

            {/* Micro Trust Points */}
            <div className="pt-4 border-t border-[#D7BBA8]/20 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-[#1A382A] text-[#D7BBA8] shrink-0 border border-[#D7BBA8]/20">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">1:20 Ratio</div>
                  <div className="text-[11px] text-[#D7BBA8]/80">Personal Attention</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-[#1A382A] text-[#D7BBA8] shrink-0 border border-[#D7BBA8]/20">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Values & Ethics</div>
                  <div className="text-[11px] text-[#D7BBA8]/80">Character First</div>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-[#1A382A] text-[#D7BBA8] shrink-0 border border-[#D7BBA8]/20">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Affectionate Care</div>
                  <div className="text-[11px] text-[#D7BBA8]/80">Play to Class 8</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Saini Public School Photography Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Authentic Photograph */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#D7BBA8]/50 bg-[#1A382A]">
                <img
                  src={heroPhotos[activePhotoIdx].src}
                  alt={heroPhotos[activePhotoIdx].label}
                  className={`w-full h-[380px] sm:h-[440px] object-cover ${heroPhotos[activePhotoIdx].objectPosition} transition-all duration-500`}
                />
                
                {/* Image Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A382A]/90 via-transparent to-transparent pointer-events-none" />

                {/* Overlaid Caption Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#FFFFFF]/95 backdrop-blur-sm p-3.5 rounded-xl shadow-lg border border-[#D7BBA8]/50 text-[#29342D]">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#234B38] flex items-center justify-center text-[#D7BBA8] shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="text-xs font-serif font-bold text-[#234B38]">
                        {heroPhotos[activePhotoIdx].label}
                      </h2>
                      <p className="text-[11px] text-[#56645B] mt-0.5 leading-snug">
                        {heroPhotos[activePhotoIdx].caption}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Photo Selector Thumbnails */}
              <div className="mt-3 flex items-center justify-center gap-2">
                {heroPhotos.map((photo, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhotoIdx(idx)}
                    className={`h-12 w-14 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      activePhotoIdx === idx
                        ? 'border-[#D7BBA8] scale-105 shadow-md ring-2 ring-white/50'
                        : 'border-[#D7BBA8]/30 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.label}
                      className={`w-full h-full object-cover ${photo.objectPosition}`}
                    />
                  </button>
                ))}
              </div>

              {/* Verified School Seal Accent */}
              <div className="absolute -top-4 -right-4 bg-[#D7BBA8] text-[#234B38] px-3.5 py-1.5 rounded-full font-serif text-xs font-bold shadow-lg border-2 border-white flex items-center gap-1.5 transform rotate-3">
                <span>Verified Campus Photos</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
