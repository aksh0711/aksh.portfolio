import React from 'react'

export default function Navbar({ social }) {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <div className="brand">
          <a href="/">Aksh Dalsaniya</a>
        </div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <a className="resume" href="/resume.pdf" download>Resume</a>
        </div>
      </div>
    </header>
  )
}
