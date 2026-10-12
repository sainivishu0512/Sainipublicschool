import React, { useState } from 'react';
import {
  GraduationCap,
  Send,
  CheckCircle2,
  FileText,
  Clock,
  Check,
  Download,
  AlertCircle,
} from 'lucide-react';

import {
  CLASS_OPTIONS,
  ADMISSION_STEPS,
  ELIGIBILITY_GUIDE,
  OFFICIAL_TAGLINE,
} from '../data/schoolData';

interface AdmissionsSectionProps {
  onOpenProspectus: () => void;
}

export const AdmissionsSection: React.FC<AdmissionsSectionProps> = ({ onOpenProspectus }) => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    classApplyingFor: '',
    contactNumber: '',
    emailAddress: '',
    visitDate: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.studentName.trim()) {
      errs.studentName = "Please enter the student's full name.";
    }
    if (!formData.parentName.trim()) {
      errs.parentName = "Please enter parent or guardian name.";
    }
    if (!formData.classApplyingFor) {
      errs.classApplyingFor = 'Please select the class applying for.';
    }
    if (!formData.contactNumber.trim()) {
      errs.contactNumber = 'Please enter a valid contact phone number.';
    } else if (!/^[0-9+\s-]{10,15}$/.test(formData.contactNumber.trim())) {
      errs.contactNumber = 'Please enter a valid 10-digit mobile number.';
    }
    if (!formData.emailAddress.trim()) {
      errs.emailAddress = 'Please enter your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.emailAddress.trim())) {
      errs.emailAddress = 'Please enter a valid email address.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate submission to school registry
    setTimeout(() => {
      const generatedRef = `SPS-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setIsSubmitting(false);
      setSubmittedRef(generatedRef);
    }, 700);
  };

  const resetForm = () => {
    setFormData({
      studentName: '',
      parentName: '',
      classApplyingFor: '',
      contactNumber: '',
      emailAddress: '',
      visitDate: '',
      message: '',
    });
    setSubmittedRef(null);
  };

  return (
    <section id="admissions" className="py-20 bg-[#F8F6F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#234B38]/10 text-[#234B38] text-xs font-semibold tracking-wider uppercase">
            <GraduationCap className="w-3.5 h-3.5 text-[#234B38]" />
            Session 2025–26 Admissions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#234B38] tracking-tight">
            Admissions: Foundation to Class 8
          </h2>
          <div className="w-24 h-0.5 bg-[#D7BBA8] mx-auto my-2" />
          <p className="text-[#56645B] text-base sm:text-lg font-normal leading-relaxed">
            We welcome families who seek a thoughtful, principled, and nurturing education. Guided by our motto that {OFFICIAL_TAGLINE}, every child is received with warm attention.
          </p>
        </div>

        {/* 4-Step Admission Procedure */}
        <div className="mt-14 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#234B38]">
              The Admission Procedure
            </h3>
            <p className="text-xs sm:text-sm text-[#56645B] mt-1">
              A transparent, supportive, and parent-friendly four-stage process.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADMISSION_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-[#FFFFFF] p-6 rounded-xl border border-[#D7BBA8]/40 shadow-sm relative overflow-hidden group hover:border-[#234B38] transition-all"
              >
                <div className="text-3xl font-serif font-bold text-[#D7BBA8] group-hover:text-[#234B38] transition-colors mb-2">
                  {step.step}
                </div>
                <h4 className="text-base font-serif font-bold text-[#234B38] mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-[#56645B] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Two-Column Grid: Left Column = Form, Right Column = Eligibility & Documents */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Official Admissions Enquiry Form */}
          <div className="lg:col-span-7 bg-[#FFFFFF] rounded-2xl p-6 sm:p-8 border-2 border-[#D7BBA8]/60 shadow-lg">
            <div className="border-b border-[#D7BBA8]/40 pb-4 mb-6">
              <span className="text-xs uppercase tracking-widest text-[#A07F69] font-semibold">
                Direct School Admissions Desk
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#234B38] mt-1">
                Admissions Enquiry Form
              </h3>
              <p className="text-xs text-[#56645B] mt-1">
                Fill in the details below. Our admissions coordinator will get in touch within 24 business hours to arrange your campus interaction.
              </p>
            </div>

            {submittedRef ? (
              <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#234B38] text-[#D7BBA8] mx-auto flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h4 className="text-2xl font-serif font-bold text-[#234B38]">
                  Enquiry Received Successfully!
                </h4>
                <div className="bg-[#F8F6F0] p-4 rounded-xl border border-[#D7BBA8]/50 max-w-md mx-auto text-left space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#56645B]">Reference Number:</span>
                    <span className="font-mono font-bold text-[#234B38] bg-white px-2 py-0.5 rounded border border-[#D7BBA8]/50">
                      {submittedRef}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#56645B]">Student Name:</span>
                    <span className="font-semibold text-[#29342D]">{formData.studentName}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#56645B]">Class Requested:</span>
                    <span className="font-semibold text-[#29342D]">{formData.classApplyingFor}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#56645B]">Parent Contact:</span>
                    <span className="font-semibold text-[#29342D]">{formData.contactNumber}</span>
                  </div>
                </div>
                <p className="text-xs text-[#56645B] max-w-sm mx-auto">
                  A confirmation SMS / Email has been queued. Our front office will contact you to schedule an unhurried school visit.
                </p>
                <div className="pt-3">
                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 bg-[#234B38] text-white rounded-lg text-xs font-semibold tracking-wide hover:bg-[#1A382A] transition-colors"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Student Name */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-[#234B38] uppercase tracking-wide">
                      Student Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Aarav Sharma"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors ${
                        errors.studentName
                          ? 'border-red-500 bg-red-50/50'
                          : 'border-[#D7BBA8] focus:border-[#234B38] bg-white'
                      }`}
                    />
                    {errors.studentName && (
                      <p className="text-[11px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.studentName}
                      </p>
                    )}
                  </div>

                  {/* Parent / Guardian Name */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-[#234B38] uppercase tracking-wide">
                      Parent / Guardian Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors ${
                        errors.parentName
                          ? 'border-red-500 bg-red-50/50'
                          : 'border-[#D7BBA8] focus:border-[#234B38] bg-white'
                      }`}
                    />
                    {errors.parentName && (
                      <p className="text-[11px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.parentName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Class Applying For Dropdown */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-[#234B38] uppercase tracking-wide">
                      Class Applying For <span className="text-red-600">*</span>
                    </label>
                    <select
                      value={formData.classApplyingFor}
                      onChange={(e) => setFormData({ ...formData, classApplyingFor: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors bg-white ${
                        errors.classApplyingFor
                          ? 'border-red-500 bg-red-50/50'
                          : 'border-[#D7BBA8] focus:border-[#234B38]'
                      }`}
                    >
                      <option value="">-- Select Class --</option>
                      {CLASS_OPTIONS.map((grade) => (
                        <option key={grade} value={grade}>
                          {grade}
                        </option>
                      ))}
                    </select>
                    {errors.classApplyingFor && (
                      <p className="text-[11px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.classApplyingFor}
                      </p>
                    )}
                  </div>

                  {/* Contact Number */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-[#234B38] uppercase tracking-wide">
                      Contact Number <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 9876543210"
                      value={formData.contactNumber}
                      onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors ${
                        errors.contactNumber
                          ? 'border-red-500 bg-red-50/50'
                          : 'border-[#D7BBA8] focus:border-[#234B38] bg-white'
                      }`}
                    />
                    {errors.contactNumber && (
                      <p className="text-[11px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.contactNumber}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email Address */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-[#234B38] uppercase tracking-wide">
                      Email Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. parent@example.com"
                      value={formData.emailAddress}
                      onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors ${
                        errors.emailAddress
                          ? 'border-red-500 bg-red-50/50'
                          : 'border-[#D7BBA8] focus:border-[#234B38] bg-white'
                      }`}
                    />
                    {errors.emailAddress && (
                      <p className="text-[11px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.emailAddress}
                      </p>
                    )}
                  </div>

                  {/* Preferred Campus Visit Date */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-[#234B38] uppercase tracking-wide">
                      Preferred Visit Date <span className="text-gray-400 text-[10px]">(Optional)</span>
                    </label>
                    <input
                      type="date"
                      value={formData.visitDate}
                      onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#D7BBA8] focus:border-[#234B38] text-sm focus:outline-none bg-white"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-[#234B38] uppercase tracking-wide">
                    Message / Specific Enquiries
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your child's interests, previous schooling, or any specific questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#D7BBA8] focus:border-[#234B38] text-sm focus:outline-none bg-white"
                  />
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-lg bg-[#234B38] hover:bg-[#1A382A] text-[#F8F6F0] font-semibold text-sm tracking-wide uppercase shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Submitting Enquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#D7BBA8]" />
                        <span>Submit Admissions Enquiry</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-[#56645B] text-center pt-1">
                  Your contact information is strictly confidential and used solely for admissions communication.
                </p>
              </form>
            )}
          </div>

          {/* Right Column: Age Criteria & Verified Document Requirements */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Age Guidelines Chart */}
            <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#D7BBA8]/50 shadow-sm space-y-4">
              <div className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-[#234B38]" />
                <h4 className="text-lg font-serif font-bold text-[#234B38]">
                  Age Eligibility Guidelines
                </h4>
              </div>
              <p className="text-xs text-[#56645B]">
                As per standard foundational norms (calculated as of 31st March of the admission year):
              </p>
              
              <div className="divide-y divide-[#D7BBA8]/30 text-xs">
                {ELIGIBILITY_GUIDE.map((item, idx) => (
                  <div key={idx} className="py-2 flex justify-between items-center">
                    <span className="font-semibold text-[#29342D]">{item.grade}</span>
                    <span className="text-[#A07F69] bg-[#F8F6F0] px-2 py-0.5 rounded border border-[#D7BBA8]/30">
                      {item.minAge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Required Documents Checklist */}
            <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#D7BBA8]/50 shadow-sm space-y-4">
              <div className="flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-[#234B38]" />
                <h4 className="text-lg font-serif font-bold text-[#234B38]">
                  Documents Required at Registration
                </h4>
              </div>
              <ul className="space-y-2 text-xs text-[#29342D]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#234B38] shrink-0 mt-0.5" />
                  <span>Attested copy of Child's Official Birth Certificate</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#234B38] shrink-0 mt-0.5" />
                  <span>Recent passport-size photographs of Student and Parents (4 each)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#234B38] shrink-0 mt-0.5" />
                  <span>Original Transfer Certificate (TC) & Previous Report Card (for Classes 1 to 8)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#234B38] shrink-0 mt-0.5" />
                  <span>Address & Identity Proof of Parent/Guardian (Aadhaar / Voter ID / Passport)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#234B38] shrink-0 mt-0.5" />
                  <span>Basic Medical Fitness & Blood Group Record</span>
                </li>
              </ul>

              <div className="pt-2">
                <button
                  onClick={onOpenProspectus}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#F8F6F0] hover:bg-[#D7BBA8]/20 text-[#234B38] border border-[#234B38]/30 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4 text-[#234B38]" />
                  <span>Download School Prospectus & Admission Guide</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
