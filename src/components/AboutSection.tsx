import React, { useState } from 'react';
import {
  GraduationCap,
  ShieldCheck,
  HeartHandshake,
  Mic,
  Sparkles,
  Flower2,
  Eye,
  Target,
  Compass,
  CheckCircle,
} from 'lucide-react';
import { CORE_VALUES, OFFICIAL_TAGLINE } from '../data/schoolData';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'about' | 'vision' | 'mission' | 'approach'>('about');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-[#234B38]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#234B38]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#234B38]" />;
      case 'Mic':
        return <Mic className="w-5 h-5 text-[#234B38]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#234B38]" />;
      case 'Flower2':
        return <Flower2 className="w-5 h-5 text-[#234B38]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#234B38]" />;
    }
  };

  return (
    <section id="about" className="py-20 bg-[#FFFFFF] relative border-y border-[#D7BBA8]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#234B38]/10 text-[#234B38] text-xs font-semibold tracking-wider uppercase">
            <Flower2 className="w-3.5 h-3.5 text-[#234B38]" />
            Heritage & Ethos
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#234B38] tracking-tight">
            About Saini Public School
          </h2>
          <div className="w-24 h-0.5 bg-[#D7BBA8] mx-auto my-2" />
          <p className="text-lg font-serif italic text-[#A07F69]">
            {OFFICIAL_TAGLINE}
          </p>
        </div>

        {/* Tab Navigation for Vision, Mission, Approach */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3 border-b border-[#D7BBA8]/40 pb-4">
          {[
            { id: 'about', label: 'About Our School', icon: Compass },
            { id: 'vision', label: 'Our Vision', icon: Eye },
            { id: 'mission', label: 'Our Mission', icon: Target },
            { id: 'approach', label: 'Our Approach to Learning', icon: GraduationCap },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#234B38] text-[#F8F6F0] shadow-sm'
                    : 'bg-[#F8F6F0] text-[#29342D] hover:bg-[#D7BBA8]/30 hover:text-[#234B38]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#D7BBA8]' : 'text-[#234B38]'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Tab Content with Editorial Presentation */}
        <div className="mt-8 bg-[#F8F6F0] rounded-2xl p-6 sm:p-10 border border-[#D7BBA8]/50">
          {activeTab === 'about' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#234B38]">
                  Nurturing Potential with Care and Dignity
                </h3>
                <p className="text-sm sm:text-base text-[#29342D]/90 leading-relaxed">
                  Saini Public School was established to offer children an inspiring educational sanctuary where traditional values and modern pedagogy converge. Catering purposefully to students from the <strong>Foundation Stage through Class 8</strong>, our institution prioritizes early formative grounding, individual attention, and holistic character formation over unyielding commercial competition.
                </p>
                <p className="text-sm sm:text-base text-[#29342D]/90 leading-relaxed">
                  Every child who walks through our gates is viewed as an individual endowed with unique curiosities, intellectual tendencies, and creative sparks. Just as a garden flourishes when each blossom receives the sunlight and care suited to its nature, our educators guide each pupil with patience, respect, and academic dedication.
                </p>
                <div className="pt-2 grid grid-cols-2 gap-4">
                  <div className="bg-white p-3.5 rounded-lg border border-[#D7BBA8]/40">
                    <span className="text-xs font-semibold text-[#234B38] block uppercase tracking-wide">
                      Class Range
                    </span>
                    <span className="text-sm font-serif font-bold text-[#29342D]">
                      Foundation to Class 8
                    </span>
                  </div>
                  <div className="bg-white p-3.5 rounded-lg border border-[#D7BBA8]/40">
                    <span className="text-xs font-semibold text-[#234B38] block uppercase tracking-wide">
                      Philosophy
                    </span>
                    <span className="text-sm font-serif font-bold text-[#29342D]">
                      Individual Attention
                    </span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-xl overflow-hidden border-2 border-[#D7BBA8] shadow-md">
                  <img
                    src="/images/school/about-students-teej-kites-uniform.jpeg"
                    alt="Saini Public School students in uniform with handcrafted kites"
                    className="w-full h-72 sm:h-80 object-cover object-[center_25%]"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'vision' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#234B38]">
                  Our Vision for Every Learner
                </h3>
                <p className="text-sm sm:text-base text-[#29342D]/90 leading-relaxed">
                  To be an exemplary elementary and middle school celebrated for instilling enduring academic confidence, grounded moral integrity, and deep self-respect in every student.
                </p>
                <p className="text-sm sm:text-base text-[#29342D]/90 leading-relaxed">
                  We envision our graduates stepping forward into higher education as empathetic, articulate, and self-reliant young citizens who recognize their distinct strengths, value truth, and actively contribute to the welfare of their families and community.
                </p>
                <ul className="space-y-2 pt-2">
                  <li className="flex items-center gap-2 text-sm text-[#29342D]">
                    <CheckCircle className="w-4 h-4 text-[#234B38]" />
                    <span>A loving environment where curiosity is celebrated and questions welcomed.</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[#29342D]">
                    <CheckCircle className="w-4 h-4 text-[#234B38]" />
                    <span>Unshakable foundations in reading comprehension, analytical numeracy, and ethics.</span>
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-xl overflow-hidden border-2 border-[#D7BBA8] shadow-md">
                  <img
                    src="/images/school/about-saraswati-diya-ceremony.jpeg"
                    alt="Faculty and leadership lighting lamp before Goddess Saraswati"
                    className="w-full h-72 sm:h-80 object-cover object-[center_20%]"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'mission' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#234B38]">
                  Our Mission
                </h3>
                <p className="text-sm sm:text-base text-[#29342D]/90 leading-relaxed">
                  Our daily mission is anchored in purposeful commitments to students and parents alike:
                </p>
                <div className="space-y-3 pt-1">
                  <div className="bg-white p-3.5 rounded-lg border-l-4 border-[#234B38]">
                    <h4 className="text-sm font-serif font-bold text-[#234B38]">Meaningful Academic Rigor</h4>
                    <p className="text-xs text-[#56645B] mt-0.5">Delivering clear, experiential classroom teaching that builds conceptual clarity without rote memorization.</p>
                  </div>
                  <div className="bg-white p-3.5 rounded-lg border-l-4 border-[#D7BBA8]">
                    <h4 className="text-sm font-serif font-bold text-[#234B38]">Personalized Mentorship</h4>
                    <p className="text-xs text-[#56645B] mt-0.5">Maintaining controlled class sizes to monitor each learner's progress, strengths, and areas requiring patience.</p>
                  </div>
                  <div className="bg-white p-3.5 rounded-lg border-l-4 border-[#234B38]">
                    <h4 className="text-sm font-serif font-bold text-[#234B38]">Character & Cultural Grounding</h4>
                    <p className="text-xs text-[#56645B] mt-0.5">Fostering courteous manners, respect for diversity, environmental consciousness, and selfless community service.</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-xl overflow-hidden border-2 border-[#D7BBA8] shadow-md">
                  <img
                    src="/images/school/foundation-creative-hands.jpeg"
                    alt="Active students in tracksuits under Saini Education Society banner"
                    className="w-full h-72 sm:h-80 object-cover object-[center_35%]"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'approach' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#234B38]">
                  Our Approach to Learning
                </h3>
                <p className="text-sm sm:text-base text-[#29342D]/90 leading-relaxed">
                  We blend structured syllabus delivery with interactive inquiry. Instead of passive listening, students at Saini Public School participate in dialogue, practical demonstrations, blackboard exercises, and peer collaboration.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="bg-white p-3 rounded-lg border border-[#D7BBA8]/40">
                    <span className="text-xs font-bold text-[#234B38] block">No Student Left Behind</span>
                    <p className="text-xs text-[#56645B] mt-1">Remedial support and patient repetition for concepts needing reinforcement.</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-[#D7BBA8]/40">
                    <span className="text-xs font-bold text-[#234B38] block">Joyful Discovery</span>
                    <p className="text-xs text-[#56645B] mt-1">Connecting textbook concepts to everyday nature, science, and life examples.</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-[#D7BBA8]/40">
                    <span className="text-xs font-bold text-[#234B38] block">Continuous Evaluation</span>
                    <p className="text-xs text-[#56645B] mt-1">Formative assessments that reward consistent effort and genuine comprehension.</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-[#D7BBA8]/40">
                    <span className="text-xs font-bold text-[#234B38] block">Parent Partnership</span>
                    <p className="text-xs text-[#56645B] mt-1">Frequent, transparent communication between teachers and parents.</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-xl overflow-hidden border-2 border-[#D7BBA8] shadow-md">
                  <img
                    src="/images/school/students-chalkboard-activity.jpeg"
                    alt="Primary students presenting poster on green chalkboard"
                    className="w-full h-72 sm:h-80 object-cover object-[center_35%]"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Section: Our Core Values (The Floral Pillars) */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#234B38]">
              Our Core Values
            </h3>
            <p className="text-xs sm:text-sm text-[#56645B]">
              The timeless principles that shape daily conduct, classroom culture, and student character.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map((val) => (
              <div
                key={val.title}
                className="bg-[#FFFFFF] p-6 rounded-xl border border-[#D7BBA8]/40 shadow-sm hover:border-[#234B38]/50 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#234B38]/10 group-hover:bg-[#234B38] flex items-center justify-center transition-colors duration-300 mb-4">
                  <div className="group-hover:text-[#D7BBA8] transition-colors">
                    {getIcon(val.icon)}
                  </div>
                </div>
                <h4 className="text-lg font-serif font-bold text-[#234B38] mb-2 group-hover:text-[#1A382A]">
                  {val.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#56645B] leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Desk Note / Welcome Address */}
        <div className="mt-20 bg-gradient-to-r from-[#234B38] to-[#1A382A] text-[#F8F6F0] rounded-2xl p-8 sm:p-12 relative overflow-hidden shadow-xl border border-[#D7BBA8]/30">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#D7BBA8] font-semibold">
                Message from the Leadership Desk
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#F8F6F0]">
                “A garden is not formed of a single flower, but of countless diverse blossoms.”
              </h3>
              <p className="text-sm sm:text-base text-[#F8F6F0]/90 leading-relaxed font-light">
                At Saini Public School, we consider it a profound privilege to nurture children through the foundational and middle school years. We believe education is not a race to make all minds identical, but a sacred responsibility to unlock each child's intrinsic curiosity and self-belief. With solid academic habits, gentle discipline, and patient encouragement, we prepare every child to blossom with confidence.
              </p>
              <div className="pt-2 flex items-center gap-4">
                <div>
                  <div className="text-sm font-serif font-bold text-[#D7BBA8]">
                    The Principal & Academic Council
                  </div>
                  <div className="text-xs text-[#F8F6F0]/70">
                    Saini Public School
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 flex justify-center">
              <div className="p-3 bg-[#FFFFFF]/10 backdrop-blur-sm rounded-xl border border-[#D7BBA8]/40 text-center space-y-2.5 max-w-xs overflow-hidden shadow-md">
                <div className="rounded-lg overflow-hidden border border-[#D7BBA8]/50 h-44">
                  <img
                    src="/images/school/leadership-principal-redcarpet.jpeg"
                    alt="School Leadership on Red Carpet at Annual Day"
                    className="w-full h-full object-cover object-[center_20%] hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-xs font-serif italic text-[#D7BBA8] leading-tight">
                  {OFFICIAL_TAGLINE}
                </div>
                <div className="text-[10px] text-[#F8F6F0]/80">
                  Annual Day & Academic Milestone Celebration
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
