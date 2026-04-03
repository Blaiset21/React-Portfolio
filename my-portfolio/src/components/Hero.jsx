import React from 'react'

export default function Hero() {
  return (
    <section id="center" className="hero-section">
      <div className="hero-image-wrapper">
      </div>
      <div className="hero-copy">
        <h1>Junior Developer</h1>
        <p>
            Computer Science graduate from Solent University with hands-on experience in front-end 
            development and Java back-end engineering. I specialise in TypeScript and Java, and 
            I'm passionate about learning, building, and keeping up with the latest in tech — including AI.
        </p>
        <div className="hero-actions">
          <a className="button" href="#projects">
            View Projects
          </a>
          <a className="button button-outline" href="#contact">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}
