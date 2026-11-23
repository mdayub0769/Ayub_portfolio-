import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBanner from './components/StatsBanner';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import DashboardShowcase from './components/DashboardShowcase';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import CustomCursor from './components/CustomCursor';
import confetti from 'canvas-confetti';
import { personalInfo } from './data/portfolioData';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const handleDownloadResume = () => {
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.65 },
      colors: ['#2563EB', '#7C3AED', '#06B6D4', '#10B981']
    });

    const link = document.createElement('a');
    link.href = personalInfo.resumePdf;
    link.download = 'Md_Ayub_Sheikh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-blue-600/15 selection:text-blue-900 font-sans">
      {/* Sleek Custom Desktop Cursor */}
      <CustomCursor />

      {/* Sticky Navigation Bar */}
      <Navbar 
        onOpenResume={() => setResumeModalOpen(true)} 
        onDownloadResume={handleDownloadResume} 
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero 
          onOpenResume={() => setResumeModalOpen(true)} 
          onDownloadResume={handleDownloadResume} 
        />

        {/* 2. Key Stats Counter Banner */}
        <StatsBanner />

        {/* 3. About Me Section */}
        <About />

        {/* 4. Technical Skills Section */}
        <Skills />

        {/* 5. Featured Projects Gallery */}
        <Projects />

        {/* 6. Career Timeline & Experience Section */}
        <Experience />

        {/* 7. Education & Professional Certifications */}
        <Certifications />

        {/* 8. Interactive Analytics Showcase ("Data in Action") */}
        <DashboardShowcase />

        {/* 9. Contact & Opportunities Section */}
        <Contact onDownloadResume={handleDownloadResume} />
      </main>

      {/* Footer */}
      <Footer />

      {/* PDF Resume Viewer & Downloader Modal */}
      <ResumeModal 
        isOpen={resumeModalOpen} 
        onClose={() => setResumeModalOpen(false)} 
      />
    </div>
  );
}
