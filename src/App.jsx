import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import medicine from './assets/medicine.png'
import ai from './assets/ai5.png'
import healthcare from './assets/Healthcare.png'

const projects = [
  { title: 'Medicine Recommendation system', desc: 'A Medicine Recommendation System is a smart application that helps users find suitable medicines based on their symptoms or health conditions. The system analyzes the symptoms entered by the user and suggests possible medicines or treatments that may help relieve the problem. It uses a database of diseases, symptoms, and medicines to provide accurate recommendations.This system helps people get quick guidance about medicines and basic treatment options. It can also reduce the time spent searching for medicines and assist users in understanding which medicine may be helpful for their condition. However, it is mainly used for guidance and should not replace professional medical advice. ', url: 'https://github.com/aksh0711/Medicine-Recommendation-System', demoUrl: 'https://drive.google.com/file/d/1RGoocfzcdosW9QMBDU_BSpoe70HRp_uy/view?usp=drive_link', imgUrl: medicine },
  { title: 'AI Powered Finance Advisor Chatbot ', desc: 'An AI-Powered Finance Advisor Chatbot is a smart system that helps users manage their finances using artificial intelligence. It can provide advice on budgeting, saving money, tracking expenses, and making better financial decisions. Users can interact with the chatbot by asking questions, and it responds with useful financial suggestions.The chatbot analyzes user data such as income, expenses, and spending habits to give personalized recommendations. It can also help with investment guidance, bill reminders, and financial planning. This system makes financial management easier, faster, and more accessible for everyone.', url: 'https://github.com/aksh0711/AI---Powered-Personal-Finance-Advisor-Chatbot', demoUrl: 'https://drive.google.com/file/d/1cn0vJURLW3MO-ssScms2sAo-tUUZw3KG/view?usp=drive_link', imgUrl: ai },
  { title: 'Healthcare Management System', desc: 'A Healthcare Management System is a software application that helps manage hospital or clinic operations in an organized and efficient way. It allows doctors, staff, and administrators to handle patient records, appointments, billing, and medical history in one place.The system makes it easier to store and access patient information, schedule appointments, and manage daily activities. It reduces paperwork, saves time, and improves the overall quality of healthcare services. Patients can also benefit by getting quicker service and better communication with healthcare providers.', url: 'https://github.com/aksh0711/HealthcareManagementSystem', demoUrl: 'https://drive.google.com/file/d/15-5-yGAcAb2LWvAAGm37r7erGUeKrtDo/view?usp=drive_linkc ', imgUrl: healthcare }
  
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
