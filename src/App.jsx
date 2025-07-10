import React from 'react'
import Sidebar from './components/Sidebar'
import About from './components/about'
import Skills from './components/Skill'

function App() {
  return (
    <div className="flex">
      <div className='w-[50vw] fixed h-screen top-0 left-0'>
        <Sidebar />
      </div>
      <div className='ml-[50vw] overflow-y-auto top-0 right-0w-full min-h-screen'>
        <section id='about'>
          <About />
        </section>
        <section id='skills'>
          <Skills />
        </section>
        
      </div>
    </div>
  )
}

export default App
