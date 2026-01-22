import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <h2>Resume</h2>
        <p>Download my resume to learn more about my experience and skills.</p>
        <a href="/resume.pdf" download="Aksh_Dalsaniya_Resume.pdf" className="download-btn">
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;