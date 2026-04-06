import React, { useState, useEffect } from 'react'

const projects = [
    {
        title : "Artify",
        description : "A web application that allows users to create and share their own digital art using a variety of tools and features.",
        tech : ["React", "Node.js", "Express", "Firebase"],
        github : "https://github.com/marxian-disciple/software_design_project"
    },

    {
        title : "Campus Tutoring App",
        description : "A web application that connects students with tutors on campus, allowing them to schedule sessions, share resources, and communicate effectively.",
        tech : ["React", "Node.js", "Express", "MongoDB"],
        github : "https://github.com/Pravs-Dev/Code_for_Team"
    },

    {
        title : "Soft Realations",
        description : "A web application that allows users to book services",
        tech : ["JavaScript", "EJS", "HTML", "CSS"],
        github : "https://github.com/2380759/softrelations"
    }
]

function Projects() {
  const [current, setCurrent] = useState(0)

  // Auto-play: moves to next slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % projects.length)
  }

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="slideshow-wrapper">

        {/* Left Arrow */}
        <button className="slide-arrow left" onClick={goPrev}>&#8249;</button>

        {/* Project Card */}
        <div className="slide-card">
          <h3>{projects[current].title}</h3>
          <p>{projects[current].description}</p>
          <div className="tech-stack">
            {projects[current].tech.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <a href={projects[current].github} target="_blank" rel="noreferrer">
            View on GitHub →
          </a>
        </div>

        {/* Right Arrow */}
        <button className="slide-arrow right" onClick={goNext}>&#8250;</button>

      </div>

      {/* Dots */}
      <div className="slide-dots">
        {projects.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>

    </section>
  )
}

export default Projects;