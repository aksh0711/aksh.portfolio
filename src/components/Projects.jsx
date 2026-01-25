import React from 'react'

export default function Projects({ projects }) {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid">
          {projects.map((p, i) => (
            <article key={i} className="card">
              <img src={`https://picsum.photos/seed/${p.title}/400/200`} alt={p.title} className="project-img" />
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="project-buttons">
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
  )
}
