import React from 'react'
import githubIcon from '../assets/github-icon.svg'
import linkedinIcon from '../assets/linkedin-icon.svg'

export default function Footer({ social }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} Aksh Dalsaniya</div>
        <div className="small-links">
          <a href={social.github} target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href={social.linkedin} target="_blank" rel="noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  )
}
