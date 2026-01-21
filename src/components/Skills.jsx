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
  { name: 'Python', level: 60 },
  { name: 'SQL', level: 70 }
]

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend')
  const skills = activeTab === 'frontend' ? frontendSkills : backendSkills

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="tabs">
          <button className={activeTab === 'frontend' ? 'active' : ''} onClick={() => setActiveTab('frontend')}>Frontend</button>
          <button className={activeTab === 'backend' ? 'active' : ''} onClick={() => setActiveTab('backend')}>Backend</button>
        </div>
        <div className="skill-list">
          {skills.map((s) => (
            <div key={s.name} className="skill">
              <div className="skill-head">
                <strong>{s.name}</strong>
                <span>{s.level}%</span>
              </div>
              <div className="bar">
                <div className="fill" style={{ width: `${s.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
