import React, { useState, useEffect } from 'react'
import MainContent from './components/MainContent'
import About from './components/About'
import Project from './components/Project'
import Navbar from './components/Navbar'
import Experience from './components/Experience'

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [activeSection, setActiveSection] = useState('Portofolio')

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'about', name: 'About' },
        { id: 'project', name: 'Project' },
        { id: 'experience', name: 'Experience' }
      ];
      let current = 'Portofolio';
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80) {
            current = section.name;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <div className="w-full h-screen bg-[#07162c] relative">
      {/* halaman yang muncul ketika di screen besar */}
      {!isMobile && (
        <div className="flex relative">
          <div className='w-[50vw] fixed h-screen top-0 left-0'>
            <MainContent />
          </div>
          <div className='ml-[50vw] top-0 right-0 w-full relative'>
            <section id='about' className="relative">
              <About />
            </section>
            <section id='project' className="relative">
              <Project />
            </section>
            <section id='experience' className="relative">
              <Experience />
            </section>
          </div>
        </div>
      )}

      {/* halaman yang muncul ketika di screen kecil */}
      {isMobile && (
        <div className='w-full h-screen bg-[#07162c] relative'>
          <Navbar title={activeSection} />
          <MainContent />
          <section id='about' className="relative">
            <About />
          </section>
          <section id='project' className="relative">
            <Project />
          </section>
          <section id='experience' className="relative">
            <Experience />
          </section>
        </div>
      )}
    </div>
  )
}

export default App;
