import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GraphicsSection from './components/GraphicsSection';
import VideoSection from './components/VideoSection';
import MotionGraphics from './components/MotionGraphics';
import ThreeDSection from './components/ThreeDSection';
import AboutSkills from './components/AboutSkills';
import ResumeSection from './components/ResumeSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';
import VideoModal from './components/VideoModal';
import SoftwareMarquee from './components/SoftwareMarquee';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxProject, setLightboxProject] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxList, setLightboxList] = useState([]);

  // Video Modal State
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [videoProject, setVideoProject] = useState(null);

  // Scroll Progress and Scrollspy Observer
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Section Observer
    const sectionIds = ['hero', 'graphics', 'video', 'motion', 'threed', 'about', 'resume', 'contact'];
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { threshold: 0.25 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  // Lightbox Handlers
  const handleOpenLightbox = (project, index, list) => {
    setLightboxProject(project);
    setLightboxIndex(index);
    setLightboxList(list);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
    setLightboxProject(null);
  };

  const handlePrevLightbox = () => {
    if (!lightboxList.length) return;
    const newIndex = (lightboxIndex - 1 + lightboxList.length) % lightboxList.length;
    setLightboxIndex(newIndex);
    setLightboxProject(lightboxList[newIndex]);
  };

  const handleNextLightbox = () => {
    if (!lightboxList.length) return;
    const newIndex = (lightboxIndex + 1) % lightboxList.length;
    setLightboxIndex(newIndex);
    setLightboxProject(lightboxList[newIndex]);
  };

  // Video Modal Handlers
  const handleOpenVideoModal = (project) => {
    setVideoProject(project);
    setVideoModalOpen(true);
  };

  const handleCloseVideoModal = () => {
    setVideoModalOpen(false);
    setVideoProject(null);
  };

  return (
    <div className="relative min-h-screen bg-[#F7F7F5] text-[#111111]">
      {/* Interactive Creative Cursor & Floating Bubble Particle Trail */}
      <CustomCursor />

      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 z-50 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Hierarchy */}
      <main>
        {/* 1. HERO */}
        <Hero />

        {/* 1.5. ANIMATED SOFTWARE MARQUEE SUITE */}
        <SoftwareMarquee />

        {/* 2. GRAPHICS DESIGN */}
        <GraphicsSection onOpenLightbox={handleOpenLightbox} />

        {/* 3. VIDEO EDITING */}
        <VideoSection onOpenVideoModal={handleOpenVideoModal} />

        {/* 4. MOTION GRAPHICS */}
        <MotionGraphics onOpenVideoModal={handleOpenVideoModal} />

        {/* 5. 3D MODELING */}
        <ThreeDSection onOpenLightbox={handleOpenLightbox} />

        {/* 6. ABOUT / SKILLS */}
        <AboutSkills />

        {/* 7. RESUME */}
        <ResumeSection />

        {/* 8. CONTACT / HIRE ME */}
        <ContactSection />
      </main>

      {/* 9. FOOTER */}
      <Footer />

      {/* Universal Interactive Lightbox */}
      <LightboxModal
        isOpen={lightboxOpen}
        project={lightboxProject}
        currentIndex={lightboxIndex}
        totalProjects={lightboxList.length}
        onClose={handleCloseLightbox}
        onPrev={handlePrevLightbox}
        onNext={handleNextLightbox}
      />

      {/* Universal Video Player Modal */}
      <VideoModal
        isOpen={videoModalOpen}
        project={videoProject}
        onClose={handleCloseVideoModal}
      />
    </div>
  );
}
