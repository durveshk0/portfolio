import { useEffect, useRef } from 'react'
import { FaArrowDown, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current)
      }
    }
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-name">
            Hi, I'm <span className="gradient-text">Durvesh Kanade</span>
          </h1>
          <h2 className="hero-tagline">
            AI/ML Engineer & Data Science Enthusiast
          </h2>
          <p className="hero-description">
            Transforming data into intelligent solutions. Passionate about machine learning, 
            deep learning, and data analytics. Building innovative projects that solve real-world 
            problems and drive meaningful impact.
          </p>
          <div className="hero-cta">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </button>
          </div>
          <div className="hero-social">
            <a 
              href="https://github.com/durveshk0" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com/in/durvesh-kanade-bb288b328" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="mailto:durveshkanade18@gmail.com" 
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card">
            <div className="code-snippet">
              <div className="code-line">
                <span className="code-keyword">import</span>{' '}
                <span className="code-string">machine_learning</span>
              </div>
              <div className="code-line">
                <span className="code-keyword">from</span>{' '}
                <span className="code-string">data_science</span>{' '}
                <span className="code-keyword">import</span>{' '}
                <span className="code-string">innovation</span>
              </div>
              <div className="code-line">
                <span className="code-variable">portfolio</span> ={' '}
                <span className="code-function">build</span>(
                <span className="code-string">'future'</span>)
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <FaArrowDown />
      </div>
    </section>
  )
}

export default Hero

