import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { EducationalJourney } from './components/EducationalJourney';
import { LearningDevelopment } from './components/LearningDevelopment';
import { FacilitiesSection } from './components/FacilitiesSection';
import { AdmissionsSection } from './components/AdmissionsSection';
import { NoticesSection } from './components/NoticesSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

import { EnquiryModal } from './components/EnquiryModal';
import { ProspectusModal } from './components/ProspectusModal';
import { NoticeModal } from './components/NoticeModal';
import { LightboxModal } from './components/LightboxModal';

import type { Notice, GalleryItem } from './data/schoolData';


export function App() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [prospectusModalOpen, setProspectusModalOpen] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<GalleryItem | null>(null);
  const [activeSection, setActiveSection] = useState('home');

  // Track active section on scroll for navbar highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'journey', 'learning', 'facilities', 'admissions', 'notices', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExploreClick = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F6F0] text-[#29342D] flex flex-col font-sans selection:bg-[#D7BBA8] selection:text-[#234B38]">
      {/* Navigation Header */}
      <Navbar
        onOpenEnquiry={() => setEnquiryModalOpen(true)}
        onOpenProspectus={() => setProspectusModalOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenEnquiry={() => setEnquiryModalOpen(true)}
          onExploreClick={handleExploreClick}
        />

        {/* 2. About Saini Public School (Vision, Mission, Core Values, Approach) */}
        <AboutSection />

        {/* 3. Our Educational Journey (Foundation, Primary, Middle School) */}
        <EducationalJourney
          onEnquireNow={() => setEnquiryModalOpen(true)}
        />

        {/* 4. Learning & Student Development (6 Pedagogical Pillars) */}
        <LearningDevelopment />

        {/* 5. Campus & Facilities */}
        <FacilitiesSection />

        {/* 6. Admissions Section (Enquiry form, Eligibility, Procedure) */}
        <AdmissionsSection
          onOpenProspectus={() => setProspectusModalOpen(true)}
        />

        {/* 7. School Notices & Announcements */}
        <NoticesSection
          onSelectNotice={(notice) => setSelectedNotice(notice)}
        />

        {/* 8. Photo Gallery */}
        <GallerySection
          onSelectImage={(item) => setSelectedGalleryImage(item)}
        />

        {/* 9. Contact & Campus Visit */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenProspectus={() => setProspectusModalOpen(true)}
        onOpenEnquiry={() => setEnquiryModalOpen(true)}
      />

      {/* Interactive Modals */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
      />

      <ProspectusModal
        isOpen={prospectusModalOpen}
        onClose={() => setProspectusModalOpen(false)}
        onOpenEnquiry={() => {
          setProspectusModalOpen(false);
          setEnquiryModalOpen(true);
        }}
      />

      <NoticeModal
        notice={selectedNotice}
        onClose={() => setSelectedNotice(null)}
      />

      <LightboxModal
        item={selectedGalleryImage}
        onClose={() => setSelectedGalleryImage(null)}
      />
    </div>
  );
}

export default App;
