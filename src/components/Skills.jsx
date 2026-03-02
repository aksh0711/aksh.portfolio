import React, { useState } from 'react'

const frontendSkills = [
  { name: 'React', level: 70 },
    { name: 'JavaScript', level: 75 },
  { name: 'CSS', level: 80 },
  { name: 'HTML', level: 85 }
]

const backendSkills = [
  { name: 'c#', level: 75 },
  { name: 'Express', level: 70 },
  { name: 'MongoDB', level: 65 },
  { name: 'SQL', level: 70 }
]

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend')
  const skills = activeTab === 'frontend' ? frontendSkills : backendSkills

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="tabs">
          <button className={activeTab === 'frontend' ? 'active' : ''} onClick={() => setActiveTab('frontend')}>Frontend</button>
          <button className={activeTab === 'backend' ? 'active' : ''} onClick={() => setActiveTab('backend')}>Backend</button>
        </div>
        <div className="skills-grid">
          {skills.map((s) => (
            <div key={s.name} className="skill-item">
                <span>{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
