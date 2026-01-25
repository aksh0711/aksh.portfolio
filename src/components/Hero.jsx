import React from 'react'
import avatar from '../assets/aksh.jpg'

const GitHubIcon = (props) => (
    <svg {...props} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
    </svg>
  );
  
  const LinkedInIcon = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93-.91 0-1.38.61-1.62 1.21-.09.21-.11.5-.11.79V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.1 1.16 3.1 3.99z"></path>
    </svg>
  );
  
  const TwitterIcon = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
    </svg>
  );

export default function Hero({ social }) {
  return (
    <section className="hero">
        <div className="hero-inner">
            <img src={avatar} alt="Aksh Dalsaniya" className="profile-img" />
            <h1>
                Hi, I'm <span className="highlight">Aksh Dalsaniya</span>
            </h1>
            <p>Full stack Developer building realistic, accessible web experiences.</p>
            <p>Currently based in Vadodara, Gujarat, India.</p>
            <div className="hero-buttons">
                <a className="btn" href="#projects">View projects</a>
                <a className="btn ghost" href="#contact">Contact me</a>
            </div>
            <div className="socials">
                <a href={social.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                    <GitHubIcon />
                </a>
                <a href={social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <LinkedInIcon />
                </a>
                <a href={social.twitter} target="_blank" rel="noreferrer" aria-label="Twitter">
                    <TwitterIcon />
                </a>
            </div>
        </div>
    </section>
  )
}
