import React from 'react'
import githubIcon from '../assets/github-icon.svg'
import linkedinIcon from '../assets/linkedin-icon.svg'
import twitterIcon from '../assets/twitter-icon.svg'

export default function Contact({ social }) {

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p>I'm currently open to new opportunities. If you have a project in mind or just want to say hi, feel free to reach out.</p>
        <a href="mailto:akshdalsaniya0711@gmail.com" className="btn">Say Hello</a>
        
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
