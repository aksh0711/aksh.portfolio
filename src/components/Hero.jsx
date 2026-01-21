import React from 'react'
import avatar from '../assets/aksh.jpg'
import githubIcon from '../assets/github-icon.svg'
import linkedinIcon from '../assets/linkedin-icon.svg'
import twitterIcon from '../assets/twitter-icon.svg'

export default function Hero({ social }) {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <h1>Hi, I'm Aksh Dalsaniya</h1>
          <p>Full stack Developer building realistic, accessible web experiences.</p>
          <p>Location: Vadodara, Gujarat, India</p>
          <p>
            <a className="btn" href="#projects">View projects</a>
            <a className="btn ghost" href="#contact">Contact me</a>
          </p>
          <div className="socials">
            <a href={social.github} target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" /> GitHub
            </a>
            <a href={social.linkedin} target="_blank" rel="noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" /> LinkedIn
            </a>
            <a href={social.twitter} target="_blank" rel="noreferrer">
              <img src={twitterIcon} alt="Twitter" /> Twitter
            </a>
          </div>
        </div>
        <img src={avatar} alt="Aksh Dalsaniya" className="profile-img" />
      </div>
    </section>
  )
}
