import React from 'react'
import githubIcon from '../assets/github-icon.svg'
import linkedinIcon from '../assets/linkedin-icon.svg'
import twitterIcon from '../assets/twitter-icon.svg'

export default function Contact({ social }) {

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact</h2>
        <p>If you'd like to work together, email me at <a href="mailto:you@example.com">akshdalsaniya0711@gmail.com</a> or use the links below.</p>
        <div className="social-row">
          <a href={social.github} target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href={social.linkedin} target="_blank" rel="noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href={social.twitter} target="_blank" rel="noreferrer">
            <img src={twitterIcon} alt="Twitter" />
          </a>
        </div>
        <form className="contact-form" action="https://formspree.io/f/xvgwlavd" method="POST">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </section>
  )
}
