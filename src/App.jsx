import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

const projects = [
  { title: 'Medicine Recommendation system', desc: 'A python web-app ', url: 'https://github.com/aksh0711/Medicine-Recommendation-System', demoUrl: 'https://drive.google.com/file/d/1RGoocfzcdosW9QMBDU_BSpoe70HRp_uy/view?usp=drive_link' },
  { title: 'AI powered finance advisor chatbot ', desc: 'A .net core Web Application', url: 'https://github.com/aksh0711/AI---Powered-Personal-Finance-Advisor-Chatbot', demoUrl: 'https://drive.google.com/file/d/1cn0vJURLW3MO-ssScms2sAo-tUUZw3KG/view?usp=drive_link' },
  { title: 'Healthcare Management System', desc: 'A .net Core Web Application', url: 'https://github.com/aksh0711/HealthcareManagementSystem', demoUrl: 'https://drive.google.com/file/d/15-5-yGAcAb2LWvAAGm37r7erGUeKrtDo/view?usp=drive_linkc ' }
  
]

const social = {
  github: 'https://github.com/aksh0711',
  linkedin: 'https://www.linkedin.com/in/aksh-dalsaniya-79a52b274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  twitter: 'https://x.com/Aksh_Dalsaniya?t=kzM9qLbKEsGLAoSswlLuFQ&s=09',
}

export default function App() {
  return (
    <div className="app">
      <Navbar social={social} />
      <main>
        <Hero social={social} />
        <About />
        <Projects projects={projects} />
        <Skills />
        <Contact social={social} />
      </main>
      <Footer social={social} />
    </div>
  )
}
