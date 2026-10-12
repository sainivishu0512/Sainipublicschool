import React, { useState } from 'react';
import { Building2, Check, Shield, Sparkles, BookOpen, Monitor, Award } from 'lucide-react';
import { SCHOOL_FACILITIES } from '../data/schoolData';
import type { Facility } from '../data/schoolData';


export const FacilitiesSection: React.FC = () => {
  const [activeFacility, setActiveFacility] = useState<Facility>(SCHOOL_FACILITIES[0]);

  return (
    <section id="facilities" className="py-20 bg-[#FFFFFF] relative border-b border-[#D7BBA8]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#234B38]/10 text-[#234B38] text-xs font-semibold tracking-wider uppercase">
            <Building2 className="w-3.5 h-3.5 text-[#234B38]" />
            Campus Environment
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#234B38] tracking-tight">
            Campus & Learning Facilities
          </h2>
          <div className="w-24 h-0.5 bg-[#D7BBA8] mx-auto my-2" />
          <p className="text-[#56645B] text-base sm:text-lg font-normal leading-relaxed">
            Designed to foster intellectual focus, safety, creative curiosity, and physical health in every pupil from Foundation through Class 8.
          </p>
        </div>

        {/* Featured Facility Interactive Spotlight */}
        <div className="mt-12 bg-[#F8F6F0] rounded-2xl border border-[#D7BBA8]/50 p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Facility Image */}
            <div className="lg:col-span-7">
              <div className="relative rounded-xl overflow-hidden border-2 border-[#D7BBA8]/60 shadow-md h-[320px] sm:h-[400px]">
                <img
                  src={activeFacility.image}
                  alt={activeFacility.name}
                  className={`w-full h-full object-cover ${activeFacility.objectPosition || 'object-[center_20%]'} transition-all duration-700 hover:scale-105`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#234B38]/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs uppercase tracking-wider text-[#D7BBA8] font-bold">
                    Campus Spotlight
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#F8F6F0]">
                    {activeFacility.name}
                  </h3>
                </div>
              </div>
            </div>

            {/* Facility Information */}
            <div className="lg:col-span-5 space-y-5">
              <div className="space-y-1.5">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#A07F69] block">
                  {activeFacility.tagline}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#234B38]">
                  {activeFacility.name}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#29342D]/90 leading-relaxed">
                {activeFacility.description}
              </p>

              {/* Highlights List */}
              <div className="space-y-2 pt-1">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#234B38]">
                  Key Infrastructure Highlights
                </div>
                <div className="space-y-2">
                  {activeFacility.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#29342D]">
                      <div className="w-5 h-5 rounded-full bg-[#234B38] text-[#D7BBA8] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#234B38] bg-[#FFFFFF] px-3 py-1.5 rounded-md border border-[#D7BBA8]/40">
                  <Shield className="w-3.5 h-3.5 text-[#234B38]" />
                  Maintained to verified safety and hygiene protocols
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Facilities Selector Navigation Tabs / Grid */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {SCHOOL_FACILITIES.map((facility) => {
            const isSelected = activeFacility.id === facility.id;
            return (
              <button
                key={facility.id}
                onClick={() => setActiveFacility(facility)}
                className={`p-3.5 rounded-xl border text-center transition-all duration-200 cursor-pointer flex flex-col items-center justify-center gap-2 ${
                  isSelected
                    ? 'bg-[#234B38] text-[#F8F6F0] border-[#234B38] shadow-md scale-102'
                    : 'bg-[#F8F6F0] text-[#29342D] border-[#D7BBA8]/40 hover:bg-[#D7BBA8]/20 hover:border-[#234B38]/30'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isSelected ? 'bg-[#D7BBA8] text-[#234B38]' : 'bg-[#FFFFFF] text-[#234B38] border border-[#D7BBA8]/40'}`}>
                  {facility.id === 'classrooms' && <Building2 className="w-4 h-4" />}
                  {facility.id === 'library' && <BookOpen className="w-4 h-4" />}
                  {facility.id === 'computer-lab' && <Monitor className="w-4 h-4" />}
                  {facility.id === 'science-lab' && <Sparkles className="w-4 h-4" />}
                  {facility.id === 'playground' && <Award className="w-4 h-4" />}
                  {facility.id === 'safety-transport' && <Shield className="w-4 h-4" />}
                </div>
                <span className="text-xs font-semibold leading-tight line-clamp-2">
                  {facility.name.split(' ')[0]} {facility.name.split(' ')[1] || ''}
                </span>
              </button>
            );
          })}
        </div>

        {/* Facilities Standards Note */}
        <div className="mt-12 p-4 bg-[#FFFFFF] border border-[#D7BBA8]/50 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#234B38]/10 flex items-center justify-center text-[#234B38] shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-serif font-bold text-[#234B38]">Verified Campus Standards</h4>
              <p className="text-xs text-[#56645B]">Only verified facilities and functional resources available at Saini Public School are featured.</p>
            </div>
          </div>
          <span className="text-xs font-semibold text-[#A07F69] bg-[#F8F6F0] px-3.5 py-1.5 rounded-lg border border-[#D7BBA8]/40 shrink-0">
            Open for Scheduled Parent Visits
          </span>
        </div>

      </div>
    </section>
  );
};
