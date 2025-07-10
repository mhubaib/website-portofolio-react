import React from 'react'
import Sidebar from './components/Sidebar'
import About from './components/about'
import Project from './components/Project'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="w-full h-screen bg-[#07162c]">
      {/* halaman yang muncul ketika di screen besar */}
      <div className="hidden md:flex">
        <div className='w-[50vw] fixed h-screen top-0 left-0'>
          <Sidebar />
        </div>
        <div className='ml-[50vw] overflow-y-auto top-0 right-0 w-full min-h-screen'>
          <section id='about'>
            <About />
          </section>
          <section id='project'>
            <Project />
          </section>
        </div>
      </div>

      {/* halaman yang muncul ketika di screen kecil */}
      <div className='md:hidden'>
        <Navbar />
        <section id='about'>
          <About />
        </section>
        <section id='project'>
          <Project />
        </section>
      </div>
    </div>
  )
}

export default App;
