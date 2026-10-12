import React, { useState } from 'react';
import { CheckCircle2, ChevronRight, Compass, Target } from 'lucide-react';
import { EDUCATIONAL_STAGES } from '../data/schoolData';


interface EducationalJourneyProps {
  onSelectClass?: (gradeName: string) => void;
  onEnquireNow: () => void;
}

export const EducationalJourney: React.FC<EducationalJourneyProps> = ({ onEnquireNow }) => {
  const [activeStageId, setActiveStageId] = useState<string>('foundation');

  return (
    <section id="journey" className="py-20 bg-[#F8F6F0] relative">
      {/* Decorative subtle botanical divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#234B38]/10 text-[#234B38] text-xs font-semibold tracking-wider uppercase">
            <Compass className="w-3.5 h-3.5 text-[#234B38]" />
            A Cohesive Continuum
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#234B38] tracking-tight">
            Our Educational Journey
          </h2>
          <div className="w-24 h-0.5 bg-[#D7BBA8] mx-auto my-2" />
          <p className="text-[#56645B] text-base sm:text-lg font-normal leading-relaxed">
            From playful early curiosity to structured academic mastery, our seamless pathway from Foundation through Class 8 respects each child's natural stages of intellectual and moral growth.
          </p>
        </div>

        {/* Visual Progress Line / Stepper */}
        <div className="mt-12 mb-16 hidden md:block">
          <div className="relative flex items-center justify-between max-w-4xl mx-auto">
            {/* Connecting Track */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#D7BBA8]/40 -translate-y-1/2 z-0" />
            
            {EDUCATIONAL_STAGES.map((stage, idx) => {
              const isSelected = activeStageId === stage.id;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  className={`relative z-10 flex flex-col items-center group cursor-pointer transition-all duration-300 focus:outline-none`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-serif font-bold text-sm transition-all duration-300 ${
                      isSelected
                        ? 'bg-[#234B38] text-[#F8F6F0] ring-4 ring-[#D7BBA8] scale-110 shadow-lg'
                        : 'bg-[#FFFFFF] text-[#234B38] border-2 border-[#D7BBA8] group-hover:border-[#234B38]'
                    }`}
                  >
                    0{idx + 1}
                  </div>
                  <span
                    className={`mt-2 text-xs uppercase tracking-wider font-semibold ${
                      isSelected ? 'text-[#234B38]' : 'text-[#56645B]'
                    }`}
                  >
                    {stage.title}
                  </span>
                  <span className="text-[11px] text-[#A07F69] font-medium">
                    {stage.subtitle}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* The Three Visually Connected Sections — Editorial Layout */}
        <div className="space-y-16 lg:space-y-20">
          {EDUCATIONAL_STAGES.map((stage, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={stage.id}
                id={`stage-${stage.id}`}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#FFFFFF] rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#D7BBA8]/40 shadow-sm transition-all duration-300 hover:shadow-md ${
                  activeStageId === stage.id ? 'ring-2 ring-[#234B38]/30' : ''
                }`}
              >
                {/* Image Container with Editorial Frame */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative rounded-xl overflow-hidden border-2 border-[#D7BBA8]/50 shadow-inner group">
                    <img
                      src={stage.image}
                      alt={`${stage.title} at Saini Public School`}
                      className={`w-full h-[320px] sm:h-[380px] object-cover ${stage.objectPosition || 'object-[center_20%]'} group-hover:scale-102 transition-transform duration-500`}
                    />
                    
                    {/* Badge Overlay */}
                    <div className="absolute top-4 left-4 bg-[#234B38]/90 backdrop-blur-sm text-[#F8F6F0] px-3.5 py-1.5 rounded-md text-xs font-semibold tracking-wide border border-[#D7BBA8]/40">
                      {stage.ageGroup}
                    </div>

                    <div className="absolute bottom-4 right-4 bg-[#FFFFFF]/90 backdrop-blur-sm text-[#234B38] px-3 py-1 rounded-md text-xs font-serif font-bold border border-[#D7BBA8]/40">
                      {stage.subtitle}
                    </div>
                  </div>
                </div>

                {/* Content Container */}
                <div
                  className={`lg:col-span-6 space-y-5 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#234B38] text-[#D7BBA8] text-xs flex items-center justify-center font-bold">
                        {index + 1}
                      </span>
                      <span className="text-xs font-semibold text-[#A07F69] uppercase tracking-wider">
                        Educational Level
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#234B38]">
                      {stage.title}
                    </h3>
                    <p className="text-sm sm:text-base font-serif italic text-[#A07F69]">
                      {stage.focus}
                    </p>
                  </div>

                  <p className="text-[#29342D]/85 text-sm sm:text-base leading-relaxed">
                    {stage.description}
                  </p>

                  {/* Key Learning Milestones Checklist */}
                  <div className="space-y-2.5 pt-2">
                    <div className="text-xs uppercase tracking-wider font-semibold text-[#234B38] flex items-center gap-1.5">
                      <Target className="w-3.5 h-3.5 text-[#234B38]" />
                      Core Learning Focus & Developmental Outcomes
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {stage.keyAreas.map((area, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#29342D]/90">
                          <CheckCircle2 className="w-4 h-4 text-[#234B38] shrink-0 mt-0.5" />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stage Action */}
                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    <button
                      onClick={onEnquireNow}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#234B38] hover:bg-[#1A382A] text-[#F8F6F0] text-xs font-semibold tracking-wide transition-colors cursor-pointer"
                    >
                      <span>Enquire for {stage.title}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#D7BBA8]" />
                    </button>
                    <span className="text-xs text-[#56645B] italic">
                      Strict 1:20 teacher-student attention
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Curricular Authenticity Note */}
        <div className="mt-12 bg-[#EFECE3] border border-[#D7BBA8]/60 rounded-xl p-5 text-center max-w-3xl mx-auto">
          <p className="text-xs text-[#56645B] leading-relaxed">
            <span className="font-semibold text-[#234B38]">Official Class Structure Notice:</span> Saini Public School provides education exclusively from Foundation (Nursery, LKG, UKG) through Class 8. Detailed syllabus outlines and textbook lists are provided directly to enrolled families prior to the academic session.
          </p>
        </div>

      </div>
    </section>
  );
};
