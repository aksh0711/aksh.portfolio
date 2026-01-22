import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

const projects = [
  { title: 'Awesome App', desc: 'A React app', url: 'https://github.com/youruser/awesome-app', demoUrl: 'https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing' },
  { title: 'Library', desc: 'Reusable components', url: 'https://github.com/youruser/library', demoUrl: 'https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing' },
  { title: 'Portfolio Website', desc: 'Personal portfolio built with React', url: 'https://github.com/youruser/portfolio', demoUrl: 'https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing' },
  { title: 'Task Manager', desc: 'Full-stack task management app', url: 'https://github.com/youruser/task-manager', demoUrl: 'https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing' },
]

const social = {
  github: 'https://github.com/aksh0711',
  linkedin: 'https://www.linkedin.com/in/aksh-dalsaniya-79a52b274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  twitter: 'https://x.com/Aksh_Dalsaniya?t=kzM9qLbKEsGLAoSswlLuFQ&s=09',
  instagram: 'https://www.instagram.com/aksh_dalsaniya?igsh=YTF3eHJoZWJ3MHl1'
}

export default function App() {
  return (
    <div className="app">
      <Navbar social={social} />
      <main>
        <Hero social={social} />
        <Projects projects={projects} />
        <Skills />
        <Contact social={social} />
      </main>
      <Footer social={social} />
    </div>
  )
}
