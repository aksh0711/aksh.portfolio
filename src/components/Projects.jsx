import React, { useState } from 'react'

export default function Projects({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <>
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="grid">
            {projects.map((p, i) => (
              <article key={i} className="card">
                <img src={p.imgUrl} alt={p.title} className="project-img" />
                <h3>{p.title}</h3>
                <div className="project-buttons">
                  <button 
                    onClick={() => setSelectedProject(i)} 
                    className="btn small"
                  >
                    Description
                  </button>
                  <a href={p.demoUrl} target="_blank" rel="noreferrer" className="btn small">
                    Demo
                  </a>
                  <a href={p.url} target="_blank" rel="noreferrer" className="btn small ghost">
                    Code
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedProject !== null && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close" 
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>
            <h2>{projects[selectedProject].title}</h2>
            <p>{projects[selectedProject].desc}</p>
            <div className="modal-buttons">
              <a 
                href={projects[selectedProject].demoUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="btn"
              >
                View Demo
              </a>
              <a 
                href={projects[selectedProject].url} 
                target="_blank" 
                rel="noreferrer" 
                className="btn ghost"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
