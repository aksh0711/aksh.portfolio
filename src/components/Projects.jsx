import React from 'react'
import projectImg from '../assets/project-placeholder.svg'
import videoIcon from '../assets/video-icon.svg'
import codeIcon from '../assets/code-icon.svg'

export default function Projects({ projects }) {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="grid">
          {projects.map((p, i) => (
            <article key={i} className="card">
              <img src={projectImg} alt={p.title} className="project-img" />
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="project-buttons">
                <a href={p.demoUrl} target="_blank" rel="noreferrer" className="btn small demo">
                  <img src={videoIcon} alt="Demo" /> Demo
                </a>
                <a href={p.url} target="_blank" rel="noreferrer" className="btn small code">
                  <img src={codeIcon} alt="Code" /> Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
