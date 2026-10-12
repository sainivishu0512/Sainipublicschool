import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { CLASS_OPTIONS, OFFICIAL_TAGLINE } from '../data/schoolData';


interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    classApplyingFor: '',
    contactNumber: '',
    emailAddress: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.studentName.trim()) errs.studentName = "Please enter student's name.";
    if (!formData.parentName.trim()) errs.parentName = "Please enter parent or guardian name.";
    if (!formData.classApplyingFor) errs.classApplyingFor = 'Please select a class.';
    if (!formData.contactNumber.trim()) {
      errs.contactNumber = 'Please enter a contact phone number.';
    } else if (!/^[0-9+\s-]{10,15}$/.test(formData.contactNumber.trim())) {
      errs.contactNumber = 'Please enter a valid 10-digit number.';
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

    setTimeout(() => {
      const generatedRef = `SPS-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setIsSubmitting(false);
      setSubmittedRef(generatedRef);
    }, 600);
  };

  const handleClose = () => {
    setSubmittedRef(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FFFFFF] w-full max-w-lg rounded-2xl shadow-2xl border-2 border-[#D7BBA8] overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="bg-[#234B38] text-[#F8F6F0] p-5 flex items-center justify-between border-b border-[#D7BBA8]/40">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#D7BBA8] font-semibold block">
              Saini Public School Admissions
            </span>
            <h3 className="text-xl font-serif font-bold text-[#F8F6F0]">
              Admissions Enquiry
            </h3>
            <p className="text-xs text-[#D7BBA8] font-serif italic mt-0.5">
              {OFFICIAL_TAGLINE}
            </p>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg text-[#F8F6F0]/80 hover:text-white hover:bg-[#1A382A] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto">
          {submittedRef ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#234B38] text-[#D7BBA8] mx-auto flex items-center justify-center shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-serif font-bold text-[#234B38]">
                Enquiry Successfully Registered
              </h4>
              <p className="text-xs text-[#56645B]">
                Your application reference code is:
              </p>
              <div className="inline-block bg-[#F8F6F0] border border-[#D7BBA8] px-4 py-2 rounded-lg font-mono font-bold text-[#234B38] text-sm">
                {submittedRef}
              </div>
              <p className="text-xs text-[#56645B] max-w-sm mx-auto">
                Thank you for your interest in Saini Public School. Our admissions coordinator will reach out to <strong>{formData.contactNumber}</strong> shortly.
              </p>
              <button
                onClick={handleClose}
                className="mt-4 px-6 py-2.5 bg-[#234B38] text-white rounded-lg text-xs font-semibold uppercase tracking-wider hover:bg-[#1A382A]"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5" noValidate>
              <div>
                <label className="block text-xs font-semibold text-[#234B38] uppercase tracking-wide mb-1">
                  Student Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter full name of the student"
                  value={formData.studentName}
                  onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-[#D7BBA8] text-xs focus:outline-none focus:border-[#234B38]"
                />
                {errors.studentName && (
                  <p className="text-[11px] text-red-600 mt-0.5">{errors.studentName}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#234B38] uppercase tracking-wide mb-1">
                  Parent / Guardian Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter parent or guardian name"
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-[#D7BBA8] text-xs focus:outline-none focus:border-[#234B38]"
                />
                {errors.parentName && (
                  <p className="text-[11px] text-red-600 mt-0.5">{errors.parentName}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#234B38] uppercase tracking-wide mb-1">
                    Class Applying For <span className="text-red-600">*</span>
                  </label>
                  <select
                    value={formData.classApplyingFor}
                    onChange={(e) => setFormData({ ...formData, classApplyingFor: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-[#D7BBA8] text-xs focus:outline-none focus:border-[#234B38] bg-white"
                  >
                    <option value="">Select Grade</option>
                    {CLASS_OPTIONS.map((grade) => (
                      <option key={grade} value={grade}>
                        {grade}
                      </option>
                    ))}
                  </select>
                  {errors.classApplyingFor && (
                    <p className="text-[11px] text-red-600 mt-0.5">{errors.classApplyingFor}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#234B38] uppercase tracking-wide mb-1">
                    Contact Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={formData.contactNumber}
                    onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg border border-[#D7BBA8] text-xs focus:outline-none focus:border-[#234B38]"
                  />
                  {errors.contactNumber && (
                    <p className="text-[11px] text-red-600 mt-0.5">{errors.contactNumber}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#234B38] uppercase tracking-wide mb-1">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={formData.emailAddress}
                  onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-[#D7BBA8] text-xs focus:outline-none focus:border-[#234B38]"
                />
                {errors.emailAddress && (
                  <p className="text-[11px] text-red-600 mt-0.5">{errors.emailAddress}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#234B38] uppercase tracking-wide mb-1">
                  Message / Queries
                </label>
                <textarea
                  rows={2}
                  placeholder="Any specific questions regarding admissions, transport or curriculum..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-[#D7BBA8] text-xs focus:outline-none focus:border-[#234B38]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[#234B38] hover:bg-[#1A382A] text-white text-xs font-semibold uppercase tracking-wider rounded-lg shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5 text-[#D7BBA8]" />
                      <span>Submit Enquiry</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
