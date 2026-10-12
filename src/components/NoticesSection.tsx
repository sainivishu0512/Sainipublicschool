import React, { useState } from 'react';
import { Bell, Calendar, Tag, ArrowRight, Search, FileText, AlertCircle } from 'lucide-react';
import { SCHOOL_NOTICES } from '../data/schoolData';
import type { Notice } from '../data/schoolData';


interface NoticesSectionProps {
  onSelectNotice: (notice: Notice) => void;
}

export const NoticesSection: React.FC<NoticesSectionProps> = ({ onSelectNotice }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Admissions', 'Academic', 'Events', 'Holidays', 'Circulars'];

  const filteredNotices = SCHOOL_NOTICES.filter((notice) => {
    const matchesCategory = selectedCategory === 'All' || notice.category === selectedCategory;
    const matchesSearch =
      notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notice.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="notices" className="py-20 bg-[#FFFFFF] relative border-b border-[#D7BBA8]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#234B38]/10 text-[#234B38] text-xs font-semibold tracking-wider uppercase">
            <Bell className="w-3.5 h-3.5 text-[#234B38]" />
            Official Bulletin & Communications
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#234B38] tracking-tight">
            School Notices & Announcements
          </h2>
          <div className="w-24 h-0.5 bg-[#D7BBA8] mx-auto my-2" />
          <p className="text-[#56645B] text-base sm:text-lg font-normal leading-relaxed">
            Stay informed with the latest administrative circulars, examination schedules, holiday notifications, and admissions updates for Foundation through Class 8.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 bg-[#F8F6F0] p-4 rounded-xl border border-[#D7BBA8]/50">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#234B38] text-[#F8F6F0] shadow-sm'
                      : 'bg-white text-[#29342D] hover:bg-[#D7BBA8]/30 border border-[#D7BBA8]/30'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#A07F69] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search circulars..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2 rounded-lg bg-white border border-[#D7BBA8] text-xs focus:outline-none focus:border-[#234B38]"
            />
          </div>
        </div>

        {/* Notices Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotices.length > 0 ? (
            filteredNotices.map((notice) => (
              <div
                key={notice.id}
                className="bg-[#FFFFFF] rounded-xl border border-[#D7BBA8]/40 hover:border-[#234B38] p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4 group relative"
              >
                {/* Important Ribbon */}
                {notice.isImportant && (
                  <div className="absolute -top-2.5 right-4 bg-[#234B38] text-[#D7BBA8] px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase border border-[#D7BBA8]/40 flex items-center gap-1 shadow-sm">
                    <AlertCircle className="w-2.5 h-2.5 text-[#D7BBA8]" />
                    Important Notice
                  </div>
                )}

                <div className="space-y-3">
                  {/* Category & Date */}
                  <div className="flex items-center justify-between text-xs pt-1">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#234B38] bg-[#F8F6F0] px-2.5 py-0.5 rounded-md border border-[#D7BBA8]/30">
                      <Tag className="w-3 h-3 text-[#A07F69]" />
                      {notice.category}
                    </span>
                    <span className="text-[#56645B] text-[11px] flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#A07F69]" />
                      {notice.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-serif font-bold text-[#234B38] group-hover:text-[#1A382A] line-clamp-2 leading-snug">
                    {notice.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs text-[#56645B] leading-relaxed line-clamp-3">
                    {notice.summary}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="pt-3 border-t border-[#D7BBA8]/30 flex items-center justify-between">
                  {notice.fileAttachment ? (
                    <span className="text-[11px] text-[#A07F69] flex items-center gap-1 font-medium">
                      <FileText className="w-3 h-3" />
                      Circular Attached
                    </span>
                  ) : (
                    <span />
                  )}

                  <button
                    onClick={() => onSelectNotice(notice)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#234B38] hover:text-[#1A382A] group-hover:underline cursor-pointer"
                  >
                    <span>Read Full Notice</span>
                    <ArrowRight className="w-3 h-3 text-[#D7BBA8] group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-[#56645B] bg-[#F8F6F0] rounded-xl border border-[#D7BBA8]/40">
              <p className="text-sm font-serif">No notices found matching your search criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-2 text-xs font-semibold text-[#234B38] underline"
              >
                Reset noticeboard filters
              </button>
            </div>
          )}
        </div>

        {/* Administration Notice Desk Note */}
        <div className="mt-10 text-center">
          <p className="text-xs text-[#56645B]">
            All official circulars are also posted on the physical noticeboards outside the school administrative office.
          </p>
        </div>

      </div>
    </section>
  );
};
